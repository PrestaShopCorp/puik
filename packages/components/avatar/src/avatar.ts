import '@prestashopcorp/puik-components/avatar/style/css';
import type Avatar from './avatar.vue';

export enum PuikAvatarMode {
  Primary = 'primary',
  Reverse = 'reverse',
}
export const AVATAR_MODE = {
  primary: 'white',
  reverse: 'black'
};

export enum PuikAvatarSize {
  Small = 'small',
  Medium = 'medium',
  Large = 'large',
  Jumbo = 'jumbo',
}
export const ICONS_FONTSIZE = {
  small: '1rem',
  medium: '1.5rem',
  large: '2rem',
  jumbo: '2.8rem'
};

export enum PuikAvatarType {
  Photo = 'photo',
  Icon = 'icon',
  Initials = 'initials',
}

export interface AvatarProps {
  id?: string
  mode?: `${PuikAvatarMode}`
  size?: `${PuikAvatarSize}`
  type?: `${PuikAvatarType}`
  icon?: string
  src?: string
  alt?: string
  firstName?: string
  lastName?: string
  singleInitial?: Boolean
  dataTest?: string
}

export type AvatarInstance = InstanceType<typeof Avatar>;
