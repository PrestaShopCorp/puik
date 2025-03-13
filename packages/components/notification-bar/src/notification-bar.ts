import '../style';
import type NotificationBar from './notification-bar.vue';

export enum PuikNotificationBarVariants {
  Blue = 'blue',
  Purple = 'purple',
  Yellow = 'yellow',
  Green = 'green',
}

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

export type PuikMessagesType = NotificationBarMessage[];

export interface NotificationBarProps {
  teleport?: NotificationBarTeleport
  variant?: `${PuikNotificationBarVariants}`
  closable?: boolean
  messages: PuikMessagesType
}

export type NotificationBarInstance = InstanceType<typeof NotificationBar>;
