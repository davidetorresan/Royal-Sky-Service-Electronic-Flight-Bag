<template>
    <NavBar />
    <h1>{{data.data.flight}}</h1>
    <p>{{data.data.departure}} - {{data.data.arrival}}</p>
</template>
<script>
  import NavBar from '../components/NavBar.vue'
  export default {
    components: {
      NavBar,
    },
    data(){
      return{
        data : {}
      }
    },
    created(){
      this.data = JSON.parse(localStorage.getItem('booking'))
    }
}
</script>