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
  },
} as Meta

const Template: Story = (args: Args) => ({
  components: {
    PuikSearch,
  },
  setup() {
    const myValue = ref('')
    return { args, myValue }
  },
  template: `<puik-search v-model="myValue" v-bind="args">{{ args.default }}</puik-search>`,
})

export const Default = Template.bind({})
Default.args = {
  id: '',
  placeholder: '',
  name: '',
  autocomplete: true,
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
          <span class="puik-search__icon puik-h2">search</span>
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
      <puik-search v-model="myValue" autocomplete="search" />
      
      <!--HTML/CSS Snippet-->
      <div class="puik-search">
        <div class="puik-search__wrapper">
          <span class="puik-search__icon puik-h2">search</span>
          <input class="puik-search__field" type="text" autocomplete="search" />
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
        <div class="puik-search__wrapper">
          <span class="puik-search__icon puik-h2">search</span>
          <input class="puik-search__field" type="text" />
          <button
          class="puik-button puik-button--sm puik-button--primary puik-search__confirm-icon"
          >
            east
          </button>
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
  template: `<puik-search v-model="myValue" rounded :autocomplete="'test'"></puik-search>`,
})

roundedWithAutocomplete.parameters = {
  docs: {
    source: {
      code: `
      <!--VueJS Snippet-->
      <puik-search v-model="myValue" rounded :autocomplete="'test'"/>
      
      <!--HTML/CSS Snippet-->
      <div class="puik-search">
        <div class="puik-search__wrapper puik-search__wrapper--rounded-input">
          <input class="puik-search__field" type="text" rounded :autocomplete="'test'"/>
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
  template: `<puik-search v-model="myValue" rounded disabled></puik-search>`,
})

roundedDisabled.parameters = {
  docs: {
    source: {
      code: `
      <!--VueJS Snippet-->
      <puik-search v-model="myValue" rounded disabled/>
      
      <!--HTML/CSS Snippet-->
      <div class="puik-search">
        <div class="puik-search__wrapper puik-search__wrapper--rounded-input">
          <input class="puik-search__field" type="text" rounded disabled/>
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
  template: `<puik-search v-model="myValue" rounded></puik-search>`,
})

roundedWithoutAutocomplete.parameters = {
  docs: {
    source: {
      code: `
      <!--VueJS Snippet-->
      <puik-search v-model="myValue" rounded/>
      
      <!--HTML/CSS Snippet-->
      <div class="puik-search">
        <div class="puik-search__wrapper puik-search__wrapper--rounded-input">
          <input class="puik-search__field" type="text" rounded/>
          <div class="flex">
          <puik-button
            class="puik-search__confirm-icon"
            size="sm"
            variant="primary"
            @click="sendContent"
            >east</puik-button
          >
        </div>
        </div>
      </div>
      `,
      language: 'html',
    },
  },
}
