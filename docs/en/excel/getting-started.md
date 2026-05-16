---
title: Getting Started
outline: deep
---

# Getting Started

## Install

```bash
npm install @norio-office/office-excel
```

The package entry imports the default styles automatically:

```ts
import { OfficeExcel } from '@norio-office/office-excel'
```

If your build pipeline does not include package styles automatically, import them explicitly:

```ts
import '@norio-office/office-excel/style.css'
```

`vue` and `yjs` are peer dependencies. Vue must satisfy `^3.5.0`.

## Basic Usage

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

`v-model` binds the full workbook snapshot. If `modelValue` is not provided on first mount, the component creates a default workbook from `title`, `sheetName`, `rowCount`, and `colCount`, then emits `update:modelValue`.

## Container Size

The root node defaults to `width: 100%` and `height: 100%`. Usually the host only needs to provide an explicit parent height:

```vue
<div style="height: 640px">
  <OfficeExcel v-model="workbook" />
</div>
```

You can also pass `width` / `height` directly. Numbers are treated as pixels; strings are used as CSS sizes:

```vue
<OfficeExcel v-model="workbook" :height="640" width="100%" />
```

## Toolbar

```vue
<OfficeExcel mode="tabs" />
<OfficeExcel mode="menu" />
```

`visibleTabs` / `visibleCommands` are allowlists. `hiddenTabs` / `hiddenCommands` are blocklists. If both exist, the allowlist is applied first and the blocklist is applied after that.

```vue
<OfficeExcel
  :toolbar="{
    visibleTabs: ['start', 'data', 'view'],
    hiddenCommands: ['image', 'bar-chart', 'watermark']
  }"
/>
```

## Permissions

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

Permission fields are allowed by default. Passing `false` disables the corresponding capability. `disabled` has the highest priority; `readonly` is intended for viewing and still allows selection, sheet switching, copy, and export.
