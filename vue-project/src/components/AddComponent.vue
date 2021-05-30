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
import { mapState, mapMutations, mapActions } from "vuex";

export default {
  name: "AddComponent",
  methods: {
    setGovernmentName(value) {
      this.setGovernmentName(value);
    },
    addGovernment() {
      this.addGovernment();
    },
    removeAlerts() {
      this.removeDeleteAlerts();
      this.clearAlerts();
    },
    ...mapActions(["addGovernment"]),
    ...mapMutations(["setGovernmentName", "removeDeleteAlerts", "clearAlerts"]),
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
