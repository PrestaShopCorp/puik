import { ref } from 'vue'
import PuikSearch from './../src/search.vue'
import type { Meta, Story, Args } from '@storybook/vue3'

export default {
  title: 'Components/Search',
  component: PuikSearch,
  argTypes: {
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

export const Disabled: Story = () => ({
  components: {
    PuikSearch,
  },
  setup() {
    const myValue = ref('')
    return { myValue }
  },
  template: `<puik-search v-model="myValue" disabled></puik-search>`,
})

Disabled.parameters = {
  docs: {
    source: {
      code: `
      <!--VueJS Snippet-->
      <puik-search v-model="myValue" disabled />
      
      <!--HTML/CSS Snippet-->
      <div class="puik-search">
        <div class="puik-search__wrapper puik-search__wrapper--disabled">
          <input class="puik-search__field" type="text" disabled />
        </div>
      </div>
      `,
      language: 'html',
    },
  },
}

export const Autocomplete: Story = () => ({
  components: {
    PuikSearch,
  },
  setup() {
    const myValue = ref('')
    return { myValue }
  },
  template: `<puik-search v-model="myValue" :autocomplete="'test'"></puik-search>`,
})

Autocomplete.parameters = {
  docs: {
    source: {
      code: `
      <!--VueJS Snippet-->
      <puik-search v-model="myValue" :autocomplete="'test'" />
      
      <!--HTML/CSS Snippet-->
      <div class="puik-search">
        <div class="puik-search__wrapper ">
          <input class="puik-search__field" type="text" :autocomplete="'test'" />
        </div>
      </div>
      `,
      language: 'html',
    },
  },
}

export const Rounded: Story = () => ({
  components: {
    PuikSearch,
  },
  setup() {
    const myValue = ref('')
    return { myValue }
  },
  template: `<puik-search v-model="myValue" isMainFeature></puik-search>`,
})

Rounded.parameters = {
  docs: {
    source: {
      code: `
      <!--VueJS Snippet-->
      <puik-search v-model="myValue" isMainFeature />
      
      <!--HTML/CSS Snippet-->
      <div class="puik-search">
        <div class="puik-search__wrapper puik-search__wrapper--rounded-input">
          <input class="puik-search__field" type="text" isMainFeature />
        </div>
      </div>
      `,
      language: 'html',
    },
  },
}
export const RoundedDisabled: Story = () => ({
  components: {
    PuikSearch,
  },
  setup() {
    const myValue = ref('')
    return { myValue }
  },
  template: `<puik-search v-model="myValue" isMainFeature disabled></puik-search>`,
})

RoundedDisabled.parameters = {
  docs: {
    source: {
      code: `
      <!--VueJS Snippet-->
      <puik-search v-model="myValue" isMainFeature disabled/>
      
      <!--HTML/CSS Snippet-->
      <div class="puik-search">
        <div class="puik-search__wrapper puik-search__wrapper--rounded-input">
          <input class="puik-search__field" type="text" isMainFeature disabled/>
        </div>
      </div>
      `,
      language: 'html',
    },
  },
}

export const RoundedAndAutocomplete: Story = () => ({
  components: {
    PuikSearch,
  },
  setup() {
    const myValue = ref('')
    return { myValue }
  },
  template: `<puik-search v-model="myValue" isMainFeature :autocomplete="'test'"></puik-search>`,
})

RoundedAndAutocomplete.parameters = {
  docs: {
    source: {
      code: `
      <!--VueJS Snippet-->
      <puik-search v-model="myValue" isMainFeature :autocomplete="'test'"/>
      
      <!--HTML/CSS Snippet-->
      <div class="puik-search">
        <div class="puik-search__wrapper puik-search__wrapper--rounded-input">
          <input class="puik-search__field" type="text" isMainFeature :autocomplete="'test'"/>
        </div>
      </div>
      `,
      language: 'html',
    },
  },
}
