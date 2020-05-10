<template>
    <div class="col" :class="colCless" :style="colStyle" >
        <slot></slot>
    </div>
</template>
<script>
export default {
    name:'Col',
    props:{
        span:{
            type:[Number,String],
        },
        offset:{
            type:[Number,String],
        },
    },
    data(){
        return{
            gutter:0,
            
        }
    },
    computed:{
        colCless(){
            let {span, offset} = this
            return [span && `col-${span}`, offset && `offset-${offset}`];
        },
        colStyle(){
            return{
            paddingLeft: this.gutter / 2 + 'px', 
            paddingRight: this.gutter / 2 + 'px'  
            }

        }
    }   
}
</script>
<style lang="scss" scoped>
    .col{
        height: 60px;
        width: 50%;   
        $class: col-;
        @for $n from 1 through 24 {
            &.#{$class}#{$n}{
                width: ($n/24)*100%;
            }
        }
        $class: offset-;
        @for $n from 1 through 24 {
            &.#{$class}#{$n}{
                margin-left: ($n/24)*100%;
            }
        }
        
    }
</style>