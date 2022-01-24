<template>
    <div class="container mt-48 p-6 rounded-2xl bg-white flex justify-start justify-center items-center text-white fixed bottom-0 left-[50%] -translate-x-[50%] drop-shadow-2xl">
        <div class="w-[50px]"><img src="../../assets/virgin.png" alt=""></div>
        <audio  autoplay class="ml-10">
            <!--<source :src="radioDetails[0].url" type="">-->
            <source src="http://icecast.unitedradio.it/Virgin.mp3" type="">
        </audio>
    </div>
</template>
<script>
import axios from 'axios'
    export default {
        name: 'Radio',
        data(){
            return{
                radioDetails : []
            }
        },
        /*async created(){
            
            await axios.get('http://95.179.139.106/json/stations/byname/Virgin%20Radio%20Italia')
            .then((res) => this.radioDetails = res.data)
            .then(() => console.log(this.radioDetails))
        }*/
    }
</script>