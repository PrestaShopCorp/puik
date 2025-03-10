import { puikTailwindPreset } from '@prestashopcorp/puik-tailwind-preset';

export default {
  presets: [puikTailwindPreset],
  content: ['./**/src/*.{vue,js,ts,jsx,tsx,postcss}', './**/style/*.{vue,js,ts,jsx,tsx,postcss,css}'],
  darkMode: 'class'
};
