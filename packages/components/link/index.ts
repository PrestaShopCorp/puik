import { withInstall } from '@puik/utils'

import Link from './src/link.vue'

export const PuikLink = withInstall({ ...Link, name: 'PuikLink' })
export default PuikLink

export * from './src/link'
