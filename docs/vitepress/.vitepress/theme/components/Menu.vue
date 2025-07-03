<template>
  <div class="flex items-center justify-center">
    <puik-menu
      :align="align"
      :position="position"
      :width="width"
      :max-height="maxHeight"
    >
      <template #trigger>
        <puik-button>Show menu</puik-button>
      </template>

      <template #default="{ close }">
        <puik-menu-item-title>
          First section title
        </puik-menu-item-title>
        <puik-menu-item>
          <puik-button variant="text">
            Item
          </puik-button>
        </puik-menu-item>
        <puik-menu-item>
          <puik-button variant="text" left-icon="home">
            Item with icon
          </puik-button>
        </puik-menu-item>

        <puik-menu-item-separator />

        <puik-menu-item-title>
          Second section title
        </puik-menu-item-title>
        <p>
          Information text
        </p>
        <puik-menu-item>
          <puik-button variant="destructive" left-icon="delete" @click="close">
            Destructive item
          </puik-button>
        </puik-menu-item>
      </template>
    </puik-menu>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue';

const align = ref('left');
const position = ref('bottom');
const width = ref('200px');
const maxHeight = ref('300px');
</script>
