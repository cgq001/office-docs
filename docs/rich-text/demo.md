---
title: Demo 演示
outline: deep
---

# Demo 演示

在线演示是独立页面，不嵌在常规文档正文容器里。

## 进入演示

- 演示地址：[富文本 在线演示](/rich-text/playground)
- 适合直接发给外部用户预览
- 页面会全宽展示编辑器，体验比文档内嵌方式更合适

## 演示页包含的能力

- 真实挂载 `@norio-office/rich-text`
- 可直接编辑文档内容
- 支持图片、视频、文件、本地文件卡片等内容块
- 支持表格、公式、高亮块、倒计时、Markdown 导入等插入项
- 支持只读预览模式、大纲、演示模式和全屏
- 支持导出 HTML、PDF、图片和打印
- 支持通过上传 hook 回填图片、视频和文件 URL

## 典型接入片段

```vue
<script setup lang="ts">
import { ref } from 'vue'
import type { JSONContent } from '@tiptap/core'
import { RichTextEditor } from '@norio-office/rich-text'
import '@norio-office/rich-text/style.css'

const content = ref<JSONContent | null>(null)
</script>

<template>
  <RichTextEditor
    v-model="content"
    document-name="demo"
    placeholder="请输入内容"
  />
</template>
```

## 为什么单独拆页面

VitePress 的常规文档页会受到左侧边栏、右侧目录和正文宽度限制，不适合拿来做重交互的编辑器演示。独立路由更适合：

- 展示完整编辑器宽度
- 直接对外分享
- 后续继续扩展更多交互控件

## 文档页保留什么

这个页面保留为演示说明页，主要放：

- 演示入口
- 场景说明
- 接入代码片段
- 版本说明和已知限制
