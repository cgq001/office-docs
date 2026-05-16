---
title: Collaboration
outline: deep
---

# Collaboration

The spreadsheet component reserves a Yjs collaboration integration layer. It handles stable frontend IDs, a Yjs document mirror, local command conversion, remote Y.Doc updates, and provider awareness for remote selections. The real WebSocket service, HTTP command endpoint, authentication, and asset service are owned by the host application.

## Integration Flow

1. Prepare a stable `fileId` / `roomId`; all users opening the same workbook must use the same value.
2. Prepare current user info: `userId`, `userName`, `clientUniqueCode`, and `token`.
3. Create a `Y.Doc`.
4. Create a `y-websocket` `WebsocketProvider`.
5. Implement `submitCommand` and submit semantic spreadsheet commands to the backend.
6. Pass `document`, `provider`, `user`, and `submitCommand` into `OfficeExcel`.
7. If collaborative images, backgrounds, watermarks, or imported images are needed, implement `uploadAsset` and `resolveAsset`.

## Full Example: y-websocket + HTTP Command Channel

```vue
<script setup lang="ts">
import * as Y from 'yjs'
import { WebsocketProvider } from 'y-websocket'
import {
  OfficeExcel,
  type OfficeExcelAssetContext,
  type OfficeExcelAssetReference,
  type OfficeExcelCollaborationCommandEnvelope,
  type OfficeExcelCollaborationCommandResult,
} from '@norio-office/office-excel'

const serverWsUrl = 'ws://127.0.0.1:1234/collaboration'
const serverHttpUrl = 'http://127.0.0.1:1234'
const fileId = 'excel-demo-file-001'
const token = 'dev-token'
const user = {
  userId: 'user_001',
  userName: 'Alice',
  clientUniqueCode: 'browser-tab-001',
  color: '#3b82f6',
}

const ydoc = new Y.Doc()

const provider = new WebsocketProvider(serverWsUrl, fileId, ydoc, {
  params: {
    roomId: fileId,
    token,
    userId: user.userId,
    userName: user.userName,
    clientType: 'web',
    clientUniqueCode: user.clientUniqueCode,
    documentType: 'excel',
  },
})

async function submitCommand(
  envelope: OfficeExcelCollaborationCommandEnvelope,
): Promise<OfficeExcelCollaborationCommandResult> {
  const response = await fetch(`${serverHttpUrl}/excel-collaboration/commands`, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({
      roomId: fileId,
      token,
      userId: user.userId,
      userName: user.userName,
      clientType: 'web',
      clientUniqueCode: user.clientUniqueCode,
      documentType: 'excel',
      ...envelope,
    }),
  })

  const result = await response.json()

  if (!response.ok) {
    throw new Error(result.reason || `Command submit failed: ${response.status}`)
  }

  // Do not throw when result.accepted === false.
  // command.reject is a normal business rejection; return it to the component
  // so it can clear pending state and roll back optimistic local changes.
  return result
}

async function uploadAsset(
  file: File,
  context: OfficeExcelAssetContext,
): Promise<OfficeExcelAssetReference> {
  const form = new FormData()
  form.append('file', file)
  form.append('roomId', fileId)
  form.append('workbookId', context.workbookId ?? fileId)
  form.append('documentType', 'excel')
  form.append('usage', context.kind)
  if (context.sheetId) {
    form.append('sheetId', context.sheetId)
  }

  const response = await fetch('/office-assets', {
    method: 'POST',
    headers: { Authorization: `Bearer ${token}` },
    body: form,
  })
  const result = await response.json()
  if (!response.ok || result.code !== 200) {
    throw new Error(result.message || 'Asset upload failed')
  }
  return result.data
}

async function resolveAsset(asset: OfficeExcelAssetReference) {
  const response = await fetch(`/office-assets/${asset.assetId}`, {
    headers: { Authorization: `Bearer ${token}` },
  })
  if (!response.ok) {
    throw new Error(`Asset resolve failed: ${response.status}`)
  }
  return response.blob()
}
</script>

<template>
  <OfficeExcel
    :collaboration="{
      enabled: true,
      workbookId: fileId,
      clientId: user.clientUniqueCode,
      document: ydoc,
      provider,
      submitCommand,
      uploadAsset,
      resolveAsset,
      user: {
        userId: user.userId,
        displayName: user.userName,
        color: user.color,
      },
    }"
    @collaboration-command-ack="(payload) => console.log('ack', payload)"
    @collaboration-command-reject="(payload) => console.warn('reject', payload)"
  />
</template>
```

## Command Result

`submitCommand` can return `command.ack` or `command.reject`.

```ts
interface OfficeExcelCollaborationCommandAck {
  type: 'command.ack'
  requestId: string
  opId?: string
  workbookId: string
  accepted: true
  serverSeq?: number
}

interface OfficeExcelCollaborationCommandReject {
  type: 'command.reject'
  requestId: string
  opId?: string
  workbookId: string
  accepted: false
  code: 'INVALID_COMMAND' | 'STALE_TARGET' | 'CONFLICT' | 'SERVER_ERROR'
  reason: string
}
```

## Recommendations

- Keep `workbookId` and `clientId` stable.
- Use `requestId` for idempotency; use `opId` for operation tracing.
- Do not throw for standard `command.reject`; return it to the component.
- If command results arrive later through WebSocket, call `excelRef.value?.applyCollaborationCommandResult(result)`.
- The component rolls back optimistic local changes after a reject and emits `collaboration-command-reject`.
- `uploadAsset` is required for collaborative image-like assets; large base64 objects should not be written directly into Y.Doc.
- If collaboration is not enabled, the `collab` tab is hidden.

## Local Two-Window Test

Use the same `room`, different `clientUniqueCode` values, and reachable WebSocket/HTTP endpoints:

```text
http://127.0.0.1:5173/?collab=1&room=excel-demo-file-001&server=ws://127.0.0.1:1234/collaboration&http=http://127.0.0.1:1234&token=dev-token&userId=user_001&name=Alice&clientUniqueCode=browser-tab-001

http://127.0.0.1:5173/?collab=1&room=excel-demo-file-001&server=ws://127.0.0.1:1234/collaboration&http=http://127.0.0.1:1234&token=dev-token&userId=user_002&name=Bob&clientUniqueCode=browser-tab-002
```
