<template>
  <form id="form">
    <CustomLabel labelText="newlabel" class="label" />
    <CustomInput
      placeHolderText="Enter government name..."
      class="textInput"
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
      namgovernmentName: "",
    };
  },
  methods: {  
    parentmethod(value) {
      console.log(value);
      return value;
    },
    addItem() {
      console.log("testing this");
      axios
        .post("http://localhost:8000/api/addGovernment", {
          name: this.parentmethod.arguments,
        })
        .then((response) => {
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },
  }
};
</script>

<style>
form {
  display: flex;
}

.addButton {
  flex: 10;
}
.label {
  flex: 2;
}
</style>
