<template>
    <div class="popover" @click="xxx">
        <div class="content-wrapper" v-if="visible">
            <slot name="content" ></slot>
        </div>
        <slot></slot>
    </div>
</template>
<script>
export default {
    name:'WePopover',
    data () {
        return {
            visible:false,
        }
    },
    methods:{
        xxx(){
            this.visible = !this.visible
        }
    }
}
</script>
<style lang="scss" scoped>
.popover{
    display: inline-block;
    position: relative;
    .content-wrapper{
        position: absolute;
        bottom: 100%;
        left: 0;
        background: #fcfcfc;
        border: 1px solid #456;
        box-shadow: 0 0 3px #123;
    }
}  

</style>