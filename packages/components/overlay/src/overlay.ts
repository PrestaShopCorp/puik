import { buildProps } from '@puik/utils'
import type { ExtractPropTypes } from 'vue'
import type Overlay from './overlay.vue'

export const overlayProps = buildProps({
  backgroundColor: {
    type: String,
    default: 'rgba(0, 0, 0, 0.5)',
    required: false,
  },
} as const)

export type OverlayProps = ExtractPropTypes<typeof overlayProps>

export type OverlayInstance = InstanceType<typeof Overlay>
