<div align="center">
  <a href="https://prestashop.com">
    <img src="https://prestashop.com/sites/default/files/email/logo_x2_rebrand.png" alt="Logo" width="420">
  </a>

<h3 align="center">Puik Web Components</h3>

  <p align="center">
    The <b>P</b>restaShop <b>UI</b> <b>K</b>it Web Components
  </p>
  <a href="https://uikit.prestashop.com/">Documentation</a>
</div>

## About The Project

Puik Web Components is a library that aims to provide a complete set of reusable web components based on the PrestaShop Design System for all the PrestaShop ecosystem.

## Prerequisites

- Node.js LTS is required.

## Installation

```sh
# NPM
$ npm install @prestashopcorp/puik-web-components --save

# Yarn
$ yarn add @prestashopcorp/puik-web-components

# pnpm
$ pnpm install @prestashopcorp/puik-web-components
```

## Using Puik Web Components

### Global registration

To use all Puik web components in your application, you first need to import and initialize them. Here’s how you can do it:  

`import {
  initAllCe,
  PuikExampleCe,
  PuikAnotherExampleCe,
  // other components...
 } from @prestashopcorp/puik-web-components`  

Then, run the following function in your application:  

`initAllCe();`

### On-demand Registration

If you only want to use a specific component in your application, you can import and initialize it individually. Here’s how you can do it:

`import { initCe, PuikExampleCe } from @prestashopcorp/puik-web-components`

Then, run the following function in your application:

`initCe(PuikExampleCe);`
