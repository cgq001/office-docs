---
title: Demo
outline: deep
---

# Demo

## Basic Demo

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
    <OfficeExcel v-model="workbook" title="Business Spreadsheet" mode="tabs" />
  </div>
</template>

<style scoped>
.excel-demo {
  height: 640px;
}
</style>
```

## Readonly Preview

```vue
<OfficeExcel
  v-model="workbook"
  readonly
  :toolbar="{ visibleTabs: ['start', 'view'] }"
  :permissions="{ export: true }"
/>
```

## Hide Import And Export

```vue
<OfficeExcel
  v-model="workbook"
  :permissions="{ import: false, export: false }"
  :toolbar="{ hiddenCommands: ['download', 'import-data', 'export-image'] }"
/>
```

## Save And Restore

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

## Online Playground

Try the single-user interactive demo in [Playground](/en/excel/playground).
