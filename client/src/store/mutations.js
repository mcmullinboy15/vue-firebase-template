// import router from "../router"

export default {
  toggleDrawer(state) {
    state.site.drawer = !state.site.drawer;
  },
  update(state, obj) {
    state[obj.name] = obj.value;
  },
  snackbar(state, { code, message }) {
    // if no code, I won't check for message or config

    let config = {}; //      text: "", timeout: 5000, color: "primary"

    switch (code) {
      case "login_successful":
        config = {
          text: message ? message : "Login Successful, Enjoy the App",
          timeout: 2000,
          color: "success"
        };
        break;
      case "login_failed":
        config = {
          text: message ? message : "Login Failed, Please try again",
          timeout: 5000,
          color: "error"
        };
        break;
      case "sent_profile":
        config = {
          text: "Profile Successfully Updated",
          timeout: 2000,
          color: "success"
        };
        break;
      case "no_navbar":
        config = {
          text: "Expanding is disabled for Smaller Screens",
          timeout: 2000,
          color: "warning"
        };
        break;
    }
    if (message) {
      config = { ...config, text: message };
    }

    // This will make a snackbar wait for the previous one to finish,
    //  But it will not work well if one is up and two new ones are added.
    let run = () => {
      state.site.snackbar = { ...state.site.snackbar, ...config };
      state.site.show_snackbar = true;
    };
    if (state.site.show_snackbar) {
      setTimeout(() => run(), state.site.snackbar.timeout);
    } else {
      run();
    }
  },

  // Try to keep the login and logout mutations close and if one thing
  //  is set on login, it probably needs to change on logout too

  // Keep simple stuff here, they will be called on every auth state change.
  //  No router.push, etc.
  login(state) {
    state.site.loggedIn = true;
    state.site.drawer = true;
  },
  logout(state) {
    state.site.loggedIn = false;
    state.site.drawer = false;
  }
};
