import Vue from "vue";
import axios from "axios";
import store from "../store";
import { config } from "../config";

// Creating our own Axios
const myAxios = axios.create({
  baseURL: config.production
    ? `https://${config.projectRegion}-${config.projectID}.cloudfunctions.net/`
    : `http://localhost:${config.functionsPort}/${config.projectID}/${config.projectRegion}`,
  headers: { "Content-Type": "application/json" },
  responseType: "json"
});

// This is just so the accountID is sent on every request
//  If is run before every Request, there is one for Responses
myAxios.interceptors.request.use(
  config => {
    if (config.params === undefined) {
      config.params = {};
    }

    let userID;
    try {
      // You should tokenize the id and untokenize it on the backend
      userID = store.state.user.id;
    } catch (e) {
      userID = null;
    }

    if (userID !== undefined) {
      config.params["userID"] = userID;
    }

    return config;
  },
  error => Promise.reject(error)
);

myAxios.interceptors.response.use(
  config => config,
  error => error
);

Vue.prototype.$func = myAxios;
export default myAxios;
