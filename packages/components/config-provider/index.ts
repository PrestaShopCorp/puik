import { withInstall } from '@puik/utils'

import ConfigProvider from './src/config-provider'

export const PuikConfigProvider = withInstall(ConfigProvider)
export default PuikConfigProvider

export * from './src/config-provider'
