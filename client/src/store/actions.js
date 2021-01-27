import { fb, auth, usersRef, varsRef } from "../firebase";
import { firestoreAction } from "vuexfire";
// import functions from "../firebase/functions";
import router from "../router";

export default {
  // This function moves the Variables Collection into the store.state,
  //   But I think I want to do this, and I'll   store.state.site = { ...store.state.site, ...variables.site }
  //    variables /
  //          site /
  //          etc. /
  AppVueGet: firestoreAction(({ bindFirestoreRef }) => {
    // Use .where() to filter out documents that contain un-needed and secret info
    return varsRef
      .get()
      .then(col => col.docs.forEach(doc => bindFirestoreRef(doc.id, doc.ref)));
  }),
  fetchUser: firestoreAction(({ commit, bindFirestoreRef }, user) => {
    if (user) {
      commit("login");
      return bindFirestoreRef("user", usersRef.doc(user.uid), {
        maxRefDepth: 3
      });
    } else {
      commit("logout");
    }
  }),
  refreshUser: firestoreAction(({ state, bindFirestoreRef }) => {
    return bindFirestoreRef("user", usersRef.doc(state.user.id), {
      maxRefDepth: 3
    });
  }),
  submitLogin: ({ state, dispatch, commit }, { email, pass }) => {
    if (email === undefined) {
      email = state.user.email;
      pass = state.user.password;
    }
    return auth
      .signInWithEmailAndPassword(email, pass)
      .then(user => dispatch("route_user", user))
      .then(route => router.push({ name: route }))
      .then(() => commit("snackbar", { code: "login_successful" }))
      .catch(err => commit("snackbar", { code: "login_failed", message: err }));
  },
  submitLogout: () => {
    if (confirm("Are you sure you want to Logout?")) {
      auth.signOut();
      router.push({ name: "Login" });
    }
  },
  submitRegister: ({ state, dispatch }) =>
    auth
      .createUserWithEmailAndPassword(state.user.email, state.user.password)
      .then(data =>
        dispatch("createUserData", { uid: data.user.uid, form: state.user })
      )
      .then(form =>
        dispatch("submitLogin", { email: form.email, pass: form.password })
      ),

  // You may need to stop from logging in using
  //  Google pop-up if they don't have an account already
  signInWithGoogle: ({ dispatch, commit }) =>
    auth
      .signInWithPopup(new fb.auth.GoogleAuthProvider())
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
    let userRef = usersRef.doc(uid);

    // When creating a user, remove the password from the form...
    let temp_password = form.password;
    delete form.password;

    // combine it with the new_user_template so the new user has all needed attributes
    let user_data = Object.assign({}, { ...state.new_user_template, ...form });

    // then send that to the server
    let user = await userRef.get();
    if (!user.exists) {
      userRef.set(user_data);
    }

    // then add the password back to be used for logging in
    user_data.password = temp_password;
    return user_data;
  },

  route_user({ state, commit }, user) {
    if (user === undefined) {
      user = state.user;
    }
    let exists = val => !(val === undefined || val === null || val === "");
    let route = "Home";
    let message;
    // return a route, an object with the name of a route { name: "Home" or "Profile" }
    //  or just a sting "/" or "/profile"
    if (!exists(user.phone)) {
      message = "Please add your Phone Number and Provider";
      route = "Profile";
    }

    commit("snackbar", { code: "login_successful", message: message });
    return route;
  },
  /**
   * Profile Page
   */
  sendProfileUpdate({ state, commit }) {
    let userRef = usersRef.doc(state.user.id);
    userRef.update(state.user);
    commit("snackbar", { code: "sent_profile" });
  }
};
