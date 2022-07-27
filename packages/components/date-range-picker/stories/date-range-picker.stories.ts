import PuikDateRangePicker from './../src/date-range-picker.vue'
import type { Meta, Story, Args } from '@storybook/vue3'

export default {
  title: 'Components/DateRangePicker',
  component: DateRangePicker,
} as Meta

const Template: Story = (args: Args) => ({
  components: {
    PuikDateRangePicker,
  },
  setup() {
    return { args }
  },
  template: `<puik-date-range-picker></puik-date-range-picker>`,
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
