<template>
    <div class="popover" @click.stop="onClick" ref="popover">
        <div ref="conetntWrapper" class="content-wrapper" v-if="visible">
            <slot name="content" ></slot>
        </div>
        <span ref="triggerWrapper">
            <slot></slot>
        </span>
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
        positionContent(){
            document.body.appendChild(this.$refs.conetntWrapper)
            let {width, height,top, left} = this.$refs.triggerWrapper.getBoundingClientRect()
            this.$refs.conetntWrapper.style.left = left+window.scrollX +'PX'
            this.$refs.conetntWrapper.style.top = top-height+window.scrollY +'PX'
            this.$refs.conetntWrapper.style.position = 'absolute'
        },
        onClickDocument(e){
            if(this.$refs.popover&& (this.$refs.popover === e.target||this.$refs.conetntWrapper.contains(e.target)))return
                this.close()
        },
        show(){
            this.visible = true
            this.$nextTick(()=>{
                this.positionContent()
                document.addEventListener('click',this.onClickDocument)
            })
            console.log('show')
        },
        close(){
            this.visible = false
            document.removeEventListener('click',this.onClickDocument)
            console.log('close')
        },
        onClick(event){
            if(this.$refs.triggerWrapper.contains(event.target)){
                if(this.visible === true) {
                    this.close()
                }else{
                    this.show()
                }
            }
            
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