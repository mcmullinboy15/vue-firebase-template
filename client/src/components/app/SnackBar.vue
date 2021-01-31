<template>
  <v-snackbar
    v-model="site.show_snackbar"
    :timeout="site.snackbar.timeout"
    :absolute="true"
    :centered="site.snackbar.centered"
    :vertical="false"
    :color="site.snackbar.color"
    :elevation="24"
  >
    {{ site.snackbar.text }}
    <template v-slot:action="{ attrs }">
      <v-btn text v-bind="attrs" @click="site.show_snackbar = false">
        Close
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "SnackBar",
  computed: mapState(["site"])
};
</script>
