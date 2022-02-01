<template>
    <NavBar />
    <main class="container mx-w-6xl mx-auto py-4 h-[88.5vh]">
      <div class="flex flex-col">
        <div class="w-[50%] p-6 rounded-2xl bg-white flex justify-between items-center text-white relative">
          <div class="text-black">
            <p class="font-bold text-xs">Partenza</p>
            <p>{{data.data.departure}}</p>
          </div>
          <hr class="w-[60%]"/>
          <div class="w-[16px] h-[16px] rounded-full bg-black absolute top-[50%] left-[50%] -translate-y-[50%] -translate-x-[100%]"> </div>
          <div class="text-black text-right">
            <p class="font-bold text-xs">Arrivo</p>
            <p>{{data.data.arrival}}</p>
          </div>
        </div>
        <div class="w-[50%] p-6 rounded-2xl bg-white flex justify-between items-center text-white relative mt-6">
          <div class="text-black">
            <p class="font-bold text-xs">Partenza</p>
            <p>{{data.data.departure}}</p>
          </div>
          <hr class="w-[60%]"/>
          <div class="w-[16px] h-[16px] rounded-full bg-black absolute top-[50%] left-[50%] -translate-y-[50%] -translate-x-[100%]"> </div>
          <div class="text-black text-right">
            <p class="font-bold text-xs">Arrivo</p>
            <p>{{data.data.arrival}}</p>
          </div>
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
        data : {}
      }
    },
    created(){
      this.data = JSON.parse(localStorage.getItem('booking'))
    }
}
</script>

<script>
  
</script>