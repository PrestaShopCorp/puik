import { buildProps } from '@puik/utils'
import type { ExtractPropTypes, PropType } from 'vue'
import type Avatar from './avatar.vue'

export enum PuikAvatarMode {
  PRIMARY = 'primary',
  REVERSE = 'reverse',
}
export const AVATAR_MODE = {
  primary: 'white',
  reverse: 'black',
}

export enum PuikAvatarSize {
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large',
  JUMBO = 'jumbo',
}
export const ICONS_FONTSIZE = {
  small: '1rem',
  medium: '1.5rem',
  large: '2rem',
  jumbo: '2.8rem',
}

export enum PuikAvatarType {
  PHOTO = 'photo',
  ICON = 'icon',
  INITIALS = 'initials',
}

export const avatarProps = buildProps({
  id: {
    type: String,
    required: false,
    default: undefined,
  },
  mode: {
    type: String as PropType<PuikAvatarMode>,
    required: false,
    default: PuikAvatarMode.PRIMARY,
  },
  size: {
    type: String as PropType<PuikAvatarSize>,
    required: false,
    default: PuikAvatarSize.MEDIUM,
  },
  type: {
    type: String as PropType<PuikAvatarType>,
    required: false,
    default: PuikAvatarType.INITIALS,
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
  singleInitial: {
    type: Boolean,
    required: false,
    default: false,
  },
  dataTest: {
    type: String,
    required: false,
    default: undefined,
  },
} as const)

export type AvatarProps = ExtractPropTypes<typeof avatarProps>

export type AvatarInstance = InstanceType<typeof Avatar>
