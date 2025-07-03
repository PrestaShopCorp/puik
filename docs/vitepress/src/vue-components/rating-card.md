---
description : A RatingCard displays a summary of ratings, typically using stars. It supports both compact and extended display modes, and can show the total number of ratings.
name: rating card
outline: deep
---
<script setup>
  import RatingCard from '@vitepress/components/RatingCard.vue';
  import DataAttributes from '@vitepress/utilities/DataAttributes.vue';
  import ComponentOverview from '@vitepress/utilities/ComponentOverview.vue';

  const attributes = [
    {
      prop: 'id',
      type: 'string',
      default: 'puik-rating-card-{randomNumber}',
      description: 'Sets the id HTML attribute of puik-rating-card. If this prop is not configured, an id will be automatically generated using this pattern: puik-rating-card-{randomNumber}'
    },
    {
      prop: 'totalRatings',
      type: 'number[] | string',
      default: 'undefined',
      description: 'An array of numbers, a stringified version, or a comma-separated string of all ratings (set of numbers from 0 to 5 - including decimal values)'
    },
    {
      prop: 'variant',
      type: 'PuikRatingCardVariants',
      details: `
enum PuikRatingCardVariants {
  Extended = 'extended',
  Compact = 'compact',
}
      `,
      default: 'extended',
      description: 'Sets the rating card display to compact or expanded mode'
    },
    {
      prop: 'showTotalRatings',
      type: 'booleanish',
      default: true,
      description: 'Displays the number of total ratings'
    },
    {
      prop: 'dataTest',
      type: 'string',
      default: 'undefined',
      control: 'text',
      description: 'Sets the data-test attribute `dataTest` (puik-rating-card top level div element), `${dataTest}-star-icon` (star icon of compact variant), `${dataTest}-star-icon-${starIndex}` (star icons of extended variant)'
    },
    {
      prop: 'ariaLabel',
      type: 'string',
      default: 'undefined',
      description: 'Sets the aria-label attribute for accessibility'
    }
  ];
</script>

# RatingCard

A `RatingCard` displays a summary of ratings, typically using stars. It supports both compact and extended display modes, and can show the total number of ratings.

## Overview

::: raw
<ComponentOverview>
  <rating-card />
</ComponentOverview>
:::

::: details Show Code

```vue

<template>
  <PuikRatingCard
    id="puik-rating-card-example"
    :totalRatings="[4, 5, 3, 4, 5]"
    variant='extended'
    showTotalRatings
    dataTest='rating-card'
    ariaLabel='Rating Card'
  />
</template>

```

:::

## API Reference

### Props

::: raw
<DataAttributes :attributes="attributes" />
:::
