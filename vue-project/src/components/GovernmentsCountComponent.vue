<template>
  <div>
    <label> Total count of governments: {{ governmentCount }}</label>
  </div>
</template>

<script>
export default {
  name: "GovernmentsCountComponent",
  props: {
    governmentCount: {
      type: Number,
      default: 0,
    },
  },
};
</script>
