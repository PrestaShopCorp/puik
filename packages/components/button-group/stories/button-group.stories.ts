import { ref } from 'vue'
import PuikButtonGroup from './../src/button-group.vue'
import PuikButton from './../../button/src/button.vue'
import type { Meta, Story, Args } from '@storybook/vue3'

export default {
  title: 'Components/ButtonGroup',
  component: PuikButtonGroup,
  argTypes: {
    selected: {
      description: 'Selected button',
      control: 'text',
      table: {
        defaultValue: {
          summary: false,
        },
      },
    },
    default: {
      control: 'none',
      description: 'Use puik buttons in the puik button group',
    },
  },
  args: {
    selected: 'btn1',
  },
} as Meta

const Template: Story = (args: Args) => ({
  components: {
    PuikButtonGroup,
    PuikButton,
  },
  setup() {
    const selectedValue = ref('btn1')

    return {
      selectedValue,
      args,
    }
  },
  template: `
    <puik-button-group v-model="selectedValue">
      <puik-button :variant="(selectedValue === 'btn1') ? 'primary' : 'tertiary'" value="btn1">Button 1</puik-button>
      <puik-button :variant="(selectedValue === 'btn2') ? 'primary' : 'tertiary'" value="btn2">Button 2</puik-button>
      <puik-button :variant="(selectedValue === 'btn3') ? 'primary' : 'tertiary'" value="btn3">Button 3</puik-button>
    </puik-button-group>
    
    `,
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
