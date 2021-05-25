<template>
  <div id="governmentList">
    <div v-if="governmentList != null">
      <select v-model="key" @change="onSelectChange">
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
      <success-component v-if="succeeded" :content="successMessage" />
      <fail-component v-if="failed" :content="errorMessage" />
    </div>
  </div>
</template> 

<script>
import axios from "axios";

export default {
  name: "GovernmentsListComponent",
  props: {
    callUpdateList: {
      type: Boolean,
      default: false,
    },
    callHideAlerts: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      governmentList: [],
      key: "",
      governmentId: "",
      isHidden: true,
      failed: false,
      succeeded: false,
      errorMessage: "",
      successMessage: "",
    };
  },
  methods: {
    retrieveGovernmentsList() {
      axios
        .get(process.env.VUE_APP_RETRIEVE_GOVERNMENTS_LIST_URL)
        .then((list) => {
          this.governmentList = list.data;
        })
        .catch(() => {
          console.log("error loading");
        });
    },
    onSelectChange() {
      this.$emit("hideInputAlerts");
      this.governmentId = this.key;
      this.isHidden = false;
      this.failed = false;
      this.succeeded = false;
    },
    deleteGovernment() {
      this.removeAlerts();
      axios
        .post(process.env.VUE_APP_DELETE_GOVERNMENT_URL, {
          id: this.governmentId,
        })
        .then((response) => {
          this.succeeded = true;
          this.successMessage = response.data.message;
          this.$emit("updateCountAfterDelete");
          this.retrieveGovernmentsList();
          console.log(response);
        })
        .catch((e) => {
          this.failed = true;
          this.errorMessage = e.response.data.message;
          console.log(e.response.data);
        });
    },
    removeAlerts() {
      this.failed = false;
      this.succeeded = false;
    },
  },
  watch: {
    callUpdateList() {
      this.retrieveGovernmentsList();
    },
    callHideAlerts() {
      this.removeAlerts();
    },
  },
  mounted: function () {
    this.retrieveGovernmentsList();
  },
};
</script>

<style scoped src="../assets/css/government-list-component.css">
</style>
