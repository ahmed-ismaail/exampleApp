 <template>
  <div>
    <input
      type="text"
      :placeholder="placeHolderText"
      v-model="governmentName"
      @keyup="passInput"
    />
  </div>
</template>

<script>
export default {
  name: "CustomInput",
  props: {
    placeHolderText: String,
    method: { type: Function },
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
  },
};
</script>

