<template>
    <nav class="p-4 md:py-8 md:w-full px-[56.5px] md:mx-w-6xl md:mx-auto sticky top-0 bg-gray-100 z-30">
        <div class="hidden lg:flex lg:justify-between lg:items-center">
            <a href="#" class="flex items-start gap-2 group">
                <div class="bg-white text-white p-2 rounded-md">
                    <img src="../../assets/logo-v2.png" width="34px" alt="">
                </div>
                <p class="text-sm font-light uppercase">
                    Electronic Flight Bag
                    <span class="text-base block font-bold tracking-widest">
                        Royal Sky Service
                    </span>
                </p>
            </a>
            <ul class="flex items-center space-x-4 text-sm font-semibold">
                <li><router-link to="/" class="px-2 xl:px-4 py-2 text-gray-500 rounded-md hover:bg-gray-200">Home</router-link></li>
                <li v-if="!hasBookings"><router-link to="/book" class="transition-all px-2 xl:px-4 py-2 text-gray-500 rounded-md hover:bg-gray-200">Prenotazione</router-link></li>
                <li v-if="hasBookings"><router-link to="/planning" class="transition-all px-2 xl:px-4 py-2 text-gray-500 rounded-md hover:bg-gray-200">Pianificazione</router-link></li>
                <li><router-link to="/missions" class="transition-all px-2 xl:px-4 py-2 text-gray-300 rounded-md hover:bg-gray-200 pointer-events-none">Missioni</router-link></li>
                <li><router-link to="/weather" class="transition-all px-2 xl:px-4 py-2 text-gray-500 rounded-md hover:bg-gray-200">Meteo</router-link></li>
                <li><router-link to="/academy" class="transition-all px-2 xl:px-4 py-2 text-gray-500 rounded-md hover:bg-gray-200">Academy</router-link></li>
            </ul>
            <ul class="flex space-x-2 xl:space-x-4 text-sm font-semibold">
                <li>
                    <a href="#">
                        <div class="p-2 rounded hover:bg-gray-200">
                            <svg xmlns="http://www.w3.org/2000/svg" class="transition-all w-4 h-4 stroke-current text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                            </svg>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <div class="p-2 rounded hover:bg-gray-200">
                            <svg xmlns="http://www.w3.org/2000/svg" class="transition-all w-4 h-4 stroke-current text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                            </svg>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <div class="p-2 rounded hover:bg-gray-200">
                            <svg xmlns="http://www.w3.org/2000/svg" class="transition-all w-4 h-4 stroke-current text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
                            </svg>
                        </div>
                    </a>
                </li>
            </ul>
            <ul class="flex items-center gap-6">
                <li>
                    <router-link to="/profile" class="text-sm font-sans text-gray-800 font-semibold tracking-wider">
                        {{user.name}} {{user.surname}}
                    </router-link>
                </li>
            </ul>
        </div>
        <div x-data="{ open: false }" class="lg:hidden relative flex justify-between w-full">
            <a href="#" class="flex items-start gap-2 group">
                <div class="bg-blue-600 text-white p-3 rounded-md group-hover:bg-blue-800">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                </div>
                <p class="text-sm font-light uppercase">
                    Dashboard
                    <span class="text-base block font-bold tracking-widest">
                        Atom
                    </span>
                </p>
            </a>
            <button x-on:click="open = !open" type="button" class="bg-gray-200 p-3 rounded-md">
                <svg x-show="!open" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7"></path>
                </svg>
                <svg x-show="open" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" style="display: none;">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
            </button>
            <div x-show="open" x-transition="" class="absolute top-14 left-0 right-0 w-full bg-white rounded-md border" style="display: none;">
                <ul class="p-4">
                    <li class="px-4 py-2 rounded hover:bg-gray-200">
                        <a href="#" class="flex items-center gap-4">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                            </svg>
                            My Account
                        </a>
                    </li>
                    <li class="px-4 py-2 rounded hover:bg-gray-200">
                        <a href="#" class="flex items-center gap-4">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                            </svg>
                            Transactions
                        </a>
                    </li>
                    <li class="px-4 py-2 rounded hover:bg-gray-200">
                        <a href="#" class="flex items-center gap-4">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                            </svg>
                            Cards
                        </a>
                    </li>
                    <li class="px-4 py-2 rounded hover:bg-gray-200">
                        <a href="#" class="flex items-center gap-4">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                            </svg>
                            Offers
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>
<script>
    //import { booking } from '../store/test/test'
    export default {
        name: 'NavBar',
        data(){
            return {
                data: {},
                open: false,
                hasBookings: false,
                user: JSON.parse(localStorage.getItem('user')),
                //hours : 0
            }
        },
        computed : {
            //isLoggedIn : function(){ return this.$store.getters.ciao }
        },
        mounted(){
            window.addEventListener('booking-localstorage-changed', () => {
                const data = JSON.parse(localStorage.getItem('booking'))
                if(data.booked == true) this.hasBookings = data.booked
            });
            const data = JSON.parse(localStorage.getItem('booking'))
            if(data.booked == true) this.hasBookings = data.booked
        },
        created(){

        },
        methods: {
            async logout (){
                await this.$store.dispatch('LogOut')
                this.$router.push('/login')
            },
            
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