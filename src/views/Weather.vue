<template>
    <NavBar />
    <main class="container mx-w-6xl mx-auto py-4 h-[88.5vh]">
        <div class="flex flex-col">
            <!-- First Row -->
            <div class="grid grid-cols-1 md:grid-cols-4 xl:grid-cols-5 px-4 xl:p-0 gap-y-4 md:gap-6">
                <div class="md:col-span-2 xl:col-span-3 bg-white p-6 rounded-2xl border border-gray-50">
                    <div class="flex flex-col space-y-6 md:h-full md:justify-between">
                        <div class="flex gap-2 md:gap-4 justify-between items-center">
                            <div class="flex flex-col space-y-4">
                                <div class="max-w-xs w-xs flex items-center">
                                    <div class="cursor-pointer flex" @click="saveWeather(data.icao)" v-if="data != ''">
                                        <svg v-if="!isSaved" class="w-5 align-middle" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                        viewBox="0 0 471.701 471.701" style="enable-background:new 0 0 471.701 471.701;" xml:space="preserve">
                                            <g>
                                                <path d="M433.601,67.001c-24.7-24.7-57.4-38.2-92.3-38.2s-67.7,13.6-92.4,38.3l-12.9,12.9l-13.1-13.1
                                                    c-24.7-24.7-57.6-38.4-92.5-38.4c-34.8,0-67.6,13.6-92.2,38.2c-24.7,24.7-38.3,57.5-38.2,92.4c0,34.9,13.7,67.6,38.4,92.3
                                                    l187.8,187.8c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-3.9l188.2-187.5c24.7-24.7,38.3-57.5,38.3-92.4
                                                    C471.801,124.501,458.301,91.701,433.601,67.001z M414.401,232.701l-178.7,178l-178.3-178.3c-19.6-19.6-30.4-45.6-30.4-73.3
                                                    s10.7-53.7,30.3-73.2c19.5-19.5,45.5-30.3,73.1-30.3c27.7,0,53.8,10.8,73.4,30.4l22.6,22.6c5.3,5.3,13.8,5.3,19.1,0l22.4-22.4
                                                    c19.6-19.6,45.7-30.4,73.3-30.4c27.6,0,53.6,10.8,73.2,30.3c19.6,19.6,30.3,45.6,30.3,73.3
                                                    C444.801,187.101,434.001,213.101,414.401,232.701z"/>
                                            </g>
                                        </svg>
                                        <svg v-else class="w-5 align-middle" fill="#ff0000" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                        viewBox="0 0 471.701 471.701" style="enable-background:new 0 0 471.701 471.701;" xml:space="preserve">
                                            <g>
                                                <path d="M433.601,67.001c-24.7-24.7-57.4-38.2-92.3-38.2s-67.7,13.6-92.4,38.3l-12.9,12.9l-13.1-13.1
                                                    c-24.7-24.7-57.6-38.4-92.5-38.4c-34.8,0-67.6,13.6-92.2,38.2c-24.7,24.7-38.3,57.5-38.2,92.4c0,34.9,13.7,67.6,38.4,92.3
                                                    l187.8,187.8c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-3.9l188.2-187.5c24.7-24.7,38.3-57.5,38.3-92.4
                                                    C471.801,124.501,458.301,91.701,433.601,67.001z M414.401,232.701l-178.7,178l-178.3-178.3c-19.6-19.6-30.4-45.6-30.4-73.3
                                                    s10.7-53.7,30.3-73.2c19.5-19.5,45.5-30.3,73.1-30.3c27.7,0,53.8,10.8,73.4,30.4l22.6,22.6c5.3,5.3,13.8,5.3,19.1,0l22.4-22.4
                                                    c19.6-19.6,45.7-30.4,73.3-30.4c27.6,0,53.6,10.8,73.2,30.3c19.6,19.6,30.3,45.6,30.3,73.3
                                                    C444.801,187.101,434.001,213.101,414.401,232.701z"/>
                                            </g>
                                        </svg>
                                        <p v-if="!isSaved" class="text-lg">&nbsp;Salva</p>
                                        <p v-else class="text-lg">&nbsp;Salvato</p>
                                    </div>
                                </div>
                                
                            </div>
                            <h2 class=" tracking-wider">
                                <div class="max-w-xs">
                                    <div class="relative">
                                        <input placeholder="ICAO" type="text" v-model="icao">
                                        <button @click="getweatherInfos(icao)">
                                            <svg fill="#fff" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="20px">    
                                                <path d="M 9 2 C 5.1458514 2 2 5.1458514 2 9 C 2 12.854149 5.1458514 16 9 16 C 10.747998 16 12.345009 15.348024 13.574219 14.28125 L 14 14.707031 L 14 16 L 20 22 L 22 20 L 16 14 L 14.707031 14 L 14.28125 13.574219 C 15.348024 12.345009 16 10.747998 16 9 C 16 5.1458514 12.854149 2 9 2 z M 9 4 C 11.773268 4 14 6.2267316 14 9 C 14 11.773268 11.773268 14 9 14 C 6.2267316 14 4 11.773268 4 9 C 4 6.2267316 6.2267316 4 9 4 z"/>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </h2>
                        </div>
                        <div class="flex gap-2 md:gap-4">
                            <div v-html="windy" class="h-full w-full" v-if="windy != ''"></div>
                            <iframe v-else class="w-full h-[450px]" :src="'https://embed.windy.com/embed2.html?lat='+ this.location.latitude +'&lon=' + this.location.longitude +'&detailLat=' + this.location.latitude + '&detailLon='+ this.location.longitude +'&zoom=8&level=surface&overlay=wind&product=ecmwf&menu=&message=&marker=&calendar=now&pressure=&type=map&location=coordinates&detail=&metricWind=default&metricTemp=default&radarRange=-1'" frameborder="0"></iframe>
                        </div>
                    </div>
                </div>
                <div class="col-span-2 p-6 rounded-2xl bg-gradient-to-r from-[#c79314] to-[#875808] flex flex-col justify-center items-center text-white relative">
                    <!--<div v-if="data == ''" class="flex items-center justify-center flex-col">
                        <img class="opacity-20 w-[80%]" src="../../assets/logo-v2.png" alt="">
                    </div>-->
                    <img class="opacity-20 w-[400px] absolute top-[50%] -translate-x-[52%] -translate-y-[50%] left-[50%]" src="../../assets/logo-v2.png" alt="">
                    <div class="flex flex-col z-20">
                        <p class="text-xl px-5 font-bold text-center" v-if="data != ''">{{ data.station.name }} - {{data.station.location}}</p>
                        <div class="mt-5"></div>
                        <p class="text-xl px-5 text-center">{{data != '' ? data.raw_text : ''}}</p>
                        <div class="mt-5"></div>
                        <p class="font-bold text-center" v-if="data != ''">{{new Date(data.observed).toUTCString()}}</p>
                        <div class="mt-10"></div>
                        <hr v-if="data != ''">

                        <!--{{data != '' ? data : ''}}-->
                        
                        <div class="mt-10"></div>
                        
                        <div v-if="data != ''" class="text-center">
                            <p><b>✅ Flight Rules</b> {{data.flight_category}}</p>
                            <p><b>💨 Wind</b> {{data.wind.degrees}}° at {{data.wind.speed_kts}} kts</p>
                            <p><b>🌡️ Temperature</b> {{data.temperature.celsius}}°C ({{data.temperature.fahrenheit}}°F)</p>
                            <p><b>💦 Dewpoint</b> {{data.dewpoint.celsius}}°C ({{data.dewpoint.fahrenheit}}°F)</p>
                            <p><b>🥵 Humidity</b> {{data.humidity.percent}}%</p>
                            <p><b>🌀 QNH </b> {{data.barometer.hpa}} HPA ({{data.barometer.hg}} HG)</p>
                            <p><b>☁️ Visibility</b> {{data.visibility.meters}} m ({{data.visibility.miles}} miles)</p>
                        </div>
                    </div>
                </div>
                {{saved != '' ? saved : ''}}
            </div>
            <div class="w-full mt-10 p-6 rounded-2xl bg-white flex flex-col justify-center items-center text-white relative">
                <p class="text-xs text-black">Powered by <b>Royal Sky Service Weather System&trade;</b></p>
            </div>
        </div>
    </main>
    
