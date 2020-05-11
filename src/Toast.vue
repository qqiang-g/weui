<template>
    <div class="toast" ref="toast" :class="toastClass">
        <we-icon class="icon" :name='icon'></we-icon>
        <div class="message">
            <slot v-if="!enableHtml"></slot>
            <div v-else v-html="$slots.default[0]"></div>
        </div>
        <div v-if="!autoClose" class="line" ref="line"></div>
        <div v-if="!autoClose">
            <span class="close" v-if="closeButton" @click="onClickClose" >
                <we-icon class="icon" v-if="closeButton.icon" :name="closeButton.icon"></we-icon>
                <span v-else v-html="closeButton.text"></span>
            </span>
        </div>
    </div>
</template>
<script>
import Vue from 'vue'
import Icon from './Icon'
export default {
    name:'WeToast',
    components:{
        'we-icon':Icon
    },
    props:{
        text:{
            type:String,
        },
        type:{
            type:String
        },
        icon:{
            type:String
        },
        autoClose:{
            type:Boolean,
            default:true
        },
        autoCloseDelay:{
            type:Number,
            default:3000
        },
        closeButton:{
            type:Object,
            default(value){
                return{
                    text:'关闭',
                    icon:'',
                    callback:undefined
                }
            }
        },
        enableHtml:{
            type:Boolean,
            default:false
        },
        position:{
            type:String,
            default:'top',
            validator(value){
                return ['top','bottom','middle','right-top'].indexOf(value)>=0
            }
        }
    },
    mounted(){
        this.exeAtuoClose()
        this.undateStyle()
    },
    computed:{
        toastClass(){
            const {position} = this
            return [`position-${position}`]
        }
    },
    methods:{
        undateStyle(){
            if(this.autoClose) return
            this.$nextTick(() => {
                this.$refs.line.style.height = 
                this.$refs.toast.getBoundingClientRect().height+'px'
            })
        },
        exeAtuoClose(){
            if(this.autoClose && !this.closeButton){
                setTimeout(() => {
                    this.close()
                },this.autoCloseDelay)
            }
        },
        onClickClose(){
            this.close()
            if(this.closeButton && (typeof this.closeButton.callback) === 'function')
            this.closeButton.callback()
        },
        close(){
            this.$el.remove()
            this.$emit('close')
            this.$destroy()
        }
    }
}
</script>
<style lang="scss" scoped>
    $font-size:14px;
    $toast-min-height: 40px;
    $toast-bg:#00000090;
    $toast-color:#fff;
    $toast-border-radius:4px;
    @keyframes fade-in {
        0%{opacity: 0;transform: translateY(100%);}
        100% {opacity: 1;transform: translateY(0%)}
    }
    .toast{
        animation: fade-in 1s;
        font-size: $font-size;    
        line-height: 1.8;
        min-height: $toast-min-height;
        position: fixed;
        border: 1px solid #666;
        display: flex;
        align-items: center;
        background: $toast-bg;
        color: #fff;
        box-shadow: 0px 0px 4px 0px #33333380;
        padding: 0 16px ;
        border-radius: $toast-border-radius;
        .message{
            padding: 8px 0;
        }
        .close{ padding-left: 16px; cursor: pointer ; flex-shrink: 0;}
        .line{ height: 100%; border-left: 1px solid #fff; margin-left: 16px;  }
        .icon{
            flex-shrink: 0;
            fill: $toast-color;
            margin: 0 16px;
        }
        &.position-top{
            top: 0;
            left: 50%;
            transform: translate(-50%,0);
        }
        &.position-bottom{
            bottom: 0;
            left: 50%;
            transform: translate(-50%,0);
        }
        &.position-middle{
            top: 50%;
            left: 50%;
            transform: translate(-50%,-50%);
        }
        &.position-right-top{
            top:0;
            right: 0;
        }
    }
    
</style>