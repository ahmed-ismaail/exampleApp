<template>
  <div>
    <label> Total count of governments: {{ governmentCount }} </label>
  </div>
</template> 

<script>
import axios from "axios";

export default {
  name: "GovernmentsCountComponent",
  data() {
    return {
      governmentCount: 0,
    };
  },
  props: {
    callUpdateCount: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    retrieveGovernmentsCount() {
      axios
        .get(process.env.VUE_APP_RETRIEVE_GOVERNMENTS_COUNT_URL)
        .then((count) => {
          this.governmentCount = count.data;
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  watch: {
    callUpdateCount() {
      this.retrieveGovernmentsCount();
    },
  },
  mounted: function () {
    this.retrieveGovernmentsCount();
  },
};
</script>
