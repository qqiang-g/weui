<template>
    <button class="we-button" :class="{[`icon-${iconPosition}`]:true}"
    @click="$emit('click')" 
    >
        <we-icon class="icon" :class="loading?'loading':''" v-if="icon||loading" :name="loading?'loading':icon"></we-icon>
        <div class="content">
            <slot></slot>  
        </div>
    </button>
</template>    
<script>
import Icon from './Icon'
export default {
    components:{
        'we-icon':Icon
    },
    props:{
        icon:{},
        iconPosition:{
            type:String, 
            default:'left',
            validator(value){
                return !(value !== 'left' && value !== 'right');
            }
        },
        loading:{
            type:Boolean,
        },
    }
 }

</script>
<style lang="scss" scoped>
$font-size:14px;
$button-height:32px;
$button-bg:#fff;
$button-active-bg:#eee;
$border-radius:4px;
$color:#333;
$border-color:#999;
$border-color-hover:#666;
    @keyframes spin{
        0%{ transform: rotate(0deg); }
        100%{ transform: rotate(360deg); }
    }
    .we-button{
        font-size: $font-size;
        height:$button-height;
        padding: 0 1em;
        border-radius: $border-radius;
        border:1px solid $border-color;
        background: $button-bg;
        display: inline-flex;
        vertical-align: middle;
        justify-content: center;
        align-items: center; 
        &:hover{ border-color: $border-color-hover; }
        &:active{ background-color: $button-active-bg; }
        &:focus{ outline: none; }
        > .content{ order: 2; }
        > .icon{ order: 1; margin-right: .3em;}
        &.icon-right{
            > .content{ order: 1; }
            >.icon{ order: 2; margin-right:0;margin-left: .3em; }
        }
        .loading{ animation: spin 3s infinite linear; }
    }
</style>