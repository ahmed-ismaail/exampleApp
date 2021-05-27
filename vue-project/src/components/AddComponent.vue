<template>
  <form id="form">
    <custom-label labelText="government" class="label" />
    <custom-input
      placeHolderText="Enter government name..."
      inputType="text"
      v-on:get-input="getGovernmentName"
      ref="input"
      @writing="
        removeAlerts();
        hideListAlertsEmit();
      "
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
import store from "./../Store";
import { mapState } from "vuex";

export default {
  name: "AddComponent",
  store,
  props: {
    callHideAlerts: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      governmentName: "",
    };
  },
  methods: {
    getGovernmentName(value) {
      this.governmentName = value;
    },
    addItem() {
      store.commit("isLoading");
      store.commit("clearAlerts");
      store.commit("disableButton");
      store.commit("disableInput");
      if (this.governmentName != "") {
        axios
          .post(process.env.VUE_APP_ADD_GOVERNMENT_URL, {
            name: this.governmentName,
          })
          .then((response) => {
            !store.commit("isLoading");
            store.commit("isSucceeded");
            store.commit("showSuccess",response.data.message);
            this.governmentName = "";
            this.$refs.input.inputText = "";
            this.enableform();
            this.updateGovernmentsCount();
          })
          .catch((e) => {
            !store.commit("isLoading");
            store.commit("isFailed");
            store.commit("showError", e.response.data);
            this.enableform();
          });
      } else {
        !store.commit("isLoading");
        store.commit("isFailed");
        store.commit("showError", "Can't leave input empty");
        this.enableform();
      }
    },
    enableform() {
      !store.commit("disableButton");
      !store.commit("disableInput");
    },
    removeAlerts() {
      store.commit("clearAlerts");
    },
    hideListAlertsEmit() {
      this.$emit("hideListAlerts");
    },
    updateGovernmentsCount() {
      this.$emit("updateCount");
    },
  },
  watch: {
    callHideAlerts() {
      this.removeAlerts();
    },
  },
  computed: {
    ...mapState([
      "succeeded",
      "inputDisabled",
      "buttonDisabled",
      "failed",
      "succeeded",
      "errorMessage",
      "successMessage",
    ]),
  },
};
</script>

<style scoped src="../assets/css/add-component.css">
</style>
