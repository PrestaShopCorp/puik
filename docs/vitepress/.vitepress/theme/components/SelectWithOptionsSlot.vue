<template>
  <div class="flex flex-col gap-y-10">
    <puik-select
      v-model="selectedOption"
      :key="selectedOption"
      id="select-prepend-id"
      name="select-prepend-name"
      label="Select an option"
      :options="options"
      :open="openRef"
      @open="(state) => openRef = state"
    >
      <PuikDivider />
      <div class="px-2 py-1 puik-body-default-bold">Category A</div>
      <PuikDivider />
      <template v-for="option in options">
        <puik-option
          v-if="option.category === 'catégorie A'"
          :key="option.value"
          :label="option.label"
          :value="option.value"
          :disabled="option.disabled"
          :is-selected="selectedOption === option"
          @select="(payload) => handleSelect(payload)"
          @open="(state) => openRef = state"
        >
          {{ option.label }}
        </puik-option>
      </template>
      <PuikDivider />
      <div class="px-2 py-1 puik-body-default-bold">Category B</div>
      <PuikDivider />
      <template v-for="option in options">
        <puik-option
          v-if="option.category === 'catégorie B'"
          :key="option.value"
          :label="option.label"
          :value="option.value"
          :disabled="option.disabled"
          :is-selected="selectedOption === option"
          @select="(payload) => handleSelect(payload)"
          @open="(state) => openRef = state"
        >
          {{ option.label }}
        </puik-option>
      </template>
    </puik-select>
    <div class="puik-body-default">
      Selected option: <pre><code>{{ selectedOption }}</code></pre>
    </div>
  </div>
</template>

<script setup lang="ts">
import { OptionType } from '@prestashopcorp/puik-components';
import { ref } from 'vue';

const openRef = ref(false);
const options = ref([
  { label: 'label 1', value: '1', category: 'catégorie A' },
  { label: 'label 2', value: '2', category: 'catégorie A' },
  { label: 'label 3', value: '3', category: 'catégorie A', disabled: true },
  { label: 'label 4', value: '4', category: 'catégorie B' },
  { label: 'label 5', value: '5', category: 'catégorie B' }
]);
const selectedOption = ref();
const handleSelect = (payload: OptionType) => {
  selectedOption.value === payload ? selectedOption.value = undefined : selectedOption.value = payload;
};
</script>
