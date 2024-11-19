import { ref } from 'vue';
import { PuikTable, PuikButton, PuikIcon, type PuikTableHeader } from '@prestashopcorp/puik-components';
import type { Meta, StoryFn, StoryObj, Args } from '@storybook/vue3';

function generateData(length = 3) {
  return Array(length)
    .fill(null)
    .map((_, index) => {
      const firstname = `firstname${index}`;
      const lastname = `lastname${index}`;
      const email = `${lastname}.${firstname}@email.com`.toLowerCase();

      return {
        firstname,
        lastname,
        email,
        age: 40
      };
    });
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
          summary: '[]'
        },
        type: { summary: 'any[]' }
      }
    },
    headers: {
      control: 'none',
      description: 'Table headers',
      table: {
        type: {
          summary: 'PuikTableHeader[]',
          detail: `
// Import
import type { PuikTableHeader, PuikTableSearchInputTypes } from '@prestashopcorp/puik-components';

// Details
interface PuikTableHeader {
  value: string
  text?: string
  size?: 'sm' | 'md' | 'lg'
  align?: 'left' | 'center' | 'right'
  width?: string
  sortable?: boolean
  preventExpand?: boolean
  searchable?: boolean
  searchSubmit?: boolean
  searchType?: {$PuikTableSearchInputTypes}
}

enum PuikTableSearchInputTypes {
  Text = 'text',
  Range = 'range',
}
  `
        }
      }
    },
    expandable: {
      control: 'boolean',
      description: 'Makes rows expandable',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    },
    selectable: {
      control: 'boolean',
      description: 'Makes rows selectable',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    },
    searchBar: {
      control: 'boolean',
      description: 'Display the search bar',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    },
    searchFromServer: {
      control: 'boolean',
      description:
        'No client-side search handling (however the searchSubmit event is always emitted with a gloabaSearchOptions payload with useful informations to create a query)',
      table: {
        type: {
          summary: 'boolean'
        },
        defaultValue: { summary: 'false' }
      }
    },
    sortFromServer: {
      control: 'boolean',
      description:
        'No client-side sort handling (however the sortColumn event is always emitted with a sortOption type payload with useful informations to create a query)',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    },
    fullWidth: {
      control: 'boolean',
      description: 'Sets the table width at 100%',
      table: {
        defaultValue: {
          summary: false
        },
        type: {
          summary: 'boolean'
        }
      }
    },
    stickyFirstCol: {
      control: 'boolean',
      description: 'Makes the first column sticky',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    },
    stickyLastCol: {
      control: 'boolean',
      description: 'Makes the last column sticky',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
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
          `
        }
      }
    },
    '`item-{header.value}`': {
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
          `
        }
      }
    },
    'expanded-row': {
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
          `
        }
      }
    },
    select: {
      control: 'none',
      description: 'Event emitted on select row',
      table: {
        type: {
          summary: 'number'
        }
      }
    },
    'select:all': {
      control: 'none',
      description: 'Event emitted on select all row'
    },
    'update:selection': {
      control: 'none',
      description: 'Event emitted on selection change',
      table: {
        type: {
          summary: 'number[]'
        }
      }
    },
    sortColumn: {
      control: 'none',
      description: 'Event emitted when sorting a column',
      table: {
        type: {
          summary: 'event => sortOption',
          detail: `
// Payload type = sortOption

//Import
import type { sortOption } from '@prestashopcorp/puik-components';

// Detail
type sortOption = {
  sortBy?: string
  sortOrder?: PuikTableSortOrder
}
`
        }
      }
    },
    searchSubmit: {
      description: 'Event emitted when clicking the search button',
      control: 'none',
      table: {
        type: {
          summary: 'event => SearchOption[]',
          detail: `
// Payload type = Array<SearchOption>

// Import
import type { searchOption, inputRange } from '@prestashopcorp/puik-components';

// Details
type searchOption = {
  searchBy: string;
  inputText?: string | undefined;
  inputRange?: inputRange | undefined;
}

type inputRange = {
  min?: number | undefined;
  max?: number | undefined;
}
          `
        }
      }
    },
    searchResultsLocally: {
      description: 'Event emitted when clicking the search button and prop searchFromServer is false. Return search results (items)',
      control: 'none',
      table: {
        type: {
          summary: 'event => any[]'
        }
      }
    }
  },
  args: {
    expandable: false,
    selectable: false,
    searchBar: false,
    searchFromServer: false,
    sortFromServer: false,
    fullWidth: false,
    stickyFirstCol: false,
    stickyLastCol: false
  }
} as Meta;

const Template: StoryFn = (args: Args) => ({
  components: {
    PuikTable,
    PuikButton
  },
  setup() {
    const selection = ref([]);
    const items = generateData();
    const headers: PuikTableHeader[] = [
      {
        text: 'Nom',
        value: 'lastname',
        size: 'md',
        searchable: true
      },
      {
        text: 'Prénom',
        value: 'firstname',
        size: 'md',
        searchable: true
      },
      {
        text: 'Age',
        value: 'age',
        size: 'sm',
        align: 'right',
        searchable: true
      },
      {
        text: 'Email',
        value: 'email',
        size: 'md',
        align: 'left',
        searchable: true
      },
      {
        value: 'actions',
        size: 'sm',
        align: 'center',
        preventExpand: true,
        searchSubmit: true
      }
    ];
    return { args, headers, items, selection };
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
  </puik-table>`
});

const SearchableTemplate: StoryFn = (args: Args) => ({
  components: {
    PuikTable,
    PuikButton,
    PuikIcon
  },
  setup() {
    const selection = ref([]);
    const items = generateData();
    const headers: PuikTableHeader[] = [
      {
        text: 'Nom',
        value: 'lastname',
        size: 'md',
        searchable: true,
        searchType: 'text'
      },
      {
        text: 'Prénom',
        value: 'firstname',
        size: 'md',
        searchable: true,
        searchType: 'text'
      },
      {
        text: 'Age',
        value: 'age',
        size: 'sm',
        align: 'right',
        searchable: true,
        searchType: 'range'
      },
      {
        text: 'Email',
        value: 'email',
        align: 'left',
        searchable: true,
        searchType: 'text'
      },
      {
        value: 'actions',
        size: 'sm',
        align: 'center',
        preventExpand: true,
        searchable: true,
        searchSubmit: true
      }
    ];
    return { args, headers, items, selection };
  },
  template: `
  <puik-table v-model:selection="selection" :headers="headers" :items="items" v-bind="args">
    <template #item-value1="{ item }">
    </template>
    <template #item-actions="{ item }">
      <puik-button
        variant="text"
        right-icon="delete"
        aria-label="Delete item"
      ></puik-button>
    </template>
  </puik-table>`
});

