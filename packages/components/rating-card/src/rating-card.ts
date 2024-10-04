import '@prestashopcorp/puik-components/rating-card/style/css';
import type RatingCard from './rating-card.vue';

export enum PuikRatingCardVariants {
  Extended = 'extended',
  Compact = 'compact',
}
export enum PuikRatingSize {
  Small = 'small',
  large = 'large',
}

export interface RatingCardProps {
  id: string
  variant?: `${PuikRatingCardVariants}`
  size?: `${PuikRatingSize}`
  totalRatings: number[]
  showTotalRatings?: boolean
  dataTest?: string
  ariaLabel?: string
}

export type RatingCardInstance = InstanceType<typeof RatingCard>;
