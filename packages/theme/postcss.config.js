const path = require('path');

module.exports = {
  plugins: {
    'postcss-import': {},
    'tailwindcss/nesting': {},
    tailwindcss: {
      config: path.join(__dirname, 'tailwind.config.js')
    },
    'postcss-mixins': {},
    'postcss-simple-vars': {},
    'postcss-url': {
      url: 'rebase',
      basePath: path.join(__dirname, 'src'),
      assetsPath: path.join(__dirname, 'dist/assets')
    },
    'postcss-preset-env': {
      stage: 1,
      features: {
        'nesting-rules': false
      }
    },
    autoprefixer: {}
    // cssnano: {
    //   preset: ['default', { discardComments: { removeAll: true } }]
    // }
  }
};
