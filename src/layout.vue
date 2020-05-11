<template>
    <div class="layout" :class="layoutClass">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name:'WeLayout',
    data () {
        return {
            layoutClass:{
                hisSider:false
            }
        }
    },
    methods:{
        getLayout(){
            if(this.$children.find(vm=>vm.$options.name=='WeSider')){
                this.layoutClass.hisSider = true
                console.log('side')
                return
            }
        }
    },
    mounted () {
        this.getLayout()
    }
}
</script>
<style lang="scss" scoped>
    .layout{
        flex-grow: 1; 
        display: flex;
        flex-direction: column;
        &.hisSider{
           flex-direction:row; 
        }
    }
</style>