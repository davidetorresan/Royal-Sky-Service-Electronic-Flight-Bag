<template>
<NavBar />

<main class="container mx-w-6xl mx-auto py-4">
    <div class="flex flex-col space-y-8">
        <!-- First Row -->
        <div class="grid grid-cols-1 md:grid-cols-4 xl:grid-cols-5 px-4 xl:p-0 gap-y-4 md:gap-6">
            <div class="md:col-span-2 xl:col-span-3 bg-white p-6 rounded-2xl border border-gray-50">
                <div class="flex flex-col space-y-6 md:h-full md:justify-between">
                    <div class="flex justify-between">
                        <span class="text-xs text-gray-500 font-semibold uppercase tracking-wider">
                            Il mio account (<span class="text-orange-600" v-if="!status">Non disponibile</span><span class="text-green-600" v-else>Disponibile</span>)
                        </span>
                        <span class="text-xs text-gray-500 font-semibold uppercase tracking-wider">
                            Ore di volo totali
                        </span>
                    </div>
                    <div class="flex gap-2 md:gap-4 justify-between items-center">
                        <div class="flex flex-col space-y-4">
                            <h2 class="text-gray-800 font-bold tracking-widest leading-tight">{{user.name}} {{user.surname}}</h2>
                            <div class="flex items-center gap-4">
                                <p class="text-lg text-gray-600 tracking-wider">{{user.callsign}}</p>
                                <!--<svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                </svg>-->
                            </div>
                        </div>
                        <h2 class="text-lg md:text-xl xl:text-3xl text-gray-700 font-black tracking-wider">
                            {{user.gva_hours}}
                            <span class="md:text-xl">h</span>
                        </h2>
                    </div>
                    <div class="flex gap-2 md:gap-4">
                        <div @click="this.status = !this.status" class="transition cursor-pointer bg-black px-5 py-3 w-full text-center md:w-auto rounded-lg text-white text-xs tracking-wider font-semibold hover:bg-gray-800">
                            {{ !this.status ? 'Sono disponibile per nuove missioni' : 'Non sono disponibile per nuove missioni' }}
                        </div>
                        <div @click="this.radio = !this.radio" class="cursor-pointer transition bg-[#c7931473] px-5 py-3 w-full text-center md:w-auto rounded-lg text-[#875808] text-xs tracking-wider font-semibold hover:bg-[#c79314] hover:text-white">
                            {{radio ? 'Spegni radio' : 'Accendi radio'}}
                        </div>
                        <Radio v-if="radio"/>
                    </div>
                </div>
            </div>
            <div class="col-span-2 p-6 rounded-2xl bg-gradient-to-r from-[#c79314] to-[#875808] flex flex-col justify-between relative">
                <img v-if="!this.status" class="opacity-20 w-[250px] absolute top-[55%] -translate-x-[52%] -translate-y-[50%] left-[50%]" src="../../assets/logo-v2.png" alt="">

                <div class="flex flex-col" v-if="this.status">
                    <p class="text-white font-bold text-xs uppercase">Una nuova missione per te</p>
                    <p class="mt-1 text-xs md:text-sm text-gray-50 font-light leading-tight max-w-sm">
                        La Juventus F.C ci ha contattati per un servizio business che servirà a portare due stelle del club, attualmente fuori dall'Italia, a Torino in modo da poter tornare ad allenarsi con la squadra.
                        Stiamo parlando di Sami Kedhira e Miralem Pjanic. Il...
                    </p>
                </div>
                <div class="flex justify-between items-end" v-if="this.status">
                    <a href="#" class="transition bg-black px-4 py-3 rounded-lg text-white text-xs tracking-wider font-semibold hover:bg-gray-800 hover:text-white">
                        Scopri di più
                    </a>
                    <!--<img src="assets/calendar.png" alt="calendar" class="w-auto h-24 object-cover">-->
                </div>
            </div>

        </div>
        <!-- End First Row -->
        <!-- Start Second Row -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-4 xl:p-0 gap-4 xl:gap-6">
            <div class="col-span-1 md:col-span-2 lg:col-span-4 flex justify-between">
                <h2 class="text-xs md:text-sm text-gray-700 font-bold tracking-wide md:tracking-wider">
                    Le mie informazioni
                </h2>
                <a href="#" class="text-xs text-gray-800 font-semibold uppercase">Condividi</a>
            </div>
            <div class="bg-white p-6 rounded-xl border border-gray-50">
                <div class="flex justify-between items-start">
                    <div class="flex flex-col justify-between">
                        <p class="text-xs text-gray-600 tracking-wide">Attualmente sei a</p>
                        <h3 class="mt-1 text-lg text-blue-500 font-bold">{{user.location}}</h3>
                        <span class="cursor-pointer mt-4 text-xs text-blue-500" v-if="!toggleTransfer" @click="toggleTransfer = !toggleTransfer">Richiedi Trasferimento</span>
                        <span class="cursor-pointer mt-4 text-xs text-blue-500" v-if="toggleTransfer" @click="toggleTransfer = !toggleTransfer">Annulla Trasferimento</span>
                        <div class="flex items-center mt-5 justify-between">
                            <input class="border-[1px] px-4 py-1 rounded-full w-[80%]" placeholder="Icao..." type="text" v-model="icao" v-if="toggleTransfer">
                            <button @click="requestTransfer(icao)" v-if="toggleTransfer" class="bg-blue-500 p-2 rounded-full">
                                <svg fill="#fff" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="12px">    
                                    <path d="M 9 2 C 5.1458514 2 2 5.1458514 2 9 C 2 12.854149 5.1458514 16 9 16 C 10.747998 16 12.345009 15.348024 13.574219 14.28125 L 14 14.707031 L 14 16 L 20 22 L 22 20 L 16 14 L 14.707031 14 L 14.28125 13.574219 C 15.348024 12.345009 16 10.747998 16 9 C 16 5.1458514 12.854149 2 9 2 z M 9 4 C 11.773268 4 14 6.2267316 14 9 C 14 11.773268 11.773268 14 9 14 C 6.2267316 14 4 11.773268 4 9 C 4 6.2267316 6.2267316 4 9 4 z"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <!--<div class="bg-blue-500 p-1 xl:p-2 rounded-md">
                        <img src="assets/dish-2.png" alt="icon" class="w-auto h-6 xl:h-8 object-cover">
                    </div>-->
                </div>
            </div>
            <div class="bg-white p-6 rounded-xl border border-gray-50">
                <div class="flex justify-between items-start">
                    <div class="flex flex-col">
                        <p class="text-xs text-gray-600 tracking-wide">Pirep Totali</p>
                        <h3 class="mt-1 text-lg text-indigo-500 font-bold">{{user.flightsInfo.totPireps}}</h3>
                    </div>
                    <!--<div class="bg-indigo-500 p-1 xl:p-2 rounded-md">
                        <img src="assets/holiday.png" alt="icon" class="w-auto h-6 xl:h-8 object-cover">
                    </div>-->
                </div>
            </div>
            <div class="bg-white p-6 rounded-xl border border-gray-50">
                <div class="flex justify-between items-start">
                    <div class="flex flex-col">
                        <p class="text-xs text-gray-600 tracking-wide">Conto Corrente Royal</p>
                        <h3 class="mt-1 text-lg text-green-500 font-bold" v-if="user.money > '0'">€ {{user.money}}</h3>
                        <h3 class="mt-1 text-lg text-red-500 font-bold" v-if="user.money < '0'">€ {{user.money}}</h3>
                    </div>
                    <!--<div class="bg-green-500 p-1 xl:p-2 rounded-md">
                        <img src="assets/grocery.png" alt="icon" class="w-auto h-6 xl:h-8 object-cover">
                    </div>-->
                </div>
            </div>
            <div class="bg-white p-6 rounded-xl border border-gray-50">
                <div class="flex justify-between items-start">
                    <div class="flex flex-col">
                        <p class="text-xs text-gray-600 tracking-wide">Grado Royal</p>
                        <h3 class="mt-1 text-lg text-yellow-500 font-bold">{{user.rankInfo.rank}}</h3>
                        <span class="mt-4 text-xs text-gray-500">Compenso: €{{user.rankInfo.salary_hour}},00/ora di volo</span>
                    </div>
                    <!--<<div class="bg-yellow-500 p-1 xl:p-2 rounded-md">
                        img src="assets/gaming.png" alt="icon" class="w-auto h-6 xl:h-8 object-cover">
                    </div>-->
                </div>
            </div>

        </div>
        <!-- End Second Row -->
        <!-- Start Third Row -->
        <div class="grid grid-cols-1 md:grid-cols-5 items-start px-4 xl:p-0 gap-y-4 md:gap-6">
            <div class="col-start-1 col-end-5">
                <h2 class="text-xs md:text-sm text-gray-600 font-bold tracking-wide">Qualcos'altro</h2>
            </div>
            <div class="col-span-3 bg-white p-6 rounded-xl border border-gray-50 flex flex-col space-y-6">
                <div class="flex justify-between items-center">
                    <h2 class="text-sm text-gray-600 font-bold tracking-wide">Ultimi voli effttuati</h2>
                    <a href="#" class="px-4 py-2 text-xs bg-blue-100 text-blue-500 rounded uppercase tracking-wider font-semibold hover:bg-blue-300">Vedi Tutti</a>
                </div>
                <ul class="divide-y-2 divide-gray-100 overflow-x-auto w-full">

                    <li class="py-3 flex justify-between text-sm text-gray-500 font-semibold items-center" v-for="(flight, index) in latestFlights" :key="index">           
                        <p class="w-[15%] px-2 font-semibold text-center">{{formatDate(flight.date_int.split(' ')[0])}}</p>
                        <p class="w-[10%] px-2 text-gray-600 text-center">{{flight.departure}}</p>
                        <p class="w-[10%] px-2 text-gray-600 text-center">{{flight.arrival}}</p>
                        <p class="w-[15%] px-2 text-blue-600 text-center">{{flight.distance}} nm</p>
                        <div class="w-[15%] px-2 flex items-center justify-center">
                            <div v-if="flight.status === '0'">
                                <div class="flex items-center justify-center">
                                    <span class="w-[10px] h-[10px] mr-[5px] rounded-full border-red-500 border-[1px] bg-red-500"></span>
                                    Rifiutato
                                </div>
                            </div>
                            <div v-if="flight.status === '2'">
                                <div class="flex items-center justify-center">
                                    <span class="w-[10px] h-[10px] mr-[5px] rounded-full border-yellow-500 border-[1px] bg-yellow-500"></span>
                                    In attesa
                                </div>
                            </div>
                            <div v-if="flight.status === '1'" class="flex flex-col items-center ">
                                <div class="flex items-center justify-center">
                                    <span class="w-[10px] h-[10px] mr-[5px] rounded-full border-green-500 border-[1px] bg-green-500"></span>
                                    Approvato
                                </div>
                            </div>
                        </div>
                        <p class="w-[15%] px-2 text-yellow-500 text-center">B350</p>
                        <p @click="selectFlight(flight)" class="w-[15%] cursor-pointer transition-all text-gray-300 hover:text-gray-800 flex items-center justify-center gap-2 rounded-md hover:bg-gray-200 py-2 px-2">
                            Espandi
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-[15px] h-[15px] -rotate-[90deg]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </p>
                    </li>
                </ul>
            </div>
            <div class="col-span-2 bg-white p-6 rounded-xl border border-gray-50 flex flex-col space-y-6">
                <div class="flex justify-center">
                    <div class="flex flex-col justify-between">
                        <p class="text-xs text-gray-600 tracking-wide font-bold text-center">Volo #</p>
                        <h3 class="mt-1 text-xl text-blue-500 font-bold text-center">{{flight.flight}}</h3>
                    </div>
                </div>
                <hr>
                <div class="flex justify-between">
                    <div class="flex flex-col justify-between">
                        <p class="text-xs text-gray-600 tracking-wide font-bold">Partenza da</p>
                        <h3 class="mt-1 text-lg text-blue-500">{{flight.departure}}</h3>
                    </div>
                    <div class="flex flex-col justify-between">
                        <p class="text-xs text-gray-600 tracking-wide font-bold">Arrivo a</p>
                        <h3 class="mt-1 text-lg text-blue-500">{{flight.arrival}}</h3>
                    </div>
                    <div class="flex flex-col justify-between">
                        <p class="text-xs text-gray-600 tracking-wide font-bold">Distanza</p>
                        <h3 class="mt-1 text-lg text-blue-500">{{flight.distance}} nm</h3>
                    </div>
                    <div class="flex flex-col justify-between">
                        <p class="text-xs text-gray-600 tracking-wide font-bold">Durata</p>
                        <h3 class="mt-1 text-lg text-blue-500">{{flight.distance}} h.</h3>
                    </div>
                </div>
                <hr>
                <div class="flex justify-between">
                    <div class="flex flex-col justify-between">
                        <p class="text-xs text-gray-600 tracking-wide font-bold">Velivolo</p>
                        <h3 class="mt-1 text-lg text-blue-500">King Air 350i</h3>
                    </div>
                    <div class="flex flex-col justify-between">
                        <p class="text-xs text-gray-600 tracking-wide font-bold">Marche</p>
                        <h3 class="mt-1 text-lg text-blue-500">I-45LIN</h3>
                    </div>
                    <div class="flex flex-col justify-between">
                        <p class="text-xs text-gray-600 tracking-wide font-bold">Intestato a</p>
                        <h3 class="mt-1 text-lg text-blue-500">Royal Sky Academy&trade;</h3>
                    </div>
                </div>
            </div>
        </div>
        <!-- End Third Row -->
    </div>
