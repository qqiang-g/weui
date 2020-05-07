<template>
     <svg class="we-icon" >
            <use :xlink:href="`#w-${name}`"></use>
        </svg>
</template>
<script>
export default {
    props:['name']
}
</script>
<style lang="scss">

    .we-icon{ width: 1em; height: 1em; }

</style>