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
            <div class="col-span-2 bg-white p-6 rounded-xl border border-gray-50 flex flex-col space-y-6">
                
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
                            <div v-if="flight.status === '1'">
                                <div class="flex items-center justify-center">
                                    <span class="w-[10px] h-[10px] mr-[5px] rounded-full border-yellow-500 border-[1px] bg-yellow-500"></span>
                                    In attesa
                                </div>
                            </div>
                            <div v-if="flight.status === '0'" class="flex flex-col items-center ">
                                <div class="flex items-center justify-center">
                                    <span class="w-[10px] h-[10px] mr-[5px] rounded-full border-green-500 border-[1px] bg-green-500"></span>
                                    Approvato
                                </div>
                            </div>
                        </div>
                        <p class="w-[15%] px-2 text-yellow-500 text-center">B350</p>
                        <p @click="this.$VModal.show(flight.flight)" class="w-[15%] cursor-pointer transition-all text-gray-300 hover:text-gray-800 flex items-center justify-center gap-2 rounded-md hover:bg-gray-200 py-2 px-2">
                            Espandi
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-[15px] h-[15px] -rotate-[90deg]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </p>
                    </li>
                </ul>
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
                status: false,
                radio: false
            }
        },
        components: {
            Radio,
            NavBar
        },
        created(){

        },
        mounted(){
            let tempo = []

            this.user.flightsInfo.flights.map((item, i) => {
                if(i < 6){
                    tempo.push(item)
                }
            })

            this.latestFlights = tempo

        },
        computed : {
            
        }
    }
</script>