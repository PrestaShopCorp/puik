import { ref } from 'vue'
import PuikAccordionGroup from '../src/accordion-group.vue'
import PuikAccordion from '../src/accordion.vue'
import type { Meta, Story, Args } from '@storybook/vue3'

export default {
  title: 'Components/Accordion/AccordionGroup',
  component: PuikAccordionGroup,
  argTypes: {
    multiple: {
      control: 'boolean',
      description: 'Allow multiple accordions to be expanded',
      table: {
        defaultValue: {
          summary: false,
        },
        type: {
          summary: 'true|false',
        },
      },
    },
    contained: {
      control: 'boolean',
      description: 'Remove space between accordion',
      table: {
        defaultValue: {
          summary: false,
        },
        type: {
          summary: 'true|false',
        },
      },
    },
    modelValue: {
      control: 'select',
      options: ['accordion-1', 'accordion-2', 'accordion-3'],
      description: 'v-model to control expanded accordions',
      table: {
        defaultValue: {
          summary: 'null',
        },
      },
    },
    default: {
      control: 'none',
      description: 'Accordions slots',
    },
  },
  args: {
    multiple: false,
    modelValue: 'accordion-2',
  },
} as Meta

const Template: Story = (args: Args) => ({
  components: {
    PuikAccordionGroup,
    PuikAccordion,
  },
  setup() {
    const expandedAccordions = ref('accordion-1')
    return { args, expandedAccordions }
  },
  template: `
    <puik-accordion-group v-model="expandedAccordions" v-bind="args">
      <puik-accordion title="Title 1" sub-title="Sub title 1" name="accordion-1">
        Content 1
      </puik-accordion>
      <puik-accordion name="accordion-2" icon="home" title="Title 2">
        Content 2
      </puik-accordion>
      <puik-accordion title="Title 3" sub-title="Sub title 3" icon="check" name="accordion-3">
        Content 3
      </puik-accordion>
    </puik-accordion-group>
  `,
})

export const Default = Template.bind({})
Default.args = {
  multiple: false,
  contained: false,
}
Default.parameters = {
  docs: {
    source: {
      code: `
<!--VueJS Snippet-->
<puik-accordion-group
  v-model="expandedAccordion"
  :multiple="true|false"
  :contained="true|false"
>
  <puik-accordion title="Title 1" name="accordion-1">
    Content 1
  </puik-accordion>
  <puik-accordion title="Title 2" name="accordion-2">
    Content 2
  </puik-accordion>
  <puik-accordion title="Title 3" name="accordion-3">
    Content 3
  </puik-accordion>
</puik-accordion-group>

<!--HTML/CSS Snippet-->
<div class="puik-accordion-group">
  <!--
    State classes
    Disabled: "puik-accordion--disabled"
    Expanded: "puik-accordion--expanded"
  -->
  <div class="puik-accordion">
    <button aria-expanded="false" aria-controls="puik-accordion-2217" class="puik-accordion__header">
      <div class="puik-accordion__header__content">
        <div class="puik-accordion__header__content__title">Title 1</div>
        <div class="puik-accordion__header__content__sub-title">Sub title 1</div>
      </div>
      <div class="puik-icon material-icons-round puik-accordion__header__expand__icon" style="font-size: 24px;">keyboard_arrow_down</div>
    </button>
    <div id="puik-accordion-2217" class="puik-accordion__content" style="display: none;"> Content 1 </div>
  </div>
  <div class="puik-accordion puik-accordion--expanded">
    <button aria-expanded="true" aria-controls="puik-accordion-5297" class="puik-accordion__header">
      <div class="puik-icon material-icons-round puik-accordion__header__icon" style="font-size: 24px;">home</div>
      <div class="puik-accordion__header__content">
        <div class="puik-accordion__header__content__title">Title 2</div>
        <div class="puik-accordion__header__content__sub-title"></div>
      </div>
      <div class="puik-icon material-icons-round puik-accordion__header__expand__icon" style="font-size: 24px;">keyboard_arrow_up</div>
    </button>
    <div id="puik-accordion-5297" class="puik-accordion__content"> Content 2 </div>
  </div>
  <div class="puik-accordion">
    <button aria-expanded="false" aria-controls="puik-accordion-9502" class="puik-accordion__header">
      <div class="puik-icon material-icons-round puik-accordion__header__icon" style="font-size: 24px;">check</div>
      <div class="puik-accordion__header__content">
        <div class="puik-accordion__header__content__title">Title 3</div>
        <div class="puik-accordion__header__content__sub-title">Sub title 3</div>
      </div>
      <div class="puik-icon material-icons-round puik-accordion__header__expand__icon" style="font-size: 24px;">keyboard_arrow_down</div>
    </button>
    <div id="puik-accordion-9502" class="puik-accordion__content" style="display: none;"> Content 3 </div>
  </div>
</div>
      `,
      language: 'html',
    },
  },
}

