import Vue from "vue";
import Vuex from "vuex";

import { vuexfireMutations } from "vuexfire";

import actions from "./actions";
import mutations from "./mutations";
import { config } from "../config";

Vue.use(Vuex);

// Should I put right off the bat Data collection here or in firebase/
//   I like here better

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
        multiLine: true,
        timeout: 5000, // -1 = Never (miliseconds)
        value: "",
        absolute: true,
        centered: false, // Vertically
        vertical: false, // Taller
        color: "primary",
        elevation: 24
      }
    },

    // These variable should be in the cloud
    _site: {},

    // Everything here is needed for the site possibly
    //  before the cloud variables are recieved
    config: config,
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
  mutations: {
    ...mutations,
    ...vuexfireMutations
  },
  actions: actions,
  modules: {}
});
