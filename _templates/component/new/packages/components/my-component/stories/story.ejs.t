---
to: packages/components/<%= h.changeCase.param(name) %>/stories/<%= h.changeCase.param(name) %>.stories.ts
---
import { Meta, Story, Args } from '@storybook/vue3'
import <%= h.changeCase.pascal(name) %> from './../src/<%= h.changeCase.param(name) %>.vue'

export default {
  title: 'Components/<%= h.changeCase.pascal(name) %>',
  component: <%= h.changeCase.pascal(name) %>,
} as Meta

const Template: Story = (args: Args) => ({
  components: {
    <%= h.changeCase.pascal(name) %>,
  },
  props: Object.keys(args),
  template: '<<%= h.changeCase.param(name) %>></<%= h.changeCase.param(name) %>>',
})

export const Default = Template.bind({})
Default.args = {}
