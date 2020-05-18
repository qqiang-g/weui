<template>
    <div class="tabs-head">
        <slot></slot>
        <div class="line" ref="line"></div>
        <div  class="actions">
            <slot name="actions"></slot>
        </div>
    </div>
</template>
<script>
export default{
    name:'WeTabsHead',
    inject:['eventBus'],
    mounted () {
        this.eventBus.$on('update:selected',(item,vm)=>{
            console.log(vm.$el.getBoundingClientRect())
            const {width,left} = vm.$el.getBoundingClientRect()
            this.$refs.line.style.width = width+'px'
            console.log(this.$refs.line.getBoundingClientRect())
            this.$refs.line.style.transform = `translateX(${left}px)`
        })
    }
}   
</script>
<style lang="scss" scoped>
$tabs-height: 40px;
$blur:#2278ce;
.tabs-head{
    display: flex;
    height: $tabs-height; 
    justify-content: flex-start;
    position: relative;
    >.line{
        position: absolute;
        bottom: 0;
        border-bottom: 1px solid $blur;
        transition: all 350ms ;
    }
    >.actions{
        margin-left: auto;
    }
}
</style>