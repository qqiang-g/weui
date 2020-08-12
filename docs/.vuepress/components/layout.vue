<template>
  <div class="box-dome">
    <we-layout>
      <we-header>Header</we-header>
      <we-content>Content</we-content>
    </we-layout>
    <we-layout>
      <we-header>Header</we-header>
      <we-content>Content</we-content>
      <we-footer>Footer</we-footer>
    </we-layout>
    <we-layout>
      <we-sider>Sider</we-sider>
      <we-content>Content</we-content>
    </we-layout>
    <we-layout>
      <we-header>Header</we-header>
      <we-layout>
        <we-sider>Sider</we-sider>
        <we-content>Content</we-content>
      </we-layout>
    </we-layout>

    <we-layout>
      <we-header>Header</we-header>
      <we-layout>
        <we-sider>Sider</we-sider>
        <we-layout>
          <we-content>Content</we-content>
          <we-footer>Footer</we-footer>
        </we-layout>
      </we-layout>
    </we-layout>
    <we-layout>
      <we-sider>Sider</we-sider>
      <we-layout>
        <we-header>Header</we-header>
        <we-content>Content</we-content>
      </we-layout>
    </we-layout>
    <we-layout>
      <we-sider>Sider</we-sider>
      <we-layout>
        <we-header>Header</we-header>
        <we-content>Content</we-content>
        <we-footer>Footer</we-footer>
      </we-layout>
    </we-layout>
  </div>
</template>
<script>
import Layout from '../../../src/layout/Layout.vue'
import Header from '../../../src/layout/Header'
import Content from '../../../src/layout/Content'
import Footer from '../../../src/layout/Footer'
import Sider from '../../../src/layout/Sider'
export default {
  components:{
    'we-layout':Layout,
    'we-header':Header,
    'we-content':Content,
    'we-footer':Footer,
    'we-sider':Sider,
  }
}
</script>
<style scoped>
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
.bg-purple-dark {
    background: #99a9bf;
}
.bg-purple {
    background: #d3dce6;
}
.bg-purple-light {
    background: #e5e9f2;
}

.we-header, .we-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  .we-sider {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .we-content {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  
  body > .we-layout {
    margin-bottom: 40px;
  }
  .box-dome>.we-layout{
    border-bottom: 5px dotted #df877b;
    margin-bottom: 10px;
  }
</style>