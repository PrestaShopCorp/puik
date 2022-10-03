import { withInstallFunction } from '@puik/utils'

import Notify from './src/notify'

export const PuikSnackBar = withInstallFunction(Notify, '$notify')
export default PuikSnackBar

export * from './src/snack-bar'
