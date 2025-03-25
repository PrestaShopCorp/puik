import vue from 'eslint-plugin-vue';
import typescriptParser from '@typescript-eslint/parser';
import vueParser from 'vue-eslint-parser';

export default [
  {
    ignores: [
      'pnpm-lock.yaml',
      'node_modules',
      'dist',
      'coverage',
      'storybook-static',
      'docs/vitepress/.vitepress/cache',
      '!.*'
    ]
  },
  {
    files: ['**/*.vue'],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: typescriptParser,
        ecmaVersion: 'latest',
        sourceType: 'module',
        extraFileExtensions: ['.vue'],
        project: ['./tsconfig.eslint.json']
      }
    },
    plugins: {
      vue
    },
    rules: {
      'vue/require-default-prop': 'warn',
      'vue/no-unused-vars': 'error'
    }
  },
  {
    files: ['**/*.ts'],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: ['./tsconfig.eslint.json']
      }
    },
    rules: {
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/restrict-template-expressions': 'off',
      '@typescript-eslint/strict-boolean-expressions': 'off',
      '@typescript-eslint/consistent-type-definitions': 'off',
      '@typescript-eslint/consistent-type-assertions': 'off',
      '@typescript-eslint/restrict-plus-operands': 'off',
      'no-template-curly-in-string': 'off'
    }
  }
];