export const Multiple = Template.bind({})
Multiple.args = {
  multiple: true,
  contained: false,
  modelValue: ['accordion-1', 'accordion-2', 'accordion-3'],
}
Multiple.parameters = {
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
  <puik-accordion title="Title 3" name="accordion-3">
    Content 3
  </puik-accordion>
</puik-accordion-group>

<!--HTML/CSS Snippet-->
<div class="puik-accordion-group">
  <div class="puik-accordion puik-accordion--expanded">
    <button aria-expanded="true" aria-controls="puik-accordion-2217" class="puik-accordion__header">
      <div class="puik-accordion__header__content">
        <div class="puik-accordion__header__content__title">Title 1</div>
        <div class="puik-accordion__header__content__sub-title">Sub title 1</div>
      </div>
      <div class="puik-icon material-icons-round puik-accordion__header__expand__icon" style="font-size: 24px;">keyboard_arrow_down</div>
    </button>
    <div id="puik-accordion-2217" class="puik-accordion__content" style="display: none;"> Content 1 </div>
  </div>
  <div class="puik-accordion puik-accordion--expanded">
    <button aria-expanded="true" aria-controls="puik-accordion-5297" class="puik-accordion__header">
      <div class="puik-icon material-icons-round puik-accordion__header__icon" style="font-size: 24px;">home</div>
      <div class="puik-accordion__header__content">
        <div class="puik-accordion__header__content__title">Title 2</div>
        <div class="puik-accordion__header__content__sub-title"></div>
      </div>
      <div class="puik-icon material-icons-round puik-accordion__header__expand__icon" style="font-size: 24px;">keyboard_arrow_up</div>
    </button>
    <div id="puik-accordion-5297" class="puik-accordion__content"> Content 2 </div>
  </div>
  <div class="puik-accordion puik-accordion--expanded">
    <button aria-expanded="true" aria-controls="puik-accordion-9502" class="puik-accordion__header">
      <div class="puik-icon material-icons-round puik-accordion__header__icon" style="font-size: 24px;">check</div>
      <div class="puik-accordion__header__content">
        <div class="puik-accordion__header__content__title">Title 3</div>
        <div class="puik-accordion__header__content__sub-title">Sub title 3</div>
      </div>
      <div class="puik-icon material-icons-round puik-accordion__header__expand__icon" style="font-size: 24px;">keyboard_arrow_down</div>
    </button>
    <div id="puik-accordion-9502" class="puik-accordion__content" style="display: none;"> Content 3 </div>
  </div>
</div>
      `,
      language: 'html',
    },
  },
}

export const Contained = Template.bind({})
Contained.args = {
  multiple: false,
  contained: true,
}
Contained.parameters = {
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
  <puik-accordion title="Title 3" name="accordion-3">
    Content 3
  </puik-accordion>
</puik-accordion-group>

<!--HTML/CSS Snippet-->
<div class="puik-accordion-group">
  <div class="puik-accordion puik-accordion--expanded">
    <button aria-expanded="true" aria-controls="puik-accordion-2217" class="puik-accordion__header">
      <div class="puik-accordion__header__content">
        <div class="puik-accordion__header__content__title">Title 1</div>
        <div class="puik-accordion__header__content__sub-title">Sub title 1</div>
      </div>
      <div class="puik-icon material-icons-round puik-accordion__header__expand__icon" style="font-size: 24px;">keyboard_arrow_down</div>
    </button>
    <div id="puik-accordion-2217" class="puik-accordion__content" style="display: none;"> Content 1 </div>
  </div>
  <div class="puik-accordion puik-accordion--expanded">
    <button aria-expanded="true" aria-controls="puik-accordion-5297" class="puik-accordion__header">
      <div class="puik-icon material-icons-round puik-accordion__header__icon" style="font-size: 24px;">home</div>
      <div class="puik-accordion__header__content">
        <div class="puik-accordion__header__content__title">Title 2</div>
        <div class="puik-accordion__header__content__sub-title"></div>
      </div>
      <div class="puik-icon material-icons-round puik-accordion__header__expand__icon" style="font-size: 24px;">keyboard_arrow_up</div>
    </button>
    <div id="puik-accordion-5297" class="puik-accordion__content"> Content 2 </div>
  </div>
  <div class="puik-accordion puik-accordion--expanded">
    <button aria-expanded="true" aria-controls="puik-accordion-9502" class="puik-accordion__header">
      <div class="puik-icon material-icons-round puik-accordion__header__icon" style="font-size: 24px;">check</div>
      <div class="puik-accordion__header__content">
        <div class="puik-accordion__header__content__title">Title 3</div>
        <div class="puik-accordion__header__content__sub-title">Sub title 3</div>
      </div>
      <div class="puik-icon material-icons-round puik-accordion__header__expand__icon" style="font-size: 24px;">keyboard_arrow_down</div>
    </button>
    <div id="puik-accordion-9502" class="puik-accordion__content" style="display: none;"> Content 3 </div>
  </div>
</div>
      `,
      language: 'html',
    },
  },
}
