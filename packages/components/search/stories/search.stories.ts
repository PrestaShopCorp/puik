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
  template: `<puik-search v-bind="args">{{ args.default }}</puik-search>`,
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

export const DefaultWithValue: Story = () => ({
  components: {
    PuikSearch,
  },
  setup() {
    const myValue = ref('Input is not empty')
    return { myValue }
  },
  template: `<puik-search v-model="myValue" :autocomplete="'test'"></puik-search>`,
})

DefaultWithValue.parameters = {
  docs: {
    source: {
      code: `
      <!--VueJS Snippet-->
      <puik-search v-model="myValue" />
      
      <!--HTML/CSS Snippet-->
      <div class="puik-search">
        <div class="puik-search__wrapper >
          <input class="puik-search__field" type="text" />
        </div>
      </div>
      `,
      language: 'html',
    },
  },
}
export const DefaultWithAutocomplete: Story = () => ({
  components: {
    PuikSearch,
  },
  setup() {
    const myValue = ref('')
    return { myValue }
  },
  template: `<puik-search v-model="myValue" :autocomplete="'test'"></puik-search>`,
})

DefaultWithAutocomplete.parameters = {
  docs: {
    source: {
      code: `
      <!--VueJS Snippet-->
      <puik-search v-model="myValue" :autocomplete="'test'" />
      
      <!--HTML/CSS Snippet-->
      <div class="puik-search">
        <div class="puik-search__wrapper >
          <input class="puik-search__field" type="text" :autocomplete="'test'" />
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

export const DefaultWithoutAutocomplete: Story = () => ({
  components: {
    PuikSearch,
  },
  setup() {
    const myValue = ref('')
    return { myValue }
  },
  template: `<puik-search v-model="myValue"></puik-search>`,
})

DefaultWithoutAutocomplete.parameters = {
  docs: {
    source: {
      code: `
      <!--VueJS Snippet-->
      <puik-search v-model="myValue" />
      
      <!--HTML/CSS Snippet-->
      <div class="puik-search">
        <div class="puik-search__wrapper ">
          <input class="puik-search__field" type="text" />
        </div>
      </div>
      `,
      language: 'html',
    },
  },
}

export const roundedWithAutocomplete: Story = () => ({
  components: {
    PuikSearch,
  },
  setup() {
    const myValue = ref('')
    return { myValue }
  },
  template: `<puik-search v-model="myValue" isMainFeature :autocomplete="'test'"></puik-search>`,
})

roundedWithAutocomplete.parameters = {
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
export const roundedDisabled: Story = () => ({
  components: {
    PuikSearch,
  },
  setup() {
    const myValue = ref('')
    return { myValue }
  },
  template: `<puik-search v-model="myValue" isMainFeature disabled></puik-search>`,
})

roundedDisabled.parameters = {
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

export const roundedWithoutAutocomplete: Story = () => ({
  components: {
    PuikSearch,
  },
  setup() {
    const myValue = ref('')
    return { myValue }
  },
  template: `<puik-search v-model="myValue" isMainFeature></puik-search>`,
})

roundedWithoutAutocomplete.parameters = {
  docs: {
    source: {
      code: `
      <!--VueJS Snippet-->
      <puik-search v-model="myValue" isMainFeature/>
      
      <!--HTML/CSS Snippet-->
      <div class="puik-search">
        <div class="puik-search__wrapper puik-search__wrapper--rounded-input">
          <input class="puik-search__field" type="text" isMainFeature/>
        </div>
      </div>
      `,
      language: 'html',
    },
  },
}
