<script setup>
import demo1 from './demo1.vue'
import demo2 from './demo2.vue'
import demo3 from './demo3.vue'
import Attributes from './Attributes.vue'
import Preview from '@/components/Preview.vue'
</script>

# Tag 标签

用于标记和分类内容。

## 基础用法

基础的标签用法，通过 `type` 属性定义不同颜色。

<br/>
<div class="componetnsBox">
  <demo1/>
</div>

<Preview comp-name="tag" demo-name="demo1" />

## 不同尺寸

提供三种尺寸：large、default、small。

<br/>
<div class="componetnsBox">
  <demo2/>
</div>

<Preview comp-name="tag" demo-name="demo2" />

## 可关闭标签

设置 `closable` 属性可以关闭标签，通过 `@close` 事件处理关闭逻辑。

<br/>
<div class="componetnsBox">
  <demo3/>
</div>

<Preview comp-name="tag" demo-name="demo3" />

## Attributes 参数

<Attributes />
<br/>