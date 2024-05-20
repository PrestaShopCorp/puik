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

Puik is a library that aims to provide a complete set of reusable components based on the PrestaShop Design System for all the PrestaShop ecosystem. This packages includes the following packages:

- [@prestashopcorp/puik-components](../components/README.md)
- [@prestashopcorp/puik-components](../web-components/README.md)
- [@prestashopcorp/puik-resolver](../resolver/README.md)
- [@prestashopcorp/puik-theme](../theme/README.md)
- [@prestashopcorp/puik-tailwind-preset](../tailwind-preset/README.md)

## Prerequisites

- Node.js LTS is required.

## Installation

```sh
# chose your favorite package manager
# NPM
$ npm install @prestashopcorp/puik --save

# Yarn
$ yarn add @prestashopcorp/puik

# pnpm
$ pnpm install @prestashopcorp/puik
```

## Usage

### Imports

For the usage you can refer to the other packages README, the only thing that will change is the import path, you will use `@prestashopcorp/puik` instead of the specific package name (that doesn't apply to `@prestashopcorp/puik-theme`)

### Full import

If you don't care about bundle size you can full import the library by following these instructions

Import the vue library and the css directly into your main.js / main.ts

```typescript
import { createApp } from 'vue'
import Puik from '@prestashopcorp/puik'
import '@prestashopcorp/puik-theme/index.css'
import App from './App.vue'

const app = createApp(App)

app.use(Puik)
app.mount('#app')
```

If you are using Volar you need to add the global component type definitions to your `tsconfig.json`

```json
// tsconfig.json
{
  "compilerOptions": {
    "types": ["@prestashopcorp/puik/global"]
  }
}
```