<template>
  <form id="form">
    <CustomLabel labelText="government" class="label" />
    <CustomInput
      placeHolderText="Enter government name..."
      v-on:get-input="parentmethod"
    />
    <CustomButton btnValue="Add" class="addButton" @methodAdd="addItem" />
  </form>
</template>

<script>
import CustomLabel from "./CustomLabel.vue";
import CustomInput from "./CustomInput.vue";
import CustomButton from "./CustomButton.vue";
import axios from "axios";

export default {
  name: "AddComponent",
  components: {
    CustomLabel,
    CustomButton,
    CustomInput,
  },
  data() {
    return {
      governmentName: "",
    };
  },
  methods: {
    parentmethod(value) {
      this.governmentName = value;
    },
    addItem() {
      console.log("test env "+process.env.VUE_APP_ADD_GOVERNMENT_URL);
      axios
         .post("http://localhost:80/api/addGovernment", {
        //.post(process.env.VUE_APP_ADD_GOVERNMENT_URL, {
          name: this.governmentName,
        })
        .then((response) => {
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
};
</script>

<style scoped src="../assets/css/add-component.css">
</style>
