# Installation

<puik-alert class="mt-4" variant="warning">
      Puik is currently in alpha status. 
      It is already suitable for use, but breaking changes may still occur between minor releases.
</puik-alert>

## Prerequisites

- Node.js LTS is required.
- NPM or Yarn or PNPM

## Using a package manager

For the moment this package is only available privately  
To install it you must configure your .npmrc with a NPM access token

```
@prestashopcorp:registry=https://registry.npmjs.org
//registry.npmjs.org/:_authToken=YOUR_NPMJS_TOKEN
```

You can ask the DevOps to get this token
Your token must have the read rights

```sh
# chose your favorite package manager
# NPM
$ npm install @prestashopcorp/puik --save

# Yarn
$ yarn add @prestashopcorp/puik

# pnpm
$ pnpm install @prestashopcorp/puik
```

## Using the CDN

```html
<head>
  <!-- Import style -->
  <link
    rel="stylesheet"
    href="https://unpkg.com/@prestashopcorp/puik/dist/index.css"
  />

  <!-- Import Vue 3 (Only if you want to use the vue components) -->
  <script src="https://unpkg.com/vue@3"></script>
  <!-- Import component library (Only if you want to use the vue components) -->
  <script src="https://unpkg.com/@prestashopcorp/puik"></script>
</head>
```
