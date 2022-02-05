<template>
  <v-app>
    <v-app-bar app color="indigo darken-4" flat dark>
      <v-app-bar-nav-icon @click.stop="toggleSideMenu"></v-app-bar-nav-icon>
      <v-toolbar-title>Issue Tracker</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn @click="logout">ログアウト</v-btn></v-toolbar-items
      >
    </v-app-bar>
    <SideNav></SideNav>

    <v-main fluid fill-height align-start>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import firebase from "firebase";
import SideNav from "./components/SideNav";
import { mapActions } from "vuex";

export default {
  name: "App",
  components: {
    SideNav,
  },

  created() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setLoginUser(user);
      } else {
        this.deleteLoginUser();
      }
    });
  },
  data: () => ({
    //
  }),
  methods: {
    ...mapActions([
      "toggleSideMenu",
      "setLoginUser",
      "logout",
      "deleteLoginUser",
    ]),
  },
};
</script>
