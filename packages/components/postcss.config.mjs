const plugins = {
  plugins: {
    'postcss-import': {},
    'postcss-extend-rule': {
      name: 'extend',
      onUnusedExtend: 'ignore'
    },
    'postcss-mixins': {},
    'postcss-simple-vars': {},
    tailwindcss: {
      config: './tailwind.config.mjs'
    },
    'postcss-nested': {},
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

export default plugins;
