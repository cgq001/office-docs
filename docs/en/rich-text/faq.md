---
title: FAQ
outline: deep
---

# FAQ

## Is this suitable for npm package documentation

Yes. This site is already structured like a product documentation site and can continue to grow with navigation, version notes, and demos.

## What is the difference between `preview` mode and `editable=false`

`editable=false` mainly disables editing, while `mode="preview"` switches the component into a dedicated read-only preview shell with better reading-oriented layout behavior.

## What happens if whitelist props are omitted

All built-in options remain enabled by default. Once you pass a list, only the listed items remain visible and usable.

## Which `documentType` Should Rich Text Use

Use `documentType: 'rich'` with the unified collaboration service. `word` is reserved for a future dedicated Word component.

All clients in the same room must use the same `field`; for normal one-file-one-editor use, keep it as `content`.

## Why Not Initialize Collaboration From `modelValue`

In collaboration mode, the Y.Doc/Yjs fragment is authoritative. The editor does not write `modelValue` into an empty collaborative fragment by default.

If the backend already has a Yjs snapshot, do not pass `initializeContent: true`. For a brand-new empty room, first confirm that this client owns initialization, then pass `initializeContent: true` and `initialContent`.
