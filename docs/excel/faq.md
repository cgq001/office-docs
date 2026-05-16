---
title: 常见问题
outline: deep
---

# 常见问题

## 为什么组件没有显示高度

`OfficeExcel` 默认 `width: 100%`、`height: 100%`，会撑满父级容器。如果父容器没有明确高度，组件就没有可用高度。给父容器设置高度，或直接传 `height`。

```vue
<div style="height: 640px">
  <OfficeExcel v-model="workbook" />
</div>
```

## 需要手动引入样式吗

包入口会自动引入默认样式：

```ts
import { OfficeExcel } from '@norio-office/office-excel'
```

如果宿主构建链没有自动带上组件包样式，也可以显式引入：

```ts
import '@norio-office/office-excel/style.css'
```

## peer dependencies 有哪些要求

`vue` 和 `yjs` 是 peer dependencies。Vue 版本要求为 `^3.5.0`。

## `v-model` 绑定的是什么

绑定的是完整工作簿快照 `OfficeExcelWorkbookSnapshot`。首次挂载时如果没有传入 `modelValue`，组件会按 `title`、`sheetName`、`rowCount`、`colCount` 创建默认工作簿，并通过 `update:modelValue` 同步给外部。

## `readonly` 和 `disabled` 有什么区别

`readonly` 是只读查看模式，允许选择、切换 sheet、复制和导出，但会阻止编辑、格式和结构变更。

`disabled` 是整体禁用交互，优先级最高，会阻止选区、编辑、导入、菜单等组件内交互。

## 工具栏白名单和黑名单同时传会怎样

`visibleTabs` / `visibleCommands` 是白名单；`hiddenTabs` / `hiddenCommands` 是黑名单。两者同时存在时，先满足白名单，再排除黑名单。

二级菜单命令也可以隐藏，例如 `sort-asc`、`sort-desc`、`filter-clear`、`freeze-first-row`、`view-freeze-clear`、`zoom-100`、`data-validation-clear` 等。函数菜单会按 `common-formula-SUM`、`logical-formula-IF` 这类格式生成。

## 权限不传时默认是什么

权限字段默认都是允许。只有显式传 `false` 时才会关闭对应能力。

实例 API 中 `importExcel`、`exportExcel`、`downloadJson` 会尊重对应权限；`getWorkbook`、`getPlainText`、`getSelection` 等读取方法不受限制。

## 如何隐藏导入导出

```vue
<OfficeExcel
  v-model="workbook"
  :permissions="{ import: false, export: false }"
  :toolbar="{ hiddenCommands: ['download', 'import-data', 'export-image'] }"
/>
```

## 背景图片为什么要业务侧传入

背景图片通常属于业务资产，组件只内置纯色和渐变背景。业务侧通过 `backgroundImages` 传入图片，可以更好地控制资源来源、权限、缓存和品牌规范。

`id`、`name`、`url` 缺一不可，缺字段或空字符串会被忽略。不传或传空数组时，背景弹层不显示 `背景图` 分组，只显示纯色和渐变分组。

## 如何保存数据

常见保存方式有三种：

- 保存 `v-model` 得到的完整 `OfficeExcelWorkbookSnapshot`
- 通过实例 API 调用 `exportJson()` 或 `getWorkbook()`
- 调用 `serialize()` 保存 JSON 字符串

```ts
function save() {
  localStorage.setItem('office-excel-workbook', excelRef.value?.serialize() ?? '')
}

function restore() {
  const saved = localStorage.getItem('office-excel-workbook')
  if (saved) {
    excelRef.value?.load(saved, { history: false })
  }
}
```

## `exportJson` 和 `downloadJson` 有什么区别

`exportJson` 只返回数据，不触发下载，也不受导出权限限制。

`downloadJson` 会下载文件，并受 `permissions.export` 影响。

## 如何只取表格文本

可以使用实例 API：

```ts
const activeSheetData = excelRef.value?.getActiveSheetData()
const allSheetsText = excelRef.value?.getPlainText()
const oneSheetText = excelRef.value?.getPlainText('sheet-id')
```

传入 `sheetId` 时，`getPlainText(sheetId)` 返回指定工作表的二维文本数组。找不到 `sheetId` 时会抛错。

纯文本只包含单元格显示文本，不会包含样式、合并、图片、图表、水印等元信息。

## 导入支持哪些数据源

`importExcel` 支持 `Blob`、`ArrayBuffer`、`ArrayBufferView` 等输入，常见来源包括本地 `File` 和接口返回的二进制数据。当前用于导入 `.xlsx` / `.xlsm`。

导入成功后会同步 `v-model`，触发 `before-import`、`after-import` 和 `change`。默认 `change.source` 是 `import`。

## 外部加载数据为什么建议 `history: false`

外部初始化、远端覆盖、导入等场景通常不是用户本地编辑行为，建议传 `history: false`，避免污染组件内部撤销历史。

```ts
excelRef.value?.load(savedSnapshotJson, {
  history: false,
  source: 'api',
})
```

## 协同模式会直接连接服务端吗

不会。当前版本提供协同前端接入层，本地命令会通过 `submitCommand` 交给外部服务。真实 WebSocket 服务端、广播、持久化、权限校验由宿主项目接入。

## 协同接入时哪些 ID 要稳定

`workbookId` 和 `clientId` 应保持稳定。服务端建议按 `requestId` / `opId` 做幂等。外部 provider 如果提供 Yjs awareness，组件会用于远端选区展示。

## 数据结构可以手动拼吗

可以理解公开类型，但不建议手写大量内部 cell key。`cells` 使用稀疏存储，只保存有值或有样式的单元格。外部更推荐通过完整快照持久化、导入导出或 `getPlainText` 等 API 使用数据。

## 发布前检查怎么跑

```bash
npm run typecheck
npm run build:all
npm run publish:dry-run
```

`publish:dry-run` 会先构建包，再在仓库根目录的 `npm/` 临时目录内准备发布内容，并执行 `npm publish --dry-run`。
