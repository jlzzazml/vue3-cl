<script setup>
import demo1 from './demo1.vue'
import demo2 from './demo2.vue'
import demo3 from './demo3.vue'
import demo4 from './demo4.vue'
import demo5 from './demo5.vue'
import demo6 from './demo6.vue'
// import Attributes from './Attributes.vue'
import Preview from '@/components/Preview.vue'
</script>

# Tag 标签

用于标记和分类内容。

## 基础用法

基础的标签用法，通过 `type` 属性定义不同颜色。

<demo1 />

<Preview comp-name="tag" demo-name="demo1" />

## 不同尺寸

提供三种尺寸：large、default、small。

<demo2 />

<Preview comp-name="tag" demo-name="demo2" />

## 可关闭标签

设置 `closable` 属性可以关闭标签，通过 `@close` 事件处理关闭逻辑。

<demo3 />

<Preview comp-name="tag" demo-name="demo3" />

## API

### Tag Props

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|------|------|--------|--------|
| type | 标签类型 | string | default/primary/success/danger/warning/info | default |
| size | 标签尺寸 | string | large/default/small | default |
| closable | 是否可关闭 | boolean | — | false |
| disabled | 是否禁用 | boolean | — | false |
| color | 自定义颜色 | string | — | — |
| round | 是否圆角 | boolean | — | false |

### Tag Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| click | 点击标签时触发 | event |
| close | 点击关闭按钮时触发 | event |