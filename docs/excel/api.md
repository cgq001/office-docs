---
title: API
outline: deep
---

# API

## 包导入

```ts
import {
  OfficeExcel,
  type OfficeExcelPublicApi,
  type OfficeExcelWorkbookSnapshot,
} from '@norio-office/office-excel'
```
## Props

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `modelValue` / `v-model` | `OfficeExcelWorkbookSnapshot \| null` | `null` | 外部绑定的完整工作簿数据。传 `null` 时组件会创建默认工作簿。 |
| `title` | `string` | `在线表格` | 默认工作簿标题，也会作为默认导出文件名来源之一。 |
| `sheetName` | `string` | `Sheet1` | 默认工作表名称，仅在没有 `modelValue` 时用于初始化。 |
| `rowCount` | `number` | `40` | 默认工作表初始化行数，仅在没有 `modelValue` 时生效。 |
| `colCount` | `number` | `26` | 默认工作表初始化列数，仅在没有 `modelValue` 时生效。 |
| `mode` | `'tabs' \| 'menu'` | `tabs` | 工具栏展示模式。 |
| `readonly` | `boolean` | `false` | 只读查看模式。允许选择、切换 sheet、复制和导出，阻止编辑、格式、结构变更等写操作。 |
| `disabled` | `boolean` | `false` | 整体禁用交互。会阻止选区、编辑、导入、菜单等组件内交互。 |
| `width` | `number \| string` | `undefined` | 组件宽度。不传时自动撑满父容器宽度。数字按 `px` 处理。 |
| `height` | `number \| string` | `undefined` | 组件高度。不传时自动撑满父容器高度。数字按 `px` 处理。 |
| `toolbar` | `OfficeExcelToolbarOptions \| null` | `null` | 工具栏可见性配置，可隐藏 tab 或命令，也可以只开放指定 tab/命令。 |
| `permissions` | `OfficeExcelPermissions \| null` | `null` | 功能权限配置，例如导入、导出、编辑、增删 sheet、插入图片、插入图表、格式化。 |
| `backgroundImages` | `OfficeExcelBackgroundImage[]` | `[]` | 外部传入的背景图列表。每项必须包含 `id`、`name`、`url`，缺字段会被忽略。 |
| `collaboration` | `OfficeExcelCollaborationOptions \| null` | `null` | 可选协同配置。开启后组件维护 Yjs 文档镜像，并把本地命令转换成外部服务可消费的 command envelope。 |

### mode

```vue
<OfficeExcel mode="tabs" />
<OfficeExcel mode="menu" />
```

| 值 | 说明 |
| --- | --- |
| `tabs` | 默认模式，顶部显示 `开始 / 插入 / 数据 / 公式 / 协作 / 查看 / 定制` 等 tabs。 |
| `menu` | 菜单按钮模式，顶部显示 `菜单` 入口，二级、三级、四级菜单独立展开，不切换 tabs。 |

### toolbar

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

| 字段 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `visibleTabs` | `OfficeExcelToolbarTabId[]` | `undefined` | tab 白名单。传入后只显示数组里的 tab。 |
| `hiddenTabs` | `OfficeExcelToolbarTabId[]` | `undefined` | tab 黑名单。传入后隐藏数组里的 tab。 |
| `visibleCommands` | `string[]` | `undefined` | 命令白名单。传入后只显示数组里的工具栏命令。父级命令和二级命令都按 `id` 判断。 |
| `hiddenCommands` | `string[]` | `undefined` | 命令黑名单。传入后隐藏数组里的工具栏命令。 |

`visibleTabs` / `visibleCommands` 是白名单；`hiddenTabs` / `hiddenCommands` 是黑名单。两者同时存在时，先满足白名单，再排除黑名单。

```vue
<OfficeExcel
  :toolbar="{
    visibleTabs: ['start', 'data', 'view'],
    hiddenCommands: ['image', 'bar-chart', 'watermark']
  }"
/>
```

常用 tab id：

| tab id | 展示名称 | 说明 |
| --- | --- | --- |
| `start` | 开始 | 复制、粘贴、格式、边框、冻结、下载等。 |
| `insert` | 插入 | 行列、单元格、符号、链接、图片、水印、图表、迷你图等。 |
| `data` | 数据 | 筛选、排序、条件格式、分列、分组、数据验证、导入数据等。 |
| `formula` | 公式 | 常用函数、财务、逻辑、文本、日期时间、查找引用等。 |
| `collab` | 协作 | 仅在 `collaboration.enabled` 为 `true` 时显示。 |
| `view` | 查看 | 冻结、高亮行列、缩放、网格线、行高列宽、全屏等。 |
| `efficiency` | 定制 | 背景、导出图片等定制能力。 |

常用 command id：