</main>
</template>
<script>
    import Radio from '../components/Radio.vue'
    import NavBar from '../components/NavBar.vue'

    export default {
        name: 'Home',
        data(){
            return{
                location : JSON.parse(localStorage.getItem('location')),
                user: JSON.parse(localStorage.getItem('user')),
                latestFlights : [],
                flight: {},
                status: false,
                radio: false,
                toggleTransfer: false,
                icao : ''
            }
        },
        components: {
            Radio,
            NavBar
        },
        created(){

        },
        mounted(){

            this.checkBookings()

            let tempo = []

            this.user.flightsInfo.flights.map((item, i) => {
                if(i < 6){
                    tempo.push(item)
                }
            })

            this.latestFlights = tempo

        },
        methods : {
            selectFlight(flight){
                this.flight = flight;
            },
            async requestTransfer(icao){

                await this.$axios.get(`request_transfer.php?user=82&destiny=` + icao)
                    .then(async () => {
                        
                        let res = await this.$axios.get(`get_pilot_data.php?id=82`)

                        let resp = await this.$axios.get(`https://airport-info.p.rapidapi.com/airport?icao=${res.data.location}`, {
                            headers: {
                            'x-rapidapi-host': 'airport-info.p.rapidapi.com',
                            'x-rapidapi-key': '0b3447fca9msh477e888d19607fap14e206jsndd35bba6653e'
                            }
                        })
            
                        localStorage.setItem('user', JSON.stringify(res.data))

                        localStorage.setItem('location', JSON.stringify({
                            icao: res.data.location, 
                            latitude: resp.data.latitude, 
                            longitude: resp.data.longitude 
                        }))

                        this.location = JSON.parse(localStorage.getItem('location'))
                        this.user = JSON.parse(localStorage.getItem('user'))
                        this.toggleTransfer = false
                        this.$swal.fire({
                            position: 'top-end',
                            toast: true,
                            icon: 'success',
                            title: 'Trasferito a ' + icao,
                            showConfirmButton: false,
                            timer: 4000
                        })

                    })
                
            }
        }
    }
</script>