<template>
  <div id="governmentList">
    <div v-if="governmentList != null">
      <select @change="onSelectChange">
        <option disabled value="" selected="selected">Please select one</option>
        <option
          v-for="governemnt in governmentList"
          :key="governemnt.id"
          :value="governemnt.id"
        >
          {{ governemnt.name }}
        </option>
      </select>
      <input
        :hidden="isHidden"
        type="button"
        value="Delete"
        @click="deleteGovernment"
      />
    </div>
    <div id="governmentListAlers">
      <success-component v-if="succeededDelete" :content="successMessage" />
      <fail-component v-if="failedDelete" :content="errorMessage" />
    </div>
  </div>
</template> 

<script>
import { mapState } from "vuex";
import store from "./../Store.js";

export default {
  name: "GovernmentsListComponent",
  methods: {
    retrieveGovernmentsList() {
      store.dispatch("retrieveGovernmentsList");
    },
    onSelectChange(e) {
      store.commit("setGovernmentId", e.target.value);
      store.commit("setHidden");
      this.removeAlerts();
    },
    deleteGovernment() {
      store.dispatch("deleteGovernment");
    },
    removeAlerts() {
      store.commit("clearAlerts");
      store.commit("removeDeleteAlerts");
    },
  },
  mounted: function () {
    this.retrieveGovernmentsList();
  },
  computed: {
    ...mapState([
      "governmentList",
      "governmentId",
      "isHidden",
      "failedDelete",
      "succeededDelete",
      "errorMessage",
      "successMessage",
    ]),
  },
};
</script>

<style scoped src="../assets/css/government-list-component.css">
</style>
