<template>
  <v-app>
    <v-app-bar app color="indigo darken-4" flat dark>
      <v-app-bar-nav-icon @click.stop="openSideMenu"></v-app-bar-nav-icon>
      <v-toolbar-title>Issue Tracker</v-toolbar-title>
    </v-app-bar>

    <v-content>
      <SideNav></SideNav>
    </v-content>
  </v-app>
</template>

<script>
import SideNav from "./components/SideNav";

export default {
  name: "App",
  components: {
    SideNav,
  },
  data: () => ({
    //
  }),
  methods: {
    openSideMenu() {
      this.$store.dispatch("toggleSideMenu");
    },
  },
};
</script>
