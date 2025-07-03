import { postcssIsolateStyles } from 'vitepress';

/** @type {import('postcss-load-config').Config} */
export default {
  plugins: [
    postcssIsolateStyles({
      includeFiles: [/vp-doc\.css/, /base\.css/]
    })
  ]
};
