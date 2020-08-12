<template>
  <div class="box-dome">
    <we-tabs :selected="selected" >
      <we-tabs-head>
        <we-tabs-item name="1">用户管理</we-tabs-item>
        <we-tabs-item name="2">角色管理</we-tabs-item>
        <we-tabs-item name="3">配置管理</we-tabs-item>
      </we-tabs-head>
      <we-tabs-body>
        <we-tabs-pane name="1">用户管理</we-tabs-pane>
        <we-tabs-pane name="2">角色管理</we-tabs-pane>
        <we-tabs-pane name="3">配置管理</we-tabs-pane>
      </we-tabs-body>
    </we-tabs>
  </div>
</template>
<script>
import Tabs from '../../../src/tabs/Tabs.vue'
import TabsBody from '../../../src/tabs/Tabs-Body.vue'
import TabsHead from '../../../src/tabs/Tabs-Head.vue'
import TabsItem from '../../../src/tabs/Tabs-Item.vue'
import TabsPane from '../../../src/tabs/Tabs-Pane.vue'
import Button from '../../../src/button/Button'
export default {
  name:'grid-basics',
  components:{
    'we-tabs':Tabs,
    'we-tabs-body':TabsBody,
    'we-tabs-head':TabsHead,
    'we-tabs-item':TabsItem,
    'we-tabs-pane':TabsPane,
    'we-button':Button
  },
  data(){
    return{
      selected: '1'
    }
  }
}
</script>
<style>
.box-dome{
  border: 1PX solid #ebebeb;
  padding: 1em;
  border-radius: 3px;
  transition: .2s;
  margin: 10px 0 10px 0;
}
.box-dome:hover{
  box-shadow: 0 0 8px 0 rgba(232,237,250,.6), 0 2px 4px 0 rgba(232,237,250,.5);
}
</style>
<style scoped>

</style>