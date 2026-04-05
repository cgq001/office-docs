---
title: 快速开始
outline: deep
---

# 快速开始

## 安装

```bash
npm install @ap666/office-word
```

## 最小接入

```vue
<script setup lang="ts">
import { ref } from 'vue'
import type { JSONContent } from '@tiptap/core'
import { RichTextEditor } from '@ap666/office-word'

const content = ref<JSONContent | null>(null)
</script>

<template>
  <RichTextEditor v-model="content" />
</template>
```

说明：

- 组件入口已经自动引入样式，默认接入不需要额外手动导入 CSS
- `v-model` 绑定的是 `Tiptap JSONContent`

## 基础接入示例

```vue
<script setup lang="ts">
import { ref } from 'vue'
import type { JSONContent } from '@tiptap/core'
import { RichTextEditor } from '@ap666/office-word'

const content = ref<JSONContent | null>({
  type: 'doc',
  content: [
    {
      type: 'paragraph',
      content: [{ type: 'text', text: '欢迎使用 Office Word 编辑器' }],
    },
  ],
})

function handleChange(value: JSONContent) {
  console.log('editor changed:', value)
}
</script>

<template>
  <RichTextEditor
    v-model="content"
    placeholder="请输入内容"
    @change="handleChange"
  />
</template>
```

## 推荐接入方式

### 内容保存

推荐优先保存 `JSONContent`：

- 与编辑器内部结构一致
- 后续恢复最稳定
- 适合再次进入编辑态

### 内容展示

如果目标是只读展示，可以根据业务场景选择：

- 保存 JSON 后重新加载到编辑器只读模式
- 调用 `exportHtml()` 生成 HTML 做只读展示
- 调用 `exportPdf()` 或 `exportImage()` 做归档和分享

### 上传策略

推荐把上传逻辑完全放在业务层：

- 编辑器不直接管理上传接口
- 业务层负责鉴权、签名、压缩、秒传、断点续传
- 编辑器只负责消费最终 URL 和元数据

## 常见接入建议

### 为什么推荐使用 `ref` 调实例方法

因为导出、插入图片、插入视频、插入文件这类动作本质上都是命令式调用，不适合全部塞进声明式 Props。

### 为什么上传不直接做进组件里

因为每个业务系统的上传接口、鉴权方式、存储平台、返回结构都不同，交给业务侧最稳。

### 为什么打印和导出都只处理内容区

因为工具栏、大纲、状态栏属于编辑器壳层，不属于文档内容本身。
