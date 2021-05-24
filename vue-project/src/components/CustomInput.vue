 <template>
  <div>
    <input
      type="text"
      :placeholder="placeHolderText"
      v-model="governmentName"
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
      governmentName: "",
    };
  },
  methods: {
    passInput() {
      this.$emit("get-input", this.governmentName);
    },
    listenInput(){
      this.$emit("writing");
    }
  },
};
</script>

