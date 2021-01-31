import server from "../plugins/server";
import router from "../router";


/**
 * Use `server` to make requests to the backend. 
 * using axios, you will have already provided the BASE_URL and the userID
 * so requests from here can just look like this.
 * 
 * let resp = await server.get("/get-user-info");
 * user = resp.data     or      user = resp.data.user
 */

export default {
  // When authentication changes from logged in ( user = user_object ), to logged out ( user = null )
  onAuthChange: ({ commit }, user) => {
    if (user) {
      commit("login");
      /**
       * make a request to backend to get the user info
       */
    } else {
      commit("logout");
      /**
       * set state.user to null or {}
       */
    }
  },
  refreshUser: ({ state }) => {
    /**
     * make a request to backend to get the user info
     */
  },
  submitLogin: ({ state, dispatch, commit }, { email, pass }) => {
    if (email === undefined) {
      email = state.user.email;
      pass = state.user.password;
    }
    /**
     * Make calls to sign in a user using their email and passord And connect to the nect then statments and return the promise
     * 
     *  This is how to do it using Firebase Auth
     * return auth
     *   .signInWithEmailAndPassword(email, pass)
     */
      
      .then(user => dispatch("route_user", user))
      .then(route => router.push({ name: route }))
      .then(() => commit("snackbar", { code: "login_successful" }))
      .catch(err => commit("snackbar", { code: "login_failed", message: err }));
  },
  submitLogout: () => {
    if (confirm("Are you sure you want to Logout?")) {
      /**
       * Make SignOut call 
       * 
       * Firebase Auth
       *   auth.signOut();
       */
      router.push({ name: "Login" });
    }
  },
  submitRegister: ({ state, dispatch }) =>
    /**
     * Make calls to create a user using their email and passord And connect to the nect then statments
     * 
     *  This is how to do it using Firebase Auth
     * auth
     *   .createUserWithEmailAndPassword(state.user.email, state.user.password)
     */
    
      .then(data =>
        dispatch("createUserData", { uid: data.user.uid, form: state.user })
      )
      .then(form =>
        dispatch("submitLogin", { email: form.email, pass: form.password })
      ),

  // You may need to stop from logging in using
  //  Google pop-up if they don't have an account already
  signInWithGoogle: ({ dispatch, commit }) =>
    /**
     * Use Google's Auth Providers to create a Sign in with Google. And connect to the nect then statments
     * 
     *  This is how to do it using Firebase Auth
     * auth
     *   .signInWithPopup(new fb.auth.GoogleAuthProvider())
     */

      .then(data =>
        dispatch("createUserData", {
          uid: data.user.uid,
          form: { email: data.user.email }
        })
      )
      .then(() => router.push({ name: "Home" }))
      .catch(err => commit("snackbar", { code: "login_failed", message: err })), // eventually get the google auth error codes

  // Login UTILS
  async createUserData({ state }, { uid, form }) {

    // When creating a user, remove the password from the form...
    let temp_password = form.password;
    delete form.password;

    // combine it with the new_user_template so the new user has all needed attributes
    let user_data = Object.assign({}, { ...state.new_user_template, ...form });

    // then send that to the server
    if (!user.exists) {
      uid;
      /**
       * set the user (`uid`)'s data to be this object `user_data`
       */
    }

    // then add the password back to be used for logging in
    user_data.password = temp_password;
    return user_data;
  },

  route_user({ state, commit }, user) {
    if (user === undefined) {
      user = state.user;
    }
    let route = "Home";
    let message;
    // return a route, an object with the name of a route { name: "Home" or "Profile" }
    //  or just a sting "/" or "/profile"
    if (user.phone) {
      message = "Please add your Phone Number and Provider";
      route = "Profile";
    }

    commit("snackbar", { code: "login_successful", message: message });
    return route;
  },

  // Profile Page
  sendProfileUpdate({ state, commit }) {
    /**
     * get users id state.user.id
     * and update the DB using `state.user`
     */
    commit("snackbar", { code: "sent_profile" });
  }
};
