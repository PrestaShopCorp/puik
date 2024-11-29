import { ref } from 'vue';
import { PuikPagination, PuikPaginationVariants } from '@prestashopcorp/puik-components';
import type { StoryObj, Meta, StoryFn, Args } from '@storybook/vue3';

const paginationVariants = Object.values(PuikPaginationVariants);
const paginationVariantsSummary = paginationVariants.join('|');

export default {
  title: 'Components/Pagination',
  component: PuikPagination,
  argTypes: {
    id: {
      control: 'text',
      description:
        'Sets the id HTML attribute of puik-pagination. If this prop is not configured, an id will be automatically generated using this pattern: puik-pagination-{randomNumber}',
      table: {
        defaultValue: {
          summary: 'puik-pagination-{randomNumber}'
        },
        type: {
          summary: 'string'
        }
      }
    },
    variant: {
      control: 'select',
      options: paginationVariants,
      description: 'Sets the pagination variant',
      table: {
        defaultValue: {
          summary: PuikPaginationVariants.Medium
        },
        type: {
          summary: paginationVariantsSummary
        }
      }
    },
    totalItem: {
      control: 'number',
      description: 'Sets the total item count',
      table: {
        type: {
          summary: 'number'
        }
      }
    },
    itemsPerPage: {
      control: 'none',
      table: {
        type: {
          summary: 'number'
        },
        defaultValue: { summary: 5 }
      },
      description: 'v-model of the items per page'
    },
    itemsPerPageOptions: {
      control: 'none',
      description: 'Sets the items per page options',
      table: {
        type: {
          summary: 'number[]'
        },
        defaultValue: {
          summary: [5, 10, 15]
        }
      }
    },
    displayItemsPerPage: {
      control: 'boolean',
      description: 'displays the select in order to choose the desired number of items per page (for large pagination variant)',
      table: {
        defaultValue: {
          summary: true
        }
      }
    },
    displayResults: {
      control: 'boolean',
      description: 'displays a label in front of the pagination for the small, medium and large variants indicating either the current page for the small variant or the total number of items for the medium and large variants',
      table: {
        defaultValue: {
          summary: true
        }
      }
    },
    page: {
      control: 'number',
      description: 'v-model of the current page',
      table: {
        type: {
          summary: 'number'
        }
      }
    },
    label: {
      control: 'text',
      description: 'Sets the label',
      table: {
        defaultValue: {
          summary: 'undefined'
        },
        type: {
          summary: 'string'
        }
      }
    },
    loaderButtonLabel: {
      control: 'text',
      description: 'Sets the text used in button on loader variant',
      table: {
        defaultValue: {
          summary: 'undefined'
        },
        type: {
          summary: 'string'
        }
      }
    },
    dataTest: {
      control: 'text',
      description:
        'Sets the data-test attribute `nextButton-${dataTest}` `previousButton-${dataTest}` `label-${dataTest}` `loadMoreButton-${dataTest}` (only for loader variant)'
    }
  },
  args: {
    variant: PuikPaginationVariants.Medium,
    totalItem: 150,
    label: '',
    loaderButtonLabel: undefined,
    displayItemsPerPage: true,
    displayResults: true
  }
} as Meta;

