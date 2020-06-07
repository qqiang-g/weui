<template>
  <div id="app">
    <we-button>你好</we-button>
    <we-cascader @update:selected='selected =$event' :selected='selected' :source="source" popover-height="300px"></we-cascader>
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
  },
  data() {
    return {
      source: [
        {
          name: "浙江",
          children: [
            {
              name: "杭州",
              children: [
                { name: "上城区" },
                { name: "下城区" },
                { name: "江干区" }
              ]
            },
            { name: "嘉兴" },
            { name: "湖州" }
          ]
        },
        {
          name: "福建",
          children: [
            { name: "福州" },
            { name: "厦门" },
            { name: "三明" },
            { name: "泉州" }
          ]
        },
        {
          name: "河南",
          children: [
            { name: "郑州", children: [{ name: "金水" }, { nane: "二七" }] },
            { name: "洛阳" }
          ]
        }
      ],
      selected:[]
    };
  }
};
</script>

<style lang="scss"></style>
