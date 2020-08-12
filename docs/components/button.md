---
title: Button 按钮
sidebarDepth: 2
---
# 组件 button
提供单个按钮和组合形式的按钮，按钮支持添加图标，设置图标位置等功能。
## 单个组件
使用方法
<ClientOnly>
  <button-one/>
</ClientOnly>

``` vue
<we-button>默认按钮</we-button>
<we-button icon='setting'>设置</we-button>
<we-button icon="download">下载</we-button>
<we-button :loading="loading"  @click="isLoading">登录</we-button>
<we-button disabled>禁止点击</we-button>
```

## 组合组件
使用方法
<clientOnly>
<button-group></button-group>
</ClientOnly>

``` vue
<we-button-group>
  <we-button icon="left">上一页</we-button>
  <we-button icon="right" iconPosition="right">下一页</we-button>
</we-button-group>
```
