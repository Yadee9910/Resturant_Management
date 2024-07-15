<template>
    <h1>This is the Update Page</h1>
</template>

<script>
export default{
    name:'update-page',
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