import { buildProps } from '@puik/utils'
import type { ExtractPropTypes, PropType } from 'vue'
import type Avatar from './avatar.vue'

export enum PuikAvatarMode {
  PRIMARY = 'primary',
  REVERSE = 'reverse',
}

export const avatarModes = ['primary', 'reverse'] as const
export type PuikAvatarModeString = (typeof avatarModes)[number]

export enum PuikAvatarSize {
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large',
  JUMBO = 'jumbo',
}

export const avatarSizes = ['small', 'medium', 'large', 'jumbo'] as const
export type PuikAvatarSizeString = (typeof avatarSizes)[number]

export enum PuikAvatarType {
  PHOTO = 'photo',
  ICON = 'icon',
  INITIALS = 'initials',
}

export const avatarTypes = ['photo', 'icon', 'initials'] as const
export type PuikAvatarTypeString = (typeof avatarTypes)[number]

export const avatarProps = buildProps({
  id: {
    type: String,
    required: false,
    default: undefined,
  },
  mode: {
    type: [
      String as PropType<PuikAvatarMode>,
      String as PropType<PuikAvatarModeString>,
    ],
    required: false,
    default: 'primary',
  },
  size: {
    type: [
      String as PropType<PuikAvatarSize>,
      String as PropType<PuikAvatarSizeString>,
    ],
    required: false,
    default: 'medium',
  },
  type: {
    type: [
      String as PropType<PuikAvatarType>,
      String as PropType<PuikAvatarTypeString>,
    ],
    required: false,
    default: 'initials',
  },
  icon: {
    type: String,
    required: false,
    default: '',
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
