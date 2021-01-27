import Vue from "vue";
import Vuex from "vuex";

import { config } from "../config";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    site: {
      // Don't override these variable in your Cloud Variables cuz
      //  those variables can change locally but if they are overriden
      //  they could be changed back while a user in on the site.
      loggedIn: false,
      drawer: false,
      toggleMini: true,

      // Snackbar
      show_snackbar: false,
      snackbar: {
        text: "",
        timeout: 5000, // -1 = Never (miliseconds)
        color: "primary",
      }
    },

    _site: {},

    user: {
      email: "",
      password: "",
      phone: "",
      name: {
        first: "",
        last: ""
      },
      address: {},
      notifications: {}
    }
  },
  getters: {},
  mutations: {},
  actions: actions,
  modules: {}
});
