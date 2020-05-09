<template>
     <svg class="we-icon" >
            <use :xlink:href="`#w-${name}`"></use>
        </svg>
</template>
<script>
import './svg'
export default {
    props:['name']
}
</script>
<style lang="scss" scoped>

    .we-icon{ width: 1em; height: 1em; }

</style>