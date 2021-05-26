<template>
  <div id="app">
    <label @change="switchComponents">
      <input type="checkbox" />
      <span>Add User</span>
    </label>
    <div v-if="!switchToUser">
      <h3>Add Government</h3>
      <add-component
        @updateCount="changeUpdateState"
        :callHideAlerts="hideAlerts"
        @hideListAlerts="changeHideAlertsState"
      />
      <governments-count-component :callUpdateCount="update" />
      <governments-list-component
        :callUpdateList="update"
        @updateCountAfterDelete="changeUpdateState"
        @hideInputAlerts="changeHideAlertsState"
        :callHideAlerts="hideAlerts"
      />
    </div>
    <div v-else>
      <h3>Add User Form</h3>
      <add-user-component />
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      update: false,
      hideAlerts: false,
      switchToUser: false,
    };
  },
  methods: {
    changeUpdateState() {
      return (this.update = !this.update);
    },
    changeHideAlertsState() {
      return (this.hideAlerts = !this.hideAlerts);
    },
    switchComponents() {
      this.switchToUser = !this.switchToUser;
    },
  },
};
</script>


