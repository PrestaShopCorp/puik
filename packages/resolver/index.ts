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
  options: PuikResolverOptions,
): SideEffectsInfo {
  const { ssr } = options
  const themeFolder = '@prestashopcorp/puik-theme'
  const ComponentsFolder = '@prestashopcorp/puik-components'

  return ssr
    ? [`${themeFolder}/base.css`, `${themeFolder}/puik-${dirName}.css`]
    : `${ComponentsFolder}/${dirName}/style/css`
}

function resolveComponent(
  name: string,
  options: PuikResolverOptions,
): ComponentInfo | undefined {
  if (options.exclude && name.match(options.exclude)) return

  if (!name.match(/^Puik[A-Z]/)) return

  return {
    name,
    from: `@prestashopcorp/puik-components`,
    sideEffects: getSideEffects(name.slice(4).toLowerCase(), options),
  }
}

export function PuikResolver(
  options: PuikResolverOptions = {},
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
