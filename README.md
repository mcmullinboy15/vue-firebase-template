# How to recreate this template, and where I got the code
## Intro
The following project is not a course but also is not a simple bug fix or solution to common questions. This is everything that I've learned while building many websites while using a Vue and Vuetify frontend and a Fireabse (server-less) Backend.

Therefore there are many things you'll need for `setup only` and many skills you'll need to use `everyday` in your development. I will be tagging the important parts with the tags like this:
> **SETUP SKILL**

> **EVERYDAY SKILL**

in order for you to know that the skill following, will benefit you and/or should be memorized.

<br>

# Before Local Setup:
  * These next steps will alleviate any potential `FirebaseErrors` when creating the project on your computer through the command line.
  * When trying to create a project through the [Firebase CLI](https://firebase.google.com/docs/cli), there are bugs like finding a unique GCP project id/name, your Cloud Firestore Database may not get created and break the setup, and Github integrations may results in an HTTP Error.
  
  1. Create Your Firebase Project [Here](https://console.firebase.google.com/u/0) at the Firebase Console.
      * _<small>Google Anylitics can be added later, Click continue</small>_
      * Then Select `Default Account` if you did initialize Google Anylitics, then continue
  1. Go to the `Cloud Firestore` section
      - Click `Create database`
      - Follow next steps using defaults
      - We will go over rules later
  1. Go to the `Project Overview` section
      - Click the `</>` icon to create a web App
      - Name your app `web` _<small>(or whatever you want)</small>_
      - Click to set up Hosting, then Register
      - We will continue their instructions in a moment.

<br>

# Local Setup
## Go to the terminal or cmd on your Personal Computer

  * Nagivate to your project directory `Projects/[vue-firebase-template]` and create a web directory
      * I like to have my website in a `web` directory, for convenience, the [Github repo](https://github.com/mcmullinboy15/vue-firebase-template) doesn't have one but everything is in the main directory. You can clone it into your `web` directory
      ```  
        mkdir web && cd web
      ```

## Firebase CLI
  1. Install Firebase CLI
      ```
        npm install -g firebase-tools
      ```
> **SETUP SKILL**
  2. Running this command will log you into your Google Account. Use the browser to login to the same account that you built the project with.
      * This can become important when you have multiple projects under many different Google accounts. `HINT: firebase logout`
      ```
        firebase login
      ```
<br/>

> **SETUP SKILL -- IMPORTANT**

  3. This will start the setup of your actual project 
      ```
        firebase init
      ```

  * Picking Firebase Features is Important
    * These are my GOTOs:
      ```
        ( ) Database: Configure Firebase Realtime Database and deploy rules
        (*) Firestore: Deploy rules and create indexes for Firestore
        (*) Functions: Configure and deploy Cloud Functions
        (*) Hosting: Configure and deploy Firebase Hosting sites
        ( ) Storage: Deploy Cloud Storage security rules
        (*) Emulators: Set up local emulators for Firebase features
        ( ) Remote Config: Get, deploy, and rollback configurations for Remote Config 
      ```
    * Frontend
      * [Hosting](#Hosting) provides an easy way to host a node.js application. 

    * Backend -- _<small>If you don't plan to have a backend you don't need these next two Features</small>_
      *  [Firestore](#Firestore) is Firebase's NoSQL Database. Stores data as one large JSON tree. Utilizes a Collection/Document/Collection etc. Format.

      * [Functions](#Functions) is your way into the backend, write traditional `nodejs express` functions or setup `triggers` that run on time intervals or whenever a new Firestore object is Created/Deleted/Updated etc.

    * Testing
      * [Emulators](#Emulators) are made for running all needed services locally on your computer.

    * All other options can be added
      * `Database` is the Realtime Database which can be used but is not neccessary because we are using the Firestore Database.

      * `Storage` is for users images and files that you wouldn't save on the frontend.

      * `Remote Config` is a neat ability to configure your application and change things without having to redeploy

## Creating Vue App
1. 
## Things to install if you're not using my template

```
npm install -g firebase-tools
npm install --save firebase
npm install --save vuefire
npm install --save axios
npm install --save vuetify

```

# My TODOs:
#### I want to create explainations of all these
* Firebase

  * firebase.json
  * deploy will deploy your whole platform use --only when needed
  * auth
  * firestore
    * usage (free not free)
    * col/doc 
    * rules
    * ?indexes?
  
  * Blaze Plan
  
  * create functions axios

#
* [Where I got a lot of my Ideas](https://savvyapps.com/blog/definitive-guide-building-web-app-vuejs-firebase)
* [The GITHUB](https://github.com/savvyapps/SAVuegram)
* Vue
  * how components can work (.vue)
  * data, computed, methods
  * vuex, all needed map...
  * router
  
#
* [Where I got
 my Vuetify Template](https://medium.com/wdstack/vuetify-dashboard-template-df3606572a5f)
* [Codeply](https://www.codeply.com/p/AtcbXz9Ybg)
* Vuetify intro 
  * docs 
    - components
    - api
    - How to Copy their code
  * How to use, and Best Practices
    - dense, loading
    - p-5, m-5
    - themes
    - icons
  * components
    - v-btn
    - v-data-table
    - v-list
    - v-app-bar
    - v-navigation-drawer
    - v-dialog
    - v-snackbar
    - v-card
    - grid
      - v-row
      - v-col
      - v-header, v-main, v-footer 

#
* vuefire
  * How to use this feature in the .vue files:
  ```
  firebase: {
    items: db.collection("items"),
    availablePlaces: db.collection("places").where("available", "==", true)
  }
  ``` 
* vuexfire
  * firebaseAction
  * bindFirestoreRef, unbindFirestoreRef
  * vuexfireMutations
  * Call firestore actions the same way as normal vuex acitons
    ```
    this.$store.dispatch("fetchUser", user);
    -- or --
    computed: mapActions(["fetchUser"]),   ::    this.fetchUser(user);
    ```
  ```
  fetchUser: firestoreAction(({ commit, bindFirestoreRef, unbindFirestoreRef }, user) => {
    if (user) {
      commit("login");
      return bindFirestoreRef("user", usersRef.doc(user.uid)); // returns a promise

    } else {
      commit("logout");
      unbindFirestoreRef("user");
    }
  });
  ```

#
## Stuff I want to put in but don't know yet
#
* github, deploy, workflows
  * https://medium.com/js-dojo/ci-cd-with-vue-firebase-hosting-and-github-actions-3fb0afa81314
* scss, sass

* config
  * https://goenning.net/2016/05/13/how-i-manage-application-configuration-with-nodejs/

