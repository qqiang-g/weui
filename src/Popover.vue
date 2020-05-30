<template>
    <div class="popover" @click.stop="onClick" ref="popover">
        <div ref="conetntWrapper" class="content-wrapper" :class="{[`position-${position}`]:true}" v-if="visible">
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
    props:{
        position:{
            type:String,
            default:'top',
            validator:(value)=>{
                return ['top','right','bottom','left'].indexOf(value)>=0
            }    
        }
    },
    methods:{
        positionContent(){
            const  {triggerWrapper,conetntWrapper }= this.$refs
            document.body.appendChild(conetntWrapper)
            let {width, height,top, left} =triggerWrapper.getBoundingClientRect()
            let {height:height2} = conetntWrapper.getBoundingClientRect()
            const positionMap = {
                top:{ left:left+window.scrollX, top:top+window.scrollY },
                bottom:{ left:left+window.scrollX, top:top+height+window.scrollY },
                left:{ left:left+window.scrollX, top:top-(height2-height)/2+window.scrollY },
                right:{ left:left + width +window.scrollX, top:top-(height2-height)/2+window.scrollY }
            }
                conetntWrapper.style.left =positionMap[this.position].left +'px'
                conetntWrapper.style.top = positionMap[this.position].top +'px'
            // if(this.position === 'top'){
            //     conetntWrapper.style.left = left+window.scrollX +'px'
            //     conetntWrapper.style.top = top+window.scrollY +'px'
            // }
            // if(this.position === 'bottom'){
            //     conetntWrapper.style.left = left+window.scrollX +'px'
            //     conetntWrapper.style.top = top+height+window.scrollY +'px'
            // }
            // if(this.position === 'left'){
            //     conetntWrapper.style.left = left+window.scrollX +'px'
            //     conetntWrapper.style.top = top-(height2-height)/2+window.scrollY +'px'
            // }
            // if(this.position === 'right'){
            //     conetntWrapper.style.left = left + width +window.scrollX +'px'
            //     conetntWrapper.style.top = top-(height2-height)/2+window.scrollY +'px'
            // }
            
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
            }else{
                this.close()
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
    padding: .5em 1em;
    
    max-width: 20em;
    word-break: break-all;
    &.position-top{
        transform: translateY(-100%);
        margin-top: -10px;
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
    &.position-bottom{
        margin-top: 10px;
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
            border-bottom-color:$border-color ;
            bottom: 100%;
        }
        &::after{
            border-bottom-color:#fff;
            bottom: calc(100% - 1px);
        }
    }
    &.position-left{
        transform: translateX(-100%);
        margin-left: -10px;
        &::after,&::before{
            content: '';
            display: block;
            border:10px solid transparent;
            position: absolute;
            width: 0;
            height: 0;
            top: 10px;
        }
        &::before{
            border-left-color:$border-color ;
            left: 100%;
        }
        &::after{
            border-left-color:#fff;
            left: calc(100% - 1px);
        }
    }
    &.position-right{
        margin-left: 10px;
        &::after,&::before{
            content: '';
            display: block;
            border:10px solid transparent;
            position: absolute;
            width: 0;
            height: 0;
            top: 10px;
        }
        &::before{
            border-right-color:$border-color ;
            right: 100%;
        }
        &::after{
            border-right-color:#fff;
            right:calc(100% - 1px);
        }
    }
    
}

</style>