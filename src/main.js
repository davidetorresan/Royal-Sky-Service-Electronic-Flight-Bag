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
        },
        roundToH: (num) => {
            if(num){
                const decimalHours = num;
                const n = new Date(0,0);
                n.setMinutes(+Math.round(decimalHours * 60)); 
                const days = (n.getDate() - 1)
                const hours = n.getHours()
                const minutes = n.getMinutes()

                return hours + ':' + minutes
            }else{
                return " "
            }
            

        },
        checkUserData: async (user) => {
            let temp = await axios.get(`https://royalskyservice.it/api/get_pilot_data.php?id=${user}`)

            localStorage.setItem('user', JSON.stringify(temp.data))
            
        },
        checkBookings: async (user, routeID) => {
            localStorage.removeItem('booking')

            let bookings = await axios.get('https://royalskyservice.it/api/get_user_booked_routes.php?id=' + user)

            if(bookings.data.status != 0){
                localStorage.setItem('booking', JSON.stringify({
                    booked: true,
                    data : bookings.data,
                    routeID: routeID ? routeID : null
                }))
            }
            else{
                localStorage.setItem('booking', JSON.stringify({
                    booked: false,
                    data : null
                }))
            }

            return bookings.data
        }
    },
})


app.mount('#app')