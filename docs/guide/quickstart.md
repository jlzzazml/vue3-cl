# 快速上手

## 安装

```bash
npm install vue3-cl
```

## 完整引入

如果你不需要按需引入，可以直接引入整个组件库：

```ts
import { createApp } from 'vue';
import clUI from 'vue3-cl';
import 'vue3-cl/styles/index.css';
import App from './App.vue';

const app = createApp(App);

app.use(clUI);
app.mount('#app');
```



## 浏览器支持

支持所有现代浏览器和 IE11+。

| Chrome | Firefox | Safari | Edge | IE11 |
| :----: | :----: | :----: | :----: | :----: |
| ✅ | ✅ | ✅ | ✅ | ✅ |
