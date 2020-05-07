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
export default {
    // props:['icon','iconPosition']
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
        }
    }
 }

</script>
<style lang="scss">
    @keyframes spin{
        0%{ transform: rotate(0deg); }
        100%{ transform: rotate(360deg); }
    }
    .we-button{
        font-size: var(--font-size);
        height:var(--button-height);
        padding: 0 1em;
        border-radius: var(--border-radius);
        border:1px solid var(--border-color);
        background: var(--button-bg);
        display: inline-flex;
        vertical-align: middle;
        justify-content: center;
        align-items: center; 
        &:hover{ border-color: var(--border-color-hover); }
        &:active{ background-color: var(--button-active-bg); }
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