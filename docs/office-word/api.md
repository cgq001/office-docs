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

### `mode`

- 类型：`'edit' | 'preview'`
- 默认值：`'edit'`
- 说明：编辑器模式，`preview` 用于只读预览壳层

### `outlinePlacement`

- 类型：`'left' | 'right'`
- 默认值：`'left'`
- 说明：大纲面板位置

### `enabledExportItems`

- 类型：`('pdf' | 'html' | 'image' | 'print')[] | null`
- 默认值：`null`
- 说明：导出菜单白名单；为空时默认全部可用

### `enabledInsertMenuItems`

- 类型：`('image' | 'video' | 'table' | 'local-file' | 'columns' | 'highlight-block' | 'date' | 'code-block' | 'formula' | 'blockquote' | 'emoji' | 'link' | 'divider' | 'countdown' | 'markdown-import')[] | null`
- 默认值：`null`
- 说明：插入菜单白名单；为空时默认全部可用

### `enabledToolbarActions`

- 类型：`('blockquote')[] | null`
- 默认值：`null`
- 说明：工具栏动作白名单；为空时默认全部可用

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

## 白名单规则

以下 Props 都是白名单模式：

- `enabledExportItems`
- `enabledInsertMenuItems`
- `enabledToolbarActions`

规则如下：

- 不传时，内置选项默认全部可见、可用
- 一旦传入数组，只有数组中声明的项会被保留

示例：

```vue
<RichTextEditor
  v-model="content"
  :enabled-export-items="['html', 'image']"
  :enabled-insert-menu-items="['image', 'local-file', 'blockquote']"
  :enabled-toolbar-actions="['blockquote']"
/>
```

## 事件

### `update:modelValue`

- 参数：`JSONContent`
- 说明：内容变化时触发，通常由 `v-model` 自动接收

### `change`

- 参数：`JSONContent`
- 说明：内容变更时额外抛出的事件，适合业务侧做保存、联动、审计等逻辑

### `local-file-upload`

- 参数：本地文件信息对象
- 说明：用户从编辑器内部文件选择器选中文件并插入后触发

### `local-file-download`

- 参数：当前文件块数据
- 说明：用户点击本地文件块下载按钮时触发

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
| `insertLocalFile(payload)` | `boolean` | 插入本地文件块 |
| `openLocalFilePicker()` | `void` | 打开本地文件选择器 |
| `focus()` | `void` | 聚焦编辑器 |
| `getJSON()` | `JSONContent \| null` | 获取当前 JSON 内容 |

## 预览模式

```vue
<template>
  <RichTextEditor
    v-model="content"
    mode="preview"
    outline-placement="right"
  />
</template>
```

行为说明：

- 工具栏隐藏
- 编辑禁用
- 支持左右两侧大纲
- 窄屏下会自动缩放页面，提升阅读体验

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
    description: 'video description',
  })
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
  })
}
```

### 插入本地文件块

```ts
editorRef.value?.insertLocalFile({
  url: 'https://cdn.example.com/files/demo.txt',
  name: 'demo.txt',
  size: 2048,
  mimeType: 'text/plain',
})
```

### 打开内置本地文件选择器

```ts
editorRef.value?.openLocalFilePicker()
```

## 类型导入

```ts
import type {
  RichTextEditorCollaborationOptions,
  RichTextEditorCollaborationProvider,
  RichTextEditorCollaborationUser,
  RichTextEditorFilePayload,
  RichTextEditorImageExportOptions,
  RichTextEditorImagePayload,
  RichTextEditorInstance,
  RichTextEditorVideoPayload,
} from '@ap666/office-word'
```
