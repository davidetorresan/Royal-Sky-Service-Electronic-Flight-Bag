<template>
    <NavBar />
    <main class="container mx-w-6xl mx-auto py-4 h-[88.5vh] text-center">
        
        <router-link to="/academy">← Torna indietro</router-link>

        <div class="flex flex-col mt-10">
            <div class="w-[100%] p-6 rounded-2xl bg-white flex flex-col justify-between items-start text-white relative">
                <ul class="divide-y-2 divide-gray-100 overflow-x-auto w-full text-black">
                    <li class="py-3 flex justify-between text-sm text-gray-500 font-semibold items-center">           
                        <p class="w-[20%] px-2 text-gray-600 text-center">Abilitazione</p>
                        <p class="w-[20%] px-2 text-gray-600 text-center">Teoria</p>
                        <p class="w-[20%] px-2 text-gray-600 text-center">Pratica</p>
                        <p class="w-[20%] px-2 text-gray-600 text-center">Requisiti</p>
                        <p class="w-[20%] px-2 text-gray-600 text-center">Prezzo</p>
                    </li>
                    <li class="py-3 flex justify-between text-sm text-gray-500 font-semibold items-center" v-for="(rating, index) in ratings" :key="index">           
                        <p class="w-[20%] px-2 text-gray-600 text-center">{{rating.name}}</p>
                        <p class="w-[20%] px-2 text-gray-600 text-center">{{rating.theory}}</p>
                        <p class="w-[20%] px-2 text-gray-600 text-center">{{rating.pratical}}</p>
                        <p class="w-[20%] px-2 text-gray-600 text-center">{{rating.requirements === 'null' ? 'In arrivo...' : rating.requirements}}</p>
                        <p class="w-[20%] px-2 text-gray-600 text-center">€ {{rating.price}}</p>
                    </li>
                </ul>
                <br>
            </div>
        </div>
    </main>
</template>
<script>
    import NavBar from '../components/NavBar.vue'
    export default {
        name: 'Ratings',
        components: {
            NavBar
        },
        data(){
            return{
                ratings:[]
            }
        },
        mounted(){
            this.$axios.get('get_ratings.php')
                .then((res) => this.ratings = res.data)
                    .catch((err) => console.log(err))
        }
    }
</script>
<style lang="scss" scoped>
    
</style>