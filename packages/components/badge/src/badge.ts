import type Badge from './badge.vue';
import { PuikAriaLive } from '@prestashopcorp/puik-components/base/src/common';

export enum PuikBadgeVariants {
  Success = 'success',
  Warning = 'warning',
  Danger = 'danger',
  Info = 'info',
  Neutral = 'neutral',
}

export interface BadgeProps {
  variant?: PuikBadgeVariants | `${PuikBadgeVariants}`
  ariaLive?: `${PuikAriaLive}`
  ariaLabel?: string
  dataTest?: string
}

export type BadgeInstance = InstanceType<typeof Badge>;
