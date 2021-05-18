 <template>
  <div id="div">
    <input type="button" :value="btnValue" @click.prevent="addItem" />
  </div>
</template>

<script>

export default {
  name: "CustomButton",
  props: {
    btnValue: String,
    method: Function,
  },
  methods: {
    addItem() {
      this.$emit('methodAdd');
    },
  },
};
</script>

<style>
#div {
  display: flex;
}

.addButton {
  flex: 2;
}
</style>

