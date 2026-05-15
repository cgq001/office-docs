---
title: API
outline: deep
---

# API

## 包导出

```ts
import RichTextEditor, {
  RichTextEditor as NamedRichTextEditor,
  RichTextOutline,
  OfficeIcon,
  OfficeColorIcon,
  ScrollArea,
  monoIconNames,
  colorIconNames,
} from '@norio-office/rich-text'
```

## 组件 Props

| Prop | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `modelValue` | `JSONContent \| null` | `null` | 编辑器内容，支持 `v-model`。 |
| `documentName` | `string` | `''` | 内置导出下载的文件名基础名；组件会自动追加 `.pdf`、`.png` 或 `.html`。 |
| `editable` | `boolean` | `true` | 是否允许编辑。 |
| `mode` | `'edit' \| 'preview'` | `'edit'` | 编辑模式或预览模式。 |
| `watermark` | `RichTextEditorWatermarkOptions \| null` | `null` | 文档页面文本水印配置；不传或 `text` 为空时不显示。 |
| `showOutline` | `boolean` | `true` | 是否显示编辑器内置大纲。设为 `false` 后可以配合外部 `RichTextOutline` 组件自行放置目录。 |
| `outlinePlacement` | `'left' \| 'right'` | `'right'` | 大纲面板位置。 |
| `messages` | `RichTextEditorMessages \| null` | `null` | 覆盖内置 UI 文案。 |
| `enabledExportItems` | `RichTextEditorExportItemKey[] \| null` | `null` | 导出菜单白名单。 |
| `enabledInsertMenuItems` | `RichTextEditorInsertMenuItemKey[] \| null` | `null` | 插入菜单白名单。 |
| `enabledToolbarActions` | `RichTextEditorToolbarActionKey[] \| null` | `null` | 工具栏能力白名单。 |
| `placeholder` | `string` | `''` | 空内容占位文案。 |
| `mention` | `boolean` | `false` | 是否启用 `@` 提及功能。 |
| `collaboration` | `RichTextEditorCollaborationOptions \| null` | `null` | Yjs 协同配置。 |
| `uploadImage` | `RichTextEditorUploadHook \| null` | `null` | 内置图片选择、图片块上传时调用。 |
| `uploadVideo` | `RichTextEditorUploadHook \| null` | `null` | 内置视频选择、视频块上传时调用。 |
| `uploadFile` | `RichTextEditorUploadHook \| null` | `null` | 本地文件选择器上传时调用。 |
| `onUploadError` | `RichTextEditorUploadErrorHandler \| null` | `null` | 上传失败回调；同时也会触发 `upload-error` 事件。 |
| `mentionProvider` | `RichTextEditorMentionProvider \| null` | `null` | `@` 提及候选数据提供函数，兼容用法。 |
| `onMentionSearch` | `RichTextEditorMentionProvider \| null` | `null` | `@mention-search` 函数式事件对应的异步候选加载函数。 |

白名单 props 不传时表示启用全部内置项；传入数组后，仅数组里的项目会显示并可用。

## 水印配置

```ts
type RichTextEditorWatermarkOptions = {
  text: string
  color?: string
  fontSize?: number
  rotate?: number
  showInEdit?: boolean
}
```

| 字段 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `text` | `string` | - | 水印文字，必填。 |
| `color` | `string` | `'rgba(15, 23, 42, 0.12)'` | 水印文字颜色。 |
| `fontSize` | `number` | `18` | 水印字号，单位 px。 |
| `rotate` | `number` | `-24` | 水印倾斜角度，单位 deg。 |
| `showInEdit` | `boolean` | `true` | 编辑状态下是否显示水印；预览状态始终按配置显示。 |

## 可用 Key

导出菜单：

```ts
type RichTextEditorExportItemKey = 'pdf' | 'html' | 'image' | 'print'
```

插入菜单：

```ts
type RichTextEditorInsertMenuItemKey =
  | 'image'
  | 'video'
  | 'table'
  | 'local-file'
  | 'columns'
  | 'highlight-block'
  | 'date'
  | 'code-block'
  | 'formula'
  | 'blockquote'
  | 'emoji'
  | 'link'
  | 'divider'
  | 'countdown'
  | 'markdown-import'
```

工具栏：

```ts
type RichTextEditorToolbarActionKey = 'blockquote'
```

## 事件

