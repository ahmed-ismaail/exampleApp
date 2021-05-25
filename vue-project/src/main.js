import { createApp } from 'vue'
import App from './App.vue'
import CustomLabel from "./components/CustomLabel.vue"
import CustomInput from "./components/CustomInput.vue"
import CustomButton from "./components/CustomButton.vue"
import AddComponent from "./components/AddComponent.vue"
import LoadingComponent from "./components/LoadingComponent.vue"
import SuccessComponent from "./components/SuccessComponent.vue"
import FailComponent from "./components/FailComponent.vue"
import GovernmentsCountComponent from "./components/GovernmentsCountComponent.vue"
import GovernmentsListComponent from "./components/GovernmentsListComponent.vue"
import AddUser from "./components/AddUser.vue"

const app = createApp(App)

app.component('custom-label', CustomLabel)
app.component('custom-input', CustomInput)
app.component('custom-button', CustomButton)
app.component('add-component', AddComponent)
app.component('loading-component', LoadingComponent)
app.component('success-component', SuccessComponent)
app.component('fail-component', FailComponent)
app.component('governments-count-component', GovernmentsCountComponent)
app.component('governments-list-component', GovernmentsListComponent)
app.component('add-user-component', AddUser)

app.mount('#app')