import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Puik Documentation',
  titleTemplate: 'Prestashop', // add a pipe between title and suffix, but you can change the format
  description: 'All you need to know',
  cleanUrls: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Notes', link: '/mes-notes' },
    ],

    sidebar: {
      '/mes-notes': [
        {
          text: 'Wow incroyable',
          items: [
            { text: 'Config', link: '/mes-notes#config' },
            { text: 'Pagelol', link: '/mes-notes#page' },
            { text: 'Truc comme ca', link: '/mes-notes#misc' },
            { text: 'Des idees incroyable', link: '/mes-notes#idee' },
          ],
        },
      ],
      '/': [
        {
          text: 'Examples',
          items: [
            { text: 'Runtime API Examples', link: '/api-examples' },
            { text: 'Markdown Examples', link: '/markdown-examples' },
          ],
        },
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
    ],
  },
  locales: {
    root: {
      label: 'English EZMONEY',
      lang: 'en',
      link: '/',
    },
    fr: {
      label: 'Français',
      lang: 'fr',
      link: '/fr',
    },
  },
})
