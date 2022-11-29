import { buildProps } from '@puik/utils'
import type { ExtractPropTypes, PropType } from 'vue'
import type Timeline from './timeline.vue'

export type TimelineItem = {
  width: number | string
  percentage: number | string
}

export const timelineProps = buildProps({
  items: {
    type: [] as PropType<TimelineItem[]>,
  },
} as const)

export type TimelineProps = ExtractPropTypes<typeof timelineProps>

export type TimelineInstance = InstanceType<typeof Timeline>
