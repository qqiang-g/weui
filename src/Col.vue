<template>
  <div class="col" :class="colCless" :style="colStyle">
    <slot></slot>
  </div>
</template>
<script>
let validator = value => {
  let keys = Object.keys(value);
  let valid = true;
  keys.forEach(key => {
    if (!["span", "offset"].includes(key)) {
      valid = false;
    }
  });
  return valid;
};
export default {
  name: "Col",
  props: {
    span: { type: [Number, String], default: 12 },
    offset: { type: [Number, String] },
    phone: { type: Object, validator },
    ipad: { type: Object, validator },
    narrowPc: { type: Object, validator },
    pc: { type: Object, validator },
    widePc: { type: Object, validator }
  },
  data() {
    return {
      gutter: 0
    };
  },
  methods: {
    getClass(obj = {}, str = "") {
      /*   */
      let array = [];
      if (obj.span) {
        array.push(`col-${str}${obj.span}`);
      }
      if (obj.offset) {
        array.push(`offset-${str}${obj.span}`);
      }
      return array;
    }
  },
  computed: {
    colCless() {
      let { span, offset, ipad, narrowPc, pc, widePc } = this;
      let getClass = this.getClass;
      return [
        ...getClass({ span, offset }),
        ...getClass(ipad, "ipad-"),
        ...getClass(narrowPc, "narrow-pc-"),
        ...getClass(pc, "pc-"),
        ...getClass(widePc, "wide-pc-")
      ];
    },
    colStyle() {
      return {
        paddingLeft: this.gutter / 2 + "px",
        paddingRight: this.gutter / 2 + "px"
      };
    }
  }
};
</script>
<style lang="scss" scoped>
.col {
  height: 60px;
  $class: col-;
  @for $n from 1 through 24 {
    &.#{$class}#{$n} {
      width: ($n/24) * 100%;
    }
  }
  $class: offset-;
  @for $n from 1 through 24 {
    &.#{$class}#{$n} {
      margin-left: ($n/24) * 100%;
    }
  }
  // //手机默认
  // @media (max-width: 576px) {
  //     $class: col-phone-;
  //     @for $n from 1 through 24 {
  //         &.#{$class}#{$n}{
  //             width: ($n / 24) * 100%;
  //         }
  //     }
  //     $class: offset-phone-;
  //     @for $n from 1 through 24 {
  //         &.#{$class}#{$n}{
  //             margin-right: ($n / 24) * 100%;
  //         }
  //     }
  // }
  //平板
  @media (min-width: 577px) {
    $class: col-ipad-;
    @for $n from 1 through 24 {
      &.#{$class}#{$n} {
        width: ($n / 24) * 100%;
      }
    }
    $class: offset-ipad-;
    @for $n from 1 through 24 {
      &.#{$class}#{$n} {
        margin-right: ($n / 24) * 100%;
      }
    }
  }
  //窄pc
  @media (min-width: 769px) {
    $class: col-narrow-pc-;
    @for $n from 1 through 24 {
      &.#{$class}#{$n} {
        width: ($n / 24) * 100%;
      }
    }
    $class: offset-narrow-pc-;
    @for $n from 1 through 24 {
      &.#{$class}#{$n} {
        margin-right: ($n / 24) * 100%;
      }
    }
  }
  //普通pc
  @media (min-width: 993px) {
    $class: col-pc-;
    @for $n from 1 through 24 {
      &.#{$class}#{$n} {
        width: ($n / 24) * 100%;
      }
    }
    $class: offset-pc-;
    @for $n from 1 through 24 {
      &.#{$class}#{$n} {
        margin-right: ($n / 24) * 100%;
      }
    }
  }
  //宽pc
  @media (min-width: 1201px) {
    $class: col-wide-pc-;
    @for $n from 1 through 24 {
      &.#{$class}#{$n} {
        width: ($n / 24) * 100%;
      }
    }
    $class: offset-wide-pc-;
    @for $n from 1 through 24 {
      &.#{$class}#{$n} {
        margin-right: ($n / 24) * 100%;
      }
    }
  }
}
</style>
