---
layout: page.11ty.cjs
title: <vscode-select> ⌲ API
---

# vscode-select

## Properties

| Property        | Attribute       | Modifiers | Type       | Default |
|-----------------|-----------------|-----------|------------|---------|
| `multiple`      | `multiple`      |           | `boolean`  | false   |
| `options`       | `options`       | readonly  | `Option[]` |         |
| `selectedIndex` | `selectedIndex` |           | `number`   |         |
| `tabIndex`      | `tabIndex`      |           | `number`   | -1      |
| `value`         | `value`         |           | `string`   |         |

## Events

| Event        |
|--------------|
| `vsc-change` |