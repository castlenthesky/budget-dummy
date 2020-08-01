<template>
  <v-card>
    <v-card-text class="pt-4">
      <div>
        <v-form v-model="valid" ref="form">
          <v-text-field
            label="Enter your e-mail address"
            v-model="email"
            :rules="emailRules"
            required
          ></v-text-field>
          <v-text-field
            type="password"
            label="Enter your password"
            v-model="password"
            min="8"
            :append-icon="e1 ? 'mdi-visibility' : 'mdi-visibility_off'"
            :append-icon-cb="() => (e1 = !e1)"
            :rules="passwordRules"
            counter
            required
          ></v-text-field>
          <v-layout justify-space-between>
            <v-btn
              @click="submit"
              :class="{ 'blue darken-4 white--text': valid, disabled: !valid }"
              >Login</v-btn
            >
            <a href="">Forgot Password</a>
          </v-layout>
        </v-form>
      </div>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";
// import AppHeader from "./components/navigation/AppHeader";

export default Vue.extend({
  data() {
    return {
      valid: false,
      e1: false,
      password: "",
      passwordRules: [(v: string) => !!v || "Password is required"],
      email: "",
      emailRules: [
        (v: string) => !!v || "E-mail is required",
        (v: string) =>
          /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
          "E-mail must be valid",
      ],
    };
  },
  // methods: {
  //   submit() {
  //     if (this.$refs.form.validate()) {
  //       this.$refs.form.$el.submit();
  //     }
  //   },
  //   clear() {
  //     this.$refs.form.reset();
  //   },
  // },
});
</script>
