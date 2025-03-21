const { defineConfig } = require('eslint-define-config');

module.exports = defineConfig({
  root: true,
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 'latest',
    sourceType: 'module',
    extraFileExtensions: ['.vue'],
    project: ['./tsconfig.eslint.json']
  },
  env: {
    browser: true,
    node: true
  },
  extends: [
    'plugin:vue/vue3-recommended'
  ],
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/restrict-template-expressions': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'off',
    '@typescript-eslint/consistent-type-definitions': 'off',
    '@typescript-eslint/consistent-type-assertions': 'off',
    '@typescript-eslint/restrict-plus-operands': 'off',
    'no-template-curly-in-string': 'off'
  },
  ignores: [
    'node_modules',
    'dist',
    'pnpm-lock.yaml',
    'storybook-static',
    'coverage',
    '!.*'
  ]
});

