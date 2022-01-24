<template>
    <div class="w-screen h-screen flex items-center justify-center">
        <main class="w-[500px] bg-white p-8 md:p-12 my-10 rounded-lg shadow-2xl">
            <section>
                <img src="../../assets/logo-v2.png" class="w-[80%] mx-auto" alt="">
                <h3 class="text-left font-bold text-2xl">Pronto ad usare la Royal E.F.B.?</h3>
                <p class="text-gray-600 pt-2">Accedi ora al tuo account.</p>
            </section>

            <section class="mt-10">
                <form class="flex flex-col">

                    <div class="mb-6 pt-3 rounded">
                        <label class="block text-gray-700 text-sm font-bold mb-5 " for="password">API Token</label>
                        <input v-model="form.token" type="password" id="password" class="bg-gray-200 rounded w-full text-gray-700 transition duration-500 px-3 pb-3">
                    </div>
                    <button class="cursor-pointer transition bg-[#c7931473] px-5 py-3 w-full text-center md:w-auto rounded-lg text-[#875808] text-xs tracking-wider font-semibold hover:bg-[#c79314] hover:text-white" @click="submit()">Accedi</button>
                </form>
            </section>
        </main>
    </div>
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
                if(this.form.token != '' && this.form.token){
                    localStorage.setItem('token', this.form.token)
                    
                    this.$router.push('/')
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