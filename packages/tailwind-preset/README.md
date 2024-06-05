<div align="center">
  <a href="https://prestashop.com">
    <img src="https://prestashop.com/sites/default/files/email/logo_x2_rebrand.png" alt="Logo" width="420">
  </a>

<h3 align="center">Puik Tailwind Preset</h3>

  <p align="center">
    The <b>P</b>restaShop <b>UI</b> <b>K</b>it Tailwind CSS
  </p>
  <a href="https://uikit.prestashop.com/">Documentation</a>
</div>

## About The Project

Puik Tailwind Preset is a [Tailwind CSS](https://tailwindcss.com/) preset that aims to provide all the design tokens based on the PrestaShop Design System for all the PrestaShop ecosystem.

## Prerequisites

- Tailwind Css 3+

## Installation

```sh
# NPM
$ npm install @prestashopcorp/puik-tailwind-preset --save

# Yarn
$ yarn add @prestashopcorp/puik-tailwind-preset

# pnpm
$ pnpm install @prestashopcorp/puik-tailwind-preset
```

## Usage

If you want to use the Tailwind CSS preset used for this library you can import the configuration in your project.

Require the puikTailwindPreset in your `tailwind.config.{js|ts}` file

```typescript
const { puikTailwindPreset } = require('@prestashopcorp/puik-tailwind-preset')
/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [puikTailwindPreset],
}
```

## Available tokens

You can find all the available tokens [here](https://github.com/PrestaShopCorp/puik/blob/main/packages/tailwind-preset/theme.ts)
