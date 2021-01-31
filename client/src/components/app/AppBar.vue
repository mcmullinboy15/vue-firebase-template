<template>
  <v-app-bar app color="primary" dark elevation="0">
    <v-app-bar-nav-icon
      v-if="site.loggedIn"
      @click.stop="site.drawer = !site.drawer"
    ></v-app-bar-nav-icon>

    <v-switch
      v-model="$vuetify.theme.dark"
      :label="$vuetify.theme.dark ? 'Dark' : 'Light'"
      persistent-hint
      inset
      color="white"
      class="mr-2 mt-5"
    ></v-switch>

    <v-spacer></v-spacer>

    <v-btn v-if="site.loggedIn" text @click="submitLogout" class="mr-2">
      Logout
    </v-btn>
    <v-btn v-else text :to="{ name: 'Login' }" class="mr-2">
      Login
    </v-btn>
  </v-app-bar>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "AppBar",
  methods: mapActions(["submitLogout"]),
  computed: mapState(["site"])
};
</script>
