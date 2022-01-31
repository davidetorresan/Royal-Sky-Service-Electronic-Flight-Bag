import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css';

import './index.css'


const app = createApp(App)
app.config.productionTip = false

app.use(router)
app.use(VueSweetalert2)
axios.defaults.baseURL = 'https://royalskyservice.it/api'
app.config.globalProperties.$axios = axios

app.mixin({
    methods: {
        formatDate: (string) => {
            return string.split("-").reverse().join("-")
            /*const date = new Date(string)
            return date.value.split("-").reverse().join("-"); */
        },
        checkBookings: async () => {
            localStorage.removeItem('booking')

            let bookings = await axios.get('https://royalskyservice.it/api/get_user_booked_routes.php?id=82')

            if(bookings.data.status != 0){
                localStorage.setItem('booking', JSON.stringify({
                    booked: true,
                    data : bookings.data
                }))
            }
            else{
                localStorage.setItem('booking', JSON.stringify({
                    booked: false,
                    data : null
                }))
            }
        }
    },
})


app.mount('#app')