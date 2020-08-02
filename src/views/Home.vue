<template>
  <v-container fluid>
    <v-col cols="12" color="#F85F73">
      <v-row dense align="center" justify="center">
        <v-col cols="12">
          <v-card color="black" dark class="mx-auto pt-2 text-center">
            <v-card-text>
              <div class="display-1 font-weight-thin">Login</div>
            </v-card-text>
            <v-card-text>
              <v-sheet color="rgba(0, 0, 0, .12)" class="pa-4">
                <v-form ref="login" v-model="login_valid" lazy-validation>
                  <v-text-field
                    v-model="username"
                    :rules="usernameRules"
                    label="username"
                    prepend-icon="mdi-account"
                    required
                  ></v-text-field>
                  <v-text-field
                    v-model="password"
                    :rules="passwordRules"
                    label="password"
                    type="password"
                    prepend-icon="mdi-key-variant"
                    required
                  ></v-text-field>
                </v-form>
              </v-sheet>
            </v-card-text>

            <v-divider class="mx-4"></v-divider>
            <v-card-actions>
              <v-btn block text color="green">Login</v-btn>
            </v-card-actions>

            <v-divider class="mx-4"></v-divider>

            <v-card-text>
              <div class="font-weight-thin">
                Don't Have an Account?
              </div>
              <v-btn block text color="primary">Register Here</v-btn>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-col>

    <v-col cols="12" color="#F85F73">
      <v-row dense align="center" justify="center">
        <v-col cols="4">
          <v-card color="green" dark class="mx-auto text-center">
            <v-card-text>
              <div class="display-1 font-weight-thin">Gross Income</div>
            </v-card-text>
            <v-divider class="mx-4"></v-divider>
            <v-card-actions>
              <v-btn block text>Details</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col cols="4">
          <v-card color="red" dark class="mx-auto text-center">
            <v-card-text>
              <div class="display-1 font-weight-thin">Expenses</div>
            </v-card-text>
            <v-divider class="mx-4"></v-divider>
            <v-card-actions>
              <v-btn block text>Details</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col cols="4">
          <v-card color="blue" dark class="mx-auto text-center">
            <v-card-text>
              <div class="display-1 font-weight-thin">Net Income</div>
            </v-card-text>
            <v-divider class="mx-4"></v-divider>
            <v-card-actions>
              <v-btn block text>Details</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-col>
  </v-container>
</template>

<script lang="ts">
// @ is an alias to /src

export default {
  name: "Home",
  components: {},
  data: () => ({}),
};
</script>
