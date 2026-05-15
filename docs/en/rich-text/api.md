---
title: API
outline: deep
---

# API

## Props

- `modelValue?: JSONContent | null`
- `editable?: boolean`
- `mode?: 'edit' | 'preview'`
- `outlinePlacement?: 'left' | 'right'`
- `messages?: Partial<Record<string, string>> | null`
- `enabledExportItems?: ('pdf' | 'html' | 'image' | 'print')[] | null`
- `enabledInsertMenuItems?: ('image' | 'video' | 'table' | 'local-file' | 'columns' | 'highlight-block' | 'date' | 'code-block' | 'formula' | 'blockquote' | 'emoji' | 'link' | 'divider' | 'countdown' | 'markdown-import')[] | null`
- `enabledToolbarActions?: ('blockquote')[] | null`
- `placeholder?: string`
- `collaboration?: RichTextEditorCollaborationOptions | null`

## Messages

The editor UI stays in Chinese by default. Use `messages` to override only the keys you need.

```vue
<RichTextEditor
  v-model="content"
  :messages="{
    'insert.localFile': 'Attachment',
    'export.label': 'Download',
  }"
/>
```

Available `messages` keys include:

- `insert.label`
- `insert.section.general`
- `insert.section.apps`
- `insert.section.external`
- `insert.image`
- `insert.video`
- `insert.table`
- `insert.localFile`
- `insert.columns`
- `insert.highlightBlock`
- `insert.date`
- `insert.codeBlock`
- `insert.formula`
- `insert.blockquote`
- `insert.emoji`
- `insert.link`
- `insert.divider`
- `insert.countdown`
- `insert.markdownImport`
- `export.label`
- `export.pdf`
- `export.pdf.loading`
- `export.html`
- `export.html.loading`
- `export.image`
- `export.image.loading`
- `print.label`
- `print.loading`
- `quote.apply`
- `quote.cancel`
- `quote.borderColor`
- `quote.backgroundColor`
- `outline.label`
- `outline.collapse`
- `outline.empty.description`
- `outline.empty.tip`
- `status.wordCountUnit`
- `status.presentation.enter`
- `status.presentation.exit`
- `status.fullscreen.enter`
- `status.fullscreen.exit`
- `countdown.selectTime`
- `countdown.settingsTitle`
- `formula.insertTitle`

## Events

- `update:modelValue`
- `change`
- `local-file-upload`
- `local-file-download`

## Instance Methods

- `exportPdf(): Promise<Blob | null>`
- `exportImage(options?): Promise<Blob | null>`
- `exportHtml(): string | null`
- `insertImage(payload | payload[]): boolean`
- `insertVideo(payload): boolean`
- `insertFile(payload): boolean`
- `insertLocalFile(payload): boolean`
- `openLocalFilePicker(): void`
- `focus(): void`
- `getJSON(): JSONContent | null`
