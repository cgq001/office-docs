---
title: Demo 演示
outline: deep
---

# Demo 演示

表格组件可以直接嵌入业务页面。组件默认撑满父容器，因此演示页或业务容器需要给出明确高度。

## 基础演示

```vue
<script setup lang="ts">
import { ref } from 'vue'
import {
  OfficeExcel,
  type OfficeExcelWorkbookSnapshot,
} from '@norio-office/office-excel'
import '@norio-office/office-excel/style.css'

const workbook = ref<OfficeExcelWorkbookSnapshot | null>(null)
</script>

<template>
  <div class="excel-demo">
    <OfficeExcel v-model="workbook" title="业务表格" mode="tabs" />
  </div>
</template>

<style scoped>
.excel-demo {
  height: 640px;
}
</style>
```

## 只读预览

```vue
<OfficeExcel
  v-model="workbook"
  readonly
  :toolbar="{ visibleTabs: ['start', 'view'] }"
  :permissions="{ export: true }"
/>
```

只读模式允许选择、切换 sheet、复制和导出，但会阻止编辑、格式、结构变更等写操作。

## 完全禁用

```vue
<OfficeExcel v-model="workbook" disabled />
```

`disabled` 会阻止选区、编辑、导入、菜单等组件内交互，适合只展示一个不可操作的表格视图。

## 隐藏导入导出

```vue
<OfficeExcel
  v-model="workbook"
  :permissions="{ import: false, export: false }"
  :toolbar="{ hiddenCommands: ['download', 'import-data', 'export-image'] }"
/>
```

## 只开放数据查看和筛选

```vue
<OfficeExcel
  v-model="workbook"
  readonly
  :toolbar="{
    visibleTabs: ['data', 'view'],
    visibleCommands: [
      'filter',
      'filter-apply',
      'filter-clear',
      'sort',
      'sort-asc',
      'sort-desc',
      'sort-clear',
      'gridlines',
      'zoom',
      'zoom-100',
      'zoom-125',
    ]
  }"
/>
```

## 导入导出

组件内按钮：

- `开始 / 下载` 会导出 Excel。
- `数据 / 导入数据` 会打开本地文件选择器。
- `定制 / 导出图片` 会导出当前多单元格选区为图片。

外部按钮：

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

`silent: true` 时不显示组件内导出成功或失败提示，适合业务侧自行接管提示。

## 保存和恢复

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

## 错误处理

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
