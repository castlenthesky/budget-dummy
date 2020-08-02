<template>
  <div>
    <v-list dense>
      <v-list-item link>
        <v-list-item-avatar>
          <v-img src="https://cdn.vuetifyjs.com/images/john.png"></v-img>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title class="title">John Leider</v-list-item-title>
          <v-list-item-subtitle>john@vuetifyjs.com</v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-action>
          <v-icon>mdi-menu-down</v-icon>
        </v-list-item-action>
      </v-list-item>
    </v-list>

    <v-divider></v-divider>

    <v-list nav flat text dense>
      <v-list-item-group color="primary" v-model="navigation.active">
        <template v-for="(link, i) in navigation">
          <template v-if="!link.children">
            <v-list-item :key="i" link :to="link.route">
              <v-list-item-icon>
                <v-icon>{{ link.icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-title>{{ link.title }}</v-list-item-title>
            </v-list-item>
          </template>
          <template v-else>
            <v-list-group :key="i" :prepend-icon="link.icon" dense>
              <template v-slot:activator>
                <v-list-item-title>{{ link.title }}</v-list-item-title>
              </template>
              <v-list-item
                v-for="(child, i) in link.children"
                :key="i"
                link
                :to="child.route"
              >
                <v-list-item-icon>
                  <v-icon right v-text="child.icon"></v-icon>
                </v-list-item-icon>
                <v-list-item-title
                  :prepend-icon="child.icon"
                  v-text="child.title"
                ></v-list-item-title>
              </v-list-item>
            </v-list-group>
          </template>
        </template>
      </v-list-item-group>
    </v-list>
  </div>
</template>

<script lang="ts">
import routes from "@/router/routes";

export default {
  name: "NavigationDrawerContent",
  data: () => ({
    routes: routes,
    navigation: [
      {
        title: "Home",
        route: "/",
        icon: "mdi-home",
        active: true,
      },
      {
        title: "About",
        route: "/about",
        icon: "mdi-information",
      },
      {
        title: "Profile",
        route: "/profile",
        icon: "mdi-account-circle",
      },
      {
        title: "Tasks",
        icon: "mdi-cog",
        children: [
          {
            title: "Login",
            route: "/login",
            icon: "mdi-plus-box",
          },
          {
            title: "Read",
            route: "/tasks",
            icon: "mdi-database-search",
          },
          {
            title: "Update",
            route: "/tasks/update",
            icon: "mdi-database-refresh",
          },
          {
            title: "Destroy",
            route: "/tasks/destroy",
            icon: "mdi-database-minus",
          },
        ],
      },
    ],
    admins: [
      ["Management", "mdi-people_outline"],
      ["Settings", "mdi-cog"],
    ],
    cruds: [
      ["Create", "mdi-plus-box"],
      ["Read", "mdi-database-search"],
      ["Update", "mdi-database-refresh"],
      ["Delete", "mdi-database-minus"],
    ],
  }),
};
</script>

<style></style>
