---
layout: home

title: Vue Amazing UI
titleTemplate: Amazing UI Components Library

hero:
  name: Vue Amazing UI
  text: Amazing UI 组件库
  tagline: 基于 Vue3 + TS + Vite 开发
  image:
    src: /logo-with-shadow.png
    alt: Vue Amazing UI
  actions:
    - theme: brand
      text: Get Started
      link: /guide/features
    - theme: alt
      text: View on GitHub
      link: https://github.com/themusecatcher/vue-amazing-ui
    - theme: alt
      text: View on NPM
      link: https://www.npmjs.com/package/vue-amazing-ui
features:
  - icon: 🛠️
    title: 开发依赖
    details: 组件库采用 Vue3@3.3.4 + TypeScript@4.7.4 + Vite4.4.7 + Less@4.1.3 实现
  - icon: ⚡️
    title: border-box
    details: '所有组件 CSS 样式均使用 box-sizing: border-box; 模式'
  - icon: 🚀
    title: 开箱即用
    details: 目前共有 46 个常用基础 UI 组件，以及 10 个常用工具函数
---

<script setup lang="ts">
import { onMounted } from 'vue'
import { fetchVersion } from './.vitepress/utils/fetchVersion'

onMounted(() => {
  fetchVersion()
})
</script>
