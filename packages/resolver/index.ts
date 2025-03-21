import type { ComponentInfo, ComponentResolver } from 'unplugin-vue-components';

export interface PuikResolverOptions {
  /**
   * Exclude component name, if match do not resolve the name
   */
  exclude?: RegExp;
}

function resolveComponent(
  name: string,
  options: PuikResolverOptions
): ComponentInfo | undefined {
  if (options.exclude?.test(name)) return;
  if (!name.startsWith('Puik')) return;

  return {
    name,
    from: '@prestashopcorp/puik-components'
  };
}

export function PuikResolver(
  options: PuikResolverOptions = {}
): ComponentResolver[] {
  return [
    {
      type: 'component',
      resolve: (name: string) => resolveComponent(name, options)
    }
  ];
}
