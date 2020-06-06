<template>
    <div class="cascader">
        <div class="trigger" @click="popovserVisible=!popovserVisible">
            <slot></slot>
        </div>
        <div class="popover" v-if="popovserVisible">
            <CascaderItems :items = "source" />
        </div>
    </div>
</template>
<script>
import CascaderItems from './Cascader-Items'
export default {
    name:'Cascader',
    components:{
        "CascaderItems":CascaderItems
    },
    props:{
        source:{
            type:Array,
        }
    },
    data(){
        return{
            popovserVisible:false,
            
        }
    },
}
</script>
<style scoped lang='scss'>
@import 'var';
    .cascader{
        .trigger{
            border: 1px solid #123;
            height: 32px;
            width: 100px;
        }
        .popover{
            max-height: 200px;
            border: 1px solid #f5f;
            position: flex;
            .label{
                white-space: nowrap;
            }
        }
    }

    
</style>