| command id | 所属 tab | 说明 |
| --- | --- | --- |
| `copy` / `cut` / `paste` | `start` | 复制、剪切、粘贴。 |
| `format-painter` / `clear-style` | `start` | 格式刷、清除格式。 |
| `font-size` / `font-color` / `fill-color` | `start` | 字号、字体颜色、填充颜色。 |
| `bold` / `italic` / `underline` | `start` | 文本样式。 |
| `number-format` / `border` / `freeze` | `start` | 数字格式、边框、冻结。 |
| `cell-style` / `style-template` / `download` | `start` | 单元格样式、样式模板、下载 Excel。 |
| `row-column` / `cell-action` / `symbol` / `link` | `insert` | 行列、单元格、符号、链接。 |
| `image` / `watermark` | `insert` | 图片、水印。 |
| `bar-chart` / `horizontal-bar-chart` / `line-chart` / `area-chart` | `insert` | 柱状图、条形图、折线图、面积图。 |
| `pie-chart` / `radar-chart` / `combo-chart` / `scatter-chart` | `insert` | 饼图、雷达图、组合图、散点图。 |
| `sparkline` | `insert` | 迷你图。 |
| `filter` / `sort` / `conditional-format` | `data` | 筛选、排序、条件格式。 |
| `split` / `group` / `text-to-number` | `data` | 分列、分组、文本转数字。 |
| `data-validation` / `dropdown` / `checkbox` / `import-data` | `data` | 数据验证、下拉、复选框、导入数据。 |
| `common-formula` / `financial-formula` / `logical-formula` | `formula` | 常用函数、财务函数、逻辑函数。 |
| `text-formula` / `date-time-formula` / `lookup-reference-formula` | `formula` | 文本、日期时间、查找引用函数。 |
| `math-trig-formula` / `statistical-formula` / `engineering-formula` / `information-formula` / `database-formula` | `formula` | 数学三角、统计、工程、信息、数据库函数。 |
| `view-freeze` / `highlight-axis` / `zoom` | `view` | 查看模式下的冻结、高亮行列、缩放。 |
| `gridlines` / `gridline-color` / `row-column-size` / `fullscreen` | `view` | 网格线、网格线颜色、行高列宽、全屏。 |
| `background` / `export-image` | `efficiency` | 背景、导出图片。 |

二级菜单命令也可以隐藏，例如 `sort-asc`、`sort-desc`、`filter-clear`、`freeze-first-row`、`view-freeze-clear`、`zoom-100`、`data-validation-clear` 等。函数菜单会按 `common-formula-SUM`、`logical-formula-IF` 这类格式生成。

### permissions

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

权限字段默认都是允许。显式传 `false` 时会关闭对应能力：

```vue
<OfficeExcel
  readonly
  :permissions="{
    export: true,
    import: false,
    edit: false,
    manageSheets: false,
    insertImages: false,
    insertCharts: false,
    format: false
  }"
/>
```

| 字段 | 类型 | 默认值 | 设置为 `false` 时的影响范围 |
| --- | --- | --- | --- |
| `edit` | `boolean` | `true` | 禁止单元格内容编辑、清空内容、粘贴写入、数据验证、条件格式、排序筛选写入、结构变更等写操作。 |
| `import` | `boolean` | `true` | 禁止组件内导入入口和 `importExcel` 实例方法。 |
| `export` | `boolean` | `true` | 禁止组件内导出入口、`exportExcel` 和 `downloadJson`。 |
| `manageSheets` | `boolean` | `true` | 禁止新增、复制、重命名、移动、删除、隐藏、固定、保护 sheet 等管理操作。 |
| `insertImages` | `boolean` | `true` | 禁止插入图片。 |
| `insertCharts` | `boolean` | `true` | 禁止插入图表。 |
| `format` | `boolean` | `true` | 禁止字体、字号、颜色、边框、样式模板、数字格式等格式化能力。 |

`disabled` 优先级最高，会禁用组件内交互。`readonly` 面向查看场景，仍允许选择、切换 sheet、复制和导出。实例 API 中 `importExcel`、`exportExcel`、`downloadJson` 会尊重对应权限；`getWorkbook`、`getPlainText`、`getSelection` 等读取方法不受限制。

### backgroundImages

`定制 / 背景` 内置 9 个纯色背景和 9 个渐变背景。背景图片不再由组件内部预置，需要业务侧通过 `backgroundImages` 传入：

```vue
<script setup lang="ts">
import courtyardUrl from './assets/bg/courtyard.png'

const backgroundImages = [
  { id: 'courtyard', name: '橙树庭院', url: courtyardUrl },
  { id: 'window', name: '蓝窗花墙', url: '/images/window.png' },
]
</script>

<template>
  <OfficeExcel :background-images="backgroundImages" />
</template>
```

```ts
interface OfficeExcelBackgroundImage {
  id: string
  name: string
  url: string
}
```

| 字段 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `id` | `string` | 是 | 背景图唯一标识，用于记录当前 sheet 选择了哪张背景图。建议业务侧保持稳定，不要用会变化的临时 URL 当 id。 |
| `name` | `string` | 是 | 背景图展示名称，会显示在背景选择弹层里，也会用于图片 `alt` 文本。 |
| `url` | `string` | 是 | 背景图地址。可以是静态资源 import 后的 URL、远程图片 URL、base64 data URL 或对象地址。 |

