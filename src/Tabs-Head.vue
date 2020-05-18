<template>
    <div class="tabs-head">
        <slot></slot>
        <div  class="actions">
            <slot name="actions"></slot>
        </div>
    </div>
</template>
<script>
export default{
    name:'WeTabsHead',
    inject:['eventBus'],
    created () {
    }
}   
</script>
<style lang="scss" scoped>
$tabs-height: 40px;
.tabs-head{
    display: flex;
    height: $tabs-height;
    justify-content: flex-start;
    align-items: center;
    >.actions{
        margin-left: auto;;
    }
}
</style>