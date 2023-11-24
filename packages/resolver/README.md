<div align="center">
  <a href="https://prestashop.com">
    <img src="https://prestashop.com/sites/default/files/email/logo_x2_rebrand.png" alt="Logo" width="420">
  </a>

<h3 align="center">Puik Resolver</h3>

  <p align="center">
    The <b>P</b>restaShop <b>UI</b> <b>K</b>it vue component resolver
  </p>
  <a href="https://uikit.prestashop.com/">Documentation</a>
</div>

## About The Project

Puik Resolver is a vue component resolver for `unplugin-vue-components` and `unplugin-auto-import` that will auto import components from the `@prestashopcorp/puik-components`

## Prerequisites

- Node.js LTS is required.
- Vue 3
- `@prestashopcorp/puik-components`

## Installation

```sh
$ npm install -D unplugin-vue-components unplugin-auto-import @prestashopcorp/puik-resolver

# Yarn
$ yarn add unplugin-vue-components unplugin-auto-import @prestashopcorp/puik-resolver -D

# pnpm
$ pnpm install unplugin-vue-components unplugin-auto-import @prestashopcorp/puik-resolver -D
```

ℹ️ `unplugin-auto-import` is only used for the snackbar component at the moment if you don't need this component you can skip everything related to `unplugin-auto-import`
## Usage

Add the following code to your `vite.config.ts` file

```typescript
import { defineConfig } from 'vite'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { PuikResolver } from '@prestashopcorp/puik-resolver'

export default defineConfig({
  plugins: [
    // ...
    Components({
      resolvers: [PuikResolver()],
    }),
    AutoImport({
      resolvers: [PuikResolver()],
    }),
  ],
})
```

Then you can use the components without importing them like that

```vue
<script setup></script>

<template>
  <PuikButton>Example button</PuikButton>
</template>
```

You can find out more about [unplugin-vue-components](https://github.com/unplugin/unplugin-vue-components#readme) and [unplugin-auto-imports](https://github.com/unplugin/unplugin-auto-import#readme) in their documentation