<template>
  <div class="tabs-body" :class="classes" v-if="active">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "WeTabsBody",
  inject: ["eventBus"],
  data() {
    return {
      active: false
    };
  },
  props: {
    name: {
      type: String,
      required: true
    }
  },
  created() {
    this.eventBus.$on("update:selected", name => {
      this.active = this.name === name;
    });
  },
  computed: {
    classes() {
      return {
        active: this.active
      };
    }
  }
};
</script>
<style lang="scss" scoped>
.tabs-body {
  &.active {
    background: #7fb5eb00;
  }
}
</style>
