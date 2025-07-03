<template>
  <div class="flex flex-col gap-4">
    <p class="ml-8">Translation feature: examples with PuikLabel and PuikPagination</p>
    <div class="max-w-[200px] ml-8">
      <puik-select
        id="select-lang"
        v-model="optionSelected"
        :options="options"
        label="Select language"
      />
    </div>
    <puik-config-provider :key="locale" :locale="optionSelected.value">
      <div style="display: flex; flex-direction: column; gap: 1rem;">
        <puik-label style="margin-left: 32px;" readonly for="input">
          Label
        </puik-label>
        <puik-pagination
          v-model:page="page"
          v-model:items-per-page="itemsPerPage"
          :total-item="150"
          variant="large"
        />
      </div>
    </puik-config-provider>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const locale = ref('en')
const page = ref(1)
const itemsPerPage = ref(5)
const options = ref([
  { label: 'en', value: 'en' },
  { label: 'fr', value: 'fr' }
]);
const optionSelected = ref(options.value[0]);
</script>
