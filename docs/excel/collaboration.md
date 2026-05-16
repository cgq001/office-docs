---
title: 协同接入
outline: deep
---

# 协同接入

组件已经预留 Yjs 协同前端接入层。当前版本负责前端稳定 ID/Yjs 文档镜像、本地命令转换、外部 Y.Doc 远程更新回投，以及 provider awareness 远程选区展示；真实 WebSocket 服务端由宿主继续接入。

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
        displayName: '张三',
        color: '#3b82f6',
      },
    }"
  />
</template>
```

## 参数说明

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

`OfficeExcelCollaborationUser` 字段：

| 字段 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `userId` | `string` | `undefined` | 当前用户业务 ID。用于协同层区分用户。 |
| `displayName` | `string` | 必填 | 当前用户展示名。远端选区、协同状态可用它展示用户身份。 |
| `color` | `string` | 组件生成默认色 | 当前用户协同颜色，建议传十六进制颜色。 |

`OfficeExcelCollaborationOptions` 字段：

| 字段 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `enabled` | `boolean` | `false` | 是否开启协同前端接入。未开启时组件按单人模式运行。 |
| `mode` | `'server-authoritative'` | `server-authoritative` | 协同模式。当前设计为服务端权威命令流。 |
| `workbookId` | `string` | `undefined` | 工作簿业务 ID。协同时建议必传且保持稳定。 |
| `clientId` | `string` | `undefined` | 当前客户端 ID。用于区分不同浏览器、设备或连接。 |
| `token` | `string` | `undefined` | 预留鉴权 token，组件本身不直接请求服务端。 |
| `endpoint` | `string` | `undefined` | 预留服务端地址，组件本身不直接连接。 |
| `role` | `'owner' \| 'editor' \| 'commenter' \| 'viewer'` | `undefined` | 当前用户协同角色。业务侧可用来控制权限。 |
| `document` | `unknown` | `undefined` | 外部传入的 Y.Doc。开启协同时用于维护本地文档镜像。 |
| `provider` | `OfficeExcelCollaborationProvider \| null` | `null` | 外部 Yjs provider，可提供 awareness 用于远端选区展示。 |
| `user` | `OfficeExcelCollaborationUser \| null` | `null` | 当前协同用户信息。 |
| `submitCommand` | `(envelope) => void \| Promise<void>` | `undefined` | 本地命令提交回调。组件会把本地编辑转换成 envelope 交给业务协同层。 |

协同关闭时组件按单人本地模式运行。协同开启时组件不会直接连接服务端，而是通过 `submitCommand` 把稳定 ID 命令交给外部接入层。

## Command Envelope

`submitCommand` 收到的 envelope 结构：

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

协同 envelope 字段：

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| `type` | `'command.submit'` | envelope 类型。当前本地提交固定为 `command.submit`。 |
| `requestId` | `string` | 本次提交请求 ID。服务端可用它做幂等和追踪。 |
| `clientId` | `string` | 当前客户端 ID。 |
| `workbookId` | `string` | 工作簿业务 ID。 |
| `sheetId` | `string` | 命令关联的工作表 ID；部分工作簿级命令可能为空。 |
| `localCommandId` | `string` | 本地命令 ID，例如单元格编辑、sheet 操作、结构变更等。 |
| `command` | `{ type: string; opId: string; ... }` | 发送给业务协同层的命令正文。`opId` 可用于去重，其他字段随具体命令变化。 |

协同接入建议：

- `workbookId` 和 `clientId` 保持稳定。
- 服务端建议按 `requestId` / `opId` 做幂等。
- 外部 provider 如果提供 Yjs awareness，组件会用于远端选区展示。
- 未启用协同时，`collab` tab 不显示。
