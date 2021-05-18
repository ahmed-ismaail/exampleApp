<template>
  <div id="app">
    <AddComponent />
    <!-- <CustomLabel labelText="newlabel" />
    <CustomInput inputValue="this value is for testing."/>
    <CustomButton btnValue="Add" /> -->
  </div>
</template>

<script>
import AddComponent from "./components/AddComponent.vue";

// import CustomLabel from "./components/CustomLabel.vue";
// import CustomInput from "./components/CustomInput.vue";
// import CustomButton from "./components/CustomButton.vue";

export default {
  name: "App",
  components: {
    AddComponent,
    //  CustomButton,
    //  CustomLabel,
    //  CustomInput
  },
  methods: {
   
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
