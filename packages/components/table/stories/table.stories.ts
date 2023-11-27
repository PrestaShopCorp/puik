import { ref } from 'vue'
import PuikButton from '../../button/src/button.vue'
import PuikIcon from '../../icon/src/icon.vue'
import PuikTable from './../src/table.vue'
import type { PuikTableHeader } from '../src/table'
import type { Meta, StoryFn, StoryObj, Args } from '@storybook/vue3'

function generateData(length = 3) {
  return Array(length)
    .fill(null)
    .map((_, index) => {
      const firstname = `firstname${index}`
      const lastname = `lastname${index}`
      const email = `${lastname}.${firstname}@email.com`.toLowerCase()

      return {
        firstname,
        lastname,
        email,
        age: 40,
      }
    })
}

export default {
  title: 'Components/Table',
  component: PuikTable,
  tags: ['test', 'test2'],
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
    width: string | undefined
    align: 'left' | 'center' | 'right' | undefined
    sortable: boolean | undefined
  }
  `,
        },
      },
    },
    selectable: {
      control: 'boolean',
      description: 'Makes rows selectable',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    expandable: {
      control: 'boolean',
      description: 'Makes rows expandable',
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
    fullWidth: {
      control: 'boolean',
      description: 'Set the table width at 100%',
      table: {
        defaultValue: {
          summary: false,
        },
        type: {
          summary: 'boolean',
        },
      },
    },
    stickyFirstCol: {
      control: 'boolean',
      description: 'Makes the first column sticky',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    stickyLastCol: {
      control: 'boolean',
      description: 'Makes the last column sticky',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    '`header-${header.value}`': {
      control: 'none',
      description: 'Slot to replace header',
      table: {
        type: {
          summary: 'SlotProps',
          detail: `
{
  header: PuikTableHeader
  index: number
}
          `,
        },
      },
    },
    '`item-${header.value}`': {
      control: 'none',
      description: 'Slot to replace item',
      table: {
        type: {
          summary: 'SlotProps',
          detail: `
{
  item: any
  index: number
}
          `,
        },
      },
    },
    '`expanded-row-${rowIndex}`': {
      control: 'none',
      description: 'slot for expanded row content',
      table: {
        type: {
          summary: 'SlotProps',
          detail: `
{
  item: any
  index: number
}
          `,
        },
      },
    },
    select: {
      control: 'none',
      description: 'Event emitted on select row',
      table: {
        type: {
          summary: 'number',
        },
      },
    },
    'select:all': {
      control: 'none',
      description: 'Event emitted on select all row',
    },
    'update:selection': {
      control: 'none',
      description: 'Event emitted on selection change',
      table: {
        type: {
          summary: 'number[]',
        },
      },
    },
    sortColumn: {
      control: 'none',
      description: 'Event emitted when sorting a column',
      table: {
        type: {
          summary: 'string',
        },
      },
    },
  },
  args: {
    selectable: false,
    expandable: false,
    fullWidth: false,
    stickyFirstCol: false,
    stickyLastCol: false,
  },
} as Meta

const Template: StoryFn = (args: Args) => ({
  components: {
    PuikTable,
    PuikButton,
  },
  setup() {
    const selection = ref([])
    const items = generateData()
    const headers: PuikTableHeader[] = [
      {
        text: 'Nom',
        value: 'lastname',
        size: 'md',
      },
      {
        text: 'Prénom',
        value: 'firstname',
        size: 'md',
      },
      {
        text: 'Age',
        value: 'age',
        size: 'sm',
        align: 'center',
      },
      {
        text: 'Email',
        value: 'email',
        align: 'right',
      },
      {
        value: 'actions',
        size: 'sm',
      },
    ]
    return { args, headers, items, selection }
  },
  template: `<puik-table v-model:selection="selection" :headers="headers" :items="items" v-bind="args">
    <template #item-value1="{ item }">
    </template>
    <template #item-actions="{ item }">
      <puik-button
        variant="text"
        right-icon="delete"
        aria-label="Delete item"
      ></puik-button>
    </template>
  </puik-table>`,
})

const SortableTemplate: StoryFn = (args: Args) => ({
  components: {
    PuikTable,
    PuikButton,
    PuikIcon,
  },
  setup() {
    const selection = ref([])
    const items = generateData()
    const headers: PuikTableHeader[] = [
      {
        text: 'Nom',
        value: 'lastname',
        size: 'md',
        sortable: true,
      },
      {
        text: 'Prénom',
        value: 'firstname',
        size: 'md',
        sortable: true,
      },
      {
        text: 'Age',
        value: 'age',
        size: 'sm',
        align: 'center',
        sortable: true,
      },
      {
        text: 'Email',
        value: 'email',
        align: 'right',
      },
      {
        value: 'actions',
        size: 'sm',
      },
    ]
    return { args, headers, items, selection }
  },
  template: `<puik-table v-model:selection="selection" :headers="headers" :items="items" v-bind="args">
    <template #item-value1="{ item }">
    </template>
    <template #item-actions="{ item }">
      <puik-button
        variant="text"
        right-icon="delete"
        aria-label="Delete item"
      ></puik-button>
    </template>
  </puik-table>`,
})

export const Default: StoryObj = {
  render: Template,
  args: {},
  parameters: {
    docs: {
      source: {
        code: `
  <!--VueJS Snippet-->
  const headers: PuikTableHeader[] = [
    {
      text: 'Nom',
      value: 'lastname',
      size: 'md',
    },
    {
      text: 'Prénom',
      value: 'firstname',
      size: 'md',
    },
    {
      text: 'Age',
      value: 'age',
      size: 'sm',
      align: 'center',
    },
    {
      text: 'Email',
      value: 'email',
      align: 'right',
    },
    {
      value: 'actions',
      size: 'sm',
    },
  ]

  <puik-table
    v-model:selection="selection"
    :headers="headers"
    :items="items"
  >
    <template #item-actions="{ item }">
      <puik-button
        variant="text"
        right-icon="delete"
        aria-label="Delete item"
      ></puik-button>
    </template>
  </puik-table>

  <!--HTML/CSS Snippet-->
  <div class="puik-table__container">
    <!--
      Full width: "puik-table--full-width"

      th :
        size sm: "puik-table__head__row__item--sm"
        size md: "puik-table__head__row__item--md"
        size lg: "puik-table__head__row__item--lg"
      td :
        align left: "puik-table__body__row__item--left"
        align center: "puik-table__body__row__item--center"
        align right: "puik-table__body__row__item--right"
    -->
    <table class="puik-table">
      <thead>
        <tr>
          <th class="puik-table__head__row__item--selection">
            <div class="puik-checkbox puik-table__head__row__item--selection__checkbox">
              <input id="puik-checkbox-6915" class="puik-checkbox__input" type="checkbox">
              <label for="puik-checkbox-6915" class="puik-checkbox__label">Select all items</label>
            </div>
          </th>
          <th>Nom</th>
          <th>Prénom</th>
          <th>Age</th>
          <th>Email</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="puik-table__body__row__item--selection">
            <div class="puik-checkbox puik-table__body__row__item--selection__checkbox">
              <input id="puik-checkbox-7394" class="puik-checkbox__input" type="checkbox">
              <label for="puik-checkbox-7394" class="puik-checkbox__label">Select item</label>
            </div>
          </td>
          <td>Robel</td>
          <td>Alberto</td>
          <td>60</td>
          <td>robel.alberto@email.com</td>
          <td>
            <button class="puik-button puik-button--text puik-button--md" aria-label="Delete item">
              <div class="puik-icon material-icons-round puik-button__right-icon" style="font-size: 1.25rem;">delete</div>
            </button>
          </td>
        </tr>
        <tr>
          <td class="puik-table__body__row__item--selection">
            <div class="puik-checkbox puik-table__body__row__item--selection__checkbox">
              <input id="puik-checkbox-3889" class="puik-checkbox__input" type="checkbox">
              <label for="puik-checkbox-3889" class="puik-checkbox__label">Select item</label>
            </div>
          </td>
          <td>Toy</td>
          <td>Enos</td>
          <td>55</td>
          <td>toy.enos@email.com</td>
          <td>
            <button class="puik-button puik-button--text puik-button--md" aria-label="Delete item">
              <div class="puik-icon material-icons-round puik-button__right-icon" style="font-size: 1.25rem;">delete</div>
            </button>
          </td>
        </tr>
        <tr>
          <td class="puik-table__body__row__item--selection">
            <div class="puik-checkbox puik-table__body__row__item--selection__checkbox">
              <input id="puik-checkbox-282" class="puik-checkbox__input" type="checkbox">
              <label for="puik-checkbox-282" class="puik-checkbox__label">Select item</label>
            </div>
          </td>
          <td>Schumm</td>
          <td>Hollie</td>
          <td>21</td>
          <td>schumm.hollie@email.com</td>
          <td>
            <button class="puik-button puik-button--text puik-button--md" aria-label="Delete item">
              <div class="puik-icon material-icons-round puik-button__right-icon" style="font-size: 1.25rem;">delete</div>
            </button>
          </td>
        </tr>
        <tr>
          <td class="puik-table__body__row__item--selection">
            <div class="puik-checkbox puik-table__body__row__item--selection__checkbox">
              <input id="puik-checkbox-7691" class="puik-checkbox__input" type="checkbox">
              <label for="puik-checkbox-7691" class="puik-checkbox__label">Select item</label>
            </div>
          </td>
          <td>DuBuque</td>
          <td>Earnestine</td>
          <td>86</td>
          <td>dubuque.earnestine@email.com</td>
          <td>
            <button class="puik-button puik-button--text puik-button--md" aria-label="Delete item">
              <div class="puik-icon material-icons-round puik-button__right-icon" style="font-size: 1.25rem;">delete</div>
            </button>
          </td>
        </tr>
        <tr>
          <td class="puik-table__body__row__item--selection">
            <div class="puik-checkbox puik-table__body__row__item--selection__checkbox">
              <input id="puik-checkbox-2613" class="puik-checkbox__input" type="checkbox">
              <label for="puik-checkbox-2613" class="puik-checkbox__label">Select item</label>
            </div>
          </td>
          <td>Mann</td>
          <td>Hadley</td>
          <td>41</td>
          <td>mann.hadley@email.com</td>
          <td>
            <button class="puik-button puik-button--text puik-button--md" aria-label="Delete item">
              <div class="puik-icon material-icons-round puik-button__right-icon" style="font-size: 1.25rem;">delete</div>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
        `,
        language: 'html',
      },
    },
  },
}

export const Selectable: StoryObj = {
  render: Template,
  args: {
    selectable: true,
  },
  parameters: {
    docs: {
      source: {
        code: `
  <!--VueJS Snippet-->
  const headers: PuikTableHeader[] = [
    {
      text: 'Nom',
      value: 'lastname',
      size: 'md',
    },
    {
      text: 'Prénom',
      value: 'firstname',
      size: 'md',
    },
    {
      text: 'Age',
      value: 'age',
      size: 'sm',
      align: 'center',
    },
    {
      text: 'Email',
      value: 'email',
      align: 'right',
    },
    {
      value: 'actions',
      size: 'sm',
    },
  ]

  <puik-table
    v-model:selection="selection"
    :headers="headers"
    :items="items"
    :selectable="true"
  >
    <template #item-actions="{ item }">
      <puik-button
        variant="text"
        right-icon="delete"
        aria-label="Delete item"
      ></puik-button>
    </template>
  </puik-table>

  <!--HTML/CSS Snippet-->
  <div class="puik-table__container">
    <table class="puik-table">
      <thead>
        <tr>
          <th class="puik-table__head__row__item--selection puik-table__head__row__item--sm">
            <div class="puik-checkbox puik-table__head__row__item--selection__checkbox">
              <input id="puik-checkbox-3034" class="puik-checkbox__input" type="checkbox">
              <label for="puik-checkbox-3034" class="puik-checkbox__label">Select all items</label>
            </div>
          </th>
          <th class="puik-table__head__row__item puik-table__head__row__item--md">Nom</th>
          <th class="puik-table__head__row__item puik-table__head__row__item--md">Prénom</th>
          <th class="puik-table__head__row__item puik-table__head__row__item--sm">Age</th>
          <th class="puik-table__head__row__item">Email</th>
          <th class="puik-table__head__row__item puik-table__head__row__item--sm"></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="puik-table__body__row__item--selection">
            <div class="puik-checkbox puik-table__body__row__item--selection__checkbox">
              <input id="puik-checkbox-5700" class="puik-checkbox__input" type="checkbox">
              <label for="puik-checkbox-5700" class="puik-checkbox__label">Select item</label>
            </div>
          </td>
          <td>lastname0</td>
          <td>firstname0</td>
          <td>3</td>
          <td>lastname0.firstname0@email.com</td>
          <td>
            <button class="puik-button puik-button--text puik-button--md" aria-label="Delete item">
              <div class="puik-icon material-icons-round puik-button__right-icon" style="font-size: 1.25rem;">delete</div>
            </button>
          </td>
        </tr>
        <tr>
          <td class="puik-table__body__row__item--selection">
            <div class="puik-checkbox puik-table__body__row__item--selection__checkbox">
              <input id="puik-checkbox-137" class="puik-checkbox__input" type="checkbox">
              <label for="puik-checkbox-137" class="puik-checkbox__label">Select item</label>
            </div>
          </td>
          <td>lastname1</td>
          <td>firstname1</td>
          <td>95</td>
          <td>lastname1.firstname1@email.com</td>
          <td>
            <button class="puik-button puik-button--text puik-button--md" aria-label="Delete item">
              <div class="puik-icon material-icons-round puik-button__right-icon" style="font-size: 1.25rem;">delete</div>
            </button>
          </td>
        </tr>
        <tr>
          <td class="puik-table__body__row__item--selection">
            <div class="puik-checkbox puik-table__body__row__item--selection__checkbox">
              <input id="puik-checkbox-872" class="puik-checkbox__input" type="checkbox">
              <label for="puik-checkbox-872" class="puik-checkbox__label">Select item</label>
            </div>
          </td>
          <td>lastname2</td>
          <td>firstname2</td>
          <td>64</td>
          <td>lastname2.firstname2@email.com</td>
          <td>
            <button class="puik-button puik-button--text puik-button--md" aria-label="Delete item">
              <div class="puik-icon material-icons-round puik-button__right-icon" style="font-size: 1.25rem;">delete</div>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
        `,
        language: 'html',
      },
    },
  },
}

export const Expandable: StoryObj = {
  render: Template,
  args: {
    expandable: true,
  },
  parameters: {
    docs: {
      source: {
        code: `
  <!--VueJS Snippet-->
  const headers: PuikTableHeader[] = [
    {
      text: 'Nom',
      value: 'lastname',
      size: 'md',
    },
    {
      text: 'Prénom',
      value: 'firstname',
      size: 'md',
    },
    {
      text: 'Age',
      value: 'age',
      size: 'sm',
      align: 'center',
    },
    {
      text: 'Email',
      value: 'email',
      align: 'right',
    },
    {
      value: 'actions',
      size: 'sm',
    },
  ]

  <puik-table :expandable="true">
    <template #item-actions="{ item }">
      <puik-button
        variant="text"
        right-icon="delete"
        aria-label="Delete item"
      ></puik-button>
    </template>
  </puik-table>

  <!--HTML/CSS Snippet-->
  <table class="puik-table">
    <thead class="puik-table__head">
        <tr class="puik-table__head__row">
            <th class="puik-table__head__row__item puik-table__head__row__item--expandable"></th>
            <th class="puik-table__head__row__item puik-table__head__row__item--left puik-table__head__row__item--md">Nom</th>
            <th class="puik-table__head__row__item puik-table__head__row__item--left puik-table__head__row__item--md">Prénom</th>
            <th class="puik-table__head__row__item puik-table__head__row__item--center puik-table__head__row__item--sm">Age</th>
            <th class="puik-table__head__row__item puik-table__head__row__item--right">Email</th>
            <th class="puik-table__head__row__item puik-table__head__row__item--left puik-table__head__row__item--sm"></th>
        </tr>
    </thead>
    <tbody class="puik-table__body">
        <tr class="puik-table__body__row">
            <td class="puik-table__body__row__item puik-table__body__row__item--selection">
                <div class="puik-table__body__row__item__container">  
                    <div class="puik-icon" style="font-size: 24px;">keyboard_arrow_down</div>
                </div>
            </td>
            <td class="puik-table__body__row__item puik-table__body__row__item--left">lastname0</td>
            <td class="puik-table__body__row__item puik-table__body__row__item--left">firstname0</td>
            <td class="puik-table__body__row__item puik-table__body__row__item--center">40</td>
            <td class="puik-table__body__row__item puik-table__body__row__item--right">lastname0.firstname0@email.com</td>
            <td class="puik-table__body__row__item puik-table__body__row__item--left">
                <button class="puik-button puik-button--text puik-button--md" aria-label="Delete item">
                    <div class="puik-icon puik-button__right-icon" style="font-size: 1.25rem;">delete</div>
                </button>
            </td>
        </tr>
      
        <tr class="puik-table__body__row">
            <td class="puik-table__body__row__item puik-table__body__row__item--selection">
                <div class="puik-table__body__row__item__container">
                    <div class="puik-icon" style="font-size: 24px;">keyboard_arrow_down</div>
                </div>
            </td>
            <td class="puik-table__body__row__item puik-table__body__row__item--left">lastname1</td>
            <td class="puik-table__body__row__item puik-table__body__row__item--left">firstname1</td>
            <td class="puik-table__body__row__item puik-table__body__row__item--center">40</td>
            <td class="puik-table__body__row__item puik-table__body__row__item--right">lastname1.firstname1@email.com</td>
            <td class="puik-table__body__row__item puik-table__body__row__item--left">
                <button class="puik-button puik-button--text puik-button--md" aria-label="Delete item">
                    <div class="puik-icon puik-button__right-icon" style="font-size: 1.25rem;">delete</div>
                </button>
            </td>
        </tr>
        <tr class="puik-table__body__row">
            <td class="puik-table__body__row__item puik-table__body__row__item--selection">
                <div class="puik-table__body__row__item__container">
                    <div class="puik-icon" style="font-size: 24px;">keyboard_arrow_down</div>
                </div>
            </td>
            <td class="puik-table__body__row__item puik-table__body__row__item--left">lastname2</td>
            <td class="puik-table__body__row__item puik-table__body__row__item--left">firstname2</td>
            <td class="puik-table__body__row__item puik-table__body__row__item--center">40</td>
            <td class="puik-table__body__row__item puik-table__body__row__item--right">lastname2.firstname2@email.com</td>
            <td class="puik-table__body__row__item puik-table__body__row__item--left">
                <button class="puik-button puik-button--text puik-button--md" aria-label="Delete item">
                    <div class="puik-icon puik-button__right-icon" style="font-size: 1.25rem;">delete</div>
                </button>
            </td>
        </tr>
    </tbody>
