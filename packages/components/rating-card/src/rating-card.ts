import type RatingCard from './rating-card.vue';
import type { booleanish } from '../../types';

export enum PuikRatingCardVariants {
  Extended = 'extended',
  Compact = 'compact',
}

export interface RatingCardProps {
  id?: string
  variant?: `${PuikRatingCardVariants}`
  totalRatings: number[] | string
  showTotalRatings?: booleanish
  dataTest?: string
  ariaLabel?: string
}

export type RatingCardInstance = InstanceType<typeof RatingCard>;
