<template>
  <v-list dense>
    <v-subheader class="grey--text text--darken-1">Navigation</v-subheader>
    <v-list-item
      v-for="route in routes"
      :key="route.name"
      link
      :to="route.path"
      primary
      flat
    >
      <v-list-item-action>
        <v-icon>{{ route.icon }}</v-icon>
      </v-list-item-action>
      <v-list-item-content>
        <v-list-item-title>{{ route.name }}</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
  </v-list>
</template>

<script lang="ts">
import { routes } from "@/router";

export default {
  name: "NavigationDrawerContent",
  data: () => ({
    routes: routes,
  }),
};
</script>

<style></style>
