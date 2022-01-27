<template>
  <div id="app" class="relative antialiased bg-gray-100">
    <router-view v-if="login == true"/>
    <div v-else class="w-screen h-screen flex items-center justify-center">
      <main class="w-[500px] bg-white p-8 md:p-12 my-10 rounded-lg shadow-2xl">
        <section>
          <img src="../../assets/logo-v2.png" class="w-[80%] mx-auto" alt="">
          <h3 class="text-left font-bold text-2xl">Pronto ad usare la Royal E.F.B.?</h3>
          <p class="text-gray-600 pt-2">Accedi ora al tuo account.</p>
        </section>

        <section class="mt-10">
          <div class="flex flex-col">
            <div class="mb-6 pt-3 rounded">
                <label class="block text-gray-700 text-sm font-bold mb-5 " for="password">API Token</label>
                <input v-model="form.token" type="password" id="password" class="bg-gray-200 rounded w-full text-gray-700 transition duration-500 px-3 py-3">
            </div>
            <button class="cursor-pointer transition bg-[#c7931473] px-5 py-3 w-full text-center md:w-auto rounded-lg text-[#875808] text-xs tracking-wider font-semibold hover:bg-[#c79314] hover:text-white" @click="submit()">Accedi</button>
          </div>
        </section>
      </main>
    </div>
  </div>
</template>
<script>
  import NavBar from './components/NavBar.vue'
  import Radio from './components/Radio.vue'
  import axios from 'axios'
  //import Login from './views/Login.vue'
  export default {
    components: {
      NavBar,
      Radio,
     // Login
    },
    data(){
      return{
        login : false,
        form: {
          token: "",
        },
      }
    },
    mounted(){

      /*if(!localStorage.getItem('user')){
        this.getUser()
      }*/

      if(localStorage.getItem('login'))
        this.login = true
      
    },
    methods:{
      /*
      async getUser(){
        let response = await axios.get(`https://royalskyservice.it/api/get_pilot_data.php?id=82`)
        this.user = response.data
        localStorage.setItem('user', JSON.stringify(this.user))
      },*/
      async submit() {
        if(this.form.token != ''){
          let res = await axios.get(`https://royalskyservice.it/api/get_pilot_data.php?id=82`)
          localStorage.setItem('token', this.form.token)
          localStorage.setItem('user', JSON.stringify(res.data))
          localStorage.setItem('login', true)
          
          let resp = await axios.get(`https://royalskyservice.it/api/weather.php?decoded=true&icao=${res.data.location}`)

          localStorage.setItem('location', JSON.stringify({
            icao: res.data.location, 
            latitude: resp.data.data[0].station.geometry.coordinates[1], 
            longitude: resp.data.data[0].station.geometry.coordinates[0]
          }))

          this.login = true
        }
      },
    }
  }
</script>
<style>
  /* width */
  ::-webkit-scrollbar {
    width: 7px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #f1f1f1; 
  }
  
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #c79314; 
    border-radius: 10px;
  }
  .router-link-active{
    color: rgb(25, 31, 41)!important;
  }
  body{
    background: rgb(243, 244, 246);
  }
</style>