</template>
<script>
    import NavBar from '../components/NavBar.vue'
    import axios from 'axios'
    export default {
        data(){
            return{
                data : [],
                saved : [],
                isSaved : false,
                metar : '',
                icao : '',
                loading : false,
                showWindy : false,
                windy : '',
                location : JSON.parse(localStorage.getItem('location')),
                user: null
            }
        },
        components: {
            NavBar
        },
        mounted(){
            this.user = JSON.parse(localStorage.getItem('token'))
        },
        methods:{
            async getweatherInfos(icao){
                this.loading = true;
                await axios.get(`https://royalskyservice.it/api/weather.php?decoded=true&icao=${icao}`)
                .then(res => {
                    this.showWindy = true;
                    this.data = res.data.data[0]
                    this.windy = '<iframe class="w-full h-[450px]" src="https://embed.windy.com/embed2.html?lat='+ this.data.station.geometry.coordinates[1] +'&lon=' + this.data.station.geometry.coordinates[0] +'&detailLat=' + this.data.station.geometry.coordinates[1] + '&detailLon='+ this.data.station.geometry.coordinates[0] +'&zoom=8&level=surface&overlay=wind&product=ecmwf&menu=&message=&marker=&calendar=now&pressure=&type=map&location=coordinates&detail=&metricWind=default&metricTemp=default&radarRange=-1" frameborder="0"></iframe>'
                    this.searchIsSaved(this.data.icao)
                }).catch(err => console.log(err))
            },
            searchIsSaved(icao){
                this.isSaved = false
                if(this.saved.includes(icao)){
                    this.isSaved = true;
                }
            },
            async saveWeather(icao){

                if(this.saved.includes(icao)){
                    this.isSaved = false;
                    this.saved = this.saved.filter(item => item !== icao)
                }else{
                    this.saved.push(icao)
                    this.isSaved = true
                }

            }
        }
    }
        
