---
title: Collaboration
outline: deep
---

# Collaboration

`@norio-office/rich-text` supports optional Yjs collaboration while keeping the same component API for normal single-user editing.

## Collaboration Prop

```ts
type RichTextEditorCollaborationOptions = {
  document: {
    getXmlFragment: (field: string) => unknown
  }
  field?: string
  provider?: {
    awareness: {
      states: Map<number, unknown>
      on: (event: 'update', callback: (...args: unknown[]) => void) => void
      setLocalStateField: (field: string, value: unknown) => void
    }
  } | null
  user?: {
    name: string
    color: string
    [key: string]: unknown
  } | null
}
```

## Yjs Rules

- The Yjs fragment becomes the source of truth in collaboration mode
- External `modelValue` updates are not pushed back into the editor
- The component still emits JSON snapshots
- Seed the Yjs document before mounting if you need initial content

## Included Yjs Server Example

The published package ships a minimal websocket server example in `yjs/`.

```bash
cd node_modules/@norio-office/rich-text/yjs
npm install
npm run start
```

Default address:

```bash
ws://0.0.0.0:1234
```
