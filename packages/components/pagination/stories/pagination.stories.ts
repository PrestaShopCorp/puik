import { ref } from 'vue'
import { paginationVariants, PaginationVariantEnum } from '../src/pagination'
import PuikPagination from './../src/pagination.vue'
import type { Meta, Story, Args } from '@storybook/vue3'

export default {
  title: 'Components/Pagination',
  component: PuikPagination,
  argTypes: {
    variant: {
      control: 'select',
      options: paginationVariants,
      description: 'Set the pagination variant',
      table: {
        defaultValue: {
          summary: PaginationVariantEnum.medium,
        },
      },
    },
    totalItem: {
      control: 'number',
      description: 'Set the total item count',
    },
    maxPage: {
      control: 'number',
      description: 'Set the max page',
    },
    itemCount: {
      control: 'number',
      description: 'Set the current item count',
    },
    label: {
      control: 'text',
      description: 'Set the label',
      table: {
        defaultValue: {
          summary: undefined,
        },
      },
    },
    loaderButtonLabel: {
      control: 'text',
      description: 'Set the text used in button on loader variant',
      table: {
        defaultValue: {
          summary: undefined,
        },
      },
    },
  },
  args: {
    variant: PaginationVariantEnum.medium,
    totalItem: 500,
    itemCount: 25,
    maxPage: 20,
  },
} as Meta

const Template: Story = (args: Args) => ({
  components: {
    PuikPagination,
  },
  setup() {
    const page = ref(1)
    return { args, page }
  },
  template: `<puik-pagination v-model="page" v-bind="args"></puik-pagination>`,
})

export const Default = Template.bind({})
Default.args = {}
Default.parameters = {
  docs: {
    source: {
      code: `
      <!--VueJS Snippet-->
        <PuikPagination
          v-model="page"
          :total-item="500"
          :item-count="25"
          :max-page="20"
      ></PuikPagination>

      <!--HTML/CSS Snippet-->
      <nav class="puik-pagination puik-pagination--medium" role="navigation" aria-label="Pagination navigation">
        <span class="puik-pagination__label">100 results</span>
        <div class="puik-pagination__content">
          <button class="puik-button puik-button--tertiary puik-button--md puik-pagination__previous-button puik-pagination__button" aria-label="Previous page">
            <div class="puik-icon material-icons-round puik-button__left-icon" style="font-size: 1.25rem;">keyboard_arrow_left</div>
          </button>
          <ul class="puik-pagination__pager">
            <li class="puik-pagination__pager-item">
              <button class="puik-button puik-button--tertiary puik-button--md puik-pagination__button puik-pagination__pager-button" aria-current="false" aria-label="Go to page 1">
                1
              </button>
            </li>
            <li class="puik-pagination__pager-item">
              <button class="puik-button puik-button--tertiary puik-button--md puik-pagination__button--active puik-pagination__button puik-pagination__pager-button" aria-label="Go to page 2" aria-current="true">
                2
              </button>
            </li>
            <li class="puik-pagination__pager-item">
              <button class="puik-button puik-button--tertiary puik-button--md puik-pagination__button puik-pagination__pager-button" aria-label="Go to page 3" aria-current="false">
                3
              </button>
            </li>
            <li class="puik-pagination__pager-item">
              <button class="puik-button puik-button--tertiary puik-button--md puik-pagination__button puik-pagination__pager-button" aria-label="Go to page 4" aria-current="false">
                4
              </button>
            </li>
            <li class="puik-pagination__pager-item">
              <button class="puik-button puik-button--tertiary puik-button--md puik-pagination__button puik-pagination__pager-button" aria-label="Go to page 5" aria-current="false">
                5
              </button>
            </li>
            <li class="puik-pagination__pager-item">
              <button class="puik-button puik-button--tertiary puik-button--md puik-pagination__button puik-pagination__pager-button" aria-label="Go to page 6" aria-current="false">
                6
              </button>
            </li>
            <li class="puik-pagination__pager-item" aria-hidden="true">
              <span class="puik-pagination__pager-separator"> … </span>
            </li>
            <li class="puik-pagination__pager-item">
              <button class="puik-button puik-button--tertiary puik-button--md puik-pagination__button puik-pagination__pager-button" aria-current="false" aria-label="Go to page 100">
                100
              </button>
            </li>
          </ul>
          <button class="puik-button puik-button--tertiary puik-button--md puik-pagination__button puik-pagination__next-button" aria-label="Next page">
            <div class="puik-icon material-icons-round puik-button__right-icon" style="font-size: 1.25rem;">keyboard_arrow_right</div>
          </button>
        </div>
      </nav>
      `,
      language: 'html',
    },
  },
}

