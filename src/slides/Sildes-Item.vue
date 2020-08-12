<template>
  <div class="slides-item-window">
    <template v-if="animationEnabled">
      <transition name="slide">
        <div class="g-slides-item" v-if="visible" :class="{reverse}">
          <slot></slot>
        </div>
      </transition>
    </template>
    <template v-else>
      <div class="g-slides-item" v-if="visible" :class="{reverse}">
        <slot></slot>
      </div>
    </template>
  </div>
</template>

<script>
  export default {
    name: 'GuluSlidesItem',
    props: {
      name: {
        type: String,
        required: true
      }
    },
    data () {
      return {
        selected: undefined,
        reverse: false,
        animationEnabled: false
      }
    },
    updated () {
      this.animationEnabled = true
    },
    computed: {
      visible () {
        console.log('5555')
        return this.selected === this.name
      }
    }
  }
</script>

<style lang="scss" scoped>
  .slides-item-window{
    width: 100%;
    height: 100%;
  }
  .g-slides-item {
    width: 100%;
    height: 100%;
  }
  .slide-leave-active {
    position: absolute;
    left: 0; top: 0;
    width: 100%;
    height: 100%;
  }
  .slide-enter-active, .slide-leave-active {
    transition: all 0.5s;
  }
  .slide-enter {
    transform: translateX(100%);
  }
  .slide-enter.reverse {
    transform: translateX(-100%);
  }
  .slide-leave-to {
    transform: translateX(-100%);
  }
  .slide-leave-to.reverse {
    transform: translateX(100%);
  }
</style>