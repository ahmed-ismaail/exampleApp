 <template>
  <div id="div">
    <input
      type="button"
      :value="btnValue"
      @click.prevent="addItem"
      :disabled="isButtonDisabled"
    />
  </div>
</template>

<script>
export default {
  name: "CustomButton",
  props: {
    btnValue: String,
    isButtonDisabled: Boolean,
  },
  methods: {
    addItem() {
      this.$emit("methodAdd");
    },
  },
};
</script>

<style scoped src="../assets/css/custom-button-component.css">
</style>

