<template>
    <div class="tabs-item" @click="xxx">
        <slot></slot>
    </div>
</template>
<script>
export default{
    name:'WeTabsItem',
    inject:['eventBus'],
    props:{
        disabled:{
            type:Boolean,
            default:false
        },
        name:String|Number,
        required:true
    },
    created () {
        this.eventBus.$on('update:selected',(name)=>{
            console.log('头部'+name)
        })
    },
    methods:{
        xxx(){
            this.eventBus.$emit('update:selected',this.name)
        }
    }
}
</script>
<style lang="scss" scoped>
.tabs-item{
    
}
</style>