---
title: Collaboration
outline: deep
---

# Collaboration

Use the unified collaboration service for the current rich text editor. The current component type is `rich`; `word` is reserved for a future dedicated Word component.

```bash
npm install yjs y-websocket
```

## Minimal Integration

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

## Rules

- Keep the `WebsocketProvider` room name and query `roomId` the same.
- All clients in the same room must use the same `field`; for normal one-file-one-editor use, keep it as `content`.
- If the same user opens two browser windows, each window must use a different `clientUniqueCode`; the backend does not deduplicate online clients by `userId`.
- Remote cursors and selections require both `provider` and `user`.
- In collaboration mode, the Y.Doc/Yjs fragment is authoritative. External `modelValue` is only an emitted snapshot and must not continuously drive remote collaborative content.

## Initialization

- By default, the editor does not write `modelValue` into an empty collaborative fragment.
- If the backend already has a Yjs snapshot, that snapshot must win. Do not pass `initializeContent: true`.
- For a brand-new empty room, the host application must first confirm that this client owns initialization, then pass `initializeContent: true` and `initialContent`.

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

## Two-Window Test

Use the same `roomId`, different `userId` values, and different `clientUniqueCode` values. Only the first window should own initialization:

```text
http://127.0.0.1:5177/?collab=1&room=rich-demo-file-001&server=ws://127.0.0.1:1234/collaboration&token=dev-token&userId=user_001&name=Alice&clientUniqueCode=browser-tab-001&init=1

http://127.0.0.1:5177/?collab=1&room=rich-demo-file-001&server=ws://127.0.0.1:1234/collaboration&token=dev-token&userId=user_002&name=Bob&clientUniqueCode=browser-tab-002
```

The bundled `yjs/` server is useful for quick local checks. For full integration, prefer the unified collaboration backend, for example `ws://127.0.0.1:1234/collaboration`.
