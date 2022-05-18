<div id="top"></div>

<div align="center">
  <a href="https://prestashop.com">
    <img src="https://www.prestashop.com/sites/all/themes/prestashop/images/logos/logo-fo-prestashop-colors.svg" alt="Logo" width="420" height="80">
  </a>

<h3 align="center">Puik</h3>

  <p align="center">
    The <b>P</b>restaShop <b>UI</b> <b>K</b>it
  </p>
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
$ npm install puik --save

# Yarn
$ yarn add puik

# pnpm
$ pnpm install puik
```

<p align="right">(<a href="#top">back to top</a>)</p>

### Usage

#### On demand import (recommended)

Import the vue component and the component css directly into your vue file

```vue
<script setup>
import { PuikButton } from 'puik'
import 'puik/theme/puik-button.css'
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
import Puik from 'puik'
import 'puik/theme/index.css'
import App from './App.vue'

const app = createApp(App)

app.use(Puik)
app.mount('#app')
```

<p align="right">(<a href="#top">back to top</a>)</p>

## Using the CSS components

If you don't use VueJS for your application, you can use the CSS only version of our components. It includes all the
styles used in the VueJs component library.

### Usage

1. Include the CSS in your HTML by using the CDN

```html
<link rel="stylesheet" href="https://unpkg.com/puik/theme/index.css" />
```

2. Add the classes in your HTML

```html
<button class="puik-button">Example button</button>
```

<p align="right">(<a href="#top">back to top</a>)</p>

## Contributing

Please make sure to read the [Contributing Guide](CONTRIBUTING.md) before making a pull request

<p align="right">(<a href="#top">back to top</a>)</p>
