import { buildProps } from '@puik/utils'
import type { ExtractPropTypes } from 'vue'
import type Overlay from './overlay.vue'

export const overlayProps = buildProps({} as const)

export type OverlayProps = ExtractPropTypes<typeof overlayProps>

export type OverlayInstance = InstanceType<typeof Overlay>
