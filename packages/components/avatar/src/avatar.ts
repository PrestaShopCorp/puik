import type Avatar from './avatar.vue';

export enum PuikAvatarVariants {
  Primary = 'primary',
  Reverse = 'reverse',
}

export enum PuikAvatarSizes {
  Small = 'small',
  Medium = 'medium',
  Large = 'large',
  Jumbo = 'jumbo',
}

export interface AvatarProps {
  variant?: `${PuikAvatarVariants}`
  size?: `${PuikAvatarSizes}`
  icon?: string
  src?: string
  alt?: string
  dataTest?: string
}

export type AvatarInstance = InstanceType<typeof Avatar>;
