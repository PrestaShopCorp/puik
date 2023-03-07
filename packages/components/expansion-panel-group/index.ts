import { withInstall, withNoopInstall } from '@puik/utils'

import ExpansionPanelGroup from './src/expansion-panel-group.vue'
import ExpansionPanel from './src/expansion-panel.vue'

export const PuikExpansionPanelGroup = withInstall(ExpansionPanelGroup)
export default PuikExpansionPanelGroup

export const PuikOption = withNoopInstall(ExpansionPanel)

export * from './src/expansion-panel-group'
