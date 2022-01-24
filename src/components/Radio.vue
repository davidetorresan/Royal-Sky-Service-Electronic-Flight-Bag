<template>
    <div id="radioContainer" class="w-[320px] p-2 fixed transition-transform duration-600 right-0 bottom-2">
        <div id="radio" class="w-[300px] p-4 rounded-2xl bg-white flex justify-start justify-around items-center text-white drop-shadow-2xl">
            <p class="text-black">Stai ascoltando</p>
            <div class="w-[50px]"><img src="../../assets/virgin.png" alt=""></div>
            <audio  autoplay class="ml-10">
                <!--<source :src="radioDetails[0].url" type="">-->
                <source src="http://icecast.unitedradio.it/Virgin.mp3" type="">
            </audio>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
    export default {
        name: 'Radio',
        data(){
            return{
                radioDetails : [],
                hideRadio : false
            }
        },
        created() {
            setTimeout(() => {
                document.getElementById('radioContainer').classList.add('hide')
                document.getElementById('radio').classList.add('arrow')
            }, 3000)
        }
        /*async created(){
            
            await axios.get('http://95.179.139.106/json/stations/byname/Virgin%20Radio%20Italia')
            .then((res) => this.radioDetails = res.data)
            .then(() => console.log(this.radioDetails))
        }*/
    }
</script>
<style scoped>
    .hide{
        transform: translateX(85%);
    }
    .hide:hover{
        transform: translateX(0%);
    }
    .arrow::after{
        content : '<';
        color: grey;
        position: absolute;
        left: 15px;
        top: 28px;
        transition: all 0.3s linear;
    }
    .hide:hover .arrow::after{
        transform: rotate(180deg);
    }
</style>