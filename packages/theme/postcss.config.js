const path = require('path');

module.exports = {
  plugins: {
    'postcss-import': {},
    'postcss-mixins': {},
    'postcss-simple-vars': {},
    'postcss-url': {
      url: 'rebase',
      basePath: path.join(__dirname, 'src'),
      assetsPath: path.join(__dirname, 'dist/assets')
    },
    'tailwindcss/nesting': {},
    tailwindcss: {
      config: path.join(__dirname, 'tailwind.config.js')
    },
    'postcss-extend-rule': {
      name: 'extend',
      onUnusedExtend: 'ignore'
    },
    // 'postcss-nested': {},
    'postcss-preset-env': {
      stage: 1,
      features: {
        'nesting-rules': true
      }
    },
    autoprefixer: {},
    cssnano: {
      preset: ['default', { discardComments: { removeAll: true } }]
    }
  }
};
