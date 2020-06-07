<template>
  <div class="cascader">
    <div class="trigger" @click="popovserVisible = !popovserVisible">
      <slot></slot>
      <Input :value="result" />
    </div>
    <div class="popover-wrapper" v-if="popovserVisible">
      <CascaderItems class="popover" :selected="selected" @update:selected='onUpdateSelected' :height="popoverHeight" :items="source" />
    </div>
  </div>
</template>
<script>
import CascaderItems from "./Cascader-Items";
import Input from './Input'
export default {
  name: "Cascader",
  components: {
    CascaderItems: CascaderItems,
    Input:Input
  },
  props: {
    source: {
      type: Array
    },
    popoverHeight: {
      type: String
    },
    selected: {
      type: Array,
      default: () =>[]
    },
    loadData: {
      type:Function
    }
  },
  data() {
    return {
      popovserVisible: true
    };
  },
  methods:{
    onUpdateSelected(newSelected){
      this.$emit('update:selected',newSelected)
      let lastItem = newSelected[newSelected.length-1]
      //查找选中的子节点为其添加children
      let simplest = (children,id)=>{
        for(let i=0;i<children.length ;i++){
          if(children[i].id === id){
            return children[i]
          }
          if(children[i].children){
            let items = simplest(children[i].children,id)
            if(items){
              return items
            }
          }
        }
      }
      //获取异步请求过来的数据并添加到选中节点的children上
      let updateSource = (result)=>{
        let item = simplest(this.source,lastItem.id)
        if(item){
          this.$set(item,'children',result)
        }
      }
      //回调用户传递过来的数据
      this.loadData(lastItem,updateSource)
    }
  },
  computed:{
    //显示选中的值
    result(){
      return this.selected.map(item=>item.name).join(' / ')
    }
  }
};
</script>
<style scoped lang="scss">
@import "var";
.cascader {
  position: relative;
  .trigger {
    // height: $input-height;
    // display: inline-flex;
    // align-items:center;
    // padding: 0 1rem;
    // min-width: 10em;
    // border: 1px solid $border-color;
    // border-radius: $border-radius;
  }
  .popover-wrapper {
    margin-top: 5px;
    position: absolute;
    top: 100%;
    left: 0;
    background: #fff;
    display: flex;
    @extend .box-shadow;
    .label {
      white-space: nowrap;
    }
  }
}
</style>
