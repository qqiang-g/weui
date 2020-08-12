---
title: Grid 网格
sidebarDepth: 2
---
# Grid
通过基础的 24 分栏，迅速简便地创建布局。默认支持响应式布局。
## 基本布局
使用单一分栏创建基础的栅格布局。
通过 row 和 col 组件，并通过 col 组件的 `span` 属性我们就可以自由地组合布局。
<ClientOnly>
  <grid-basics/>
</ClientOnly>
```vue
<we-row>
  <we-col :span="24" class="bg-purple-dark"></we-col>
</we-row>
<we-row>
  <we-col :span="12" class="bg-purple"></we-col>
  <we-col :span="12" class="bg-purple-light"></we-col>
</we-row>
<we-row>
  <we-col :span="8" class="bg-purple"></we-col>
  <we-col :span="8" class="bg-purple-light"></we-col>
  <we-col :span="8" class="bg-purple"></we-col>
</we-row>
<we-row>
  <we-col :span="6" class="bg-purple"></we-col>
  <we-col :span="6" class="bg-purple-light"></we-col>
  <we-col :span="6" class="bg-purple"></we-col>
  <we-col :span="6" class="bg-purple-light"></we-col>
</we-row>
<we-row>
  <we-col :span="4" class="bg-purple"></we-col>
  <we-col :span="4" class="bg-purple-light"></we-col>
  <we-col :span="4" class="bg-purple"></we-col>
  <we-col :span="4" class="bg-purple-light"></we-col>
  <we-col :span="4" class="bg-purple"></we-col>
  <we-col :span="4" class="bg-purple-light"></we-col>
</we-row>
```

## 分栏间隔
分栏之间存在间隔。

<ClientOnly>
  <grid-gutter/>
</ClientOnly>

```vue
<we-row gutter="20">
  <we-col :span="8" class="bg-purple"></we-col>
  <we-col :span="8" class="bg-purple-light"></we-col>
  <we-col :span="8" class="bg-purple"></we-col>
</we-row>
<we-row gutter="10">
  <we-col :span="6" class="bg-purple"></we-col>
  <we-col :span="6" class="bg-purple-light"></we-col>
  <we-col :span="6" class="bg-purple"></we-col>
  <we-col :span="6" class="bg-purple-light"></we-col>
</we-row>
```
## 混合布局
通过基础的 1/24 分栏任意扩展组合形成较为复杂的混合布局。

<ClientOnly>
  <grid-blend/>
</ClientOnly>

## 对齐方式
通过`align`属性控制内容的定位。

<ClientOnly>
  <grid-align/>
</ClientOnly>

```vue
<we-row align="left" gutter="5">
  <we-col :span="6" class="bg-purple"></we-col></we-col>
  <we-col :span="6" class="bg-purple-light"></we-col>
  <we-col :span="6" class="bg-purple"></we-col>
</we-row>
<we-row align="right" gutter="5">
  <we-col :span="6" class="bg-purple"></we-col></we-col>
  <we-col :span="6" class="bg-purple-light"></we-col>
  <we-col :span="6" class="bg-purple"></we-col>
</we-row>
<we-row align="center" gutter="5">
  <we-col :span="6" class="bg-purple"></we-col></we-col>
  <we-col :span="6" class="bg-purple-light"></we-col>
  <we-col :span="6" class="bg-purple"></we-col>
</we-row>
<we-row align="between" gutter="5">
  <we-col :span="6" class="bg-purple"></we-col></we-col>
  <we-col :span="6" class="bg-purple-light"></we-col>
  <we-col :span="6" class="bg-purple"></we-col>
</we-row>
<we-row align="around" gutter="5">
  <we-col :span="6" class="bg-purple"></we-col></we-col>
  <we-col :span="6" class="bg-purple-light"></we-col>
  <we-col :span="6" class="bg-purple"></we-col>
</we-row>
```
## 分栏偏移
支持偏移指定的栏数。

<ClientOnly>
  <grid-offset/>
</ClientOnly>

```vue
<we-row gutter="5">
  <we-col :span="6" class="bg-purple"></we-col></we-col>
  <we-col :span="6" :offset="6" class="bg-purple-light"></we-col>
</we-row>
<we-row gutter="5">
  <we-col :span="6" :offset="6"  class="bg-purple"></we-col></we-col>
  <we-col :span="6" :offset="6" class="bg-purple-light"></we-col>
</we-row>
<we-row gutter="5">
  <we-col :span="12" :offset="6"  class="bg-purple"></we-col></we-col>
</we-row>
```