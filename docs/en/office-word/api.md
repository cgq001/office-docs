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
- `enabledExportItems?: ('pdf' | 'html' | 'image' | 'print')[] | null`
- `enabledInsertMenuItems?: ('image' | 'video' | 'table' | 'local-file' | 'columns' | 'highlight-block' | 'date' | 'code-block' | 'formula' | 'blockquote' | 'emoji' | 'link' | 'divider' | 'countdown' | 'markdown-import')[] | null`
- `enabledToolbarActions?: ('blockquote')[] | null`
- `placeholder?: string`
- `collaboration?: RichTextEditorCollaborationOptions | null`

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
