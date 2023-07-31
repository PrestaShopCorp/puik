import { ref } from 'vue'
import {
  PuikPaginationVariantEnum,
  puikPaginationItemsPerPageOptions,
  puikPaginationVariants,
} from '../src/pagination'
import PuikPagination from './../src/pagination.vue'
import type { StoryObj, Meta, StoryFn, Args } from '@storybook/vue3'

const paginationVariantsSummary = puikPaginationVariants.join('|')

export default {
  title: 'Components/Pagination',
  component: PuikPagination,
  argTypes: {
    variant: {
      control: 'select',
      options: puikPaginationVariants,
      description: 'Set the pagination variant',
      table: {
        defaultValue: {
          summary: PuikPaginationVariantEnum.medium,
        },
        type: {
          summary: paginationVariantsSummary,
        },
      },
    },
    totalItem: {
      control: 'number',
      description: 'Set the total item count',
      table: {
        type: {
          summary: 'number',
        },
      },
    },
    itemsPerPage: {
      control: 'none',
      table: {
        type: {
          summary: 'number',
        },
        defaultValue: { summary: 5 },
      },
      description: 'v-model of the items per page',
    },
    itemsPerPageOptions: {
      control: 'none',
      description: 'Set the items per page options',
      table: {
        type: {
          summary: 'number[]',
        },
        defaultValue: {
          summary: puikPaginationItemsPerPageOptions,
        },
      },
    },
    page: {
      control: 'numbnoneer',
      description: 'v-model of the current page',
      table: {
        type: {
          summary: 'number',
        },
      },
    },
    itemCount: {
      control: 'number',
      description: 'Set the current item count',
      table: {
        type: {
          summary: 'number',
        },
        defaultValue: {
          summary: '0',
        },
      },
    },
    label: {
      control: 'text',
      description: 'Set the label',
      table: {
        defaultValue: {
          summary: 'undefined',
        },
        type: {
          summary: 'string',
        },
      },
    },
    loaderButtonLabel: {
      control: 'text',
      description: 'Set the text used in button on loader variant',
      table: {
        defaultValue: {
          summary: 'undefined',
        },
        type: {
          summary: 'string',
        },
      },
    },
  },
  args: {
    variant: PuikPaginationVariantEnum.medium,
    totalItem: 500,
    itemCount: 25,
    label: '',
    loaderButtonLabel: undefined,
  },
} as Meta

const Template: StoryFn = (args: Args) => ({
  components: {
    PuikPagination,
  },
  setup() {
    const page = ref(1)
    const itemsPerPage = ref(5)
    return { args, page, itemsPerPage }
  },
  template: `<puik-pagination
      v-model:page="page"
      v-model:items-per-page="itemsPerPage"
      v-bind="args"
    ></puik-pagination>`,
})

export const Default = {
  render: Template,
  args: {},

  parameters: {
    docs: {
      source: {
        code: `
  <!--VueJS Snippet-->
    <puik-pagination
      v-model:page="page"
      :total-item="500"
      :item-count="25"
      :items-per-page="20"
  ></puik-pagination>

  <!--HTML/CSS Snippet-->
  <nav class="puik-pagination puik-pagination--medium" role="navigation" aria-label="Pagination navigation">
    <div class="puik-pagination__content">
      <span class="puik-pagination__label">500 results</span>
      <div class="puik-pagination__content">
        <button class="puik-button puik-button--tertiary puik-button--md puik-button--disabled puik-pagination__previous-button puik-pagination__button" disabled aria-label="Previous page">
          <div class="puik-icon material-icons-round puik-button__left-icon" style="font-size: 1.25rem;">
            keyboard_arrow_left
          </div>

        </button>
        <ul class="puik-pagination__pager">
          <li class="puik-pagination__pager-item">
            <button class="puik-button puik-button--text puik-button--md puik-pagination__pager-button--active puik-pagination__button puik-pagination__pager-button" aria-current="true" aria-label="Go to page 1">
              1
            </button>
          </li>
          <li class="puik-pagination__pager-item" aria-hidden="true">
            <span class="puik-pagination__pager-separator"> … </span>
          </li>
          <li class="puik-pagination__pager-item">
            <button class="puik-button puik-button--text puik-button--md puik-pagination__button puik-pagination__pager-button" aria-label="Go to page 2" aria-current="false">
              10
            </button>
          </li>
          <li class="puik-pagination__pager-item">
            <button class="puik-button puik-button--text puik-button--md puik-pagination__button puik-pagination__pager-button" aria-label="Go to page 3" aria-current="false">
              11
            </button>
          </li>
          <li class="puik-pagination__pager-item">
            <button class="puik-button puik-button--text puik-button--md puik-pagination__button puik-pagination__pager-button" aria-label="Go to page 3" aria-current="false">
              12
            </button>
          </li>
          <li class="puik-pagination__pager-item">
            <button class="puik-button puik-button--text puik-button--md puik-pagination__button puik-pagination__pager-button" aria-label="Go to page 4" aria-current="false">
              13
            </button>
          </li>
          <li class="puik-pagination__pager-item">
            <button class="puik-button puik-button--text puik-button--md puik-pagination__button puik-pagination__pager-button" aria-label="Go to page 5" aria-current="false">
              14
            </button>
          </li>
          <li class="puik-pagination__pager-item" aria-hidden="true">
            <span class="puik-pagination__pager-separator"> … </span>
          </li>
          <li class="puik-pagination__pager-item">
            <button class="puik-button puik-button--text puik-button--md puik-pagination__button puik-pagination__pager-button" aria-current="false" aria-label="Go to page 25">
              25
            </button>
          </li>
        </ul>
        <button class="puik-button puik-button--tertiary puik-button--md puik-pagination__button puik-pagination__next-button" aria-label="Next page">
          <div class="puik-icon material-icons-round puik-button__right-icon" style="font-size: 1.25rem;">
            keyboard_arrow_right
          </div>
        </button>
      </div>
    </div>
  </nav>
        `,
        language: 'html',
      },
    },
  },
}

