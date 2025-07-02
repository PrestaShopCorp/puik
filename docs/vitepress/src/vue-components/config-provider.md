---
description: The ConfigProvider component allows you to set global configuration options for Puik components, such as locale for translations.
name: config-provider
outline: deep
---

<script setup>
import ConfigProvider from '@vitepress/components/ConfigProvider.vue';
import DataAttributes from '@vitepress/utilities/DataAttributes.vue';
import ComponentOverview from '@vitepress/utilities/ComponentOverview.vue';

const config_provider_attributes = [
  {
    prop: 'locale',
    type: 'PuikConfigProviderLocale',
    details: `
enum PuikConfigProviderLocale {
  En = 'en',
  Fr = 'fr',
}
    `,
    default: 'en',
    description: 'Defines the language for all child Puik components'
  }
];
</script>

# ConfigProvider

The `ConfigProvider` component allows you to set global configuration options for Puik components, such as locale for translations.

## Overview

::: raw
<ComponentOverview>
  <ConfigProvider />
</ComponentOverview>
:::

::: details Show Code

```vue
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

```

:::

## Props

::: raw
<DataAttributes :attributes="config_provider_attributes" />
:::

## Usage

Wrap your application or a part of it with `<puik-config-provider>` to provide a locale to all nested Puik components:

```vue
<puik-config-provider locale="fr">
  <puik-label for="input" readonly>
    Label
  </puik-label>
  <puik-pagination
    v-model:page="page"
    v-model:items-per-page="itemsPerPage"
    :total-item="150"
    variant="large"
  />
</puik-config-provider>
```

