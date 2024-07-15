<template>
    <div class="bg-yellow-500 h-16 flex fixed w-full justify-evenly text-white text-lg font-semibold">
      <a href="#" class="flex items-center justify-center h-full px-5 transition duration-300 hover:bg-white hover:text-yellow-500 hover:font-bold">Home</a>
      <a href="#" class="flex items-center justify-center h-full px-5 transition duration-300 hover:bg-white hover:text-yellow-500 hover:font-bold">Add</a>
      <a href="#" class="flex items-center justify-center h-full px-5 transition duration-300 hover:bg-white hover:text-yellow-500 hover:font-bold">Update</a>
      <a v-on:click="handleLogout" href="#" class="flex items-center justify-center h-full px-5 transition duration-300 hover:bg-white hover:text-yellow-500 hover:font-bold">Logout</a>
    </div>
  </template>
  
  <script>
  export default {
    name: 'header-page',
    methods:{
        handleLogout(){
            localStorage.clear();
            this.$router.push({
                name:"Login"
            })
        }
    }
  }
  </script>
  


<style scoped>

</style>