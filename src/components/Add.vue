<template> 
<h1>This is the Add Page</h1>
</template>


<script>
export default{
    name:"Add-Page",
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

<style>
</style>