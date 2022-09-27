<template>
  <div class="grid grid-cols-1 gap-8">
    <div v-for="(color, idx) in colors" :key="idx">
      <color-item :name="color.name" :colors="color.colors" />
    </div>
  </div>
</template>

<script setup lang="ts">
import ColorItem from './ColorItem.vue'

const colors = [
  {
    name: 'Primary Purple',
    colors: [
      {
        name: '50',
        hex: '#e9e6f8',
        class: 'bg-primary-purple-50',
      },
      {
        name: '100',
        hex: '#c7c0ee',
        class: 'bg-primary-purple-100',
      },
      {
        name: '200',
        hex: '#a296e3',
        class: 'bg-primary-purple-200',
      },
      {
        name: '500',
        hex: '#442cc7',
        class: 'bg-primary-purple-500',
      },
      {
        name: '700',
        hex: '#3521ba',
        class: 'bg-primary-purple-700',
      },
      {
        name: '900',
        hex: '#1f10a6',
        class: 'bg-primary-purple-900',
      },
    ],
  },
  {
    name: 'Accentuation Destructive',
    colors: [
      {
        name: '50',
        hex: '#fae7e8',
        class: 'bg-accentuation-destructive-50',
      },
      {
        name: '100',
        hex: '#f2c2c5',
        class: 'bg-accentuation-destructive-100',
      },
      {
        name: '200',
        hex: '#ea9a9e',
        class: 'bg-accentuation-destructive-200',
      },
      {
        name: '500',
        hex: '#d5343c',
        class: 'bg-accentuation-destructive-500',
      },
      {
        name: '700',
        hex: '#ca272e',
        class: 'bg-accentuation-destructive-700',
      },
      {
        name: '900',
        hex: '#ba151a',
        class: 'bg-accentuation-destructive-900',
      },
    ],
  },
  {
    name: 'Accentuation Success',
    colors: [
      {
        name: '50',
        hex: '#e4f0ea',
        class: 'bg-accentuation-success-50',
      },
      {
        name: '100',
        hex: '#bcdaca',
        class: 'bg-accentuation-success-100',
      },
      {
        name: '200',
        hex: '#90c1a6',
        class: 'bg-accentuation-success-200',
      },
      {
        name: '500',
        hex: '#21834d',
        class: 'bg-accentuation-success-500',
      },
      {
        name: '700',
        hex: '#18703d',
        class: 'bg-accentuation-success-700',
      },
      {
        name: '900',
        hex: '#0b5325',
        class: 'bg-accentuation-success-900',
      },
    ],
  },
  {
    name: 'Accentuation Warning',
    colors: [
      {
        name: '50',
        hex: '#fff4e0',
        class: 'bg-accentuation-warning-50',
      },
      {
        name: '100',
        hex: '#ffe3b3',
        class: 'bg-accentuation-warning-100',
      },
      {
        name: '200',
        hex: '#ffd080',
        class: 'bg-accentuation-warning-200',
      },
      {
        name: '500',
        hex: '#ffa000',
        class: 'bg-accentuation-warning-500',
      },
      {
        name: '700',
        hex: '#ff8e00',
        class: 'bg-accentuation-warning-700',
      },
      {
        name: '900',
        hex: '#ff7300',
        class: 'bg-accentuation-warning-900',
      },
    ],
  },
  {
    name: 'Accentuation Info',
    colors: [
      {
        name: '50',
        hex: '#e3eafd',
        class: 'bg-accentuation-info-50',
      },
      {
        name: '100',
        hex: '#8ba7f7',
        class: 'bg-accentuation-info-100',
      },
      {
        name: '200',
        hex: '#b9cafa',
        class: 'bg-accentuation-info-200',
      },
      {
        name: '500',
        hex: '#174eef',
        class: 'bg-accentuation-info-500',
      },
      {
        name: '700',
        hex: '#113deb',
        class: 'bg-accentuation-info-700',
      },
      {
        name: '900',
        hex: '#0725e4',
        class: 'bg-accentuation-info-900',
      },
    ],
  },
  {
    name: 'Font',
    colors: [
      {
        name: 'main',
        hex: '#363a41',
        class: 'bg-font-main',
      },
      {
        name: 'disabled',
        hex: '#d7d8d9',
        class: 'bg-font-disabled',
      },
      {
        name: '50',
        hex: '#edeef0',
        class: 'bg-font-50',
      },
      {
        name: '100',
        hex: '#d2d4d9',
        class: 'bg-font-100',
      },
      {
        name: '500',
        hex: '#697180',
        class: 'bg-font-500',
      },
    ],
  },
  {
    name: 'Background',
    colors: [
      {
        name: 'grey',
        hex: '#fafafb',
        class: 'bg-background-grey',
      },
    ],
  },
  {
    name: 'Border',
    colors: [
      {
        name: 'main',
        hex: '#c8d7e4',
        class: 'bg-border-main',
      },
      {
        name: 'decorative',
        hex: '#e1e0eb',
        class: 'bg-border-decorative',
      },
    ],
  },
  {
    name: 'Focus',
    colors: [
      {
        name: 'main',
        hex: '#458fff',
        class: 'bg-focus-main',
      },
    ],
  },
  {
    name: 'Brand',
    colors: [
      {
        name: 'pink',
        hex: '#c8d7e4',
        class: 'bg-brand-pink',
      },
      {
        name: 'darkBlue',
        hex: '#e1e0eb',
        class: 'bg-brand-darkBlue',
      },
    ],
  },
]
</script>

<style scoped></style>
