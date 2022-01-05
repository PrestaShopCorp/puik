import { PUIK_PKG, PUIK_PREFIX } from '../utils/constants'
import { getDistPackages } from '../utils/pkg'
import type { Plugin } from 'rollup'

export async function PuikAlias(): Promise<Plugin> {
  const pkgs = await getDistPackages()

  return {
    name: 'puik-alias-plugin',
    resolveId(id, importer, options) {
      if (!id.startsWith(PUIK_PREFIX)) return

      const THEME = `${PUIK_PREFIX}/theme`
      if (id.startsWith(THEME)) {
        return {
          id: id.replaceAll(THEME, `${PUIK_PKG}/theme`),
          external: 'absolute',
        }
      }

      let updatedId = id
      for (const pkg of pkgs) {
        if (id.startsWith(pkg.name))
          updatedId = updatedId.replace(pkg.name, pkg.dir)
      }
      return this.resolve(id, importer, { skipSelf: true, ...options })
    },
  }
}
