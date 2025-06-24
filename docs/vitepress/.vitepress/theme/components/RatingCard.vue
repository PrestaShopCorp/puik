<template>
  <div class="flex flex-col items-center justify-center">
    <PuikRatingCard
      id="puik-rating-card-example"
      :totalRatings="[4, 5, 3, 4, 5]"
      variant='extended'
      showTotalRatings
      dataTest='rating-card'
      ariaLabel='Rating Card'
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

</script>
