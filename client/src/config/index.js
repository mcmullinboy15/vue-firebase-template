import Vue from "vue";

var config = {
  projectName: "<project-name>",
  projectID: "<project-id>",
  projectRegion: "<region>",
  production: process.env.NODE_ENV === "production",

  functionsPort: "<functions-port>"
};

// firebase init - add your own config here
const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: ""
};

Vue.prototype.$config = config;
export { config, firebaseConfig };