规则：

- `id`、`name`、`url` 缺一不可，缺字段或空字符串会被忽略。
- `id` 用于保存当前 sheet 的背景选择，建议在业务数据中保持稳定。
- `url` 可以是打包后的静态资源 URL、远程图片 URL 或业务侧生成的对象地址。
- 不传或传空数组时，背景弹层不显示 `背景图` 分组，只显示纯色和渐变分组。

### collaboration

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

## Events API

| 事件 | 参数 | 触发时机 |
| --- | --- | --- |
| `update:modelValue` | `OfficeExcelWorkbookSnapshot` | 工作簿快照同步给外部，支持 `v-model`。 |
| `change` | `OfficeExcelChangePayload` | 工作簿内容变化。 |
| `selection-change` | `OfficeExcelSelectionRange` | 当前选区变化。 |
| `ready` | `OfficeExcelReadyPayload` | 组件初始化完成并完成首轮数据准备。 |
| `error` | `OfficeExcelErrorPayload` | 导入、导出、加载等错误统一抛出。 |
| `active-sheet-change` | `OfficeExcelActiveSheetChangePayload` | 当前工作表切换。 |
| `cell-click` | `OfficeExcelCellEventPayload` | 单击单元格。 |
| `cell-dblclick` | `OfficeExcelCellEventPayload` | 双击单元格。 |
| `cell-edit-start` | `OfficeExcelCellEditEventPayload` | 单元格进入编辑。 |
| `cell-edit-end` | `OfficeExcelCellEditEventPayload` | 单元格结束编辑。 |
| `before-export` | `OfficeExcelBeforeExportPayload` | 开始导出 Excel 前。 |
| `after-export` | `OfficeExcelAfterExportPayload` | 导出 Excel 成功后。 |
| `before-import` | `OfficeExcelBeforeImportPayload` | 开始导入 Excel 前。 |
| `after-import` | `OfficeExcelAfterImportPayload` | 导入 Excel 成功并替换工作簿后。 |

```vue
<OfficeExcel
  v-model="workbook"
  @ready="({ activeSheetId }) => console.log('ready', activeSheetId)"
  @change="handleChange"
  @selection-change="handleSelectionChange"
  @error="handleError"
/>
```

### 事件类型

```ts
type OfficeExcelChangeSource = 'edit' | 'api' | 'import' | 'collab'
type OfficeExcelErrorSource = 'import' | 'export' | 'load' | 'runtime'

interface OfficeExcelChangePayload {
  workbook: OfficeExcelWorkbookSnapshot
  selection: OfficeExcelSelectionRange
  activeSheetId: string
  source: OfficeExcelChangeSource
}

interface OfficeExcelReadyPayload {
  workbook: OfficeExcelWorkbookSnapshot
  activeSheetId: string
}

interface OfficeExcelErrorPayload {
  source: OfficeExcelErrorSource
  message: string
  error: unknown
}

interface OfficeExcelActiveSheetChangePayload {
  activeSheetId: string
  previousActiveSheetId: string | null
  sheet: OfficeExcelSheet
}

interface OfficeExcelCellEventPayload {
  row: number
  col: number
  sheetId: string
  value: string
  displayValue: string
  event: MouseEvent
}

interface OfficeExcelCellEditEventPayload {
  row: number
  col: number
  sheetId: string
  value: string
}

interface OfficeExcelBeforeImportPayload {
  fileName: string
}

interface OfficeExcelAfterImportPayload {
  fileName: string
  workbook: OfficeExcelWorkbookSnapshot
}

interface OfficeExcelBeforeExportPayload {
  fileName: string
}

interface OfficeExcelAfterExportPayload {
  fileName: string
}
```

事件 payload 字段说明：

