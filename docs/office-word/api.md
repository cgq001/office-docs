---
title: API
outline: deep
---

# API

## 组件 Props

### `modelValue`

- 类型：`JSONContent | null`
- 说明：编辑器内容，使用 `v-model` 双向绑定

### `editable`

- 类型：`boolean`
- 默认值：`true`
- 说明：是否允许编辑

### `placeholder`

- 类型：`string`
- 默认值：`''`
- 说明：空内容时的占位文案

### `collaboration`

- 类型：`RichTextEditorCollaborationOptions | null`
- 默认值：`null`
- 说明：启用可选的 Yjs 协同编辑模式

```ts
type RichTextEditorCollaborationOptions = {
  document: {
    getXmlFragment: (field: string) => unknown
  }
  field?: string
  provider?: {
    awareness: {
      states: Map<number, unknown>
      on: (event: 'update', callback: (...args: unknown[]) => void) => void
      setLocalStateField: (field: string, value: unknown) => void
    }
  } | null
  user?: {
    name: string
    color: string
    [key: string]: unknown
  } | null
}
```

## 事件

### `update:modelValue`

- 参数：`JSONContent`
- 说明：内容变化时触发，通常由 `v-model` 自动接收

### `change`

- 参数：`JSONContent`
- 说明：内容变更时额外抛出的事件，适合业务侧做保存、联动、审计等逻辑

补充说明：

- 单人模式下，`modelValue` 是正常双向数据源
- 协同模式下，Yjs fragment 才是唯一真实数据源
- 协同模式仍然会持续抛出 JSON 快照，方便业务观察和调试

## 实例 API

组件通过 Vue `ref` 对外暴露实例方法。

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { RichTextEditor } from '@ap666/office-word'
import type { RichTextEditorInstance } from '@ap666/office-word'

const editorRef = ref<RichTextEditorInstance | null>(null)
</script>

<template>
  <RichTextEditor ref="editorRef" />
</template>
```

### 方法总览

| 方法 | 返回值 | 说明 |
| --- | --- | --- |
| `exportPdf()` | `Promise<Blob \| null>` | 导出当前内容为 PDF |
| `exportImage(options?)` | `Promise<Blob \| null>` | 导出当前内容为图片 |
| `exportHtml()` | `string \| null` | 导出完整 HTML 字符串 |
| `insertImage(payload \| payload[])` | `boolean` | 插入外部上传后的图片 |
| `insertVideo(payload)` | `boolean` | 插入外部上传后的视频 |
| `insertFile(payload)` | `boolean` | 插入外部上传后的文件 |
| `focus()` | `void` | 聚焦编辑器 |
| `getJSON()` | `JSONContent \| null` | 获取当前 JSON 内容 |

## 导出能力

### `exportPdf()`

```ts
async function handleExportPdf() {
  const blob = await editorRef.value?.exportPdf()
  if (!blob) return

  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = 'document.pdf'
  link.click()
  URL.revokeObjectURL(url)
}
```

适用场景：

- 下载文档
- 上传到服务端
- 打印前归档

### `exportImage(options?)`

```ts
async function handleExportImage() {
  const blob = await editorRef.value?.exportImage({
    type: 'image/png',
    quality: 1,
  })
  if (!blob) return

  const url = URL.createObjectURL(blob)
  window.open(url, '_blank')
}
```

可选参数：

```ts
type RichTextEditorImageExportOptions = {
  type?: 'image/png' | 'image/jpeg'
  quality?: number
}
```

### `exportHtml()`

```ts
function handleExportHtml() {
  const html = editorRef.value?.exportHtml()
  if (!html) return

  console.log(html)
}
```

适用场景：

- 服务端落库
- 邮件渲染
- 预览页渲染
- 二次加工

## 外部上传后回填

推荐接入方式：

1. 业务侧自己调用上传接口
2. 上传完成后拿到最终可访问地址
3. 调用编辑器实例方法把内容插入进去

### 插入图片

```ts
async function uploadImage(file: File) {
  const imageUrl = await yourUploadApi(file)

  editorRef.value?.insertImage({
    src: imageUrl,
    name: file.name,
    alt: file.name,
    description: '',
  })
}
```

图片参数：

```ts
type RichTextEditorImagePayload = {
  src: string
  alt?: string
  name?: string
  description?: string
  link?: string
  rotation?: number
}
```

也支持一次插入多张图片，当前最多 `4` 张：

```ts
editorRef.value?.insertImage([
  { src: 'https://cdn.example.com/a.png', name: 'a.png' },
  { src: 'https://cdn.example.com/b.png', name: 'b.png' },
])
```

### 插入视频

```ts
async function uploadVideo(file: File) {
  const videoUrl = await yourUploadApi(file)

  editorRef.value?.insertVideo({
    src: videoUrl,
    name: file.name,
    mimeType: file.type || 'video/mp4',
    description: '视频说明',
    align: 'center',
    widthPercent: 100,
  })
}
```

视频参数：

```ts
type RichTextEditorVideoPayload = {
  src: string
  name?: string
  description?: string
  mimeType?: string
  align?: 'left' | 'center' | 'right'
  widthPercent?: number
  height?: number
}
```

### 插入文件

```ts
async function uploadFile(file: File) {
  const fileUrl = await yourUploadApi(file)

  editorRef.value?.insertFile({
    url: fileUrl,
    name: file.name,
    displayMode: 'text',
    align: 'left',
  })
}
```

文件参数：

```ts
type RichTextEditorFilePayload = {
  url: string
  name: string
  displayMode?: 'text' | 'card' | 'preview'
  align?: 'left' | 'center' | 'right'
  widthPercent?: number
  height?: number
}
```

说明：

- 当前 `insertFile()` 会以文件入口块的形式插入内容
- 如果后续需要独立的文件卡片块，可以继续扩展，但不影响当前外部上传接入方式

## 类型导入

```ts
import type {
  RichTextEditorCollaborationOptions,
  RichTextEditorFilePayload,
  RichTextEditorImageExportOptions,
  RichTextEditorImagePayload,
  RichTextEditorInstance,
  RichTextEditorProps,
  RichTextEditorVideoPayload,
} from '@ap666/office-word'
```
