<template>
  <div id="app" class="relative antialiased bg-gray-100">
    <router-view />
  </div>
</template>
<script>
  import NavBar from './components/NavBar.vue'
  import Radio from './components/Radio.vue'
  import axios from 'axios'
  export default {
    components: {
      NavBar,
      Radio 
    },
    data(){
      return{
        login : false,
      }
    },
    mounted(){
      if(!localStorage.getItem('token') || localStorage.getItem('token') == ""){
        this.$router.push('/login')
      }else{
        this.getUser()
      }
      
    },
    methods:{
      async getUser(){
        let response = await axios.get(`https://royalskyservice.it/api/get_pilot_data.php?id=82`, {
          headers:{
            'royal-token' : localStorage.getItem('token')
          }
        })
        this.user = response.data
        localStorage.setItem('user', JSON.stringify(this.user))
      }
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