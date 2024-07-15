<template>
    <Header />
    <h1>Hello User, Welcome To <span>Time BreakFas</span>t</h1>
</template>

<script>
import Header from './Header.vue';

    export default{
        name:'Home-Page',
        components:{
            Header
        },
        //it will automatically called when page is loaded
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