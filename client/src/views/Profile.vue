<template>
  <v-row justify="center">
    <v-col cols="12" sm="10" md="8" lg="6">
      <v-card>
        <v-form ref="form" v-model="valid" lazy-validation v-if="user">
          <v-card-title>{{ user.email }}</v-card-title>

          <v-divider></v-divider>

          <v-card-text>
            <v-row>
              <v-col>
                <v-text-field
                  v-model="user.name.first"
                  :rules="[() => !!user.name.first || 'This field is required']"
                  :error-messages="errorMessages"
                  label="First"
                  required
                ></v-text-field>
              </v-col>

              <v-col>
                <v-text-field
                  v-model="user.name.last"
                  :rules="[() => !!user.name.last || 'This field is required']"
                  :error-messages="errorMessages"
                  label="Last"
                  required
                ></v-text-field>
              </v-col>
            </v-row>

            <v-text-field
              v-model="user.phone"
              :rules="[
                v => !!v || 'This field is required',
                v => /^\d+$/.test(v) || 'This field only accept numbers',
                v =>
                  (v || '').length >= 10 ||
                  `Invalid character length, required ${10}`
              ]"
              label="Phone"
              counter="10"
              required
            ></v-text-field>

            <v-spacer></v-spacer>

            <v-row>
              <v-col cols="9">
                <v-text-field
                  v-model="user.address.street"
                  label="Address Line"
                ></v-text-field>
              </v-col>
              <v-col>
                <v-text-field
                  v-model="user.address.city"
                  label="City"
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-text-field
                  v-model="user.address.state"
                  label="State/Province/Region"
                ></v-text-field>
              </v-col>
              <v-col>
                <v-text-field
                  v-model="user.address.zipcode"
                  label="ZIP / Postal Code"
                ></v-text-field>
              </v-col>
            </v-row>
          </v-card-text>
          <v-divider class="mt-12"></v-divider>
          <v-card-actions>
            <v-btn @click="refreshUser">
              Cancel
            </v-btn>

            <v-spacer></v-spacer>

            <v-slide-x-reverse-transition>
              <v-tooltip v-if="formHasErrors" left>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    icon
                    class="my-0"
                    v-bind="attrs"
                    @click="refreshUser"
                    v-on="on"
                  >
                    <v-icon>mdi-refresh</v-icon>
                  </v-btn>
                </template>
                <span>Refresh form</span>
              </v-tooltip>
            </v-slide-x-reverse-transition>
            <v-btn
              color="primary"
              text
              :loading="loading"
              @click="submit"
              v-text="'Update'"
            ></v-btn>
          </v-card-actions>
        </v-form>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "Profile",
  data: () => ({
    valid: true,
    loading: false,
    errorMessages: "",
    formHasErrors: false
  }),
  computed: mapState(["user"]),
  watch: {
    name() {
      this.errorMessages = "";
    }
  },
  methods: {
    ...mapActions(["sendProfileUpdate", "refreshUser"]),
    submit() {
      if (this.$refs.form.validate()) {
        this.sendProfileUpdate();
      } else {
        this.formHasErrors = true;
      }
    }
  }
};
</script>

<style></style>