</table>
        `,
        language: 'html',
      },
    },
  },
}

export const Sortable: StoryObj = {
  render: SortableTemplate,
  args: {},
  parameters: {
    docs: {
      source: {
        code: `
  <!--VueJS Snippet-->
  const headers: PuikTableHeader[] = [
    {
      text: 'Nom',
      value: 'lastname',
      size: 'md',
      sortable: true,
    },
    {
      text: 'Prénom',
      value: 'firstname',
      size: 'md',
      sortable: true,
    },
    {
      text: 'Age',
      value: 'age',
      size: 'sm',
      align: 'center',
      sortable: true,
    },
    {
      text: 'Email',
      value: 'email',
      align: 'right',
    },
    {
      value: 'actions',
      size: 'sm',
    },
  ]

  <puik-table :expandable="true">
    <template #item-actions="{ item }">
      <puik-button
        variant="text"
        right-icon="delete"
        aria-label="Delete item"
      ></puik-button>
    </template>
  </puik-table>

  <!--HTML/CSS Snippet-->
  <table class="puik-table">
    <thead class="puik-table__head">
        <tr class="puik-table__head__row">
            <th class="puik-table__head__row__item puik-table__head__row__item--expandable"></th>
            <th class="puik-table__head__row__item puik-table__head__row__item--left puik-table__head__row__item--md">Nom</th>
            <th class="puik-table__head__row__item puik-table__head__row__item--left puik-table__head__row__item--md">Prénom</th>
            <th class="puik-table__head__row__item puik-table__head__row__item--center puik-table__head__row__item--sm">Age</th>
            <th class="puik-table__head__row__item puik-table__head__row__item--right">Email</th>
            <th class="puik-table__head__row__item puik-table__head__row__item--left puik-table__head__row__item--sm"></th>
        </tr>
    </thead>
    <tbody class="puik-table__body">
        <tr class="puik-table__body__row">
            <td class="puik-table__body__row__item puik-table__body__row__item--selection">
                <div class="puik-table__body__row__item__container">  
                    <div class="puik-icon" style="font-size: 24px;">keyboard_arrow_down</div>
                </div>
            </td>
            <td class="puik-table__body__row__item puik-table__body__row__item--left">lastname0</td>
            <td class="puik-table__body__row__item puik-table__body__row__item--left">firstname0</td>
            <td class="puik-table__body__row__item puik-table__body__row__item--center">40</td>
            <td class="puik-table__body__row__item puik-table__body__row__item--right">lastname0.firstname0@email.com</td>
            <td class="puik-table__body__row__item puik-table__body__row__item--left">
                <button class="puik-button puik-button--text puik-button--md" aria-label="Delete item">
                    <div class="puik-icon puik-button__right-icon" style="font-size: 1.25rem;">delete</div>
                </button>
            </td>
        </tr>
      
        <tr class="puik-table__body__row">
            <td class="puik-table__body__row__item puik-table__body__row__item--selection">
                <div class="puik-table__body__row__item__container">
                    <div class="puik-icon" style="font-size: 24px;">keyboard_arrow_down</div>
                </div>
            </td>
            <td class="puik-table__body__row__item puik-table__body__row__item--left">lastname1</td>
            <td class="puik-table__body__row__item puik-table__body__row__item--left">firstname1</td>
            <td class="puik-table__body__row__item puik-table__body__row__item--center">40</td>
            <td class="puik-table__body__row__item puik-table__body__row__item--right">lastname1.firstname1@email.com</td>
            <td class="puik-table__body__row__item puik-table__body__row__item--left">
                <button class="puik-button puik-button--text puik-button--md" aria-label="Delete item">
                    <div class="puik-icon puik-button__right-icon" style="font-size: 1.25rem;">delete</div>
                </button>
            </td>
        </tr>
        <tr class="puik-table__body__row">
            <td class="puik-table__body__row__item puik-table__body__row__item--selection">
                <div class="puik-table__body__row__item__container">
                    <div class="puik-icon" style="font-size: 24px;">keyboard_arrow_down</div>
                </div>
            </td>
            <td class="puik-table__body__row__item puik-table__body__row__item--left">lastname2</td>
            <td class="puik-table__body__row__item puik-table__body__row__item--left">firstname2</td>
            <td class="puik-table__body__row__item puik-table__body__row__item--center">40</td>
            <td class="puik-table__body__row__item puik-table__body__row__item--right">lastname2.firstname2@email.com</td>
            <td class="puik-table__body__row__item puik-table__body__row__item--left">
                <button class="puik-button puik-button--text puik-button--md" aria-label="Delete item">
                    <div class="puik-icon puik-button__right-icon" style="font-size: 1.25rem;">delete</div>
                </button>
            </td>
        </tr>
    </tbody>