const args = {
  totalItem: 500,
  itemCount: 25,
  maxPage: 20,
}

export const Small: Story = () => ({
  components: {
    PuikPagination,
  },
  setup() {
    const page = ref(1)
    return { args, page }
  },
  template: `<puik-pagination v-model="page" variant="small" v-bind="args"></puik-pagination>`,
})

Small.parameters = {
  docs: {
    source: {
      code: `
      <!--VueJS Snippet-->
      <PuikPagination
        v-model="page"
        variant="small"
        :total-item="500"
        :item-count="25"
        :max-page="20"
      ></PuikPagination>

      <!--HTML/CSS Snippet-->
      <nav class="puik-pagination puik-pagination--small" role="navigation" aria-label="Pagination navigation">
        <span class="puik-pagination__label">Page 5 to 10</span>
        <div class="puik-pagination__content">
          <button class="puik-button puik-button--tertiary puik-button--md puik-pagination__previous-button puik-pagination__button" aria-label="Previous page">
            <div class="puik-icon material-icons-round puik-button__left-icon" style="font-size: 1.25rem;">keyboard_arrow_left</div>
          </button>
          <button class="puik-button puik-button--tertiary puik-button--md puik-pagination__button puik-pagination__next-button" aria-label="Next page">
            <div class="puik-icon material-icons-round puik-button__right-icon" style="font-size: 1.25rem;">keyboard_arrow_right</div>
          </button>
        </div>
      </nav>
      `,
      language: 'html',
    },
  },
}

export const Medium: Story = () => ({
  components: {
    PuikPagination,
  },
  setup() {
    const page = ref(1)
    return { args, page }
  },
  template: `<puik-pagination v-model="page" variant="medium" v-bind="args"></puik-pagination>`,
})

