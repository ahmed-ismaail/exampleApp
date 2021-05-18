<template>
  <div>
    <label>{{labelText}}</label>
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
