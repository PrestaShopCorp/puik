import { kebabCase } from 'lodash-unified'
import type {
  ComponentInfo,
  ComponentResolver,
  SideEffectsInfo,
} from 'unplugin-vue-components'
export interface PuikResolverOptions {
  /**
   * use commonjs lib & source css or scss for ssr
   */
  ssr?: boolean

  /**
   * exclude component name, if match do not resolve the name
   */
  exclude?: RegExp
}

function getSideEffects(
  dirName: string,
  options: PuikResolverOptions
): SideEffectsInfo {
  const { ssr } = options
  const themeFolder = '@prestashopcorp/puik/theme'
  const esComponentsFolder = '@prestashopcorp/puik/es/components'

  return ssr
    ? `${themeFolder}/puik-${dirName}.css`
    : `${esComponentsFolder}/${dirName}/style/css`
}

function resolveComponent(
  name: string,
  options: PuikResolverOptions
): ComponentInfo | undefined {
  if (options.exclude && name.match(options.exclude)) return

  if (!name.match(/^Puik[A-Z]/)) return

  const kebabName = kebabCase(name.slice(4))

  const { ssr } = options

  return {
    name,
    from: `@prestashopcorp/puik/${ssr ? 'lib' : 'es'}`,
    sideEffects: getSideEffects(kebabName, options),
  }
}

export function PuikResolver(
  options: PuikResolverOptions = {}
): ComponentResolver[] {
  let optionsResolved: PuikResolverOptions

  function resolveOptions() {
    if (optionsResolved) return optionsResolved
    optionsResolved = {
      ssr: false,
      exclude: undefined,
      ...options,
    }
    return optionsResolved
  }

  return [
    {
      type: 'component',
      resolve: (name: string) => {
        const options = resolveOptions()
        return resolveComponent(name, options)
      },
    },
  ]
}
