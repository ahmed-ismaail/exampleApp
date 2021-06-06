<template>
  <div>
    <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"
    />
    <table-component :list="novaGovernmentsList"/>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  methods: {
    getGovernments() {
      this.getGovernmentFromStore();
    },
    ...mapActions("nova-store/governments-table-module",["getGovernmentFromStore"]),
  },
  mounted() {
    this.getGovernments();
  },
  computed: {
    ...mapState("nova-store/governments-table-module",["novaGovernmentsList"]),
  },
};
</script>
