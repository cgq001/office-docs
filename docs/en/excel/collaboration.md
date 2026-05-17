---
title: Collaboration
outline: deep
---

# Collaboration

The spreadsheet component provides the frontend Yjs collaboration layer. It handles stable frontend IDs, local command conversion, authoritative external `Y.Doc` updates, and remote selections through provider awareness. The real WebSocket service, WebSocket command channel, business authentication, persistence, and asset service are owned by the host application.

## Integration Flow

1. Prepare a stable `fileId` / `roomId`; all users opening the same workbook must use the same value.
2. Prepare current user info: `userId`, `userName`, `clientUniqueCode`, and `token`.
3. Create a `Y.Doc`.
4. Create a `y-websocket` `WebsocketProvider`.
5. Submit spreadsheet semantic commands through the WebSocket command channel.
6. Pass `document`, `provider`, `user`, and `submitCommand` into `OfficeExcel`.
7. Implement `uploadAsset` and `resolveAsset` when collaborative images, backgrounds, watermarks, or imported images are needed.
8. When entering an empty room for the first time, the component sends `workbook.initialize` after the provider finishes the first sync. The backend must only initialize truly empty rooms.

In standard collaboration mode, `Y.Doc` carries the server-authoritative workbook state. Do not write the default workbook directly into `Y.Doc` from the page startup code. Initialization, edits, formatting, row/column operations, sheet operations, locks, and claims should all go through `submitCommand`.

## Full Example: y-websocket + WebSocket Command Channel

```vue
<script setup lang="ts">
import { onBeforeUnmount } from 'vue'
import * as Y from 'yjs'
import { WebsocketProvider } from 'y-websocket'
import {
  OfficeExcel,
  createOfficeExcelYWebSocketCommandAdapter,
  type OfficeExcelAssetContext,
  type OfficeExcelAssetReference,
  type OfficeExcelCollaborationCommandEnvelope,
  type OfficeExcelCollaborationCommandResult,
} from '@norio-office/office-excel'

const serverWsUrl = 'ws://127.0.0.1:1234/collaboration'
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

const commandAdapter = createOfficeExcelYWebSocketCommandAdapter(provider, {
  timeout: 15000,
  onError: (error) => {
    console.warn('[office-excel] Failed to parse collaboration command', error)
  },
})

async function submitCommand(
  envelope: OfficeExcelCollaborationCommandEnvelope,
): Promise<OfficeExcelCollaborationCommandResult> {
  return commandAdapter.submitCommand(envelope)
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

onBeforeUnmount(() => {
  commandAdapter.destroy()
  provider.destroy()
  ydoc.destroy()
})
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

## WebSocket Command Channel

Spreadsheet collaboration commands share the same WebSocket connection used by Yjs sync and awareness. The frontend sends a binary y-websocket-compatible message:

```text
varUint messageType = 100
varString JSON payload
```

The JSON payload extends `OfficeExcelCollaborationCommandEnvelope` with protocol metadata:

```json
{
  "protocol": "norio-office-excel-command",
  "version": 1,
  "type": "command.submit",
  "requestId": "req_xxx",
  "clientId": "browser-tab-001",
  "workbookId": "excel-demo-file-001",
  "localCommandId": "cell.set-value",
  "command": {
    "type": "cell.set-value",
    "opId": "op_xxx",
    "sheetId": "sheet_xxx"
  }
}
```

The backend should return `command.ack` or `command.reject` with the same `messageType=100`, `protocol`, and `version`. Collaboration commands no longer use an HTTP command endpoint. HTTP can still be used for image, background, watermark, and attachment upload/download.

The built-in adapter handles WebSocket encoding, pending queue management, ack/reject matching, timeout cleanup, and `messageType=100` compatibility:

```ts
const commandAdapter = createOfficeExcelYWebSocketCommandAdapter(provider)

async function submitCommand(envelope: OfficeExcelCollaborationCommandEnvelope) {
  return commandAdapter.submitCommand(envelope)
}
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

Do not throw for normal business rejection. Return a standard `command.reject` so the component can clear pending state, roll back optimistic changes, and emit `collaboration-command-reject`.

## Lock And Claim Commands

Toolbar commands such as `collab-lock-cells` and `collab-claim-cells` are converted into semantic commands before they are submitted:

| Local command | Server command type | Meaning |
| --- | --- | --- |
| `collab.lock-range` | `cell-lock.set` | Lock a cell range. |
| `collab.unlock-range` | `cell-lock.clear` | Unlock a cell range. |
| `collab.claim-cell` | `cell-claim.acquire` | Claim cells for editing. |
| `collab.release-claim` | `cell-claim.release` | Release claimed cells. |

The backend should dispatch by `command.type`, not by `localCommandId`. Owner fields should come from the WebSocket params or authenticated context: `userId`, `clientUniqueCode`, `userName`, and optional color.

## Local Two-Window Test

Use the same `room`, different `clientUniqueCode` values, and a backend that supports the Excel `messageType=100` command channel:

```text
http://127.0.0.1:5173/?collab=1&room=excel-demo-file-001&server=ws://127.0.0.1:1234/collaboration&token=dev-token&userId=user_001&name=Alice&clientUniqueCode=browser-tab-001

http://127.0.0.1:5173/?collab=1&room=excel-demo-file-001&server=ws://127.0.0.1:1234/collaboration&token=dev-token&userId=user_002&name=Bob&clientUniqueCode=browser-tab-002
```
