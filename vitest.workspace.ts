import { defineWorkspace } from 'vitest/config';

export default defineWorkspace([
  './packages/resolver/vite.config.ts',
  './docs/storybook/vite.config.ts',
  './packages/puik/vite.config.ts',
  './packages/web-components/vite.config.ts',
  './packages/tailwind-preset/vite.config.ts',
  './packages/components/vite.config.ts',
  './playground/vite.config.ts'
]);
