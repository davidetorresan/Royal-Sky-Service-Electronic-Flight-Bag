<template>
    <NavBar />
    <main class="container mx-w-6xl mx-auto py-4 h-[88.5vh]">
      <div class="flex flex-col">
        <div class="w-[100%] p-6 rounded-2xl bg-white flex flex-col justify-between items-start text-white relative">
            <ul class="divide-y-2 divide-gray-100 overflow-x-auto w-full">

              <router-link v-for="(route, index) in routes.aerotaxi" :key="index" :to="'/book/'+route.route">
                <li class="py-3 flex justify-between text-sm text-gray-500 font-semibold items-center">           
                  <p class="w-[5%] px-2 text-gray-600 text-center">{{route.flight}}</p>
                  <p class="w-[28%] px-2 text-gray-600 text-center">{{route.departure}} - <span>{{route.dep_name}}</span></p>
                  <p class="w-[28%] px-2 text-gray-600 text-center">{{route.arrival}} - <span>{{route.arr_name}}</span></p>
                  <p class="w-[8%] px-2 text-blue-600 text-center">{{route.alternative}}</p>
                  <p class="w-[8%] px-2 text-yellow-500 text-center">B350</p>
                </li>
              </router-link>

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
      }
    },
    async mounted(){
      await this.$axios.get('get_free_routes.php?id=82')
        .then((res) => {
          this.routes = res.data
        })
    },
    methods: {

    }
  }
</script>