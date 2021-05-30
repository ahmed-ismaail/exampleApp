import { createStore } from 'vuex'
import 'es6-promise/auto'
import axios from "axios"
import helper from "./helperClass.js"

const store = createStore({
    state: {
        governmentName: "",
        isLoading: false,
        succeeded: false,
        failed: false,
        inputDisabled: false,
        buttonDisabled: false,
        errorMessage: "",
        successMessage: "",
        failedUsername: false,
        failedEmail: false,
        failedPassword: false,
        inputsEmpty: false,
        username: "",
        email: "",
        password: "",
        governmentCount: 0,
        //listCompnent
        governmentList: [],
        key: "",
        governmentId: "",
        isHidden: true,
        failedDelete: false,
        succeededDelete: false,
        switchToUser: false,
        failedAddUser: false,
        succeededAddUser: false
    },
    getters: {
        getGovernmentCount(state) {
            return state.governmentCount;
        },
        getUsername(state) {
            return state.username;
        },
        getEmail(state) {
            return state.email;
        },
        getPassword(state) {
            return state.password;
        },
        getGovernmentName(state) {
            return state.governmentName;
        },
        getGovernmentId(state) {
            return state.governmentId;
        },
    },
    mutations: {
        setGovernmentId(state, payload) {
            state.governmentId = payload;
        },
        setGovernmentName(state, payload) {
            state.governmentName = payload;
        },
        setGovernmentCount(state, payload) {
            state.governmentCount = payload;
        },
        setGovernmentsList(state, payload) {
            state.governmentList = payload;
        },
        switchComponents(state) {
            state.switchToUser = !state.switchToUser;
        },
        disableButton(state) {
            return state.buttonDisabled = !state.buttonDisabled;
        },
        disableInput(state) {
            return state.inputDisabled = !state.inputDisabled;
        },
        isLoading(state) {
            return state.isLoading = true;
        },
        isFailed(state) {
            state.failed = true;
        },
        isSucceeded(state) {
            state.succeeded = true;
        },
        clearAlerts(state) {
            state.failed = false;
            state.succeeded = false;
        },
        showError(state, payload) {
            state.errorMessage = payload;
        },
        showSuccess(state, payload) {
            state.successMessage = payload;
        },
        isFailedUsername(state) {
            state.failedUsername = true;
        },
        isFailedEmail(state) {
            state.failedEmail = true;
        },
        isFailedPassword(state) {
            state.failedPassword = true;
        },
        setUsername(state, value) {
            state.username = value;
        },
        setEmail(state, value) {
            state.email = value;
        },
        setPassword(state, value) {
            state.password = value;
        },
        isInputEmpty(state) {
            state.inputsEmpty = !state.inputsEmpty;
        },
        clearAddUserInputs(state) {
            state.username = "";
            state.email = "";
            state.password = "";
        },
        removeAddUserAlerts(state) {
            state.failedUsername = false;
            state.failedEmail = false;
            state.failedPassword = false;
            state.failedAddUser = false;
            state.succeededAddUser = false;
        },
        setHidden(state) {
            state.isHidden = false;
        },
        isFailedDelete(state) {
            state.failedDelete = true;
        },
        isSucceededDelete(state) {
            state.succeededDelete = true;
        },
        removeDeleteAlerts(state) {
            state.failedDelete = false;
            state.succeededDelete = false;
        },
        isFailedAddUser(state) {
            state.failedAddUser = true;
        },
        isSucceededAddUser(state) {
            state.succeededAddUser = true;
        }
    }, actions: {
        addUser({ commit }) {
            commit("removeAddUserAlerts");
            if (store.getters.getUsername === "") {
                commit("isFailedUsername");
                commit("showError", "you must enter a username");
            }
            else if (store.getters.getEmail === "") {
                store.commit("isFailedEmail");
                store.commit("showError", "you must enter a email");
            } else if (store.getters.getPassword === "") {
                store.commit("isFailedPassword");
                store.commit("showError", "you must enter a password");
            } else if (store.getters.getEmail !== "" && !helper.validateEmail(store.getters.getEmail)) {
                store.commit("isFailedEmail");
                store.commit("showError", "Please enter a valid email");
            } else if (
                store.getters.getUsername !== "" &&
                !helper.validateUsername(store.getters.getUsername)
            ) {
                store.commit("isFailedUsername");
                store.commit("showError", "Please enter a valid username");
            }
            else {
                axios
                    .post(process.env.VUE_APP_ADD_USER_URL, {
                        name: store.getters.getUsername,
                        email: store.getters.getEmail,
                        password: store.getters.getPassword,
                    })
                    .then((response) => {
                        commit("isInputEmpty");
                        commit("clearAddUserInputs");
                        commit("isSucceededAddUser");
                        commit("showSuccess", response.data.message);
                    })
                    .catch((e) => {
                        commit("isFailedAddUser");
                        commit("showError", e.response.data.message);
                    });
            }
        },
        retrieveGovernmentsCount({ commit }) {
            axios
                .get(process.env.VUE_APP_RETRIEVE_GOVERNMENTS_COUNT_URL)
                .then((count) => {
                    commit("setGovernmentCount", count.data);
                })
                .catch((e) => {
                    console.log(e);
                });
        },
        addGovernment({ commit, dispatch }) {
            commit("isLoading");
            commit("clearAlerts");
            commit("disableButton");
            commit("disableInput");
            if (store.getters.getGovernmentName != "") {
                axios
                    .post(process.env.VUE_APP_ADD_GOVERNMENT_URL, {
                        name: store.getters.getGovernmentName,
                    })
                    .then((response) => {
                        !commit("isLoading");
                        commit("isSucceeded");
                        commit("showSuccess", response.data.message);
                        commit("setGovernmentName", "");
                        commit("isInputEmpty");
                        !commit("disableButton");
                        !commit("disableInput");
                        dispatch("retrieveGovernmentsCount");
                        dispatch("retrieveGovernmentsList");
                    })
                    .catch((e) => {
                        !commit("isLoading");
                        commit("isFailed");
                        commit("showError", e.response.data);
                        !commit("disableButton");
                        !commit("disableInput");
                    });
            } else {
                !commit("isLoading");
                commit("isFailed");
                commit("showError", "Can't leave input empty");
                !commit("disableButton");
                !commit("disableInput");
            }
        },
        retrieveGovernmentsList({ commit }) {
            axios
                .get(process.env.VUE_APP_RETRIEVE_GOVERNMENTS_LIST_URL)
                .then((list) => {
                    commit("setGovernmentsList", list.data);
                })
                .catch(() => {
                    console.log("error loading");
                });
        },
        deleteGovernment({ commit, dispatch }) {
            commit("removeDeleteAlerts");
            if (store.getters.getGovernmentId != null) {
                axios
                    .post(process.env.VUE_APP_DELETE_GOVERNMENT_URL, {
                        id: store.getters.getGovernmentId,
                    })
                    .then((response) => {
                        commit("isSucceededDelete");
                        commit("showSuccess", response.data.message);
                        commit("setGovernmentId", null);
                        dispatch("retrieveGovernmentsCount");
                        dispatch("retrieveGovernmentsList");
                    })
                    .catch((e) => {
                        commit("isFailedDelete");
                        commit("showError", e.response.data.message);
                    });
            } else {
                commit("isFailedDelete");
                commit("showError", "you have to select a government");
            }
        }
    }
})

export default store
