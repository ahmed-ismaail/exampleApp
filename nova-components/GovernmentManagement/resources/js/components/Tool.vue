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
        <tr v-for="government in novaGovernmentsList" :key="government.id">
          <td>{{ government.id }}</td>
          <td>{{ government.name }}</td>
          <td>{{ government.IsActive }}</td>
          <td>{{ government.created_at }}</td>
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
        let temp = {};
        element["fields"].forEach((field) => {
          _.extend(temp, { [field["attribute"]]: field["value"] });
        });
        governmentsList.push(temp);
      });
      return governmentsList;
    },
    getGovernments() {
      Nova.request()
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
