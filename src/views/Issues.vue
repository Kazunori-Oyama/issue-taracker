<template>
  <v-container text-xs-center justify-center>
    <v-layout row wrap>
      <v-flex xs12>
        <h1>マーケティング課題リスト</h1>
      </v-flex>

      <v-flex xs12 mt-5 mr-5 text-right>
        <router-link :to="{ name: 'issue_edit' }">
          <v-btn color="info"> 課題追加 </v-btn>
        </router-link>
      </v-flex>

      <v-flex xs12 mt-3 justify-center>
        <v-data-table :headers="headers" :items="issues">
          <template v-slot:items="props">
            <td class="text-xs-left">{{ props.item.issueName }}</td>
            <td class="text-xs-left">{{ props.item.issueDetail }}</td>
            <td class="text-xs-left">{{ props.item.shareState }}</td>
            <td class="text-xs-left">{{ props.item.taskVolume }}</td>
            <td class="text-xs-left">{{ props.item.effectivity }}</td>
            <td class="text-xs-left">{{ props.item.priority }}</td>
            <td class="text-xs-left">{{ props.item.status }}</td>
            <td class="text-xs-left">{{ props.item.incharge }}</td>
            <td class="text-xs-left">{{ props.item.executeDate }}</td>
            <td class="text-xs-left">{{ props.item.retroDate }}</td>
            <td class="text-xs-left">{{ props.item.issuePoint }}</td>
            <td class="text-xs-left">{{ props.item.solution }}</td>
            <td class="text-xs-left">{{ props.item.expect }}</td>
            <td class="text-xs-left">{{ props.item.memo }}</td>
            <td class="text-xs-left">{{ props.item.direction }}</td>
            <td class="text-xs-left">{{ props.item.result }}</td>
          </template>
        </v-data-table>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  created() {
    this.issues = this.$store.state.issues;
  },
  data() {
    return {
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
      ],
      issues: [],
    };
  },
};
</script>
