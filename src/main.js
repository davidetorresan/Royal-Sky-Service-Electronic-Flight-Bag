import { createApp } from 'vue'
import App from './App.vue'
//import './registerServiceWorker'
import router from './router'
import { store } from './store/store'
import axios from 'axios';
import './index.css'


axios.defaults.withCredentials = true
axios.defaults.baseURL = 'https://royalskyservice.it/api';

/*
new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')*/

const app = createApp(App)
app.config.productionTip = false

app.use(store)
app.use(router)

app.mount('#app')

const location = {
  latitude: '45.445',
  longitude: '9.277',
  icao: 'LIMF'
}



localStorage.setItem('location', JSON.stringify(location))