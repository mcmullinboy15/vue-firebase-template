import Vue from "vue";

var config = {
  projectName: "<project-name>",
  projectID: "<project-id>",
  projectRegion: "<region>",
  production: process.env.NODE_ENV === "production",

  functionsPort: "<functions-port>"
};

// firebase init - add your own config here
const prodFirebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: ""
};
const devFirebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: ""
};
// If you really can't test in production then use this and make a new Firebase Project
// const firebaseConfig = config.production ? prodFirebaseConfig : devFirebaseConfig
// For me I use production most of the time in testing
const firebaseConfig = prodFirebaseConfig;

Vue.prototype.$config = config;
export {
  config,
  firebaseConfig
};
