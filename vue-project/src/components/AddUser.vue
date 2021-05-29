<template>
  <form>
    <custom-label labelText="Username" class="label" />
    <custom-input
      placeHolderText="Enter username..."
      @get-input="getUsername"
      inputType="text"
      @writing="removeAlerts"
      :clearInput="inputsEmpty"
    />
    <div id="divMessage">
      <fail-component v-if="failedUsername" :content="errorMessage" />
    </div>
    <custom-label labelText="Email" class="label" />
    <custom-input
      placeHolderText="Enter email..."
      @get-input="getEmail"
      inputType="email"
      @writing="removeAlerts"
      :clearInput="inputsEmpty"
    />
    <div id="divMessage">
      <fail-component v-if="failedEmail" :content="errorMessage" />
    </div>
    <custom-label labelText="Password" class="label" />
    <custom-input
      placeHolderText="Enter password..."
      @get-input="getPassword"
      inputType="password"
      @writing="removeAlerts"
      :clearInput="inputsEmpty"
    />
    <div id="divMessage">
      <fail-component v-if="failedPassword" :content="errorMessage" />
    </div>
    <custom-button btnValue="Add" class="addButton" @click="addUser" />
    <div id="divMessage">
      <fail-component v-if="failed" :content="errorMessage" />
      <success-component v-if="succeeded" :content="successMessage" />
    </div>
  </form>
</template>

<script>
import axios from "axios";
import helper from "../helperClass.js";
import store from "./../Store.js";
import { mapState } from "vuex";

export default {
  name: "AddUser",
  props: {
    callHideAlerts: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    addUser() {
      this.removeAlerts();
      if (this.username === "") {
        store.commit("isFailedUsername");
        store.commit("showError", "you must enter a username");
      } else if (this.email === "") {
        store.commit("isFailedEmail");
        store.commit("showError", "you must enter a email");
      } else if (this.password === "") {
        store.commit("isFailedPassword");
        store.commit("showError", "you must enter a password");
      } else if (this.email !== "" && !helper.validateEmail(this.email)) {
        store.commit("isFailedEmail");
        store.commit("showError", "Please enter a valid email");
      } else if (
        this.username !== "" &&
        !helper.validateUsername(this.username)
      ) {
        store.commit("isFailedUsername");
        store.commit("showError", "Please enter a valid username");
      } else {
        axios
          .post(process.env.VUE_APP_ADD_USER_URL, {
            name: this.username,
            email: this.email,
            password: this.password,
          })
          .then((response) => {
            this.clearInputs();
            store.commit("isSucceeded");
            store.commit("showSuccess", response.data.message);
          })
          .catch((e) => {
            store.commit("isFailed");
            store.commit("showError", e.response.data.message);
          });
      }
    },
    getUsername(value) {
      store.commit("setUsername", value);
    },
    getEmail(value) {
      store.commit("setEmail", value);
    },
    getPassword(value) {
      store.commit("setPassword", value);
    },
    removeAlerts() {
      store.commit("removeAddUserAlerts");
    },
    clearInputs() {
      store.commit("isAddUserInputsEmpty");
      store.commit("clearAddUserInputs");
    },
  },
  computed: {
    ...mapState([
      "failedUsername",
      "failedEmail",
      "failedPassword",
      "succeeded",
      "failed",
      "successMessage",
      "errorMessage",
      "inputsEmpty",
      "username",
      "email",
      "password",
    ]),
  },
};
</script>

<style scoped src="../assets/css/add-user-component.css">
</style>

