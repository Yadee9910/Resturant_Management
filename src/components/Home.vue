<template>
    <div class="">
        <Header />
    </div>
    
    <div class="">
        <h1 class=" pt-20 font-semibold flex text-center items-center justify-center text-2xl">Hello {{name}}, Welcome To <span class=" pl-2 text-yellow-600  pr-2">Time BreakFast </span></h1>
        <router-view @item-added ="fetchItems"></router-view>
    </div>

    <div v-if="isHomePage" class=" mr-4  ml-4 grid grid-cols-5 gap-12 mt-8 ">
        <div v-for="item in foods" :key="item.id" 
            class="border  flex flex-col items-center justify-center mb-4">
           <div class=" w-full h-full">
            <img :src=item.image class="object-cover w-full h-48">
           </div>
            
            <h2 class="text-lg font-semibold mt-4">{{ item.name }}</h2>
            <p class="mb-4">{{ item.price }}</p>

        </div>

    </div>
   
</template>

<script>
import Header from './Header.vue';
import axios from 'axios';

    export default{
        data(){
            return{
                name:'',
                foods:[]
            }
        },
        name:'Home-Page',
        components:{
            Header
        },

        computed:{
            isHomePage(){
                return this.$route.name === "Home";
            }
        },
        //it will automatically called when page is loaded
       async  mounted(){
        let user = localStorage.getItem("user-info");
        
        this.name = JSON.parse(user)[0].name;
        if(!user){
            this.$router.push({
                name:"/"
            })
        }else{
            await this.fetchItems();
        }
        
       
        },

        methods:{
            async fetchItems() {
                let result = await axios.get("http://localhost:3000/foodItems");
                console.log(result);
                this.foods = result.data;
            }
        },
    }
    
</script>

<style scoped>
</style>