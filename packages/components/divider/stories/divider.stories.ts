import { dividerOrientations } from '../src/divider'
import PuikDivider from './../src/divider.vue'
import type { Meta, StoryFn, Args } from '@storybook/vue3'

const dividerOrientationsSummary = dividerOrientations.join('|')

export default {
  title: 'Components/Divider',
  component: PuikDivider,
  argTypes: {
    orientation: {
      description:
        'define the horizontal or vertical orientation of the divider component',
      control: 'select',
      options: dividerOrientations,
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: {
          summary: 'horizontal',
        },
      },
    },
    dataTest: {
      description: 'set data-test attribute for e2e test purpose',
      control: 'text',
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: {
          summary: 'undefined',
        },
      },
    },
  },
  args: {},
} as Meta

const DefaultTemplate: StoryFn = (args: Args) => ({
  components: {
    PuikDivider,
  },
  setup() {
    return { args }
  },
  template: `<puik-divider v-bind="args"/>`,
})

const OrientationTemplate: StoryFn = (args: Args) => ({
  components: {
    PuikDivider,
  },
  setup() {
    return { args }
  },
  template: `
<div style="display: flex; flex-direction: column; gap: 8px;">
  <puik-divider orientation="horizontal"/>
  <div style="min-height: 96px; display: flex">
    <puik-divider orientation="vertical"/>
  </div>
</div>
  `,
})

const DataTestTemplate: StoryFn = (args: Args) => ({
  components: {
    PuikDivider,
  },
  setup() {
    return { args }
  },
  template: `
<div style="display: flex; flex-direction: column; gap: 8px;">
  <puik-divider orientation="horizontal" dataTest="test"/>
  <div style="min-height: 96px; display: flex">
    <puik-divider orientation="vertical" dataTest="test"/>
  </div>
</div>
  `,
})

export const Default = {
  render: DefaultTemplate,
  args: {},
  parameters: {
    docs: {
      source: {
        code: `
<!-- VueJS Snippet -->
<puik-divider />

<!-- HTML/CSS Snippet -->
<hr class="puik-divider puik-divider--horizontal">
`,
        language: 'html',
      },
    },
  },
}

export const Orientation = {
  render: OrientationTemplate,
  args: {},
  parameters: {
    docs: {
      source: {
        code: `
<!-- VueJS Snippet -->
<!-- $orientations: ${dividerOrientationsSummary} -->
<puik-divider orientation="{$size}"/>

<!-- HTML/CSS Snippet -->
<!-- $size = 'horizontal' -->
<hr class="puik-divider puik-divider--horizontal">
<!-- $size = 'vertical' -->
<div class="puik-divider puik-divider--vertical"></div>
`,
        language: 'html',
      },
    },
  },
}

export const DataTest = {
  render: DataTestTemplate,
  args: {},
  parameters: {
    docs: {
      source: {
        code: `
<!-- VueJS Snippet -->
<puik-divider orientation="{$size}" data-test="{$test}"/>

<!-- HTML/CSS Snippet -->
<!-- $size = 'horizontal' -->
<hr class="puik-divider puik-divider--horizontal" data-test="horizontal-{$test}">
<!-- $size = 'vertical' -->
<div class="puik-divider puik-divider--vertical" data-test="vertical-{$test}"></div>
`,
        language: 'html',
      },
    },
  },
}
