<template>
  <v-container text-xs-center>
    <v-layout row wrap justify-center>
      <v-flex xs12 class="text-center">
        <h1>課題編集</h1>
      </v-flex>

      <v-flex xs mt-5>
        <v-card>
          <v-card-text>
            <v-form>
              <v-text-field v-model="issue.issueName" label="課題タイトル"></v-text-field>
              <v-select :items="shareStates" v-model="issue.shareState" label="共有状況"></v-select>
              <v-subheader>作業ボリューム見込み</v-subheader>
              <v-slider
                v-model="issue.taskVolume"
                class="align-center"
                :max="max"
                :min="min"
                hide-details
              >
                <template v-slot:append>
                  <v-text-field
                    v-model="issue.taskVolume"
                    class="mt-0 pt-0"
                    hide-details
                    single-line
                    type="number"
                    style="width: 60px"
                  ></v-text-field>
                </template>
              </v-slider>

              <v-subheader>効果見込み</v-subheader>
              <v-slider
                v-model="issue.effectivity"
                class="align-center"
                :max="max"
                :min="min"
                hide-details
              >
                <template v-slot:append>
                  <v-text-field
                    v-model="issue.effectivity"
                    class="mt-0 pt-0"
                    hide-details
                    single-line
                    type="number"
                    style="width: 60px"
                  ></v-text-field>
                </template>
              </v-slider>

              <v-subheader>優先度</v-subheader>
              <v-slider
                v-model="issue.priority"
                class="align-center"
                :max="max"
                :min="min"
                hide-details
              >
                <template v-slot:append>
                  <v-text-field
                    v-model="issue.priority"
                    class="mt-0 pt-0"
                    hide-details
                    single-line
                    type="number"
                    style="width: 60px"
                  ></v-text-field>
                </template>
              </v-slider>
              <v-select :items="status" v-model="issue.status" label="実施状況"></v-select>
              <v-text-field v-model="issue.incharge" label="担当者"></v-text-field>

              <v-dialog
                ref="dialog"
                v-model="issue.executeDateModal"
                :return-value.sync="issue.executeDate"
                persistent
                width="290px"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    v-model="issue.executeDate"
                    label="実施日"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker v-model="executeDate" scrollable>
                  <v-spacer></v-spacer>
                  <v-btn text color="primary" @click="executeDateModal = false">Cancel</v-btn>
                  <v-btn text color="primary" @click="$refs.dialog.save(executeDate)">OK</v-btn>
                </v-date-picker>
              </v-dialog>

              <v-dialog
                ref="dialog2"
                v-model="issue.retroDateModal"
                :return-value.sync="issue.retroDate"
                persistent
                width="290px"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    v-model="issue.retroDate"
                    label="振り返り日"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker v-model="retroDate" scrollable>
                  <v-spacer></v-spacer>
                  <v-btn text color="primary" @click="retroDateModal = false">Cancel</v-btn>
                  <v-btn text color="primary" @click="$refs.dialog2.save(retroDate)">OK</v-btn>
                </v-date-picker>
              </v-dialog>
              <v-textarea
                auto-grow
                row-height="3"
                name="issueDetail"
                label="課題詳細"
                value
                hint="Hint text"
                v-model="issue.issueDetail"
              ></v-textarea>
              <v-textarea
                auto-grow
                row-height="3"
                name="solution"
                label="解決方法"
                value
                hint="Hint text"
                v-model="issue.solution"
              ></v-textarea>
              <v-textarea
                auto-grow
                row-height="3"
                name="expect"
                label="期待"
                value
                hint="Hint text"
                v-model="issue.expect"
              ></v-textarea>
              <v-textarea
                auto-grow
                row-height="3"
                name="memo"
                label="メモ"
                value
                hint="Hint text"
                v-model="issue.memo"
              ></v-textarea>
              <v-textarea
                auto-grow
                row-height="3"
                name="direction"
                label="方針"
                value
                hint="Hint text"
                v-model="issue.direction"
              ></v-textarea>
              <v-textarea
                auto-grow
                row-height="3"
                name="result"
                label="結果"
                value
                hint="Hint text"
                v-model="issue.result"
              ></v-textarea>
              <div class="text-center">
                <v-btn @click="$router.push({ name: 'issues' })">キャンセル</v-btn>
                <v-btn color="info" class="ml-2" @click="submit()">保存</v-btn>
              </div>
            </v-form>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapActions } from "vuex";
export default {
  created() {
    if (!this.$route.params.issue_id) return;
    const issue = this.$store.getters.getIssueById(this.$route.params.issue_id);
    if (issue) {
      this.issue = issue;
    } else {
      this.$router.push({ name: "issues" });
    }
  },
  data() {
    return {
      shareStates: ["未共有", "共有済み", "議論済み"],
      status: [
        "未検討",
        "事前調査",
        "検討中",
        "実施中",
        "実施済",
        "実施しない",
        "検証済み"
      ],

      min: 0,
      max: 6,
      slider: 0,
      executeDate: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10),
      retroDate: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10),

      executeDateModal: false,
      retroDateModal: false,

      issue: {}
    };
  },

  methods: {
    submit() {
      if (this.$route.params.issue_id) {
        this.updateIssue({
          id: this.$route.params.issue_id,
          issue: this.issue
        });
      } else {
        this.addIssue(this.issue);
      }
      this.$router.push({ name: "Issues" });
      this.issue = {};
    },
    ...mapActions(["addIssue", "updateIssue"])
  }
};
</script>
