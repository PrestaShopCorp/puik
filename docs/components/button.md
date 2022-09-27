# Button

Buttons are vital components for allowing the user to interact with an interface.

## Variants

<code-snippet story="components-button--variants" height="150">
<template #vue>

```vue
<template>
  <puik-button>Primary Button</puik-button>
  <puik-button variant="destructive">Destructive Button</puik-button>
  <puik-button variant="secondary">Secondary Button</puik-button>
  <puik-button variant="tertiary">Tertiary Button</puik-button>
  <puik-button variant="text">Text Button</puik-button>
  <puik-button variant="info">Info Button</puik-button>
  <puik-button variant="success">Success Button</puik-button>
  <puik-button variant="warning">Warning Button</puik-button>
  <puik-button variant="error">Error Button</puik-button>
</template>
```

</template>
<template #html>

```html
<button class="puik-button puik-button--primary">Primary button</button>
<button class="puik-button puik-button--secondary">Secondary button</button>
<button class="puik-button puik-button--tertiary">Tertiary button</button>
<button class="puik-button puik-button--text">Text button</button>
<button class="puik-button puik-button--info">Info button</button>
<button class="puik-button puik-button--success">Success button</button>
<button class="puik-button puik-button--warning">Warning button</button>
<button class="puik-button puik-button--error">Error button</button>
```

</template>
</code-snippet>

## Sizes

<code-snippet story="components-button--sizes" height="80px">
<template #vue>

```vue
<template>
  <puik-button size="sm">Primary Button sm</puik-button>
  <puik-button size="md">Primary Button md</puik-button>
  <puik-button size="lg">Primary Button lg</puik-button>
</template>
```

</template>
<template #html>

```html
<button class="puik-button puik-button--primary puik-button--sm">
  Primary Button sm
</button>
<button class="puik-button puik-button--primary puik-button--md">
  Primary Button md
</button>
<button class="puik-button puik-button--primary puik-button--lg">
  Primary Button lg
</button>
```

</template>
</code-snippet>

## Disabled

<code-snippet story="components-button--disabled">
<template #vue>

```vue
<template>
  <puik-button disabled>Primary Button</puik-button>
  <puik-button variant="destructive" disabled>Destructive Button</puik-button>
  <puik-button variant="secondary" disabled>Secondary Button</puik-button>
  <puik-button variant="tertiary" disabled>Tertiary Button</puik-button>
  <puik-button variant="text" disabled>Text Button</puik-button>
  <puik-button variant="info" disabled>Info Button</puik-button>
  <puik-button variant="success" disabled>Success Button</puik-button>
  <puik-button variant="warning" disabled>Warning Button</puik-button>
  <puik-button variant="error" disabled>Error Button</puik-button>
</template>
```

</template>
<template #html>

```html
<button class="puik-button puik-button--primary" disabled>
  Primary button
</button>
<button class="puik-button puik-button--secondary" disabled>
  Secondary button
</button>
<button class="puik-button puik-button--tertiary" disabled>
  Tertiary button
</button>
<button class="puik-button puik-button--text" disabled>Text button</button>
<button class="puik-button puik-button--info" disabled>Info button</button>
<button class="puik-button puik-button--success" disabled>
  Success button
</button>
<button class="puik-button puik-button--warning" disabled>
  Warning button
</button>
<button class="puik-button puik-button--error" disabled>Error button</button>
```

</template>
</code-snippet>

## Using Icons

<code-snippet story="components-button--with-icon" height="80px">
<template #vue>

```vue
<template>
  <puik-button left-icon="shopping_cart">Left Icon</puik-button>
  <puik-button right-icon="shopping_cart">Right Icon</puik-button>
  <puik-button left-icon="shopping_cart" right-icon="shopping_cart"
    >Both Icons</puik-button
  >
</template>
```

</template>
<template #html>

```html
<button class="puik-button puik-button--primary">
  <span class="puik-icon puik-button__left-icon">shopping_cart</span>
  Left Icon
</button>
<button class="puik-button puik-button--primary">
  Right Icon
  <span class="puik-icon puik-button__right-icon">shopping_cart</span>
</button>
<button class="puik-button puik-button--primary">
  <span class="puik-icon puik-button__left-icon">shopping_cart</span>
  Both Icons
  <span class="puik-icon puik-button__right-icon">shopping_cart</span>
</button>
```

</template>
</code-snippet>

## Fluid

<code-snippet story="components-button--fluid" height="80px">
<template #vue>

```vue
<template>
  <puik-button fluid>My button</puik-button>
</template>
```

</template>
<template #html>

```html
<button class="puik-button puik-button--primary puik-button--fluid">
  My button
</button>
```

</template>
</code-snippet>

## Attributes

| Name      | Description                                                          | Type    | Accepted Values                                                                 | Default | Required |
| --------- | -------------------------------------------------------------------- | ------- | ------------------------------------------------------------------------------- | ------- | -------- |
| variant   | Set the button variant                                               | string  | primary / secondary / tertiary / text / destructive / success / warning / error | primary | false    |
| size      | Set the button size                                                  | string  | sm / md / lg                                                                    | md      | false    |
| fluid     | Set the button as fluid                                              | boolean | —                                                                               | false   | false    |
| disabled  | Set the button as disabled                                           | boolean | —                                                                               | false   | false    |
| leftIcon  | Set the button left icon                                             | string  | —                                                                               | —       | false    |
| rightIcon | Set the button right icon                                            | string  | —                                                                               | —       | false    |
| to        | Set a vue router link for the button (changes button to router-link) | string  | —                                                                               | —       | false    |
| href      | Set a link for the button (changes button to "a" html tag)           | string  | —                                                                               | —       | false    |

## Slots

| Name | Description          |
| ---- | -------------------- |
| —    | Set the button label |
