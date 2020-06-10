<template>
  <button
    class="we-button"
    :class="{ [`icon-${iconPosition}`]: true }"
    @click="$emit('click')"
  >
    <we-icon
      class="icon"
      :class="loading ? 'loading' : ''"
      v-if="icon || loading"
      :name="loading ? 'loading' : icon"
    ></we-icon>
    <div class="content">
      <slot></slot>
    </div>
  </button>
</template>
<script>
import Icon from "./Icon.vue";
export default {
  components: {
    "we-icon": Icon
  },
  props: {
    icon: {},
    iconPosition: {
      type: String,
      default: "left",
      validator(value) {
        return !(value !== "left" && value !== "right");
      }
    },
    loading: {
      type: Boolean
    }
  }
};
</script>
<style lang="scss" scoped>
@import "var";
.we-button {
  font-size: $font-size;
  height: $button-height;
  padding: 0 1em;
  border-radius: $border-radius;
  border: 1px solid $border-color;
  background: $button-bg;
  display: inline-flex;
  vertical-align: middle;
  justify-content: center;
  align-items: center;
  &:hover {
    border-color: $border-color-hover;
  }
  &:active {
    background-color: $button-active-bg;
  }
  &:focus {
    outline: none;
  }
  > .content {
    order: 2;
  }
  > .icon {
    order: 1;
    margin-right: 0.3em;
  }
  &.icon-right {
    > .content {
      order: 1;
    }
    > .icon {
      order: 2;
      margin-right: 0;
      margin-left: 0.3em;
    }
  }
  .loading {
    animation: spin 3s infinite linear;
  }
}
</style>