</script>

<style scoped>
        * {
        box-sizing: border-box;
    }
    label {
        padding: 12px 12px 12px 0;
        display: inline-block;
    }
    button {
        background-color: #dfa310;
        color: white;
        padding: 8px 8px 8px 8px;
        cursor: pointer;
        border-radius:30px;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: 9px;
    }
    button:hover {
        background-color: #cc9710;
    }
    input {
        width: 250px;
        margin: 5px;
        box-shadow: 0px 0 12px 5px rgb(0 0 0 / 6%);
        padding: 12px 20px;
        border-radius: 30px;
    }
    input:focus{
        outline: none;
    }
    #error {
        color: red;
    }
    .dot-pulse {
        position: relative;
        margin-top: 20px;
        left: -9999px;
        width: 10px;
        height: 10px;
        border-radius: 5px;
        background-color: #dfa310;
        color: #dfa310;
        box-shadow: 9999px 0 0 -5px #dfa310;
        animation: dotPulse 1.5s infinite linear;
        animation-delay: .25s;
    }

    .dot-pulse::before, .dot-pulse::after {
        content: '';
        display: inline-block;
        position: absolute;
        top: 0;
        width: 10px;
        height: 10px;
        border-radius: 5px;
        background-color: #dfa310;
        color: #dfa310;
    }

    .dot-pulse::before {
        box-shadow: 9984px 0 0 -5px #dfa310;
        animation: dotPulseBefore 1.5s infinite linear;
        animation-delay: 0s;
    }

    .dot-pulse::after {
        box-shadow: 10014px 0 0 -5px #dfa310;
        animation: dotPulseAfter 1.5s infinite linear;
        animation-delay: .5s;
    }

    @keyframes dotPulseBefore {
        0% {
            box-shadow: 9984px 0 0 -5px #dfa310;
        }
        30% {
            box-shadow: 9984px 0 0 2px #dfa310;
        }
        60%,
        100% {
            box-shadow: 9984px 0 0 -5px #dfa310;
        }
    }

    @keyframes dotPulse {
        0% {
            box-shadow: 9999px 0 0 -5px #dfa310;
        }
        30% {
            box-shadow: 9999px 0 0 2px #dfa310;
        }
        60%,
        100% {
            box-shadow: 9999px 0 0 -5px #dfa310;
        }
    }

    @keyframes dotPulseAfter {
        0% {
            box-shadow: 10014px 0 0 -5px #dfa310;
        }
        30% {
            box-shadow: 10014px 0 0 2px #dfa310;
        }
        60%,
        100% {
            box-shadow: 10014px 0 0 -5px #dfa310;
        }
    }
</style>