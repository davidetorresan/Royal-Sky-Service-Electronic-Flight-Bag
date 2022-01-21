<template>
    <div class="flex items-center" style="height: 95vh">
        <div class="mt-10"></div>

        <div class="w-6/12 h-full flex flex-col relative">
            <div class="w-full flex justify-between items-center text-center my-5 px-5 w-full max-w-full">
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
                <div class="max-w-xs">
                    <div class="relative">
                        <input placeholder="ICAO" type="text" v-model="icao">
                        <button @click="getweatherInfos(icao)" >🔎</button>
                    </div>
                </div>
            </div>

            <hr>
            <div class="mt-10"></div>
            <p class="text-xl px-5 font-bold" v-if="data != ''">{{ data.station.name }} - {{data.station.location}}</p>
            <div class="mt-5"></div>
            <p class="text-xl px-5">{{data != '' ? data.raw_text : ''}}</p>
            <div class="mt-5"></div>
            <p class="font-bold" v-if="data != ''">{{new Date(data.observed).toUTCString()}}</p>
            <div class="mt-10"></div>
            <hr v-if="data != ''">

            <!--{{data != '' ? data : ''}}-->
            
            <div class="mt-10"></div>
            
            <div v-if="data != ''">
                <p><b>✅ Flight Rules</b> {{data.flight_category}}</p>
                <p><b>💨 Wind</b> {{data.wind.degrees}}° at {{data.wind.speed_kts}} kts</p>
                <p><b>🌡️ Temperature</b> {{data.temperature.celsius}}°C ({{data.temperature.fahrenheit}}°F)</p>
                <p><b>💦 Dewpoint</b> {{data.dewpoint.celsius}}°C ({{data.dewpoint.fahrenheit}}°F)</p>
                <p><b>🥵 Humidity</b> {{data.humidity.percent}}%</p>
                <p><b>🌀 QNH </b> {{data.barometer.hpa}} HPA ({{data.barometer.hg}} HG)</p>
                <p><b>☁️ Visibility</b> {{data.visibility.meters}} m ({{data.visibility.miles}} miles)</p>

            </div>
            {{saved}}

        </div>


        <div class="w-6/12" style="height: 95vh">
            <div v-html="windy" class="h-full" v-if="windy != ''"></div>
            <div class="h-full" v-else-if="location != null">
                <iframe class="w-full h-full" :src="'https://embed.windy.com/embed2.html?lat='+ this.location.latitude +'&lon=' + this.location.longitude +'&detailLat=' + this.location.latitude + '&detailLon='+ this.location.longitude +'&zoom=8&level=surface&overlay=wind&product=ecmwf&menu=&message=&marker=&calendar=now&pressure=&type=map&location=coordinates&detail=&metricWind=default&metricTemp=default&radarRange=-1'" frameborder="0"></iframe>
            </div>
        </div>
        <p class="absolute bottom-5 left-5 text-xs">Powered by <b>Royal Sky Service Weather System&trade;</b></p>
    </div>
    
</template>
<script>
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
                location : !localStorage.getItem('location') ? null : JSON.parse(localStorage.getItem('location'))
            }
        },
        mounted(){
            //this.getweatherInfos("LIMF")
        },
        methods:{
            async getweatherInfos(icao){
                this.loading = true;
                await axios.get(`https://royalskyservice.it/weather.php?decoded=true&icao=${icao}`)
                .then(res => {
                    this.showWindy = true;
                    this.data = res.data.data[0]
                    this.windy = '<iframe class="w-full h-full" src="https://embed.windy.com/embed2.html?lat='+ this.data.station.geometry.coordinates[1] +'&lon=' + this.data.station.geometry.coordinates[0] +'&detailLat=' + this.data.station.geometry.coordinates[1] + '&detailLon='+ this.data.station.geometry.coordinates[0] +'&zoom=8&level=surface&overlay=wind&product=ecmwf&menu=&message=&marker=&calendar=now&pressure=&type=map&location=coordinates&detail=&metricWind=default&metricTemp=default&radarRange=-1" frameborder="0"></iframe>'
                    this.searchIsSaved(this.data.icao)
                }).catch(err => console.log(err))
            /*
                await axios.get(`https://royalskyservice.it/weather.php?encoded=true&icao=${icao}`)
                .then(res => {
                    this.loading = false;
                    this.metar = res.data.data[0]
                }).catch(err => console.log(err))
            */
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


                /*
                await axios.get(`https://royalskyservice.it/weather.php?encoded=true&icao=${icao}`)
                .then(res => {
                    this.loading = false;
                }).catch(err => console.log(err))
                */

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
        padding: 8px 8px 8px 14px;
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