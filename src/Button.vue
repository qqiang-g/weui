<template>
    <button class="click">{{message}}</button>
</template>

<script>
    export default {
        name: "Button",
        data(){
           return {
                message:'点我'
            }
        }
    }
</script>

<style scoped>
.click{
    background: azure;
    padding: 5px 1em;
}
</style>