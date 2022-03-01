<template>
    <NavBar />
    <router-link to="/admin">Torna indietro</router-link>
</template>
<script>
    import NavBar from '../components/NavBar.vue'
    export default {
        name: "AcademyAdmin",
        components: {
            NavBar
        }
    }
</script>