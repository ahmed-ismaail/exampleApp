<template>
  <form id="form">
    <custom-label labelText="Username" class="label" />
    <custom-input
      placeHolderText="Enter username..."
      @get-input="getUsername"
    />
    <custom-label labelText="Email" class="label" />
    <custom-input placeHolderText="Enter email..." @get-input="getEmail" />
    <custom-label labelText="Password" class="label" />
    <custom-input
      placeHolderText="Enter password..."
      @get-input="getPassword"
    />
    <custom-button btnValue="Add" class="addButton" @click="addUser" />
  </form>
</template>

<script>
import axios from "axios";

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
    };
  },
  methods: {
    addUser() {
      console.log("username: " + this.username);
      axios
        .post(process.env.VUE_APP_ADD_USER_URL, {
          name: this.username,
          email: this.email,
          password: this.password,
        })
        .then((response) => {
          console.log(response.data.message);
        })
        .catch((e) => {
          console.log(e.response.data);
        });
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
  },
};
</script>

