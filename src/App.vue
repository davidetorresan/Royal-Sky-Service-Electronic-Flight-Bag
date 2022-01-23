<template>
  <div id="app" class="relative antialiased bg-gray-100">
    <NavBar />
    <router-view />
  </div>
</template>
<script>
  import NavBar from './components/NavBar.vue'
  import axios from 'axios'
  export default {
    components: {
      NavBar
    },
    data(){
      return{
        login : false,
        hours : null
      }
    },
    created(){
      if(localStorage.getItem('user') == '' || !localStorage.getItem('user')){
        this.getUser()
      }
    },
    methods:{
      async getUser(){
        let response = await axios.get(`https://royalskyservice.it/api/get_pilot_data.php?id=82`)
        this.user = response.data
        this.hours = this.user.transfered_hours + this.user.gva_hours
        localStorage.setItem('user', JSON.stringify(this.user))
        localStorage.setItem('hours', JSON.stringify(this.hours))
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
</style>