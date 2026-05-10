<script setup lang="ts">
import { onMounted, ref, shallowRef } from 'vue'
import type { JSONContent } from '@tiptap/core'
import type { RichTextEditorInstance } from '@norio-office/rich-text'

const editorComponent = shallowRef<unknown>(null)
const editorRef = ref<RichTextEditorInstance | null>(null)
const loading = ref(true)
const loadError = ref('')
const content = ref<JSONContent | null>({
  type: 'doc',
  content: [
    {
      type: 'heading',
      attrs: { level: 1 },
      content: [{ type: 'text', text: 'Office Word Demo' }]
    },
    {
      type: 'paragraph',
      content: [{ type: 'text', text: 'Type here and verify the editor is interactive.' }]
    }
  ]
})

onMounted(async () => {
  try {
    const mod = await import('@norio-office/rich-text')
    editorComponent.value = mod.RichTextEditor
  } catch (error) {
    loadError.value = error instanceof Error ? error.message : 'Failed to load editor'
  } finally {
    loading.value = false
  }
})
</script>

<template>
  <div class="office-editor-demo">
    <div v-if="loading" class="office-editor-demo__state">
      Loading editor...
    </div>

    <div v-else-if="loadError" class="office-editor-demo__state office-editor-demo__state--error">
      <strong>Editor failed to load.</strong>
      <span>{{ loadError }}</span>
    </div>

    <div v-else class="office-editor-demo__frame">
      <component
        :is="editorComponent"
        ref="editorRef"
        v-model="content"
        :editable="true"
        placeholder="Start typing..."
      />
    </div>
  </div>
</template>
