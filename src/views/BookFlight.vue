<template>
    <NavBar/>
    <main class="container mx-w-6xl mx-auto py-4 h-[88.5vh] text-center">
        
        <router-link to="/book">← Torna indietro</router-link>

        <div class="flex flex-col mt-10">
            <div class="w-[100%] p-6 rounded-2xl bg-white flex flex-col justify-between items-start text-white relative">
                <ul class="divide-y-2 divide-gray-100 overflow-x-auto w-full text-black">
                    <li class="py-3 flex justify-between text-sm text-gray-500 font-semibold items-center">           
                        <p class="w-[5%] px-2 text-gray-600 text-center">Volo #</p>
                        <p class="w-[8%] px-2 text-gray-600 text-center">Partenza</p>
                        <p class="w-[8%] px-2 text-gray-600 text-center">Destinazione</p>
                        <p class="w-[8%] px-2 text-gray-600 text-center">Alternato</p>
                        <p class="w-[28%] px-2 text-gray-600 text-center">Aeromobile</p>
                        <p class="w-[8%] px-2 text-gray-600 text-center">Marche</p>
                        <span class="cursor-pointer w-[10%] px-2 text-yellow-500 text-center"></span>
                    </li>
                    <li class="py-3 flex justify-between text-sm text-gray-500 font-semibold items-center" v-for="(plane, index) in planes" :key="index">           
                        <p class="w-[5%] px-2 text-gray-600 text-center">{{plane.flight}}</p>
                        <p class="w-[8%] px-2 text-gray-600 text-center">{{plane.departure}}</p>
                        <p class="w-[8%] px-2 text-gray-600 text-center">{{plane.arrival}}</p>
                        <p class="w-[8%] px-2 text-gray-600 text-center">{{plane.alternative}}</p>
                        <p class="w-[28%] px-2 text-gray-600 text-center">{{plane.plane_description}}</p>
                        <p class="w-[8%] px-2 text-gray-600 text-center">{{plane.reg}}</p>
                        <span @click="bookRoute(plane.route_id, plane.fleet_id, plane.flight)" class="cursor-pointer w-[10%] px-2 text-yellow-500 text-center">Prenota Ora ></span>
                    </li>
                </ul>
                <br>
            </div>
        </div>
    </main>
</template>
<script>
    import NavBar from '../components/NavBar.vue'
    export default {
        components:{
            NavBar
        },
        data(){
            return{
                planes: []
            }
        },
        async mounted() {
            await this.$axios.get(`get_free_planes.php?id=82&route=${this.$route.params.flight}`)
                .then((res) => this.planes = res.data)
                    .then(() => console.log(this.planes))
        },
        methods:{
            async bookRoute(route, plane, flightN){
                this.$axios.get(`book.php?route=${route}&plane=${plane}&id=82`)
                    .then(() => {
                        this.$swal.fire({
                            position: 'top-end',
                            toast: true,
                            icon: 'success',
                            title: 'Volo # ' + flightN + ' prenotato',
                            showConfirmButton: false,
                            timer: 2000,
                            footer: 'Royal Sky Service Booking System™'
                        })
                    })
                        .then(() => {
                            this.checkBookings()
                            setTimeout(() => {
                                this.$router.push('/planning')
                            }, 2000)
                        })
            }
        }
    }
</script>