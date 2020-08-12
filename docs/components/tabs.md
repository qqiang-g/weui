---
title: Tabs 标签
---
# Tabs 标签页
分隔内容上有关联但属于不同类别的数据集合。

## 基础用法
基础的、简洁的标签页。
<ClientOnly>
  <tabs/>
</ClientOnly>

```vue
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

<script>
  export default {
    data(){
      return{
        selected: '1'
      }
    }
  }
</script>

```
