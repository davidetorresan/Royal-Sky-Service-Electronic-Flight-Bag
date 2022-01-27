import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { store } from './store/store'
import axios from 'axios';
import './index.css'

axios.defaults.withCredentials = true
axios.defaults.baseURL = 'https://royalskyservice.it/api';


const app = createApp(App)
app.config.productionTip = false

app.use(store)
app.use(router)

app.mount('#app')