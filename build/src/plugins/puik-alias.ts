import { PUIK_PKG, PUIK_PREFIX } from '../constants'

import type { Plugin } from 'rollup'

export function PuikAlias(): Plugin {
  const THEME = `${PUIK_PREFIX}/theme`

  return {
    name: 'puik-alias-plugin',
    resolveId(id, importer, options) {
      if (!id.startsWith(PUIK_PREFIX)) return

      if (id.startsWith(THEME)) {
        return {
          id: id.replaceAll(THEME, `${PUIK_PKG}/theme`),
          external: 'absolute',
        }
      }

      return this.resolve(id, importer, { skipSelf: true, ...options })
    },
  }
}
