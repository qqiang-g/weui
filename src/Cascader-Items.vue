<template>
  <div class="cascaderItem" :style="{ height: height }">
    
    <div class="left">
      <div
        class="label"
        v-for="(item,index) in items"
        @click="onClickLabel(item)"
        :key="index"
      >
        {{ item.name }}
        <Icon class="icon" v-if="item.children" name="right"></Icon>
      </div>
    </div>
    <div class="right" v-if="rightItems">
      <CsacaderItems 
        :selected="selected" 
        :items="rightItems" 
        :height="height" 
        :level="level+1"
        @update:selected="onUpdateSelected"
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
    }
  },
  methods:{
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
    padding: 0.3em 1em;
    display: flex;
    align-items: center;
    .icon {
      margin-left: 0.3rem;
    }
  }
}
</style>
