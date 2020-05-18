<template>
    <div class="tabs">
        <slot></slot>
    </div>
</template>
<script>
import Vue from 'vue'
export default{
    name:'WeTabs',
    props:{
        selected:{
            type:String,
            required:true
        },
        direction:{
            type:String,
            validator(value){
                return ['row','col'].indexOf(value) >= 0
            }
        }
        
    },
    data () {
        return {
            eventBus:new Vue()
        }
    },
    provide(){
        return {
            eventBus:this.eventBus
        }
    },
    created(){
        this.$emit('update:selected','xxx')
    }
}
</script>
<style lang="scss" scoped>
.tabs{
  
}
</style>