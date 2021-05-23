import { createApp } from 'vue'
import App from './App.vue'
import CustomLabel from "./components/CustomLabel.vue"
import CustomInput from "./components/CustomInput.vue"
import CustomButton from "./components/CustomButton.vue"
import AddComponent from "./components/AddComponent.vue"
import LoadingComponent from "./components/LoadingComponent.vue"
import SuccessComponent from "./components/SuccessComponent.vue"
import FailComponent from "./components/FailComponent.vue"

const app = createApp(App)

app.component('custom-label', CustomLabel)
app.component('custom-input', CustomInput)
app.component('custom-button', CustomButton)
app.component('add-component', AddComponent)
app.component('loading-component', LoadingComponent)
app.component('success-component', SuccessComponent)
app.component('fail-component', FailComponent)

app.mount('#app')