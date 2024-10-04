<template>
  <div
    class="puik-rating-card"
    :variant="props.variant"
    :size="props.size"
    :totalRatings="props.totalRatings"
    :data-test="props.dataTest"
    :ariaLabel="props.ariaLabel"
  >
    <span
      v-if="props.variant === PuikRatingCardVariants.Compact"
      class="puik-rating-card_average-value"
    >
      {{ averageRating.toFixed(1) }}
    </span>
    <div
      v-if="props.variant === PuikRatingCardVariants.Extended"
      :class="[
        'puik-rating-card_stars-container',
        sizeClass,
      ]"
    >
      <PuikIcon
        v-for="starIndex in 5"
        :key="starIndex"
        class="puik-rating-card_star"
        :icon="getStarState(starIndex)"
        :font-size="props.size === PuikRatingSize.large ? '24px' : '16px'"
        color="#FFA000"
        node-type="span"
      />
    </div>
    <PuikIcon
      v-else
      class="puik-rating-card_star"
      icon="star"
      :font-size="props.size === PuikRatingSize.large ? '24px' : '16px'"
      color="#FFA000"
      node-type="span"
    />
    <span
      v-if="showTotalRatings && totalRatings.length"
      class="puik-rating-card_total-ratings"
    >
      ({{ totalRatings.length }})
    </span>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { RatingCardProps, PuikRatingCardVariants, PuikRatingSize } from './rating-card';
import { PuikIcon } from '@prestashopcorp/puik-components/icon';

defineOptions({
  name: 'PuikRatingCard'
});

const props = withDefaults(defineProps<RatingCardProps>(), {
  variant: PuikRatingCardVariants.Extended,
  size: PuikRatingSize.Small,
  showTotalRatings: true
});

const sizeClass = computed(() => (props.size === 'small' ? 'puik-rating-card--small' : 'puik-rating-card--large'));

const averageRating = computed(() => {
  const total = props.totalRatings.reduce((sum, rating) => sum + rating, 0);
  return props.totalRatings.length ? total / props.totalRatings.length : 0;
});

const getStarState = (starIndex: number) => {
  const starValue = starIndex;
  if (averageRating.value >= starValue) return 'star';
  if (averageRating.value >= starValue - 0.5) return 'star_half';
  return 'star';
};
</script>

<style lang="scss">
@use '@prestashopcorp/puik-theme/src/base.scss';
@use '@prestashopcorp/puik-theme/src/puik-icon.scss';
@use '@prestashopcorp/puik-theme/src/puik-rating-card.scss';
</style>
