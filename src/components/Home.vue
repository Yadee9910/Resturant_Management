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
            class="border flex flex-col items-center justify-center mb-4">
           <div class=" w-full h-full">
            <img :src=item.image class="object-cover w-full h-48">
           </div>
            
           <div class="flex flex-row items-center gap-8">
                <div class=" flex flex-col">
                    <h2 class="text-lg font-semibold mt-4">{{ item.name }}</h2>
                    <p class="mb-4">{{ item.price }}</p>
                </div>

                <div class=" flex flex-row gap-4 ">
                    <router-link :to="'/update/'+item.id">
                        <font-awesome-icon icon="pen"  
                        class="text-lg text-yellow-500"
                    />
                     </router-link>

                        <font-awesome-icon icon="trash" 
                            class="text-lg text-red-600"
                            v-on:click="deleteItems(item.id)"    
                        />
                   
                </div>         
           </div>          
        </div>
    </div>

    <div v-if="modal" class="fixed inset-0 flex items-center justify-center bg-zinc-200 bg-opacity-70 z-30 ">
        <div class="bg-white rounded-lg w-full max-w-xl p-8 z-50"> 
                <h1 class="text-center font-semibold text-lg">Are you sure you want to delete this food item?</h1>
                <div class="flex flex-row justify-evenly mt-4 ">
                    <button @click="handleDelete" class="bg-yellow-500 py-2 px-2 text-lg font-semibold text-white">Confirm</button>
                    <button @click="cancelDelete" class="bg-red-600 py-2 px-2 text-lg font-semibold text-white">Cancel</button>
                </div>
             
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
                foods:[],
                modal:false,
                deleteId:'',
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
         mounted(){   
            this.fetchItems();      
        },

        methods:{
            async fetchItems() {
                let user = localStorage.getItem("user-info");
                this.name = JSON.parse(user)[0].name;
                    if(!user){
                        this.$router.push({
                            name:"/"
                        })
                    }

                let result = await axios.get("http://localhost:3000/foodItems");
                this.foods = result.data;
            },

            deleteItems(id){
                    this.modal = !this.modal
                    this.deleteId = id
            },

            async handleDelete(){
                let result  = await axios.delete(`http://localhost:3000/foodItems/`+this.deleteId);
                console.log(result);
                this.fetchItems();
                this.modal=false
            },
            
            cancelDelete(){
                this.modal=false
            }
        },
    }
    
</script>

<style scoped>

</style>