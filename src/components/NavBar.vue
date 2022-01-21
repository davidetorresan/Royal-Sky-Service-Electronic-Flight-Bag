<template>
    <div id="nav" class="w-full bg-yellow-500 flex justify-end items-center ">
        <ul class="flex justify-between w-9/12 lg:w-6/12">
            <li><router-link to="/">Home</router-link></li>
            <li v-if="!data.booked"><router-link to="/missions">Prenotazione</router-link></li>
            <li v-if="data.booked"><router-link to="/missions">Pianificazione</router-link></li>
            <li><router-link to="/weather">Meteo</router-link></li>
            <li><router-link to="/missions">Missioni<span class="nMission">10</span></router-link></li>
            <!--
                <li v-if="isLoggedIn"><a @click="logout">Logout</a></li>
                <li v-if="!isLoggedIn"><router-link to="/register">Register</router-link></li>
                <li v-if="!isLoggedIn"><router-link to="/login">Login</router-link></li>
            -->
        </ul>
    </div>
</template>
<script>
    import { booking } from '../store/test/test'

    export default {
        name: 'NavBar',
        data(){
            return {
                data: booking
            }
        },
        computed : {
            //isLoggedIn : function(){ return this.$store.getters.ciao },
        },
        created(){
            this.$router.push('/')
        },
        methods: {
            async logout (){
                await this.$store.dispatch('LogOut')
                this.$router.push('/login')
            }
        },
    }
</script>
<style>
    .nMission{
        width: 20px;
        height: 20px;
        background: red;
        font-size: 10px;
        padding: 5px;
        border-radius: 50%;
        vertical-align: middle;
        margin-left: 5px;
    }
    #nav {
        height: 5vh;
        padding: 0 60px;
    }
    #nav a {
        font-weight: bold;
        color: white;
    }
    a:hover {
        cursor: pointer;
    }
    #nav a.router-link-exact-active {
        color: black;
    }
</style>