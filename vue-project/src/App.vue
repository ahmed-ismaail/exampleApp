<template>
  <div id="app">
    <add-component @updateCount="retrieveGovernmentsCount" />
    <governments-count-component :governmentCount="governments" />
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "App",
  data() {
    return {
      governments: 0,
    };
  },
  methods: {
    retrieveGovernmentsCount() {
      axios
        .get(process.env.VUE_APP_RETRIEVE_GOVERNMENTS_COUNT_URL)
        .then((count) => {
          this.governments = count.data;
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  mounted: function () {
    this.retrieveGovernmentsCount();
  },
};
</script>