const SortableTemplate: StoryFn = (args: Args) => ({
  components: {
    PuikTable,
    PuikButton,
    PuikIcon
  },
  setup() {
    const selection = ref([]);
    const items = generateData();
    const headers: PuikTableHeader[] = [
      {
        text: 'Nom',
        value: 'lastname',
        size: 'md',
        sortable: true
      },
      {
        text: 'Prénom',
        value: 'firstname',
        size: 'md',
        sortable: true
      },
      {
        text: 'Age',
        value: 'age',
        size: 'sm',
        align: 'right',
        sortable: true
      },
      {
        text: 'Email',
        value: 'email',
        align: 'left'
      },
      {
        value: 'actions',
        align: 'center',
        size: 'sm'
      }
    ];
    return { args, headers, items, selection };
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
  </puik-table>`
});

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
      searchable: true,
    },
    {
      text: 'Prénom',
      value: 'firstname',
      size: 'md',
      searchable: true,
    },
    {
      text: 'Age',
      value: 'age',
      size: 'sm',
      align: 'right',
      searchable: true,
    },
    {
      text: 'Email',
      value: 'email',
      align: 'left',
      searchable: true,
    },
    {
      value: 'actions',
      size: 'sm',
      align: 'center',
      preventExpand: true,
      searchSubmit: true,
    },
  ]

  <puik-table
    v-model:selection="selection"
    :headers="headers"
    :items="items"
    :expandable="args.expandable",
    :selectable="args.selectable",
    :searchBar="args.searchBar",
    :searchFromServer="args.searchFromServer",
    :sortFromServer="args.sortFromServer",
    :fullWidth="args.fullWidth",
    :stickyFirstCol="args.stickyFirstCol",
    :stickyLastCol="args.stickyLastCol",
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
    <thead class="puik-table__head">
      <tr class="puik-table__head__row">
        
        <th class="puik-table__head__row__item puik-table__head__row__item--left puik-table__head__row__item--md">
          <div class="puik-table__head__row__item__container">
            <div class="puik-table__head__row__item__content">
              <span>Nom</span>
            </div>
          </div>
        </th>
        <th class="puik-table__head__row__item puik-table__head__row__item--left puik-table__head__row__item--md">
          <div class="puik-table__head__row__item__container">
            <div class="puik-table__head__row__item__content">
              <span>Prénom</span>
            </div>
          </div>
        </th>
        <th class="puik-table__head__row__item puik-table__head__row__item--right puik-table__head__row__item--sm">
          <div class="puik-table__head__row__item__container">
            <div class="puik-table__head__row__item__content">
              <span>Age</span>
            </div>
          </div>
        </th>
        <th class="puik-table__head__row__item puik-table__head__row__item--left">
          <div class="puik-table__head__row__item__container">
            <div class="puik-table__head__row__item__content">
              <span>Email</span>
            </div>
          </div>
        </th>
        <th class="puik-table__head__row__item puik-table__head__row__item--center puik-table__head__row__item--sm">
          <div class="puik-table__head__row__item__container">
            <div class="puik-table__head__row__item__content">
              <span>actions</span>
            </div>
          </div>
        </th>
      </tr>
    </thead>
    <tbody class="puik-table__body">
      <tr class="puik-table__body__row">
        <td class="puik-table__body__row__item puik-table__body__row__item--left">
          <div class="puik-table__body__row__item__container">
            <div class="puik-table__body__row__item__content">lastname0</div>
          </div>
        </td>
        <td class="puik-table__body__row__item puik-table__body__row__item--left">
          <div class="puik-table__body__row__item__container">
            <div class="puik-table__body__row__item__content">firstname0</div>
          </div>
        </td>
        <td class="puik-table__body__row__item puik-table__body__row__item--right">
          <div class="puik-table__body__row__item__container">
            <div class="puik-table__body__row__item__content">40</div>
          </div>
        </td>
        <td class="puik-table__body__row__item puik-table__body__row__item--left">
          <div class="puik-table__body__row__item__container">
            <div class="puik-table__body__row__item__content">lastname0.firstname0@email.com</div>
          </div>
        </td>
        <td class="puik-table__body__row__item puik-table__body__row__item--center">
          <div class="puik-table__body__row__item__container">
            <div class="puik-table__body__row__item__content">
              <button class="puik-button puik-button--text puik-button--md puik-button--no-wrap" aria-label="Delete item">
                
                <div class="puik-icon puik-button__right-icon" style="font-size: 1.25rem;">delete</div>
              </button>
            </div>
          </div>
        </td>
      </tr>
      <tr class="puik-table__body__row">
        <td class="puik-table__body__row__item puik-table__body__row__item--left">
          <div class="puik-table__body__row__item__container">
            <div class="puik-table__body__row__item__content">lastname1</div>
          </div>
        </td>
        <td class="puik-table__body__row__item puik-table__body__row__item--left">
          <div class="puik-table__body__row__item__container">
            <div class="puik-table__body__row__item__content">firstname1</div>
          </div>
        </td>
        <td class="puik-table__body__row__item puik-table__body__row__item--right">
          <div class="puik-table__body__row__item__container">
            <div class="puik-table__body__row__item__content">40</div>
          </div>
        </td>
        <td class="puik-table__body__row__item puik-table__body__row__item--left">
          <div class="puik-table__body__row__item__container">
            <div class="puik-table__body__row__item__content">lastname1.firstname1@email.com</div>
          </div>
        </td>
        <td class="puik-table__body__row__item puik-table__body__row__item--center">
          <div class="puik-table__body__row__item__container">
            <div class="puik-table__body__row__item__content">
              <button class="puik-button puik-button--text puik-button--md puik-button--no-wrap" aria-label="Delete item">
                <div class="puik-icon puik-button__right-icon" style="font-size: 1.25rem;">delete</div>
              </button>
            </div>
          </div>
        </td>
      </tr>
      <tr class="puik-table__body__row">
        <td class="puik-table__body__row__item puik-table__body__row__item--left">
          <div class="puik-table__body__row__item__container">
            <div class="puik-table__body__row__item__content">lastname2</div>
          </div>
        </td>
        <td class="puik-table__body__row__item puik-table__body__row__item--left">
          <div class="puik-table__body__row__item__container">
            <div class="puik-table__body__row__item__content">firstname2</div>
          </div>
        </td>
        <td class="puik-table__body__row__item puik-table__body__row__item--right">
          <div class="puik-table__body__row__item__container">
            <div class="puik-table__body__row__item__content">40</div>
          </div>
        </td>
        <td class="puik-table__body__row__item puik-table__body__row__item--left">
          <div class="puik-table__body__row__item__container">
            <div class="puik-table__body__row__item__content">lastname2.firstname2@email.com</div>
          </div>
        </td>
        <td class="puik-table__body__row__item puik-table__body__row__item--center">
          <div class="puik-table__body__row__item__container">
            <div class="puik-table__body__row__item__content">
              <button class="puik-button puik-button--text puik-button--md puik-button--no-wrap" aria-label="Delete item">
                <div class="puik-icon puik-button__right-icon" style="font-size: 1.25rem;">delete</div>
              </button>
            </div>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</div>
        `,
        language: 'html'
      }
    }
  }
};

export const Selectable: StoryObj = {
  render: Template,
  args: {
    selectable: true
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
        language: 'html'
      }
    }
  }
};

