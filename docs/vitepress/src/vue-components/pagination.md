---
description :   A Pagination component
name: pagination
outline: deep
---
<script setup>
  import Pagination from '@vitepress/components/Pagination.vue';
  import DataAttributes from '@vitepress/utilities/DataAttributes.vue';
  import ComponentOverview from '@vitepress/utilities/ComponentOverview.vue';

  const attributes = [
    {
      prop: 'id',
      type: 'string',
      default: 'puik-pagination-{randomNumber}',
      description: 'Sets the id HTML attribute of puik-pagination. If this prop is not configured, an id will be automatically generated using this pattern: puik-pagination-{randomNumber}'
    },
    {
      prop: 'variant',
      type: 'PuikPaginationVariants',
      details: `
enum PuikPaginationVariants {
  Loader = 'loader',
  Mobile = 'mobile',
  Small = 'small',
  Medium = 'medium',
  Large = 'large',
}
      `,
      default: 'medium',
      description: 'Sets the pagination variant'
    },
    {
      prop: 'totalItem',
      type: 'number',
      required: true,
      default: 'undefined',
      description: 'Sets the total item count'
    },
    {
      prop: 'itemsPerPage',
      type: 'number',
      default: 5,
      description: 'v-model of the items per page'
    },
    {
      prop: 'itemsPerPageOptions',
      type: 'number[]',
      default: [5, 10, 15],
      description: 'Sets the items per page options'
    },
    {
      prop: 'displayItemsPerPage',
      type: 'boolean',
      default: true,
      description: 'Displays the select in order to choose the desired number of items per page (for large pagination variant)'
    },
    {
      prop: 'displayResults',
      type: 'boolean',
      default: true,
      description: 'Displays a label in front of the pagination for the small, medium and large variants indicating either the current page for the small variant or the total number of items for the medium and large variants'
    },
    {
      prop: 'page',
      type: 'number',
      required: true,
      default: 1,
      description: 'v-model of the current page'
    },
    {
      prop: 'label',
      type: 'string',
      default: 'undefined',
      description: 'Sets the label'
    },
    {
      prop: 'loaderButtonLabel',
      type: 'string',
      default: 'undefined',
      description: 'Sets the text used in button on loader variant'
    },
    {
      prop: 'dataTest',
      type: 'string',
      default: 'undefined',
      description: 'Sets the data-test attribute `nextButton-${dataTest}` `previousButton-${dataTest}` `label-${dataTest}` `loadMoreButton-${dataTest}` (only for loader variant)'
    }
  ];
</script>

# Pagination

 A `Pagination`

## Overview

::: raw
<ComponentOverview>
  <Pagination />
</ComponentOverview>
:::

::: details Show Code

```vue


```

:::

## API Reference

### Props

::: raw
<DataAttributes :attributes="attributes" />
:::
