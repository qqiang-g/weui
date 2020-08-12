<template>
  <div class="we-row" :class="rowClass" :style="rowStyle">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "Row",
  props: {
    gutter: {
      type: [Number, String]
    },
    align: {
      type: String,
      validator(value) {
        return ["left", "right", "center","between","around"].includes(value);
      }
    }
  },
  mounted() {
    this.$children.forEach(vm => {
      vm.gutter = this.gutter;
    });
  },
  computed: {
    rowStyle() {
      return {
        marginLeft: -this.gutter / 2 + "px",
        marginRight: -this.gutter / 2 + "px"
      };
    },
    rowClass() {
      let { align } = this;
      if(align === 'right'){
        return 'we-row-align-right'
      }
      if(align === 'center'){
        return 'we-row-align-center'
      }
      if(align === 'between'){
        return 'we-row-align-between'
      }
      if(align === 'around'){
        return 'we-row-align-around'
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.we-row {
  display: flex;
  flex-wrap: nowrap;
}
.we-row-align-right{
  justify-content:flex-end
}
.we-row-align-center{
  justify-content:center
}
.we-row-align-between{
  justify-content:space-between
}
.we-row-align-around{
  justify-content:space-around
}
</style>
