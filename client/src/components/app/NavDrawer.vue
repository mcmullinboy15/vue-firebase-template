<template>
  <v-navigation-drawer
    v-model="site.drawer"
    app
    floating
    :permanent="site.drawer"
    :mini-variant.sync="mini"
  >
    <v-list dense>
      <v-list-item>
        <v-list-item-action>
          <v-icon @click.stop="site.drawer = !site.drawer">
            mdi-chevron-left
          </v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>
            <h3 class="font-weight-thin">{{ config.projectName }}</h3>
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>

    <v-list-item class="px-2" @click="toggleWithSnackBar">
      <v-list-item-avatar>
        <v-icon>mdi-account-outline</v-icon>
      </v-list-item-avatar>
      <v-list-item-content v-if="user" class="text-truncate">
        {{ user.name.first }} {{ user.name.last }}
      </v-list-item-content>
      <v-btn icon small>
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn>
    </v-list-item>

    <v-divider></v-divider>

    <!-- List of Routes -->
    <v-list v-if="_site.drawerItems">
      <div v-for="item in _site.drawerItems" :key="item.title">
        <div class="text-center">
          <!-- Pop Up menu is the Path has a children attribute -->
          <v-menu :close-on-content-click="true" :nudge-width="20" offset-x>
            <template v-slot:activator="{ on, attrs }">
              <!-- Binds if there's children, else creates a link -->
              <v-list-item
                v-bind="item.children ? attrs : null"
                v-on="item.children ? on : null"
                :link="item.children ? true : false"
                :to="!item.children ? item.to : null"
              >
                <v-list-item-icon>
                  <v-icon color="primary">{{ item.icon }}</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title class="primary--text">
                    {{ item.title }}
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </template>

            <v-card>
              <v-list>
                <v-list-item>
                  <v-list-item-icon>
                    <v-icon color="primary">{{ item.icon }}</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title class="primary--text">
                      {{ item.title }}
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list>

              <v-divider></v-divider>

              <v-list>
                <v-list-item
                  v-for="child in item.children"
                  :key="child.title"
                  link
                  :to="child.to"
                >
                  <v-list-item-content>
                    <v-list-item-title class="primary--text">
                      {{ child.title }}
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-card>
          </v-menu>
        </div>
      </div>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "NavDrawer",
  methods: {
    ...mapMutations(["snackbar"]),
    toggleWithSnackBar() {
      this.site.toggleMini = !this.site.toggleMini;
      if (this.$vuetify.breakpoint.smAndDown) {
        this.snackbar({ code: "no_navbar" });
      }
    }
  },
  computed: {
    ...mapState(["site", "_site", "config", "user"]),
    mini: {
      get: function() {
        return this.$vuetify.breakpoint.smAndDown || this.site.toggleMini;
      },
      set: a => a
    }
  }
};
</script>
