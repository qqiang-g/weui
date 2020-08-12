<template>
  <div class="we-pager">
    <span :class='{"we-pager-nav we-pager-nav-left":true,"we-pager-nav-disable":currentPage === 1}' @click="onCheckPage(currentPage-1)"> <Icon name="left" /> </span>
    <template v-for="(page,index) in pages" >
        <!-- 更多 -->
        <span 
         class="we-pager-item we-pager-item-more"
          v-if="page === '...'"
         :key="index">
          <Icon name="more1"></Icon>
        </span>
        <!-- 选中 -->
        <span class="we-pager-item we-pager-item-active" v-else-if="page === currentPage" :key="index">
          {{page}}
        </span> 
         <!--正常的page  -->
        <span class="we-pager-item" v-else :key="index" @click="onCheckPage(page)">
          {{page}}
        </span> 
    </template>
    <span :class="{'we-pager-nav we-pager-nav-right':true,'we-pager-nav-disable':currentPage === totalPage}" @click="onCheckPage(currentPage+1)" ><Icon name="right" /></span>
  </div>
</template>

<script>
import Icon from '@/Icon'
export default {
  name:'pager',
  components:{
    Icon
  },
  props:{
    //总数
    totalPage:{
      type:Number,
      required:true
    },
    //当前
    currentPage:{
      type:Number,
      required:true
    },
    //自动隐藏
    hideIfOnePage:{
      type:Boolean,
      default:true
    }
  },
  computed:{
    pages(){
      function unique (array){
        // array.forEach
      const object = {}
      array.map((number)=>{
        object[number] = true
      })
      return Object.keys(object).map((number)=>Number(number))
    }
    let u = unique ([1,this.currentPage-2,this.currentPage-1,this.currentPage,this.currentPage+1,this.currentPage+2,this.totalPage].filter((item)=>item>=1&&item<=this.totalPage))
    let u2 = u.reduce((prev,current,index,array)=>{
      prev.push(current)
      array[ index + 1 ] !== undefined && array[index+1]-array[index]>1&&prev.push('...')
      return prev
    },[])
    return u2
    }
  },
  data(){
    return{}
  },
  methods: {
    onCheckPage(page){
      if(page>this.totalPage||page<1) return
      this.$emit('update:currentPage',page)
    },
  }
}
</script>
<style scoped lang="scss">
  @import "../var";
  .we-pager {
    user-select: none;
    width:100%;
    height:100%;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    &-item{
      border: 1px solid $grey;
      border-radius: $border-radius;
      padding: 0 4px ;
      cursor: pointer;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      margin: 0 4px;
      &-more{
        border: none;
      }
      &-active ,&:hover{
        border-color:$blue ;
      }
      &-active,&-more{
        cursor: default;
      }
    }
    &-nav{
      display: inline-flex;
      justify-content: center;
      align-items: center;
      &:hover >svg{
        fill: $blue;
      }
      &-disable{
        cursor: no-drop;
        fill: #969696;
        &:hover >svg{
          fill: #969696;
        }
      }
    }
  }
</style>