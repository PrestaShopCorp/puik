import { PuikTableSearchInput, PuikTableSearchInputTypes } from '@prestashopcorp/puik-components';
import type { Meta, StoryFn, Args } from '@storybook/vue3';

export default {
  title: 'Components/Table/TableSearchInput',
  component: PuikTableSearchInput,
  argTypes: {
    name: {
      description:
        "Prop which will correspond to the component's html name attribute. NB: must not start with a number",
      control: 'text',
      table: {
        type: {
          summary: 'string'
        },
        defaultValue: {
          summary: 'none'
        }
      }
    },
    column: {
      description:
        'The value name of the column linked to the search input (see detail below)',
      control: 'text',
      table: {
        type: {
          summary: 'string',
          detail: `
// cf headers prop in Table Docs ('value' field of PuikTableHeader interface)

// Import
import type { PuikTableHeader } from '@prestashopcorp/puik-components';

//Detail
interface PuikTableHeader {
  text: string | undefined;
  value: string;
  size: 'sm' | 'md' | 'lg' | undefined;
  width: string | undefined;
  align: 'left' | 'center' | 'right' | undefined;
  sortable: boolean | undefined;
  preventExpand: boolean | undefined;
}
          `
        },
        defaultValue: {
          summary: 'none'
        }
      }
    },
    searchSubmit: {
      description: 'Sets input as submit button',
      control: 'boolean',
      table: {
        type: {
          summary: 'boolean'
        },
        defaultValue: {
          summary: 'false'
        }
      }
    },
    searchReset: {
      description: 'Displays reset button after submit',
      control: 'boolean',
      table: {
        type: {
          summary: 'boolean'
        },
        defaultValue: {
          summary: 'false'
        }
      }
    },
    searchType: {
      description: 'The input type (text or range)',
      control: 'select',
      options: PuikTableSearchInputTypes,
      table: {
        type: {
          summary: 'PuikTableSearchInputTypes',
          detail: `
// Import
import { PuikTableSearchInputTypes } from '@prestashopcorp/puik-components';

// Detail
enum PuikTableSearchInputTypes {
  Text = 'text',
  Range = 'range',
}
          `
        },
        defaultValue: {
          summary: 'text'
        }
      }
    },
    searchSubmitEvent: {
      description: 'Event emitted when clicking the search button',
      control: 'none',
      table: {
        type: {
          summary: 'event'
        }
      }
    },
    searchResetEvent: {
      description: 'Event emitted when clicking the reset button',
      control: 'none',
      table: {
        type: {
          summary: 'event'
        }
      }
    },
    searchTextValue: {
      description: 'Event emitted when updating the value of input text',
      control: 'none',
      table: {
        type: {
          summary: 'event',
          detail: `
// Import
import type { searchOption, inputRange } from '@prestashopcorp/puik-components';

// Details
// Payload type :
type searchOption = {
  searchBy: string;
  inputText?: string | undefined;
  inputRange?: inputRange | undefined;
}

type inputRange = {
  min?: number;
  max?: number;
}
          `
        }
      }
    },
    searchRangeValue: {
      description: 'Event emitted when updating the value of input Range',
      control: 'none',
      table: {
        type: {
          summary: 'event',
          detail: `
// Import
import type { searchOption, inputRange } from '@prestashopcorp/puik-components';

// Details
type searchOption = {
  searchBy: string;
  inputText?: string | undefined;
  inputRange?: inputRange | undefined;
}

type inputRange = {
  min?: number;
  max?: number;
}
          `
        }
      }
    }
  },
  args: {
    name: 'search-column',
    column: 'column',
    searchSubmit: false,
    searchReset: false,
    searchType: 'text'
  }
} as Meta;

const Template: StoryFn = (args: Args) => ({
  components: {
    PuikTableSearchInput
  },
  setup() {
    return { args };
  },
  template: '<PuikTableSearchInput v-bind="args"/>'
});

export const Default = {
  render: Template,
  args: {},
  parameters: {
    docs: {
      source: {
        code: `
<!--VueJS Snippet-->
<PuikTableSearchInput
  v-if="header.searchable || header.searchSubmit"
  :key="search-{$header.value}-{$searchInputKey}"
  :name="search-{$header.value}"
  :column="header.value"
  :search-submit="header.searchSubmit"
  :search-reset="searchReset"
  :search-type="(header.searchType as PuikTableSearchInputTypes)"
  @search-text-value="handleSearch"
  @search-range-value="handleSearch"
  @search-submit-event="handleSearchSubmit"
  @search-reset-event="handleSearchReset"
/>

<!--HTML/CSS Snippet-->
        `,
        language: 'html'
      }
    }
  }
};
