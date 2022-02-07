<template>
    <NavBar />
    <main class="container mx-w-6xl mx-auto py-4 h-[88.5vh]">
      <div class="flex flex-col">
        <div v-if="routes.other" class="w-[100%] p-6 rounded-2xl bg-white flex flex-col justify-between items-start text-white relative">
          <div class="flex justify-between items-center mb-5">
            <h2 class="text-sm text-gray-600 font-bold tracking-wide">ALTRI VOLI</h2>
          </div>
          <ul class="divide-y-2 divide-gray-100 overflow-x-auto w-full">
            <li class="py-3 flex justify-between text-sm text-gray-500 font-semibold items-center">           
              <p class="w-[5%] px-2 text-gray-600 text-center">Volo #</p>
              <p class="w-[28%] px-2 text-gray-600 text-center">Partenza</p>
              <p class="w-[28%] px-2 text-gray-600 text-center">Destinazione</p>
              <p class="w-[8%] px-2 text-blue-600 text-center">Alternato</p>
            </li> 
            <li class="py-3 flex justify-between text-sm text-gray-500 font-semibold items-center" v-for="(route, index) in routes.other" :key="index">           
              <router-link :to="'/book/'+route.route" class="w-full flex justify-between">
                <p class="w-[5%] px-2 text-gray-600 text-center">{{route.flight}}</p>
                <p class="w-[28%] px-2 text-gray-600 text-center">{{route.departure}} - <span>{{route.dep_name}}</span></p>
                <p class="w-[28%] px-2 text-gray-600 text-center">{{route.arrival}} - <span>{{route.arr_name}}</span></p>
                <p class="w-[8%] px-2 text-blue-600 text-center">{{route.alternative}}</p>
              </router-link>
            </li>
          </ul>
          <br>
        </div>
        <div v-if="routes.aerotaxi" class="w-[100%] p-6 rounded-2xl bg-white flex flex-col justify-between items-start text-white relative">
          <div class="flex justify-between items-center mb-5">
            <h2 class="text-sm text-gray-600 font-bold tracking-wide">AEROTAXI</h2>
          </div>
          <ul class="divide-y-2 divide-gray-100 overflow-x-auto w-full">
            <li class="py-3 flex justify-between text-sm text-gray-500 font-semibold items-center">           
              <p class="w-[5%] px-2 text-gray-600 text-center">Volo #</p>
              <p class="w-[28%] px-2 text-gray-600 text-center">Partenza</p>
              <p class="w-[28%] px-2 text-gray-600 text-center">Destinazione</p>
              <p class="w-[8%] px-2 text-blue-600 text-center">Alternato</p>
            </li> 
            <li class="py-3 flex justify-between text-sm text-gray-500 font-semibold items-center" v-for="(route, index) in routes.aerotaxi" :key="index">           
              <router-link :to="'/book/'+route.route" class="w-full flex justify-between">
                <p class="w-[5%] px-2 text-gray-600 text-center">{{route.flight}}</p>
                <p class="w-[28%] px-2 text-gray-600 text-center">{{route.departure}} - <span>{{route.dep_name}}</span></p>
                <p class="w-[28%] px-2 text-gray-600 text-center">{{route.arrival}} - <span>{{route.arr_name}}</span></p>
                <p class="w-[8%] px-2 text-blue-600 text-center">{{route.alternative}}</p>
              </router-link>
            </li>
          </ul>
          <br>
        </div>
        <div v-if="routes.business" class="w-[100%] mt-5 p-6 rounded-2xl bg-white flex flex-col justify-between items-start text-white relative">
          <div class="flex justify-between items-center">
            <h2 class="text-sm text-gray-600 font-bold tracking-wide">Ultimi voli effttuati</h2>
          </div>
          <ul class="divide-y-2 divide-gray-100 overflow-x-auto w-full">
            <li class="py-3 flex justify-between text-sm text-gray-500 font-semibold items-center">           
              <p class="w-[5%] px-2 text-gray-600 text-center">Volo #</p>
              <p class="w-[28%] px-2 text-gray-600 text-center">Partenza</p>
              <p class="w-[28%] px-2 text-gray-600 text-center">Destinazione</p>
              <p class="w-[8%] px-2 text-blue-600 text-center">Alternato</p>
            </li> 
            <li class="py-3 flex justify-between text-sm text-gray-500 font-semibold items-center" v-for="(route, index) in routes.business" :key="index">           
              <router-link :to="'/book/'+route.route" class="w-full flex justify-between">
                <p class="w-[5%] px-2 text-gray-600 text-center">{{route.flight}}</p>
                <p class="w-[28%] px-2 text-gray-600 text-center">{{route.departure}} - <span>{{route.dep_name}}</span></p>
                <p class="w-[28%] px-2 text-gray-600 text-center">{{route.arrival}} - <span>{{route.arr_name}}</span></p>
                <p class="w-[8%] px-2 text-blue-600 text-center">{{route.alternative}}</p>
              </router-link>
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
    components: {
      NavBar,
    },
    data(){
      return{
        routes: [],
        toggleBusiness: false,
        toggleAerotaxi: false,
        toggleOther: false,
        user: null
      }
    },
    async mounted(){
      this.user = JSON.parse(localStorage.getItem('token'))

      await this.$axios.get('get_free_routes.php?id=' + this.user.user)
        .then((res) => {
          this.routes = res.data
        })
    },
    methods: {

    }
  }
</script>