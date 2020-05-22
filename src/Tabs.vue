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
    mounted(){
        console.log(this.$el.children[1])
        this.$el.children.forEach(item=>{
            console.log(item)
        })
        this.$children.forEach((vm) => {
            // if(['WeTabsHead','WeTabsBody'].indexOf(vm.$options.name)<0){
            //     console.warn('tabs 的子组件应该是 tabs-head 和 tabs-body 子组件 ，但你没有写子组件')
            // }
            if (vm.$options.name === 'WeTabsHead') {
            vm.$children.forEach((childVm) => {
                if (childVm.$options.name === 'WeTabsItem'
                && childVm.name === this.selected) {
                this.eventBus.$emit('update:selected', this.selected, childVm)
                }
            })
            }
      })
    }
}
</script>
<style lang="scss" scoped>
.tabs{
  
}
</style>