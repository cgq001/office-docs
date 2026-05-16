---
title: API
outline: deep
---

# API

## Import

```ts
import {
  OfficeExcel,
  type OfficeExcelPublicApi,
  type OfficeExcelWorkbookSnapshot,
} from '@norio-office/office-excel'
```

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `modelValue` / `v-model` | `OfficeExcelWorkbookSnapshot \| null` | `null` | Full workbook data bound from outside. Passing `null` creates a default workbook. |
| `title` | `string` | `Online Spreadsheet` | Default workbook title and one source for export file names. |
| `sheetName` | `string` | `Sheet1` | Default sheet name, only used when no `modelValue` is provided. |
| `rowCount` | `number` | `40` | Initial row count for the default sheet. |
| `colCount` | `number` | `26` | Initial column count for the default sheet. |
| `mode` | `'tabs' \| 'menu'` | `tabs` | Toolbar display mode. |
| `readonly` | `boolean` | `false` | View-only mode. Allows selection, sheet switching, copy, and export. |
| `disabled` | `boolean` | `false` | Disables internal interaction. |
| `width` | `number \| string` | `undefined` | Component width. Numbers are treated as pixels. |
| `height` | `number \| string` | `undefined` | Component height. Numbers are treated as pixels. |
| `toolbar` | `OfficeExcelToolbarOptions \| null` | `null` | Toolbar visibility configuration. |
| `permissions` | `OfficeExcelPermissions \| null` | `null` | Feature permissions. |
| `backgroundImages` | `OfficeExcelBackgroundImage[]` | `[]` | External background image list. |
| `collaboration` | `OfficeExcelCollaborationOptions \| null` | `null` | Optional collaboration configuration. |

## Collaboration

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
  submitCommand?: (envelope: OfficeExcelCollaborationCommandEnvelope) =>
    void | OfficeExcelCollaborationCommandResult | Promise<void | OfficeExcelCollaborationCommandResult>
  uploadAsset?: (file: File, context: OfficeExcelAssetContext) => Promise<OfficeExcelAssetReference>
  resolveAsset?: (asset: OfficeExcelAssetReference, context: OfficeExcelAssetContext) => Promise<OfficeExcelResolvedAsset>
}
```

| Field | Description |
| --- | --- |
| `enabled` | Enables the collaboration integration. When false, the component runs as a local single-user spreadsheet. |
| `workbookId` | Stable workbook or room ID. Keep it identical for all clients opening the same file. |
| `clientId` | Stable client instance ID. The same user opening two windows must use two different values. |
| `document` | External `Y.Doc`. The component writes the workbook mirror into it and reads remote Yjs updates back. |
| `provider` | External Yjs provider. The component uses `provider.awareness` for remote selections and online user state. |
| `submitCommand` | Submits local semantic commands to the backend. It can return `command.ack` or `command.reject`. |
| `uploadAsset` | Uploads large assets such as images in collaboration mode. Avoid writing base64 blobs directly into Y.Doc. |
| `resolveAsset` | Resolves asset references into real binary content when exporting `.xlsx`. |

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

Return standard `command.reject` results to the component instead of throwing. The component clears pending state, rolls back the optimistic local change, and emits `collaboration-command-reject`.

## Toolbar

```ts
type OfficeExcelToolbarTabId =
  | 'start'
  | 'insert'
  | 'data'
  | 'formula'
  | 'collab'
  | 'view'
  | 'efficiency'

