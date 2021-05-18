 <template>
  <div id="div">
    <CustomInput placeHolderText="Enter government name..." class="textInput"/>
    <input type="button" :value="btnValue" @click.prevent="addItem" />
  </div>
</template>


<script>
import axios from "axios";
import CustomInput from "./CustomInput.vue";


export default {
  name: "CustomButton",
  components: {
    CustomInput
  },
  props: {
    btnValue: String,
  },
  methods: {
    addItem() {
      axios
        .post("http://localhost:8000/api/addGovernment", {
          name: CustomInput.data,         
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

<style>

#div{
  display: flex;
}

.textInput{
  flex: 8;
}  

.addButton{
  flex: 2;
}
</style>

