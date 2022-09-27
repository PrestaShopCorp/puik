# Alert

An alert banner displays a prominent message and related optional actions.

## Variants

<code-snippet story="components-alert--variants" height="320px">
<template #vue>

```vue
<template>
  <puik-alert>This a success alert</puik-alert>
  <puik-alert variant="warning">This a warning alert</puik-alert>
  <puik-alert variant="info">This a info alert</puik-alert>
  <puik-alert variant="danger">This a danger alert</puik-alert>
</template>
```

</template>
<template #html>

```html
<div class="puik-alert puik-alert--success" aria-live="polite">
  <div class="puik-alert__content">
    <span class="puik-icon puik-alert__icon">check_circle</span>
    <div class="puik-alert__text">
      <span class="puik-alert__description">This a success alert</span>
    </div>
  </div>
</div>

<div class="puik-alert puik-alert--warning" aria-live="polite">
  <div class="puik-alert__content">
    <span class="puik-icon puik-alert__icon">warning</span>
    <div class="puik-alert__text">
      <span class="puik-alert__description">This a warning alert</span>
    </div>
  </div>
</div>

<div class="puik-alert puik-alert--info" aria-live="polite">
  <div class="puik-alert__content">
    <span class="puik-icon puik-alert__icon">info</span>
    <div class="puik-alert__text">
      <span class="puik-alert__description">This a info alert</span>
    </div>
  </div>
</div>

<div class="puik-alert puik-alert--danger" aria-live="polite">
  <div class="puik-alert__content">
    <span class="puik-icon puik-alert__icon">error</span>
    <div class="puik-alert__text">
      <span class="puik-alert__description">This a danger alert</span>
    </div>
  </div>
</div>
```

</template>
</code-snippet>

## Without Borders

Not available for the `success` variant

<code-snippet story="components-alert--without-borders" height="250px">
<template #vue>

```vue
<template>
  <puik-alert variant="warning" disableBorders>
    This is a warning alert without borders
  </puik-alert>
  <puik-alert variant="info" disableBorders>
    This is a info alert without borders
  </puik-alert>
  <puik-alert variant="danger" disableBorders>
    This is a danger alert without borders
  </puik-alert>
</template>
```

</template>
<template #html>

```html
<div
  class="puik-alert puik-alert--warning puik-alert--no-borders"
  aria-live="polite"
>
  <div class="puik-alert__content">
    <span class="puik-icon puik-alert__icon">warning</span>
    <div class="puik-alert__text">
      <span class="puik-alert__description"
        >This a warning alert without borders</span
      >
    </div>
  </div>
</div>

<div
  class="puik-alert puik-alert--info puik-alert--no-borders"
  aria-live="polite"
>
  <div class="puik-alert__content">
    <span class="puik-icon puik-alert__icon">info</span>
    <div class="puik-alert__text">
      <span class="puik-alert__description"
        >This a info alert without borders</span
      >
    </div>
  </div>
</div>

<div
  class="puik-alert puik-alert--danger puik-alert--no-borders"
  aria-live="polite"
>
  <div class="puik-alert__content">
    <span class="puik-icon puik-alert__icon">error</span>
    <div class="puik-alert__text">
      <span class="puik-alert__description"
        >This a danger alert without borders</span
      >
    </div>
  </div>
</div>
```

</template>
</code-snippet>

## With a title

<code-snippet story="components-alert--with-a-title" height="120px">
<template #vue>

```vue
<template>
  <puik-alert title="Alert title">This a success alert with a title</puik-alert>
</template>
```

</template>
<template #html>

```html
<div class="puik-alert puik-alert--success" aria-live="polite">
  <div class="puik-alert__content">
    <span class="puik-icon puik-alert__icon">check_circle</span>
    <div class="puik-alert__text">
      <p class="puik-alert__title">Alert title</p>
      <span class="puik-alert__description"
        >This a success alert with a title</span
      >
    </div>
  </div>
</div>
```

</template>
</code-snippet>

## With a button

<code-snippet story="components-alert--with-a-button" height="120px">
<template #vue>

```vue
<template>
  <puik-alert
    variant="warning"
    title="Alert title"
    button-label="Update"
    @click="myFunction"
  >
    This is a warning alert with a button
  </puik-alert>
</template>
```

</template>
<template #html>

```html
<div class="puik-alert puik-alert--warning" aria-live="polite">
  <div class="puik-alert__content">
    <span class="puik-icon puik-alert__icon">warning</span>
    <div class="puik-alert__text">
      <p class="puik-alert__title">Alert title</p>
      <span class="puik-alert__description"
        >This a warning alert with a button.</span
      >
    </div>
  </div>
  <button class="puik-alert__button">Update</button>
</div>
```

</template>
</code-snippet>

## Attributes

| Name           | Description                                                    | Type    | Accepted Values                   | Default | Required |
| -------------- | -------------------------------------------------------------- | ------- | --------------------------------- | ------- | -------- |
| title          | Set the alert title                                            | string  | —                                 | —       | false    |
| description    | Set the alert description (also exists as a default slot)      | string  | —                                 | —       | false    |
| variant        | Set the alert variant                                          | string  | success / info / warning / danger | success | false    |
| disableBorders | Disable alert borders (only for info, warning, error variants) | boolean | —                                 | false   | false    |
| buttonLabel    | Label of the button                                            | string  | —                                 | —       | false    |
| ariaLive       | Set the aria live attribute of the button                      | string  | polite / assertive                | polite  | false    |

## Events

| Name  | Description                               | Parameters |
| ----- | ----------------------------------------- | ---------- |
| click | Triggers when the alert button is clicked | Your value |

## Slots

| Name | Description                                               |
| ---- | --------------------------------------------------------- |
| —    | Set the alert description (also exists as a default slot) |
