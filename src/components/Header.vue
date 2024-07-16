<template>
    <div class="bg-yellow-500 h-16 flex fixed w-full justify-evenly text-white text-lg font-semibold">
      <router-link to="/home" class="flex items-center justify-center h-full px-5 transition duration-300 hover:bg-white hover:text-yellow-500 hover:font-bold">Home</router-link>
      <router-link to="/home/add" class="flex items-center justify-center h-full px-5 transition duration-300 hover:bg-white hover:text-yellow-500 hover:font-bold">Add</router-link>
      <!-- <router-link to="/home/update" class="flex items-center justify-center h-full px-5 transition duration-300 hover:bg-white hover:text-yellow-500 hover:font-bold">Update</router-link> -->
      <a v-on:click="handleLogout" href="#" class="flex items-center justify-center h-full px-5 transition duration-300 hover:bg-white hover:text-yellow-500 hover:font-bold">Logout</a>
    </div>
  </template>
  
  <script>
  export default {
    name: 'header-page',
    methods: {
      handleLogout() {
        localStorage.clear();
        this.$router.push({ name: "Login" });
      }
    }
  }
  </script>
  
  <style scoped>
  /* Add any additional styling here if needed */
  </style>
  