| 类型 | 字段 | 说明 |
| --- | --- | --- |
| `OfficeExcelChangePayload` | `workbook` | 变化后的完整工作簿快照，可直接用于外部保存。 |
| `OfficeExcelChangePayload` | `selection` | 变化发生时的当前选区。 |
| `OfficeExcelChangePayload` | `activeSheetId` | 当前激活工作表 ID。 |
| `OfficeExcelChangePayload` | `source` | 变化来源，见下方 `change.source` 表。 |
| `OfficeExcelReadyPayload` | `workbook` | 初始化完成后的工作簿快照。 |
| `OfficeExcelReadyPayload` | `activeSheetId` | 初始化完成后的激活工作表 ID。 |
| `OfficeExcelErrorPayload` | `source` | 错误来源，可能是 `import`、`export`、`load`、`runtime`。 |
| `OfficeExcelErrorPayload` | `message` | 可直接展示给用户的错误信息。 |
| `OfficeExcelErrorPayload` | `error` | 原始错误对象，便于业务侧记录日志。 |
| `OfficeExcelActiveSheetChangePayload` | `activeSheetId` | 切换后的工作表 ID。 |
| `OfficeExcelActiveSheetChangePayload` | `previousActiveSheetId` | 切换前的工作表 ID，初始场景可能为 `null`。 |
| `OfficeExcelActiveSheetChangePayload` | `sheet` | 切换后的工作表快照。 |
| `OfficeExcelCellEventPayload` | `row` | 单元格行号，从 `1` 开始。 |
| `OfficeExcelCellEventPayload` | `col` | 单元格列号，从 `1` 开始。 |
| `OfficeExcelCellEventPayload` | `sheetId` | 事件所属工作表 ID。 |
| `OfficeExcelCellEventPayload` | `value` | 单元格原始值。 |
| `OfficeExcelCellEventPayload` | `displayValue` | 单元格显示文本。 |
| `OfficeExcelCellEventPayload` | `event` | 原始 `MouseEvent`。 |
| `OfficeExcelCellEditEventPayload` | `row` / `col` | 编辑单元格位置，行列从 `1` 开始。 |
| `OfficeExcelCellEditEventPayload` | `sheetId` | 编辑所属工作表 ID。 |
| `OfficeExcelCellEditEventPayload` | `value` | 编辑开始或结束时的单元格值。 |
| `OfficeExcelBeforeImportPayload` | `fileName` | 即将导入的文件名；二进制来源未传文件名时可能为空字符串。 |
| `OfficeExcelAfterImportPayload` | `fileName` | 已导入的文件名。 |
| `OfficeExcelAfterImportPayload` | `workbook` | 导入后的完整工作簿快照。 |
| `OfficeExcelBeforeExportPayload` | `fileName` | 导出前计算出的目标文件名。 |
| `OfficeExcelAfterExportPayload` | `fileName` | 实际下载文件名。 |

`change.source` 的常见含义：

| source | 说明 |
| --- | --- |
| `edit` | 用户在组件内编辑、格式化、结构调整等。 |
| `api` | 外部通过 `setWorkbook` / `load` 写入。 |
| `import` | 外部或组件内导入 Excel。 |
| `collab` | 协同层回投远端变更。 |

## 实例 API

通过 `ref` 可以拿到组件对外暴露的方法：

```vue
<script setup lang="ts">
import { ref } from 'vue'
import {
  OfficeExcel,
  type OfficeExcelPublicApi,
  type OfficeExcelWorkbookSnapshot,
} from '@norio-office/office-excel'

const excelRef = ref<OfficeExcelPublicApi | null>(null)
const workbook = ref<OfficeExcelWorkbookSnapshot | null>(null)

async function exportExcel() {
  await excelRef.value?.exportExcel('demo.xlsx')
}
</script>

<template>
  <OfficeExcel ref="excelRef" v-model="workbook" />
  <button type="button" @click="exportExcel">导出 Excel</button>
</template>
```

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
  getPlainText: {
    (): OfficeExcelPlainTextSheetData[]
    (sheetId: string): string[][]
  }
  getActiveSheetData: () => string[][]
}
```

| 方法 | 参数 | 返回值 | 中文说明 |
| --- | --- | --- | --- |
| `importExcel(source, options?)` | `source` 是 Excel 文件或二进制数据；`options` 是导入配置。 | `Promise<OfficeExcelWorkbookSnapshot>` | 导入 `.xlsx` / `.xlsm`，解析后替换当前工作簿。受 `permissions.import` 影响。 |
| `exportExcel(options?)` | 可传文件名字符串，或 `{ fileName, silent }`。 | `Promise<string>` | 导出并下载 `.xlsx` 文件，返回实际下载文件名。受 `permissions.export` 影响。 |
| `exportJson()` | 无 | `OfficeExcelWorkbookSnapshot` | 返回当前完整工作簿快照，不触发下载，不受导出权限影响。 |
| `downloadJson(options?)` | 可传文件名字符串，或 `{ fileName, pretty }`。 | `string` | 下载当前工作簿 JSON 文件，返回实际下载文件名。受 `permissions.export` 影响。 |
| `getWorkbook()` | 无 | `OfficeExcelWorkbookSnapshot` | 获取当前完整工作簿快照，适合业务侧保存。 |
| `setWorkbook(workbook, options?)` | `workbook` 是完整快照；`options` 控制选区、历史和 change 来源。 | `void` | 用外部工作簿快照覆盖当前组件数据。 |
| `serialize()` | 无 | `string` | 将当前工作簿序列化为 JSON 字符串，适合存入数据库或 localStorage。 |
| `load(snapshot, options?)` | `snapshot` 是 JSON 字符串或完整快照；`options` 控制加载行为。 | `void` | 加载 JSON 字符串或工作簿快照。 |
| `getSelection()` | 无 | `OfficeExcelSelectionRange` | 获取当前选区。 |
| `setSelection(selection)` | `selection` 是要设置的选区。 | `void` | 设置当前选区。 |
| `getPlainText()` | 无 | `OfficeExcelPlainTextSheetData[]` | 获取整本工作簿所有工作表的纯文本二维数组。 |
| `getPlainText(sheetId)` | `sheetId` 是工作表 ID。 | `string[][]` | 获取指定工作表的纯文本二维数组。找不到 `sheetId` 时会抛错。 |
| `getActiveSheetData()` | 无 | `string[][]` | 获取当前工作表纯文本二维数组。 |

### importExcel

```ts
type OfficeExcelImportExcelInput = Blob | ArrayBuffer | ArrayBufferView

