---
title: Collaboration
outline: deep
---

# Collaboration

`@norio-office/office-excel` reserves a Yjs-based collaboration integration layer. The component handles stable frontend IDs, a local Yjs document mirror, local command conversion, remote `Y.Doc` updates, and provider awareness for remote selections.

The real WebSocket service, broadcasting, persistence, conflict handling, and permission checks are owned by the host application.

## Basic Integration

```vue
<script setup lang="ts">
import * as Y from 'yjs'
import {
  OfficeExcel,
  type OfficeExcelCollaborationCommandEnvelope,
} from '@norio-office/office-excel'

const ydoc = new Y.Doc()

function submitCommand(envelope: OfficeExcelCollaborationCommandEnvelope) {
  console.log(envelope)
}
</script>

<template>
  <OfficeExcel
    :collaboration="{
      enabled: true,
      workbookId: 'workbook_001',
      clientId: 'client_001',
      document: ydoc,
      submitCommand,
      user: {
        userId: 'u_001',
        displayName: 'Alex',
        color: '#3b82f6',
      },
    }"
  />
</template>
```

## Options

```ts
type OfficeExcelCollaborationRole = 'owner' | 'editor' | 'commenter' | 'viewer'

interface OfficeExcelCollaborationUser {
  userId?: string
  displayName: string
  color?: string
}

interface OfficeExcelCollaborationOptions {
  enabled?: boolean
  mode?: 'server-authoritative'
  workbookId?: string
  clientId?: string
  token?: string
  endpoint?: string
  role?: OfficeExcelCollaborationRole
  document?: unknown
  provider?: OfficeExcelCollaborationProvider | null
  user?: OfficeExcelCollaborationUser | null
  submitCommand?: (envelope: OfficeExcelCollaborationCommandEnvelope) => void | Promise<void>
}
```

| Field | Description |
| --- | --- |
| `enabled` | Enables the collaboration integration layer. |
| `workbookId` | Stable business ID for the workbook. Recommended for collaboration. |
| `clientId` | Stable client ID for the current browser, device, or connection. |
| `document` | External `Y.Doc` used as the local document mirror. |
| `provider` | External Yjs provider. If it exposes awareness, the component uses it for remote selections. |
| `user` | Current collaboration user info. |
| `submitCommand` | Callback that receives local command envelopes for the business collaboration layer. |

## Command Envelope

```ts
interface OfficeExcelCollaborationCommandEnvelope {
  type: 'command.submit'
  requestId: string
  clientId: string
  workbookId: string
  sheetId?: string
  localCommandId: string
  command: {
    type: string
    opId: string
    sheetId?: string
    [key: string]: unknown
  }
}
```

## Recommendations

- Keep `workbookId` and `clientId` stable.
- Use `requestId` / `opId` for idempotency on the server.
- Use `setWorkbook` / `load` with `history: false` for external initialization or remote overwrite.
- For readonly users, also set `readonly` or restrict write permissions with `permissions.edit = false`.
- If collaboration is not enabled, the `collab` tab is hidden.
