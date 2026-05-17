---
title: FAQ
outline: deep
---

# FAQ

## Why Is The Component Not Visible

`OfficeExcel` defaults to `width: 100%` and `height: 100%`. If the parent container has no explicit height, the component has no available height. Set a parent height or pass the `height` prop.

```vue
<div style="height: 640px">
  <OfficeExcel v-model="workbook" />
</div>
```

## Do I Need To Import Styles Manually

The package entry imports default styles automatically:

```ts
import { OfficeExcel } from '@norio-office/office-excel'
```

If your build chain does not include the styles, import them explicitly:

```ts
import '@norio-office/office-excel/style.css'
```

## What Does `v-model` Bind

It binds the full `OfficeExcelWorkbookSnapshot`. If `modelValue` is not provided on first mount, the component creates a default workbook and emits `update:modelValue`.

## What Is The Difference Between `readonly` And `disabled`

`readonly` is a view-only mode. It still allows selection, sheet switching, copy, and export, but blocks editing, formatting, and structural changes.

`disabled` disables internal interaction and has higher priority.

## How Do I Hide Import And Export

```vue
<OfficeExcel
  v-model="workbook"
  :permissions="{ import: false, export: false }"
  :toolbar="{ hiddenCommands: ['download', 'import-data', 'export-image'] }"
/>
```

## How Do I Save Data

You can save the full `OfficeExcelWorkbookSnapshot`, call `exportJson()` / `getWorkbook()`, or call `serialize()` and persist the JSON string.

## How Do I Read Plain Text

```ts
const activeSheetData = excelRef.value?.getActiveSheetData()
const allSheetsText = excelRef.value?.getPlainText()
const oneSheetText = excelRef.value?.getPlainText('sheet-id')
```

Plain text includes displayed cell text only. It does not include styles, merged cells, images, charts, or watermarks.

## Does Collaboration Connect To A Server Directly

No. The component only provides the frontend integration layer. The host application creates the `Y.Doc` and the `y-websocket` provider. Spreadsheet semantic commands should normally reuse the same WebSocket through `createOfficeExcelYWebSocketCommandAdapter(provider)` and use the `messageType=100` command channel.

Collaboration commands no longer use an HTTP command endpoint. HTTP can still be used for image, background, watermark, attachment, and other asset upload/download flows.

## Which IDs Must Stay Stable In Collaboration

`workbookId` / `roomId` must be identical for all users opening the same workbook. `clientId` / `clientUniqueCode` must be different when the same user opens multiple browser tabs.

Use `requestId` for command idempotency and `opId` for operation tracing. Lock and claim features also use the same command channel; the backend should dispatch by `command.type`, such as `cell-lock.set`, `cell-lock.clear`, `cell-claim.acquire`, and `cell-claim.release`.

## How Should Command Rejection Be Handled

Return a standard `command.reject` result from `submitCommand` instead of throwing for normal business rejection. The component will clear pending state, roll back the optimistic local change, and emit `collaboration-command-reject`.

Use thrown errors for unexpected failures such as network errors or backend exceptions.

## Why Are `uploadAsset` And `resolveAsset` Needed

In collaboration mode, large image-like assets should not be written into Y.Doc as base64. Use `uploadAsset` to upload images, background images, or watermarks to your business asset service, and use `resolveAsset` to turn asset references back into real binary content when exporting `.xlsx`.
