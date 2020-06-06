<template>
<div class="collapse">
    <slot></slot>
    {{selected}}
</div>
</template>
<script>
import Vue from 'vue'
export default {
    name:'CollapseItem',
    data () {
        return {
            eventBus:new Vue(),
            selectedArray:[]
        }
    },
    props:{
        single:{
            type:Boolean,
            default:false
        },
        selected:{
            type:Array,
        }
    },
    provide(){
            return{
                eventBus:this.eventBus
            }
    },
    mounted(){
        //初始状态通知子组件用户默认选中的值
        this.eventBus.$emit('update:selected',this.selected)
        //监听组跟新选中的值
        this.eventBus.$on('update:addSelected',(name)=>{
            let selectedCopy = JSON.parse(JSON.stringify(this.selected))
            if(this.single){
                selectedCopy = [name]
            }else{
                selectedCopy.push(name)
            }
            this.$emit('update:selected',selectedCopy)
            this.eventBus.$emit('update:selected',selectedCopy)
        })
        //监听组件移除选中的值
        this.eventBus.$on('update:removeSelected',(name)=>{
            let selectedCopy = JSON.parse(JSON.stringify(this.selected))
            let index = selectedCopy.indexOf(name)
            selectedCopy.splice(index,1)
            this.$emit('update:selected',selectedCopy)
            this.eventBus.$emit('update:selected',selectedCopy)
        })
    }
    
}
</script>
<style lang="scss" scoped>
@import 'var';
.collapse{
    border: 1px solid $grey;
    border-radius: $border-radius;
}
</style>