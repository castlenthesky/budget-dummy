<template>
  <v-system-bar app color="background" height="60px">
    <v-toolbar-title class="text-uppercase grey--text">
      <span class="font-weight-light">Budget</span>
      <span class="font-weight-bold">Dummy</span>
    </v-toolbar-title>

    <v-spacer></v-spacer>
    <v-divider class="mx-2" vertical inset></v-divider>

    <!-- <v-btn color="grey" x-large width="200px">Login</v-btn> -->
    <v-sheet color="background" height="50" width="200">
      <v-container fill-height fluid>
        <v-row align="center" justify="center" no-gutters id="userbox">
          <v-col cols="3">
            <v-avatar size="36px">
              <img alt="Avatar" :src="userData.avatarURL" />
            </v-avatar>
          </v-col>
          <v-col cols="8">
            <span class="body-1">
              {{ userData.firstname }} {{ userData.lastname }}
            </span>
            <span class="caption text-capitalize">{{ userData.title }}</span>
          </v-col>
          <v-col cols="1">
            <v-icon left medium>mdi-chevron-down</v-icon>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>
  </v-system-bar>
</template>

<script lang="ts">
export default {
  name: "SystemBar",
  props: ["userData"],
  data: () => ({}),
};
</script>

<style lang="scss">
#userbox {
  margin-top: -9px;
  padding-top: -10px;
}
</style>