export const Small: StoryObj = {
  render: Template,

  args: {
    variant: 'small',
  },

  parameters: {
    docs: {
      source: {
        code: `
  <!--VueJS Snippet-->
  <puik-pagination
    v-model:page="page"
    variant="small"
    :total-item="500"
    :item-count="25"
    :items-per-page="20"
  ></puik-pagination>

  <!--HTML/CSS Snippet-->
  <nav class="puik-pagination puik-pagination--small" role="navigation" aria-label="Pagination navigation">
    <div class="puik-pagination__content">
      <span class="puik-pagination__label">Page 1 to 25</span>
      <button
        class="puik-button puik-button--tertiary puik-button--md puik-button--disabled puik-pagination__previous-button puik-pagination__button" disabled aria-label="Previous page">
        <div class="puik-icon material-icons-round puik-button__left-icon" style="font-size: 1.25rem;">
          keyboard_arrow_left
        </div>
        </button
      >

      <button class="puik-button puik-button--tertiary puik-button--md puik-pagination__button puik-pagination__next-button" aria-label="Next page">
        <div class="puik-icon material-icons-round puik-button__right-icon" style="font-size: 1.25rem;">
          keyboard_arrow_right
        </div>
      </button>
    </div>
  </nav>
        `,
        language: 'html',
      },
    },
  },
}

export const Medium: StoryObj = {
  render: Template,

  args: {
    variant: 'medium',
  },

  parameters: {
    docs: {
      source: {
        code: `
  <!--VueJS Snippet-->
  <puik-pagination
    v-model:page="page"
    variant="medium"
    :total-item="500"
    :item-count="25"
    :items-per-page="20"
  ></puik-pagination>

  <!--HTML/CSS Snippet-->
  <nav class="puik-pagination puik-pagination--medium" role="navigation" aria-label="Pagination navigation">
    <div class="puik-pagination__content">
      <span class="puik-pagination__label">500 results</span>
      <div class="puik-pagination__content">
        <button class="puik-button puik-button--tertiary puik-button--md puik-button--disabled puik-pagination__previous-button puik-pagination__button" disabled aria-label="Previous page">
          <div class="puik-icon material-icons-round puik-button__left-icon" style="font-size: 1.25rem;">
            keyboard_arrow_left
          </div>

        </button>
        <ul class="puik-pagination__pager">
          <li class="puik-pagination__pager-item">
            <button class="puik-button puik-button--text puik-button--md puik-pagination__pager-button--active puik-pagination__button puik-pagination__pager-button" aria-current="true" aria-label="Go to page 1">
              1
            </button>
          </li>
          <li class="puik-pagination__pager-item" aria-hidden="true">
            <span class="puik-pagination__pager-separator"> … </span>
          </li>
          <li class="puik-pagination__pager-item">
            <button class="puik-button puik-button--text puik-button--md puik-pagination__button puik-pagination__pager-button" aria-label="Go to page 2" aria-current="false">
              10
            </button>
          </li>
          <li class="puik-pagination__pager-item">
            <button class="puik-button puik-button--text puik-button--md puik-pagination__button puik-pagination__pager-button" aria-label="Go to page 3" aria-current="false">
              11
            </button>
          </li>
          <li class="puik-pagination__pager-item">
            <button class="puik-button puik-button--text puik-button--md puik-pagination__button puik-pagination__pager-button" aria-label="Go to page 3" aria-current="false">
              12
            </button>
          </li>
          <li class="puik-pagination__pager-item">
            <button class="puik-button puik-button--text puik-button--md puik-pagination__button puik-pagination__pager-button" aria-label="Go to page 4" aria-current="false">
              13
            </button>
          </li>
          <li class="puik-pagination__pager-item">
            <button class="puik-button puik-button--text puik-button--md puik-pagination__button puik-pagination__pager-button" aria-label="Go to page 5" aria-current="false">
              14
            </button>
          </li>
          <li class="puik-pagination__pager-item" aria-hidden="true">
            <span class="puik-pagination__pager-separator"> … </span>
          </li>
          <li class="puik-pagination__pager-item">
            <button class="puik-button puik-button--text puik-button--md puik-pagination__button puik-pagination__pager-button" aria-current="false" aria-label="Go to page 25">
              25
            </button>
          </li>
        </ul>
        <button class="puik-button puik-button--tertiary puik-button--md puik-pagination__button puik-pagination__next-button" aria-label="Next page">
          <div class="puik-icon material-icons-round puik-button__right-icon" style="font-size: 1.25rem;">
            keyboard_arrow_right
          </div>
        </button>
      </div>
    </div>
  </nav>
        `,
        language: 'html',
      },
    },
  },
}

