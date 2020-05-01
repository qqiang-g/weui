<template>
    <button class="we-button">123</button>
</template>
<script>
import Vue from 'vue'
export default {
    
}
</script>
<style lang="scss">
.we-button{
    height: var(--button-height);
    font-size: var(--font-size);
    background: var(--button-bg);
    border-radius: var(--border-radius);
    border:1px solid var(--border-color);
    padding: 0 1em;
    &:hover{
        border-color: var(--border-color-hover);
    }
    &:active{
        background-color: var(--button-active-bg);
    }
    &:focus{
        outline: none;
    }
}

</style>