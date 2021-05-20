<template>
  <div>
    <label v-if="labelText != null">{{labelText}}</label>
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
