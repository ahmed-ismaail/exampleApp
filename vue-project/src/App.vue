<template>
  <div id="app">
    <label @change="switchComponents">
      <input type="checkbox" />
      <span>Add User</span>
    </label>
    <div v-if="!switchToUser">
      <h3>Add Government</h3>
      <add-component />
      <governments-count-component />
      <governments-list-component />
    </div>
    <div v-else>
      <h3>Add User Form</h3>
      <add-user-component />
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";

export default {
  name: "App",
  methods: {
    switchComponents() {
      this.switchComponents();
    },
    ...mapMutations(["switchComponents"]),
  },
  computed: {
    ...mapState(["switchToUser"]),
  },
};
</script>