interface OfficeExcelImportExcelOptions extends OfficeExcelLoadWorkbookOptions {
  fileName?: string
  title?: string
  silent?: boolean
}
```

`OfficeExcelImportExcelOptions` 字段：

| 字段 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `fileName` | `string` | 从 `File.name` 读取，二进制输入为空 | 导入文件名。用于格式校验、事件 payload、默认标题推导和提示文案。 |
| `title` | `string` | 文件名去掉扩展名 | 导入后工作簿标题。 |
| `silent` | `boolean` | `false` | 是否关闭组件内成功/失败 toast。业务侧自行提示时建议传 `true`。 |
| `selection` | `OfficeExcelSelectionRange` | `A1` | 导入完成后恢复的选区。 |
| `history` | `boolean` | 由内部加载逻辑决定 | 是否写入撤销历史。外部初始化或远端覆盖时建议传 `false`。 |
| `source` | `'edit' \| 'api' \| 'import' \| 'collab'` | `import` | 导入触发 `change` 时使用的来源标记。 |

```ts
async function handleFileChange(event: Event) {
  const input = event.target as HTMLInputElement
  const file = input.files?.[0]
  if (!file) {
    return
  }

  await excelRef.value?.importExcel(file)
}
```

也可以传接口返回的二进制数据：

```ts
const response = await fetch('/api/workbook.xlsx')
const buffer = await response.arrayBuffer()

await excelRef.value?.importExcel(buffer, {
  fileName: 'workbook.xlsx',
  title: '业务数据',
  silent: true,
  history: false,
})
```

导入成功后会同步 `v-model`，触发 `before-import`、`after-import` 和 `change`。默认 `change.source` 是 `import`。

### exportExcel

```ts
interface OfficeExcelExportExcelOptions {
  fileName?: string
  silent?: boolean
}
```

`OfficeExcelExportExcelOptions` 字段：

| 字段 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `fileName` | `string` | 当前工作簿标题、首个 sheet 名称或默认文件名 | 导出的 `.xlsx` 文件名。 |
| `silent` | `boolean` | `false` | 是否关闭组件内成功/失败 toast。 |

```ts
await excelRef.value?.exportExcel('客户数据.xlsx')

await excelRef.value?.exportExcel({
  fileName: '客户数据.xlsx',
  silent: true,
})
```

`silent: true` 时不显示组件内导出成功或失败提示，适合业务侧自行接管 toast。

### JSON 快照

```ts
const snapshot = excelRef.value?.exportJson()
const json = excelRef.value?.serialize()

excelRef.value?.downloadJson({
  fileName: 'workbook.json',
  pretty: true,
})
```

`OfficeExcelDownloadJsonOptions` 字段：

| 字段 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `fileName` | `string` | 当前工作簿文件名加 `.json` | 下载的 JSON 文件名。 |
| `pretty` | `boolean` | `true` | 是否使用缩进格式化 JSON。传 `false` 时输出紧凑 JSON。 |

`exportJson` 只返回数据，不触发下载，也不受导出权限限制。`downloadJson` 会下载文件，并受 `permissions.export` 影响。

### 外部加载数据

```ts
interface OfficeExcelLoadWorkbookOptions {
  selection?: OfficeExcelSelectionRange
  history?: boolean
  source?: 'edit' | 'api' | 'import' | 'collab'
}
```

```ts
excelRef.value?.setWorkbook(nextWorkbook, {
  history: false,
  source: 'api',
})

excelRef.value?.load(savedSnapshotJson, {
  history: false,
  selection: {
    startRow: 1,
    endRow: 1,
    startCol: 1,
    endCol: 1,
    anchorRow: 1,
    anchorCol: 1,
    mode: 'cell',
  },
})
```

| 字段 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `selection` | `OfficeExcelSelectionRange` | 当前选区 | 加载后要恢复的选区，不传时沿用当前选区。 |
| `history` | `boolean` | 由内部加载逻辑决定 | 是否写入组件内部撤销历史。外部初始化、远端覆盖、导入时通常传 `false`。 |
| `source` | `'edit' \| 'api' \| 'import' \| 'collab'` | `api` | 本次加载触发 `change` 时使用的来源标记。 |

### 纯文本读取

当前数据结构里工作簿没有单独的 workbook id，工作表有稳定的 `sheet.id`。所以这里按 `sheetId` 取某张表；不传参数时取整本工作簿的所有工作表。

```ts
const workbook = excelRef.value?.getWorkbook()
const activeSheetText = workbook
  ? excelRef.value?.getPlainText(workbook.activeSheetId)
  : []

