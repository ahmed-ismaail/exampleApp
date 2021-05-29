import { createStore } from 'vuex'
import 'es6-promise/auto'

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
        // usernameErrorMessage: "",
        // emailErrorMessage: "",
        // passwordErrorMessage: "",
        inputsEmpty: false,
        username: "",
        email: "",
        password: "",
    },
    mutations: {
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
        showUsernameErrorMessage(state, payload) {
            state.usernameErrorMessage = payload;
        },
        showEmailErrorMessage(state, payload) {
            state.emailErrorMessage = payload;
        },
        showPasswordErrorMessage(state, payload) {
            state.passwordErrorMessage = payload;
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
        isAddUserInputsEmpty(state) {
            state.inputsEmpty = true;
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
            state.failed = false;
            state.succeeded = false;
        },
    },
})

export default store
