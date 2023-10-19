import { buildProps } from '@puik/utils'
import type { ExtractPropTypes, PropType } from 'vue'
import type Avatar from './avatar.vue'

export const avatarColorVariants = [
  'neutral',
  'blue',
  'yellow',
  'green',
  'purple',
] as const
export type PuikAvatarBgColor = (typeof avatarColorVariants)[number]

export const avatarModes = ['primary', 'reverse'] as const
export type PuikAvatarMode = (typeof avatarModes)[number]

export const avatarSizes = ['small', 'medium', 'large', 'jumbo'] as const
export type PuikAvatarSize = (typeof avatarSizes)[number]

export const avatarTypes = ['photo', 'icon', 'initials'] as const
export type PuikAvatarType = (typeof avatarTypes)[number]

export const avatarProps = buildProps({
  id: {
    type: String,
    required: false,
    default: undefined,
  },
  colorVariant: {
    type: String as PropType<PuikAvatarBgColor>,
    required: false,
    default: 'neutral',
  },
  size: {
    type: String as PropType<PuikAvatarSize>,
    required: false,
    default: 'medium',
  },
  type: {
    type: String as PropType<PuikAvatarType>,
    required: false,
    default: 'initials',
  },
  mode: {
    type: String as PropType<PuikAvatarMode>,
    required: false,
    default: 'primary',
  },
  src: {
    type: String,
    required: false,
    default: '',
  },
  alt: {
    type: String,
    required: false,
    default: '',
  },
  icon: {
    type: String,
    required: false,
    default: '',
  },
  firstname: {
    type: String,
    required: false,
    default: '',
  },
  lastname: {
    type: String,
    required: false,
    default: '',
  },
} as const)

export type AvatarProps = ExtractPropTypes<typeof avatarProps>

export type AvatarInstance = InstanceType<typeof Avatar>