const allSheetsText = excelRef.value?.getPlainText()
const activeSheetData = excelRef.value?.getActiveSheetData()
```

返回结构：

```ts
interface OfficeExcelPlainTextSheetData {
  sheetId: string
  sheetName: string
  data: string[][]
}
```

`OfficeExcelPlainTextSheetData` 字段：

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| `sheetId` | `string` | 工作表 ID。 |
| `sheetName` | `string` | 工作表名称。 |
| `data` | `string[][]` | 工作表纯文本二维数组。第一层是行，第二层是列，行列顺序按表格位置排列。 |

纯文本只包含单元格显示文本。不会包含样式、合并、图片、图表、水印等元信息。

### 选区

```ts
interface OfficeExcelSelectionRange {
  startRow: number
  endRow: number
  startCol: number
  endCol: number
  anchorRow: number
  anchorCol: number
  mode: 'cell' | 'row' | 'col'
}
```

`OfficeExcelSelectionRange` 字段：

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| `startRow` | `number` | 选区起始行号，从 `1` 开始。 |
| `endRow` | `number` | 选区结束行号，从 `1` 开始。 |
| `startCol` | `number` | 选区起始列号，从 `1` 开始。 |
| `endCol` | `number` | 选区结束列号，从 `1` 开始。 |
| `anchorRow` | `number` | 当前活动单元格行号。 |
| `anchorCol` | `number` | 当前活动单元格列号。 |
| `mode` | `'cell' \| 'row' \| 'col'` | 选区类型：单元格区域、整行或整列。 |

行列索引从 `1` 开始。`anchorRow` / `anchorCol` 表示当前活动单元格。

```ts
excelRef.value?.setSelection({
  startRow: 2,
  endRow: 10,
  startCol: 1,
  endCol: 4,
  anchorRow: 2,
  anchorCol: 1,
  mode: 'cell',
})
```

## 数据结构

`OfficeExcelWorkbookSnapshot` 是组件对外持久化和 `v-model` 使用的数据结构。

```ts
type OfficeExcelWorkbookSnapshot = OfficeExcelWorkbook

