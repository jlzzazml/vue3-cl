import Vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import { defineConfig } from "vite";
import Markdown from "vite-plugin-md";

export default defineConfig({
  plugins: [
    Vue({
      include: [/\.vue$/, /\.md$/],
    }),
    Markdown(),
    // 移除 Dts 插件（TypeScript 类型生成）
  ],

  build: {
    rollupOptions: {
      external: ["vue", "highlight.js", "sass"],
      output: {
        globals: {
          vue: "Vue",
        },
        exports: "named",
        extend: true,
      },
    },
    lib: {
      entry: "./packages/index.js",
      name: "yuan-ui",
      formats: ["es", "umd"],
      fileName: (format) => `yuan-ui.${format}.js`,
    },
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    cssCodeSplit: false, // 不分割 CSS，确保所有样式合并
  },

  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
      "yuan-ui": resolve(__dirname, "packages/index.js"),
    },
    // 添加文件扩展名解析顺序
    extensions: ['.js', '.vue', '.json', '.md']
  },

  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@use "./src/styles/variables.scss" as *;',
      },
    },
  },

  // 添加服务器配置
  server: {
    port: 3002,
    open: true,
    fs: {
      allow: ['..']
    }
  },

  // 优化依赖预构建
  optimizeDeps: {
    include: ['vue', 'highlight.js']
  }
});