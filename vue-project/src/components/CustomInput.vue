 <template>
  <div>
    <input
      :type="inputType"
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
    isDisabled: Boolean,
    inputType: String,
    clearInput: Boolean
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
    listenInput() {
      this.$emit("writing");
    },
  },
  watch: {
    clearInput() {
      this.inputText = "";
    },
  },
};
</script>

