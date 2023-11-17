import { ref } from 'vue'
import { PuikTabNavigation, PuikTabNavigationGroupTitles, PuikTabNavigationGroupPanels, PuikTabNavigationTitle, PuikTabNavigationPanel, PuikIcon } from "@prestashopcorp/puik-components"
import type { Meta, StoryFn, Args, StoryObj } from '@storybook/vue3'

const meta: Meta<
  | typeof PuikTabNavigation
  | typeof PuikTabNavigationGroupTitles
  | typeof PuikTabNavigationGroupPanels
  | typeof PuikTabNavigationTitle
  | typeof PuikTabNavigationPanel
> = {
  title: 'Components/TabNavigation/TabNavigationPanel',
  component: PuikTabNavigationPanel,
  argTypes: {
    name: {
      description:
        "Prop which will correspond to the component's html id attribute. NB: must not start with a number",
      control: 'text',
      table: {
        disable: true,
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
        disable: true,
        type: {
          summary: 'number',
        },
        defaultValue: {
          summary: 1,
        },
      },
    },
    ariaLabel: {
      description: 'value of aria-label attribute',
      control: 'text',
      table: {
        disable: true,
        type: {
          summary: 'string',
        },
        defaultValue: {
          summary: 'none',
        },
      },
    },
    position: {
      description:
        'position of tab inside PuiktabNavigationGroupTitles component. NB: must be greater than or equal to 1',
    },
    disabled: {
      description: 'disable a navigation tab',
      control: 'boolean',
      table: {
        disable: true,
        type: {
          summary: 'boolean',
        },
        defaultValue: {
          summary: 'false',
        },
      },
    },
  },
}

export default meta
type Story = StoryObj<
  | typeof PuikTabNavigation
  | typeof PuikTabNavigationGroupTitles
  | typeof PuikTabNavigationGroupPanels
  | typeof PuikTabNavigationTitle
  | typeof PuikTabNavigationPanel
>

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
      { name: 'Title-1', content: 'content 1' },
      { name: 'Title-2', content: 'content 2' },
      { name: 'Title-3', content: 'content 3' },
    ])
    return { tabs, args }
  },
  template: `
<puik-tab-navigation :name="args.name" :default-position="args.defaultPosition">
  <puik-tab-navigation-group-titles :aria-label="args.ariaLabel">
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
  args: {
    name: 'name-example',
    defaultPosition: 1,
    ariaLabel: 'aria-label-example',
  },
  render: Template,
  parameters: {
    docs: {
      description: {
        story:
          'NB: The position prop must be greater than or equal to 1, in the case of a loop it is therefore necessary to increment the index by 1 (see example below)',
      },
      source: {
        code: `
<!--VueJS Snippet-->
<puik-tab-navigation :name="args.name" :default-position="args.defaultPosition">
  <puik-tab-navigation-group-titles :aria-label="args.ariaLabel">
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
<div id="name-example-panel-1" role="tabpanel" tabindex="0" aria-labelledby="name-example-position-1" class="puik-tab-navigation__panel"></div>
`,
        language: 'html',
      },
    },
  },
}
