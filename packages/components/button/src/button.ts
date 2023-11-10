import type { RouteLocationRaw } from 'vue-router'
import type Button from './button.vue'

export enum PuikButtonVariants {
  Primary = 'primary',
  PrimaryReverse = 'primary-reverse',
  Destructive = 'destructive',
  Secondary = 'secondary',
  SecondaryReverse = 'secondary-reverse',
  Tertiary = 'tertiary',
  Text = 'text',
  TextReverse = 'text-reverse',
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

export interface ButtonProps {
  variant?: PuikButtonVariants | `${PuikButtonVariants}`
  size?: PuikButtonSizes | `${PuikButtonSizes}`
  fluid?: boolean
  disabled?: boolean
  leftIcon?: string
  rightIcon?: string
  to?: RouteLocationRaw
  href?: string
  value?: string | number | Record<string, any> | any[]
}

export type ButtonInstance = InstanceType<typeof Button>
