<template>
  <div>
    <div v-if="governmentList != null">
      <select v-model="key" @change="getGovernmentId">
        <option disabled value="" selected="selected">Please select one</option>
        <option
          v-for="governemnt in governmentList"
          :key="governemnt.id"
          :value="governemnt.id"
        >
          {{ governemnt.name }}
        </option>
      </select>
    </div>
    <input type="button" value="Delete" @click="deleteGovernment" />
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
  },
  data() {
    return {
      governmentList: [],
      key: "",
      governmentId: "",
    };
  },
  methods: {
    retrieveGovernmentsList() {
      axios
        // .get(process.env.VUE_APP_RETRIEVE_GOVERNMENTS_LIST_URL)
        .get("http://localhost:80/api/getGovernmentsList")
        .then((list) => {
          this.governmentList = list.data;
        })
        .catch(() => {
          console.log("error loading");
        });
    },
    getGovernmentId() {
      this.governmentId = this.key;
    },
    deleteGovernment() {
      axios
        .post("http://localhost:80/api/deleteGovernment", {
          //.post(process.env.VUE_APP_DELETE_GOVERNMENT_URL, {
          id: this.governmentId,
        })
        .then((response) => {
          this.$emit("updateCountAfterDelete");
          this.retrieveGovernmentsList();
          console.log(response);
        })
        .catch(() => {
          console.log("error deleting");
        });
    },
  },
  watch: {
    callUpdateList() {
      this.retrieveGovernmentsList();
    },
  },
  mounted: function () {
    this.retrieveGovernmentsList();
  },
};
</script>