interface OfficeExcelToolbarOptions {
  visibleTabs?: OfficeExcelToolbarTabId[]
  hiddenTabs?: OfficeExcelToolbarTabId[]
  visibleCommands?: string[]
  hiddenCommands?: string[]
}
```

Common tab IDs: `start`, `insert`, `data`, `formula`, `collab`, `view`, `efficiency`.

Common command IDs include `copy`, `cut`, `paste`, `font-size`, `font-color`, `fill-color`, `bold`, `italic`, `underline`, `download`, `image`, `watermark`, `filter`, `sort`, `import-data`, `zoom`, `gridlines`, `background`, and `export-image`.

## Permissions

```ts
interface OfficeExcelPermissions {
  edit?: boolean
  import?: boolean
  export?: boolean
  manageSheets?: boolean
  insertImages?: boolean
  insertCharts?: boolean
  format?: boolean
}
```

| Permission | Effect when `false` |
| --- | --- |
| `edit` | Disables cell content editing and write operations. |
| `import` | Disables internal import entry and `importExcel`. |
| `export` | Disables internal export entry, `exportExcel`, and `downloadJson`. |
| `manageSheets` | Disables sheet creation, copy, rename, move, delete, hide, pin, and protect actions. |
| `insertImages` | Disables image insertion. |
| `insertCharts` | Disables chart insertion. |
| `format` | Disables font, color, border, style template, and number formatting features. |

## Events

| Event | Payload | Timing |
| --- | --- | --- |
| `update:modelValue` | `OfficeExcelWorkbookSnapshot` | Emits the current workbook for `v-model`. |
| `change` | `OfficeExcelChangePayload` | Workbook content changes. |
| `selection-change` | `OfficeExcelSelectionRange` | Current selection changes. |
| `ready` | `OfficeExcelReadyPayload` | Component initialization is complete. |
| `error` | `OfficeExcelErrorPayload` | Import, export, load, or runtime errors. |
| `active-sheet-change` | `OfficeExcelActiveSheetChangePayload` | Active sheet changes. |
| `cell-click` | `OfficeExcelCellEventPayload` | Cell click. |
| `cell-dblclick` | `OfficeExcelCellEventPayload` | Cell double click. |
| `cell-edit-start` | `OfficeExcelCellEditEventPayload` | Cell editing starts. |
| `cell-edit-end` | `OfficeExcelCellEditEventPayload` | Cell editing ends. |
| `before-export` | `OfficeExcelBeforeExportPayload` | Before Excel export starts. |
| `after-export` | `OfficeExcelAfterExportPayload` | After Excel export succeeds. |
| `before-import` | `OfficeExcelBeforeImportPayload` | Before Excel import starts. |
| `after-import` | `OfficeExcelAfterImportPayload` | After Excel import succeeds. |
| `collaboration-command-ack` | `OfficeExcelCollaborationCommandAck` | A collaboration command is accepted by the server. |
| `collaboration-command-reject` | `OfficeExcelCollaborationCommandReject` | A collaboration command is rejected and optimistic local changes are rolled back. |
| `collaboration-error` | `OfficeExcelErrorPayload` | Collaboration command submission or asset handling fails unexpectedly. |

## Instance API

```ts
interface OfficeExcelPublicApi {
  importExcel: (source: OfficeExcelImportExcelInput, options?: OfficeExcelImportExcelOptions) => Promise<OfficeExcelWorkbookSnapshot>
  exportExcel: (options?: OfficeExcelExportExcelOptions | string) => Promise<string>
  exportJson: () => OfficeExcelWorkbookSnapshot
  downloadJson: (options?: OfficeExcelDownloadJsonOptions | string) => string
  getWorkbook: () => OfficeExcelWorkbookSnapshot
  setWorkbook: (workbook: OfficeExcelWorkbookSnapshot, options?: OfficeExcelLoadWorkbookOptions) => void
  serialize: () => string
  load: (snapshot: string | OfficeExcelWorkbookSnapshot, options?: OfficeExcelLoadWorkbookOptions) => void
  getSelection: () => OfficeExcelSelectionRange
  setSelection: (selection: OfficeExcelSelectionRange) => void
  applyCollaborationCommandResult: (result: OfficeExcelCollaborationCommandResult) => void
  getPlainText: {
    (): OfficeExcelPlainTextSheetData[]
    (sheetId: string): string[][]
  }
  getActiveSheetData: () => string[][]
}
```

`importExcel` supports `Blob`, `ArrayBuffer`, and `ArrayBufferView`. `exportExcel` downloads `.xlsx`. `exportJson` returns data without downloading. `downloadJson` downloads a JSON snapshot. `getPlainText()` returns plain text only and does not include styles, merged cells, images, charts, or watermarks.

## Data Model

```ts
type OfficeExcelWorkbookSnapshot = OfficeExcelWorkbook

interface OfficeExcelWorkbook {
  title: string
  sheets: OfficeExcelSheet[]
  activeSheetId: string
  watermark: OfficeExcelWatermarkSettings | null
}
```

The workbook snapshot is the persistence format used by `v-model`. For long-term storage, prefer saving the whole snapshot instead of manually constructing many internal cell keys.
