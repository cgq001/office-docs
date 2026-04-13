---
title: Getting Started
outline: deep
---

# Getting Started

## Install

```bash
npm install @ap666/office-word
```

If your package manager does not auto-install peer dependencies, install the runtime peers as well:

```bash
npm install vue @tiptap/core @tiptap/vue-3 @tiptap/pm @tiptap/starter-kit @tiptap/extension-placeholder @tiptap/extension-code-block @tiptap/extension-code-block-lowlight @tiptap/extension-collaboration @tiptap/extension-collaboration-caret @tiptap/extension-font-family @tiptap/extension-subscript @tiptap/extension-superscript @tiptap/extension-table @tiptap/extension-table-cell @tiptap/extension-table-header @tiptap/extension-table-row @tiptap/extension-task-item @tiptap/extension-task-list @tiptap/extension-text-style @tiptap/extension-underline @tiptap/y-tiptap lowlight y-prosemirror yjs
```

## Basic Use

```vue
<script setup lang="ts">
import { ref } from 'vue'
import type { JSONContent } from '@tiptap/core'
import { RichTextEditor } from '@ap666/office-word'

const content = ref<JSONContent | null>(null)
</script>

<template>
  <RichTextEditor v-model="content" />
</template>
```

The package imports its own styles from the entry, so no extra CSS import is required in the default setup.

## Preview Mode

```vue
<template>
  <RichTextEditor
    v-model="content"
    mode="preview"
    outline-placement="right"
  />
</template>
```

## Whitelist Controls

```vue
<RichTextEditor
  v-model="content"
  :enabled-export-items="['html', 'image']"
  :enabled-insert-menu-items="['image', 'local-file', 'blockquote']"
  :enabled-toolbar-actions="['blockquote']"
/>
```

If these props are omitted, all built-in options remain enabled.

## Collaboration Quick Start

```vue
<script setup lang="ts">
import { ref } from 'vue'
import * as Y from 'yjs'
import { WebsocketProvider } from 'y-websocket'
import type { JSONContent } from '@tiptap/core'
import { RichTextEditor } from '@ap666/office-word'

const ydoc = new Y.Doc()
const provider = new WebsocketProvider('ws://localhost:1234', 'office-word-demo', ydoc)
const content = ref<JSONContent | null>(null)
</script>

<template>
  <RichTextEditor
    v-model="content"
    :collaboration="{
      document: ydoc,
      field: 'content',
      provider,
      user: {
        name: 'Zhang San',
        color: '#3b82f6',
      },
    }"
  />
</template>
```
