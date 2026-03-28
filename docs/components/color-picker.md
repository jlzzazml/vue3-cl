# ColorPicker 颜色选择器

用于选择颜色。

<script setup>
import { ref } from 'vue'
import mColorPicker from '../../packages/colorPicker/index.vue'

const color1 = ref('#1890ff')
const color2 = ref('#52c41a')
</script>

## 基础用法

<div class="demo-preview">
<div>测试文字</div>
  <mColorPicker v-model="color1"></mColorPicker>
</div>

::: details 查看代码
```vue
<template>
  <mColorPicker v-model="color1"></mColorPicker>
</template>

<script setup>
import { ref } from 'vue'
const color1 = ref('#1890ff')
</script>
```
:::

## 带默认颜色

<div class="demo-preview">
  <mColorPicker v-model="color2" :defaultColor="'#52c41a'"></mColorPicker>
</div>

::: details 查看代码
```vue
<template>
  <mColorPicker v-model="color2" :defaultColor="'#52c41a'"></mColorPicker>
</template>
```
:::

## API

### ColorPicker Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| v-model | 绑定值 | `string` | `''` |
| defaultColor | 默认颜色 | `string` | `'#000000'` |
| customClass | 自定义类名 | `string` | `''` |
| autoClose | 选择后是否自动关闭 | `boolean` | `false` |
