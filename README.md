# How to recreate this template, and where I got the code
## Intro
The following project is not a course but also is not a simple bug fix or solution to common questions. This is everything that I've learned while building many websites while using a Vue and Vuetify frontend and a Fireabse (server-less) Backend.

Therefore there are many things you'll need for `setup only` and many skills you'll need to use `everyday` in your development. I will be tagging the important parts with the tags like this:
> **SETUP SKILL**

> **EVERYDAY SKILL**

in order for you to know that the skill following, will benefit you and/or should be memorized.

<br>

# Local Setup
## Go to the terminal or cmd on your Personal Computer

  * Nagivate to your project directory `Projects/[vue-firebase-template]` and create a web directory
      * I like to have my website in a `web` directory, for convenience, the [Github repo](https://github.com/mcmullinboy15/vue-firebase-template) doesn't have one but everything is in the main directory. You can clone it into your `web` directory
      ```  
        mkdir web && cd web
      ```


## Creating Vue App
1. Download the Vue Cli to create and manipulate vue projects
    ```
      npm install -g @vue/cli
    ```
1. Under the web directory create your vue project.
    ```
      vue create client && cd client
    ```
1. In the setup for the Vue, if you don't have an option with vuex then press `Manually select features` and set up a new one, the required ones will be 
    * babel, router, and vuex
    * I strongly suggest Linter / Formatter
    * If you need testing then check Unit & E2E Testing
    ```
      ? Please pick a preset: (Use arrow keys)
      Vue1 ([Vue 2] babel, router, vuex) 
    > Vue-Template ([Vue 2] babel, router, vuex, eslint, unit-mocha, e2e-cypress) 
      Default ([Vue 2] babel, eslint) 
      Default (Vue 3 Preview) ([Vue 3] babel, eslint)
      Manually select features
    ```
1. After setup and installation, make sure that you are inside of the client directory.
    * Run these commands to install everything we'll be using.
    * Use Default
    ```
      vue add vuetify
      npm install --save axios
    ```

# References
* https://savvyapps.com/blog/definitive-guide-building-web-app-vuejs-firebase
* https://github.com/savvyapps/SAVuegram
* Vue
  * how components can work (.vue)
  * data, computed, methods
  * vuex, all needed map...
  * router
  * axios





setup all pages, with `vuetify` using `vuex`  just not as complex
