const path = require('path');

module.exports = {
  plugins: {
    'postcss-url': {
      url: 'copy',
      basePath: path.join(__dirname, 'src'),
      assetsPath: path.join(__dirname, 'dist/assets')
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
