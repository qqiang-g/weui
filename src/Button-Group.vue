<template>
    <div class="we-button-group">
        <slot></slot>
    </div>
</template>
<script>
export default {
    mounted(){
        for(let node of this.$el.children){
            if(node.nodeName.toLowerCase()!=='button'){
                console.warn(`we-button-group 的子元素应全是we-button，但你的有${node.nodeName.toLowerCase()}元素`)
            }
        }
    }
}
</script>
<style lang='scss' scoped>
@import 'var';
.we-button-group{
    display: inline-flex;
    vertical-align: middle;
    > .we-button{
        border-radius:0 ;
        &:not(:first-child){
            margin-left: -1px;
        }
        &:first-child{
            border-top-left-radius: $border-radius;
            border-bottom-left-radius: $border-radius;
        }
        &:last-child{
            border-top-right-radius: $border-radius;
            border-bottom-right-radius: $border-radius;
        }
        &:hover{
            position: relative;
            z-index: 1;
        }
    }
}
</style>