import { withInstall } from '@puik/utils'

import ProgressBar from './src/progress-bar.vue'

export const PuikProgressBar = withInstall({
  ...ProgressBar,
  name: 'PuikProgressBar',
})
export default PuikProgressBar

export * from './src/progress-bar'
