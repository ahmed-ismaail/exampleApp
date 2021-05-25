<template>
  <div id="app">
    <add-component @updateCount="changeUpdateState" />
    <governments-count-component :callUpdateCount="update" />
    <governments-list-component :callUpdateList="update" @updateCountAfterDelete="changeUpdateState" />
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      update: false,
    };
  }, 
  methods: {
    changeUpdateState() {
      return (this.update = !this.update);
    }
  },
};
</script>


