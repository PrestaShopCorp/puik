import type PaginationLoader from './pagination-loader.vue'

export interface PaginationLoaderProps {
  modelValue?: number
  disabled?: boolean
  label?: string
  loaderButtonLabel?: string
}

export type PaginationInstance = InstanceType<typeof PaginationLoader>
