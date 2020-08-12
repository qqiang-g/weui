<template>
  <div class="tabs-head">
    <slot></slot>
    <div class="line" ref="line"></div>
    <div class="actions">
      <slot name="actions"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "WeTabsHead",
  inject: ["eventBus"],
  mounted() {
    this.eventBus.$on("update:selected", (item, vm) => {
      const { left:pl } = this.$el.getBoundingClientRect()
      const { width, left } = vm.$el.getBoundingClientRect();
      this.$refs.line.style.width = width + "px";
      this.$refs.line.style.transform = `translateX(${left-pl}px)`;
    });
  }
};
</script>
<style lang="scss" scoped>
@import '../var';
.tabs-head {
  display: flex;
  height: $tabs-height;
  justify-content: flex-start;
  position: relative;
  border-bottom: 1px solid $border-color;
  > .line {
    position: absolute;
    bottom: 0;
    border-bottom: 1px solid $blue;
    transition: all 350ms;
  }
  > .actions {
    margin-left: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 1em;
  }
}
</style>
