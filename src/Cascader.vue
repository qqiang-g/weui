<template>
  <div class="cascader">
    <div class="trigger" @click="popovserVisible = !popovserVisible">
      <slot></slot>
      {{ popoverHeight }}
    </div>
    <div class="popover-wrapper" v-if="popovserVisible">
      <CascaderItems class="popover" :height="popoverHeight" :items="source" />
    </div>
  </div>
</template>
<script>
import CascaderItems from "./Cascader-Items";
export default {
  name: "Cascader",
  components: {
    CascaderItems: CascaderItems
  },
  props: {
    source: {
      type: Array
    },
    popoverHeight: {
      type: String
    }
  },
  data() {
    return {
      popovserVisible: false
    };
  }
};
</script>
<style scoped lang="scss">
@import "var";
.cascader {
  position: relative;
  .trigger {
    height: 32px;
    width: 100px;
    border: 1px solid #333;
  }
  .popover-wrapper {
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
