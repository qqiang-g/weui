<template>
  <div id="app">
    <we-button>你好</we-button>
    <we-cascader cou></we-cascader>
  </div>
</template>

<script>
/* eslint-disable vue/no-unused-components */

import Button from "./Button";
import Cascader from "./Cascader";
export default {
  name: "App",
  components: {
    "we-button": Button,
    "we-cascader": Cascader
  }
};
</script>

<style lang="scss"></style>
