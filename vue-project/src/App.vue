<template>
  <div id="app">
    <add-component @updateCount="update = !update" />
    <governments-count-component :callUpdateCount="update" />
  </div>
</template>

<script>

export default {
  name: "App", 
  data(){
    return{
      update:false
    }
  }
};
</script>


