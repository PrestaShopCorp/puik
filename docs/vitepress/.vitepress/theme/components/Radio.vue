<template>
  <div class="flex flex-col items-center justify-center gap-y-4">
    <puik-radio
      v-model="selectedValue"
      id="id_1"
      name="name_1"
      value="value 1"
      label="label prop"
      :disabled="false"
      aria-label="ariaLabel_1"
      aria-describedby="ariaDescribedby_1"
      sr-description-only="srDescriptionOnly_1"
      data-test="dataTest_1"
      @update:modelValue="selectedValue = $event"

    >
    </puik-radio>

    <puik-radio
      v-model="selectedValue"
      id="id_2"
      name="name_2"
      value="value 2"
      :disabled="false"
      aria-label="ariaLabel_2"
      aria-describedby="ariaDescribedby_2"
      sr-description-only="srDescriptionOnly_2"
      data-test="dataTest_2"
      @update:modelValue="selectedValue = $event"
    >
      Label slot
    </puik-radio>

    <puik-badge>modelValue: {{ selectedValue }}</puik-badge>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const selectedValue = ref<string | null>(null);
</script>
