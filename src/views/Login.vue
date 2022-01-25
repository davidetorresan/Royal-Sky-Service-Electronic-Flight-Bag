<template>
    
</template>
<script>
    export default {
        name: "Login",
        components: {},
        data() {
            return {
                form: {
                    token: "",
                },
                showError: false,
                disabled : true
            };
        },
        methods: {
            async submit() {
                if(this.form.token != ''){
                    await axios.get(`https://royalskyservice.it/api/get_pilot_data.php?id=82`)
                        .then((res) => {
                            localStorage.setItem('token', this.form.token)
                            localStorage.setItem('user', JSON.stringify(res.data))
                            this.$router.push('/weather')
                        })       
                }
            },

        },
    };
</script>
<style scoped>
    * {
        box-sizing: border-box;
    }

    input {
        box-shadow:0 0 15px 4px rgba(0,0,0,0.06);
        padding:10px;
        border-radius:10px;
    }
    #error {
        color: red;
    }
</style>