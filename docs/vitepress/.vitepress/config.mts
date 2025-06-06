import { resolve } from 'path';
import { defineConfig } from 'vitepress';
import { Plugin } from 'vite'
import Components from 'unplugin-vue-components/vite';
import { PuikResolver } from '@prestashopcorp/puik-resolver';
import tailwindcss from '@tailwindcss/vite';

const componentsPlugin = Components({
  resolvers: [PuikResolver()],
  dts: true
}) as unknown as Plugin;


// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'PUIK - PrestaShop UI Kit',
  description: 'The new PrestaShop UI Kit user documentation',
  srcDir: './src',
  head: [['link', { rel: 'icon', href: '/prestashop-favicon-black.png' }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Docs', link: '/vue-components/accordion' }
    ],

    sidebar: [
      {
        text: 'Overview',
        collapsed: false,
        items: [
          { text: 'Introduction', link: '/getting-started/introduction' }
        ]
      },
      {
        text: 'Vue Components',
        collapsed: false,
        items: [
          { text: 'Accordion', link: '/vue-components/accordion' },
          { text: 'Alert', link: '/vue-components/alert' },
          { text: 'Avatar', link: '/vue-components/avatar' }
        ]
      },
      {
        text: 'Demo',
        collapsed: false,
        items: [
          { text: 'Markdown examples', link: '/demo/markdown-examples' },
          { text: 'Runtime API Examples', link: '/demo/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  },
  vite: {
    plugins: [
      componentsPlugin,
      tailwindcss()
    ],
    server: {
      port: 5174
    },
    resolve: {
      alias: {
        '@prestashopcorp/puik-components': resolve(__dirname, '../node_modules/@prestashopcorp/puik-components'),
        '@prestashopcorp/puik-theme/assets': resolve(__dirname, '../node_modules/@prestashopcorp/puik-theme/assets'),
        '@prestashopcorp/puik-theme/src': resolve(__dirname, '../node_modules/@prestashopcorp/puik-theme/src'),
        '@vitepress/components': resolve(__dirname, '../.vitepress/components')
      }
    }
  }
});
