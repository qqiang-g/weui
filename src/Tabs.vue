<template>
    <div class="tabs">
        <slot></slot>
    </div>
</template>
<script>
export default{
    name:'WeTabs',
    props:{
        selected:{
            type:String,
        },
        direction:{
            type:String,
            validator(value){
                return ['row','col'].indexOf(value) >= 0
            }
        }
        
    },
    created(){
        this.$emit('update:selected',)
    }
}
</script>
<style lang="scss" scoped>
.tabs{

}
</style>