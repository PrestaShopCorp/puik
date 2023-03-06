import { withInstall } from '@puik/utils'

import ConfigProvider from './src/config-provider'

export const PuikConfigProvider = withInstall({
  ...ConfigProvider,
  name: 'PuikConfigProvider',
})
export default PuikConfigProvider

export * from './src/config-provider'
