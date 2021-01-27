# How to recreate this template, and where I got the code
## Intro
The following project is not a course but also is not a simple bug fix or solution to common questions. This is everything that I've learned while building many websites while using a Vue and Vuetify frontend and a Fireabse (server-less) Backend.

Therefore there are many things you'll need for setup only and many skills you'll need to use everyday in your development. I will be tagging the important parts with the tags like this.
> **SETUP SKILL**

> **EVERYDAY SKILL**

in order for you to know that the following content will benefit you and/or can be memorized.

#
### Before Creating Files/Project Locally:
  * These next steps will eleviate any potential `FirebaseErrors` when creating the project on your computer through the command line.
  * When trying to create a project through the CLI, there are bugs like finding a project id/name, Cloud Firestore does not get created, and Github integrations results in an HTTP Error.
  
  1. Create Your Firebase Project [Here](https://console.firebase.google.com/u/0) at the Firebase Console.
     
  1. Google Anylitics can be added later, Click continue
  1. Then Select `Default Account` if you did initialize Google Anylitics, then continue
  1. Go to the `Cloud Firestore` section
      - Click `Create database`
      - Follow next steps using defaults
      - We will go over rules later
  1. Go to the `Project Overview` section
      - Click the `</>` icon to create a web App
      - Name your app `web`
      - Click to set up Hosting, click Register
      - We will continue their instructions in a moment.
#
### Local Setup Go to your terminal or cmd
1. Install Firebase CLI
    ```
      npm install -g firebase-tools
    ```
1. Nagivate to your project directory `Projects/[vue-firebase-template]` and create a web directory
    ```  
      mkdir web && cd web
    ```

## Firebase CLI
> **SETUP SKILL**
  * Running this command will log you into your Google Account. Use the browser to login to the same account that you build the project with.

    ```
      firebase login
    ```
    <small>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;This can become important when you have multiple projects under many different Google accounts. `HINT: firebase logout`
    </small>
<br/>

> **SETUP SKILL**

  * This will setup the actual project **IMPORTANT**
  
    ```
      firebase init
    ```
  * Pick Firebase Features is Important
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
      * `Hosting` provides an easy way to host a node.js application. 

    * Backend
      <br/>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <small>If you don't plan to have a backend you don't need these two Features</small>

      *  `Firestore` Firebase's NoSQL Database. Stores data as one large JSON tree. Utilizes a Collection/Document/Collection etc. Format. [ My Description ](#Firestore)

      * `Functions` is your way into the backend, here is where you'll write your traditional backend nodejs express functions. There are also other features that can run on triggers using Cloud Pub/Sub. You can run a function at a time each day or whenever a new User is Created/Deleted/Updated etc.
    * Testing
      * `Emulators` are made for running all needed services 
    * All other options can be added

      * `Database` is the Realtime Database which can be used but is not neccessary because we are using the Firestore Database.

      * `Storage` is for users images and files that you'd rather not save on the frontend.

      *  `Remote Config` is a neat ability to configure your application and change things without having to redeploy (We will not be covering this)




# My TODOs:
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
  
* Vue
  * how components can work (.vue)
  * data, computed, methods
  * vuex, all needed map...
  * router

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
  
* vuefire
  * firebase: {} in the .vue
* vuexfire
  * firebaseAction, bind..


```
npm install -g firebase-tools
npm install --save firebase
npm install --save vuefire
npm install --save axios
npm install --save vuetify

```






```
<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="/__/firebase/8.2.4/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->
<script src="/__/firebase/8.2.4/firebase-analytics.js"></script>

<!-- Initialize Firebase -->
<script src="/__/firebase/init.js"></script>
```
