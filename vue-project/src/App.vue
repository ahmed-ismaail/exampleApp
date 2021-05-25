<template>
  <div id="app">
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
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      update: false,
      hideAlerts: false,
    };
  },
  methods: {
    changeUpdateState() {
      return (this.update = !this.update);
    },
    changeHideAlertsState() {
      return (this.hideAlerts = !this.hideAlerts);
    },
  },
};
</script>


