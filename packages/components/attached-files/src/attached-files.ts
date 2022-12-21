import { buildProps } from '@puik/utils'
import type { PropType } from 'vue'

export const attachedFilesProps = buildProps({
  id: {
    type: String,
    required: true,
  },
  getApi: {
    type: Function as PropType<() => Promise<string>>,
    required: true,
  },
} as const)
