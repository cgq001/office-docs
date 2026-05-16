---
title: 快速开始
outline: deep
---

# 快速开始

## 安装

```bash
npm install @norio-office/office-excel
```

包入口会自动引入默认样式：

```ts
import { OfficeExcel } from '@norio-office/office-excel'
```

如果宿主构建链没有自动带上组件包样式，也可以显式引入：

```ts
import '@norio-office/office-excel/style.css'
```

`vue` 和 `yjs` 是 peer dependencies。Vue 版本要求为 `^3.5.0`。

## 基础使用

```vue
<script setup lang="ts">
import { ref } from 'vue'
import {
  OfficeExcel,
  type OfficeExcelWorkbookSnapshot,
} from '@norio-office/office-excel'

const workbook = ref<OfficeExcelWorkbookSnapshot | null>(null)
</script>

<template>
  <div class="excel-shell">
    <OfficeExcel v-model="workbook" mode="tabs" />
  </div>
</template>

<style scoped>
.excel-shell {
  height: 640px;
}
</style>
```

`v-model` 绑定的是完整工作簿快照。首次挂载时如果没有传入 `modelValue`，组件会按 `title`、`sheetName`、`rowCount`、`colCount` 创建默认工作簿，并通过 `update:modelValue` 同步给外部。

## 容器尺寸

组件根节点默认 `width: 100%`、`height: 100%`，会自动撑满父级容器。业务侧通常只需要给父容器一个明确高度：

```vue
<template>
  <div style="height: 640px">
    <OfficeExcel v-model="workbook" />
  </div>
</template>
```

也可以直接传入 `width` / `height`。数字会按 `px` 处理，字符串会原样作为 CSS 尺寸使用：

```vue
<OfficeExcel v-model="workbook" :height="640" width="100%" />
```

## 完整示例

```vue
<script setup lang="ts">
import { computed, ref } from 'vue'
import {
  OfficeExcel,
  type OfficeExcelChangePayload,
  type OfficeExcelErrorPayload,
  type OfficeExcelPublicApi,
  type OfficeExcelWorkbookSnapshot,
} from '@norio-office/office-excel'
import bgUrl from './assets/bg/courtyard.png'

const excelRef = ref<OfficeExcelPublicApi | null>(null)
const workbook = ref<OfficeExcelWorkbookSnapshot | null>(null)

const backgroundImages = [
  { id: 'courtyard', name: '橙树庭院', url: bgUrl },
]

const toolbar = {
  hiddenTabs: ['collab'],
  hiddenCommands: ['image', 'watermark'],
}

const permissions = {
  import: true,
  export: true,
  edit: true,
  manageSheets: true,
  insertImages: false,
}

const activeSheetName = computed(() => {
  const snapshot = workbook.value
  return snapshot?.sheets.find((sheet) => sheet.id === snapshot.activeSheetId)?.name ?? ''
})

async function exportExcel() {
  await excelRef.value?.exportExcel({
    fileName: `${activeSheetName.value || '工作簿'}.xlsx`,
    silent: true,
  })
}

function logPlainText() {
  console.log(excelRef.value?.getPlainText())
}

function handleChange(payload: OfficeExcelChangePayload) {
  console.log('workbook changed from', payload.source)
}

function handleError(payload: OfficeExcelErrorPayload) {
  console.error(payload.source, payload.message, payload.error)
}
</script>

<template>
  <button type="button" @click="exportExcel">导出 Excel</button>
  <button type="button" @click="logPlainText">读取纯文本</button>

  <div style="height: 720px">
    <OfficeExcel
      ref="excelRef"
      v-model="workbook"
      title="业务数据"
      sheet-name="明细"
      :row-count="100"
      :col-count="30"
      mode="tabs"
      :toolbar="toolbar"
      :permissions="permissions"
      :background-images="backgroundImages"
      @change="handleChange"
      @error="handleError"
    />
  </div>
</template>
```

## 工具栏模式

```vue
<OfficeExcel mode="tabs" />
<OfficeExcel mode="menu" />
```

| mode | 说明 |
| --- | --- |
| `tabs` | 默认模式，顶部显示 `开始 / 插入 / 数据 / 公式 / 协作 / 查看 / 定制` 等 tabs。 |
| `menu` | 菜单按钮模式，顶部显示 `菜单` 入口，二级、三级、四级菜单独立展开，不切换 tabs。 |

## 工具栏裁剪

```vue
<OfficeExcel
  :toolbar="{
    visibleTabs: ['start', 'data', 'view'],
    hiddenCommands: ['image', 'bar-chart', 'watermark']
  }"
/>
```

`visibleTabs` / `visibleCommands` 是白名单；`hiddenTabs` / `hiddenCommands` 是黑名单。两者同时存在时，先满足白名单，再排除黑名单。

## 权限配置

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

权限字段默认都是允许。显式传 `false` 时会关闭对应能力。`disabled` 优先级最高；`readonly` 面向查看场景，仍允许选择、切换 sheet、复制和导出。

## 背景图片

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

`id`、`name`、`url` 缺一不可。`id` 用于保存当前 sheet 的背景选择，建议在业务数据中保持稳定。
