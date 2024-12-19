# Vue 3 + Typescript + Vite

This template should help get you started developing with Vue 3 and Typescript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/)

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can enable Volar's `.vue` type support plugin by running `Volar: Switch TS Plugin on/off` from VSCode command palette.

## Using the Playground

The Playground is a test application built on Vue3 and Vue Router. To use it, follow the steps below:

1. **Copy the example files**: The files `/src/views/VueComponentsViewExample.vue`, `/src/views/WebComponentsViewExample.vue` and `/src/AppExample.vue` are example views that you can use as a starting point. Copy each of these files.

2. **Rename the copied files**: Rename the copied example files by removing `Example` from their name. The files should be renamed as follows to match vue router configuration:
    - `/src/views/VueComponentsViewExample.vue` becomes `/src/views/VueComponentsView.vue`
    - `/src/views/WebComponentsViewExample.vue` becomes `/src/views/WebComponentsView.vue`
    - `/src/AppExample.vue` becomes `/src/App.vue`

3. **Modify the copied files**: Make the necessary modifications to the copied files based on your specific needs for the Playground.

4. **Run**: `pnpm build` to update the css packages before run the project.
