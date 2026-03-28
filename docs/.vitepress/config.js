import { resolve } from 'path';
import { defineConfig } from 'vitepress';

export default defineConfig({
  title: 'vue3-cl',
  description: 'A Vue 3 + TypeScript Enterprise UI Component Library',
  lang: 'zh-CN',
  base: '/',
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '组件', link: '/components/button' },
    ],
    sidebar: {
      '/components/': [
        {
          text: '基础组件',
          items: [
            { text: 'Button 按钮', link: '/components/button' },
            { text: 'Tag标签', link: '/components/tag' },
            { text: 'Icon 图标', link: '/components/icon' },
            { text: 'Space 间距', link: '/components/space' }
          ]
        },
        {
          text: '布局组件',
          items: [
            { text: 'Layout 布局', link: '/components/layout' }
          ]
        },
        {
          text: '表单组件',
          items: [
            { text: 'Input 输入框', link: '/components/input' },
            { text: 'Select 选择器', link: '/components/select' },
            { text: 'Checkbox 多选框', link: '/components/checkbox' },
            { text: 'Radio 单选框', link: '/components/radio' },
            { text: 'Switch 开关', link: '/components/switch' },
            { text: 'DatePicker 日期选择器', link: '/components/date-picker' },
            { text: 'ColorPicker 颜色选择器', link: '/components/color-picker' }
          ]
        },
        {
          text: '导航组件',
          items: [
            { text: 'DropDown 下拉菜单', link: '/components/dropdown' },
            { text: 'Tabs 标签页', link: '/components/tabs' }
          ]
        },
        {
          text: '数据展示',
          items: [
            { text: 'Table 表格', link: '/components/table' }
          ]
        },
        {
          text: '反馈组件',
          items: [
            { text: 'Modal 对话框', link: '/components/modal' },
            { text: 'Message 消息提示', link: '/components/message' },
            { text: 'Loading 加载', link: '/components/loading' }
          ]
        }
      ],
    },
    outline: 'deep'
  },
  vite: {
    resolve: {
      alias: {
        '@': resolve(__dirname, '../packages'),
        'yuan-ui': resolve(__dirname, '../dist/yuan-ui.es.js'),
        'yuan-ui/': resolve(__dirname, '../packages/'),
        'yuan-ui-vue3': resolve(__dirname, '../dist/yuan-ui.es.js'),
        '@yuan-ui/dist': resolve(__dirname, '../dist/yuan-ui.es.js'),
        '@yuan-ui/style': resolve(__dirname, '../dist/index.css')
      }
    },
    optimizeDeps: {
      include: ['vue', '@vueuse/core']
    }
  }
});
