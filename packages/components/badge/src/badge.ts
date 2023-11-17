import type Badge from './badge.vue';

export enum PuikBadgeVariants {
  Success = 'success',
  Warning = 'warning',
  Danger = 'danger',
  Info = 'info',
  Neutral = 'neutral',
}

export interface BadgeProps {
  variant?: PuikBadgeVariants | `${PuikBadgeVariants}`
}

export type BadgeInstance = InstanceType<typeof Badge>;