export const Expandable: StoryObj = {
  render: Template,
  args: {
    expandable: true
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
      searchable: true,
    },
    {
      text: 'Prénom',
      value: 'firstname',
      size: 'md',
      searchable: true,
    },
    {
      text: 'Age',
      value: 'age',
      size: 'sm',
      align: 'right',
      searchable: true,
    },
    {
      text: 'Email',
      value: 'email',
      size: 'md',
      align: 'left',
      searchable: true,
    },
    {
      value: 'actions',
      size: 'sm',
      align: 'center',
      preventExpand: true,
      searchSubmit: true,
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
  <div class="puik-table__container">
    <table class="puik-table">
      <thead class="puik-table__head">
        <tr class="puik-table__head__row">
          <th class="puik-table__head__row__item puik-table__head__row__item--expandable">
          </th>
          <th class="puik-table__head__row__item puik-table__head__row__item--left puik-table__head__row__item--md">
            <div class="puik-table__head__row__item__container">
              <div class="puik-table__head__row__item__content">
                <span>Nom</span>
              </div>
            </div>
          </th>
          <th class="puik-table__head__row__item puik-table__head__row__item--left puik-table__head__row__item--md">
            <div class="puik-table__head__row__item__container">
              <div class="puik-table__head__row__item__content">
                <span>Prénom</span>
              </div>
            </div>
          </th>
          <th class="puik-table__head__row__item puik-table__head__row__item--right puik-table__head__row__item--sm">
            <div class="puik-table__head__row__item__container">
              <div class="puik-table__head__row__item__content">
                <span>Age</span>
              </div>
            </div>
          </th>
          <th class="puik-table__head__row__item puik-table__head__row__item--left puik-table__head__row__item--md">
            <div class="puik-table__head__row__item__container">
              <div class="puik-table__head__row__item__content">
                <span>Email</span>
              </div>
            </div>
          </th>
          <th class="puik-table__head__row__item puik-table__head__row__item--center puik-table__head__row__item--sm">
            <div class="puik-table__head__row__item__container">
              <div class="puik-table__head__row__item__content">
                <span>actions</span>
              </div>
            </div>
          </th>
        </tr>
      </thead>
      <tbody class="puik-table__body">
        <tr class="puik-table__body__row">
          <td class="puik-table__body__row__item puik-table__body__row__item--selection">
            <div class="puik-table__body__row__item__container">
              <div class="puik-icon" style="font-size: 24px;">keyboard_arrow_down</div>
            </div>
          </td>
          <td class="puik-table__body__row__item puik-table__body__row__item--left puik-table__body__row__item--expand-row">
            <div class="puik-table__body__row__item__container">
              <div class="puik-table__body__row__item__content">lastname0</div>
            </div>
          </td>
          <td class="puik-table__body__row__item puik-table__body__row__item--left puik-table__body__row__item--expand-row">
            <div class="puik-table__body__row__item__container">
              <div class="puik-table__body__row__item__content">firstname0</div>
            </div>
          </td>
          <td class="puik-table__body__row__item puik-table__body__row__item--right puik-table__body__row__item--expand-row">
            <div class="puik-table__body__row__item__container">
              <div class="puik-table__body__row__item__content">40</div>
            </div>
          </td>
          <td class="puik-table__body__row__item puik-table__body__row__item--left puik-table__body__row__item--expand-row">
            <div class="puik-table__body__row__item__container">
              <div class="puik-table__body__row__item__content">lastname0.firstname0@email.com</div>
            </div>
          </td>
          <td class="puik-table__body__row__item puik-table__body__row__item--center">
            <div class="puik-table__body__row__item__container">
              <div class="puik-table__body__row__item__content">
                <button class="puik-button puik-button--text puik-button--md puik-button--no-wrap" aria-label="Delete item">
                  <div class="puik-icon puik-button__right-icon" style="font-size: 1.25rem;">delete</div>
                </button>
              </div>
            </div>
          </td>
        </tr>
        <tr class="puik-table__body__row">
          <td class="puik-table__body__row__item puik-table__body__row__item--selection">
            <div class="puik-table__body__row__item__container">
              <div class="puik-icon" style="font-size: 24px;">keyboard_arrow_down</div>
            </div>
          </td>
          <td class="puik-table__body__row__item puik-table__body__row__item--left puik-table__body__row__item--expand-row">
            <div class="puik-table__body__row__item__container">
              <div class="puik-table__body__row__item__content">lastname1</div>
            </div>
          </td>
          <td class="puik-table__body__row__item puik-table__body__row__item--left puik-table__body__row__item--expand-row">
            <div class="puik-table__body__row__item__container">
              <div class="puik-table__body__row__item__content">firstname1</div>
            </div>
          </td>
          <td class="puik-table__body__row__item puik-table__body__row__item--right puik-table__body__row__item--expand-row">
            <div class="puik-table__body__row__item__container">
              <div class="puik-table__body__row__item__content">40</div>
            </div>
          </td>
          <td class="puik-table__body__row__item puik-table__body__row__item--left puik-table__body__row__item--expand-row">
            <div class="puik-table__body__row__item__container">
              <div class="puik-table__body__row__item__content">lastname1.firstname1@email.com</div>
            </div>
          </td>
          <td class="puik-table__body__row__item puik-table__body__row__item--center">
            <div class="puik-table__body__row__item__container">
              <div class="puik-table__body__row__item__content">
                <button class="puik-button puik-button--text puik-button--md puik-button--no-wrap" aria-label="Delete item">
                  <div class="puik-icon puik-button__right-icon" style="font-size: 1.25rem;">delete</div>
                </button>
              </div>
            </div>
          </td>
        </tr>
        <tr class="puik-table__body__row">
          <td class="puik-table__body__row__item puik-table__body__row__item--selection">
            <div class="puik-table__body__row__item__container">
              <div class="puik-icon" style="font-size: 24px;">keyboard_arrow_down</div>
            </div>
          </td>
          <td class="puik-table__body__row__item puik-table__body__row__item--left puik-table__body__row__item--expand-row">
            <div class="puik-table__body__row__item__container">
              <div class="puik-table__body__row__item__content">lastname2</div>
            </div>
          </td>
          <td class="puik-table__body__row__item puik-table__body__row__item--left puik-table__body__row__item--expand-row">
            <div class="puik-table__body__row__item__container">
              <div class="puik-table__body__row__item__content">firstname2</div>
            </div>
          </td>
          <td class="puik-table__body__row__item puik-table__body__row__item--right puik-table__body__row__item--expand-row">
            <div class="puik-table__body__row__item__container">
              <div class="puik-table__body__row__item__content">40</div>
            </div>
          </td>
          <td class="puik-table__body__row__item puik-table__body__row__item--left puik-table__body__row__item--expand-row">
            <div class="puik-table__body__row__item__container">
              <div class="puik-table__body__row__item__content">lastname2.firstname2@email.com</div>
            </div>
          </td>
          <td class="puik-table__body__row__item puik-table__body__row__item--center">
            <div class="puik-table__body__row__item__container">
              <div class="puik-table__body__row__item__content">
                <button class="puik-button puik-button--text puik-button--md puik-button--no-wrap" aria-label="Delete item">
                  <div class="puik-icon puik-button__right-icon" style="font-size: 1.25rem;">delete</div>
                </button>
              </div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
        `,
        language: 'html'
      }
    }
  }
};

export const Searchable: StoryObj = {
  render: SearchableTemplate,
  args: {
    searchBar: true
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
      searchable: true,
      searchType: 'text',
    },
    {
      text: 'Prénom',
      value: 'firstname',
      size: 'md',
      searchable: true,
      searchType: 'text',
    },
    {
      text: 'Age',
      value: 'age',
      size: 'sm',
      align: 'right',
      searchable: true,
      searchType: 'range',
    },
    {
      text: 'Email',
      value: 'email',
      align: 'left',
      searchable: true,
      searchType: 'text',
    },
    {
      value: 'actions',
      size: 'sm',
      align: 'center',
      preventExpand: true,
      searchable: true,
      searchSubmit: true,
    },
  ]

  <puik-table :search-bar="true">
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
      <thead class="puik-table__head">
        <tr class="puik-table__head__row"> 
          <th class="puik-table__head__row__item puik-table__head__row__item--left puik-table__head__row__item--md">
            <div class="puik-table__head__row__item__container">
              <div class="puik-table__head__row__item__content">
                <span>Nom</span>
              </div>
            </div>
          </th>
          <th class="puik-table__head__row__item puik-table__head__row__item--left puik-table__head__row__item--md">
            <div class="puik-table__head__row__item__container">
              <div class="puik-table__head__row__item__content">
                <span>Prénom</span>
              </div>
            </div>
          </th>
          <th class="puik-table__head__row__item puik-table__head__row__item--right puik-table__head__row__item--sm">
            <div class="puik-table__head__row__item__container">
              <div class="puik-table__head__row__item__content">
                <span>Age</span>
              </div>
            </div>
          </th>
          <th class="puik-table__head__row__item puik-table__head__row__item--left">
            <div class="puik-table__head__row__item__container">
              <div class="puik-table__head__row__item__content">
                <span>Email</span>
              </div>
            </div>
          </th>
          <th class="puik-table__head__row__item puik-table__head__row__item--center puik-table__head__row__item--sm">
            <div class="puik-table__head__row__item__container">
              <div class="puik-table__head__row__item__content">
                <span>actions</span>
              </div>
            </div>
          </th>
        </tr>
        <tr class="puik-table__head__row puik-table__search__bar">
          <th class="puik-table__head__row__item puik-table__head__row__item--left puik-table__head__row__item--md">
            <div class="puik-table__head__row__item__container">
              <div class="puik-table__head__row__item__content puik-table-search-input__content">
                <div class="puik-input">
                  <div class="puik-input__wrapper">
                    <input class="puik-input__field" placeholder="Search" type="text">
                  </div>             
                </div>             
              </div>
            </div>
          </th>
          <th class="puik-table__head__row__item puik-table__head__row__item--left puik-table__head__row__item--md">
            <div class="puik-table__head__row__item__container">
              <div class="puik-table__head__row__item__content puik-table-search-input__content">
                <div class="puik-input">
                  <div class="puik-input__wrapper">
                    <input class="puik-input__field" placeholder="Search" type="text">
                  </div>              
                </div>       
              </div>
            </div>
          </th>
          <th class="puik-table__head__row__item puik-table__head__row__item--right puik-table__head__row__item--sm">
            <div class="puik-table__head__row__item__container">
              <div class="puik-table__head__row__item__content puik-table-search-input__content">          
                <div class="puik-table-search-input--range">
                  <div class="puik-input">
                    <div class="puik-input__wrapper">
                      <input class="puik-input__field" placeholder="Min" type="number" min="-Infinity" max="Infinity" step="1">
                      <div class="puik-input__controls"><button type="button" class="puik-input__controls__increment" aria-label="Increase"><span class="puik-input__controls__increment__icon">arrow_drop_up</span></button><button type="button" class="puik-input__controls__decrement" aria-label="Decrease"><span class="puik-input__controls__decrement__icon">arrow_drop_down</span></button></div>
                    </div>                
                  </div>
                  <div class="puik-input">
                    <div class="puik-input__wrapper">
                      <input class="puik-input__field" placeholder="Max" type="number" min="-Infinity" max="Infinity" step="1">
                      <div class="puik-input__controls"><button type="button" class="puik-input__controls__increment" aria-label="Increase"><span class="puik-input__controls__increment__icon">arrow_drop_up</span></button><button type="button" class="puik-input__controls__decrement" aria-label="Decrease"><span class="puik-input__controls__decrement__icon">arrow_drop_down</span></button></div>
                    </div>          
                  </div>
                </div>
              </div>
            </div>
          </th>
          <th class="puik-table__head__row__item puik-table__head__row__item--left">
            <div class="puik-table__head__row__item__container">
              <div class="puik-table__head__row__item__content puik-table-search-input__content">
                <div class="puik-input">
                  <div class="puik-input__wrapper">
                    <input class="puik-input__field" placeholder="Search" type="text">
                  </div>
                </div>    
              </div>
            </div>
          </th>
          <th class="puik-table__head__row__item puik-table__head__row__item--center puik-table__head__row__item--sm">
            <div class="puik-table__head__row__item__container">
              <div class="puik-table__head__row__item__content puik-table-search-input__content">    
                <div class="puik-table-search-input--submit">
                  <button class="puik-button puik-button--primary puik-button--md puik-button--no-wrap">
                    <div class="puik-icon puik-button__left-icon" style="font-size: 1.25rem;">search</div>
                    Search
                  </button>  
                </div>
              </div>
            </div>
          </th>
        </tr>
      </thead>
      <tbody class="puik-table__body">
        <tr class="puik-table__body__row">
          <td class="puik-table__body__row__item puik-table__body__row__item--left">
            <div class="puik-table__body__row__item__container">
              <div class="puik-table__body__row__item__content">lastname0</div>
            </div>
          </td>
          <td class="puik-table__body__row__item puik-table__body__row__item--left">
            <div class="puik-table__body__row__item__container">
              <div class="puik-table__body__row__item__content">firstname0</div>
            </div>
          </td>
          <td class="puik-table__body__row__item puik-table__body__row__item--right">
            <div class="puik-table__body__row__item__container">
              <div class="puik-table__body__row__item__content">40</div>
            </div>
          </td>
          <td class="puik-table__body__row__item puik-table__body__row__item--left">
            <div class="puik-table__body__row__item__container">
              <div class="puik-table__body__row__item__content">lastname0.firstname0@email.com</div>
            </div>
          </td>
          <td class="puik-table__body__row__item puik-table__body__row__item--center">
            <div class="puik-table__body__row__item__container">
              <div class="puik-table__body__row__item__content">
                <button class="puik-button puik-button--text puik-button--md puik-button--no-wrap" aria-label="Delete item">          
                  <div class="puik-icon puik-button__right-icon" style="font-size: 1.25rem;">delete</div>
                </button>
              </div>
            </div>
          </td>
        </tr>
        <tr class="puik-table__body__row">
          <td class="puik-table__body__row__item puik-table__body__row__item--left">
            <div class="puik-table__body__row__item__container">
              <div class="puik-table__body__row__item__content">lastname1</div>
            </div>
          </td>
          <td class="puik-table__body__row__item puik-table__body__row__item--left">
            <div class="puik-table__body__row__item__container">
              <div class="puik-table__body__row__item__content">firstname1</div>
            </div>
          </td>
          <td class="puik-table__body__row__item puik-table__body__row__item--right">
            <div class="puik-table__body__row__item__container">
              <div class="puik-table__body__row__item__content">40</div>
            </div>
          </td>
          <td class="puik-table__body__row__item puik-table__body__row__item--left">
            <div class="puik-table__body__row__item__container">
              <div class="puik-table__body__row__item__content">lastname1.firstname1@email.com</div>
            </div>
          </td>
          <td class="puik-table__body__row__item puik-table__body__row__item--center">
            <div class="puik-table__body__row__item__container">
              <div class="puik-table__body__row__item__content">
                <button class="puik-button puik-button--text puik-button--md puik-button--no-wrap" aria-label="Delete item">
                  <div class="puik-icon puik-button__right-icon" style="font-size: 1.25rem;">delete</div>
                </button>
              </div>
            </div>
          </td>
        </tr>
        <tr class="puik-table__body__row">
          <td class="puik-table__body__row__item puik-table__body__row__item--left">
            <div class="puik-table__body__row__item__container">
              <div class="puik-table__body__row__item__content">lastname2</div>
            </div>
          </td>
          <td class="puik-table__body__row__item puik-table__body__row__item--left">
            <div class="puik-table__body__row__item__container">
              <div class="puik-table__body__row__item__content">firstname2</div>
            </div>
          </td>
          <td class="puik-table__body__row__item puik-table__body__row__item--right">
            <div class="puik-table__body__row__item__container">
              <div class="puik-table__body__row__item__content">40</div>
            </div>
          </td>
          <td class="puik-table__body__row__item puik-table__body__row__item--left">
            <div class="puik-table__body__row__item__container">
              <div class="puik-table__body__row__item__content">lastname2.firstname2@email.com</div>
            </div>
          </td>
          <td class="puik-table__body__row__item puik-table__body__row__item--center">
            <div class="puik-table__body__row__item__container">
              <div class="puik-table__body__row__item__content">
                <button class="puik-button puik-button--text puik-button--md puik-button--no-wrap" aria-label="Delete item">  
                  <div class="puik-icon puik-button__right-icon" style="font-size: 1.25rem;">delete</div>
                </button>
              </div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
        `,
        language: 'html'
      }
    }
  }
};

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
      align: 'right',
      sortable: true,
    },
    {
      text: 'Email',
      value: 'email',
      align: 'left',
    },
    {
      value: 'actions',
      align: 'center',
      size: 'sm',
    },
  ]

  <puik-table>
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
      <thead class="puik-table__head">
        <tr class="puik-table__head__row">
          <th class="puik-table__head__row__item puik-table__head__row__item--left puik-table__head__row__item--md puik-table__head__row__item--sortable">
            <div class="puik-table__head__row__item__container">
              <div class="puik-table__head__row__item__content">
                <span>Nom</span>
                <button class="puik-button puik-button--primary-reverse puik-button--sm puik-button--no-wrap">
                  <div class="puik-icon puik-button__right-icon" style="font-size: 1rem;">unfold_more</div>
                </button>
              </div>
            </div>
          </th>
          <th class="puik-table__head__row__item puik-table__head__row__item--left puik-table__head__row__item--md puik-table__head__row__item--sortable">
            <div class="puik-table__head__row__item__container">
              <div class="puik-table__head__row__item__content">
                <span>Prénom</span>
                <button class="puik-button puik-button--primary-reverse puik-button--sm puik-button--no-wrap">
                  <div class="puik-icon puik-button__right-icon" style="font-size: 1rem;">unfold_more</div>
                </button>
              </div>
            </div>
          </th>
          <th class="puik-table__head__row__item puik-table__head__row__item--right puik-table__head__row__item--sm puik-table__head__row__item--sortable">
            <div class="puik-table__head__row__item__container">
              <div class="puik-table__head__row__item__content">
                <span>Age</span>
                <button class="puik-button puik-button--primary-reverse puik-button--sm puik-button--no-wrap">
                  <div class="puik-icon puik-button__right-icon" style="font-size: 1rem;">unfold_more</div>
                </button>
              </div>
            </div>
          </th>
          <th class="puik-table__head__row__item puik-table__head__row__item--left">
            <div class="puik-table__head__row__item__container">
              <div class="puik-table__head__row__item__content">
                <span>Email</span>
              </div>
            </div>
          </th>
          <th class="puik-table__head__row__item puik-table__head__row__item--center puik-table__head__row__item--sm">
            <div class="puik-table__head__row__item__container">
              <div class="puik-table__head__row__item__content">
                <span>actions</span>
              </div>
            </div>
          </th>
        </tr>
      </thead>
      <tbody class="puik-table__body">
        <tr class="puik-table__body__row">
          <td class="puik-table__body__row__item puik-table__body__row__item--left">
            <div class="puik-table__body__row__item__container">
              <div class="puik-table__body__row__item__content">lastname0</div>
            </div>
          </td>
          <td class="puik-table__body__row__item puik-table__body__row__item--left">
            <div class="puik-table__body__row__item__container">
              <div class="puik-table__body__row__item__content">firstname0</div>
            </div>
          </td>
          <td class="puik-table__body__row__item puik-table__body__row__item--right">
            <div class="puik-table__body__row__item__container">
              <div class="puik-table__body__row__item__content">40</div>
            </div>
          </td>
          <td class="puik-table__body__row__item puik-table__body__row__item--left">
            <div class="puik-table__body__row__item__container">
              <div class="puik-table__body__row__item__content">lastname0.firstname0@email.com</div>
            </div>
          </td>
          <td class="puik-table__body__row__item puik-table__body__row__item--center">
            <div class="puik-table__body__row__item__container">
              <div class="puik-table__body__row__item__content">
                <button class="puik-button puik-button--text puik-button--md puik-button--no-wrap" aria-label="Delete item">
                  <div class="puik-icon puik-button__right-icon" style="font-size: 1.25rem;">delete</div>
                </button>
              </div>
            </div>
          </td>
        </tr>
        <tr class="puik-table__body__row">
          <td class="puik-table__body__row__item puik-table__body__row__item--left">
            <div class="puik-table__body__row__item__container">
              <div class="puik-table__body__row__item__content">lastname1</div>
            </div>
          </td>
          <td class="puik-table__body__row__item puik-table__body__row__item--left">
            <div class="puik-table__body__row__item__container">
              <div class="puik-table__body__row__item__content">firstname1</div>
            </div>
          </td>
          <td class="puik-table__body__row__item puik-table__body__row__item--right">
            <div class="puik-table__body__row__item__container">
              <div class="puik-table__body__row__item__content">40</div>
            </div>
          </td>
          <td class="puik-table__body__row__item puik-table__body__row__item--left">
            <div class="puik-table__body__row__item__container">
              <div class="puik-table__body__row__item__content">lastname1.firstname1@email.com</div>
            </div>
          </td>
          <td class="puik-table__body__row__item puik-table__body__row__item--center">
            <div class="puik-table__body__row__item__container">
              <div class="puik-table__body__row__item__content">
                <button class="puik-button puik-button--text puik-button--md puik-button--no-wrap" aria-label="Delete item">
                  <div class="puik-icon puik-button__right-icon" style="font-size: 1.25rem;">delete</div>
                </button>
              </div>
            </div>
          </td>
        </tr>
        <tr class="puik-table__body__row">
          <td class="puik-table__body__row__item puik-table__body__row__item--left">
            <div class="puik-table__body__row__item__container">
              <div class="puik-table__body__row__item__content">lastname2</div>
            </div>
          </td>
          <td class="puik-table__body__row__item puik-table__body__row__item--left">
            <div class="puik-table__body__row__item__container">
              <div class="puik-table__body__row__item__content">firstname2</div>
            </div>
          </td>
          <td class="puik-table__body__row__item puik-table__body__row__item--right">
            <div class="puik-table__body__row__item__container">
              <div class="puik-table__body__row__item__content">40</div>
            </div>
          </td>
          <td class="puik-table__body__row__item puik-table__body__row__item--left">
            <div class="puik-table__body__row__item__container">
              <div class="puik-table__body__row__item__content">lastname2.firstname2@email.com</div>
            </div>
          </td>
          <td class="puik-table__body__row__item puik-table__body__row__item--center">
            <div class="puik-table__body__row__item__container">
              <div class="puik-table__body__row__item__content">
                <button class="puik-button puik-button--text puik-button--md puik-button--no-wrap" aria-label="Delete item">
                  <div class="puik-icon puik-button__right-icon" style="font-size: 1.25rem;">delete</div>
                </button>
              </div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
        `,
        language: 'html'
      }
    }
  }
};

export const FullWidth: StoryObj = {
  render: Template,
  args: {
    fullWidth: true
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
        searchable: true,
      },
      {
        text: 'Prénom',
        value: 'firstname',
        size: 'md',
        searchable: true,
      },
      {
        text: 'Age',
        value: 'age',
        size: 'sm',
        align: 'right',
        searchable: true,
      },
      {
        text: 'Email',
        value: 'email',
        size: 'md',
        align: 'left',
        searchable: true,
      },
      {
        value: 'actions',
        size: 'sm',
        align: 'center',
        preventExpand: true,
        searchSubmit: true,
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
      <table class="puik-table puik-table--full-width">
        <thead class="puik-table__head">
          <tr class="puik-table__head__row">
            <th class="puik-table__head__row__item puik-table__head__row__item--left puik-table__head__row__item--md">
              <div class="puik-table__head__row__item__container">
                <div class="puik-table__head__row__item__content">
                  <span>Nom</span>
                </div>
              </div>
            </th>
            <th class="puik-table__head__row__item puik-table__head__row__item--left puik-table__head__row__item--md">
              <div class="puik-table__head__row__item__container">
                <div class="puik-table__head__row__item__content">
                  <span>Prénom</span>
                </div>
              </div>
            </th>
            <th class="puik-table__head__row__item puik-table__head__row__item--right puik-table__head__row__item--sm">
              <div class="puik-table__head__row__item__container">
                <div class="puik-table__head__row__item__content">
                  <span>Age</span>
                </div>
              </div>
            </th>
            <th class="puik-table__head__row__item puik-table__head__row__item--left puik-table__head__row__item--md">
              <div class="puik-table__head__row__item__container">
                <div class="puik-table__head__row__item__content">
                  <span>Email</span>
                </div>
              </div>
            </th>
            <th class="puik-table__head__row__item puik-table__head__row__item--center puik-table__head__row__item--sm">
              <div class="puik-table__head__row__item__container">
                <div class="puik-table__head__row__item__content">
                  <span>actions</span>
                </div>
              </div>
            </th>
          </tr>
        </thead>
        <tbody class="puik-table__body">
          <tr class="puik-table__body__row">
            <td class="puik-table__body__row__item puik-table__body__row__item--left">
              <div class="puik-table__body__row__item__container">
                <div class="puik-table__body__row__item__content">lastname0</div>
              </div>
            </td>
            <td class="puik-table__body__row__item puik-table__body__row__item--left">
              <div class="puik-table__body__row__item__container">
                <div class="puik-table__body__row__item__content">firstname0</div>
              </div>
            </td>
            <td class="puik-table__body__row__item puik-table__body__row__item--right">
              <div class="puik-table__body__row__item__container">
                <div class="puik-table__body__row__item__content">40</div>
              </div>
            </td>
            <td class="puik-table__body__row__item puik-table__body__row__item--left">
              <div class="puik-table__body__row__item__container">
                <div class="puik-table__body__row__item__content">lastname0.firstname0@email.com</div>
              </div>
            </td>
            <td class="puik-table__body__row__item puik-table__body__row__item--center">
              <div class="puik-table__body__row__item__container">
                <div class="puik-table__body__row__item__content">
                  <button class="puik-button puik-button--text puik-button--md puik-button--no-wrap" aria-label="Delete item">
                    <div class="puik-icon puik-button__right-icon" style="font-size: 1.25rem;">delete</div>
                  </button>
                </div>
              </div>
            </td>
          </tr>
          <tr class="puik-table__body__row">
            <td class="puik-table__body__row__item puik-table__body__row__item--left">
              <div class="puik-table__body__row__item__container">
                <div class="puik-table__body__row__item__content">lastname1</div>
              </div>
            </td>
            <td class="puik-table__body__row__item puik-table__body__row__item--left">
              <div class="puik-table__body__row__item__container">
                <div class="puik-table__body__row__item__content">firstname1</div>
              </div>
            </td>
            <td class="puik-table__body__row__item puik-table__body__row__item--right">
              <div class="puik-table__body__row__item__container">
                <div class="puik-table__body__row__item__content">40</div>
              </div>
            </td>
            <td class="puik-table__body__row__item puik-table__body__row__item--left">
              <div class="puik-table__body__row__item__container">
                <div class="puik-table__body__row__item__content">lastname1.firstname1@email.com</div>
              </div>
            </td>
            <td class="puik-table__body__row__item puik-table__body__row__item--center">
              <div class="puik-table__body__row__item__container">
                <div class="puik-table__body__row__item__content">
                  <button class="puik-button puik-button--text puik-button--md puik-button--no-wrap" aria-label="Delete item">
                    <div class="puik-icon puik-button__right-icon" style="font-size: 1.25rem;">delete</div>
                  </button>
                </div>
              </div>
            </td>
          </tr>
          <tr class="puik-table__body__row">
            <td class="puik-table__body__row__item puik-table__body__row__item--left">
              <div class="puik-table__body__row__item__container">
                <div class="puik-table__body__row__item__content">lastname2</div>
              </div>
            </td>
            <td class="puik-table__body__row__item puik-table__body__row__item--left">
              <div class="puik-table__body__row__item__container">
                <div class="puik-table__body__row__item__content">firstname2</div>
              </div>
            </td>
            <td class="puik-table__body__row__item puik-table__body__row__item--right">
              <div class="puik-table__body__row__item__container">
                <div class="puik-table__body__row__item__content">40</div>
              </div>
            </td>
            <td class="puik-table__body__row__item puik-table__body__row__item--left">
              <div class="puik-table__body__row__item__container">
                <div class="puik-table__body__row__item__content">lastname2.firstname2@email.com</div>
              </div>
            </td>
            <td class="puik-table__body__row__item puik-table__body__row__item--center">
              <div class="puik-table__body__row__item__container">
                <div class="puik-table__body__row__item__content">
                  <button class="puik-button puik-button--text puik-button--md puik-button--no-wrap" aria-label="Delete item">
                    <div class="puik-icon puik-button__right-icon" style="font-size: 1.25rem;">delete</div>
                  </button>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
          `,
        language: 'html'
      }
    }
  }
};