export const Large: StoryObj = {
  render: Template,

  args: {
    variant: 'large',
  },

  parameters: {
    docs: {
      source: {
        code: `
  <!--VueJS Snippet-->
  <puik-pagination
    v-model:page="page"
    v-model:items-per-page="itemsPerPage"
    variant="large"
    :total-item="150"
  ></puik-pagination>

  <!--HTML/CSS Snippet-->
  <nav class="puik-pagination puik-pagination--large" role="navigation" aria-label="Pagination navigation">
    <div class="puik-pagination__content">
      <span class="puik-pagination__label">150 results</span>
      <div class="puik-pagination__content">
        <button class="puik-button puik-button--tertiary puik-button--md puik-button--disabled puik-pagination__previous-button puik-pagination__button" aria-label="Previous page">
          <div class="puik-icon material-icons-round puik-button__left-icon" style="font-size: 1.25rem;">keyboard_arrow_left</div>
          <span class="puik-pagination__previous-button-text">Previous page</span>
        </button>
        <div class="puik-pagination__jumper">
          <input type="hidden" value="1" style="position: fixed; height: 0px; padding: 0px; overflow: hidden; clip: rect(0px, 0px, 0px, 0px); white-space: nowrap; border-width: 0px; display: none;">
          <div class="puik-select__wrapper puik-select puik-pagination__select" aria-label="Select page">
            <button id="page-selector-id" type="button" aria-haspopup="listbox" aria-expanded="false" class="puik-select__button" aria-controls="page-selector-content-id">
              <input class="puik-select__selected" type="text">
              <div class="puik-icon material-icons-round puik-select__icon" style="font-size: 1.25rem;">unfold_more</div>
            </button>
            <div aria-orientation="vertical" id="page-selector-content-id" role="listbox" tabindex="0" class="puik-select__options" aria-labelledby="page-selector-id" style="z-index: 1000; display: none;">
              <ul class="puik-select__options-list">
                <li class="puik-option puik-option--selected" role="option" aria-selected="false">
                  <span class="puik-option__label">1</span>
                  <div class="puik-icon material-icons-round puik-option__selected-icon" style="font-size: 1.25rem;">checked</div>
                </li>
                <li class="puik-option" role="option" aria-selected="false">
                  <span class="puik-option__label">2</span>
                </li>
                <li class="puik-option" role="option" aria-selected="false">
                  <span class="puik-option__label">3</span>
                </li>
                <li class="puik-option" role="option" aria-selected="false">
                  <span class="puik-option__label">4</span>
                </li>
                <li class="puik-option" role="option" aria-selected="false">
                  <span class="puik-option__label">5</span>
                </li>
                <li class="puik-option" role="option" aria-selected="false">
                  <span class="puik-option__label">6</span>
                </li>
                <li class="puik-option" role="option" aria-selected="false">
                  <span class="puik-option__label">7</span>
                </li>
                <li class="puik-option" role="option" aria-selected="false">
                  <span class="puik-option__label">8</span>
                </li>
                <li class="puik-option" role="option" aria-selected="false">
                  <span class="puik-option__label">9</span>
                </li>
                <li class="puik-option" role="option" aria-selected="false">
                  <span class="puik-option__label">10</span>
                </li>
              </ul>
            </div>
          </div>
          <span class="puik-pagination__jumper-description">To 10 pages</span>
        </div>
        <button class="puik-button puik-button--tertiary puik-button--md puik-pagination__button puik-pagination__next-button" aria-label="Next page">
          <span class="puik-pagination__next-button-text">Next page</span>
          <div class="puik-icon material-icons-round puik-button__right-icon" style="font-size: 1.25rem;">keyboard_arrow_right</div>
        </button>
      </div>
      <input type="hidden" value="15" style="position: fixed; height: 0px; padding: 0px; overflow: hidden; clip: rect(0px, 0px, 0px, 0px); white-space: nowrap; border-width: 0px; display: none;">
      <div class="puik-select__wrapper puik-select puik-pagination__items-per-page-select">
        <button id="items-per-page-selector-id" type="button" aria-haspopup="listbox" aria-expanded="false" class="puik-select__button" aria-controls="items-per-page-selector-content-id">
          <input class="puik-select__selected" type="text">
          <div class="puik-icon material-icons-round puik-select__icon" style="font-size: 1.25rem;">unfold_more</div>
        </button>
        <div aria-orientation="vertical" id="items-per-page-selector-content-id" role="listbox" tabindex="0" class="puik-select__options" aria-labelledby="items-per-page-selector-id" style="z-index: 1000; display: none;">
          <ul class="puik-select__options-list">
            <li class="puik-option puik-pagination__items-per-page-select__option" role="option" aria-selected="false">
              <span class="puik-option__label">5</span>
            </li>
            <li class="puik-option puik-pagination__items-per-page-select__option" role="option" aria-selected="false">
              <span class="puik-option__label">10</span>
            </li>
            <li class="puik-option puik-option--selected puik-pagination__items-per-page-select__option" role="option" aria-selected="false">
              <span class="puik-option__label">15</span>
              <div class="puik-icon material-icons-round puik-option__selected-icon" style="font-size: 1.25rem;">checked</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
        `,
        language: 'html',
      },
    },
  },
}

