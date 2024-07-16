<template>
    <h1 class="text-center text-gray-400 mt-12 font-semibold text-lg ">Update The Food Items </h1>
    <div class="flex justify-center mt-12 w-full">
        <form class="flex flex-col gap-6 px-2 justify-center w-4/12 items-center">
            <div class="flex flex-col gap-1 w-full ">
                <label class="font-semibold">Name</label>
                <input  
                        v-model="addfood.name"
                        type="text" 
                        name="name"  
                        class="border py-2 pl-2 focus:outline-none"
                >
            </div>

            <div class="flex flex-col gap-1 w-full">
                <label class="font-semibold">Price</label>
                <input  
                        v-model="addfood.price"
                        type="text" 
                        name="price" 
                        class="border py-2 pl-2 focus:outline-none"
                >
            </div>

            <div class="flex flex-col gap-1 w-full">
                <label class="font-semibold">Image Url</label>
                <input  
                        v-model="addfood.image"
                        name="imageUrl"
                        type="text"
                        class="border py-2 pl-2 focus:outline-none"
                >
            </div>

            <button 
                type="button"
                class="bg-yellow-500 text-lg w-full  py-1 mt-4 text-white tracking-widest  hover:bg-yellow-400"
                v-on:click="updateItems"
            >
                 Update
            </button>
        </form>
    </div>
</template>

<script>
import axios from 'axios';

export default{
    name:'update-page',

    data(){
        return{
            addfood:{
                name:"",
                image:"",
                price:"",
            }
        }
    },

   async mounted(){
        let user = localStorage.getItem("user-info");
        console.log(this.$route.params.id);
        if(!user){
            this.$router.push({
                name:"/"
            })
        }

        let result = await axios.get(`http://localhost:3000/foodItems/`+this.$route.params.id);
        this.addfood = result.data;


    },

    methods:{
        async updateItems(){
            const result = await axios.patch(`http://localhost:3000/foodItems/`+this.$route.params.id,{
                name:this.addfood.name,
                price:this.addfood.price,
                image:this.addfood.image
            });

            console.log("update result", result);
            if(result.status == 200){
                this.$emit('item-added');
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

<!-- {
    "id": "f471",
    "name": "Vegetable Bun",
    "image": "https://cdn-creativehub.sgp1.cdn.digitaloceanspaces.com/pns/P_and_S_Vegetable_Buns_0eb30b78c1.jpg",
    "price": "Rs 150/="
  },
  {
    "id": "f67d",
    "name": "Tea Bun",
    "image": "https://cdn-creativehub.sgp1.cdn.digitaloceanspaces.com/pns/P_and_S_Tea_Bun_828203c111.jpg",
    "price": "Rs 150/="
  } -->