export const stickyColumns: StoryObj = {
  render: Template,
  args: {
    selectable: true,
    stickyFirstCol: true,
    stickyLastCol: true
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
      searchable: true,
    },
    {
      text: 'Prénom',
      value: 'firstname',
      size: 'md',
      searchable: true,
    },
    {
      text: 'Age',
      value: 'age',
      size: 'sm',
      align: 'right',
      searchable: true,
    },
    {
      text: 'Email',
      value: 'email',
      size: 'md',
      align: 'left',
      searchable: true,
    },
    {
      value: 'actions',
      size: 'sm',
      align: 'center',
      preventExpand: true,
      searchSubmit: true,
    },
  ]

  <puik-table
    v-model:selection="selection"
    :headers="headers"
    :items="items"
    :selectable="true",
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
  <div class="puik-table__container">
    <table class="puik-table">
      <thead class="puik-table__head">
        <tr class="puik-table__head__row">
          <th class="puik-table__head__row__item puik-table__head__row__item--sticky puik-table__head__row__item--selection">
            <div class="puik-checkbox puik-table__head__row__item--selection__checkbox"><input id="puik-checkbox-3813" class="puik-checkbox__input" type="checkbox"><label for="puik-checkbox-3813" class="puik-checkbox__label">Select all items</label></div>
          </th>
          <th class="puik-table__head__row__item puik-table__head__row__item--left puik-table__head__row__item--md">
            <div class="puik-table__head__row__item__container">
              <div class="puik-table__head__row__item__content">
                <span>Nom</span>
              </div>
            </div>
          </th>
          <th class="puik-table__head__row__item puik-table__head__row__item--left puik-table__head__row__item--md">
            <div class="puik-table__head__row__item__container">
              <div class="puik-table__head__row__item__content">
                <span>Prénom</span>
              </div>
            </div>
          </th>
          <th class="puik-table__head__row__item puik-table__head__row__item--right puik-table__head__row__item--sm">
            <div class="puik-table__head__row__item__container">
              <div class="puik-table__head__row__item__content">
                <span>Age</span>
              </div>
            </div>
          </th>
          <th class="puik-table__head__row__item puik-table__head__row__item--left puik-table__head__row__item--md">
            <div class="puik-table__head__row__item__container">
              <div class="puik-table__head__row__item__content">
                <span>Email</span>
              </div>
            </div>
          </th>
          <th class="puik-table__head__row__item puik-table__head__row__item--center puik-table__head__row__item--sm puik-table__head__row__item--sticky puik-table__head__row__item--sticky-left">
            <div class="puik-table__head__row__item__container">
              <div class="puik-table__head__row__item__content">
                <span>actions</span>
              </div>
            </div>
          </th>
        </tr>
      </thead>
      <tbody class="puik-table__body">
        <tr class="puik-table__body__row">
          <td class="puik-table__body__row__item puik-table__body__row__item--selection puik-table__body__row__item--sticky puik-table__body__row__item--sticky-left">
            <div class="puik-table__body__row__item__container">
              <div class="puik-checkbox puik-table__body__row__item--selection__checkbox"><input id="puik-checkbox-1273" class="puik-checkbox__input" type="checkbox"><label for="puik-checkbox-1273" class="puik-checkbox__label">Select item</label></div>
            </div>
          </td>
          <td class="puik-table__body__row__item puik-table__body__row__item--left">
            <div class="puik-table__body__row__item__container">
              <div class="puik-table__body__row__item__content">lastname0</div>
            </div>
          </td>
          <td class="puik-table__body__row__item puik-table__body__row__item--left">
            <div class="puik-table__body__row__item__container">
              <div class="puik-table__body__row__item__content">firstname0</div>
            </div>
          </td>
          <td class="puik-table__body__row__item puik-table__body__row__item--right">
            <div class="puik-table__body__row__item__container">
              <div class="puik-table__body__row__item__content">40</div>
            </div>
          </td>
          <td class="puik-table__body__row__item puik-table__body__row__item--left">
            <div class="puik-table__body__row__item__container">
              <div class="puik-table__body__row__item__content">lastname0.firstname0@email.com</div>
            </div>
          </td>
          <td class="puik-table__body__row__item puik-table__body__row__item--center puik-table__body__row__item--sticky puik-table__body__row__item--sticky-left">
            <div class="puik-table__body__row__item__container">
              <div class="puik-table__body__row__item__content">
                <button class="puik-button puik-button--text puik-button--md puik-button--no-wrap" aria-label="Delete item">
                  <div class="puik-icon puik-button__right-icon" style="font-size: 1.25rem;">delete</div>
                </button>
              </div>
            </div>
          </td>
        </tr>
        <tr class="puik-table__body__row">
          <td class="puik-table__body__row__item puik-table__body__row__item--selection puik-table__body__row__item--sticky puik-table__body__row__item--sticky-left">
            <div class="puik-table__body__row__item__container">
              <div class="puik-checkbox puik-table__body__row__item--selection__checkbox"><input id="puik-checkbox-9390" class="puik-checkbox__input" type="checkbox"><label for="puik-checkbox-9390" class="puik-checkbox__label">Select item</label></div>
            </div>
          </td>
          <td class="puik-table__body__row__item puik-table__body__row__item--left">
            <div class="puik-table__body__row__item__container">
              <div class="puik-table__body__row__item__content">lastname1</div>
            </div>
          </td>
          <td class="puik-table__body__row__item puik-table__body__row__item--left">
            <div class="puik-table__body__row__item__container">
              <div class="puik-table__body__row__item__content">firstname1</div>
            </div>
          </td>
          <td class="puik-table__body__row__item puik-table__body__row__item--right">
            <div class="puik-table__body__row__item__container">
              <div class="puik-table__body__row__item__content">40</div>
            </div>
          </td>
          <td class="puik-table__body__row__item puik-table__body__row__item--left">
            <div class="puik-table__body__row__item__container">
              <div class="puik-table__body__row__item__content">lastname1.firstname1@email.com</div>
            </div>
          </td>
          <td class="puik-table__body__row__item puik-table__body__row__item--center puik-table__body__row__item--sticky puik-table__body__row__item--sticky-left">
            <div class="puik-table__body__row__item__container">
              <div class="puik-table__body__row__item__content">
                <button class="puik-button puik-button--text puik-button--md puik-button--no-wrap" aria-label="Delete item">
                  <div class="puik-icon puik-button__right-icon" style="font-size: 1.25rem;">delete</div>
                </button>
              </div>
            </div>
          </td>
        </tr>
        <tr class="puik-table__body__row">
          <td class="puik-table__body__row__item puik-table__body__row__item--selection puik-table__body__row__item--sticky puik-table__body__row__item--sticky-left">
            <div class="puik-table__body__row__item__container">
              <div class="puik-checkbox puik-table__body__row__item--selection__checkbox"><input id="puik-checkbox-7665" class="puik-checkbox__input" type="checkbox"><label for="puik-checkbox-7665" class="puik-checkbox__label">Select item</label></div>
            </div>
          </td>
          <td class="puik-table__body__row__item puik-table__body__row__item--left">
            <div class="puik-table__body__row__item__container">
              <div class="puik-table__body__row__item__content">lastname2</div>
            </div>
          </td>
          <td class="puik-table__body__row__item puik-table__body__row__item--left">
            <div class="puik-table__body__row__item__container">
              <div class="puik-table__body__row__item__content">firstname2</div>
            </div>
          </td>
          <td class="puik-table__body__row__item puik-table__body__row__item--right">
            <div class="puik-table__body__row__item__container">
              <div class="puik-table__body__row__item__content">40</div>
            </div>
          </td>
          <td class="puik-table__body__row__item puik-table__body__row__item--left">
            <div class="puik-table__body__row__item__container">
              <div class="puik-table__body__row__item__content">lastname2.firstname2@email.com</div>
            </div>
          </td>
          <td class="puik-table__body__row__item puik-table__body__row__item--center puik-table__body__row__item--sticky puik-table__body__row__item--sticky-left">
            <div class="puik-table__body__row__item__container">
              <div class="puik-table__body__row__item__content">
                <button class="puik-button puik-button--text puik-button--md puik-button--no-wrap" aria-label="Delete item">
                  <div class="puik-icon puik-button__right-icon" style="font-size: 1.25rem;">delete</div>
                </button>
              </div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
        `,
        language: 'html'
      }
    }
  }
};

const ColSizesTemplate: StoryFn = (args: Args) => ({
  components: {
    PuikTable
  },
  args: {},
  setup() {
    const item = { sm: 'sm', md: 'md', lg: 'lg', auto: 'auto' };
    const items = [item, item];
    const headers: PuikTableHeader[] = [
      {
        text: 'sm',
        value: 'sm',
        size: 'sm'
      },
      {
        text: 'md',
        value: 'md',
        size: 'md'
      },
      {
        text: 'lg',
        value: 'lg',
        size: 'lg'
      },
      {
        text: 'auto',
        value: 'auto'
      }
    ];
    return { args, items, headers };
  },
  template: '<puik-table v-bind="args" :headers="headers" :items="items"></puik-table>'
});

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
    <thead class="puik-table__head">
      <tr class="puik-table__head__row">
        <th class="puik-table__head__row__item puik-table__head__row__item--left puik-table__head__row__item--sm">
          <div class="puik-table__head__row__item__container">
            <div class="puik-table__head__row__item__content">
              <span>sm</span>
            </div>
          </div>
        </th>
        <th class="puik-table__head__row__item puik-table__head__row__item--left puik-table__head__row__item--md">
          <div class="puik-table__head__row__item__container">
            <div class="puik-table__head__row__item__content">
              <span>md</span>
            </div>
          </div>
        </th>
        <th class="puik-table__head__row__item puik-table__head__row__item--left puik-table__head__row__item--lg">
          <div class="puik-table__head__row__item__container">
            <div class="puik-table__head__row__item__content">
              <span>lg</span>
            </div>
          </div>
        </th>
        <th class="puik-table__head__row__item puik-table__head__row__item--left">
          <div class="puik-table__head__row__item__container">
            <div class="puik-table__head__row__item__content">
              <span>auto</span>
            </div>
          </div>
        </th>
      </tr>
    </thead>
    <tbody class="puik-table__body">
      <tr class="puik-table__body__row">
        <td class="puik-table__body__row__item puik-table__body__row__item--left">
          <div class="puik-table__body__row__item__container">
            <div class="puik-table__body__row__item__content">sm</div>
          </div>
        </td>
        <td class="puik-table__body__row__item puik-table__body__row__item--left">
          <div class="puik-table__body__row__item__container">
            <div class="puik-table__body__row__item__content">md</div>
          </div>
        </td>
        <td class="puik-table__body__row__item puik-table__body__row__item--left">
          <div class="puik-table__body__row__item__container">
            <div class="puik-table__body__row__item__content">lg</div>
          </div>
        </td>
        <td class="puik-table__body__row__item puik-table__body__row__item--left">
          <div class="puik-table__body__row__item__container">
            <div class="puik-table__body__row__item__content">auto</div>
          </div>
        </td>
      </tr>
      <tr class="puik-table__body__row">
        <td class="puik-table__body__row__item puik-table__body__row__item--left">
          <div class="puik-table__body__row__item__container">
            <div class="puik-table__body__row__item__content">sm</div>
          </div>
        </td>
        <td class="puik-table__body__row__item puik-table__body__row__item--left">
          <div class="puik-table__body__row__item__container">
            <div class="puik-table__body__row__item__content">md</div>
          </div>
        </td>
        <td class="puik-table__body__row__item puik-table__body__row__item--left">
          <div class="puik-table__body__row__item__container">
            <div class="puik-table__body__row__item__content">lg</div>
          </div>
        </td>
        <td class="puik-table__body__row__item puik-table__body__row__item--left">
          <div class="puik-table__body__row__item__container">
            <div class="puik-table__body__row__item__content">auto</div>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</div>
        `,
        language: 'html'
      }
    }
  }
};

