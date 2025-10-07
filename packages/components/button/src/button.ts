import type { RouteLocationRaw } from 'vue-router';
import type Button from './button.vue';

export enum PuikButtonVariants {
  Primary = 'primary',
  PrimaryReverse = 'primary-reverse',
  Secondary = 'secondary',
  SecondaryReverse = 'secondary-reverse',
  Tertiary = 'tertiary',
  TertiaryReverse = 'tertiary-reverse',
  Text = 'text',
  TextReverse = 'text-reverse',
  Destructive = 'destructive',
  Info = 'info',
  Success = 'success',
  Warning = 'warning',
  Danger = 'danger',
}

export enum PuikButtonSizes {
  Small = 'sm',
  Medium = 'md',
  Large = 'lg',
}
export enum PuikButtonLoaderPositions {
  Left = 'left',
  Right = 'right'
}

export interface ButtonProps {
  variant?: PuikButtonVariants | `${PuikButtonVariants}`
  size?: PuikButtonSizes | `${PuikButtonSizes}`
  fluid?: boolean
  wrapLabel?: boolean
  disabled?: boolean
  disabledReason?: string
  leftIcon?: string
  rightIcon?: string
  loading?: boolean
  loaderPosition?: `${PuikButtonLoaderPositions}`
  to?: RouteLocationRaw
  href?: string
  value?: string | number | Record<string, any> | any[]
  dataTest?: string
  ariaLabel?: string
}

export type ButtonInstance = InstanceType<typeof Button>;
