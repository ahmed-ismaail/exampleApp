<template>
  <div id="app">
    <add-component @updateCount="update" />
    <governments-count-component ref="count"/>
  </div>
</template>

<script>

export default {
  name: "App", 
  methods:{
    update(){
      this.$refs.count.retrieveGovernmentsCount();
    }
  }
};
</script>


