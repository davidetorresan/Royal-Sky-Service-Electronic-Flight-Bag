<template>
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
                        <a href="#" class="transition bg-[#c7931473] px-5 py-3 w-full text-center md:w-auto rounded-lg text-[#875808] text-xs tracking-wider font-semibold hover:bg-[#c79314] hover:text-white">
                            Link Account
                        </a>
                    </div>
                </div>
            </div>
            <div class="col-span-2 p-6 rounded-2xl bg-gradient-to-r from-[#c79314] to-[#875808] flex flex-col justify-between">
                <div class="flex flex-col">
                    <p class="text-white font-bold text-xs uppercase">Una nuova missione per te</p>
                    <p class="mt-1 text-xs md:text-sm text-gray-50 font-light leading-tight max-w-sm">
                        La Juventus F.C ci ha contattati per un servizio business che servirà a portare due stelle del club, attualmente fuori dall'Italia, a Torino in modo da poter tornare ad allenarsi con la squadra.
                        Stiamo parlando di Sami Kedhira e Miralem Pjanic. Il...
                    </p>
                </div>
                <div class="flex justify-between items-end">
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
                    Expenses By Category</h2>
                <a href="#" class="text-xs text-gray-800 font-semibold uppercase">More</a>
            </div>
            <div class="bg-white p-6 rounded-xl border border-gray-50">
                <div class="flex justify-between items-start">
                    <div class="flex flex-col">
                        <p class="text-xs text-gray-600 tracking-wide">Foods &amp; Beverages</p>
                        <h3 class="mt-1 text-lg text-blue-500 font-bold">$ 818</h3>
                        <span class="mt-4 text-xs text-gray-500">Last Transaction 3 Hours ago</span>
                    </div>
                    <div class="bg-blue-500 p-1 xl:p-2 rounded-md">
                        <!--<img src="assets/dish-2.png" alt="icon" class="w-auto h-6 xl:h-8 object-cover">-->
                    </div>
                </div>
            </div>
            <div class="bg-white p-6 rounded-xl border border-gray-50">
                <div class="flex justify-between items-start">
                    <div class="flex flex-col">
                        <p class="text-xs text-gray-600 tracking-wide">Groceries</p>
                        <h3 class="mt-1 text-lg text-green-500 font-bold">$ 8,918</h3>
                        <span class="mt-4 text-xs text-gray-500">Last Transaction 3 Days ago</span>
                    </div>
                    <div class="bg-green-500 p-1 xl:p-2 rounded-md">
                        <!--<img src="assets/grocery.png" alt="icon" class="w-auto h-6 xl:h-8 object-cover">-->
                    </div>
                </div>
            </div>
            <div class="bg-white p-6 rounded-xl border border-gray-50">
                <div class="flex justify-between items-start">
                    <div class="flex flex-col">
                        <p class="text-xs text-gray-600 tracking-wide">Gaming</p>
                        <h3 class="mt-1 text-lg text-yellow-500 font-bold">$ 1,223</h3>
                        <span class="mt-4 text-xs text-gray-600">Last Transaction 4 Days ago</span>
                    </div>
                    <div class="bg-yellow-500 p-1 xl:p-2 rounded-md">
                        <!--<img src="assets/gaming.png" alt="icon" class="w-auto h-6 xl:h-8 object-cover">-->
                    </div>
                </div>
            </div>
            <div class="bg-white p-6 rounded-xl border border-gray-50">
                <div class="flex justify-between items-start">
                    <div class="flex flex-col">
                        <p class="text-xs text-gray-600 tracking-wide">Trip &amp; Holiday</p>
                        <h3 class="mt-1 text-lg text-indigo-500 font-bold">$ 5,918</h3>
                        <span class="mt-4 text-xs text-gray-500">Last Transaction 1 Month ago</span>
                    </div>
                    <div class="bg-indigo-500 p-1 xl:p-2 rounded-md">
                        <!--<img src="assets/holiday.png" alt="icon" class="w-auto h-6 xl:h-8 object-cover">-->
                    </div>
                </div>
            </div>
        </div>
        <!-- End Second Row -->
        <!-- Start Third Row -->
        <div class="grid grid-cols-1 md:grid-cols-5 items-start px-4 xl:p-0 gap-y-4 md:gap-6">
            <div class="col-start-1 col-end-5">
                <h2 class="text-xs md:text-sm text-gray-600 font-bold tracking-wide">Summary Transactions</h2>
            </div>
            <div class="col-span-2 bg-white p-6 rounded-xl border border-gray-50 flex flex-col space-y-6">
                <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 flex justify-between items-center">
                    <div class="p-4 cursor-pointer border">
                        <span class="text-xs text-gray-500 font-semibold">Daily</span>
                        <h2 class="text-gray-800 font-bold tracking-wider">$ 27.80</h2>
                    </div>
                    <div class="p-4 cursor-pointer border">
                        <span class="text-xs text-gray-500 font-semibold">Weekly</span>
                        <h2 class="text-gray-800 font-bold tracking-wider">$ 192.92</h2>
                    </div>
                    <div class="p-4 cursor-pointer border">
                        <span class="text-xs text-gray-500 font-semibold">Monthly</span>
                        <h2 class="text-gray-800 font-bold tracking-wider">$ 501.10</h2>
                    </div>
                </div>
                <canvas id="myChart" style="display: block; box-sizing: border-box; height: 550px; width: 550px;" width="550" height="550"></canvas>
            </div>
            <div class="col-span-3 bg-white p-6 rounded-xl border border-gray-50 flex flex-col space-y-6">
                <div class="flex justify-between items-center">
                    <h2 class="text-sm text-gray-600 font-bold tracking-wide">Latest Transactions</h2>
                    <a href="#" class="px-4 py-2 text-xs bg-blue-100 text-blue-500 rounded uppercase tracking-wider font-semibold hover:bg-blue-300">More</a>
                </div>
                <ul class="divide-y-2 divide-gray-100 overflow-x-auto w-full">
                    <li class="py-3 flex justify-between text-sm text-gray-500 font-semibold">
                        <p class="px-4 font-semibold">Today</p>
                        <p class="px-4 text-gray-600">McDonald</p>
                        <p class="px-4 tracking-wider">Cash</p>
                        <p class="px-4 text-blue-600">Food</p>
                        <p class="md:text-base text-gray-800 flex items-center gap-2">
                            16.90
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </p>
                    </li>
                    <li class="py-3 flex justify-between text-sm text-gray-500 font-semibold">
                        <p class="px-4 font-semibold">Today</p>
                        <p class="px-4 text-gray-600">McDonald</p>
                        <p class="px-4 tracking-wider">Cash</p>
                        <p class="px-4 text-blue-600">Food</p>
                        <p class="md:text-base text-gray-800 flex items-center gap-2">
                            16.90
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </p>
                    </li>
                    <li class="py-3 flex justify-between text-sm text-gray-500 font-semibold">
                        <p class="px-4 font-semibold">Today</p>
                        <p class="px-4 text-gray-600">McDonald</p>
                        <p class="px-4 tracking-wider">Cash</p>
                        <p class="px-4 text-blue-600">Food</p>
                        <p class="md:text-base text-gray-800 flex items-center gap-2">
                            16.90
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </p>
                    </li>
                    <li class="py-3 flex justify-between text-sm text-gray-500 font-semibold">
                        <p class="px-4 font-semibold">Today</p>
                        <p class="px-4 text-gray-600">McDonald</p>
                        <p class="px-4 tracking-wider">Cash</p>
                        <p class="px-4 text-blue-600">Food</p>
                        <p class="md:text-base text-gray-800 flex items-center gap-2">
                            16.90
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </p>
                    </li>
                    <li class="py-3 flex justify-between text-sm text-gray-500 font-semibold">
                        <p class="px-4 font-semibold">Today</p>
                        <p class="px-4 text-gray-600">McDonald</p>
                        <p class="px-4 tracking-wider">Cash</p>
                        <p class="px-4 text-blue-600">Food</p>
                        <p class="md:text-base text-gray-800 flex items-center gap-2">
                            16.90
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </p>
                    </li>
                    <li class="py-3 flex justify-between text-sm text-gray-500 font-semibold">
                        <p class="px-4 font-semibold">Today</p>
                        <p class="px-4 text-gray-600">McDonald</p>
                        <p class="px-4 tracking-wider">Cash</p>
                        <p class="px-4 text-blue-600">Food</p>
                        <p class="md:text-base text-gray-800 flex items-center gap-2">
                            16.90
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </p>
                    </li>
                </ul>
            </div>
        </div>
        <!-- End Third Row -->
        <div class="w-full mt-48 p-6 rounded-2xl bg-white flex flex-col justify-center items-center text-white relative">
            <p class="text-xs text-black">Powered by <b>Royal Sky Service Weather System&trade;</b></p>
        </div> 
    </div>
</main>
</template>
<script>
    export default {
        name: 'Home',
        data(){
            return{
                location : JSON.parse(localStorage.getItem('location')),
                user: JSON.parse(localStorage.getItem('user')),
                status: false
            }
        },
        components: {
        },
        computed : {
            
        }
    }
</script>