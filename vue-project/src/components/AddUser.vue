<template>
  <form>
    <custom-label labelText="Username" class="label" />
    <custom-input
      placeHolderText="Enter username..."
      @get-input="getUsername"
      inputType="text"
      @writing="removeAlerts"
    />
    <div id="divMessage">
      <fail-component v-if="failedUsername" :content="usernameErrorMessage" />
    </div>
    <custom-label labelText="Email" class="label" />
    <custom-input
      placeHolderText="Enter email..."
      @get-input="getEmail"
      inputType="email"
      @writing="removeAlerts"
    />
    <div id="divMessage">
      <fail-component v-if="failedEmail" :content="emailErrorMessage" />
    </div>
    <custom-label labelText="Password" class="label" />
    <custom-input
      placeHolderText="Enter password..."
      @get-input="getPassword"
      inputType="password"
      @writing="removeAlerts"
    />
    <div id="divMessage">
      <fail-component v-if="failedPassword" :content="passwordErrorMessage" />
    </div>
    <custom-button btnValue="Add" class="addButton" @click="addUser" />
    <div id="divMessage">
      <fail-component v-if="failedSubmit" :content="submitErrorMessage" />
      <success-component
        v-if="succeededSubmit"
        :content="submitSuccessMessage"
      />
    </div>
  </form>
</template>

<script>
import axios from "axios";
import helper from "../helperClass.js"

export default {
  name: "AddUser",
  props: {
    callHideAlerts: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      username: "",
      email: "",
      password: "",
      failedUsername: false,
      failedEmail: false,
      failedPassword: false,
      failedSubmit: false,
      succeededSubmit: false,
      usernameErrorMessage: "",
      emailErrorMessage: "",
      passwordErrorMessage: "",
      submitErrorMessage: "",
      submitSuccessMessage: "",
      emailRegex: helper.emailRegex,
      usernameRegex: helper.usernameRegex
    };
  },
  methods: {
    addUser() {
      this.removeAlerts();
      if (this.username === "") {
        this.failedUsername = true;
        this.usernameErrorMessage = "you must enter a username";
      } else if (this.email === "") {
        this.failedEmail = true;
        this.emailErrorMessage = "you must enter a email";
      } else if (this.password === "") {
        this.failedPassword = true;
        this.passwordErrorMessage = "you must enter a password";
      } else if (this.email !== "" && !this.validateEmail()) {
        this.failedEmail = true;
        this.emailErrorMessage = "Please enter a valid email";
      } else if (this.username !== "" && !this.validateUsername()) {
        this.failedUsername = true;
        this.usernameErrorMessage = "Please enter a valid username";
      } else {
        axios
          .post(process.env.VUE_APP_ADD_USER_URL, {
            name: this.username,
            email: this.email,
            password: this.password,
          })
          .then((response) => {
            this.succeededSubmit = true;
            this.submitSuccessMessage = response.data.message;
          })
          .catch((e) => {
            this.failedSubmit = true;
            this.submitErrorMessage = e.response.data.message;
          });
      }
    },
    getUsername(value) {
      this.username = value;
    },
    getEmail(value) {
      this.email = value;
    },
    getPassword(value) {
      this.password = value;
    },
    validateEmail() {
      return this.emailRegex.test(this.email);
    },
    validateUsername() {
      return this.usernameRegex.test(this.username);
    },
    removeAlerts() {
      this.failedSubmit = false;
      this.succeededSubmit = false;
      this.failedUsername = false;
      this.failedEmail = false;
      this.failedPassword = false;
    },
  },
};
</script>

<style scoped src="../assets/css/add-user-component.css">
</style>

