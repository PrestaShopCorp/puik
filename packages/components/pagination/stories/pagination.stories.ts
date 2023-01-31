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
    mobileButtonLabel: {
      control: 'text',
      description: 'Set the text used in button on mobile variant',
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
        <div class="puik-pagination--medium__container">
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
        <span class="puik-pagination__label">Page 2 to 100</span>
        <div class="puik-pagination--medium__container">
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
        <span class="puik-pagination__label">100 results</span>
        <div class="puik-pagination--medium__container">
          <button class="puik-button puik-button--tertiary puik-button--md puik-pagination__previous-button puik-pagination__button" aria-label="Previous page">
            <div class="puik-icon material-icons-round puik-button__left-icon" style="font-size: 1.25rem;">keyboard_arrow_left</div>
          </button>
          <ul class="puik-pagination__pager">
            <li class="puik-pagination__pager-item">
              <!--
                State classes
                Active: "puik-pagination__button--active"
              -->
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
      <nav class="puik-pagination puik-pagination--medium" role="navigation" aria-label="Pagination navigation">
        <span class="puik-pagination__label">500 results</span>
        <div class="puik-pagination--medium__container">
          <button class="puik-button puik-button--tertiary puik-button--md puik-pagination__previous-button puik-pagination__button" aria-label="Previous page">
            <div class="puik-icon material-icons-round puik-button__left-icon" style="font-size: 1.25rem;">keyboard_arrow_left</div>
          </button>
          <ul class="puik-pagination__pager">
            <li class="puik-pagination__pager-item">
              <button class="puik-button puik-button--tertiary puik-button--md puik-pagination__button puik-pagination__pager-button" aria-current="false" aria-label="Go to page 1">
                1
              </button>
            </li>
            <li class="puik-pagination__pager-item" aria-hidden="true">
              <span class="puik-pagination__pager-separator"> … </span>
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
              <button class="puik-button puik-button--tertiary puik-button--md puik-pagination__button--active puik-pagination__button puik-pagination__pager-button" aria-label="Go to page 5" aria-current="true">
                5
              </button>
            </li>
            <li class="puik-pagination__pager-item">
              <button class="puik-button puik-button--tertiary puik-button--md puik-pagination__button puik-pagination__pager-button" aria-label="Go to page 6" aria-current="false">
                6
              </button>
            </li>
            <li class="puik-pagination__pager-item">
              <button class="puik-button puik-button--tertiary puik-button--md puik-pagination__button puik-pagination__pager-button" aria-label="Go to page 7" aria-current="false">
                7
              </button>
            </li>
            <li class="puik-pagination__pager-item" aria-hidden="true">
              <span class="puik-pagination__pager-separator"> … </span>
            </li>
            <li class="puik-pagination__pager-item">
              <button class="puik-button puik-button--tertiary puik-button--md puik-pagination__button puik-pagination__pager-button" aria-current="false" aria-label="Go to page 10">
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

export const Mobile: Story = () => ({
  components: {
    PuikPagination,
  },
  setup() {
    const page = ref(1)
    return { args, page }
  },
  template: `<puik-pagination v-model="page" variant="mobile" v-bind="args"></puik-pagination>`,
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
        <span class="puik-pagination__label">You saw 100 products out of 500.</span>
        <button class="puik-button puik-button--tertiary puik-button--md puik-button--fluid puik-pagination--mobile__load-more-button puik-pagination__button">
          Load more
        </button>
      </nav>
      `,
      language: 'html',
    },
  },
}
