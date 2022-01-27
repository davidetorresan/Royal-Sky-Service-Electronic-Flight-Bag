import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { store } from './store/store'
import axios from 'axios';
import './index.css'

const base = axios.create({
    baseURL: 'https://royalskyservice.it/api'
});  

const app = createApp(App)
app.config.productionTip = false

app.use(store)
app.use(router)
axios.defaults.baseURL = 'https://royalskyservice.it/api'
app.config.globalProperties.$axios = axios;

app.mixin({
    methods: {
        formatDate: (string) => {
            return string.split("-").reverse().join("-");    
            /*const date = new Date(string)
            return date.value.split("-").reverse().join("-"); */
        },
    },
})


app.mount('#app')