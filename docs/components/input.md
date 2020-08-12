---
title: Input 输入框
---
# Input
通过鼠标或键盘输入字符
::: danger
Input 为受控组件，它总会显示 Vue 绑定值。
通常情况下，应当处理 input 事件，并更新组件的绑定值（或使用v-model）。否则，输入框内显示的值将不会改变。
不支持 v-model 修饰符。
:::
## 基础用法
<ClientOnly>
  <input-basics></input-basics>
</ClientOnly>

```vue
<el-input v-model="input" placeholder="请输入内容"></el-input>

<script>
export default {
  data() {
    return {
      input: ''
    }
  }
}
</script>
```
## 禁用状态
通过 `disabled` 属性指定是否禁用 input 组件
<ClientOnly>
  <input-disabled></input-disabled>
</ClientOnly>

```vue
<el-input placeholder="请输入内容" v-model="input" :disabled="true"> </el-input>

<script>
export default {
  data() {
    return {
      input: ''
    }
  }
}
</script>
```
## error

<ClientOnly>
  <input-error></input-error>
</ClientOnly>

```vue
<we-input v-model="input" error='用户名错误' placeholder="请输入内容"></we-input>
```
