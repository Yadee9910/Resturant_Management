<template>
    <div class="flex flex-col w-full items-center mt-4">
        <div class="w-64 h-60">
             <img  class="object-container" src="../assets/logo1.png">
        </div>   
        <h1 class="font-semibold text-3xl text-center mt-4 tracking-widest">REGISTER</h1>
        <div class="flex flex-col w-full gap-5 items-center mt-5">
            <input 
                type="text" 
                placeholder="Enter Name"
                class="border focus:outline-none w-4/12 py-2 px-2"
            >
            <input 
                type="text" 
                placeholder="Enter Email"
                class="border focus:outline-none w-4/12 py-2 px-2"
            >

            <input 
                type="text" 
                placeholder="Enter Password"
                class="border focus:outline-none w-4/12 py-2 px-2"
            >

        <button class="bg-yellow-500 text-lg px-4 py-1 text-white tracking-widest rounded-lg hover:bg-yellow-400 ">SIGN UP</button>
        </div>
      
    </div>  
</template>

<script>
export default{
    name:'SignUp',
}
</script>

<style scoped>

</style>