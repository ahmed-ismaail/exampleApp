 <template>
  <div id="success-div">
    <label>{{content}}</label>
  </div>
</template>

<script>
export default {
  name: "SuccessComponent",
  props: {
    content: {
      type: String,
      default: "",
    },
  },
};
</script>

<style scoped src="../assets/css/success-component.css">
</style>

