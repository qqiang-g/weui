<template>
    <div class="tabs-item" @click="xxx" :class="classes" >
        <slot></slot>
    </div>
</template>
<script>
export default{
    name:'WeTabsItem',
    inject:['eventBus'],
    data(){
        return{
            active:false
        }
    },
    props:{
        disabled:{
            type:Boolean,
            default:false
        },
        name:String|Number,
        required:true
    },
    created(){
        this.eventBus.$on('update:selected',(name)=>{
            this.active = this.name === name
        })
    },
    mounted () {
        this.eventBus.$on('update:selected',(name)=>{
        })
    },
    methods:{
        xxx(){
            this.eventBus.$emit('update:selected',this.name)
        }
    },
    computed:{
        classes(){
            return{
                active:this.active
            }
        }
    }
}
</script>
<style lang="scss" scoped>
.tabs-item{
    flex-shrink: 0;
    padding: 0 1em;
    &.active{
        background: #123;
    }
}
</style>