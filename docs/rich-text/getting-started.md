---
title: 快速开始
outline: deep
---

# 快速开始

## 安装

```bash
npm install @norio-office/rich-text
```

组件样式会作为独立 CSS 文件发布，建议在应用入口显式引入：

```ts
import '@norio-office/rich-text/style.css'
```

如果你的包管理器没有自动安装 peer dependencies，请同时安装运行时 peer 包：

```bash
npm install vue @tiptap/core @tiptap/vue-3 @tiptap/pm @tiptap/starter-kit @tiptap/extension-placeholder @tiptap/extension-code-block @tiptap/extension-code-block-lowlight @tiptap/extension-collaboration @tiptap/extension-collaboration-caret @tiptap/extension-font-family @tiptap/extension-subscript @tiptap/extension-superscript @tiptap/extension-table @tiptap/extension-table-cell @tiptap/extension-table-header @tiptap/extension-table-row @tiptap/extension-task-item @tiptap/extension-task-list @tiptap/extension-text-style @tiptap/extension-underline @tiptap/y-tiptap lowlight y-prosemirror yjs
```

`html2canvas`、`jspdf`、`katex`、`marked`、`plyr` 已作为普通 dependencies 随包安装。

## 最小接入

```vue
<script setup lang="ts">
import { ref } from 'vue'
import type { JSONContent } from '@tiptap/core'
import { RichTextEditor } from '@norio-office/rich-text'
import '@norio-office/rich-text/style.css'

const content = ref<JSONContent | null>(null)
</script>

<template>
  <RichTextEditor v-model="content" />
</template>
```

也可以使用默认导出：

```ts
import RichTextEditor from '@norio-office/rich-text'
```

## 基础接入示例

```vue
<script setup lang="ts">
import { ref } from 'vue'
import type { JSONContent } from '@tiptap/core'
import { RichTextEditor } from '@norio-office/rich-text'
import '@norio-office/rich-text/style.css'

const content = ref<JSONContent | null>({
  type: 'doc',
  content: [
    {
      type: 'paragraph',
      content: [{ type: 'text', text: '欢迎使用富文本编辑器' }],
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
    document-name="demo"
    placeholder="请输入内容"
    @change="handleChange"
  />
</template>
```

## 预览模式

`mode="preview"` 会切换到只读预览外壳。预览模式下工具栏隐藏、编辑禁用，大纲仍可放在左侧或右侧。窄屏下预览模式会自动缩放页面画布，让文档在手机上保持可读。

```vue
<RichTextEditor
  v-model="content"
  mode="preview"
  outline-placement="right"
/>
```

## 水印

`watermark` 只作为页面视觉层渲染，不写入编辑器 JSON，也不会影响 `getText()` 的纯文本结果。PDF、图片和打印导出会保留水印。

```vue
<RichTextEditor
  v-model="content"
  :watermark="{
    text: '内部资料',
    color: 'rgba(37, 99, 235, 0.12)',
    fontSize: 20,
    rotate: -24,
    showInEdit: true,
  }"
/>
```

## 白名单裁剪

不传白名单 props 时，内置项默认全部启用；传入数组后，仅数组里的项目会显示并可用。

```vue
<RichTextEditor
  v-model="content"
  :enabled-export-items="['html', 'image']"
  :enabled-insert-menu-items="['image', 'local-file', 'blockquote']"
  :enabled-toolbar-actions="['blockquote']"
/>
```

## @ 提及

`mention` 默认关闭。需要提及能力时请显式传入 `:mention="true"`；未开启时输入 `@` 只会保留普通文本，`@mention-search` 不会被调用，`insertMention()` 会返回 `false`。

```vue
<script setup lang="ts">
import { ref } from 'vue'
import type { JSONContent } from '@tiptap/core'
import { RichTextEditor } from '@norio-office/rich-text'
import type {
  RichTextEditorMentionItem,
  RichTextEditorMentionProviderPayload,
} from '@norio-office/rich-text'

const content = ref<JSONContent | null>(null)

const mentionItems: RichTextEditorMentionItem[] = [
  { id: 'user-1001', name: '崔国强', type: 1 },
  { id: 'user-1002', name: '刘佳宁', type: 1 },
  { id: 'doc-2001', name: 'IT资产管理系统', type: 2, tag: '外部', updatedAt: '2025年12月1日' },
]

async function handleMentionSearch(payload: RichTextEditorMentionProviderPayload) {
  const query = payload.query.trim().toLowerCase()
  return mentionItems.filter((item) => {
    const matchedType = payload.type === 'all' || item.type === payload.type
    const matchedKeyword = !query || item.name.toLowerCase().includes(query)
    return matchedType && matchedKeyword
  })
}
</script>

<template>
  <RichTextEditor
    v-model="content"
    :mention="true"
    @mention-search="handleMentionSearch"
    @mention-item-click="(item) => console.log('clicked:', item)"
    @mention-submit="(item) => console.log('inserted:', item)"
  />
</template>
```

`type: 1` 表示人，`type: 2` 表示文档。点击候选项只会触发 `mention-item-click` 并选中当前项；点击弹窗底部“提及”按钮才会插入结构化提及节点并触发 `mention-submit`。

## 上传并插入

推荐把上传逻辑完全放在业务层：业务层上传文件，接口返回最终 URL，编辑器再插入返回内容。如果使用内置图片、视频、本地文件选择器或页面拖拽上传，请传入上传 hook。

```vue
<script setup lang="ts">
import type {
  RichTextEditorUploadInput,
  RichTextEditorUploadResult,
  RichTextEditorUploadErrorPayload,
} from '@norio-office/rich-text'

async function uploadToServer(payload: RichTextEditorUploadInput): Promise<RichTextEditorUploadResult> {
  const form = new FormData()
  form.append('file', payload.file)
  form.append('kind', payload.kind)

  const response = await fetch('/api/upload', {
    method: 'POST',
    body: form,
  })

  if (!response.ok) {
    throw new Error('上传失败')
  }

  return await response.json()
}

function handleUploadError(payload: RichTextEditorUploadErrorPayload) {
  console.error(payload.kind, payload.fileName, payload.error)
}
</script>

<template>
  <RichTextEditor
    v-model="content"
    :upload-image="uploadToServer"
    :upload-video="uploadToServer"
    :upload-file="uploadToServer"
    @upload-error="handleUploadError"
  />
</template>
```

页面拖拽上传会按文件类型分流：`image/*` 走图片上传，`video/*` 走视频上传，其他格式全部走 `uploadFile` 并插入本地文件卡片。

## 内容保存与展示

单人模式推荐优先保存 `JSONContent`，它和编辑器内部结构一致，后续恢复更稳定。协同模式推荐保存共享文档或服务端同步结果，而不是继续把 `modelValue` 当作回填来源。

只读展示可以按场景选择：

- 保存 JSON 后用 `mode="preview"` 做阅读态展示
- 调用 `exportHtml()` 生成 HTML
- 调用 `exportPdf()` 或 `exportImage()` 做归档和分享
