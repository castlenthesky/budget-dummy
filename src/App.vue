<template>
  <v-app
    id="mainApp"
    :style="{ background: $vuetify.theme.themes[theme].background }"
  >
    <v-app-bar app clipped-left color="#171717" height="50px">
      <v-app-bar-nav-icon square @click.stop="drawer = !drawer" />
      <v-toolbar-title class="text-uppercase grey--text">
        <span class="font-weight-light">Budget</span>
        <span class="font-weight-bold">Dummy</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <span>
        Settings / Profile /
        <v-icon small>mdi-home</v-icon>
      </span>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app clipped>
      <NavigationDrawerContent />
    </v-navigation-drawer>

    <v-content>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>
    <v-footer app inset>
      &copy; 2020 Brian Henson
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
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
    currentUser() {
      // return {}
      return {
        username: "castlenthesky",
        role: "admin",
        title: "aspiring developer",
        firstname: "Brian",
        lastname: "Henson",
        birthday: "05/05/1988",
        avatarURL:
          "https://avatars2.githubusercontent.com/u/4368301?s=460&u=f55bbdbb74bf0c8dd4298ebfd0b7ff7cde97825e&v=4",
      };
    },
  },

  data: () => ({
    drawer: null,
  }),
});
</script>
