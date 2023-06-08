import { ref } from 'vue'
import PuikBadge from '../../badge/src/badge.vue'
import PuikIcon from '../../icon/src/icon.vue'
import PuikTable from './../src/table.vue'
import type { PuikTableHeader } from '../src/table'
import type { Meta, Story, Args } from '@storybook/vue3'

export default {
  title: 'Components/Table',
  component: PuikTable,
  argTypes: {
    items: {
      control: 'none',
      description: 'Table items',
      table: {
        defaultValue: {
          summary: '[]',
        },
        type: { summary: 'any[]' },
      },
    },
    headers: {
      control: 'none',
      description: 'Table headers',
      table: {
        type: {
          summary: 'PuikTableHeader[]',
          detail: `
import type { PuikTableHeader } from '@prestashopcorp/puik/es/components/table/src/table'

interface PuikTableHeader {
  text: string | undefined
  value: string
  size: 'sm' | 'md' | 'lg' | undefined
  align: 'left' | 'center' | 'right' | undefined
}
`,
        },
      },
    },
    selectable: {
      control: 'boolean',
      description: 'Add col with checkbox',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    selection: {
      control: 'none',
      description: 'v-model of the selected rows',
      table: {
        defaultValue: {
          summary: '[]',
        },
        type: {
          summary: 'number[]',
        },
      },
    },
    '`header-${header.value}`': {
      control: 'none',
      description: 'Slot to replace header',
    },
    '`item-${header.value}`': {
      control: 'none',
      description: 'Slot to replace item',
    },
  },
  args: {
    selectable: false,
  },
} as Meta

const Template: Story = (args: Args) => ({
  components: {
    PuikTable,
    PuikBadge,
    PuikIcon,
  },
  setup() {
    const headers: PuikTableHeader[] = [
      {
        text: 'Nom',
        value: 'lastname',
        size: 'lg',
      },
      {
        text: 'Prénom',
        value: 'firstname',
      },
      {
        value: 'actions',
        size: 'sm',
      },
    ]
    const items = [
      {
        lastname: 'Beauchesne',
        firstname: 'Virginie',
      },
      {
        lastname: 'Bellefeuille',
        firstname: 'Simone',
      },
      {
        lastname: 'Salois',
        firstname: 'Étienne',
      },
      {
        lastname: 'Langelier',
        firstname: 'Bernadette',
      },
      {
        lastname: 'Roy',
        firstname: 'Agate',
      },
    ]
    const selection = ref([])
    return { args, headers, items, selection }
  },
  template: `<puik-table v-model:selection="selection" :headers="headers" :items="items" v-bind="args">
    <template #item-value1="{ item }">
      <puik-badge>
        {{ item.value1 }}
      </puik-badge>
    </template>
    <template #item-actions>
      <puik-icon icon="delete" aria-label="Delete item" class="ml-2"></puik-icon>
    </template>
  </puik-table>`,
})

export const Default = Template.bind({})
Default.args = {}
Default.parameters = {
  docs: {
    source: {
      code: `
      <!--VueJS Snippet-->

      <!--HTML/CSS Snippet-->
      `,
      language: 'html',
    },
  },
}
