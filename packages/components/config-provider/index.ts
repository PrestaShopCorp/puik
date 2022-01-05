import { withInstall } from '@puik/utils/with-install'

import ConfigProvider from './src/config-provider'

export const PuikConfigProvider = withInstall(ConfigProvider)
export default PuikConfigProvider

export * from './src/config-provider'
