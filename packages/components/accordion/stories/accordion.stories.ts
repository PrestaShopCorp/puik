import { ref } from 'vue'
import PuikAccordionGroup from '../src/accordion-group.vue'
import PuikAccordion from '../src/accordion.vue'
import type { Meta, Story, Args } from '@storybook/vue3'

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
    expandIcon: {
      control: 'text',
      description: 'Expand icon used in the header',
      table: {
        defaultValue: {
          summary: 'keyboard_arrow_down',
        },
      },
    },
    collapseIcon: {
      control: 'text',
      description: 'Collapse icon used in the header',
      table: {
        defaultValue: {
          summary: 'keyboard_arrow_up',
        },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Set accordion disabled',
    },
    default: {
      control: 'none',
      description: 'Accordion content',
    },
  },
} as Meta

const Template: Story = (args: Args) => ({
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

export const Default = Template.bind({})
Default.args = {
  name: 'accordion-1',
  title: 'Accordion title',
  subTitle: 'Accordion subtitle',
  icon: 'home',
  disabled: false,
}
Default.parameters = {
  docs: {
    source: {
      code: `
      <!--VueJS Snippet-->
      <puik-accordion-group>
        <puik-accordion title="Title 1" name="accordion-1">
          Content 1
        </puik-accordion>
        <puik-accordion name="accordion-2" title="Title 2">
          Content 2
        </puik-accordion>
        <puik-accordion title="Title 3" sub-title="Sub Title" name="accordion-3" disabled>
          Content 3
        </puik-accordion>
      </puik-accordion-group>

      <!--HTML/CSS Snippet-->
      <div class="puik-accordion-group">
        <div class="puik-accordion">
          <button aria-expanded="false" aria-controls="puik-accordion-6664" class="puik-accordion__title">Title 1 <div class="puik-icon material-icons-round" style="font-size: 20px;">keyboard_arrow_up</div>
          </button>
          <div id="puik-accordion-6664" class="puik-accordion__content"> Content 1 </div>
        </div>
        <!--
          State classes
          Disabled: "puik-accordion--disabled"
          Expanded: "puik-accordion--expanded"
        -->
        <div class="puik-accordion puik-accordion--expanded">
          <button aria-expanded="true" aria-controls="puik-accordion-3261" class="puik-accordion__title"> Title 2 <div class="puik-icon material-icons-round" style="font-size: 20px;">keyboard_arrow_down</div>
          </button>
          <div id="puik-accordion-3261" class="puik-accordion__content"> Content 2 </div>
        </div>
        <div class="puik-accordion">
          <button aria-expanded="false" aria-controls="puik-accordion-7108" class="puik-accordion__title">Title 3 <div class="puik-icon material-icons-round" style="font-size: 20px;">keyboard_arrow_up</div>
          </button>
          <div id="puik-accordion-7108" class="puik-accordion__content"> Content 3 </div>
        </div>
      </div>
      `,
      language: 'html',
    },
  },
}
