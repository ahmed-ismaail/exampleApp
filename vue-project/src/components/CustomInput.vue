 <template>
  <div>
    <input
      type="text"
      :placeholder="placeHolderText"
      v-model="inputText"
      @keyup="passInput"
      @keydown="listenInput"
      :disabled="isDisabled"
    />
  </div>
</template>

<script>
export default {
  name: "CustomInput",
  props: {
    placeHolderText: String,
    method: { type: Function },
    isDisabled: Boolean,
  },
  data() {
    return {
      inputText: "",
    };
  },
  methods: {
    passInput() {
      this.$emit("get-input", this.inputText);
    },
    listenInput(){
      this.$emit("writing");
    }
  },
};
</script>

