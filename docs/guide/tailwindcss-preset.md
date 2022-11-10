# Tailwind CSS Preset

If you want to use the Tailwind CSS preset used for this library you can
import the configuration in your project

## Usage

Require the puikTailwindPreset in your `tailwind.config.{js|ts}` file

```js
const { puikTailwindPreset } = require('@prestashopcorp/puik')
/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [puikTailwindPreset],
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
}
```

Congratulations you can now use all the tailwind classes used in the library

## Color classes

<ColorPalette />

## Font family classes

<div class="relative overflow-auto rounded-xl">
  <div class="flex flex-col gap-8">
    <div>
      <span class="mb-3 text-sm font-medium text-slate-500 dark:text-slate-400">font-primary (Inter)</span>
      <p class="text-lg font-medium font-primary text-slate-900 dark:text-slate-200">
        The quick brown fox jumps over the lazy dog.
      </p>
    </div>
    <div>
      <span class="mb-3 text-sm font-medium text-slate-500 dark:text-slate-400">font-secondary (Roboto)</span>
      <p class="text-lg font-medium font-secondary text-slate-900 dark:text-slate-200">
        The quick brown fox jumps over the lazy dog.
      </p>
    </div>
    <div>
      <span class="mb-3 text-sm font-medium text-slate-500 dark:text-slate-400">materialIcons</span>
      <p class="text-lg font-medium font-materialIcons text-slate-900 dark:text-slate-200">
        search
      </p>
    </div>
  </div>
</div>

## Font sizes classes

<p class="text-4xl">Aa</p>
<p>4xl (2 rem)</p>

## Shadows classes

<div class="relative overflow-auto rounded-xl">
  <div class="flex overflow-scroll sm:block sm:overflow-visible scroll-p-8">
  <div class="flex items-center gap-12 py-1 font-bold shrink-0">
    <div class="flex flex-col items-center shrink-0">
      <p class="mb-3 text-sm font-medium text-center text-slate-500">shadow-overlay</p>
      <div class="w-24 h-24 bg-white rounded-lg shadow-overlay"></div>
    </div>
    <div class="flex flex-col items-center shrink-0">
      <p class="mb-3 text-sm font-medium text-center text-slate-500">shadow-sticky</p>
      <div class="w-24 h-24 bg-white rounded-lg shadow-sticky"></div>
    </div>
  </div>
  </div>
</div>
