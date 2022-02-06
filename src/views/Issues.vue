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
        <v-card mt-12 v-for="issue in issues" :key="issue.issue_id">
          <div class="my-9" />
          <v-card-title>{{issue.issueName}}</v-card-title>
          <div class="text-left">
            <v-chip small text-small class="ma-2" color="indigo" text-color="white">
              <v-avatar small left>
                <v-icon small>mdi-account-circle</v-icon>
              </v-avatar>
              {{issue.incharge}}
            </v-chip>
            <v-chip small text-small class="ma-2" color="indigo" text-color="white">
              <v-avatar small left>
                <v-icon small>mdi-run-fast</v-icon>
              </v-avatar>
              {{issue.priority}}
            </v-chip>
            <v-chip small text-small class="ma-2" color="indigo" text-color="white">
              <v-avatar small left>
                <v-icon small>mdi-diamond-stone</v-icon>
              </v-avatar>
              {{issue.effectivity}}
            </v-chip>
          </div>
          <v-card-text>
            <div class="my-4 text-subtitle-1">{{issue.solution}}</div>
          </v-card-text>

          <router-link :to="{ name: 'issue_edit', params: { issue_id: issue.id } }">
            <v-icon small class="mr-2">mdi-pencil</v-icon>
          </router-link>
          <v-icon small class="mr-2" @click="deleteConfirm(issue.id)">mdi-delete</v-icon>
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
        { text: "課題タイトル", value: "issueName" },
        { text: "共有状況", value: "shareState" },
        { text: "作業ボリューム", value: "taskVolume" },
        { text: "効果見込み", value: "effectivity" },
        { text: "優先度", value: "priority" },
        { text: "実施状況", value: "status" },
        { text: "担当", value: "incharge" },
        { text: "実施日", value: "executeDate" },
        { text: "振り返り日", value: "retroDate" },
        { text: "課題概要", value: "issueDetail" },
        { text: "解決方法", value: "solution" },
        { text: "期待", value: "expect" },
        { text: "メモ", value: "memo" },
        { text: "実施方針", value: "direction" },
        { text: "結果", value: "result" },
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
