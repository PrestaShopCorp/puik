import { buildProps } from '@puik/utils'
import type { ExtractPropTypes, PropType } from 'vue'
import type Divider from './divider.vue'

export enum PuikDividerOrientation {
  HORIZONTAL = 'horizontal',
  VERTICAL = 'vertical',
}

export const dividerOrientations = ['horizontal', 'vertical'] as const
export type PuikDividerOrientationString = (typeof dividerOrientations)[number]

export const dividerProps = buildProps({
  orientation: {
    type: [
      String as PropType<PuikDividerOrientation>,
      String as PropType<PuikDividerOrientationString>,
    ],
    required: false,
    default: PuikDividerOrientation.HORIZONTAL,
  },
} as const)

export type DividerProps = ExtractPropTypes<typeof dividerProps>

export type DividerInstance = InstanceType<typeof Divider>
