---
title: 协同接入
outline: deep
---

# 协同接入

组件已经预留 Yjs 协同前端接入层。当前版本负责前端稳定 ID、Yjs 文档镜像、本地命令转换、外部 Y.Doc 远程更新回投，以及 provider awareness 远程选区展示；真实 WebSocket 服务端、HTTP 命令接口、业务鉴权和文件服务由宿主接入。

### 接入流程

1. 业务系统准备稳定的 `fileId` / `roomId`，同一个工作簿多人打开时必须一致。
2. 业务系统准备当前用户信息：`userId`、`userName`、`clientUniqueCode`、`token`。
3. 宿主创建 `Y.Doc`。
4. 宿主创建 `y-websocket` 的 `WebsocketProvider`，连接协同服务。
5. 宿主实现 `submitCommand`，把组件产生的命令提交到后端。
6. 把 `document`、`provider`、`user`、`submitCommand` 等字段传给 `OfficeExcel`。
7. 如果协同模式需要图片、背景图、水印或导入图片，继续实现 `uploadAsset` 和 `resolveAsset`。

### 完整示例：y-websocket + HTTP 命令通道

```vue
<script setup lang="ts">
import * as Y from 'yjs'
import { WebsocketProvider } from 'y-websocket'
import {
  OfficeExcel,
  type OfficeExcelCollaborationCommandEnvelope,
  type OfficeExcelCollaborationCommandResult,
  type OfficeExcelAssetContext,
  type OfficeExcelAssetReference,
} from '@norio-office/office-excel'

const serverWsUrl = 'ws://127.0.0.1:1234/collaboration'
const serverHttpUrl = 'http://127.0.0.1:1234'
const fileId = 'excel-demo-file-001'
const token = 'dev-token'
const user = {
  userId: 'user_001',
  userName: '张三',
  clientUniqueCode: 'browser-tab-001',
  color: '#3b82f6',
}

const ydoc = new Y.Doc()

const provider = new WebsocketProvider(
  serverWsUrl,
  fileId,
  ydoc,
  {
    params: {
      roomId: fileId,
      token,
      userId: user.userId,
      userName: user.userName,
      clientType: 'web',
      clientUniqueCode: user.clientUniqueCode,
      documentType: 'excel',
    },
  },
)

async function submitCommand(
  envelope: OfficeExcelCollaborationCommandEnvelope,
): Promise<OfficeExcelCollaborationCommandResult> {
  const response = await fetch(`${serverHttpUrl}/excel-collaboration/commands`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
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
    throw new Error(result.reason || `命令提交失败：${response.status}`)
  }

  // 注意：不要因为 result.accepted === false 就 throw。
  // command.reject 是正常业务拒绝，返回给组件后组件会清理 pending 并回滚本地乐观修改。
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
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: form,
  })
  const result = await response.json()
  if (!response.ok || result.code !== 200) {
    throw new Error(result.message || '资源上传失败')
  }

  return result.data
}

async function resolveAsset(asset: OfficeExcelAssetReference) {
  const response = await fetch(`/office-assets/${asset.assetId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  if (!response.ok) {
    throw new Error(`资源解析失败：${response.status}`)
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
    @collaboration-command-ack="(payload) => console.log('协同命令确认', payload)"
    @collaboration-command-reject="(payload) => console.warn('协同命令拒绝', payload)"
  />
</template>
```

示例字段说明：

| 字段 | 说明 |
| --- | --- |
| `serverWsUrl` | 协同 WebSocket 地址，传给 `WebsocketProvider`。 |
| `serverHttpUrl` | 协同 HTTP 地址，`submitCommand` 用它提交命令。 |
| `fileId` | 当前业务文件 ID。本示例同时作为 `roomId` 和 `workbookId` 使用。 |
| `token` | 业务系统签发的访问凭证。WebSocket、命令提交、资源上传下载建议使用同一套 token。 |
| `user.userId` | 当前登录用户 ID。用于识别“谁在编辑”。 |
| `user.userName` | 当前登录用户展示名。用于远端选区、在线用户、日志。 |
| `user.clientUniqueCode` | 当前客户端实例 ID。同一个用户开多个窗口时必须不同。 |
| `ydoc` | 当前协同文档。组件会把工作簿镜像写入它，也会读取远端同步回来的更新。 |
| `provider` | `y-websocket` provider。负责连接服务端、同步 Yjs update 和 awareness。 |
| `submitCommand` | 把组件生成的 Excel 语义命令提交给后端。 |
| `uploadAsset` | 协同模式下上传图片等大资源。没有图片协同时可以不传。 |
| `resolveAsset` | 协同模式导出 Excel 时，根据资源引用换回真实图片。没有图片协同时可以不传。 |

### `submitCommand` 收到的 envelope

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

`OfficeExcelCollaborationCommandEnvelope` 字段：

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| `type` | `'command.submit'` | envelope 类型。本地提交固定为 `command.submit`。 |
| `requestId` | `string` | 本次提交请求 ID。服务端应优先用它做幂等；重复 `requestId` 建议返回上一次处理结果。 |
| `clientId` | `string` | 当前客户端实例 ID，对应 `collaboration.clientId`。 |
| `workbookId` | `string` | 工作簿 ID，对应 `collaboration.workbookId`。 |
| `sheetId` | `string` | 命令关联的工作表 ID。部分工作簿级命令可能为空。 |
| `localCommandId` | `string` | 组件内部本地命令 ID，例如 `cell.set-value`、`structure.insert-row-above`、`sheet.rename`。 |
| `command` | `{ type: string; opId: string; ... }` | 发送给服务端的语义命令正文。不同命令字段不同，服务端应按 `command.type` 解析。 |

`command` 常见字段：

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| `type` | `string` | 服务端语义命令类型，例如 `cell.set-value`、`row.insert-above`、`structure.merge-range`。 |
| `opId` | `string` | 本次操作 ID，可用于日志追踪和去重辅助。 |
| `sheetId` | `string` | 命令目标工作表。 |
| `rowId` / `colId` | `string` | 稳定行列 ID。协同结构操作不应长期依赖数字行列号。 |
| `startRowId` / `endRowId` | `string` | 区域起止行稳定 ID。 |
| `startColId` / `endColId` | `string` | 区域起止列稳定 ID。 |
| `payload` | `object` | 部分命令会把原始参数放在 `payload` 中，服务端需要兼容平铺字段和嵌套 payload。 |

### 服务端命令结果

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

`OfficeExcelCollaborationCommandAck` 字段：

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| `type` | `'command.ack'` | 服务端确认类型，固定为 `command.ack`。 |
| `requestId` | `string` | 对应提交时的 `requestId`。组件用它清理 pending 命令。 |
| `opId` | `string` | 对应 `command.opId`，可选但建议返回，方便日志排查。 |
| `workbookId` | `string` | 当前工作簿 ID。 |
| `accepted` | `true` | 是否接受命令。ack 固定为 `true`。 |
| `serverSeq` | `number` | 服务端顺序号，可选。建议服务端返回，方便排查命令顺序。 |

`OfficeExcelCollaborationCommandReject` 字段：

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| `type` | `'command.reject'` | 服务端拒绝类型，固定为 `command.reject`。 |
| `requestId` | `string` | 对应提交时的 `requestId`。组件用它找到需要回滚的 pending 命令。 |
| `opId` | `string` | 对应 `command.opId`，可选但建议返回。 |
| `workbookId` | `string` | 当前工作簿 ID。 |
| `accepted` | `false` | 是否接受命令。reject 固定为 `false`。 |
| `code` | `'INVALID_COMMAND' \| 'STALE_TARGET' \| 'CONFLICT' \| 'SERVER_ERROR'` | 拒绝原因代码。组件会把它透传给事件。 |
| `reason` | `string` | 面向开发和用户提示的拒绝原因。建议后端返回清晰中文或可翻译文案。 |

reject code 建议含义：

| code | 中文说明 | 常见场景 |
| --- | --- | --- |
| `INVALID_COMMAND` | 命令无效 | 命令类型不支持、字段缺失、格式错误。 |
| `STALE_TARGET` | 目标已失效 | 目标 sheet、行、列、区域、合并范围已经被其他人删除或不存在。 |
| `CONFLICT` | 状态冲突 | 合并区域重叠、结构操作无法安全应用。 |
| `SERVER_ERROR` | 服务端异常 | 后端执行异常、网络层转为统一错误。 |

协同接入建议：

- `workbookId` 和 `clientId` 保持稳定。
- 服务端建议按 `requestId` 做幂等，`opId` 用于操作追踪。
- `submitCommand` 中不要因为 `result.accepted === false` 直接 `throw`，应把标准 `command.reject` 返回给组件。
- 如果命令结果通过异步 WebSocket 返回，宿主拿到结果后调用 `excelRef.value?.applyCollaborationCommandResult(result)` 回灌组件。
- 组件收到 reject 后会把该命令的本地乐观修改回滚到提交前快照，并触发 `collaboration-command-reject` 事件。
- 外部 provider 如果提供 Yjs awareness，组件会用于远端选区展示。
- 未启用协同时，`collab` tab 不显示。

### 本地双窗口测试

如果使用本仓库 playground，可以按下面方式测试。示例假设 playground 运行在 `http://127.0.0.1:5173`；如果该端口被其他项目占用，请替换为 Vite 实际启动端口。

第一个窗口：

```text
http://127.0.0.1:5173/?collab=1&room=excel-demo-file-001&server=ws://127.0.0.1:1234/collaboration&http=http://127.0.0.1:1234&token=dev-token&userId=user_001&name=Alice&clientUniqueCode=browser-tab-001
```

第二个窗口：

```text
http://127.0.0.1:5173/?collab=1&room=excel-demo-file-001&server=ws://127.0.0.1:1234/collaboration&http=http://127.0.0.1:1234&token=dev-token&userId=user_002&name=Bob&clientUniqueCode=browser-tab-002
```

测试时需要保证：

- 两个窗口使用相同的 `room`。
- 两个窗口使用不同的 `clientUniqueCode`。
- 后端 WebSocket 地址和 HTTP 地址都能访问。
- 页面 command 状态栏能看到 `submit`、`ack`、`reject` 计数。
- 无后端命令服务时仍可测试 raw Yjs 同步；要测试服务端权威命令，必须实现 `/excel-collaboration/commands`。
