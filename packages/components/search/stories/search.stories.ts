import PuikSearch from './../src/search.vue'
import type { Meta, Story, Args } from '@storybook/vue3'

export default {
  title: 'Components/Search',
  component: PuikSearch,
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'password', 'email', 'search', 'url', 'tel'],
      description: 'Set the type of the input',
      table: {
        defaultValue: {
          summary: 'text',
        },
      },
    },
    id: {
      description: 'Set the id of the input',
    },
    placeholder: {
      description: 'Set the placeholder of the input',
    },
    disabled: {
      control: 'boolean',
      description: 'Set the input as disabled',
      table: {
        defaultValue: {
          summary: 'false',
        },
      },
    },
    name: {
      description: 'Set the name of the input',
    },
    autocomplete: {
      description: 'Set the autocomplete mode of the input',
    },
    required: {
      description: 'Set the input as required',
      table: {
        defaultValue: {
          summary: 'false',
        },
      },
    },
  },
} as Meta

const Template: Story = (args: Args) => ({
  components: {
    PuikSearch,
  },
  setup() {
    return { args }
  },
  template: `<puik-search></puik-search>`,
})

export const Default = Template.bind({})
Default.args = {
  type: undefined,
  id: '',
  placeholder: '',
  name: '',
  autocomplete: true,
  required: false,
  disabled: false,
}
Default.parameters = {
  docs: {
    source: {
      code: `
      <!--VueJS Snippet-->
      <puik-input v-model="myValue" />
      
      <!--HTML/CSS Snippet-->
      <div class="puik-search">
        <div class="puik-search__wrapper">
          <input class="puik-search__field" type="text" />
        </div>
      </div>
      `,
      language: 'html',
    },
  },
}
