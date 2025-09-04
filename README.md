<div id="top"></div>

<div align="center">
  <a href="https://prestashop.com">
    <img src="https://prestashop.com/sites/default/files/email/logo_x2_rebrand.png" alt="Logo" width="420">
  </a>

<h3 align="center">Puik</h3>

  <p align="center">
    The <b>P</b>restaShop <b>UI</b> <b>K</b>it
  </p>
  <a href="https://uikit.prestashop.com/">Documentation</a>
</div>

## About The Project

Puik is a component library that aims to provide a complete set of reusable components based on the PrestaShop Design System for all the PrestaShop ecosystem.

🚧 Please note there are significant changes from version 1 to version 2. For more informations, please refer to the [release-notes-v2](RELEASE-NOTES-V2.md)

<p align="right">(<a href="#top">back to top</a>)</p>

## About the repository

This monorepo contains the following libraries:

- [@prestashopcorp/puik-components](packages/components/README.md) a Vue 3 components library
- [@prestashopcorp/puik-web-components](packages/web-components/README.md) a Web components library
- [@prestashopcorp/puik-resolver](packages/resolver/README.md) a component resolver for our Vue 3 components library
- [@prestashopcorp/puik-theme](packages/theme/README.md) a CSS library containing all the classes used in our components
- [@prestashopcorp/puik-tailwind-preset](packages/tailwind-preset/README.md) a Tailwind Css preset that contains all the design tokens used to create the components

## Installation

ℹ️ This README only covers the Vue components library usage if you need more information about the usage of the other packages please refer to their README

### Prerequisites

- Node.js LTS is required.
- Vue 3

#### Vue components

```sh
# @prestashopcorp/puik-resolver is optional but strongly recommended
# NPM
$ npm install @prestashopcorp/puik-theme @prestashopcorp/puik-components @prestashopcorp/puik-resolver --save

# Yarn
$ yarn add @prestashopcorp/puik-theme @prestashopcorp/puik-components @prestashopcorp/puik-resolver

# pnpm
$ pnpm install @prestashopcorp/puik-theme @prestashopcorp/puik-components @prestashopcorp/puik-resolver
```

<p align="right">(<a href="#top">back to top</a>)</p>

### Usage

### Style

import css in your application:

`@import "@prestashopcorp/puik-theme/index.css";`

#### Auto import (recommended)

First you need to install `unplugin-vue-components` & `unplugin-auto-import`

```sh
$ npm install -D unplugin-vue-components unplugin-auto-import

# Yarn
$ yarn add unplugin-vue-components unplugin-auto-import -D

# pnpm
$ pnpm install unplugin-vue-components unplugin-auto-import -D
```

Then add the code below in your vite.config file

ℹ️ if you don't use Vite [follow this link](https://github.com/unplugin/unplugin-vue-components?tab=readme-ov-file#installation)

```typescript
import { defineConfig } from 'vite';
import Components from 'unplugin-vue-components/vite';
import AutoImport from 'unplugin-auto-import/vite';
import { PuikResolver } from '@prestashopcorp/puik-resolver';

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
});
```

ℹ️ If you are using the puik global package you can import PuikResolver directly from `@prestashopcorp/puik`

#### On demand import

Import the vue component directly into your vue file

```vue
<script setup>
import { PuikButton } from '@prestashopcorp/puik-components';
</script>

<template>
  <puik-button>Example button</puik-button>
</template>
```

<p align="right">(<a href="#top">back to top</a>)</p>

## Contributing

Please make sure to read the [Contributing Guide](CONTRIBUTING.md) before making a pull request

<p align="right">(<a href="#top">back to top</a>)</p>