const Template: StoryFn = (args: Args) => ({
  components: {
    PuikPagination
  },
  setup() {
    const page = ref(1);
    const itemsPerPage = ref(5);
    return { args, page, itemsPerPage };
  },
  template: `<puik-pagination
      v-model:page="page"
      v-model:items-per-page="itemsPerPage"
      v-bind="args"
    ></puik-pagination>`
});

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
      :total-item="150"
  ></puik-pagination>

  <!--HTML/CSS Snippet-->
  <nav class="puik-pagination puik-pagination--medium" role="navigation" aria-label="Pagination navigation">
    <div class="puik-pagination__content">
        <span class="puik-pagination__label">150 result(s)</span>
        <div class="puik-pagination__content">
          <button class="puik-button puik-button--secondary puik-button--md puik-button--disabled puik-button--no-wrap puik-pagination__previous-button puik-pagination__button" aria-label="Previous page" disabled="">
              <div class="puik-icon puik-button__left-icon" style="font-size: 1.25rem;">keyboard_arrow_left</div>
          </button>
          <ul class="puik-pagination__pager">
              <li class="puik-pagination__pager-item">
                <button class="puik-button puik-button--secondary puik-button--md puik-button--no-wrap puik-pagination__button puik-pagination__pager-button" aria-current="true" aria-label="Go to page 1">
                    1 
                </button>
              </li>
              <li class="puik-pagination__pager-item">
                <button class="puik-button puik-button--text puik-button--md puik-button--no-wrap puik-pagination__button puik-pagination__pager-button" aria-label="Go to page 2" aria-current="false">
                    2
                </button>
              </li>
              <li class="puik-pagination__pager-item">
                <button class="puik-button puik-button--text puik-button--md puik-button--no-wrap puik-pagination__button puik-pagination__pager-button" aria-label="Go to page 3" aria-current="false">
                    3
                </button>
              </li>
              <li class="puik-pagination__pager-item">
                <button class="puik-button puik-button--text puik-button--md puik-button--no-wrap puik-pagination__button puik-pagination__pager-button" aria-label="Go to page 4" aria-current="false">
                    4
                </button>
              </li>
              <li class="puik-pagination__pager-item">
                <button class="puik-button puik-button--text puik-button--md puik-button--no-wrap puik-pagination__button puik-pagination__pager-button" aria-label="Go to page 5" aria-current="false">
                    5
                </button>
              </li>
              <li class="puik-pagination__pager-item" aria-hidden="true"><span class="puik-pagination__pager-separator"> … </span></li>
              <li class="puik-pagination__pager-item">
                <button class="puik-button puik-button--text puik-button--md puik-button--no-wrap puik-pagination__button puik-pagination__pager-button" aria-current="false" aria-label="Go to page 30">
                    30
                </button>
              </li>
          </ul>
          <button class="puik-button puik-button--secondary puik-button--md puik-button--no-wrap puik-pagination__button puik-pagination__next-button" aria-label="Next page">
              <div class="puik-icon puik-button__right-icon" style="font-size: 1.25rem;">keyboard_arrow_right</div>
          </button>
        </div>
    </div>
  </nav>
        `,
        language: 'html'
      }
    }
  }
};

export const Small: StoryObj = {
  render: Template,

  args: {
    variant: 'small'
  },

  parameters: {
    docs: {
      source: {
        code: `
  <!--VueJS Snippet-->
  <puik-pagination
    v-model:page="page"
    variant="small"
    :total-item="150"
  ></puik-pagination>

  <!--HTML/CSS Snippet-->
  <nav class="puik-pagination puik-pagination--small" role="navigation" aria-label="Pagination navigation">
    <div class="puik-pagination__content">
        <span class="puik-pagination__label">Page 1 to 30</span>
        <button class="puik-button puik-button--secondary puik-button--md puik-button--disabled puik-button--no-wrap puik-pagination__previous-button puik-pagination__button" disabled="" aria-label="Previous page">
          <div class="puik-icon puik-button__left-icon" style="font-size: 1.25rem;">keyboard_arrow_left</div>
        </button>
        <button class="puik-button puik-button--secondary puik-button--md puik-button--no-wrap puik-pagination__button puik-pagination__next-button" aria-label="Next page">
          <div class="puik-icon puik-button__right-icon" style="font-size: 1.25rem;">keyboard_arrow_right</div>
        </button>
    </div>
  </nav>
        `,
        language: 'html'
      }
    }
  }
};

export const Medium: StoryObj = {
  render: Template,

  args: {
    variant: 'medium'
  },

  parameters: {
    docs: {
      source: {
        code: `
  <!--VueJS Snippet-->
  <puik-pagination
    v-model:page="page"
    variant="medium"
    :total-item="150"
  ></puik-pagination>

  <!--HTML/CSS Snippet-->
  <nav class="puik-pagination puik-pagination--medium" role="navigation" aria-label="Pagination navigation">
    <div class="puik-pagination__content">
        <span class="puik-pagination__label">150 result(s)</span>
        <div class="puik-pagination__content">
          <button class="puik-button puik-button--secondary puik-button--md puik-button--disabled puik-button--no-wrap puik-pagination__previous-button puik-pagination__button" aria-label="Previous page" disabled="">
              <div class="puik-icon puik-button__left-icon" style="font-size: 1.25rem;">keyboard_arrow_left</div>
          </button>
          <ul class="puik-pagination__pager">
              <li class="puik-pagination__pager-item">
                <button class="puik-button puik-button--secondary puik-button--md puik-button--no-wrap puik-pagination__button puik-pagination__pager-button" aria-current="true" aria-label="Go to page 1">
                    1 
                </button>
              </li>
              <li class="puik-pagination__pager-item">
                <button class="puik-button puik-button--text puik-button--md puik-button--no-wrap puik-pagination__button puik-pagination__pager-button" aria-label="Go to page 2" aria-current="false">
                    2
                </button>
              </li>
              <li class="puik-pagination__pager-item">
                <button class="puik-button puik-button--text puik-button--md puik-button--no-wrap puik-pagination__button puik-pagination__pager-button" aria-label="Go to page 3" aria-current="false">
                    3
                </button>
              </li>
              <li class="puik-pagination__pager-item">
                <button class="puik-button puik-button--text puik-button--md puik-button--no-wrap puik-pagination__button puik-pagination__pager-button" aria-label="Go to page 4" aria-current="false">
                    4
                </button>
              </li>
              <li class="puik-pagination__pager-item">
                <button class="puik-button puik-button--text puik-button--md puik-button--no-wrap puik-pagination__button puik-pagination__pager-button" aria-label="Go to page 5" aria-current="false">
                    5
                </button>
              </li>
              <li class="puik-pagination__pager-item" aria-hidden="true"><span class="puik-pagination__pager-separator"> … </span></li>
              <li class="puik-pagination__pager-item">
                <button class="puik-button puik-button--text puik-button--md puik-button--no-wrap puik-pagination__button puik-pagination__pager-button" aria-current="false" aria-label="Go to page 30">
                    30
                </button>
              </li>
          </ul>
          <button class="puik-button puik-button--secondary puik-button--md puik-button--no-wrap puik-pagination__button puik-pagination__next-button" aria-label="Next page">
              <div class="puik-icon puik-button__right-icon" style="font-size: 1.25rem;">keyboard_arrow_right</div>
          </button>
        </div>
    </div>
  </nav>
        `,
        language: 'html'
      }
    }
  }
};

export const Large: StoryObj = {
  render: Template,

  args: {
    variant: 'large',
    totalItem: 150
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
      <span class="puik-pagination__label">150 result(s)</span>
      <div class="puik-pagination__content">
        <button class="puik-button puik-button--tertiary puik-button--md puik-button--disabled puik-button--no-wrap puik-pagination__previous-button puik-pagination__button" aria-label="Previous page" disabled="">
          <div class="puik-icon puik-button__left-icon" style="font-size: 1.25rem;">keyboard_arrow_left</div>
          <span class="puik-pagination__previous-button-text">Previous page</span>
        </button>
        <div class="puik-pagination__jumper">
          <div class="puik-select__wrapper puik-select puik-pagination__select" aria-label="Select page" data-headlessui-state="">
            <button id="headlessui-listbox-button-6552" type="button" aria-haspopup="listbox" aria-expanded="false" data-headlessui-state="" class="puik-select__button" aria-controls="headlessui-listbox-options-6553">
              <input class="puik-select__selected" tabindex="-1" type="text">
              <div class="puik-icon puik-select__icon" style="font-size: 1.25rem;">unfold_more</div>
            </button>
            <div id="headlessui-listbox-options-6553" aria-orientation="vertical" role="listbox" tabindex="0" data-headlessui-state="" class="puik-select__options puik-select__options--full-width" aria-labelledby="headlessui-listbox-button-6552" style="z-index: 1000; display: none;">
              
              <ul class="puik-select__options-list">
                <li class="puik-option puik-option--selected" id="headlessui-listbox-option-6554" role="option" tabindex="-1" aria-selected="false" data-headlessui-state="">
                  1
                  <div class="puik-icon puik-option__selected-icon" style="font-size: 1.25rem;">checked</div>
                </li>
                <li class="puik-option" id="headlessui-listbox-option-6555" role="option" tabindex="-1" aria-selected="false" data-headlessui-state="">
                  2
                </li>
                <li class="puik-option" id="headlessui-listbox-option-6556" role="option" tabindex="-1" aria-selected="false" data-headlessui-state="">
                  3
                </li>
                <li class="puik-option" id="headlessui-listbox-option-6557" role="option" tabindex="-1" aria-selected="false" data-headlessui-state="">
                  4
                </li>
                <li class="puik-option" id="headlessui-listbox-option-6558" role="option" tabindex="-1" aria-selected="false" data-headlessui-state="">
                  5
                </li>
                <li class="puik-option" id="headlessui-listbox-option-6559" role="option" tabindex="-1" aria-selected="false" data-headlessui-state="">
                  6
                </li>
                <li class="puik-option" id="headlessui-listbox-option-6560" role="option" tabindex="-1" aria-selected="false" data-headlessui-state="">
                  7
                </li>
                <li class="puik-option" id="headlessui-listbox-option-6561" role="option" tabindex="-1" aria-selected="false" data-headlessui-state="">
                  8
                </li>
                <li class="puik-option" id="headlessui-listbox-option-6562" role="option" tabindex="-1" aria-selected="false" data-headlessui-state="">
                  9
                </li>
                <li class="puik-option" id="headlessui-listbox-option-6563" role="option" tabindex="-1" aria-selected="false" data-headlessui-state="">
                  10
                </li>
                <li class="puik-option" id="headlessui-listbox-option-6564" role="option" tabindex="-1" aria-selected="false" data-headlessui-state="">
                  11
                </li>
                <li class="puik-option" id="headlessui-listbox-option-6565" role="option" tabindex="-1" aria-selected="false" data-headlessui-state="">
                  12
                </li>
                <li class="puik-option" id="headlessui-listbox-option-6566" role="option" tabindex="-1" aria-selected="false" data-headlessui-state="">
                  13
                </li>
                <li class="puik-option" id="headlessui-listbox-option-6567" role="option" tabindex="-1" aria-selected="false" data-headlessui-state="">
                  14
                </li>
                <li class="puik-option" id="headlessui-listbox-option-6568" role="option" tabindex="-1" aria-selected="false" data-headlessui-state="">
                  15
                </li>
                <li class="puik-option" id="headlessui-listbox-option-6569" role="option" tabindex="-1" aria-selected="false" data-headlessui-state="">
                  16
                </li>
                <li class="puik-option" id="headlessui-listbox-option-6570" role="option" tabindex="-1" aria-selected="false" data-headlessui-state="">
                  17
                </li>
                <li class="puik-option" id="headlessui-listbox-option-6571" role="option" tabindex="-1" aria-selected="false" data-headlessui-state="">
                  18
                </li>
                <li class="puik-option" id="headlessui-listbox-option-6572" role="option" tabindex="-1" aria-selected="false" data-headlessui-state="">
                  19
                </li>
                <li class="puik-option" id="headlessui-listbox-option-6573" role="option" tabindex="-1" aria-selected="false" data-headlessui-state="">
                  20
                </li>
                <li class="puik-option" id="headlessui-listbox-option-6574" role="option" tabindex="-1" aria-selected="false" data-headlessui-state="">
                  21
                </li>
                <li class="puik-option" id="headlessui-listbox-option-6575" role="option" tabindex="-1" aria-selected="false" data-headlessui-state="">
                  22
                </li>
                <li class="puik-option" id="headlessui-listbox-option-6576" role="option" tabindex="-1" aria-selected="false" data-headlessui-state="">
                  23
                </li>
                <li class="puik-option" id="headlessui-listbox-option-6577" role="option" tabindex="-1" aria-selected="false" data-headlessui-state="">
                  24
                </li>
                <li class="puik-option" id="headlessui-listbox-option-6578" role="option" tabindex="-1" aria-selected="false" data-headlessui-state="">
                  25
                </li>
                <li class="puik-option" id="headlessui-listbox-option-6579" role="option" tabindex="-1" aria-selected="false" data-headlessui-state="">
                  26
                </li>
                <li class="puik-option" id="headlessui-listbox-option-6580" role="option" tabindex="-1" aria-selected="false" data-headlessui-state="">
                  27
                </li>
                <li class="puik-option" id="headlessui-listbox-option-6581" role="option" tabindex="-1" aria-selected="false" data-headlessui-state="">
                  28
                </li>
                <li class="puik-option" id="headlessui-listbox-option-6582" role="option" tabindex="-1" aria-selected="false" data-headlessui-state="">
                  29
                </li>
                <li class="puik-option" id="headlessui-listbox-option-6583" role="option" tabindex="-1" aria-selected="false" data-headlessui-state="">
                  30
                </li>
              </ul>
            </div>
            
          </div>
          <span class="puik-pagination__jumper-description">to 30 page(s)</span>
        </div>
        <button class="puik-button puik-button--tertiary puik-button--md puik-button--no-wrap puik-pagination__button puik-pagination__next-button" aria-label="Next page">
          <span class="puik-pagination__next-button-text">Next page</span>
          <div class="puik-icon puik-button__right-icon" style="font-size: 1.25rem;">keyboard_arrow_right</div>
        </button>
      </div>
      <span class="puik-pagination__items-per-page-label">item(s) per page</span>
      <div class="puik-select__wrapper puik-select puik-pagination__items-per-page-select" data-headlessui-state="">
        <button id="headlessui-listbox-button-6538" type="button" aria-haspopup="listbox" aria-expanded="false" data-headlessui-state="" class="puik-select__button" aria-controls="headlessui-listbox-options-6539">
          <input class="puik-select__selected" tabindex="-1" type="text">
          <div class="puik-icon puik-select__icon" style="font-size: 1.25rem;">unfold_more</div>
        </button>
        <div id="headlessui-listbox-options-6539" aria-orientation="vertical" role="listbox" tabindex="0" data-headlessui-state="" class="puik-select__options puik-select__options--full-width" aria-labelledby="headlessui-listbox-button-6538" style="z-index: 1000; display: none;">
          <ul class="puik-select__options-list">
            <li class="puik-option puik-option--selected puik-pagination__items-per-page-select__option" id="headlessui-listbox-option-6540" role="option" tabindex="-1" aria-selected="false" data-headlessui-state="">
              5
              <div class="puik-icon puik-option__selected-icon" style="font-size: 1.25rem;">checked</div>
            </li>
            <li class="puik-option puik-pagination__items-per-page-select__option" id="headlessui-listbox-option-6541" role="option" tabindex="-1" aria-selected="false" data-headlessui-state="">
              10
            </li>
            <li class="puik-option puik-pagination__items-per-page-select__option" id="headlessui-listbox-option-6542" role="option" tabindex="-1" aria-selected="false" data-headlessui-state="">
              15
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
        `,
        language: 'html'
      }
    }
  }
};

