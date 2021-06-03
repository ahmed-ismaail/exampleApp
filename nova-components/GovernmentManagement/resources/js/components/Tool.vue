<template>
  <div>
    <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"
    />
    <table class="table table-bordered table-striped">
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>IsActive</th>
          <th>Created At</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="g in novaGovernmentsList" :key="g.id">
          <td>{{ g.id }}</td>
          <td>{{ g.name }}</td>
          <td>{{ g.is_active }}</td>
          <td>{{ g.created_at }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";
// import helper from "./../../../../../vue-project/src/helperClass";
//import { mapActions, mapState } from "vuex";

export default {
  data() {
    return {
      novaGovernmentsList: [],
    };
  },
  methods: {
    customizeObject(list) {
      let governmentsList = [];
      list.forEach((element) => {
        governmentsList.push({
          id: element["fields"][0]["value"],
          name: element["fields"][1]["value"],
          is_active: element["fields"][2]["value"],
          created_at: element["fields"][3]["value"],
        });
      });
      // console.log(governmentsList);
      return governmentsList;
    },
    getGovernments() {
      axios
        .get("http://127.0.0.1/nova-api/governments")
        .then((list) => {
          this.novaGovernmentsList = this.customizeObject(list.data.resources);
        })
        .catch(() => {
          console.log("error loading");
        });
    },
    //...mapActions(["getGovernments"]),
  },
  mounted() {
    this.getGovernments();
  },
  // computed: {
  // ...mapState([
  // "novaGovernmentsList",
  // ]),
  // },
};
</script>
