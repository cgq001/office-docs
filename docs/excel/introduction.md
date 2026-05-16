---
title: 介绍
outline: deep
---

# 表格

`@norio-office/office-excel` 是一个面向 `Vue 3` 的在线表格组件，提供工作簿渲染、单元格编辑、工具栏、导入导出、JSON 快照、纯文本读取、基础协同接入和实例 API。

组件 DOM/CSS 类名前缀统一为 `norio-office-excel`。

## 适用场景

- 在业务系统中嵌入在线 Excel / 表格编辑能力
- 需要创建、编辑、保存和恢复完整工作簿快照
- 需要导入 `.xlsx` 文件并导出 Excel 文件
- 需要获取 JSON 快照或纯文本二维数组
- 需要按业务权限控制编辑、导入、导出、sheet 管理、图片、图表和格式化能力
- 需要预留多人协同接入，将本地命令交给外部协同服务处理

## 产品特点

- 工作簿模型：`v-model` 绑定完整 `OfficeExcelWorkbookSnapshot`。
- 表格交互：支持单元格选择、编辑、sheet 切换、复制和只读查看。
- 工具栏可配：支持 tabs 模式和 menu 模式，可按 tab 或 command 做白名单/黑名单。
- 权限可控：通过 `permissions` 关闭导入、导出、编辑、sheet 管理、图片、图表和格式化。
- 数据可进出：支持导入 Excel、导出 Excel、导出 JSON、下载 JSON、序列化和外部加载。
- 协同预留：维护 Yjs 文档镜像，将本地命令转换成外部服务可消费的 command envelope。

## 主要能力

### 表格编辑

- 初始化工作簿、工作表、行列数量
- 单元格选择与编辑
- 当前选区变化监听
- 当前工作表切换监听
- 只读模式与禁用模式

### 工具栏与权限

- `tabs` 工具栏模式
- `menu` 菜单模式
- tab / command 可见性控制
- 编辑、导入、导出、格式化等权限控制

### 导入导出

- 导入 Excel 文件、Blob、ArrayBuffer、Uint8Array
- 支持 `.xlsx` / `.xlsm` 导入
- 导出并下载 `.xlsx`
- 导出当前工作簿 JSON
- 下载当前工作簿 JSON
- 获取当前工作簿或纯文本数据

### 背景配置

- 内置纯色背景和渐变背景
- 业务侧可通过 `backgroundImages` 注入背景图
- 背景图 `id` 会作为 sheet 背景选择的稳定保存值
- 工作簿快照中可保存水印、图片、图表等元信息

### 协同能力

- 可选开启协同前端接入层
- 维护稳定 ID / Yjs 文档镜像
- 将本地操作转换成 command envelope
- 通过 provider awareness 展示远程选区

## 推荐阅读顺序

1. 先看 [快速开始](/excel/getting-started)
2. 需要多人协同接入，再看 [协同接入](/excel/collaboration)
3. 再看 [API 文档](/excel/api)
4. 最后看 [Demo 演示](/excel/demo)
