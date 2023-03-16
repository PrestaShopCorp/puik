import { withInstall } from '@prestashopcorp/puik-utils'

import ConfigProvider from './src/config-provider'

export const PuikConfigProvider = withInstall(ConfigProvider)
export default PuikConfigProvider

export * from './src/config-provider'
export * from './src/hooks/use-global-config'
export * from './src/config-provider-keys'
export * from './src/config-provider-props'
