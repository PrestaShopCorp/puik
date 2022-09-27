import { defineConfig } from 'vite'
import Components from 'unplugin-vue-components/vite'
import { PuikResolver } from '@prestashopcorp/puik'

export default defineConfig({
  plugins: [
    Components({
      include: [/\.vue$/, /\.md$/],
      resolvers: [
        PuikResolver({
          ssr: false,
        }),
      ],
    }),
  ],
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  ssr: { noExternal: ['@prestashopcorp/puik'] },
})