</table>
        `,
        language: 'html',
      },
    },
  },
}

export const FullWidth: StoryObj = {
  render: Template,
  args: {
    fullWidth: true,
    parameters: {
      docs: {
        source: {
          code: `
    <!--VueJS Snippet-->
    const headers: PuikTableHeader[] = [
      {
        text: 'Nom',
        value: 'lastname',
      },
      {
        text: 'Prénom',
        value: 'firstname',
      },
      {
        text: 'Age',
        value: 'age',
      },
    ]

    <puik-table
      v-model:selection="selection"
      :headers="headers"
      :items="items"
      full-width
    ></puik-table>

    <!--HTML/CSS Snippet-->
    <div class="puik-table__container">
      <table class="puik-table">
        <thead>
            <th class="puik-table__head__row__item puik-table__head__row__item--md">Nom</th>
            <th class="puik-table__head__row__item puik-table__head__row__item--md">Prénom</th>
            <th class="puik-table__head__row__item puik-table__head__row__item--sm">Age</th>
            <th class="puik-table__head__row__item">Email</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>lastname0</td>
            <td>firstname0</td>
            <td>3</td>
            <td>lastname0.firstname0@email.com</td>
          </tr>
          <tr>
            <td>lastname1</td>
            <td>firstname1</td>
            <td>95</td>
            <td>lastname1.firstname1@email.com</td>
          </tr>
          <tr>
            <td>lastname2</td>
            <td>firstname2</td>
            <td>64</td>
            <td>lastname2.firstname2@email.com</td>
          </tr>
        </tbody>
      </table>
    </div>
          `,
          language: 'html',
        },
      },
    },
  },
}

export const stickyColumns: StoryObj = {
  render: Template,
  args: {
    selectable: true,
    stickyFirstCol: true,
    stickyLastCol: true,
  },
  parameters: {
    docs: {
      source: {
        code: `
  <!--VueJS Snippet-->
  const headers: PuikTableHeader[] = [
    {
      text: 'Nom',
      value: 'lastname',
      size: 'md',
    },
    {
      text: 'Prénom',
      value: 'firstname',
      size: 'md',
    },
    {
      text: 'Age',
      value: 'age',
      size: 'sm',
      align: 'center',
    },
    {
      text: 'Email',
      value: 'email',
      align: 'right',
    },
    {
      value: 'actions',
      size: 'sm',
    },
  ]

  <puik-table
    v-model:selection="selection"
    :headers="headers"
    :items="items"
    :stickyFirstCol="true"
    :stickyLastCol="true"
  >
    <template #item-actions="{ item }">
      <puik-button
        variant="text"
        right-icon="delete"
        aria-label="Delete item"
      ></puik-button>
    </template>
  </puik-table>

  <!--HTML/CSS Snippet-->
  <table class="puik-table">
    <thead class="puik-table__head">
      <tr class="puik-table__head__row">
          <th class="puik-table__head__row__item puik-table__head__row__item--selection puik-table__head__row__item--sticky">
            <div class="puik-checkbox puik-table__head__row__item--selection__checkbox">
              <input id="puik-checkbox-9803" class="puik-checkbox__input" type="checkbox">
              <label for="puik-checkbox-9803" class="puik-checkbox__label">
                Select all items
              </label>
            </div>
          </th>
          <th class="puik-table__head__row__item puik-table__head__row__item--left puik-table__head__row__item--md">Nom</th>
          <th class="puik-table__head__row__item puik-table__head__row__item--left puik-table__head__row__item--md">Prénom</th>
          <th class="puik-table__head__row__item puik-table__head__row__item--center puik-table__head__row__item--sm">Age</th>
          <th class="puik-table__head__row__item puik-table__head__row__item--right">Email</th>
          <th class="puik-table__head__row__item puik-table__head__row__item--left puik-table__head__row__item--sm puik-table__head__row__item--sticky"></th>
      </tr>
    </thead>
    <tbody class="puik-table__body">
      <tr class="puik-table__body__row">
          <td class="puik-table__body__row__item puik-table__body__row__item--selection puik-table__body__row__item--sticky">
            <div class="puik-checkbox puik-table__body__row__item--selection__checkbox">
              <input id="puik-checkbox-3764" class="puik-checkbox__input" type="checkbox">
              <label for="puik-checkbox-3764" class="puik-checkbox__label">
                Select item
              </label>
            </div>
          </td>
          <td class="puik-table__body__row__item puik-table__body__row__item--left">lastname0</td>
          <td class="puik-table__body__row__item puik-table__body__row__item--left">firstname0</td>
          <td class="puik-table__body__row__item puik-table__body__row__item--center">40</td>
          <td class="puik-table__body__row__item puik-table__body__row__item--right">lastname0.firstname0@email.com</td>
          <td class="puik-table__body__row__item puik-table__body__row__item--left puik-table__body__row__item--sticky">
            <button class="puik-button puik-button--text puik-button--md" aria-label="Delete item">
                <!--v-if-->
                <div class="puik-icon puik-button__right-icon" style="font-size: 1.25rem;">delete</div>
            </button>
          </td>
      </tr>
      <tr class="puik-table__body__row">
          <td class="puik-table__body__row__item puik-table__body__row__item--selection puik-table__body__row__item--sticky">
            <div class="puik-checkbox puik-table__body__row__item--selection__checkbox">
              <input id="puik-checkbox-4045" class="puik-checkbox__input" type="checkbox">
              <label for="puik-checkbox-4045" class="puik-checkbox__label">
                Select item
              </label>
            </div>
          </td>
          <td class="puik-table__body__row__item puik-table__body__row__item--left">lastname1</td>
          <td class="puik-table__body__row__item puik-table__body__row__item--left">firstname1</td>
          <td class="puik-table__body__row__item puik-table__body__row__item--center">40</td>
          <td class="puik-table__body__row__item puik-table__body__row__item--right">lastname1.firstname1@email.com</td>
          <td class="puik-table__body__row__item puik-table__body__row__item--left puik-table__body__row__item--sticky">
            <button class="puik-button puik-button--text puik-button--md" aria-label="Delete item">
                <!--v-if-->
                <div class="puik-icon puik-button__right-icon" style="font-size: 1.25rem;">delete</div>
            </button>
          </td>
      </tr>
      <tr class="puik-table__body__row">
          <td class="puik-table__body__row__item puik-table__body__row__item--selection puik-table__body__row__item--sticky">
            <div class="puik-checkbox puik-table__body__row__item--selection__checkbox">
              <input id="puik-checkbox-468" class="puik-checkbox__input" type="checkbox">
              <label for="puik-checkbox-468" class="puik-checkbox__label">
                Select item
              </label>
            </div>
          </td>
          <td class="puik-table__body__row__item puik-table__body__row__item--left">lastname2</td>
          <td class="puik-table__body__row__item puik-table__body__row__item--left">firstname2</td>
          <td class="puik-table__body__row__item puik-table__body__row__item--center">40</td>
          <td class="puik-table__body__row__item puik-table__body__row__item--right">lastname2.firstname2@email.com</td>
          <td class="puik-table__body__row__item puik-table__body__row__item--left puik-table__body__row__item--sticky">
            <button class="puik-button puik-button--text puik-button--md" aria-label="Delete item">
                <!--v-if-->
                <div class="puik-icon puik-button__right-icon" style="font-size: 1.25rem;">delete</div>
            </button>
          </td>
      </tr>
    </tbody>
  </table>
        `,
        language: 'html',
      },
    },
  },
}

const ColSizesTemplate: StoryFn = (args: Args) => ({
  components: {
    PuikTable,
  },
  args: {},
  setup() {
    const item = { sm: 'sm', md: 'md', lg: 'lg', auto: 'auto' }
    const items = [item, item]
    const headers: PuikTableHeader[] = [
      {
        text: 'sm',
        value: 'sm',
        size: 'sm',
      },
      {
        text: 'md',
        value: 'md',
        size: 'md',
      },
      {
        text: 'lg',
        value: 'lg',
        size: 'lg',
      },
      {
        text: 'auto',
        value: 'auto',
      },
    ]
    return { args, items, headers }
  },
  template: `<puik-table v-bind="args" :headers="headers" :items="items"></puik-table>`,
})

export const ColSizes: StoryObj = {
  render: ColSizesTemplate,
  args: {},
  parameters: {
    docs: {
      source: {
        code: `
  <!--VueJS Snippet-->
  const headers: PuikTableHeader[] = [
    {
      text: 'sm',
      value: 'sm',
      size: 'sm',
    },
    {
      text: 'md',
      value: 'md',
      size: 'md',
    },
    {
      text: 'lg',
      value: 'lg',
      size: 'lg',
    },
    {
      text: 'auto',
      value: 'auto',
    },
  ]

  <puik-table
    :headers="headers"
    :items="items"
  ></puik-table>

  <!--HTML/CSS Snippet-->
  <div class="puik-table__container">
    <table class="puik-table">
      <thead>
        <tr>
          <th class="puik-table__head__row__item puik-table__head__row__item--sm">sm</th>
          <th class="puik-table__head__row__item puik-table__head__row__item--md">md</th>
          <th class="puik-table__head__row__item puik-table__head__row__item--lg">lg</th>
          <th>auto</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>sm</td>
          <td>md</td>
          <td>lg</td>
          <td>auto</td>
        </tr>
        <tr>
          <td>sm</td>
          <td>md</td>
          <td>lg</td>
          <td>auto</td>
        </tr>
      </tbody>
    </table>
  </div>
        `,
        language: 'html',
      },
    },
  },
}

const TextAlignTemplate: StoryFn = (args: Args) => ({
  components: {
    PuikTable,
  },
  args: {},
  setup() {
    const item = { left: 'left', center: 'center', right: 'right' }
    const items = [item, item]
    const headers: PuikTableHeader[] = [
      {
        text: 'left',
        value: 'left',
        align: 'left',
        size: 'md',
      },
      {
        text: 'center',
        value: 'center',
        align: 'center',
        size: 'md',
      },
      {
        text: 'right',
        value: 'right',
        align: 'right',
        size: 'md',
      },
    ]
    return { args, items, headers }
  },
  template: `<puik-table v-bind="args" :headers="headers" :items="items"></puik-table>`,
})

export const TextAlign: StoryObj = {
  render: TextAlignTemplate,
  args: {},
  parameters: {
    docs: {
      source: {
        code: `
  <!--VueJS Snippet-->
  const headers: PuikTableHeader[] = [
    {
      text: 'left',
      value: 'left',
      align: 'left',
      size: 'md',
    },
    {
      text: 'center',
      value: 'center',
      align: 'center',
      size: 'md',
    },
    {
      text: 'right',
      value: 'right',
      align: 'right',
      size: 'md',
    },
  ]

  <puik-table
    :headers="headers"
    :items="items"
  ></puik-table>

  <!--HTML/CSS Snippet-->
  <div class="puik-table__container">
    <table class="puik-table">
      <thead>
        <tr>
          <th class="puik-table__head__row__item--left">left</th>
          <th class="puik-table__head__row__item--center">center</th>
          <th class="puik-table__head__row__item--right">lg</th>
          <th>fluid</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="puik-table__body__row__item--left">left</td>
          <td class="puik-table__body__row__item--center">center</td>
          <td class="puik-table__body__row__item--right">right</td>
        </tr>
        <tr>
          <td class="puik-table__body__row__item--left">left</td>
          <td class="puik-table__body__row__item--center">center</td>
          <td class="puik-table__body__row__item--right">right</td>
        </tr>
      </tbody>
    </table>
  </div>
        `,
        language: 'html',
      },
    },
  },
}
