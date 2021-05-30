<template>
  <div>
    <label> Total count of governments: {{ governmentCount }} </label>
  </div>
</template> 

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "GovernmentsCountComponent",
  methods: {
    getCount() {
      this.retrieveGovernmentsCount();
    },
    ...mapActions(["retrieveGovernmentsCount"]),
  },
  mounted: function () {
    this.getCount();
  },
  computed: {
    ...mapState(["governmentCount"]),
  },
};
</script>
