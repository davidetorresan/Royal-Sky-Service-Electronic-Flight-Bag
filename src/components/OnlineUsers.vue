<template>
    <div class="grid grid-cols-1 md:grid-cols-4 xl:grid-cols-5 px-4 xl:p-0 gap-y-4 md:gap-6" v-if="users.length > 0">
        <div class="col-span-1 md:col-span-2 lg:col-span-4 flex justify-between">
            <h2 class="text-xs md:text-sm text-gray-700 font-bold tracking-wide md:tracking-wider">
                Piloti Online
            </h2>
        </div>
        <div class="col-span-1 md:col-span-2 lg:col-span-4 flex justify-between">
            <ul class="flex">
                <li v-for="(user, i) in this.users" :key="i" class="relative mr-5">
                    <img :class="user.user_type_id === '3' ? 'rounded-full object-cover w-[60px] h-[60px] border-[2px] border-red-600' : 'rounded-full object-cover w-[60px] h-[60px]'" :src="'https://royalskyservice.it/vam/uploads/' + user.pilot_image" alt="">
                    <div class="absolute text-[10px] text-white bg-[#c79314] py-[2px] px-[5px] rounded-lg top-[70%] left-[50%] -translate-x-[50%]">{{ user.callsign }}</div>
                </li>
            </ul>
        </div>
    </div>

</template>
<script>
    export default {
        name: 'OnlinUsers',
        data(){
            return{
                user: {},
                users: []
            }
        },
        created(){
            this.user = JSON.parse(localStorage.getItem('user'))
            this.$axios.post(`add_users_online.php?id=${this.user.gvauser_id}&timestamp=${Date.now()}&type=true&method=insert`)
                .then((res) => {
                if(res.data.status === 200){
                    console.log(res)
                    localStorage.setItem('isOnline', true)
                }
            }) 
        },
        mounted(){
            setInterval(() => {
                this.$axios.get('get_users_online.php')
                    .then((res) => {
                        localStorage.setItem('usersOnline', JSON.stringify(res.data))
                        this.users = JSON.parse(localStorage.getItem('usersOnline'))
                    })
                        .catch((err) => console.log(err))
            }, 1000)
            
        }
    }
</script>
<style lang="scss" scoped>

</style>