import { withInstallFunction } from '@puik/utils'

import Notify from './src/notify'

export const PuikSnackbar = withInstallFunction(Notify, '$notify')
export default PuikSnackbar

export * from './src/snackbar'
