<template>
  <div id="app" class="relative antialiased bg-gray-100">
    <router-view v-if="login == true"/>
    <div v-else class="w-screen h-screen flex items-center justify-center">
      <main class="w-[500px] bg-white p-8 md:p-12 my-10 rounded-lg shadow-2xl">
        <section>
          <img src="../assets/logo-v2.png" class="w-[80%] mx-auto" alt="">
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
        userID: null,
        form: {
          token: "",
          userID: null
        },
      }
    },
    mounted(){ 

      if(localStorage.getItem('login')) this.login = true
      
    },
    async beforeUnmount(){
      this.$axios.post('add_users_online.php?id=' + this.userID + '&method=delete')
        .then(() => localStorage.setItem('isOnline', false))
          .catch((err) => console.log(err))
    },
    methods:{
      async submit() {
        if(this.form.token != ''){

          await this.$axios.get('/auth/check_tokens.php?token=' + this.form.token)
            .then(async (response) => {
              if(response.data.status == 404){
                alert(response.data.message)
              }else{
                localStorage.setItem('token', JSON.stringify(response.data))
                this.userID = response.data.user
                
                let res = await this.$axios.get(`https://royalskyservice.it/api/get_pilot_data.php?id=${this.userID}`)
                localStorage.setItem('user', JSON.stringify(res.data))
                localStorage.setItem('login', true)

                this.$axios.get('get_users_online.php')
                  .then((res) => {
                    localStorage.setItem('usersOnline', JSON.stringify(res.data))
                  })

                this.$axios.get(`add_users_online.php?id=${this.userID}&timestamp=${Date.now()}&type=true&method=insert`)
                  .then((res) => {
                    if(res.data.status === 200){
                      localStorage.setItem('isOnline', true)
                    }
                  })                    
                
                let resp = await this.$axios.get(`https://airport-info.p.rapidapi.com/airport?icao=${res.data.location}`, {
                  headers: {
                    'x-rapidapi-host': 'airport-info.p.rapidapi.com',
                    'x-rapidapi-key': '0b3447fca9msh477e888d19607fap14e206jsndd35bba6653e'
                  }
                })

                localStorage.setItem('location', JSON.stringify({
                  icao: res.data.location, 
                  latitude: resp.data.latitude, 
                  longitude: resp.data.longitude 
                }))

                this.login = true

                let bookings = await this.$axios.get('get_user_booked_routes.php?id=' + this.userID)

                if(!bookings.data.error){
                  localStorage.setItem('booking', JSON.stringify({
                    booked: true,
                    data : bookings.data
                  }))
                }else{
                  localStorage.setItem('booking', JSON.stringify({
                    booked: false,
                    data : null
                  }))
                }
              }
            })
            location.reload()
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