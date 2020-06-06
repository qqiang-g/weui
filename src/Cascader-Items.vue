<template>
    <div class="cascaderItem">
        <div class="left">
                <div class="label" @click="leftSelected = item" v-for="item in items" style="border:1px solid red;" :key="item.name">{{item.name}} </div>
            </div>
            <div class="right" v-if="leftSelected">
                <CsacaderItems :items='rightItems'></CsacaderItems>
            </div>
    </div>
</template>
<script>
export default  {
    name:'CsacaderItems',
    props: {
        items:{
            type:Array
        }
    },
    data(){
        return{
            leftSelected:null
        }
    },
    computed:{
        rightItems(){
            if(this.leftSelected&&this.leftSelected.children!==undefined)
                return this.leftSelected.children
            else return null
        }
    }
}
</script>
<style lang="scss" scoped>
.cascaderItem{
    display: flex;
    align-items:flex-start;
    justify-content: flex-start;
    & .left{
        border: 1px solid #123;
    }
}
</style>