interface OfficeExcelWorkbook {
  title: string
  sheets: OfficeExcelSheet[]
  activeSheetId: string
  watermark: OfficeExcelWatermarkSettings | null
}
```

`OfficeExcelWorkbook` 字段：

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| `title` | `string` | 工作簿标题。导出时可作为默认文件名来源。 |
| `sheets` | `OfficeExcelSheet[]` | 工作表数组。 |
| `activeSheetId` | `string` | 当前激活工作表 ID。 |
| `watermark` | `OfficeExcelWatermarkSettings \| null` | 工作簿水印配置。为 `null` 表示没有水印。 |

### 工作表

```ts
interface OfficeExcelSheet {
  id: string
  name: string
  tabColor: string | null
  protected: boolean
  hidden: boolean
  pinned: boolean
  rowCount: number
  colCount: number
  cells: Record<string, OfficeExcelCell>
  merges: OfficeExcelMerge[]
  hiddenRows: number[]
  hiddenCols: number[]
  rowGroups: OfficeExcelAxisGroup[]
  colGroups: OfficeExcelAxisGroup[]
  rowHeights: Record<number, number>
  colWidths: Record<number, number>
  defaultColWidth: number
  frozenRows: number
  frozenCols: number
  sortState: unknown | null
  filter: unknown | null
  validations: unknown[]
  conditionalFormats: unknown[]
  charts: unknown[]
  images: OfficeExcelFloatingImageObject[]
}
```

`OfficeExcelSheet` 核心字段：

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| `id` | `string` | 工作表稳定 ID。外部按工作表读取纯文本时使用它作为 `sheetId`。 |
| `name` | `string` | 工作表名称。 |
| `tabColor` | `string \| null` | sheet 标签颜色。为 `null` 表示默认颜色。 |
| `protected` | `boolean` | 是否保护工作表。保护后会限制编辑和结构操作。 |
| `hidden` | `boolean` | 是否隐藏工作表。 |
| `pinned` | `boolean` | 是否固定工作表标签位置。 |
| `rowCount` | `number` | 工作表总行数。 |
| `colCount` | `number` | 工作表总列数。 |
| `cells` | `Record<string, OfficeExcelCell>` | 稀疏单元格数据，只保存有值、样式或扩展信息的单元格。 |
| `merges` | `OfficeExcelMerge[]` | 合并单元格区域列表。 |
| `hiddenRows` | `number[]` | 隐藏行号列表，行号从 `1` 开始。 |
| `hiddenCols` | `number[]` | 隐藏列号列表，列号从 `1` 开始。 |
| `rowGroups` | `OfficeExcelAxisGroup[]` | 行分组列表。 |
| `colGroups` | `OfficeExcelAxisGroup[]` | 列分组列表。 |
| `rowHeights` | `Record<number, number>` | 自定义行高，key 是行号，value 是像素高度。 |
| `colWidths` | `Record<number, number>` | 自定义列宽，key 是列号，value 是像素宽度。 |
| `defaultColWidth` | `number` | 默认列宽，单位像素。 |
| `frozenRows` | `number` | 冻结行数。 |
| `frozenCols` | `number` | 冻结列数。 |
| `sortState` | `unknown \| null` | 排序状态。建议作为快照整体保存，不建议外部手写。 |
| `filter` | `unknown \| null` | 筛选状态。建议作为快照整体保存，不建议外部手写。 |
| `validations` | `unknown[]` | 数据验证规则。建议通过组件交互生成。 |
| `conditionalFormats` | `unknown[]` | 条件格式规则。建议通过组件交互生成。 |
| `charts` | `unknown[]` | 图表对象列表。建议作为快照整体保存。 |
| `images` | `OfficeExcelFloatingImageObject[]` | 浮动图片对象列表。 |

上面是对外理解数据结构时最常用的核心字段示意；实际 `OfficeExcelSheet` 类型中还包含筛选、条件格式、图表等更细字段。`cells` 使用稀疏存储，只保存有值或有样式的单元格。key 由组件内部生成，外部更推荐通过 `getPlainText`、导入导出或完整快照持久化来使用，不建议手写大量 cell key。

### 单元格

```ts
interface OfficeExcelCell {
  row: number
  col: number
  value: string
  style?: CellStyle
  hyperlink?: OfficeExcelCellHyperlink
  cellFormatType?: string | null
  cellDataFormat?: unknown
  sparkline?: unknown
  image?: unknown
}
```

`OfficeExcelCell` 字段：

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| `row` | `number` | 单元格行号，从 `1` 开始。 |
| `col` | `number` | 单元格列号，从 `1` 开始。 |
| `value` | `string` | 单元格原始输入值。公式、数字格式、日期格式会在显示阶段转换。 |
| `style` | `CellStyle` | 单元格样式。 |
| `hyperlink` | `OfficeExcelCellHyperlink` | 单元格超链接。 |
| `cellFormatType` | `string \| null` | 单元格格式类型，例如下拉、复选框、日期、数字等。 |
| `cellDataFormat` | `unknown` | 单元格格式的详细配置。建议作为快照保存。 |
| `sparkline` | `unknown` | 迷你图配置。建议作为快照保存。 |
| `image` | `unknown` | 单元格内图片配置。建议作为快照保存。 |

`value` 是原始输入值。公式、格式化数字、日期等最终显示文本可通过 `getPlainText` 或 `getActiveSheetData` 获取。

### 样式

```ts
interface CellStyle {
  bold?: boolean
  italic?: boolean
  underline?: boolean
  strikethrough?: boolean
  fontFamily?: string
  fontSize?: number
  numberFormat?: NumberFormat
  customNumberFormatCode?: string
  decimalPlaces?: number
  useThousandsSeparator?: boolean
  horizontalAlign?: HorizontalAlign
  verticalAlign?: VerticalAlign
  wrapText?: boolean
  foregroundColor?: string
  backgroundColor?: string
  borderTopStyle?: CellBorderLineStyle | null
  borderRightStyle?: CellBorderLineStyle | null
  borderBottomStyle?: CellBorderLineStyle | null
  borderLeftStyle?: CellBorderLineStyle | null
  borderColor?: string
}
```

`CellStyle` 常用字段：

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| `bold` | `boolean` | 是否加粗。 |
| `italic` | `boolean` | 是否斜体。 |
| `underline` | `boolean` | 是否下划线。 |
| `strikethrough` | `boolean` | 是否删除线。 |
| `fontFamily` | `string` | 字体名称。 |
| `fontSize` | `number` | 字号。 |
| `numberFormat` | `NumberFormat` | 数字格式类型。 |
| `customNumberFormatCode` | `string` | 自定义数字格式代码。 |
| `decimalPlaces` | `number` | 小数位数。 |
| `useThousandsSeparator` | `boolean` | 是否使用千分位分隔。 |
| `horizontalAlign` | `HorizontalAlign` | 水平对齐方式。 |
| `verticalAlign` | `VerticalAlign` | 垂直对齐方式。 |
| `wrapText` | `boolean` | 是否自动换行。 |
| `foregroundColor` | `string` | 字体颜色。 |
| `backgroundColor` | `string` | 单元格背景色。 |
| `borderTopStyle` | `CellBorderLineStyle \| null` | 上边框线型。 |
| `borderRightStyle` | `CellBorderLineStyle \| null` | 右边框线型。 |
| `borderBottomStyle` | `CellBorderLineStyle \| null` | 下边框线型。 |
| `borderLeftStyle` | `CellBorderLineStyle \| null` | 左边框线型。 |
| `borderColor` | `string` | 边框颜色。 |

样式类型是公开类型，但建议外部优先把整个 `OfficeExcelWorkbookSnapshot` 当作持久化快照保存，而不是依赖内部渲染细节做局部拼装。

### 合并、图片、图表、水印

```ts
interface OfficeExcelMerge {
  startRow: number
  endRow: number
  startCol: number
  endCol: number
}

