 <template>
  <div>
    <input type="text" :placeholder="placeHolderText" v-model="governmentName" />
  </div>
</template>

<script>
export default {
  name: "CustomInput",
  data(){
    return{
      governmentName:''
    }
  },
  props: {
    placeHolderText: String
  }
};
</script>

