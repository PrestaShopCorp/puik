import '../style';
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
  dataTest?: string
  ariaLabel?: string
  ariaLive?: `${PuikAriaLive}`
}

export type BadgeInstance = InstanceType<typeof Badge>;
