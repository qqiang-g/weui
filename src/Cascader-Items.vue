<template>
  <div class="cascaderItem" :style="{ height: height }">
    <div class="left">
      <div
        class="label"
        v-for="(item,index) in items"
        @click="onClickLabel(item)"
        :key="index"
      >
        <span class="name"> {{ item.name }} </span>
        <span class="icons">
          <template v-if="item.name === loadingItem.name">
            <Icon class="loading" name="loading"></Icon>
          </template>
          <template v-else>
            <Icon  v-if="rightArrowVisible(item)" name="right"></Icon>
          </template>
        </span>
        
      </div>
    </div>
    <div class="right" v-if="rightItems">
      <CsacaderItems 
        :selected="selected" 
        :items="rightItems" 
        :height="height" 
        :level="level+1"
        @update:selected="onUpdateSelected"
        :loading-item='loadingItem'
        :load-date='loadData'
      ></CsacaderItems>
    </div>
  </div>
</template>
<script>
import Icon from "./Icon";
export default {
  name: "CsacaderItems",
  components: {
    Icon
  },
  props: {
    items: {
      type: Array
    },
    height: {
      type: String
    },
    selected: {
      type: Array,
      default: () =>[]
    },
    level: {
      type: Number,
      default: 0
    },
    loadingItem:{
      type:Object,
      default:()=>({})
    },
    loadData: {
      type:Function
    }
  },
  data() {
    return {
      leftSelected: null
    };
  },
  mounted(){
  },
  computed: {
    //计算是否渲染right
    rightItems() {
      let currentSelected = this.selected[this.level]
      if (currentSelected && currentSelected.children)
        return currentSelected.children;
      else return null;
    },
  },
  methods:{
    rightArrowVisible(item){
      return this.loadData ? !item.isLeaf : item.children
    },
    //选中的节点
    onClickLabel(item){
      let copy = JSON.parse(JSON.stringify(this.selected))
      copy[this.level] = item
      copy.splice(this.level+1)
      this.$emit('update:selected',copy)
    },
    //更新节点
    onUpdateSelected(newSelected){
      this.$emit("update:selected",newSelected)
    }
  }
};
</script>
<style lang="scss" scoped>
@import "var";
.cascaderItem {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  height: 100px;
  .left {
    height: 100%;
    padding: 0.3em 0;
    overflow: auto;
  }
  .right {
    height: 100%;
    border-left: 1px solid $border-color-light;
  } 
  .label {
    padding: 0.5em 1em;
    display: flex;
    align-items: center;
    cursor: pointer;
    &:hover{
      background: $grey;
    }
    >.name{
      padding-right: .5em;
      user-select: none;
    }
    .icons {
      margin-left: auto;
      .loading{
        animation: spin 3s infinite linear;
      }
    }
  }
}
</style>