const TextAlignTemplate: StoryFn = (args: Args) => ({
  components: {
    PuikTable
  },
  args: {},
  setup() {
    const item = { left: 'left', center: 'center', right: 'right' };
    const items = [item, item];
    const headers: PuikTableHeader[] = [
      {
        text: 'left',
        value: 'left',
        align: 'left',
        size: 'md'
      },
      {
        text: 'center',
        value: 'center',
        align: 'center',
        size: 'md'
      },
      {
        text: 'right',
        value: 'right',
        align: 'right',
        size: 'md'
      }
    ];
    return { args, items, headers };
  },
  template: '<puik-table v-bind="args" :headers="headers" :items="items"></puik-table>'
});

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
      <thead class="puik-table__head">
        <tr class="puik-table__head__row">
          <th class="puik-table__head__row__item puik-table__head__row__item--left puik-table__head__row__item--md">
            <div class="puik-table__head__row__item__container">
              <div class="puik-table__head__row__item__content">
                <span>left</span>
              </div>
            </div>
          </th>
          <th class="puik-table__head__row__item puik-table__head__row__item--center puik-table__head__row__item--md">
            <div class="puik-table__head__row__item__container">
              <div class="puik-table__head__row__item__content">
                <span>center</span>
              </div>
            </div>
          </th>
          <th class="puik-table__head__row__item puik-table__head__row__item--right puik-table__head__row__item--md">
            <div class="puik-table__head__row__item__container">
              <div class="puik-table__head__row__item__content">
                <span>right</span>
              </div>
            </div>
          </th>
        </tr>
      </thead>
      <tbody class="puik-table__body">
        <tr class="puik-table__body__row">
          <td class="puik-table__body__row__item puik-table__body__row__item--left">
            <div class="puik-table__body__row__item__container">
              <div class="puik-table__body__row__item__content">left</div>
            </div>
          </td>
          <td class="puik-table__body__row__item puik-table__body__row__item--center">
            <div class="puik-table__body__row__item__container">
              <div class="puik-table__body__row__item__content">center</div>
            </div>
          </td>
          <td class="puik-table__body__row__item puik-table__body__row__item--right">
            <div class="puik-table__body__row__item__container">
              <div class="puik-table__body__row__item__content">right</div>
            </div>
          </td>
        </tr>
        <tr class="puik-table__body__row">
          <td class="puik-table__body__row__item puik-table__body__row__item--left">
            <div class="puik-table__body__row__item__container">
              <div class="puik-table__body__row__item__content">left</div>
            </div>
          </td>
          <td class="puik-table__body__row__item puik-table__body__row__item--center">
            <div class="puik-table__body__row__item__container">
              <div class="puik-table__body__row__item__content">center</div>
            </div>
          </td>
          <td class="puik-table__body__row__item puik-table__body__row__item--right">
            <div class="puik-table__body__row__item__container">
              <div class="puik-table__body__row__item__content">right</div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
        `,
        language: 'html'
      }
    }
  }
};
