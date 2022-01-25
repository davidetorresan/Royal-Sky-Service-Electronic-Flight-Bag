<template>
    <NavBar />
    <main class="container mx-w-6xl mx-auto py-4">
        <div class="flex flex-col space-y-8">
            <!-- First Row -->
            <div class="px-4 xl:p-0 gap-y-4 md:gap-6">
                
                <div class="md:col-span-2 xl:col-span-3 bg-white p-6 rounded-2xl border border-gray-50">
                    <div class="flex flex-col space-y-6 md:h-full md:justify-between">
                        <div class="flex justify-between">
                            <span class="text-xs text-gray-500 font-semibold uppercase tracking-wider">
                                Il mio account ()
                            </span>
                            <span class="text-xs text-gray-500 font-semibold uppercase tracking-wider">
                                Ore di volo totali
                            </span>
                        </div>
                        <div class="flex gap-2 md:gap-4 justify-between items-center">
                            <div class="flex flex-col space-y-4">
                                <h2 class="text-gray-800 font-bold tracking-widest leading-tight"></h2>
                                <div class="flex items-center gap-4">
                                    <p class="text-lg text-gray-600 tracking-wider"></p>
                                    <!--<svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                    </svg>-->
                                </div>
                            </div>
                            <h2 class="text-lg md:text-xl xl:text-3xl text-gray-700 font-black tracking-wider">
                                <span class="md:text-xl">h</span>
                            </h2>
                        </div>
                        <div class="flex gap-2 md:gap-4">

                        </div>
                    </div>
                </div>

            </div>
            <!-- End First Row -->
            <!-- Start Second Row -->
        </div>
        <div class="flex mt-10">
            
            <div class="w-[35%] bg-white p-6 rounded-xl border border-gray-50 flex flex-col space-y-6">
                <ul class="divide-y-2 divide-gray-100 overflow-x-auto w-full">
                    <li class="px-4 py-3 flex justify-between text-sm text-gray-500 font-semibold">
                        <p class="font-semibold">{{user.name}} {{user.surname}} </p>
                        <div class="cursor-pointer flex items-center" @click="edits.edit1 = !edits.edit1"><span class="mr-[10px]">Modifica</span><ArrowLeft class="w-[20px] rotate-[90deg]"/></div>
                    </li>
                    <li id="edit-1" class="px-4 py-3 flex justify-between text-sm text-gray-500 font-semibold" v-if="edits.edit1">
                        <input type="text" class="bg-gray-200 rounded w-[45%] text-gray-700 transition duration-500 px-3 py-3" v-model="form.name" :placeholder="user.name">
                        <input type="text" class="bg-gray-200 rounded w-[45%] text-gray-700 transition duration-500 px-3 py-3" v-model="form.surname" :placeholder="user.surname">
                    </li>
                    <li class="px-4 py-3 flex justify-between text-sm text-gray-500 font-semibold">
                        <p class="font-semibold">{{user.email}}</p>
                        <div class="cursor-pointer flex items-center" @click="edits.edit2 = !edits.edit2"><span class="mr-[10px]">Modifica</span><ArrowLeft class="w-[20px]"/></div>
                    </li>
                    <li id="edit-1" class="px-4 py-3 flex justify-between text-sm text-gray-500 font-semibold" v-if="edits.edit2">
                        <input type="email" class="bg-gray-200 rounded w-full text-gray-700 transition duration-500 px-3 py-3" v-model="form.email" :placeholder="user.email">
                    </li>
                    <li class="px-4 py-3 flex justify-between text-sm text-gray-500 font-semibold">
                        <p class="font-semibold"></p>
                        <div class="cursor-pointer flex items-center" @click="edits.edit3 = !edits.edit3"><span class="mr-[10px]">Modifica</span><ArrowLeft class="w-[20px]"/></div>
                    </li>
                    <li id="edit-1" class="px-4 py-3 flex justify-between text-sm text-gray-500 font-semibold" v-if="edits.edit3">
                        <p>cioao</p>
                    </li>
                    <li class="px-4 py-3 flex justify-between text-sm text-gray-500 font-semibold">
                        <p class="font-semibold"></p>
                        <div class="cursor-pointer flex items-center" @click="edits.edit4 = !edits.edit4"><span class="mr-[10px]">Modifica</span><ArrowLeft class="w-[20px]"/></div>
                    </li>
                    <li id="edit-1" class="px-4 py-3 flex justify-between text-sm text-gray-500 font-semibold" v-if="edits.edit4">
                        <p>cioao</p>
                    </li>
                </ul>
                <div class="cursor-pointer transition bg-[#c7931473] px-5 py-3 w-full text-center md:w-auto rounded-lg text-[#875808] text-xs tracking-wider font-semibold hover:bg-[#c79314] hover:text-white">
                    Salva
                </div>
            </div>
        
        </div>
    </main>
</template>
<script>
  import NavBar from '../components/NavBar.vue'
  import ArrowLeft from '../components/ArrowLeft.vue'
  export default {
    components: {
      NavBar,
      ArrowLeft
    },
    data(){
        return {
            data: {},
            open: false,
            user: JSON.parse(localStorage.getItem('user')),
            edits: {
                edit1: false,
                edit2: false,
                edit3: false,
                edit4: false
            },
            form: {
                name: '',
                surname: '',
                email: ''
            }
        }
    },
}
</script>