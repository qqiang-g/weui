<template>
    <div class="cascader">
        <div class="trigger">
            <slot></slot>
        </div>
        <div class="popover">
            <div v-for="(item,index) in source" :key="index">
                <CascaderItem :sourceItem = "item"></CascaderItem>
            </div>
        </div>
    </div>
</template>
<script>
import CascaderItem from './Cascader-Item'
export default {
    name:'Cascader',
    components:{
        "CascaderItem":CascaderItem
    },
    props:{
        source:{
            type:Array,
        }
    }
}
</script>
<style scoped lang='scss'>
@import 'var';
    .cascader{

    }
</style>