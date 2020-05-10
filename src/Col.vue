<template>
    <div class="col" :class="[`col-${span}`]">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name:'Col',
    props:{
        span:{
            type:[Number,String]
        }
    }
}
</script>
<style lang="scss" scoped>
    .col{
        height: 100px;
        background: #333;
        width: 50%;
        border: 1px solid #fff; 
        $class: col-;
        @for $n from 1 through 24 {
            &.#{$class}#{$n}{
                width: ($n/24)*100%;
            }
        }
    }
</style>