import helper from "../js/helper"

export default {
     namespaced: true,
    state: () => ({
        novaGovernmentsList: [],
    }),
    mutations: {
        setGovernmentsList(state, payload) {
            state.novaGovernmentsList = payload;
        }
    }, actions: {
        getGovernmentFromStore({ commit }) {
            Nova.request()
                .get("/nova-api/governments")
                .then((list) => {
                    commit("setGovernmentsList", helper.customizeObject(list.data.resources));
                })
                .catch(() => {
                    console.log("error loading");
                });
        },
    }
}