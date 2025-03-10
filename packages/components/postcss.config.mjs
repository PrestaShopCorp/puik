const plugins = {
  plugins: {
    'postcss-import': {},
    'tailwindcss/nesting': {},
    tailwindcss: {
      config: './tailwind.config.mjs'
    },
    'postcss-mixins': {},
    'postcss-simple-vars': {},
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

export default plugins;
