import Vue from "vue";
import Vuex from "vuex";

import actions from "./actions";
import mutations from "./mutations";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    site: {
      // Don't override these variable in your Cloud Variables cuz
      //  those variables can change locally but if they are overriden
      //  they could be changed back while a user in on the site.
      loggedIn: true, // false
      drawer: true, // false
      toggleMini: true,

      // Snackbar
      show_snackbar: false,
      snackbar: {
        text: "",
        timeout: 5000, // -1 = Never (miliseconds)
        color: "primary",
      }
    },

    _site: {
      drawerItems: [
        /* eslint-disable */
        { title: "Home", to: { name: "Home" }, icon: "mdi-home-outline" },
        { title: "Profile", to: { name: "Profile" }, icon: "mdi-account-outline" },
        { title: "Notifications", to: { name: "Notifications" }, icon: "mdi-bell-outline" },
        { title: "Settings", icon: "mdi-cog-outline", 
          children: [
            { title: "Main", to: { name: "Main" } },
            { title: "Support", to: { name: "Support" } }
          ] }
      ]
    },
    config: {
      projectName: "<vue-firebase-template>",
      projectID: "<vue-firebase-template>",
      projectRegion: "<us-central1>",
      production: process.env.NODE_ENV === "production",
    
      functionsPort: "<functions-port>"
    },

    user: {
      email: "asdf@asdf.com",
      password: "asdf",
      phone: "5555555555",
      name: {
        first: "asdf",
        last: "asdf"
      },
      address: {
        street: "street",
        city: "city",
        state: "state",
        zipcode: "sipcode"
      },
      notifications: [
        {
          action: "15 min",
          headline: "Brunch this weekend?",
          subtitle: `I"ll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
          title: "Ali Connors"
        },
        {
          action: "2 hr",
          headline: "Summer BBQ",
          subtitle: `Wish I could come, but I"m out of town this weekend.`,
          title: "me, Scrott, Jennifer"
        },
        {
          action: "6 hr",
          headline: "Oui oui",
          subtitle: "Do you have Paris recommendations? Have you ever been?",
          title: "Sandra Adams"
        },
        {
          action: "12 hr",
          headline: "Birthday gift",
          subtitle:
            "Have any ideas about what we should get Heidi for her birthday?",
          title: "Trevor Hansen"
        }
      ]
    }
  },
  getters: {},
  mutations: mutations,
  actions: actions,
  modules: {}
});
