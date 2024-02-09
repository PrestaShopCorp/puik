import { buildProps } from '@puik/utils'
import type { ExtractPropTypes, PropType } from 'vue'
import type NotificationBar from './notification-bar.vue'

export const notificationBarVariants = [
  'blue',
  'purple',
  'yellow',
  'green',
] as const

export type PuikNotificationBarVariants =
  (typeof notificationBarVariants)[number]

export interface NotificationLink {
  url: string
  text: string
}

export interface NotificationBarMessage {
  icon?: string
  text: string
  link?: NotificationLink
}

export interface NotificationBarTeleport {
  to: string
  prepend?: boolean
}

export type PuikMessagesType = NotificationBarMessage[]

export const notificationBarProps = buildProps({
  teleport: {
    type: Object as PropType<NotificationBarTeleport>,
    required: false,
    default: undefined,
  },
  variant: {
    type: String as PropType<PuikNotificationBarVariants>,
    required: false,
    default: notificationBarVariants[0],
  },
  closable: {
    type: Boolean,
    required: false,
    default: true,
  },
  messages: {
    type: Array as PropType<PuikMessagesType>,
    required: true,
    default: undefined,
  },
} as const)

export type NotificationBarProps = ExtractPropTypes<typeof notificationBarProps>

export type NotificationBarInstance = InstanceType<typeof NotificationBar>
