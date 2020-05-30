<template>
    <div class="popover" @click.stop="xxx">
        <div ref="conetntWrapper" class="content-wrapper" v-if="visible">
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
    mounted(){
        
    },
    methods:{
        xxx(){
            this.visible = !this.visible
            if(this.visible === true){
            this.$nextTick(()=>{
                console.log(this.$refs)
            document.body.appendChild(this.$refs.conetntWrapper)
            })
                document.addEventListener('click',function x(){
                     console.log('关闭popover')
                    this.visible = false
                    // document.removeEventListener('click',x)
                    console.log('next')
                }.bind(this),{capture:true,once:true})
            }
        }  
            // document.body.appendChild(this.$refs.conetntWrapper)
        
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