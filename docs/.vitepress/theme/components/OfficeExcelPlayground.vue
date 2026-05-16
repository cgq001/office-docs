<script setup lang="ts">
import { onMounted, ref, shallowRef } from 'vue'
import type { OfficeExcelWorkbookSnapshot } from '@norio-office/office-excel'

const excelComponent = shallowRef<unknown>(null)
const loading = ref(true)
const loadError = ref('')
const workbook = ref<OfficeExcelWorkbookSnapshot | null>(null)

onMounted(async () => {
  try {
    const mod = await import('@norio-office/office-excel')
    excelComponent.value = mod.OfficeExcel
  } catch (error) {
    loadError.value = error instanceof Error ? error.message : 'Failed to load spreadsheet'
  } finally {
    loading.value = false
  }
})
</script>

<template>
  <div class="office-editor-demo office-excel-demo">
    <div v-if="loading" class="office-editor-demo__state">
      Loading spreadsheet...
    </div>

    <div v-else-if="loadError" class="office-editor-demo__state office-editor-demo__state--error">
      <strong>Spreadsheet failed to load.</strong>
      <span>{{ loadError }}</span>
    </div>

    <div v-else class="office-editor-demo__frame office-excel-demo__frame">
      <component
        :is="excelComponent"
        v-model="workbook"
        title="表格 Demo"
        sheet-name="演示数据"
        :row-count="80"
        :col-count="24"
        mode="tabs"
      />
    </div>
  </div>
</template>
