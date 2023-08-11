import { ref } from 'vue'
import PuikIcon from '../../icon/src/icon.vue'
import {
  PuikTabNavigation,
  PuikTabNavigationGroupTitles,
  PuikTabNavigationGroupPanels,
  PuikTabNavigationTitle,
  PuikTabNavigationPanel,
} from '..'
import type { Meta, StoryFn, Args, StoryObj } from '@storybook/vue3'

const meta: Meta<typeof PuikTabNavigation> = {
  title: 'Components/TabNavigation',
  component: PuikTabNavigation,
  argTypes: {
    name: {
      description:
        "Prop which will correspond to the component's html id attribute. NB: must not start with a number",
      control: 'text',
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: {
          summary: 'none',
        },
      },
    },
    defaultPosition: {
      description:
        'Default position of the selected tab. NB: the minimum value cannot be less than 1 ',
      control: { type: 'number', min: 1 },
      table: {
        type: {
          summary: 'number',
        },
        defaultValue: {
          summary: 1,
        },
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof PuikTabNavigation>

const Template: StoryFn = (args: Args) => ({
  components: {
    PuikIcon,
    PuikTabNavigation,
    PuikTabNavigationGroupTitles,
    PuikTabNavigationGroupPanels,
    PuikTabNavigationTitle,
    PuikTabNavigationPanel,
  },
  setup() {
    const tabs = ref([
      { name: 'Tab-1', content: 'content 1' },
      { name: 'Tab-2', content: 'content 2' },
      { name: 'Tab-3', content: 'content 3', disabled: true },
      { name: 'Tab-4', content: 'content 4' },
      { name: 'Tab-5', content: 'content 5' },
    ])
    return { tabs, args }
  },
  template: `
<puik-tab-navigation v-bind="args">
  <puik-tab-navigation-group-titles>
    <template v-for="(tab, index) in tabs" :key="index">
      <puik-tab-navigation-title :position="index + 1" :disabled="tab?.disabled">
        {{ tab?.name }}
      </puik-tab-navigation-title>
    </template>
  </puik-tab-navigation-group-titles>
  <puik-tab-navigation-group-panels>
    <template v-for="(tab, index) in tabs" :key="index">
      <puik-tab-navigation-panel :position="index + 1">
        {{ tab?.content }}
      </puik-tab-navigation-panel>
    </template>
  </puik-tab-navigation-group-panels>
</puik-tab-navigation>
`,
})

export const Default: Story = {
  render: Template,
  args: {
    name: 'storybook-example',
    defaultPosition: 1,
  },
  parameters: {
    docs: {
      source: {
        code: `
<!--VueJS Snippet-->
<puik-tab-navigation v-bind="args">
  <puik-tab-navigation-group-titles>
    <template v-for="(tab, index) in tabs" :key="index">
      <puik-tab-navigation-title :position="index + 1" :disabled="tab?.disabled">
        {{ tab?.name }}
      </puik-tab-navigation-title>
    </template>
  </puik-tab-navigation-group-titles>
  <puik-tab-navigation-group-panels>
    <template v-for="(tab, index) in tabs" :key="index">
      <puik-tab-navigation-panel :position="index + 1">
        {{ tab?.content }}
      </puik-tab-navigation-panel>
    </template>
  </puik-tab-navigation-group-panels>
</puik-tab-navigation>

<!--HTML/CSS Snippet-->
`,
        language: 'html',
      },
    },
  },
}
