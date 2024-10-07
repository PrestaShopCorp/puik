<template>
  <div
    class="puik-rating-card"
    :variant="props.variant"
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
      ]"
    >
      <PuikIcon
        v-for="starIndex in 5"
        :key="starIndex"
        class="puik-rating-card_star"
        :icon="getStarState(starIndex).icon"
        font-size="20px"
        color="#FFA000"
        :fill="getStarState(starIndex).fill"
        node-type="span"
      />
    </div>
    <PuikIcon
      v-else
      class="puik-rating-card_star"
      icon="star"
      font-size="16px"
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
import { RatingCardProps, PuikRatingCardVariants } from './rating-card';
import { PuikIcon } from '@prestashopcorp/puik-components/icon';

defineOptions({
  name: 'PuikRatingCard'
});

const props = withDefaults(defineProps<RatingCardProps>(), {
  variant: PuikRatingCardVariants.Extended,
  showTotalRatings: true
});

const averageRating = computed(() => {
  const total = props.totalRatings.reduce((sum, rating) => sum + rating, 0);
  return props.totalRatings.length ? total / props.totalRatings.length : 0;
});

const getStarState = (starIndex: number) => {
  const starValue = starIndex;
  if (averageRating.value >= starValue) return { icon: 'star', fill: 1 };
  if (averageRating.value >= starValue - 0.5) return { icon: 'star_half', fill: 1 };
  return { icon: 'star', fill: 0 };
};
</script>

<style lang="scss">
@use '@prestashopcorp/puik-theme/src/base.scss';
@use '@prestashopcorp/puik-theme/src/puik-icon.scss';
@use '@prestashopcorp/puik-theme/src/puik-rating-card.scss';
</style>
