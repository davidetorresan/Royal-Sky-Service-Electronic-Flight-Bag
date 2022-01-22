<template>
  <div id="app" class="relative antialiased bg-gray-100">
    <NavBar />
    <router-view />
  </div>
</template>
<script>
  import NavBar from './components/NavBar.vue'
  export default {
    components: {
      NavBar
    },
    data(){
      return{
        login : false
      }
    },
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