export const Mobile: StoryObj = {
  render: Template,

  args: {
    variant: 'mobile',
  },

  parameters: {
    docs: {
      source: {
        code: `
  <!--VueJS Snippet-->
  <puik-pagination
    v-model:page="page"
    variant="mobile"
    :total-item="500"
    :item-count="100"
    :items-per-page="50"
  ></puik-pagination>

  <!--HTML/CSS Snippet-->
  <nav class="puik-pagination puik-pagination--mobile" role="navigation" aria-label="Pagination navigation">
    <div class="puik-pagination__content">
      <button class="puik-button puik-button--tertiary puik-button--md puik-button--disabled puik-pagination__previous-button puik-pagination__button" aria-label="Previous page">
        <div class="puik-icon material-icons-round puik-button__left-icon" style="font-size: 1.25rem;">keyboard_arrow_left</div>
      </button>
      <span class="puik-pagination__label">Page 1 to 25</span>
      <button class="puik-button puik-button--tertiary puik-button--md puik-pagination__button puik-pagination__next-button" aria-label="Next page">
        <div class="puik-icon material-icons-round puik-button__right-icon" style="font-size: 1.25rem;">keyboard_arrow_right</div>
      </button>
    </div>
  </nav>
        `,
        language: 'html',
      },
    },
  },
}

export const Loader: StoryObj = {
  render: Template,

  args: {
    variant: 'loader',
  },

  parameters: {
    docs: {
      source: {
        code: `
  <!--VueJS Snippet-->
  <puik-pagination
    v-model:page="page"
    variant="mobile"
    :total-item="500"
    :item-count="100"
    :items-per-page="50"
  ></puik-pagination>

  <!--HTML/CSS Snippet-->
  <nav class="puik-pagination puik-pagination--loader" role="navigation" aria-label="Pagination navigation">
    <span class="puik-pagination__label">You saw 25 products out of 500.</span>
    <button class="puik-button puik-button--tertiary puik-button--md puik-button--fluid puik-pagination__button puik-pagination__load-more-button">
      Load more
    </button>
  </nav>
        `,
        language: 'html',
      },
    },
  },
}