| 事件 | Payload | 说明 |
| --- | --- | --- |
| `update:modelValue` | `JSONContent` | 内容更新，用于 `v-model`。 |
| `change` | `JSONContent` | 内容更新事件。 |
| `local-file-upload` | `RichTextEditorLocalFilePayload` | 用户通过本地文件选择器插入文件后触发。 |
| `local-file-click` | `RichTextEditorLocalFilePayload` | 用户点击本地文件卡片非下载按钮区域时触发。 |
| `local-file-download` | `RichTextEditorLocalFilePayload` | 用户点击本地文件卡片下载按钮时触发。 |
| `upload-error` | `RichTextEditorUploadErrorPayload` | 图片、视频或文件上传 hook 失败时触发。 |
| `mention-search` | `RichTextEditorMentionProviderPayload` | 函数式监听写法，对应 `onMentionSearch` prop；输入 `@` 后加载候选数据，可返回数组或 `Promise`。 |
| `mention-item-click` | `RichTextEditorMentionItem` | 点击弹窗候选项或已插入的提及节点时触发。 |
| `mention-submit` | `RichTextEditorMentionItem` | 点击弹窗“提及”按钮并插入提及节点后触发。 |

`mention-search` 没有出现在组件的 `defineEmits` 中；Vue 模板里的 `@mention-search="handler"` 会作为 `onMentionSearch` 函数式 prop 传入组件。

## 实例 API

通过 Vue `ref` 获取组件实例方法：

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { RichTextEditor } from '@norio-office/rich-text'
import type { RichTextEditorInstance } from '@norio-office/rich-text'

const editorRef = ref<RichTextEditorInstance | null>(null)
</script>

<template>
  <RichTextEditor ref="editorRef" />
</template>
```

| 方法 | 返回值 | 说明 |
| --- | --- | --- |
| `exportPdf()` | `Promise<Blob \| null>` | 导出 PDF。 |
| `exportImage(options?)` | `Promise<Blob \| null>` | 导出图片，支持 PNG/JPEG。 |
| `exportHtml()` | `string \| null` | 导出 HTML 字符串。 |
| `insertImage(payload)` | `boolean` | 插入 1 到 4 张图片。 |
| `insertVideo(payload)` | `boolean` | 插入视频块。 |
| `insertFile(payload)` | `boolean` | 插入链接/文件预览块。 |
| `insertLocalFile(payload)` | `boolean` | 插入本地文件卡片。 |
| `insertMention(payload)` | `boolean` | 插入一个结构化行内提及节点；`mention` 未开启时返回 `false`。 |
| `openLocalFilePicker()` | `void` | 打开本地文件选择器。 |
| `focus()` | `void` | 聚焦编辑器。 |
| `getJSON()` | `JSONContent \| null` | 获取当前 JSON 内容。 |
| `getText()` | `string` | 获取当前纯文本内容，不包含 HTML 标签。 |
| `getImages()` | `RichTextEditorImagePayload[]` | 获取文档内所有图片信息。 |
| `getVideos()` | `RichTextEditorVideoPayload[]` | 获取文档内所有视频信息。 |
| `getFiles()` | `RichTextEditorCollectedFilePayload[]` | 获取文档内所有文件信息；`kind: 'file'` 表示链接/文件预览块，`kind: 'local-file'` 表示本地文件卡片。 |
| `getOutlineItems()` | `RichTextEditorOutlineItem[]` | 获取当前目录项。 |
| `getActiveOutlinePos()` | `number \| null` | 获取当前激活目录项的文档位置。 |
| `focusOutlineItem(pos)` | `boolean` | 聚焦并跳转到指定目录项。 |
| `onOutlineChange(handler)` | `() => void` | 监听目录变化，返回取消监听函数。 |

## 外置目录组件

内置目录默认跟随编辑器一起渲染。如果需要把目录放到任意侧栏、抽屉或自定义布局里，可以关闭内置目录，并把编辑器实例传给 `RichTextOutline`。

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { RichTextEditor, RichTextOutline } from '@norio-office/rich-text'
import type { RichTextEditorInstance } from '@norio-office/rich-text'

const editorRef = ref<RichTextEditorInstance | null>(null)
</script>

<template>
  <RichTextEditor ref="editorRef" v-model="content" :show-outline="false" />
  <aside class="outline-sidebar">
    <RichTextOutline :editor="editorRef" />
  </aside>
</template>
```

