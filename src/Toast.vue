<template>
    <div class="toast">
        <slot></slot>
    </div>
</template>
<script>
import Vue from 'vue'
// Vue.prototype.$Toast = function(){
//     console.log('i am toast!')
// }
export default {
    name:'WeToast',
    props:{
        text:{
            type:String,
        },
        type:{
            type:String
        },
        icon:{
            type:String
        }
    }
}
</script>
<style lang="scss" scoped>
    $font-size:14px;
    $toast-height: 40px;
    $toast-bg:#00000090;
    .toast{
        font-size: $font-size;    
        line-height: 1.8;
        height: $toast-height;
        position: fixed;
        top: 0;
        left: 50%;
        border: 1px solid #666;
        transform: translateX(-50%);
        display: flex;
        align-items: center;
        background: $toast-bg;
        color: #fff;
        box-shadow: 0px 0px 3px 0px #33333380;
        padding: 0 16px ;
    }
</style>