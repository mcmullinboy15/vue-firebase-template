<template>
  <v-app>
    <app-bar />

    <nav-drawer />

    <v-main>
      <router-view></router-view>
    </v-main>

    <snack-bar />

    <v-footer class="py-3">
      <span class="ml-auto overline">{{ config.projectName }} &copy;2020</span>
    </v-footer>
  </v-app>
</template>

<script>
// I might want to move to a header and footer component
import { mapState } from "vuex";

import { NavDrawer, SnackBar, AppBar } from "./components/app";

export default {
  name: "App",
  components: {
    NavDrawer,
    SnackBar,
    AppBar
  },
  computed: mapState(["config"])
};
</script>
