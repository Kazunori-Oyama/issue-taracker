<template>
  <v-container text-xs-center justify-center>
    <v-layout row wrap>
      <v-flex xs12>
        <h1>課題リスト</h1>
      </v-flex>

      <v-flex xs12 mt-5 mr-5 text-right>
        <router-link :to="{ name: 'issue_edit' }">
          <v-btn color="info">課題追加</v-btn>
        </router-link>
      </v-flex>
      <!-- <v-data-table :headers="headers" :items="issues">
          <template v-slot:item.action="{ item }">
            <router-link
              :to="{ name: 'issue_edit', params: { issue_id: item.id } }"
            >
              <v-icon small class="mr-2">mdi-pencil</v-icon>
            </router-link>
            <v-icon small class="mr-2" @click="deleteConfirm(item.id)"
              >mdi-delete</v-icon
            >
          </template>
      </v-data-table>-->
      <v-flex xs12 mt-3 justify-center>
        <v-card v-for="issue in issues" :key="issue.issue_id" class="mt-12">
          <v-container>
            <v-row class="indigo darken-4">
              <v-col class="d-flex flex-row-reverse">
                <router-link
                  :to="{ name: 'issue_edit', params: { issue_id: issue.id } }"
                  class="white--text"
                >
                  <v-icon small class="mr-2" color="white">mdi-pencil</v-icon>
                </router-link>
                <v-icon small class="mr-2" color="white" @click="deleteConfirm(issue.id)">mdi-delete</v-icon>
              </v-col>
            </v-row>
            <v-card-title>{{issue.issueName}}</v-card-title>
            <v-card-text>
              <v-chip-group column>
                <v-chip small text-small outlined class="mr-2" color="indigo" text-color="indigo">
                  <v-avatar small left>
                    <v-icon small>mdi-bullhorn-outline</v-icon>
                  </v-avatar>
                  {{issue.shareState}}
                </v-chip>
                <v-chip small text-small outlined class="mr-2" color="indigo" text-color="indigo">
                  <v-avatar small left>
                    <v-icon small>mdi-scale</v-icon>
                  </v-avatar>
                  {{issue.taskVolume}}
                </v-chip>
                <v-chip small text-small outlined class="mr-2" color="indigo" text-color="indigo">
                  <v-avatar small left>
                    <v-icon small>mdi-diamond-stone</v-icon>
                  </v-avatar>
                  {{issue.effectivity}}
                </v-chip>

                <v-chip small outlined text-small class="mr-2" color="indigo" text-color="indigo">
                  <v-avatar small left>
                    <v-icon small>mdi-account-circle</v-icon>
                  </v-avatar>
                  {{issue.incharge}}
                </v-chip>
                <v-chip small text-small outlined class="mr-2" color="indigo" text-color="indigo">
                  <v-avatar small left>
                    <v-icon small>mdi-run-fast</v-icon>
                  </v-avatar>
                  {{issue.priority}}
                </v-chip>
                <v-chip small text-small outlined class="mr-2" color="indigo" text-color="indigo">
                  <v-avatar small left>
                    <v-icon small>mdi-progress-check</v-icon>
                  </v-avatar>
                  {{issue.status}}
                </v-chip>
                <v-chip small text-small outlined class="mr-2" color="indigo" text-color="indigo">
                  <v-avatar small left>
                    <v-icon small>mdi-calendar-clock-outline</v-icon>
                  </v-avatar>
                  {{issue.executeDate}}
                </v-chip>
                <v-chip small text-small outlined class="mr-2" color="indigo" text-color="indigo">
                  <v-avatar small left>
                    <v-icon small>mdi-calendar-check-outline</v-icon>
                  </v-avatar>
                  {{issue.retroDate}}
                </v-chip>
              </v-chip-group>
            </v-card-text>
            <v-card-text>
              <div class="my-4 text-subtitle-1">課題概要：{{issue.issueDetail}}</div>
              <div class="my-4 text-subtitle-1">期待・学習：{{issue.expect}}</div>
              <div class="my-4 text-subtitle-1">解決方法：{{issue.solution}}</div>
              <div class="my-4 text-subtitle-1">メモ：{{issue.memo}}</div>
              <div class="my-4 text-subtitle-1">実施方針：{{issue.direction}}</div>
              <div class="my-4 text-subtitle-1">結果：{{issue.result}}</div>
            </v-card-text>
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapActions } from "vuex";
export default {
  created() {
    this.issues = this.$store.state.issues;
  },
  data() {
    return {
      loading: false,
      selection: 1,
      headers: [
        { text: "課題タイトル", value: "issueName" }, //ToDo:追加済み
        { text: "共有状況", value: "shareState" }, //ToDo:追加済み
        { text: "作業ボリューム", value: "taskVolume" }, //ToDo:追加済み
        { text: "効果見込み", value: "effectivity" }, //ToDo:追加済み
        { text: "優先度", value: "priority" }, //ToDo:追加済み
        { text: "実施状況", value: "status" }, //ToDo:追加済み
        { text: "担当", value: "incharge" }, //ToDo:追加済み
        { text: "実施日", value: "executeDate" },
        { text: "振り返り日", value: "retroDate" },
        { text: "課題概要", value: "issueDetail" }, //ToDo:追加済み
        { text: "解決方法", value: "solution" }, //ToDo:追加済み
        { text: "期待", value: "expect" }, //ToDo:追加済み
        { text: "メモ", value: "memo" }, //ToDo:追加済み
        { text: "実施方針", value: "direction" }, //ToDo:追加済み
        { text: "結果", value: "result" }, //ToDo:追加済み
        { text: "操作", value: "action", sortable: false }
      ],
      issues: []
    };
  },
  methods: {
    reserve() {
      this.loading = true;

      setTimeout(() => (this.loading = false), 2000);
    },
    deleteConfirm(id) {
      if (confirm("削除してよろしいですか？")) {
        this.deleteIssue({ id });
      }
    },
    ...mapActions(["deleteIssue"])
  }
};
</script>
<style scoped lang="scss">
a {
  text-decoration: none;
}
</style>
