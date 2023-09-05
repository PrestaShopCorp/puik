import PuikAccordionGroup from '../src/accordion-group.vue'
import PuikAccordion from '../src/accordion.vue'
import { paddingVariants } from '../src/accordion'
import type { Meta, StoryFn, Args } from '@storybook/vue3'

const paddingVariantsSummary = paddingVariants.join(' ')

export default {
  title: 'Components/Accordion/Accordion',
  component: PuikAccordion,
  argTypes: {
    name: {
      control: 'text',
      description:
        'name used by parent AccordionGroup to expand/collapse accordion',
    },
    title: {
      control: 'text',
      description: 'Title displayed in the header',
    },
    subTitle: {
      control: 'text',
      description: 'Sub title displayed in the header',
    },
    icon: {
      control: 'text',
      description: 'Icon used in the header',
    },
    disabled: {
      control: 'boolean',
      description: 'Set accordion disabled',
      table: {
        defaultValue: {
          summary: false,
        },
      },
    },
    headerPaddingX: {
      control: 'select',
      options: ['smaller', 'small', 'normal', 'large', 'larger'],
      description: 'Set horizontal paddings of accordion header',
      table: {
        defaultValue: {
          summary: 'large',
          detail: 'large (24px)',
        },
        type: {
          summary: paddingVariantsSummary,
          detail:
            'smaller(4px) | small(8px) | normal(16px)| large(24px) | larger(32px)',
        },
      },
    },
    headerPaddingY: {
      control: 'select',
      options: ['smaller', 'small', 'normal', 'large', 'larger'],
      description: 'Set vertical paddings of accordion header',
      table: {
        defaultValue: {
          summary: 'normal',
          detail: 'normal(16px)',
        },
        type: {
          summary: paddingVariantsSummary,
          detail:
            'smaller(4px) | small(8px) | normal(16px)| large(24px) | larger(32px)',
        },
      },
    },
    contentPaddingX: {
      control: 'select',
      options: ['smaller', 'small', 'normal', 'large', 'larger'],
      description: 'Set horizontal paddings of accordion content',
      table: {
        defaultValue: {
          summary: 'large',
          detail: 'large (24px)',
        },
        type: {
          summary: paddingVariantsSummary,
          detail:
            'smaller(4px) | small(8px) | normal(16px)| large(24px) | larger(32px)',
        },
      },
    },
    contentPaddingY: {
      control: 'select',
      options: ['smaller', 'small', 'normal', 'large', 'larger'],
      description: 'Set vertical paddings of accordion content',
      table: {
        defaultValue: {
          summary: 'normal',
          detail: 'normal(16px)',
        },
        type: {
          summary: paddingVariantsSummary,
          detail:
            'smaller(4px) | small(8px) | normal(16px)| large(24px) | larger(32px)',
        },
      },
    },
    default: {
      control: 'none',
      description: 'Accordion content',
    },
  },
} as Meta

const Template: StoryFn = (args: Args) => ({
  components: {
    PuikAccordionGroup,
    PuikAccordion,
  },
  args: {},
  setup() {
    return { args }
  },
  template: `
    <puik-accordion-group>
      <puik-accordion v-bind="args">
        Content 1
      </puik-accordion>
    </puik-accordion-group>
  `,
})

export const Default = {
  render: Template,

  args: {
    name: 'accordion-1',
    title: 'Accordion title',
    subTitle: 'Accordion subtitle',
    icon: 'home',
    disabled: false,
  },

  parameters: {
    docs: {
      source: {
        code: `
  <!--VueJS Snippet-->
  <puik-accordion-group>
    <puik-accordion
        :name="name"
        :title="title"
        :sub-title="subTitle"
        :icon="icon"
        :disabled="true|false"
        header-padding-x="smaller | small | normal | large | larger"
        header-padding-y="smaller | small | normal | large | larger"
        content-padding-x="smaller | small | normal | large | larger"
        content-padding-y="smaller | small | normal | large | larger"
    >
      Content 1
    </puik-accordion>
  </puik-accordion-group>

  <!--HTML/CSS Snippet-->
  <div class="puik-accordion-group">
    <!--
      State classes
      Disabled: "puik-accordion--disabled"
      Expanded: "puik-accordion--expanded"

      Padding Variants
      $paddingVariants: smaller|small|normal|large|larger
    -->
    <div class="puik-accordion puik-accordion--expanded">
      <button aria-expanded="true" aria-controls="accordion-id" class="
        puik-accordion__header
        puik-accordion__header--padding-x-{$paddingVariants}
        puik-accordion__header--padding-y-{$paddingVariants}"
      >
        <div class="puik-icon material-icons-round puik-accordion__header__icon" style="font-size: 24px;">home</div>
        <div class="puik-accordion__header__content">
          <div class="puik-accordion__header__content__title">Accordion title</div>
          <div class="puik-accordion__header__content__sub-title">Accordion subtitle</div>
        </div>
        <div class="puik-icon material-icons-round puik-accordion__header__expand__icon" style="font-size: 24px;">
          keyboard_arrow_up
        </div>
      </button>
      <div id="accordion-id" class="
        puik-accordion__content
        puik-accordion__content--padding-x-{$paddingVariants}
        puik-accordion__content--padding-y-{$paddingVariants}"
      >
        Content 1
      </div>
    </div>
  </div>
        `,
        language: 'html',
      },
    },
  },
}

export const Disabled = {
  render: Template,

  args: {
    disabled: true,
    name: 'accordion-1',
    title: 'Disabled accordion title',
    subTitle: 'Disabled accordion sub-title',
    icon: 'home',
  },

  parameters: {
    docs: {
      source: {
        code: `
  <!--VueJS Snippet-->
  <puik-accordion-group>
    <puik-accordion name="accordion-1" disabled>
      Content 1
    </puik-accordion>
  </puik-accordion-group>

  <!--HTML/CSS Snippet-->
  <div class="puik-accordion-group">
    <div class="puik-accordion puik-accordion--disabled">
      <button aria-expanded="true" aria-controls="accordion-id" class="puik-accordion__header" disabled>
        <div class="puik-icon material-icons-round puik-accordion__header__icon" style="font-size: 24px;">home</div>
        <div class="puik-accordion__header__content">
          <div class="puik-accordion__header__content__title">Accordion title</div>
          <div class="puik-accordion__header__content__sub-title">Accordion subtitle</div>
        </div>
        <div class="puik-icon material-icons-round puik-accordion__header__expand__icon" style="font-size: 24px;">keyboard_arrow_up</div>
      </button>
      <div id="accordion-id" class="puik-accordion__content"> Content 1 </div>
    </div>
  </div>
        `,
        language: 'html',
      },
    },
  },
}
