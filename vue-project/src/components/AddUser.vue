<template>
  <form>
    <custom-label labelText="Username" class="label" />
    <custom-input
      placeHolderText="Enter username..."
      @get-input="setUsername"
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
      @get-input="setEmail"
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
      @get-input="setPassword"
      inputType="password"
      @writing="removeAlerts"
      :clearInput="inputsEmpty"
    />
    <div id="divMessage">
      <fail-component v-if="failedPassword" :content="errorMessage" />
    </div>
    <custom-button btnValue="Add" class="addButton" @click="addUser" />
    <div id="divMessage">
      <fail-component v-if="failedAddUser" :content="errorMessage" />
      <success-component v-if="succeededAddUser" :content="successMessage" />
    </div>
  </form>
</template>

<script>
import { mapActions, mapMutations, mapState } from "vuex";

export default {
  name: "AddUser",
  methods: {
    addUser() {
      this.addUser();
    },
    setUsername(value) {
      this.setUsername(value);
    },
    setEmail(value) {
      this.setEmail(value);
    },
    setPassword(value) {
      this.setPassword(value);
    },
    removeAlerts() {
      this.removeAddUserAlerts();
    },
    ...mapActions(["addUser"]),
    ...mapMutations([
      "removeAddUserAlerts",
      "setPassword",
      "setEmail",
      "setUsername",
    ]),
  },
  computed: {
    ...mapState([
      "failedUsername",
      "failedEmail",
      "failedPassword",
      "succeededAddUser",
      "failedAddUser",
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

