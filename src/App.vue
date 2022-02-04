<template>
  <v-app>
    <v-app-bar app color="indigo darken-4" flat dark>
      <v-app-bar-nav-icon @click.stop="toggleSideMenu"></v-app-bar-nav-icon>
      <v-toolbar-title>Issue Tracker</v-toolbar-title>
    </v-app-bar>
    <SideNav></SideNav>

    <v-main fluid fill-height align-start>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import SideNav from "./components/SideNav";
import { mapActions } from "vuex";

export default {
  name: "App",
  components: {
    SideNav,
  },
  data: () => ({
    //
  }),
  methods: {
    ...mapActions(["toggleSideMenu"]),
  },
  created() {
    console.log("env.local", process.env.VUE_APP_APIKEY);
  },
};
</script>
