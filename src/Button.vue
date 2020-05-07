<template>
    <button class="g-button" :class="{[`icon-${iconPostiton}`]:true}">
        <svg class="icon" v-if="icon">
            <use :xlink:href="`#w-${icon}`"></use>
        </svg>
        <div class="content">
            <slot></slot>
        </div>
    </button>
</template>
<script>
export default {
    props:['icon','iconPostiton']
 }
</script>
<style lang="scss">
    .g-button{
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
    }
        
</style>