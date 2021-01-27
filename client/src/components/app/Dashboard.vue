<template>
  <v-container>
    <v-card align="center">
      <v-card-title>{{ msg.header }}</v-card-title>

      <v-divider></v-divider>

      <v-card-text>
        <v-alert :color="msg.message.color">
          {{ msg.message.text }}
        </v-alert>
      </v-card-text>

      <v-card-actions>
        <v-btn text :to="{ name: msg.routename }" v-text="msg.routemsg"></v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "Dashboard",
  props: {
    msg: {
      type: Object,
      default: () => ({
        header: "DashBoard",
        message: {
          text: "Please Navigate to the Home Page",
          color: "warning"
        },
        routename: "Home",
        routemsg: "Go to Home Page"
      })
    }
  }
};
</script>
