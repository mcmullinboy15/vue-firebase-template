// This file will keep a js Object of your variables in the Cloud.
// It is up to you if you want to do this since the point is to
// be able to change variables from the cloud.

// The importance of this is to be able to update the
// variables collection in order to edit things quickly but
// still get the firestore interface.

// This is a method that takes the varsRef and SET's it this
// means everything will be rewritten, if you delete all this
// info and want to keep it in the cloud, change this to update.

function setVars(varsRef) {
  varsRef.doc("_site").set({
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
  })
  varsRef.doc("new_user_template").set({
    phone: "",
    name: {
      first: "",
      last: ""
    },
    address: {
      street: "",
      city: "",
      state: "",
      zipcode: ""
    },
    notifications: {}
  })
  varsRef.doc("vuetify").set({
    theme: {
      dark: true,
      themes: {
        light: {},
        dark: {}
      }
    }
  })
  
}

export { setVars };