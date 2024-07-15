<template>
    <div class="flex flex-col w-full items-center mt-4">
        <div class="w-64 h-60">
             <img  class="object-container" src="../assets/logo1.png">
        </div>   
        <h1 class="font-semibold text-3xl text-center mt-4 tracking-widest">REGISTER</h1>
        <div class="flex flex-col w-full gap-5 items-center mt-5">
            <input 
                v-model="name"
                type="text" 
                placeholder="Enter Name"
                class="border focus:outline-none w-4/12 py-2 px-2"
            >
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
            @click="handleSignup"
            class="bg-yellow-500 text-lg w-40 py-1 mt-4 text-white tracking-widest rounded-lg hover:bg-yellow-400 "
        >
            SIGN UP
        </button>
        </div>
      
    </div>  
</template>

<script>
import axios from 'axios';

export default{
    name:'SignUp',
    data(){
        return{
            name:"",
            email:'',
            password:''
        }
    },

    methods:{
       async handleSignup(){
            // console.log(this.name, this.email,  this.password);
            let result = await axios.post("http://localhost:3000/Users",{
                name: this.name,
                email:this.email,
                password:this.password
            });

            console.log(result);
            if(result.status === 201){
                localStorage.setItem("user-info",JSON.stringify(result.data))
                this.$router.push({
                    name:"Home"
                 })
            }
        }
    }
}
</script>

<style scoped>
</style>