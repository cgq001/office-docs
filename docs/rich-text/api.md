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

### `messages`

- 类型：`Partial<Record<string, string>> | null`
- 默认值：`null`
- 说明：覆盖组件内置 UI 文案，未传时默认使用中文

示例：

```vue
<RichTextEditor
  v-model="content"
  :messages="{
    'insert.localFile': 'Attachment',
    'export.label': 'Download',
  }"
/>
```

可覆盖的 `messages` key：

- `insert.label`
- `insert.section.general`
- `insert.section.apps`
- `insert.section.external`
- `insert.image`
- `insert.video`
- `insert.table`
- `insert.localFile`
- `insert.columns`
- `insert.highlightBlock`
- `insert.date`
- `insert.codeBlock`
- `insert.formula`
- `insert.blockquote`
- `insert.emoji`
- `insert.link`
- `insert.divider`
- `insert.countdown`
- `insert.markdownImport`
- `export.label`
- `export.pdf`
- `export.pdf.loading`
- `export.html`
- `export.html.loading`
- `export.image`
- `export.image.loading`
- `print.label`
- `print.loading`
- `quote.apply`
- `quote.cancel`
- `quote.borderColor`
- `quote.backgroundColor`
- `outline.label`
- `outline.collapse`
- `outline.empty.description`
- `outline.empty.tip`
- `status.wordCountUnit`
- `status.presentation.enter`
- `status.presentation.exit`
- `status.fullscreen.enter`
- `status.fullscreen.exit`
- `countdown.selectTime`
- `countdown.settingsTitle`
- `formula.insertTitle`

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

## 实例 API

组件通过 Vue `ref` 对外暴露实例方法。

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
} from '@norio-office/rich-text'
```
