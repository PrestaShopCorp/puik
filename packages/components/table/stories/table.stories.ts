import { ref } from 'vue'
import PuikBadge from '../../badge/src/badge.vue'
import PuikTable from './../src/table.vue'
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
  },
  setup() {
    const headers = [
      {
        text: 'Nom',
        value: 'lastname',
      },
      {
        text: 'Prénom',
        value: 'firstname',
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
