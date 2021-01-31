<template>
  <div>
    <div v-if="!site.loggedIn">
      <v-container>
        <v-card>
          <v-card-title>
            Register a new Account with {{ config.projectName }}
          </v-card-title>

          <v-divider></v-divider>

          <v-card-text>
            <v-row>
              <v-col>
                <v-text-field
                  v-model="user.name.first"
                  label="First Name"
                ></v-text-field>
              </v-col>

              <v-col>
                <v-text-field
                  v-model="user.name.last"
                  label="Last Name"
                ></v-text-field>
              </v-col>
            </v-row>

            <v-text-field v-model="user.phone" label="Phone"></v-text-field>

            <v-text-field
              v-model="user.email"
              :rules="emailRules"
              label="E-mail"
              required
            ></v-text-field>

            <v-text-field
              :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
              :type="show ? 'text' : 'password'"
              v-model="user.password"
              label="Password"
              @click:append="show = !show"
            ></v-text-field>
          </v-card-text>

          <v-card-actions>
            <v-row>
              <v-col>
                <v-btn
                  color="primary"
                  min-width="100px"
                  @click="submitRegister"
                  v-text="'Register'"
                ></v-btn>
              </v-col>

              <v-spacer></v-spacer>
              
              <v-col>
                <v-btn
                  text
                  color="primary"
                  :to="{ name: 'Login' }"
                  v-text="'Already have an Account'"
                ></v-btn>
              </v-col>

              <v-spacer></v-spacer>
              
              <v-col>
                <v-img
                  max-width="200px"
                  @click="signInWithGoogle"
                  alt=" Sign in with Google"
                  src="../assets/google_signin_buttons/web/1x/btn_google_signin_dark_pressed_web.png"
              />
              </v-col>
            </v-row>
          </v-card-actions>
        </v-card>
      </v-container>
    </div>
    <div v-else>
      <dashboard :msg="msg" />
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import { Dashboard } from "../components/app";

export default {
  name: "Register",
  components: {
    Dashboard
  },
  data: () => ({
    show: false,
    emailRules: [
      v => !!v || "E-mail is required",
      v => /.+@.+/.test(v) || "E-mail must be valid"
    ],
    rules: {
      required: value => !!value || "Required",
      min: v => v.length >= 8 || "Min 8 characters"
    },
    
    msg: {
      header: "Welcome",
      message: {
        text: `You are Successfully logged in!`,
        color: "success"
      },
      routename: "Home",
      routemsg: "Go to Home Page"
    }
  }),
  methods: mapActions(["submitRegister", "signInWithGoogle"]),
  computed: mapState(["site", "config", "user"])
};
</script>
