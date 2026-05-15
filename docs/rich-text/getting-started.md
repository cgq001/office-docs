---
title: 快速开始
outline: deep
---

# 快速开始

## 安装

```bash
npm install @norio-office/rich-text
```

如果你的包管理器不会自动安装 peer dependencies，还需要补齐运行时依赖：

```bash
npm install vue @tiptap/core @tiptap/vue-3 @tiptap/pm @tiptap/starter-kit @tiptap/extension-placeholder @tiptap/extension-code-block @tiptap/extension-code-block-lowlight @tiptap/extension-collaboration @tiptap/extension-collaboration-caret @tiptap/extension-font-family @tiptap/extension-subscript @tiptap/extension-superscript @tiptap/extension-table @tiptap/extension-table-cell @tiptap/extension-table-header @tiptap/extension-table-row @tiptap/extension-task-item @tiptap/extension-task-list @tiptap/extension-text-style @tiptap/extension-underline @tiptap/y-tiptap lowlight y-prosemirror yjs
```

说明：

- 组件入口已经自动引入样式
- 默认接入不需要额外手动导入 CSS

## 最小接入

```vue
<script setup lang="ts">
import { ref } from 'vue'
import type { JSONContent } from '@tiptap/core'
import { RichTextEditor } from '@norio-office/rich-text'

const content = ref<JSONContent | null>(null)
</script>

<template>
  <RichTextEditor v-model="content" />
</template>
```

## 基础接入示例

```vue
<script setup lang="ts">
import { ref } from 'vue'
import type { JSONContent } from '@tiptap/core'
import { RichTextEditor } from '@norio-office/rich-text'

const content = ref<JSONContent | null>({
  type: 'doc',
  content: [
    {
      type: 'paragraph',
      content: [{ type: 'text', text: '欢迎使用 富文本 编辑器' }],
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

## 自定义文案

编辑器默认 UI 文案是中文。如果你只想覆盖部分按钮或菜单文案，可以使用 `messages`：

```vue
<RichTextEditor
  v-model="content"
  :messages="{
    'insert.localFile': 'Attachment',
    'export.label': 'Download',
  }"
/>
```

适用场景：

- 在中文业务系统中做少量文案替换
- 在英文站点里逐步替换组件内置中文按钮
- 按业务品牌规范改写局部交互文案

## 预览模式

当你只想做文档阅读展示时，可以切换到 `preview` 模式：

```vue
<template>
  <RichTextEditor
    v-model="content"
    mode="preview"
    outline-placement="right"
  />
</template>
```

说明：

- 预览模式下工具栏会隐藏
- 编辑行为会禁用
- 大纲可以放在左侧或右侧
- 窄屏下会自动缩放页面，提升手机阅读体验

## 白名单裁剪

如果你希望只保留部分导出项、插入项或工具栏动作，可以通过白名单 Props 控制：

```vue
<RichTextEditor
  v-model="content"
  :enabled-export-items="['html', 'image']"
  :enabled-insert-menu-items="['image', 'local-file', 'blockquote']"
  :enabled-toolbar-actions="['blockquote']"
/>
```

规则：

- 不传这些 Props 时，内置项默认全部开启
- 一旦传了数组，只有数组中声明的项目会保留

## 协同模式快速接入

如果你要启用多人协同，需要额外接入 `Yjs` 文档和 provider：

```vue
<script setup lang="ts">
import { ref } from 'vue'
import * as Y from 'yjs'
import { WebsocketProvider } from 'y-websocket'
import type { JSONContent } from '@tiptap/core'
import { RichTextEditor } from '@norio-office/rich-text'

const ydoc = new Y.Doc()
const provider = new WebsocketProvider('ws://localhost:1234', 'rich-text-demo', ydoc)
const content = ref<JSONContent | null>(null)
</script>

<template>
  <RichTextEditor
    v-model="content"
    :collaboration="{
      document: ydoc,
      field: 'content',
      provider,
      user: {
        name: '张三',
        color: '#3b82f6',
      },
    }"
  />
</template>
```

补充说明：

- 协同模式下，Yjs fragment 才是内容的真实来源
- `modelValue` 仍然会持续收到最新 JSON 快照
- 但外部新的 `modelValue` 不会再反向写回协同编辑器

## 推荐接入方式

### 内容保存

单人模式推荐优先保存 `JSONContent`：

- 与编辑器内部结构一致
- 后续恢复最稳定
- 适合再次进入编辑态

协同模式推荐保存共享文档或服务端同步结果，而不是继续把 `modelValue` 当作回填来源。

### 内容展示

如果目标是只读展示，可以根据业务场景选择：

- 保存 JSON 后重新加载到编辑器只读模式
- 用 `mode="preview"` 做阅读态文档展示
- 调用 `exportHtml()` 生成 HTML 做只读展示
- 调用 `exportPdf()` 或 `exportImage()` 做归档和分享

### 上传策略

推荐把上传逻辑完全放在业务层：

- 编辑器不直接管理上传接口
- 业务层负责鉴权、签名、压缩、秒传、断点续传
- 编辑器只负责消费最终 URL 和元数据
