import vue from 'eslint-plugin-vue';
import typescriptParser from '@typescript-eslint/parser';
import vueParser from 'vue-eslint-parser'; // 👈 Ajouté explicitement

export default [
  {
    files: ['**/*.ts', '**/*.vue'],
    languageOptions: {
      parser: vueParser, // 👈 Utilisation directe du parser importé
      parserOptions: {
        parser: typescriptParser,
        ecmaVersion: 'latest',
        sourceType: 'module',
        extraFileExtensions: ['.vue'],
        project: ['./tsconfig.eslint.json']
      },
    },
    plugins: {
      vue
    },
    rules: {
      'vue/require-default-prop': 'warn',  // Exemple de règle vue
      'vue/no-unused-vars': 'error',       // Exemple de règle vue
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/restrict-template-expressions': 'off',
      '@typescript-eslint/strict-boolean-expressions': 'off',
      '@typescript-eslint/consistent-type-definitions': 'off',
      '@typescript-eslint/consistent-type-assertions': 'off',
      '@typescript-eslint/restrict-plus-operands': 'off',
      'no-template-curly-in-string': 'off'
    }
  },
  {
    ignores: [
      'node_modules',
      'dist',
      'pnpm-lock.yaml',
      'storybook-static',
      'coverage',
      '!.*'
    ]
  }
];
