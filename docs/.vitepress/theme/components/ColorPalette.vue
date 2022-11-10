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
        hex: '#E9E6F8',
        class: 'bg-primary-purple-50',
      },
      {
        name: '100',
        hex: '#C7C0EE',
        class: 'bg-primary-purple-100',
      },
      {
        name: '200',
        hex: '#A296E3',
        class: 'bg-primary-purple-200',
      },
      {
        name: '500',
        hex: '#442CC7',
        class: 'bg-primary-purple-500',
      },
      {
        name: '700',
        hex: '#3521BA',
        class: 'bg-primary-purple-700',
      },
      {
        name: '900',
        hex: '#1F10A6',
        class: 'bg-primary-purple-900',
      },
    ],
  },
  {
    name: 'Accentuation Destructive',
    colors: [
      {
        name: '50',
        hex: '#FAE7E8',
        class: 'bg-accentuation-destructive-50',
      },
      {
        name: '100',
        hex: '#F2C2C5',
        class: 'bg-accentuation-destructive-100',
      },
      {
        name: '200',
        hex: '#EA9A9E',
        class: 'bg-accentuation-destructive-200',
      },
      {
        name: '500',
        hex: '#D5343C',
        class: 'bg-accentuation-destructive-500',
      },
      {
        name: '700',
        hex: '#CA272E',
        class: 'bg-accentuation-destructive-700',
      },
      {
        name: '900',
        hex: '#BA151A',
        class: 'bg-accentuation-destructive-900',
      },
    ],
  },
  {
    name: 'Accentuation Success',
    colors: [
      {
        name: '50',
        hex: '#E4F0EA',
        class: 'bg-accentuation-success-50',
      },
      {
        name: '100',
        hex: '#BCDACA',
        class: 'bg-accentuation-success-100',
      },
      {
        name: '200',
        hex: '#90C1A6',
        class: 'bg-accentuation-success-200',
      },
      {
        name: '500',
        hex: '#21834D',
        class: 'bg-accentuation-success-500',
      },
      {
        name: '700',
        hex: '#18703D',
        class: 'bg-accentuation-success-700',
      },
      {
        name: '900',
        hex: '#0B5325',
        class: 'bg-accentuation-success-900',
      },
    ],
  },
  {
    name: 'Accentuation Warning',
    colors: [
      {
        name: '50',
        hex: '#FFF4E0',
        class: 'bg-accentuation-warning-50',
      },
      {
        name: '100',
        hex: '#FFE3B3',
        class: 'bg-accentuation-warning-100',
      },
      {
        name: '200',
        hex: '#FFD080',
        class: 'bg-accentuation-warning-200',
      },
      {
        name: '500',
        hex: '#FFA000',
        class: 'bg-accentuation-warning-500',
      },
      {
        name: '700',
        hex: '#FF8E00',
        class: 'bg-accentuation-warning-700',
      },
      {
        name: '900',
        hex: '#FF7300',
        class: 'bg-accentuation-warning-900',
      },
    ],
  },
  {
    name: 'Accentuation Info',
    colors: [
      {
        name: '50',
        hex: '#E3EAFD',
        class: 'bg-accentuation-info-50',
      },
      {
        name: '100',
        hex: '#B9CAFA',
        class: 'bg-accentuation-info-100',
      },
      {
        name: '200',
        hex: '#8BA7F7',
        class: 'bg-accentuation-info-200',
      },
      {
        name: '500',
        hex: '#174EEF',
        class: 'bg-accentuation-info-500',
      },
      {
        name: '700',
        hex: '#113DEB',
        class: 'bg-accentuation-info-700',
      },
      {
        name: '900',
        hex: '#0725E4',
        class: 'bg-accentuation-info-900',
      },
    ],
  },
  {
    name: 'Font',
    colors: [
      {
        name: '50',
        hex: '#E6E8EA',
        class: 'bg-font-50',
      },
      {
        name: '100',
        hex: '#C1C5CA',
        class: 'bg-font-100',
      },
      {
        name: '200',
        hex: '#989EA7',
        class: 'bg-font-200',
      },
      {
        name: '500',
        hex: '#505969',
        class: 'bg-font-500',
      },
      {
        name: '700',
        hex: '#272E3E',
        class: 'bg-font-700',
      },
      {
        name: '900',
        hex: '#131A26',
        class: 'bg-font-900',
      },
    ],
  },
  {
    name: 'Light blue',
    colors: [
      {
        name: '50',
        hex: '#F8FAFC',
        class: 'bg-light-blue-50',
      },
      {
        name: '100',
        hex: '#EFF3F7',
        class: 'bg-light-blue-100',
      },
      {
        name: '200',
        hex: '#E4EBF2',
        class: 'bg-light-blue-200',
      },
      {
        name: '300',
        hex: '#D9E3EC',
        class: 'bg-light-blue-300',
      },
      {
        name: '500',
        hex: '#C8D7E4',
        class: 'bg-light-blue-500',
      },
      {
        name: '700',
        hex: '#BBCDDD',
        class: 'bg-light-blue-700',
      },
      {
        name: '900',
        hex: '#A7BED1',
        class: 'bg-light-blue-900',
      },
    ],
  },
  {
    name: 'Focus',
    colors: [
      {
        name: 'main',
        hex: '#458FFF',
        class: 'bg-focus-main',
      },
    ],
  },
  {
    name: 'Brand',
    colors: [
      {
        name: 'pink',
        hex: '#E6006B',
        class: 'bg-brand-pink',
      },
      {
        name: 'dark-blue',
        hex: '#011638',
        class: 'bg-brand-dark-blue',
      },
    ],
  },
]
</script>

<style scoped></style>
