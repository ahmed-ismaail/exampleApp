<template>
  <div v-if="labelText != null">
    <label >{{labelText}}</label>
  </div>
</template>

<script>
export default {
  name: "Label",
  props: {
    labelText: String
  }
};
</script>
