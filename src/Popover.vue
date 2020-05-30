<template>
    <div class="popover" @click.stop="onClick" ref="popover">
        <div ref="conetntWrapper" class="content-wrapper" v-if="visible">
            <slot name="content" ></slot>
        </div>
        <span ref="triggerWrapper" style="display:inline-block;">
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
            this.$refs.conetntWrapper.style.left = left+window.scrollX +'px'
            this.$refs.conetntWrapper.style.top = top+window.scrollY +'px'
        },
        onClickDocument(e){
            console.log(e.target)
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
$border-color:#333;
$border-tadius:4px;
.popover{
    display: inline-block;
    position: relative;
    
}  
.content-wrapper{
    position: absolute;
    background: #fff;
    border: 1px solid $border-color;
    // box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
    filter: drop-shadow( 0 1px 2px rgba(0, 0, 0, 0.5));
    transform: translateY(-100%);
    padding: .5em 1em;
    margin-top: -10px;
    max-width: 20em;
    word-break: break-all;
    &::after,&::before{
        content: '';
        display: block;
        border:10px solid transparent;
        position: absolute;
        width: 0;
        height: 0;
        left: 10px;
    }
    &::before{
        border-top-color:$border-color ;
        top: 100%;
    }
    &::after{
        border-top-color:#fff;
        top: calc(100% - 1px);
    }
}

</style>