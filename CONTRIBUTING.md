# How to contribute

## Pull Request General Guidelines

If you want to contribute to this project, make your PR from a feature branch to the main branch following the GitFlow naming conventions of the repository (ex: `feat/short-desc-of-branch` for new components or feature, `fix/short-desc-of-branch`, etc.)

- Describe what has changed in the pull request
- Explain why this PR exists. Reference issues, Jira tickets, ...
- Make it clear how it does what it sets out to do.

⚠️ We use `commitlint` for conventional commit format. ([How to use](https://github.com/conventional-changelog/commitlint))

You can also use [commitizen](https://github.com/commitizen/cz-cli) to create your commit with an interactive command line to respect our commit conventions

```sh
$ pnpm cz
```

## Mono repository structure

This mono repository contains multiple packages under the folder `packages`

- `components` contains all the vue components and is released under the name `@prestashopcorp/puik-components`
- `locale` contains all the translations files for the default wording in the components, this package is bundled with the other packages when it's used and isn't released as a standalone
- `puik` contains all the other packages and is released under the name `@prestashopcorp/puik`
- `resolver` contains the code of the vue component resolver for [unplugin-vue-components](https://github.com/unplugin/unplugin-vue-components) and is released under the name `@prestashopcorp/puik-resolver`
- `tailwind-preset` contains the [Tailwind Css](https://tailwindcss.com/) preset and is released under the name `@prestashopcorp/puik-tailwind-preset`
- `theme` contains all the CSS classes used in our components and is released under the name `@prestashopcorp/puik-theme`
- `utils` contains all the utility functions used across our packages, this package is bundled with the other packages when it's used and isn't released as a standalone

The `playground` folder contains a Vue 3 to help you develop your components

The `docs` folder contains the configuration and the global documentation of the [Storybook](https://storybook.js.org/)

ℹ️ All the packages with the `private: true` property in the `package.json` aren't released but bundled when used

## Development

### Prerequisites

- NodeJS >= 18
- [PNPM 8 or higher](https://pnpm.io/)

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
import { PuikComponent } from '@prestashopcorp/puik-components'
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
└── packages/
    ├── components/
    │   ├── my-component/
    │   │   ├── src/
    │   │   │   ├── my-component.ts
    │   │   │   └── my-component.vue
    │   │   ├── stories/
    │   │   │   └── my-component.stories.ts
    │   │   ├── style/
    │   │   │   ├── css.ts
    │   │   │   └── index.ts
    │   │   ├── test/
    │   │   │   └── my-component.spec.ts
    │   │   └── index.ts
    │   └── index.ts
    ├── puik/
    │   ├── component.ts
    │   └── global.d.ts
    └── theme/
        └── src/
            ├── my-component.scss
            └── index.scss

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

This project uses [v8](https://v8.dev/blog/javascript-code-coverage) as test coverage provider. Run the following command to check the current coverage. Min coverage rate is at 60%

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

## Testing a Branch

Use the `pnpm pack:all` command to generate `.tgz` files that will be stored in the `packages-tars` directory.
This allows you to test a package before publishing it, for example.

### Example in a Local Node Project

You can specify the dependencies in the `package.json` file of your project as shown below:

```json
"dependencies": {   
    "@prestashopcorp/puik-components": "file:[path_to_tar]/prestashopcorp-puik-components-0.0.0-test-[x].tgz",
    "@prestashopcorp/puik-resolver": "file:[path_to_tar]/prestashopcorp-puik-resolver-0.0.0-test-[x].tgz",
}
```
