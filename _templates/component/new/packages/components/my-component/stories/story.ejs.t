---
to: packages/components/<%= h.changeCase.param(name) %>/stories/<%= h.changeCase.param(name) %>.stories.ts
---
import <%= h.changeCase.pascal(name) %> from './../src/<%= h.changeCase.param(name) %>.vue'
import type { Meta, Story, Args } from '@storybook/vue3'

export default {
  title: 'Components/<%= h.changeCase.pascal(name) %>',
  component: <%= h.changeCase.pascal(name) %>,
} as Meta

const Template: Story = (args: Args) => ({
  components: {
    <%= h.changeCase.pascal(name) %>,
  },
  setup() {
    return { args }
  },
  template: '<<%= h.changeCase.param(name) %>></<%= h.changeCase.param(name) %>>',
})

export const Default = Template.bind({})
Default.args = {}
Default.parameters = {
  docs: {
    source: {
      code: `
      <!--VueJS Snippet-->
      
      <!--HTML/CSS Snippet-->
      `,
      language: 'html',
    },
  },
}
