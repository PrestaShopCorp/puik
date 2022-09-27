# Getting started

## Auto import (recommended)

First you need to install `unplugin-vue-components`

```sh
$ npm install -D unplugin-vue-components

# Yarn
$ yarn add unplugin-vue-components -D

# pnpm
$ pnpm install unplugin-vue-components -D
```

Then add the code below in your vite.config file

```typescript
import { defineConfig } from 'vite'
import Components from 'unplugin-vue-components/vite'
import { PuikResolver } from '@prestashopcorp/puik'

export default defineConfig({
  plugins: [
    // ...
    Components({
      resolvers: [PuikResolver()],
    }),
  ],
})
```

## On demand import

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

## Full import

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
