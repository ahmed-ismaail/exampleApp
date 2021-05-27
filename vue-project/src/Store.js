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
            return state.errorMessage = payload;
        },
        showSuccess(state, payload) {
            return state.successMessage = payload;
        }
    },
})

export default store
