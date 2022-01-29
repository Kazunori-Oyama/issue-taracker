<template>
  <v-container text-xs-center justify-center>
    <v-layout row wrap>
      <v-flex xs12>
        <h1>マーケティング課題リスト</h1>
      </v-flex>

      <v-flex xs12 mt-5 justify-center>
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
            <td class="text-xs-left">{{ props.item.memos }}</td>
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
        { text: "実施日", value: "excuteDate" },
        { text: "振り返り日", value: "retroDate" },
        { text: "課題概要", value: "issueDetail" },
        { text: "解決方法", value: "solution" },
        { text: "期待", value: "expect" },
        { text: "メモ", value: "memos" },
        { text: "実施方針", value: "direction" },
        { text: "結果", value: "result" },
      ],
      issues: [
        {
          issueName: "資料ダウンロードのコンバージョン設定",
          shareState: "共有済み",
          taskVolume: "6",
          effectivity: "6",
          priority: "1",
          status: "ToDo",
          incharge: "大山",
          excuteDate: "12/1",
          retroDate: "1/1",
          issueDetail:
            "コンテンツが少いため、強化することにより集客および意思決定に改善の余地がある",
          solution: "各企業へ打診し、掲載する",
          expect:
            "コンテンツが拡充されることにより、より信頼性が高まりCV率に寄与する。",
          memos:
            "申込書にチェック項目を作るなど（この場合、掲載を拒否するチェックの方がよい）",
          direction: "未定",
          result: "PV10000増加",
        },
        {
          issueName: "資料ダウンロードのコンバージョン設定",
          shareState: "共有済み",
          taskVolume: "6",
          effectivity: "6",
          priority: "1",
          status: "ToDo",
          incharge: "大山",
          excuteDate: "12/1",
          retroDate: "1/1",
          issueDetail:
            "コンテンツが少いため、強化することにより集客および意思決定に改善の余地がある",
          solution: "各企業へ打診し、掲載する",
          expect:
            "コンテンツが拡充されることにより、より信頼性が高まりCV率に寄与する。",
          memos:
            "申込書にチェック項目を作るなど（この場合、掲載を拒否するチェックの方がよい）",
          direction: "未定",
          result: "PV10000増加",
        },
        {
          issueName: "資料ダウンロードのコンバージョン設定",
          shareState: "共有済み",
          taskVolume: "6",
          effectivity: "6",
          priority: "1",
          status: "ToDo",
          incharge: "大山",
          excuteDate: "12/1",
          retroDate: "1/1",
          issueDetail:
            "コンテンツが少いため、強化することにより集客および意思決定に改善の余地がある",
          solution: "各企業へ打診し、掲載する",
          expect:
            "コンテンツが拡充されることにより、より信頼性が高まりCV率に寄与する。",
          memos:
            "申込書にチェック項目を作るなど（この場合、掲載を拒否するチェックの方がよい）",
          direction: "未定",
          result: "PV10000増加",
        },
      ],
    };
  },
};
</script>
