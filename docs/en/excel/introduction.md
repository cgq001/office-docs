---
title: Introduction
outline: deep
---

# Spreadsheet

`@norio-office/office-excel` is a Vue 3 spreadsheet component for embedding workbook-style editing into business systems. It provides workbook rendering, cell editing, toolbar controls, import/export, JSON snapshots, plain text extraction, optional collaboration hooks, and an instance API.

The component DOM/CSS class prefix is `norio-office-excel`.

## Suitable Scenarios

- Embed online spreadsheet editing into a business system
- Create, edit, save, and restore complete workbook snapshots
- Import `.xlsx` / `.xlsm` files and export `.xlsx`
- Read JSON snapshots or plain-text two-dimensional arrays
- Control editing, import, export, sheet management, image, chart, and formatting permissions
- Reserve a collaboration integration layer while keeping the demo single-user by default

## Main Capabilities

- Workbook model: `v-model` binds a complete `OfficeExcelWorkbookSnapshot`
- Spreadsheet editing: cell selection, editing, sheet switching, copy, readonly mode
- Configurable toolbar: `tabs` and `menu` modes with tab/command allowlists and blocklists
- Permissions: disable import, export, editing, sheet management, images, charts, or formatting
- Data IO: import Excel, export Excel, export/download JSON, serialize, external loading
- Backgrounds: built-in solid/gradient backgrounds and business-provided background images
- Collaboration hooks: optional Yjs document mirror and command envelope submission

## Reading Order

1. Start with [Getting Started](/en/excel/getting-started)
2. If you need multi-user integration, read [Collaboration](/en/excel/collaboration)
3. Then read [API](/en/excel/api)
4. Finally check [Demo](/en/excel/demo) and [Playground](/en/excel/playground)
