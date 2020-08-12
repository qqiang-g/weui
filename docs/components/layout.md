---
title: Layout 容器布局
sidebarDepth: 2
---
# Layout 布局容器
用于布局的容器组件，方便快速搭建页面的基本结构：

`<we-layout>`：外层容器。当子元素中包含 `<we-header>` 或 `<we-footer>` 时，全部子元素会垂直上下排列，否则会水平左右排列。

`<we-header>`：顶栏容器。

`<we-sider>`：侧边栏容器。

`<we-content>`：主要区域容器。

`<we-footer>`：底栏容器。
<ClientOnly>
  <layout/>
</ClientOnly>
```vue
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
```