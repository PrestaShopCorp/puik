<template>
  <div class="flex flex-col items-center gap-4">
    <puik-tag
      id="puik-tag-default"
      content="default tag"
      size="default"
      variant="neutral"
      data-test="tag-default"
    />
    <puik-tag
      id="puik-tag-blue"
      content="blue tag"
      size="default"
      variant="blue"
      data-test="tag-blue"
    />
    <puik-tag
      id="puik-tag-small"
      content="small size"
      size="small"
      variant="green"
      data-test="tag-small"
    />
    <puik-tag
      id="puik-tag-icon"
      content="with icon tag"
      icon="favorite"
      variant="purple"
      data-test="tag-icon"
    />
    <puik-tag
      id="puik-tag-disabled"
      content="disabled tag"
      :disabled="true"
      data-test="tag-disabled"
    />
    <puik-tag
      id="puik-tag-long"
      content="very long text content very long text content"
      tooltip-position="bottom"
      data-test="tag-long"
    />
  </div>
</template>

<script setup lang="ts">
</script>
