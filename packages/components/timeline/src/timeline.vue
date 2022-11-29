<template>
  <div class="timeline__container">
    <div
      v-for="(timelineItem, index) in items"
      :key="index"
      class="timeline__item"
      :style="{ flex: timelineItem.width }"
    >
      <puik-progress-bar :percentage="timelineItem.percentage" />
    </div>
  </div>
</template>

<script setup lang="ts">
import PuikProgressBar from '../../progress-bar'
import { timelineProps } from './timeline'
defineOptions({
  name: 'PuikTimeline',
})

defineProps(timelineProps)
</script>
