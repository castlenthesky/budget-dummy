<template>
  <v-card>
    <v-card-text class="pt-4">
      <div>
        <v-form ref="form">
          <v-text-field
            required
            v-model="username"
            label="Username"
            prepend-icon="mdi-account"
          ></v-text-field>
          <v-text-field
            required
            type="password"
            v-model="password"
            :rules="passwordRules"
            min="8"
            label="Password"
            prepend-icon="mdi-key-variant"
          ></v-text-field>
          <v-layout justify-space-between>
            <a href="/">Forgot Password</a>
            <v-btn @click="login" color="primary">Login</v-btn>
          </v-layout>
        </v-form>
      </div>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import axios from "axios";

export default {
  data() {
    return {
      loading: false,
      username: "",
      password: "",
      passwordRules: [true],
    };
  },
  methods: {
    login() {
      axios
        .post("https://orraks-emporium.herokuapp.com/auth", {
          username: this.username,
          password: this.password,
        })
        .then((response) => {
          if (response.data.token) {
            console.log(`Successfully logged in as ${this.username}`);
            localStorage.setItem("token", response.data.token);
            this.$router.push("/");
          }
        })
        .catch((err) => {
          console.error(err);
        });
      console.log(this.username, this.password);
    },
  },
};
</script>