export const Mobile: StoryObj = {
  render: Template,

  args: {
    variant: 'mobile'
  },

  parameters: {
    docs: {
      source: {
        code: `
  <!--VueJS Snippet-->
  <puik-pagination
    v-model:page="page"
    variant="mobile"
    :total-item="150"
  ></puik-pagination>

  <!--HTML/CSS Snippet-->
  <nav class="puik-pagination puik-pagination--mobile" role="navigation" aria-label="Pagination navigation">
    <div class="puik-pagination__content">
        <button class="puik-button puik-button--secondary puik-button--md puik-button--disabled puik-button--no-wrap puik-pagination__previous-button puik-pagination__button" disabled="" aria-label="Previous page">
          <div class="puik-icon puik-button__left-icon" style="font-size: 1.25rem;">keyboard_arrow_left</div>
        </button>
        <span class="puik-pagination__label">Page 1 to 30</span>
        <button class="puik-button puik-button--secondary puik-button--md puik-button--no-wrap puik-pagination__button puik-pagination__next-button" aria-label="Next page">
          <div class="puik-icon puik-button__right-icon" style="font-size: 1.25rem;">keyboard_arrow_right</div>
        </button>
    </div>
  </nav>
        `,
        language: 'html'
      }
    }
  }
};

export const Loader: StoryObj = {
  render: Template,

  args: {
    variant: 'loader'
  },

  parameters: {
    docs: {
      source: {
        code: `
  <!--VueJS Snippet-->
  <puik-pagination
    v-model:page="page"
    variant="mobile"
    :total-item="150"
  ></puik-pagination>

  <!--HTML/CSS Snippet-->
  <nav class="puik-pagination puik-pagination--loader" role="navigation" aria-label="Pagination navigation">
    <span class="puik-pagination__label">You saw 5 product(s) out of 150.</span>
    <button class="puik-button puik-button--tertiary puik-button--md puik-button--fluid puik-button--no-wrap puik-pagination__button puik-pagination__load-more-button">
        Load more
    </button>
  </nav>
        `,
        language: 'html'
      }
    }
  }
};
