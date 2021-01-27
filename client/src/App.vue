<template>
  <v-app>
    <v-app-bar app color="primary" dark elevation="0">
      <v-app-bar-nav-icon
        v-if="site.loggedIn"
        @click.stop="site.drawer = !site.drawer"
      ></v-app-bar-nav-icon>

      <v-switch v-model="$vuetify.theme.dark" color="white" class="mr-2 mt-5">
        {{ $vuetify.theme.dark ? "Dark" : "Light" }}
      </v-switch>
      <div v-text="$vuetify.theme.dark ? 'Dark' : 'Light'"></div>

      <v-spacer></v-spacer>

      <v-btn v-if="site.loggedIn" text @click="submitLogout" class="mr-2">
        Logout
      </v-btn>
      <v-btn v-else text :to="{ name: 'Login' }" class="mr-2">
        Login
      </v-btn>
    </v-app-bar>

    <nav-drawer />

    <v-main>
      <v-container class="px-4 py-0 fill-height" fluid>
        <v-row class="fill-height">
          <v-col>
            <transition name="fade">
              <router-view></router-view>
            </transition>
          </v-col>
        </v-row>
      </v-container>
    </v-main>

    <v-snackbar
      v-model="site.show_snackbar"
      :timeout="site.snackbar.timeout"
      :value="site.snackbar.value"
      :absolute="site.snackbar.absolute"
      :centered="site.snackbar.centered"
      :vertical="site.snackbar.vertical"
      :color="site.snackbar.color"
      :elevation="site.snackbar.elevation"
    >
      {{ site.snackbar.text }}
      <template v-slot:action="{ attrs }">
        <v-btn text v-bind="attrs" @click="site.show_snackbar = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>

    <v-footer class="py-3">
      <span class="ml-auto overline">{{ config.projectName }} &copy;2020</span>
    </v-footer>
  </v-app>
</template>

<script>
// I might want to move to a header and footer component
import { mapState, mapActions } from "vuex";

import { NavDrawer } from "./components/app";

export default {
  name: "App",
  components: {
    NavDrawer
  },
  methods: mapActions(["submitLogin", "submitLogout", "AppVueGet"]),
  computed: mapState(["site", "config", "vuetify"]),
  created() {
    this.AppVueGet();
  }
};
</script>