`RichTextOutline` 会自动订阅编辑器目录状态，点击条目时会调用 `focusOutlineItem` 跳转到对应标题。组件自身最小高度为 `200px`，默认根据内容自适应增高；如果需要固定高度或内部滚动，请在外层套一个容器控制高度。

可选 props：`open`、`placement`、`title`、`collapseTitle`、`emptyDescription`、`emptyTip`、`showCollapse`。

事件：`select`、`toggle`、`change`。

## 自定义文案

编辑器默认 UI 文案为中文。可以用 `messages` 覆盖任意 key：

```vue
<RichTextEditor
  v-model="content"
  :messages="{
    'insert.localFile': '附件',
    'export.label': '下载',
  }"
/>
```

常用文案 key：

| Key | 默认中文 |
| --- | --- |
| `insert.label` | 插入 |
| `insert.section.general` | 通用 |
| `insert.section.apps` | 小应用 |
| `insert.section.external` | 外部内容 |
| `insert.image` | 图片 |
| `insert.video` | 视频 |
| `insert.table` | 表格 |
| `insert.localFile` | 本地文件 |
| `insert.columns` | 分栏 |
| `insert.highlightBlock` | 高亮块 |
| `insert.date` | 日期 |
| `insert.codeBlock` | 代码块 |
| `insert.formula` | 公式 |
| `insert.blockquote` | 引用 |
| `insert.emoji` | 表情符号 |
| `insert.link` | 超链接 |
| `insert.divider` | 分隔线 |
| `insert.countdown` | 倒计时 |
| `insert.markdownImport` | Markdown 导入 |
| `export.label` | 导出 |
| `export.pdf` | 导出 PDF |
| `export.pdf.loading` | 导出 PDF 中... |
| `export.html` | 导出 HTML |
| `export.html.loading` | 导出 HTML 中... |
| `export.image` | 导出图片 |
| `export.image.loading` | 导出图片中... |
| `print.label` | 打印 |
| `print.loading` | 打印中... |
| `quote.apply` | 应用引用 |
| `quote.cancel` | 取消引用 |
| `quote.borderColor` | 边框颜色 |
| `quote.backgroundColor` | 背景颜色 |
| `outline.label` | 大纲 |
| `outline.collapse` | 收起大纲 |
| `outline.empty.description` | 对文档内容应用“标题”样式，即可自动生成大纲。 |
| `outline.empty.tip` | 点击左下角“大纲”按钮可以随时展开或收起。 |
| `status.wordCountUnit` | 个字 |
| `status.presentation.enter` | 演示 |
| `status.presentation.exit` | 退出演示 |
| `status.fullscreen.enter` | 全屏 |
| `status.fullscreen.exit` | 退出全屏 |
| `countdown.selectTime` | 请选择时间 |
| `countdown.settingsTitle` | 倒计时设置 |
| `formula.insertTitle` | 插入 LaTeX 公式 |

## 类型导入

```ts
import type {
  OfficeColorIconProps,
  OfficeIconProps,
  RichTextEditorAlign,
  RichTextEditorCollaborationAwareness,
  RichTextEditorCollaborationDocument,
  RichTextEditorCollaborationProvider,
  RichTextEditorCollaborationUser,
  RichTextEditorCollaborationOptions,
  RichTextEditorCollectedFilePayload,
  RichTextEditorExportItemKey,
  RichTextEditorFilePayload,
  RichTextEditorImageExportOptions,
  RichTextEditorImagePayload,
  RichTextEditorInsertMenuItemKey,
  RichTextEditorInstance,
  RichTextEditorLocalFilePayload,
  RichTextEditorMentionItem,
  RichTextEditorMentionProvider,
  RichTextEditorMentionProviderPayload,
  RichTextEditorMentionType,
  RichTextEditorMessages,
  RichTextEditorOutlineChangeHandler,
  RichTextEditorOutlineItem,
  RichTextEditorOutlineState,
  RichTextEditorProps,
  RichTextEditorToolbarActionKey,
  RichTextEditorUploadErrorHandler,
  RichTextEditorUploadErrorPayload,
  RichTextEditorUploadHook,
  RichTextEditorUploadInput,
  RichTextEditorUploadKind,
  RichTextEditorUploadResult,
  RichTextEditorWatermarkOptions,
  RichTextEditorVideoPayload,
} from '@norio-office/rich-text'
```
