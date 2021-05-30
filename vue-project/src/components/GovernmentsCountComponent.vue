<template>
  <div>
    <label> Total count of governments: {{ governmentCount }} </label>
  </div>
</template> 

<script>
import store from "./../Store.js";
import { mapState } from "vuex";

export default {
  name: "GovernmentsCountComponent",
  props: {
    callUpdateCount: {
      type: Boolean,
      default: false,
    },
  },
  methods:{
    getCount(){
      store.dispatch("retrieveGovernmentsCount");
    }
  },
  watch: {
    callUpdateCount() {
      this.getCount();
    },
  },
  mounted: function () {
    this.getCount();
  },
  computed: {
    ...mapState(["governmentCount"]),
  },
};
</script>
