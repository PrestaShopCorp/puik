<template>
  <div
    :id="props.id"
    class="puik-rating-card"
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
      class="puik-rating-card_stars-container"
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
      v-if="booleanishProps.showTotalRatings && totalRatings.length"
      class="puik-rating-card_total-ratings"
    >
      ({{ totalRatingsArray.length }})
    </span>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { RatingCardProps, PuikRatingCardVariants } from './rating-card';
import { PuikIcon } from '@prestashopcorp/puik-components/icon';
import { generateId } from '@prestashopcorp/puik-utils';

defineOptions({
  name: 'PuikRatingCard'
});

const props = withDefaults(defineProps<RatingCardProps>(), {
  id: `puik-rating-card-${generateId()}`,
  variant: PuikRatingCardVariants.Extended,
  showTotalRatings: true
});

const booleanishProps = computed(() => {
  return {
    showTotalRatings: props.showTotalRatings === 'true' ? true : props.showTotalRatings === 'false' ? false : props.showTotalRatings
  };
});

const isValidTotalRatingsString = (value: string): boolean => {
  try {
    const array = JSON.parse(value);
    return Array.isArray(array) && array.every(num => typeof num === 'number');
  } catch {
    return false;
  }
};

const totalRatingsArray = computed(() => {
  if (typeof props.totalRatings === 'string' && isValidTotalRatingsString(props.totalRatings)) {
    return JSON.parse(props.totalRatings);
  } else if (typeof props.totalRatings === 'string') {
    return props.totalRatings.split(',').map(num => {
      const parsed = Number(num.trim());
      return isNaN(parsed) ? null : parsed;
    }).filter(n => n !== null) as number[];
  }
  return props.totalRatings;
});

const averageRating = computed(() => {
  const total = totalRatingsArray.value.reduce((sum: number, rating: number) => sum + rating, 0);
  return totalRatingsArray.value.length ? total / totalRatingsArray.value.length : 0;
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
