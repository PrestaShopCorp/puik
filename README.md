<div id="top"></div>

<div align="center">
  <a href="https://prestashop.com">
    <img src="https://www.prestashop.com/sites/all/themes/prestashop/images/logos/logo-fo-prestashop-colors.svg" alt="Logo" width="420" height="80">
  </a>

<h3 align="center">Puik</h3>

  <p align="center">
    The PrestaShop Ui Kit
  </p>
</div>

## About The Project

Puik is a component library that aims to provide a complete set of reusable components based on the PrestaShop Design System for all the PrestaShop ecosystem.

<!-- GETTING STARTED -->

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

1. Include the CSS in your HTML

```html
<link rel="stylesheet" href="https://unpkg.com/puik/theme/index.css" />
```

2. Add the classes in your HTML

```html
<button class="Puik-button">Example button</button>
```

<p align="right">(<a href="#top">back to top</a>)</p>

## Development

### Local development

1. With this command you can start the playground dev server

```sh
$ pnpm dev
```

2. Import the component file to `playground/src/App.vue`

```vue
<script setup lang="ts">
import { PuikComponent } from '@puik/components'
</script>

<template>
  <div class="app-container">
    <puik-component></puik-component>
  </div>
</template>
```

### Create a new component

This project uses [Hygen](https://www.hygen.io/) to generate the files for your components
You can generate a new component by using this command

```sh
$ pnpm component
```

This command generates multiples files and injects code in these files

```
puik/
├── packages/
│   ├── components/
│   │   ├── my-component/
│   │   │   ├── src/
│   │   │   │   ├── my-component.ts
│   │   │   │   └── my-component.vue
│   │   │   ├── stories/
│   │   │   │   └── my-component.stories.ts
│   │   │   ├── style/
│   │   │   │   ├── css.ts
│   │   │   │   └── index.ts
│   │   │   ├── test/
│   │   │   │   └── my-component.spec.ts
│   │   │   └── index.ts
│   │   └── index.ts
│   ├── puik/
│   │   └── component.ts
│   └── theme/
│       └── src/
│           ├── my-component.scss
│           └── index.scss
└── typings/
    └── global.d.ts
```

### Unit tests

This project uses [Vitest](https://vitest.dev/) & [Vue Test Utils](https://vue-test-utils.vuejs.org/) for unit testing.
Example:

```sh
$ pnpm test
```

### Storybook

All components and documentation are available on our storybook
Example:

```sh
// run storybook
$ pnpm docs:dev

// storybook running
╭───────────────────────────────────────────────────╮
│                                                   │
│   Storybook 6.4.9 for Vue3 started                │
│   15 s for preview                                │
│                                                   │
│    Local:            http://localhost:6006/       │
│    On your network:  http://192.168.1.11:6006/    │
│                                                   │
╰───────────────────────────────────────────────────╯
```

## Contributing

If you want to contribute to this project, make your PR from a feature branch to the master branch following the GitFlow naming conventions of the repository (ex: `feat/short-desc-of-branch`)

- Describe what has changed in the pull request
- Explain why this PR exists. Reference issues, Jira tickets, ...
- Make it clear how it does what it sets out to do.

⚠️ We use `commitlint` for conventional commit format. ([How to use](https://github.com/conventional-changelog/commitlint))

<p align="right">(<a href="#top">back to top</a>)</p>
