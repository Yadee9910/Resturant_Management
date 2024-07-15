<template>
    <div class="">
        <Header />
    </div>
    
    <div class="">
        <h1 class=" pt-20 font-semibold flex text-center items-center justify-center text-2xl">Hello {{name}}, Welcome To <span class=" pl-2 text-yellow-600  pr-2">Time BreakFast </span></h1>
        <router-view></router-view>
    </div>

   
</template>

<script>
import Header from './Header.vue';

    export default{
        data(){
            return{
                name:''
            }
        },
        name:'Home-Page',
        components:{
            Header
        },
        //it will automatically called when page is loaded
        mounted(){
        let user = localStorage.getItem("user-info");
        
        this.name = JSON.parse(user)[0].name;
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