<template>
    <div class="cascaderItem">
        {{sourceItem.name}}
        <div v-if="sourceItem.children">
            <CsacaderItem  v-for="(item,index) in sourceItem.children" :sourceItem="item"  :key='index' />
        </div>
    </div>
</template>
<script>
export default  {
    name:'CsacaderItem',
    props: {
        sourceItem:{
            type:Object
        }
    }
}
</script>
<style lang="scss" scoped>
.cascaderItem{
    border: 1px solid #123;
    padding: 10px;
}
</style>