<template>
  <v-app
    id="mainApp"
    :style="{ background: $vuetify.theme.themes[theme].background }"
  >
    <v-system-bar app color="background" height="60px">
      <v-toolbar-title class="text-uppercase grey--text">
        <span class="font-weight-light">Budget</span>
        <span class="font-weight-bold">Dummy</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn v-bind="attrs" v-on="on">
            <v-avatar>
              <img :src="currentUser.avatarURL" :alt="currentUser.firstname" />
            </v-avatar>
            <div>
              {{ currentUser.username }}
            </div>
            <div>
              {{ currentUser.title }}
            </div>
          </v-btn>
        </template>
        <v-list>
          <v-list-item v-for="item in userboxMenu" :key="item" link flat text>
            <v-icon dark left>{{ item.icon }}</v-icon>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-system-bar>

    <v-app-bar app clipped-left color="#171717" height="50px">
      <v-app-bar-nav-icon square @click.stop="drawer = !drawer" />
      <v-toolbar-title>Application</v-toolbar-title>
      <v-spacer></v-spacer>
      <span>
        Settings / Profile /
        <v-icon small>mdi-home</v-icon>
      </span>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app clipped activatable>
      <NavigationDrawerContent />
    </v-navigation-drawer>

    <v-content>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>
    <v-footer app inset>
      &copy; 2020 Brian Henson
      <div>{{ currentUser }}</div>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import jwt from "jsonwebtoken";
import NavigationDrawerContent from "@/components/app/navigation/Navbar.vue";

export default Vue.extend({
  components: {
    NavigationDrawerContent: NavigationDrawerContent,
  },
  name: "App",
  computed: {
    theme() {
      return this.$vuetify.theme.dark ? "dark" : "light";
    },
  },

  data: () => ({
    drawer: null,
    currentUser: jwt.decode(localStorage.getItem("token")),
    userboxMenu: [
      {
        title: "My Profile",
        icon: "mdi-account",
      },
      {
        title: "Settings",
        icon: "mdi-cog",
      },
      {
        title: "Logout",
        icon: "mdi-logout",
      },
    ],
  }),
});
</script>
