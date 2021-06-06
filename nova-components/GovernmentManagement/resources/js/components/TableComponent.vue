<template>
  <div>
    <table class="table table-bordered table-striped">
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>IsActive</th>
          <th>Created At</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="government in novaGovernmentsList" :key="government.id">
          <td>{{ government.id }}</td>
          <td>{{ government.name }}</td>
          <td>{{ government.IsActive }}</td>
          <td>{{ government.created_at }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  methods: {
    getGovernments() {
      this.getGovernmentFromStore();
    },
    ...mapActions("nova-store/module",["getGovernmentFromStore"]),
  },
  mounted() {
    this.getGovernments();
  },
  computed: {
    ...mapState("nova-store/module",["novaGovernmentsList"]),
  },
};
</script>