Medium.parameters = {
  docs: {
    source: {
      code: `
      <!--VueJS Snippet-->
      <PuikPagination
        v-model="page"
        variant="medium"
        :total-item="500"
        :item-count="25"
        :max-page="20"
      ></PuikPagination>

      <!--HTML/CSS Snippet-->
      <nav class="puik-pagination puik-pagination--medium" role="navigation" aria-label="Pagination navigation">
        <span class="puik-pagination__label">500 results</span>
        <div class="puik-pagination__content">
          <button class="puik-button puik-button--tertiary puik-button--md puik-pagination__previous-button puik-pagination__button" aria-label="Previous page">
            <div class="puik-icon material-icons-round puik-button__left-icon" style="font-size: 1.25rem;">keyboard_arrow_left</div>
          </button>
          <ul class="puik-pagination__pager">
            <li class="puik-pagination__pager-item">
              <button class="puik-button puik-button--text puik-button--md puik-pagination__button puik-pagination__pager-button" aria-current="false" aria-label="Go to page 1">
                1
              </button>
            </li>
            <li class="puik-pagination__pager-item" aria-hidden="true">
              <span class="puik-pagination__pager-separator"> … </span>
            </li>
            <li class="puik-pagination__pager-item">
              <button class="puik-button puik-button--text puik-button--md puik-pagination__button puik-pagination__pager-button" aria-label="Go to page 3" aria-current="false">
                3
              </button>
            </li>
            <li class="puik-pagination__pager-item">
              <button class="puik-button puik-button--text puik-button--md puik-pagination__button puik-pagination__pager-button" aria-label="Go to page 4" aria-current="false">
                4
              </button>
            </li>
            <li class="puik-pagination__pager-item">
            <!--
              State classes
              Active: "puik-pagination__pager-button--active"
            -->
              <button class="puik-button puik-button--text puik-button--md puik-pagination__pager-button--active puik-pagination__button puik-pagination__pager-button" aria-label="Go to page 5" aria-current="true">
                5
              </button>
            </li>
            <li class="puik-pagination__pager-item">
              <button class="puik-button puik-button--text puik-button--md puik-pagination__button puik-pagination__pager-button" aria-label="Go to page 6" aria-current="false">
                6
              </button>
            </li>
            <li class="puik-pagination__pager-item">
              <button class="puik-button puik-button--text puik-button--md puik-pagination__button puik-pagination__pager-button" aria-label="Go to page 7" aria-current="false">
                7
              </button>
            </li>
            <li class="puik-pagination__pager-item" aria-hidden="true">
              <span class="puik-pagination__pager-separator"> … </span>
            </li>
            <li class="puik-pagination__pager-item">
              <button class="puik-button puik-button--text puik-button--md puik-pagination__button puik-pagination__pager-button" aria-current="false" aria-label="Go to page 10">
                10
              </button>
            </li>
          </ul>
          <button class="puik-button puik-button--tertiary puik-button--md puik-pagination__button puik-pagination__next-button" aria-label="Next page">
            <div class="puik-icon material-icons-round puik-button__right-icon" style="font-size: 1.25rem;">keyboard_arrow_right</div>
          </button>
        </div>
      </nav>
      `,
      language: 'html',
    },
  },
}

export const Large: Story = () => ({
  components: {
    PuikPagination,
  },
  setup() {
    const page = ref(1)
    return { args, page }
  },
  template: `<puik-pagination v-model="page" variant="large" v-bind="args"></puik-pagination>`,
})

Large.parameters = {
  docs: {
    source: {
      code: `
      <!--VueJS Snippet-->
      <PuikPagination
        v-model="page"
        variant="large"
        :total-item="500"
        :item-count="100"
        :max-page="10"
      ></PuikPagination>

      <!--HTML/CSS Snippet-->
      <nav class="puik-pagination puik-pagination--large" role="navigation" aria-label="Pagination navigation">
        <span class="puik-pagination__label">500 results</span>
        <div class="puik-pagination__content">
          <button class="puik-button puik-button--tertiary puik-button--md puik-pagination__previous-button puik-pagination__button" aria-label="Previous page">
            <div class="puik-icon material-icons-round puik-button__left-icon" style="font-size: 1.25rem;">keyboard_arrow_left</div>
            <span class="puik-pagination__previous-button-text">Previous page</span>
          </button>
          <div class="puik-pagination__jumper">
            <input type="hidden" hidden="" readonly="" name="" value="5" style="position: absolute; padding: 0px; overflow: hidden; clip: rect(0px, 0px, 0px, 0px); white-space: nowrap; border-width: 0px; display: none;">
            <div class="puik-select__wrapper puik-select puik-pagination__select" aria-label="Select page">
              <button id="headlessui-listbox-button-1" type="button" aria-haspopup="true" aria-expanded="false" class="puik-select__button" aria-controls="headlessui-listbox-options-2">
                <input class="puik-select__selected" autocomplete="" placeholder="" tabindex="-1" type="text">
                <div class="puik-icon material-icons-round puik-select__icon" style="font-size: 1.25rem;">unfold_more</div>
              </button>
              <div aria-orientation="vertical" id="headlessui-listbox-options-2" role="listbox" tabindex="0" class="puik-select__options" aria-labelledby="headlessui-listbox-button-1" style="z-index: 1000; display: none;">
                <ul class="puik-select__options-list">
                  <li class="puik-option" id="headlessui-listbox-option-3" role="option" tabindex="-1">
                    <span class="puik-option__label">1</span>
                  </li>
                  <li class="puik-option" id="headlessui-listbox-option-4" role="option" tabindex="-1">
                    <span class="puik-option__label">2</span>
                  </li>
                  <li class="puik-option" id="headlessui-listbox-option-5" role="option" tabindex="-1">
                    <span class="puik-option__label">3</span>
                  </li>
                  <li class="puik-option" id="headlessui-listbox-option-6" role="option" tabindex="-1">
                    <span class="puik-option__label">4</span>
                  </li>
                  <li class="puik-option puik-option--selected" id="headlessui-listbox-option-7" role="option" tabindex="-1">
                    <span class="puik-option__label">5</span>
                    <div class="puik-icon material-icons-round puik-option__selected-icon" style="font-size: 1.25rem;">checked</div>
                  </li>
                  <li class="puik-option" id="headlessui-listbox-option-8" role="option" tabindex="-1">
                    <span class="puik-option__label">6</span>
                  </li>
                  <li class="puik-option" id="headlessui-listbox-option-9" role="option" tabindex="-1">
                    <span class="puik-option__label">7</span>
                  </li>
                  <li class="puik-option" id="headlessui-listbox-option-10" role="option" tabindex="-1">
                    <span class="puik-option__label">8</span>
                  </li>
                  <li class="puik-option" id="headlessui-listbox-option-11" role="option" tabindex="-1">
                    <span class="puik-option__label">9</span>
                  </li>
                  <li class="puik-option" id="headlessui-listbox-option-12" role="option" tabindex="-1">
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
      </nav>
      `,
      language: 'html',
    },
  },
}

