<template>
  <form id="form">
    <custom-label labelText="government" class="label" />
    <custom-input
      placeHolderText="Enter government name..."
      v-on:get-input="getGovernmentName"
      ref="input"
      @writing="removeMessage"
      :isDisabled="inputDisabled"
    />
    <custom-button
      btnValue="Add"
      class="addButton"
      @methodAdd="addItem"
      :isButtonDisabled="buttonDisabled"
    />
    <loading-component v-if="isLoading"> </loading-component>
    <success-component v-if="succeeded"> </success-component>
    <fail-component v-if="failed"> </fail-component>
  </form>
</template>

<script>
import axios from "axios";

export default {
  name: "AddComponent",
  data() {
    return {
      governmentName: "",
      isLoading: false,
      succeeded: false,
      failed: false,
      inputDisabled: false,
      buttonDisabled: false,
    };
  },
  methods: {
    getGovernmentName(value) {
      this.governmentName = value;
    },
    addItem() {
      this.isLoading = true;
      this.removeMessage();
      this.buttonDisabled = true;
      this.inputDisabled = true;
      if (this.governmentName != "") {
        axios
          .post(process.env.VUE_APP_ADD_GOVERNMENT_URL, {
            name: this.governmentName,
          })
          .then(() => {
            this.isLoading = false;
            this.succeeded = true;
            this.governmentName = "";
            this.$refs.input.governmentName = "";
            this.enableform();
          })
          .catch(() => {
            this.isLoading = false;
            this.failed = true;
            this.enableform();
          });
      } else {
        this.isLoading = false;
        this.failed = true;
        this.enableform();
      }
    },
    enableform() {
      this.buttonDisabled = false;
      this.inputDisabled = false;
    },
    removeMessage() {
      this.failed = false;
      this.succeeded = false;
    },
  },
};
</script>

<style scoped src="../assets/css/add-component.css">
</style>
