<template>
  <v-container text-xs-center>
    <v-layout row wrap justify-center>
      <v-flex xs12 class="text-center">
        <h1>課題編集</h1>
      </v-flex>

      <v-flex xs5 mt-5>
        <v-card>
          <v-card-text>
            <v-form>
              <v-text-field
                v-model="issue.issueName"
                label="課題タイトル"
              ></v-text-field>
              <v-text-field
                v-model="issue.shareState"
                label="共有状況"
              ></v-text-field>
              <v-text-field
                v-model="issue.taskVolume"
                label="作業ボリューム"
              ></v-text-field>
              <v-text-field
                v-model="issue.effectivity"
                label="効果見込み"
              ></v-text-field>
              <v-text-field
                v-model="issue.priority"
                label="優先度"
              ></v-text-field>
              <v-text-field
                v-model="issue.status"
                label="実施状況"
              ></v-text-field>
              <v-text-field
                v-model="issue.incharge"
                label="担当者"
              ></v-text-field>
              <v-text-field
                v-model="issue.executeDate"
                label="実施日"
              ></v-text-field>
              <v-text-field
                v-model="issue.retroDate"
                label="振り返り日"
              ></v-text-field>
              <v-text-field
                v-model="issue.issueDetail"
                label="課題詳細"
              ></v-text-field>
              <v-text-field
                v-model="issue.solution"
                label="解決方法"
              ></v-text-field>
              <v-text-field v-model="issue.expect" label="期待"></v-text-field>
              <v-text-field v-model="issue.memos" label="メモ"></v-text-field>
              <v-text-field
                v-model="issue.direction"
                label="実施方針"
              ></v-text-field>
              <v-text-field v-model="issue.result" label="結果"></v-text-field>

              <div class="text-center">
                <v-btn @click="$router.push({ name: 'issues' })"
                  >キャンセル</v-btn
                >
                <v-btn color="info" class="ml-2">保存</v-btn>
              </div>
            </v-form>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      issue: {},
    };
  },
};
</script>
