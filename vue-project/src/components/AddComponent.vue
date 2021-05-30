<template>
  <form id="form">
    <custom-label labelText="government" class="label" />
    <custom-input
      placeHolderText="Enter government name..."
      inputType="text"
      v-on:get-input="setGovernmentName"
      :clearInput="inputsEmpty"
      @writing="removeAlerts()"
      :isDisabled="inputDisabled"
    />
    <custom-button
      btnValue="Add"
      class="addButton"
      @methodAdd="addGovernment"
      :isButtonDisabled="buttonDisabled"
    />
    <loading-component v-if="isLoading" />
    <success-component v-if="succeeded" :content="successMessage" />
    <fail-component v-if="failed" :content="errorMessage" />
  </form>
</template>

<script>
import store from "./../Store";
import { mapState } from "vuex";

export default {
  name: "AddComponent",
  methods: {
    setGovernmentName(value) {
      store.commit("setGovernmentName", value);
    },
    addGovernment() {
      store.dispatch("addGovernment");
    },
    removeAlerts() {
      store.commit("removeDeleteAlerts");
      store.commit("clearAlerts");
    },
  },
  computed: {
    ...mapState([
      "governmentName",
      "succeeded",
      "inputDisabled",
      "buttonDisabled",
      "failed",
      "succeeded",
      "errorMessage",
      "successMessage",
      "inputsEmpty",
    ]),
  },
};
</script>

<style scoped src="../assets/css/add-component.css">
</style>
