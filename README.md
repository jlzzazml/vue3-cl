# vue3-cl

一套基于 Vue 3 + JavaScript 的UI 组件库。

## 特性

- **Vue 3 原生支持**：基于 Vue 3.2+ 和 Composition API 开发
- **按需引入**：支持按需加载，减少打包体积
- **主题定制**：支持 CSS 变量主题定制
- **丰富的组件**：包含 30+ 常用组件

## 安装

```bash
npm install vue3-cl
```

## 快速开始

### 全局引入

```Javascript
import { createApp } from 'vue'
import App from './App.vue'
import cl_Ui from 'vue3-cl'
import 'yuan-ui-vue3/dist/style.css'

const app = createApp(App)
app.use(cl_Ui)
app.mount('#app')
```

### 按需引入

```typescript
import { mButton, mInput } from 'vue3-cl'
import 'vue3-cl/dist/style.css'

app.component('mButton', mButton)
app.component('mInput', mInput)
```

## 组件列表

### 基础组件

| 组件 | 说明 |
|------|------|
| [Button 按钮](/components/button) | 触发操作 |
| [Tag 标签](/components/tag) | 标签 |

### 布局组件

| 组件 | 说明 |
|------|------|
| [Layout 布局](/components/layout) | 栅格布局 |

### 表单组件

| 组件 | 说明 |
|------|------|
| [Input 输入框](/components/input) | 文本输入 |
| [Select 选择器](/components/select) | 下拉选择 |
| [Checkbox 多选框](/components/checkbox) | 多选 |
| [Radio 单选框](/components/radio) | 单选 |

### 数据展示

| 组件 | 说明 |
|------|------|
| [Table 表格](/components/table) | 数据表格 |


## 开发

### 环境要求

- Node.js 16+
- npm 7+

### 启动开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 启动文档
npm run docs:dev

# 构建组件库
npm run build
```

## 项目结构

```
vue3-cl/
├── docs/                 # 文档
│   └── components/       # 组件文档
├── packages/             # 组件源码
│   ├── button/           # 按钮组件
│   ├── input/            # 输入框组件
│   ├── ...
│   └── index.js          # 入口文件
├── dist/                 # 构建输出
└── package.json
```
