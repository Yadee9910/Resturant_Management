<template>
    <div class="flex items-center flex-col w-full mt-12">
        <div class="w-64 h-60">
             <img  class="object-container" src="../assets/logo1.png">
        </div> 
        <h1 class="font-semibold text-3xl text-center mt-4 tracking-widest">LOGIN</h1>
        <div class="flex flex-col w-full gap-5  items-center mt-5">
            
            <input 
                v-model="email"
                type="text" 
                placeholder="Enter Email"
                class="border focus:outline-none w-4/12 py-2 px-2"
            >

            <input 
                v-model="password"
                type="password" 
                placeholder="Enter Password"
                class="border focus:outline-none w-4/12 py-2 px-2"
            >

        <button 
            @click="handleLogin"
            class="bg-yellow-500 text-lg w-40 py-1 mt-4 text-white tracking-widest rounded-lg hover:bg-yellow-400 "
        >
            SIGN IN
        </button>
        </div>

        <router-link to="/signup" class="mt-4 text-xl text-gray-500 font-semibold"> SignUp</router-link>
    </div>
     
</template>

<script>
import axios from 'axios';

export default{
    name:'Login-page',
    data(){
        return{
            email:"",
            password:"",
        }  
    },

    methods:{
            async handleLogin(){
                const result = await axios.get(`http://localhost:3000/Users?email=${this.email}&password=${this.password}`)
                console.log(result)

                if(result.status == 200 && result.data.length >0){
                    localStorage.setItem("user-info",JSON.stringify(result.data))
                    this.$router.push({
                    name:"Home"
                 })
                }
                console.log(this.email, this.password);
            }
            
     },

     mounted(){
        let user = localStorage.getItem("user-info");
        if(user){
            this.$router.push({
                name:"Home"
            })
        }
    }
}
</script>

<style scoped>

</style>
