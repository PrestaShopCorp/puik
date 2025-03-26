<div align="center">
  <a href="https://prestashop.com">
    <img src="https://prestashop.com/sites/default/files/email/logo_x2_rebrand.png" alt="Logo" width="420">
  </a>

<h3 align="center">Puik Components</h3>

  <p align="center">
    The <b>P</b>restaShop <b>UI</b> <b>K</b>it Vue Components
  </p>
  <a href="https://uikit.prestashop.com/">Documentation</a>
</div>

## About The Project

Puik Components is a Vue Components library that aims to provide a complete set of reusable components based on the PrestaShop Design System for all the PrestaShop ecosystem.

ℹ️ [see list of available Vue components](https://github.com/PrestaShopCorp/puik/blob/main/RELEASE-NOTES-V2.md#available-components)

## Prerequisites

- Node.js LTS is required.
- Vue 3

## Installation

```sh
# NPM
$ npm install @prestashopcorp/puik-components @prestashopcorp/puik-theme --save

# Yarn
$ yarn add @prestashopcorp/puik-components @prestashopcorp/puik-theme

# pnpm
$ pnpm install @prestashopcorp/puik-components @prestashopcorp/puik-theme
```

### Style

import css in your application:

`@import "@prestashopcorp/puik-theme";`

### Auto import using Puik Resolver (recommended)

First you need to install `unplugin-vue-components`, `unplugin-auto-import` and the Puik resolver `@prestashopcorp/puik-resolver`

```sh
$ npm install -D unplugin-vue-components unplugin-auto-import @prestashopcorp/puik-resolver

# Yarn
$ yarn add unplugin-vue-components unplugin-auto-import @prestashopcorp/puik-resolver -D

# pnpm
$ pnpm install unplugin-vue-components unplugin-auto-import @prestashopcorp/puik-resolver -D
```

Then add the code below in your vite.config file

ℹ️ if you don't use Vite [follow this link](https://github.com/unplugin/unplugin-vue-components?tab=readme-ov-file#installation)

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

### On demand import

Import the vue component directly into your vue file

```vue
<script setup>
import { PuikButton } from '@prestashopcorp/puik-components'
</script>

<template>
  <puik-button>Example button</puik-button>
</template>
```
