<template>
  <v-container fluid text-xs-center justify-center>
    <v-layout row wrap>
      <v-flex xs12>
        <h1>課題リスト</h1>
      </v-flex>
      <template>
        <v-col xs12>
          <v-card>
            <v-tabs v-model="tab" background-color="indigo darken-4" centered dark icons-and-text>
              <v-tabs-slider></v-tabs-slider>

              <v-tab href="#tab-1">
                ToDo
                <v-icon>mdi-heart-cog-outline</v-icon>
              </v-tab>

              <v-tab href="#tab-2">
                Doing
                <v-icon>mdi-desktop-mac-dashboard</v-icon>
              </v-tab>

              <v-tab href="#tab-3">
                Done
                <v-icon>mdi-star-check-outline</v-icon>
              </v-tab>

              <v-tab href="#tab-4">
                Checked
                <v-icon>mdi-chart-line</v-icon>
              </v-tab>
            </v-tabs>
            <v-container>
              <v-row class="d-flex justify-center">
                <v-col class="text-center">
                  <v-btn
                    class="ma-2"
                    outlined
                    rounded
                    color="indigo"
                    @click="sortedItemsByPriority"
                  >
                    <v-icon left>mdi-run-fast</v-icon>優先度で並べ替え
                  </v-btn>
                </v-col>
                <v-col class="text-center">
                  <v-btn
                    class="ma-2"
                    outlined
                    rounded
                    color="indigo"
                    @click="sortedItemsByEffectivity"
                  >
                    <v-icon left>mdi-diamond-stone</v-icon>効果で並べ替え
                  </v-btn>
                </v-col>
                <v-col class="text-center">
                  <v-btn
                    class="ma-2"
                    outlined
                    rounded
                    color="indigo"
                    @click="sortedItemsByTaskVolume"
                  >
                    <v-icon left>mdi-scale</v-icon>作業量で並べ替え
                  </v-btn>
                </v-col>
              </v-row>
            </v-container>
            <v-tabs-items v-model="tab">
              <v-tab-item v-for="i in 4" :key="i" :value="'tab-' + i">
                <template v-for="(issue,index) in issues">
                  <template v-if="i=== 1">
                    <template
                      v-if="issue.status === '未検討' || issue.status === '事前調査' ||issue.status === '検討中'"
                    >
                      <v-card
                        elevation="3"
                        :key="issue.issue_id"
                        :row-num="'tab-'+ i + '-'+index"
                        class="mt-12 mr-9 ml-9 grey--text text--darken-4"
                      >
                        <v-col class="grey lighten-5">
                          <v-row>
                            <v-col cols="11">
                              <v-card-title>{{issue.issueName}}</v-card-title>
                              <v-card-text>
                                <v-chip-group column>
                                  <v-chip
                                    small
                                    text-small
                                    outlined
                                    class="mr-2"
                                    color="indigo"
                                    text-color="indigo"
                                  >
                                    <v-avatar small left>
                                      <v-icon small>mdi-bullhorn-outline</v-icon>
                                    </v-avatar>
                                    {{issue.shareState}}
                                  </v-chip>
                                  <v-chip
                                    small
                                    text-small
                                    outlined
                                    class="mr-2"
                                    color="indigo"
                                    text-color="indigo"
                                  >
                                    <v-avatar small left>
                                      <v-icon small>mdi-scale</v-icon>
                                    </v-avatar>
                                    {{issue.taskVolume}}
                                  </v-chip>
                                  <v-chip
                                    small
                                    text-small
                                    outlined
                                    class="mr-2"
                                    color="indigo"
                                    text-color="indigo"
                                  >
                                    <v-avatar small left>
                                      <v-icon small>mdi-diamond-stone</v-icon>
                                    </v-avatar>
                                    {{issue.effectivity}}
                                  </v-chip>

                                  <v-chip
                                    small
                                    outlined
                                    text-small
                                    class="mr-2"
                                    color="indigo"
                                    text-color="indigo"
                                  >
                                    <v-avatar small left>
                                      <v-icon small>mdi-account-circle</v-icon>
                                    </v-avatar>
                                    {{issue.incharge}}
                                  </v-chip>
                                  <v-chip
                                    small
                                    text-small
                                    outlined
                                    class="mr-2"
                                    color="indigo"
                                    text-color="indigo"
                                  >
                                    <v-avatar small left>
                                      <v-icon small>mdi-run-fast</v-icon>
                                    </v-avatar>
                                    {{issue.priority}}
                                  </v-chip>
                                  <v-chip
                                    small
                                    text-small
                                    outlined
                                    class="mr-2"
                                    color="indigo"
                                    text-color="indigo"
                                  >
                                    <v-avatar small left>
                                      <v-icon small>mdi-progress-check</v-icon>
                                    </v-avatar>
                                    {{issue.status}}
                                  </v-chip>
                                  <v-chip
                                    small
                                    text-small
                                    outlined
                                    class="mr-2"
                                    color="indigo"
                                    text-color="indigo"
                                  >
                                    <v-avatar small left>
                                      <v-icon small>mdi-calendar-clock-outline</v-icon>
                                    </v-avatar>
                                    {{issue.executeDate}}
                                  </v-chip>
                                  <v-chip
                                    small
                                    text-small
                                    outlined
                                    class="mr-2"
                                    color="indigo"
                                    text-color="indigo"
                                  >
                                    <v-avatar small left>
                                      <v-icon small>mdi-calendar-check-outline</v-icon>
                                    </v-avatar>
                                    {{issue.retroDate}}
                                  </v-chip>
                                </v-chip-group>
                              </v-card-text>
                            </v-col>
                            <v-col cols="1" class="d-flex align-center">
                              <router-link
                                :to="{ name: 'issue_edit', params: { issue_id: issue.id } }"
                                class="indigo--text text--darken-4"
                              >
                                <v-icon small class="mr-2" color="indigo">mdi-pencil</v-icon>
                              </router-link>
                              <v-icon
                                small
                                class="mr-2"
                                color="indigo darken-4"
                                @click="deleteConfirm(issue.id)"
                              >mdi-delete</v-icon>
                            </v-col>
                          </v-row>
                        </v-col>

                        <v-card-text>
                          <div class="my-4 text-subtitle-1">課題概要：{{issue.issueDetail}}</div>
                          <div class="my-4 text-subtitle-1">期待・学習：{{issue.expect}}</div>
                          <div class="my-4 text-subtitle-1">解決方法：{{issue.solution}}</div>
                          <div class="my-4 text-subtitle-1">メモ：{{issue.memo}}</div>
                          <div class="my-4 text-subtitle-1">実施方針：{{issue.direction}}</div>
                          <div class="my-4 text-subtitle-1">結果：{{issue.result}}</div>
                        </v-card-text>
                      </v-card>
                    </template>
                  </template>
                  <template v-if="i===2 && issue.status==='実施中'">
                    <v-card
                      elevation="3"
                      :key="issue.issue_id"
                      :row-num="'tab-'+ i + '-'+index"
                      class="mt-12 mr-9 ml-9 grey--text text--darken-4"
                    >
                      <v-col class="grey lighten-5">
                        <v-row>
                          <v-col cols="11">
                            <v-card-title>{{issue.issueName}}</v-card-title>
                            <v-card-text>
                              <v-chip-group column>
                                <v-chip
                                  small
                                  text-small
                                  outlined
                                  class="mr-2"
                                  color="indigo"
                                  text-color="indigo"
                                >
                                  <v-avatar small left>
                                    <v-icon small>mdi-bullhorn-outline</v-icon>
                                  </v-avatar>
                                  {{issue.shareState}}
                                </v-chip>
                                <v-chip
                                  small
                                  text-small
                                  outlined
                                  class="mr-2"
                                  color="indigo"
                                  text-color="indigo"
                                >
                                  <v-avatar small left>
                                    <v-icon small>mdi-scale</v-icon>
                                  </v-avatar>
                                  {{issue.taskVolume}}
                                </v-chip>
                                <v-chip
                                  small
                                  text-small
                                  outlined
                                  class="mr-2"
                                  color="indigo"
                                  text-color="indigo"
                                >
                                  <v-avatar small left>
                                    <v-icon small>mdi-diamond-stone</v-icon>
                                  </v-avatar>
                                  {{issue.effectivity}}
                                </v-chip>

                                <v-chip
                                  small
                                  outlined
                                  text-small
                                  class="mr-2"
                                  color="indigo"
                                  text-color="indigo"
                                >
                                  <v-avatar small left>
                                    <v-icon small>mdi-account-circle</v-icon>
                                  </v-avatar>
                                  {{issue.incharge}}
                                </v-chip>
                                <v-chip
                                  small
                                  text-small
                                  outlined
                                  class="mr-2"
                                  color="indigo"
                                  text-color="indigo"
                                >
                                  <v-avatar small left>
                                    <v-icon small>mdi-run-fast</v-icon>
                                  </v-avatar>
                                  {{issue.priority}}
                                </v-chip>
                                <v-chip
                                  small
                                  text-small
                                  outlined
                                  class="mr-2"
                                  color="indigo"
                                  text-color="indigo"
                                >
                                  <v-avatar small left>
                                    <v-icon small>mdi-progress-check</v-icon>
                                  </v-avatar>
                                  {{issue.status}}
                                </v-chip>
                                <v-chip
                                  small
                                  text-small
                                  outlined
                                  class="mr-2"
                                  color="indigo"
                                  text-color="indigo"
                                >
                                  <v-avatar small left>
                                    <v-icon small>mdi-calendar-clock-outline</v-icon>
                                  </v-avatar>
                                  {{issue.executeDate}}
                                </v-chip>
                                <v-chip
                                  small
                                  text-small
                                  outlined
                                  class="mr-2"
                                  color="indigo"
                                  text-color="indigo"
                                >
                                  <v-avatar small left>
                                    <v-icon small>mdi-calendar-check-outline</v-icon>
                                  </v-avatar>
                                  {{issue.retroDate}}
                                </v-chip>
                              </v-chip-group>
                            </v-card-text>
                          </v-col>
                          <v-col cols="1" class="d-flex align-center">
                            <router-link
                              :to="{ name: 'issue_edit', params: { issue_id: issue.id } }"
                              class="indigo--text text--darken-4"
                            >
                              <v-icon small class="mr-2" color="indigo">mdi-pencil</v-icon>
                            </router-link>
                            <v-icon
                              small
                              class="mr-2"
                              color="indigo darken-4"
                              @click="deleteConfirm(issue.id)"
                            >mdi-delete</v-icon>
                          </v-col>
                        </v-row>
                      </v-col>

                      <v-card-text>
                        <div class="my-4 text-subtitle-1">課題概要：{{issue.issueDetail}}</div>
                        <div class="my-4 text-subtitle-1">期待・学習：{{issue.expect}}</div>
                        <div class="my-4 text-subtitle-1">解決方法：{{issue.solution}}</div>
                        <div class="my-4 text-subtitle-1">メモ：{{issue.memo}}</div>
                        <div class="my-4 text-subtitle-1">実施方針：{{issue.direction}}</div>
                        <div class="my-4 text-subtitle-1">結果：{{issue.result}}</div>
                      </v-card-text>
                    </v-card>
                  </template>
                  <template v-if="i===3 && issue.status==='実施済'">
                    <v-card
                      elevation="3"
                      :key="issue.issue_id"
                      :row-num="'tab-'+ i + '-'+index"
                      class="mt-12 mr-9 ml-9 grey--text text--darken-4"
                    >
                      <v-col class="grey lighten-5">
                        <v-row>
                          <v-col cols="11">
                            <v-card-title>{{issue.issueName}}</v-card-title>
                            <v-card-text>
                              <v-chip-group column>
                                <v-chip
                                  small
                                  text-small
                                  outlined
                                  class="mr-2"
                                  color="indigo"
                                  text-color="indigo"
                                >
                                  <v-avatar small left>
                                    <v-icon small>mdi-bullhorn-outline</v-icon>
                                  </v-avatar>
                                  {{issue.shareState}}
                                </v-chip>
                                <v-chip
                                  small
                                  text-small
                                  outlined
                                  class="mr-2"
                                  color="indigo"
                                  text-color="indigo"
                                >
                                  <v-avatar small left>
                                    <v-icon small>mdi-scale</v-icon>
                                  </v-avatar>
                                  {{issue.taskVolume}}
                                </v-chip>
                                <v-chip
                                  small
                                  text-small
                                  outlined
                                  class="mr-2"
                                  color="indigo"
                                  text-color="indigo"
                                >
                                  <v-avatar small left>
                                    <v-icon small>mdi-diamond-stone</v-icon>
                                  </v-avatar>
                                  {{issue.effectivity}}
                                </v-chip>

                                <v-chip
                                  small
                                  outlined
                                  text-small
                                  class="mr-2"
                                  color="indigo"
                                  text-color="indigo"
                                >
                                  <v-avatar small left>
                                    <v-icon small>mdi-account-circle</v-icon>
                                  </v-avatar>
                                  {{issue.incharge}}
                                </v-chip>
                                <v-chip
                                  small
                                  text-small
                                  outlined
                                  class="mr-2"
                                  color="indigo"
                                  text-color="indigo"
                                >
                                  <v-avatar small left>
                                    <v-icon small>mdi-run-fast</v-icon>
                                  </v-avatar>
                                  {{issue.priority}}
                                </v-chip>
                                <v-chip
                                  small
                                  text-small
                                  outlined
                                  class="mr-2"
                                  color="indigo"
                                  text-color="indigo"
                                >
                                  <v-avatar small left>
                                    <v-icon small>mdi-progress-check</v-icon>
                                  </v-avatar>
                                  {{issue.status}}
                                </v-chip>
                                <v-chip
                                  small
                                  text-small
                                  outlined
                                  class="mr-2"
                                  color="indigo"
                                  text-color="indigo"
                                >
                                  <v-avatar small left>
                                    <v-icon small>mdi-calendar-clock-outline</v-icon>
                                  </v-avatar>
                                  {{issue.executeDate}}
                                </v-chip>
                                <v-chip
                                  small
                                  text-small
                                  outlined
                                  class="mr-2"
                                  color="indigo"
                                  text-color="indigo"
                                >
                                  <v-avatar small left>
                                    <v-icon small>mdi-calendar-check-outline</v-icon>
                                  </v-avatar>
                                  {{issue.retroDate}}
                                </v-chip>
                              </v-chip-group>
                            </v-card-text>
                          </v-col>
                          <v-col cols="1" class="d-flex align-center">
                            <router-link
                              :to="{ name: 'issue_edit', params: { issue_id: issue.id } }"
                              class="indigo--text text--darken-4"
                            >
                              <v-icon small class="mr-2" color="indigo">mdi-pencil</v-icon>
                            </router-link>
                            <v-icon
                              small
                              class="mr-2"
                              color="indigo darken-4"
                              @click="deleteConfirm(issue.id)"
                            >mdi-delete</v-icon>
                          </v-col>
                        </v-row>
                      </v-col>

                      <v-card-text>
                        <div class="my-4 text-subtitle-1">課題概要：{{issue.issueDetail}}</div>
                        <div class="my-4 text-subtitle-1">期待・学習：{{issue.expect}}</div>
                        <div class="my-4 text-subtitle-1">解決方法：{{issue.solution}}</div>
                        <div class="my-4 text-subtitle-1">メモ：{{issue.memo}}</div>
                        <div class="my-4 text-subtitle-1">実施方針：{{issue.direction}}</div>
                        <div class="my-4 text-subtitle-1">結果：{{issue.result}}</div>
                      </v-card-text>
                    </v-card>
                  </template>
                  <template v-if="i===4 && issue.status==='検証済み'">
                    <v-card
                      elevation="3"
                      :key="issue.issue_id"
                      :row-num="'tab-'+ i + '-'+index"
                      class="mt-12 mr-9 ml-9 grey--text text--darken-4"
                    >
                      <v-col class="grey lighten-5">
                        <v-row>
                          <v-col cols="11">
                            <v-card-title>{{issue.issueName}}</v-card-title>
                            <v-card-text>
                              <v-chip-group column>
                                <v-chip
                                  small
                                  text-small
                                  outlined
                                  class="mr-2"
                                  color="indigo"
                                  text-color="indigo"
                                >
                                  <v-avatar small left>
                                    <v-icon small>mdi-bullhorn-outline</v-icon>
                                  </v-avatar>
                                  {{issue.shareState}}
                                </v-chip>
                                <v-chip
                                  small
                                  text-small
                                  outlined
                                  class="mr-2"
                                  color="indigo"
                                  text-color="indigo"
                                >
                                  <v-avatar small left>
                                    <v-icon small>mdi-scale</v-icon>
                                  </v-avatar>
                                  {{issue.taskVolume}}
                                </v-chip>
                                <v-chip
                                  small
                                  text-small
                                  outlined
                                  class="mr-2"
                                  color="indigo"
                                  text-color="indigo"
                                >
                                  <v-avatar small left>
                                    <v-icon small>mdi-diamond-stone</v-icon>
                                  </v-avatar>
                                  {{issue.effectivity}}
                                </v-chip>

                                <v-chip
                                  small
                                  outlined
                                  text-small
                                  class="mr-2"
                                  color="indigo"
                                  text-color="indigo"
                                >
                                  <v-avatar small left>
                                    <v-icon small>mdi-account-circle</v-icon>
                                  </v-avatar>
                                  {{issue.incharge}}
                                </v-chip>
                                <v-chip
                                  small
                                  text-small
                                  outlined
                                  class="mr-2"
                                  color="indigo"
                                  text-color="indigo"
                                >
                                  <v-avatar small left>
                                    <v-icon small>mdi-run-fast</v-icon>
                                  </v-avatar>
                                  {{issue.priority}}
                                </v-chip>
                                <v-chip
                                  small
                                  text-small
                                  outlined
                                  class="mr-2"
                                  color="indigo"
                                  text-color="indigo"
                                >
                                  <v-avatar small left>
                                    <v-icon small>mdi-progress-check</v-icon>
                                  </v-avatar>
                                  {{issue.status}}
                                </v-chip>
                                <v-chip
                                  small
                                  text-small
                                  outlined
                                  class="mr-2"
                                  color="indigo"
                                  text-color="indigo"
                                >
                                  <v-avatar small left>
                                    <v-icon small>mdi-calendar-clock-outline</v-icon>
                                  </v-avatar>
                                  {{issue.executeDate}}
                                </v-chip>
                                <v-chip
                                  small
                                  text-small
                                  outlined
                                  class="mr-2"
                                  color="indigo"
                                  text-color="indigo"
                                >
                                  <v-avatar small left>
                                    <v-icon small>mdi-calendar-check-outline</v-icon>
                                  </v-avatar>
                                  {{issue.retroDate}}
                                </v-chip>
                              </v-chip-group>
                            </v-card-text>
                          </v-col>
                          <v-col cols="1" class="d-flex align-center">
                            <router-link
                              :to="{ name: 'issue_edit', params: { issue_id: issue.id } }"
                              class="indigo--text text--darken-4"
                            >
                              <v-icon small class="mr-2" color="indigo">mdi-pencil</v-icon>
                            </router-link>
                            <v-icon
                              small
                              class="mr-2"
                              color="indigo darken-4"
                              @click="deleteConfirm(issue.id)"
                            >mdi-delete</v-icon>
                          </v-col>
                        </v-row>
                      </v-col>

                      <v-card-text>
                        <div class="my-4 text-subtitle-1">課題概要：{{issue.issueDetail}}</div>
                        <div class="my-4 text-subtitle-1">期待・学習：{{issue.expect}}</div>
                        <div class="my-4 text-subtitle-1">解決方法：{{issue.solution}}</div>
                        <div class="my-4 text-subtitle-1">メモ：{{issue.memo}}</div>
                        <div class="my-4 text-subtitle-1">実施方針：{{issue.direction}}</div>
                        <div class="my-4 text-subtitle-1">結果：{{issue.result}}</div>
                      </v-card-text>
                    </v-card>
                  </template>
                </template>
              </v-tab-item>
            </v-tabs-items>
            <v-btn class="mx-2" fab fixed bottom right color="indigo white--text">
              <router-link :to="{ name: 'issue_edit' }">
                <v-icon color="#fff">mdi-plus</v-icon>
              </router-link>
            </v-btn>
          </v-card>
        </v-col>
      </template>
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

      tab: null,
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      issues: []
    };
  },
  methods: {
    sortedItemsByPriority() {
      return this.issues.sort((a, b) => {
        return a.priority < b.priority ? 1 : a.priority > b.priority ? -1 : 0; // -1と1を入れ替え
      });
    },
    sortedItemsByEffectivity() {
      return this.issues.sort((a, b) => {
        return a.effectivity < b.effectivity
          ? 1
          : a.effectivity > b.effectivity
          ? -1
          : 0; // -1と1を入れ替え
      });
    },
    sortedItemsByTaskVolume() {
      return this.issues.sort((a, b) => {
        return a.taskVolume < b.taskVolume
          ? 1
          : a.taskVolume > b.taskVolume
          ? -1
          : 0; // -1と1を入れ替え
      });
    },
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
