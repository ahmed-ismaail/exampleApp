 <template>
  <div id="fail-div">
    <label >{{content}}</label>
  </div>
</template>

<script>

export default {
  name: "FailComponent", 
  props:{
    content:{
      type:String,
      default:""
    }
  }
};
</script>

<style scoped src="../assets/css/fail-component.css">
</style>

