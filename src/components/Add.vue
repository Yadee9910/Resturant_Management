<template> 
    <div class="flex justify-center mt-12 w-full">
        <form class="flex flex-col gap-6 px-2 justify-center w-4/12 items-center">
            <div class="flex flex-col gap-1 w-full ">
                <label>Name</label>
                <input  
                        v-model="addfood.name"
                        type="text" 
                        name="name"  
                        class="border py-2 pl-2 focus:outline-none"
                >
            </div>

            <div class="flex flex-col gap-1 w-full">
                <label>Price</label>
                <input  
                        v-model="addfood.price"
                        type="text" 
                        name="price" 
                        class="border py-2 pl-2 focus:outline-none"
                >
            </div>

            <div class="flex flex-col gap-1 w-full">
                <label>Image Url</label>
                <input  
                        v-model="addfood.imageurl"
                        name="image"
                        type="text"
                        class="border py-2 pl-2 focus:outline-none"
                >
            </div>

            <button 
                type="button"
                class="bg-yellow-500 text-lg w-full  py-1 mt-4 text-white tracking-widest  hover:bg-yellow-400"
                v-on:click="addItems"
            >
                 Add +
            </button>
        </form>
    </div>
</template>


<script>
import axios from 'axios';

export default{
    name:"Add-Page",

    data(){
        return{
            addfood:{
                name:"",
                imageurl:"",
                price:"",
            }
              
        }
    },
   
    methods:{
        // handleFileChange(event){
        //     this.image = event.target.files[0];
        //     // const reader = new FileReader();
        //     // reader.readAsDataURL(this.image);
        //     // reader.onload=(e)=>{
        //     //    console.log(e.target.result);
        //     // }
        //     console.log(this.image);

       async addItems(){
                const result = await axios.post("http://localhost:3000/foodItems", {
                    name:this.addfood.name,
                    image:this.addfood.imageurl,
                    price:this.addfood.price
                });

                if(result.status == 201){
                    // console.log(result);
                    this.$emit('item-added')
                    this.$router.push({
                        name:'Home'
                    })
                }
            console.log(this.addfood);
        }
       
    },

    mounted(){
        let user = localStorage.getItem("user-info");
        if(!user){
            this.$router.push({
                path:"/"
            })
        }
    }
}
</script>

<style>
</style>

