<template>
    <NavBar />
    <main class="container mx-w-6xl mx-auto py-4 h-[88.5vh]">
      <div class="flex justify-between">
        <div class="w-[48%] p-6 rounded-2xl bg-white flex justify-between items-center text-white relative">
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
        <div class="w-[48%] p-6 rounded-2xl bg-white flex justify-between items-center text-white relative mt-6">
          <div class="text-black">
            <div @click="deleteBooking(data.data.flight, data.data.fleet_id)" class="cursor-pointer">x Rimuovi prenotazione</div>
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
        data : {},
        user: null
      }
    },
    mounted(){
    },
    created(){

      this.data = JSON.parse(localStorage.getItem('booking'))
      this.user = JSON.parse(localStorage.getItem('token'))

      if(!this.data.booked){
        this.$router.push('/book')
      }

    },
    methods:{
      async deleteBooking(flightN, plane){
        console.log(flightN)
        console.log(plane)
        this.$axios.get(`remove_booking.php?route=${this.data.routeID}&plane=${plane}&id=${this.user.user}`)
          .then(() => {
            this.$swal.fire({
              position: 'top-end',
              toast: true,
              icon: 'success',
              title: 'Prenotazione volo # ' + flightN + ' cancellata',
              showConfirmButton: false,
              timer: 2000,
              footer: 'Royal Sky Service Booking System™'
            })
            localStorage.setItem('booking', JSON.stringify({
              booked: false,
              data : null
            }))
          })
            .then(() => {
              setTimeout(() => {
                this.$router.push('/book')
              }, 2000)
            })
      }
    }
}
</script>

<script>
  
</script>