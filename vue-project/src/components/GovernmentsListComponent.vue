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
import { mapActions, mapMutations, mapState } from "vuex";

export default {
  name: "GovernmentsListComponent",
  methods: {
    retrieveGovernmentsList() {
      this.retrieveGovernmentsList();
    },
    onSelectChange(e) {
      this.setGovernmentId(e.target.value);
      this.setHidden();
      this.removeAlerts();
    },
    deleteGovernment() {
      this.deleteGovernment();
    },
    removeAlerts() {
      this.clearAlerts();
      this.removeDeleteAlerts();
    },
    ...mapMutations([
      "setGovernmentId",
      "setHidden",
      "clearAlerts",
      "removeDeleteAlerts",
    ]),
    ...mapActions(["retrieveGovernmentsList", "deleteGovernment"]),
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
