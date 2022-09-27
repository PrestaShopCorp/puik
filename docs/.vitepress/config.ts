import { defineConfig } from 'vitepress'
import { version } from '../package.json'
import type { DefaultTheme } from 'vitepress'

interface Theme extends DefaultTheme.Config {
  snippetLangs?: string[]
}

const sortPages = (pages: DefaultTheme.SidebarItem[]) =>
  pages.sort((currentPage, nextPage) =>
    currentPage.text.localeCompare(nextPage.text)
  )

export default defineConfig({
  title: 'PrestaShop Puik',
  description: 'PrestaShop Design System library docs',
  appearance: false,
  themeConfig: {
    nav: [
      { text: 'Guide', link: '/guide/installation', activeMatch: '/guide/' },
      {
        text: 'Components',
        link: '/components/alert',
        activeMatch: '/components/',
      },
      {
        text: version,
        items: [
          {
            text: 'Changelog',
            link: 'https://github.com/PrestaShopCorp/puik/blob/main/CHANGELOG.md',
          },
          {
            text: 'Contributing',
            link: 'https://github.com/PrestaShopCorp/puik/blob/main/CONTRIBUTING.md',
          },
        ],
      },
    ],
    sidebar: {
      '/components/': [
        {
          items: sortPages([
            /*Components pages*/
            { text: 'Alert', link: '/components/alert' },
            { text: 'Button', link: '/components/button' },
          ]),
        },
      ],
      '/guide/': [
        {
          items: [
            { text: 'Installation', link: '/guide/installation' },
            { text: 'Getting started', link: '/guide/getting-started' },
            { text: 'Tailwind CSS Preset', link: '/guide/tailwindcss-preset' },
          ],
        },
      ],
    },
    snippetLangs: ['vue', 'html'],
  } as Theme,
})
