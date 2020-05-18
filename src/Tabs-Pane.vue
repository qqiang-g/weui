<template>
    <div class="tabs-body">
        <slot></slot>
    </div>
</template>
<script>
export default{
    name:'WeTabsBody',
    inject:['eventBus'],
    created () {
        this.eventBus.$on('update:selected',(name)=>{
            console.log('内容'+name)
        })
    }
    
}
</script>
<style lang="scss" scoped>
.tabs-body{
    
}
</style>