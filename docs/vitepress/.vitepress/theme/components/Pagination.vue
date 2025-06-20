<template>
  <div class="flex items-center justify-center">
    <puik-pagination
      :id="id"
      :variant="variant"
      :total-item="totalItem"
      :items-per-page="itemsPerPage"
      :items-per-page-options="itemsPerPageOptions"
      :display-items-per-page="displayItemsPerPage"
      :display-results="displayResults"
      :page="page"
      :label="label"
      :loader-button-label="loaderButtonLabel"
      :data-test="dataTest"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const id = ref('puik-pagination-1')
const variant = ref('medium')
const totalItem = ref(50)
const itemsPerPage = ref(10)
const itemsPerPageOptions = ref([5, 10, 15])
const displayItemsPerPage = ref(true)
const displayResults = ref(true)
const page = ref(1)
const label = ref('Pagination label')
const loaderButtonLabel = ref('Load more')
const dataTest = ref('pagination')
</script>

