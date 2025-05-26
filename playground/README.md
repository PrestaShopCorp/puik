# Playground

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
pnpm install
```

### Compile and Hot-Reload for Development

```sh
pnpm dev
```

### Type-Check, Compile and Minify for Production

```sh
pnpm build
```

### Lint with [ESLint](https://eslint.org/)

```sh
pnpm lint
```

## Using the Playground

The Playground is a test application built on Vue3 and Vue Router. To use it, follow the steps below:

1. **Copy the example files**: The files `/src/views/VueComponentsViewExample.vue`, `/src/views/WebComponentsViewExample.vue` and `/src/AppExample.vue` are example views that you can use as a starting point. Copy each of these files.

2. **Rename the copied files**: Rename the copied example files by removing `Example` from their name. The files should be renamed as follows to match vue router configuration:
    - `/src/views/VueComponentsViewExample.vue` becomes `/src/views/VueComponentsView.vue`
    - `/src/views/WebComponentsViewExample.vue` becomes `/src/views/WebComponentsView.vue`
    - `/src/AppExample.vue` becomes `/src/App.vue`

3. **Modify the copied files**: Make the necessary modifications to the copied files based on your specific needs for the Playground.

4. **Run**: `pnpm build` to update the css packages before run the project.
