import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./config";

import { vuetify } from "./plugins";
import { auth } from "./firebase";

Vue.config.productionTip = false;

// Based on any change in auth, run the login or logout mutation
auth.onAuthStateChanged(user => {
  store.dispatch("fetchUser", user);
});

let app;
auth.onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      vuetify,
      render: h => h(App)
    }).$mount("#app");
  }
});
