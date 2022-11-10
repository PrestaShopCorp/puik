import { defineConfig } from 'vite'
import Components from 'unplugin-vue-components/vite'
import { PuikResolver } from '@prestashopcorp/puik'

export default defineConfig({
  plugins: [
    Components({
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      resolvers: [PuikResolver()],
    }),
  ],
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  ssr: { noExternal: ['@prestashopcorp/puik'] },
})
