---
title: 协同编辑
outline: deep
---

# 协同编辑

推荐使用统一协同服务接入当前富文本组件。当前富文本组件的类型是 `rich`，不要把它作为未来 Word 组件的 `documentType=word` 接入。

```bash
npm install yjs y-websocket
```

最小接入示例：

```vue
<script setup lang="ts">
import { computed, ref } from 'vue'
import * as Y from 'yjs'
import { WebsocketProvider } from 'y-websocket'
import type { JSONContent } from '@tiptap/core'
import { RichTextEditor } from '@norio-office/rich-text'
import '@norio-office/rich-text/style.css'

const fileId = 'rich-demo-file-001'
const content = ref<JSONContent | null>(null)
const ydoc = new Y.Doc()

const user = {
  userId: 'user_001',
  userName: 'Alice',
  clientUniqueCode: 'browser-tab-001',
  color: '#3b82f6',
}

const provider = new WebsocketProvider(
  'ws://127.0.0.1:1234/collaboration',
  fileId,
  ydoc,
  {
    params: {
      roomId: fileId,
      token: 'dev-token',
      userId: user.userId,
      userName: user.userName,
      clientType: 'web',
      clientUniqueCode: user.clientUniqueCode,
      documentType: 'rich',
    },
  },
)

const collaboration = computed(() => ({
  document: ydoc,
  field: 'content',
  provider,
  user: {
    name: user.userName,
    color: user.color,
    userId: user.userId,
    clientUniqueCode: user.clientUniqueCode,
  },
}))
</script>

<template>
  <RichTextEditor
    v-model="content"
    :collaboration="collaboration"
  />
</template>
```

关键规则：

- `WebsocketProvider` 的 room name 和 query 里的 `roomId` 建议保持同一个值。
- 同一个协同房间里的所有客户端必须使用同一个 `field`，普通一文档一编辑器场景固定用 `content`。
- 同一个用户开两个浏览器窗口时，`clientUniqueCode` 必须不同；后端不会按 `userId` 去重在线客户端。
- `provider + user` 都传入时，组件才会显示远程光标和远程选区。
- 协同模式下 Y.Doc/Yjs fragment 是内容事实来源，外部 `modelValue` 不会再作为远程内容的权威写入源。

初始化规则：

- 默认情况下，组件不会把 `modelValue` 写入空的协同 fragment。
- 如果后端已有 Yjs 快照，必须以快照为准，不要传 `initializeContent: true`。
- 如果是全新的空房间，宿主业务必须先确认当前客户端拥有初始化权，再传 `initializeContent: true` 和 `initialContent`。

```ts
const collaboration = computed(() => ({
  document: ydoc,
  field: 'content',
  provider,
  user,
  initializeContent: ownsInitialContent,
  initialContent: ownsInitialContent ? businessContent : null,
}))
```

两窗口测试时，保持相同 `roomId`，但使用不同 `userId` 和 `clientUniqueCode`。只有第一个窗口应该带初始化权：

```text
http://127.0.0.1:5177/?collab=1&room=rich-demo-file-001&server=ws://127.0.0.1:1234/collaboration&token=dev-token&userId=user_001&name=Alice&clientUniqueCode=browser-tab-001&init=1

http://127.0.0.1:5177/?collab=1&room=rich-demo-file-001&server=ws://127.0.0.1:1234/collaboration&token=dev-token&userId=user_002&name=Bob&clientUniqueCode=browser-tab-002
```

> 本包内置的 `yjs/` 服务示例只适合快速本地验证。生产或完整联调建议使用统一协同后端，例如 `ws://127.0.0.1:1234/collaboration`。
