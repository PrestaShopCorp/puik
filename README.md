<div id="top"></div>

<div align="center">
  <a href="https://prestashop.com">
    <img src="https://prestashop.com/sites/default/files/email/logo_x2_rebrand.png" alt="Logo" width="420">
  </a>

<h3 align="center">Puik</h3>

  <p align="center">
    The <b>P</b>restaShop <b>UI</b> <b>K</b>it
  </p>
  <a href="https://main--6267e986619a13004a943d93.chromatic.com/">Documentation</a>
</div>

## About The Project

Puik is a component library that aims to provide a complete set of reusable components based on the PrestaShop Design System for all the PrestaShop ecosystem.

## Using the VueJS components

### Prerequisites

- Node.js LTS is required.

### Installation

```sh
# chose your favorite package manager
# NPM
$ npm install @prestashopcorp/puik --save

# Yarn
$ yarn add @prestashopcorp/puik

# pnpm
$ pnpm install @prestashopcorp/puik
```

<p align="right">(<a href="#top">back to top</a>)</p>

### Usage

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

```typescript
import { defineConfig } from 'vite'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { PuikResolver } from '@prestashopcorp/puik'

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

#### On demand import

Import the vue component and the component css directly into your vue file

```vue
<script setup>
import '@prestashopcorp/puik/es/components/button/style/css'
import { PuikButton } from '@prestashopcorp/puik'
</script>

<template>
  <puik-button>Example button</puik-button>
</template>
```

<p align="right">(<a href="#top">back to top</a>)</p>

#### Full import

If you don't care about bundle size you can full import the library by following these instructions

Import the vue library and the css directly into your main.js / main.ts

```typescript
import { createApp } from 'vue'
import Puik from '@prestashopcorp/puik'
import '@prestashopcorp/puik/dist/index.css'
import App from './App.vue'

const app = createApp(App)

app.use(Puik)
app.mount('#app')
```

<p align="right">(<a href="#top">back to top</a>)</p>

#### Dark Mode

We are using the [Tailwind Dark Mode](https://tailwindcss.com/docs/dark-mode).

To use it you just have to write the css dark rules with `dark:<oneRule>` in your css. (I recommand to put your light and dark styles on two lines for greater readability)

##### Exemple

```
Here we are saying the button background will be blue in light mode and green in dark mode

.my-button {
  @apply bg-blue;
  @apply dark:bg-green;
}
```

## Using the CSS components

If you don't use VueJS for your application, you can use the CSS only version of our components. It includes all the
styles used in the VueJs component library.

### Usage

1. Include the CSS in your HTML by using the CDN

```html
<link
  rel="stylesheet"
  href="https://unpkg.com/@prestashopcorp/puik/dist/index.css"
/>
```

2. Add the classes in your HTML

```html
<button class="puik-button">Example button</button>
```

<p align="right">(<a href="#top">back to top</a>)</p>

## Contributing

Please make sure to read the [Contributing Guide](CONTRIBUTING.md) before making a pull request

<p align="right">(<a href="#top">back to top</a>)</p>