interface OfficeExcelFloatingImageObject {
  id: string
  dataUrl: string
  naturalWidth: number
  naturalHeight: number
  fileName?: string | null
  x: number
  y: number
  width: number
  height: number
}

interface OfficeExcelWatermarkSettings {
  text: string
  color: string
  fontSize: number
  rotation: number
  opacity: number
}
```

相关字段说明：

| 类型 | 字段 | 说明 |
| --- | --- | --- |
| `OfficeExcelMerge` | `startRow` / `endRow` | 合并区域起止行号，从 `1` 开始。 |
| `OfficeExcelMerge` | `startCol` / `endCol` | 合并区域起止列号，从 `1` 开始。 |
| `OfficeExcelFloatingImageObject` | `id` | 浮动图片 ID。 |
| `OfficeExcelFloatingImageObject` | `dataUrl` | 图片 data URL。 |
| `OfficeExcelFloatingImageObject` | `naturalWidth` / `naturalHeight` | 图片原始宽高。 |
| `OfficeExcelFloatingImageObject` | `fileName` | 图片文件名，可能为空。 |
| `OfficeExcelFloatingImageObject` | `x` / `y` | 图片在 sheet 内的位置。 |
| `OfficeExcelFloatingImageObject` | `width` / `height` | 图片显示宽高。 |
| `OfficeExcelWatermarkSettings` | `text` | 水印文字。 |
| `OfficeExcelWatermarkSettings` | `color` | 水印颜色。 |
| `OfficeExcelWatermarkSettings` | `fontSize` | 水印字号。 |
| `OfficeExcelWatermarkSettings` | `rotation` | 水印旋转角度。 |
| `OfficeExcelWatermarkSettings` | `opacity` | 水印透明度。 |

图表对象字段较多，当前建议把它当作工作簿快照的一部分整体保存和恢复。外部需要长期稳定地生成图表数据时，建议先在组件内创建一份示例快照，再按同结构生成；如果需要把图表字段作为长期稳定 API，请先把对应类型加入 `public-types.ts`。

## 导入导出

### 组件内按钮

- `开始 / 下载` 会导出 Excel。
- `数据 / 导入数据` 会打开本地文件选择器。
- `定制 / 导出图片` 会导出当前多单元格选区为图片。

### 外部按钮

```vue
<script setup lang="ts">
async function exportWorkbook() {
  await excelRef.value?.exportExcel('业务数据.xlsx')
}

async function importWorkbook(event: Event) {
  const file = (event.target as HTMLInputElement).files?.[0]
  if (file) {
    await excelRef.value?.importExcel(file, { silent: true })
  }
}
</script>

<template>
  <button type="button" @click="exportWorkbook">导出</button>
  <input type="file" accept=".xlsx,.xlsm" @change="importWorkbook" />
</template>
```

### 错误处理

导入、导出、加载失败会抛出异常，同时触发 `error` 事件：

```ts
async function safeImport(file: File) {
  try {
    await excelRef.value?.importExcel(file, { silent: true })
  } catch (error) {
    console.error('导入失败', error)
  }
}

function handleError(payload: OfficeExcelErrorPayload) {
  console.error(payload.source, payload.message)
}
```

## 公共类型

包入口只导出稳定 public types，不再直接 `export type * from './types'`。内部命令、网格渲染、上下文菜单等实现类型不会作为长期兼容 API 暴露。

```ts
import type {
  CellBorderLineStyle,
  CellStyle,
  HorizontalAlign,
  NumberFormat,
  OfficeExcelActiveSheetChangePayload,
  OfficeExcelBackgroundImage,
  OfficeExcelCell,
  OfficeExcelChangePayload,
  OfficeExcelCollaborationCommandEnvelope,
  OfficeExcelCollaborationOptions,
  OfficeExcelDownloadJsonOptions,
  OfficeExcelErrorPayload,
  OfficeExcelExportExcelOptions,
  OfficeExcelImportExcelInput,
  OfficeExcelImportExcelOptions,
  OfficeExcelLoadWorkbookOptions,
  OfficeExcelMode,
  OfficeExcelPermissions,
  OfficeExcelPlainTextSheetData,
  OfficeExcelProps,
  OfficeExcelPublicApi,
  OfficeExcelReadyPayload,
  OfficeExcelSelectionRange,
  OfficeExcelSheet,
  OfficeExcelToolbarOptions,
  OfficeExcelToolbarTabId,
  OfficeExcelWorkbookSnapshot,
  VerticalAlign,
} from '@norio-office/office-excel'
```

如果外部确实需要新的稳定类型，请先把它加入 `public-types.ts`，并同步更新本 README。
