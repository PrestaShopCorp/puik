import PuikProgressBar from './../src/progress-bar.vue'
import type { Meta, Story, Args } from '@storybook/vue3'

export default {
  title: 'Components/ProgressBar',
  component: PuikProgressBar,
  argTypes: {
    percentage: {
      control: {
        type: 'range',
        min: 0,
        max: 100,
      },
    },
  },
  args: {
    percentage: 50,
  },
} as Meta

const Template: Story = (args: Args) => ({
  components: {
    PuikProgressBar,
  },
  setup() {
    return { args }
  },
  template: `<puik-progress-bar v-bind="args"/>`,
})

export const Default = Template.bind({})
Default.args = {}
Default.parameters = {
  docs: {
    source: {
      code: `
<!--VueJS Snippet-->
<puik-progress-bar :percentage="50" />

<!--HTML/CSS Snippet-->
<div class="progress-bar__container">
  <div class="progress-bar__content" style="width: 50%;"></div>
</div>
      `,
      language: 'html',
    },
  },
}

export const Max = Template.bind({})
Max.args = {
  percentage: 100,
}
Max.parameters = {
  docs: {
    source: {
      code: `
<!--VueJS Snippet-->
<puik-progress-bar :percentage="100" />

<!--HTML/CSS Snippet-->
<div class="progress-bar__container">
  <div class="progress-bar__content" style="width: 100%;"></div>
</div>
      `,
      language: 'html',
    },
  },
}

export const Min = Template.bind({})
Min.args = {
  percentage: 0,
}
Min.parameters = {
  docs: {
    source: {
      code: `
<!--VueJS Snippet-->
<puik-progress-bar :percentage="0" />

<!--HTML/CSS Snippet-->
<div class="progress-bar__container">
  <div class="progress-bar__content" style="width: 0%;"></div>
</div>
      `,
      language: 'html',
    },
  },
}
