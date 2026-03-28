# Tag标签

标签用于标记和分类内容等。

<script setup>
import {ref} from 'vue'
import ClTag from '../../packages/tag/index.vue'
import Attributes from '../../packages/tag/doc/Attributes.vue'

const tags = ref(['标签一', '标签二', '标签三'])
const handleClose = (tag) => {
  tags.value = tags.value.filter(t => t !== tag)
}
</script>

## 基础用法

基础的标签用法，通过 `type` 属性定义不同颜色。

<div class="demo-preview">
  <cl-tag>默认标签</cl-tag>
  <cl-tag type="primary">主要标签</cl-tag>
  <cl-tag type="success">成功标签</cl-tag>
  <cl-tag type="danger">危险标签</cl-tag>
  <cl-tag type="warning">警告标签</cl-tag>
  <cl-tag type="info">信息标签</cl-tag>
</div>

::: details 查看代码
```vue
<template>
  <cl-tag>默认标签</cl-tag>
  <cl-tag type="primary">主要标签</cl-tag>
  <cl-tag type="success">成功标签</cl-tag>
  <cl-tag type="danger">危险标签</cl-tag>
  <cl-tag type="warning">警告标签</cl-tag>
  <cl-tag type="info">信息标签</cl-tag>
</template>
```
:::

## 不同尺寸

提供三种尺寸：large、default、small。

<div class="demo-preview">
  <cl-tag size="large">大标签</cl-tag>
  <cl-tag size="default">默认标签</cl-tag>
  <cl-tag size="small">小标签</cl-tag>
</div>

::: details 查看代码
```vue
<template>
  <cl-tag size="large">大标签</cl-tag>
  <cl-tag size="default">默认标签</cl-tag>
  <cl-tag size="small">小标签</cl-tag>
</template>
```
:::

## 可关闭标签

设置 `closable` 属性可以关闭标签，通过 `@close` 事件处理关闭逻辑。

<div class="demo">
    <cl-tag 
      v-for="tag in tags" 
      :key="tag"
      closable 
      @close="handleClose(tag)"
    >
      {{ tag }}
    </cl-tag>
</div>

::: details 查看代码
```vue
<template>
  <div class="demo">
    <cl-tag 
      v-for="tag in tags" 
      :key="tag"
      closable 
      @close="handleClose(tag)"
    >
      {{ tag }}
    </cl-tag>
  </div>
</template>

<script setup>
const tags = ref(['标签一', '标签二', '标签三'])
const handleClose = (tag) => {
  tags.value = tags.value.filter(t => t !== tag)
}
</script>

<style scoped>
.demo {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}
</style>
```
:::

## Attributes 参数

<Attributes />

<style scoped>
.demo {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}
</style>