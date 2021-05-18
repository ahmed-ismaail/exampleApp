<template>
  <form id="form">
    <CustomLabel labelText="newlabel" class="label" v-on:add-todo="addItem"/>
    <CustomButton btnValue="Add" class="addButton"/>
  </form>
</template>

<script>
import CustomLabel from "./CustomLabel.vue";
// import CustomInput from "./CustomInput.vue";
import CustomButton from "./CustomButton.vue";
// import axios from "axios";

export default {
  name: "AddComponent",
  components: {
    CustomLabel,
    CustomButton,
    // CustomInput
  },
  methods: {


    // addItem() {
    //   axios
    //     .post("http://localhost:8000/api/addGovernment", {
    //       // name: "Cairo", 
    //       name:CustomInput.data.governmentName         
    //     })
    //     .then((response) => {
    //       console.log(response.data);
    //     })
    //     .catch((e) => {
    //        console.log(e);
    //     });
    // },
  },
};
</script>

<style>

 form{
  display: flex;
}

.addButton{
  flex: 10;
}
.label{
  flex: 2;
}
</style>
