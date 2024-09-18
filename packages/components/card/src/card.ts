import '@prestashopcorp/puik-components/card/style/css';
import type Card from './card.vue';

export enum PuikCardVariants {
  Highlight = 'highlight',
  Blue = 'blue',
  Purple = 'purple',
  Amber = 'amber',
  Green = 'green',
  Default = 'default',
}

export interface CardProps {
  variant?: PuikCardVariants | `${PuikCardVariants}`
  ariaLabel?: string
}

export type CardInstance = InstanceType<typeof Card>;
