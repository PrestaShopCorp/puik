<template>
  <div class="flex flex-wrap gap-8 items-center justify-center">
    <puik-tooltip heading="Heading" description="This is a tooltip" position="top" data-test="tooltip-top">
      <puik-icon icon="help_outline" font-size="1.25rem" />
    </puik-tooltip>
    <puik-tooltip heading="Heading" description="This is a tooltip" position="bottom" data-test="tooltip-bottom">
      <puik-icon icon="help_outline" font-size="1.25rem" />
    </puik-tooltip>
    <puik-tooltip heading="Heading" description="This is a tooltip" position="left" data-test="tooltip-left">
      <puik-icon icon="help_outline" font-size="1.25rem" />
    </puik-tooltip>
    <puik-tooltip heading="Heading" description="This is a tooltip" position="right" data-test="tooltip-right">
      <puik-icon icon="help_outline" font-size="1.25rem" />
    </puik-tooltip>
    <puik-tooltip :is-disabled="true" heading="Heading" description="No tooltip" position="top" data-test="tooltip-disabled">
      <puik-button>There is no tooltip</puik-button>
    </puik-tooltip>
    <puik-tooltip position="bottom" data-test="tooltip-custom">
      <puik-icon icon="help_outline" font-size="1.25rem" />
      <template #heading>Custom heading</template>
      <template #description>Custom description</template>
    </puik-tooltip>
  </div>
</template>

<script setup lang="ts">
</script>
