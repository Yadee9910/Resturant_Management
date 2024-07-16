<template>
    <h1 class="text-center text-gray-400 mt-12 font-semibold text-lg ">Update The Food Items </h1>
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
                 Update
            </button>
        </form>
    </div>
</template>

<script>
export default{
    name:'update-page',

    data(){
        return{
            addfood:{
                name:"",
                imageurl:"",
                price:"",
            }
        }
    },

    mounted(){
        let user = localStorage.getItem("user-info");
        if(!user){
            this.$router.push({
                name:"/"
            })
        }
    }
}
</script>


<style scoped>

</style>