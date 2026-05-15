---
title: 协同编辑
outline: deep
---

# 协同编辑


<span style="color:red">协同编辑 目前只针对pro版本用户开放</span>

`@norio-office/rich-text` 支持普通单人编辑，也支持可选的 `Yjs` 协同编辑。同一个组件既可以保持单人 `v-model` JSON 工作流，也可以切换到多人共享文档模式。

## 设计原则

- 协同能力是可选的，不传 `collaboration` 时就是普通单人编辑器。
- 传入 `collaboration` 后，编辑器会启用 Tiptap Collaboration，并以 `Yjs` fragment 作为内容事实来源。
- 如果同时传入 `provider + user`，编辑器会渲染远程光标和远程选区。
- 协同模式仍然会抛出 `update:modelValue` 和 `change`，便于业务侧观察最新 JSON 快照。

## `collaboration` 参数

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

字段说明：

- `document`：`Y.Doc` 实例。
- `field`：fragment 名称，默认是 `content`。
- `provider`：可选的协同传输层，例如 `y-websocket`。
- `user`：当前用户信息，用于远程光标显示。

## 基础用法

### 只验证共享内容同步

```vue
<script setup lang="ts">
import * as Y from 'yjs'
import { RichTextEditor } from '@norio-office/rich-text'
import '@norio-office/rich-text/style.css'

const ydoc = new Y.Doc()
</script>

<template>
  <RichTextEditor
    :collaboration="{
      document: ydoc,
      field: 'content',
    }"
  />
</template>
```

这一步适合先确认组件能正常切到协同模式、本地编辑能否写入 `Yjs` fragment。

### 接入 `y-websocket` 和远程光标

```vue
<script setup lang="ts">
import { ref } from 'vue'
import * as Y from 'yjs'
import { WebsocketProvider } from 'y-websocket'
import type { JSONContent } from '@tiptap/core'
import { RichTextEditor } from '@norio-office/rich-text'
import '@norio-office/rich-text/style.css'

const ydoc = new Y.Doc()
const provider = new WebsocketProvider('ws://localhost:1234', 'office-word-demo', ydoc)
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

此时可以获得多人内容同步、远程光标和远程选区。

## 初始化规则

协同模式下，`Yjs` fragment 是内容的事实来源。组件仍会 emit JSON 更新，但外部 `modelValue` 的变化不会再反向写入编辑器。

不要把 `modelValue` 当作协同房间的初始化种子。如果房间需要默认内容，请在挂载编辑器之前先初始化 `Y.Doc`，或者由服务端在房间创建时预置共享内容。

## 依赖说明

协同模式涉及这些运行时依赖：

- `@tiptap/extension-collaboration`
- `@tiptap/extension-collaboration-caret`
- `@tiptap/y-tiptap`
- `y-prosemirror`
- `yjs`

如果传输层使用 `y-websocket`，业务项目还需要安装：

```bash
npm install y-websocket
```

## 随包附带的 Yjs 服务示例

发布包内包含一个最小 Yjs WebSocket 服务示例，方便业务方快速验证协同。

```bash
cd node_modules/@norio-office/rich-text/yjs
npm install
npm run start
```

默认监听地址为：

```bash
ws://0.0.0.0:1234
```

客户端需要使用相同 WebSocket 地址和房间名：

```ts
import * as Y from 'yjs'
import { WebsocketProvider } from 'y-websocket'

const ydoc = new Y.Doc()
const provider = new WebsocketProvider('ws://127.0.0.1:1234', 'office-word-demo', ydoc)
```

PowerShell 下可以这样指定环境变量：

```powershell
$env:HOST="0.0.0.0"
$env:PORT="1234"
npm run start
```

注意事项：

- 所有协作者必须使用同一个 WebSocket 地址和同一个 room 名。
- 如果客户端不在同一台机器上，不要继续使用 `127.0.0.1`。
- 示例服务是纯内存实现，重启后文档状态会丢失。

## 当前范围

- 已支持：基于 `Yjs` 的共享内容编辑。
- 已支持：远程光标与远程选区显示。
- 已支持：单人模式和协同模式共用同一个组件。
- 未内置：参与者列表 UI。
- 未内置：连接状态面板 UI。
