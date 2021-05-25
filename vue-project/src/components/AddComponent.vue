<template>
  <form id="form">
    <custom-label labelText="government" class="label" />
    <custom-input
      placeHolderText="Enter government name..."
      v-on:get-input="getGovernmentName"
      ref="input"
      @writing="removeMessage(); hideListAlertsEmit();"
      :isDisabled="inputDisabled"
    />
    <custom-button
      btnValue="Add"
      class="addButton"
      @methodAdd="addItem"
      :isButtonDisabled="buttonDisabled"
    />
    <loading-component v-if="isLoading" />
    <success-component v-if="succeeded" :content="successMessage" />
    <fail-component v-if="failed" :content="errorMessage" />
  </form>
</template>

<script>
import axios from "axios";

export default {
  name: "AddComponent",
  props: {
    callHideAlerts: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      governmentName: "",
      isLoading: false,
      succeeded: false,
      failed: false,
      inputDisabled: false,
      buttonDisabled: false,
      errorMessage: "",
      successMessage: "",
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
          .then((response) => {
            this.isLoading = false;
            this.succeeded = true;
            this.successMessage = response.data.message;
            this.governmentName = "";
            this.$refs.input.governmentName = "";
            this.enableform();
            this.updateGovernmentsCount();
          })
          .catch((e) => {
            this.isLoading = false;
            this.failed = true;
            this.errorMessage = e.response.data;
            this.enableform();
          });
      } else {
        this.isLoading = false;
        this.failed = true;
        this.errorMessage = "Can't leave input empty";
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
    hideListAlertsEmit() {
      console.log("testin this this this");
      this.$emit("hideListAlerts");
    },
    updateGovernmentsCount() {
      this.$emit("updateCount");
    },
  },
  watch: {
    callHideAlerts() {
      this.removeMessage();
    },
  },
};
</script>

<style scoped src="../assets/css/add-component.css">
</style>
