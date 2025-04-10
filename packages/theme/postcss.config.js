const path = require('path');

module.exports = {
  plugins: {
    'postcss-copy': {
      src: path.join(__dirname, 'assets'),
      dest: path.join(__dirname, 'dist'),
      template: '[name].[ext]',
    },
    tailwindcss: {
      config: path.join(__dirname, 'tailwind.config.js')
    },
    autoprefixer: {},
    cssnano: {
      preset: 'default'
    }
  }
};
