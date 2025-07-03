<template>
  <div>
    <puik-table
      :headers="headers"
      :items="props.attributes"
      :expandable="false"
      :selectable="false"
      :searchBar="false"
      :fullWidth="true"
      :stickyFirstCol="false"
      :stickyLastCol="false"
    >
      <template #item-type="{ item }">
        <puik-badge
        variant="info"
        >
          <details v-if="item.details">
            <summary>
              {{ item.type }}
            </summary>
            <pre class="text-xs">
              <code><pre>{{ item.details }}</pre></code>
            </pre>
          </details>
          <span v-else>{{ item.type }}</span>
        </puik-badge>
      </template>
    </puik-table>
  </div>
</template>

<script setup lang="ts">
import type { PuikTableHeader } from '@prestashopcorp/puik-components'
import { ref } from 'vue';

const props = defineProps<{
  attributes: Record<string, any>[]
}>()

const headers: PuikTableHeader[] = [
  {
    text: 'Prop',
    value: 'prop',
    size: 'sm'
  },
    {
    text: 'Type',
    value: 'type',
    size: 'md'
  },
  {
    text: 'Default',
    value: 'default',
    size: 'sm'
  },
  {
    text: 'Description',
    value: 'description',
    size: 'lg'
  }
]

</script>
