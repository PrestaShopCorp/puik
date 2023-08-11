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
  title: 'Components/TabNavigation/TabNavigationGroupPanels',
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
    return { args }
  },
  template: `
<puik-tab-navigation v-bind="args">

  <puik-tab-navigation-group-titles>
    <puik-tab-navigation-title :position="1">
      title 1
    </puik-tab-navigation-title>
    <puik-tab-navigation-title :position="2">
      title 2
    </puik-tab-navigation-title>
    <puik-tab-navigation-title :position="3">
      title 3
    </puik-tab-navigation-title>
  </puik-tab-navigation-group-titles>

  <puik-tab-navigation-group-panels>
    <puik-tab-navigation-panel :position="1">
      Content 1
    </puik-tab-navigation-panel>
    <puik-tab-navigation-panel :position="2">
      Content 2
    </puik-tab-navigation-panel>
    <puik-tab-navigation-panel :position="3">
      Content 3
    </puik-tab-navigation-panel>
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
      controls: { exclude: ['name', 'defaultPosition'] },
      source: {
        code: `
<!--VueJS Snippet-->
<puik-tab-navigation v-bind="args">

  <puik-tab-navigation-group-titles>
    <puik-tab-navigation-title :position="1">
      title 1
    </puik-tab-navigation-title>
    <puik-tab-navigation-title :position="2">
      title 2
    </puik-tab-navigation-title>
    <puik-tab-navigation-title :position="3">
      title 3
    </puik-tab-navigation-title>
  </puik-tab-navigation-group-titles>

  <puik-tab-navigation-group-panels>
    <puik-tab-navigation-panel :position="1">
      Content 1
    </puik-tab-navigation-panel>
    <puik-tab-navigation-panel :position="2">
      Content 2
    </puik-tab-navigation-panel>
    <puik-tab-navigation-panel :position="3">
      Content 3
    </puik-tab-navigation-panel>
  </puik-tab-navigation-group-panels>

</puik-tab-navigation>

<!--HTML Snippet-->
<div class="puik-tab-navigation__group-panels"></div>

<!--CSS Snippet-->
.puik-tab-navigation__group-panels {
  padding: 0.5rem;
}
`,
        language: 'html',
      },
    },
  },
}