export const Mobile: Story = () => ({
  components: {
    PuikPagination,
  },
  setup() {
    const page = ref(1)
    return { args, page }
  },
  template: `<puik-pagination v-model="page" variant="loader" v-bind="args"></puik-pagination>`,
})

Mobile.parameters = {
  docs: {
    source: {
      code: `
      <!--VueJS Snippet-->
      <PuikPagination
        v-model="page"
        variant="mobile"
        :total-item="500"
        :item-count="100"
        :max-page="10"
      ></PuikPagination>

      <!--HTML/CSS Snippet-->
      <nav class="puik-pagination puik-pagination--mobile" role="navigation" aria-label="Pagination navigation">
        <div class="puik-pagination__content">
          <button class="puik-button puik-button--tertiary puik-button--md puik-pagination__previous-button puik-pagination__button" aria-label="Previous page">
            <div class="puik-icon material-icons-round puik-button__left-icon" style="font-size: 1.25rem;">keyboard_arrow_left</div>
          </button>
          <span class="puik-pagination__label">Page 5 to 10</span>
          <button class="puik-button puik-button--tertiary puik-button--md puik-pagination__button puik-pagination__next-button" aria-label="Next page">
            <div class="puik-icon material-icons-round puik-button__right-icon" style="font-size: 1.25rem;">keyboard_arrow_right</div>
          </button>
        </div>
      </nav>
      `,
      language: 'html',
    },
  },
}
export const Loader: Story = () => ({
  components: {
    PuikPagination,
  },
  setup() {
    const page = ref(1)
    return { args, page }
  },
  template: `<puik-pagination v-model="page" variant="loader" v-bind="args"></puik-pagination>`,
})

Loader.parameters = {
  docs: {
    source: {
      code: `
      <!--VueJS Snippet-->
      <PuikPagination
        v-model="page"
        variant="mobile"
        :total-item="500"
        :item-count="100"
        :max-page="10"
      ></PuikPagination>

      <!--HTML/CSS Snippet-->
      <nav class="puik-pagination puik-pagination--loader" role="navigation" aria-label="Pagination navigation">
        <span class="puik-pagination__label">You saw 100 products out of 500.</span>
        <button class="puik-button puik-button--tertiary puik-button--md puik-button--fluid puik-pagination__button puik-pagination__load-more-button">
          Load more
        </button>
      </nav>
      `,
      language: 'html',
    },
  },
}
