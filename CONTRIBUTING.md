# How to contribute

## Pull Request General Guidelines

If you want to contribute to this project, make your PR from a feature branch to the main branch following the GitFlow naming conventions of the repository (ex: `feat/short-desc-of-branch` for new components or feature, `fix/short-desc-of-branch`, etc.)

- Describe what has changed in the pull request
- Explain why this PR exists. Reference issues, Jira tickets, ...
- Make it clear how it does what it sets out to do.

⚠️ We use `commitlint` for conventional commit format. ([How to use](https://github.com/conventional-changelog/commitlint))

## Development

### Prerequisites

- NodeJS >= 16
- [PNPM 6 or higher](https://pnpm.io/)

### Local development

1. Install dependencies

```sh
$ pnpm i
```

2. With this command you can start the playground dev server

```sh
$ pnpm dev
```

3. Import the component file to `playground/src/App.vue`

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

### Style

Classes created in scss files must be prefixed with `puik-` followed by the name of the component. Class naming must follow BEM convention.

Example : `.puik-my-component`

### Unit tests

This project uses [Vitest](https://vitest.dev/) & [Vue Test Utils](https://vue-test-utils.vuejs.org/) for unit testing.
Every new component or feature should have unit tests (if possible).
Before creating a PR or marking it ready-to-review be sure that all tests pass by running the following command

Example:

```sh
$ pnpm test
```

This project uses [istanbul](https://istanbul.js.org/) as test coverage provider. Run the following command to check the current coverage. Min coverage rate is at 70%

Example:

```sh
$ pnpm coverage
```

### Storybook

If you are adding a new feature, refactoring or changing the behavior of a component
or feature in any other manner, you'll likely want to document the changes.
Please include any changes to the docs in the same PR. You don't have to write documentation on the first commit
but as soon as the PR is mature enough do it.

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

### Migrating Documentation from UIKit to PUIK

A documentation is available on [devdocs.uikit.prestashop.com](https://devdocs.uikit.prestashop.com) to help migrate component from old Prestashop UIKit to PUIK.
If you create a component which exists on Prestashop UIKit, you need to create a pull request on [doc migration repository](https://github.com/PrestaShopCorp/devdocs.uikit.prestashop.com) to add another paragraph about your component.
Review will be refused if the migrating documentation isn't updated.
