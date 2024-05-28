import { PuikTabNavigation, PuikTabNavigationGroupTitles, PuikTabNavigationGroupPanels, PuikTabNavigationTitle, PuikTabNavigationPanel, PuikIcon } from '@prestashopcorp/puik-components';
import type { Meta, StoryFn, Args, StoryObj } from '@storybook/vue3';

const meta: Meta<
| typeof PuikTabNavigation
| typeof PuikTabNavigationGroupTitles
| typeof PuikTabNavigationGroupPanels
| typeof PuikTabNavigationTitle
| typeof PuikTabNavigationPanel
> = {
  title: 'Components/TabNavigation/TabNavigationGroupPanels',
  component: PuikTabNavigationGroupPanels,
  argTypes: {
    name: {
      description:
        "Prop which will correspond to the component's html id attribute. NB: must not start with a number",
      control: 'text',
      table: {
        disable: true,
        type: {
          summary: 'string'
        },
        defaultValue: {
          summary: 'none'
        }
      }
    },
    defaultPosition: {
      description:
        'Default position of the selected tab. NB: the minimum value cannot be less than 1 ',
      control: { type: 'number', min: 1 },
      table: {
        disable: true,
        type: {
          summary: 'number'
        },
        defaultValue: {
          summary: 1
        }
      }
    },
    ariaLabel: {
      description: 'value of aria-label attribute',
      control: 'text',
      table: {
        disable: true,
        type: {
          summary: 'string'
        },
        defaultValue: {
          summary: 'none'
        }
      }
    },
    position: {
      description:
        'position of tab inside PuiktabNavigationGroupTitles component. NB: must be greater than 1',
      table: {
        disable: true
      }
    },
    disabled: {
      description: 'disable a navigation tab',
      control: 'boolean',
      table: {
        disable: true,
        type: {
          summary: 'boolean'
        },
        defaultValue: {
          summary: 'false'
        }
      }
    }
  }
};

export default meta;
type Story = StoryObj<
| typeof PuikTabNavigation
| typeof PuikTabNavigationGroupTitles
| typeof PuikTabNavigationGroupPanels
| typeof PuikTabNavigationTitle
| typeof PuikTabNavigationPanel
>;

const Template: StoryFn = (args: Args) => ({
  components: {
    PuikIcon,
    PuikTabNavigation,
    PuikTabNavigationGroupTitles,
    PuikTabNavigationGroupPanels,
    PuikTabNavigationTitle,
    PuikTabNavigationPanel
  },
  setup() {
    return { args };
  },
  template: `
<puik-tab-navigation :name="args.name" :default-position="args.defaultPosition">

  <puik-tab-navigation-group-titles aria-label="args.ariaLabel">
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
`
});

export const Default: Story = {
  args: {
    name: 'name-example',
    defaultPosition: 1,
    ariaLabel: 'aria-label-example'
  },
  render: Template,
  parameters: {
    docs: {
      description: {
        story:
          'This subcomponent has no props. its role is to contain all the panels and to apply a css class to it'
      },
      source: {
        code: `
<!--VueJS Snippet-->
<puik-tab-navigation :name="args.name" :default-position="args.defaultPosition">

  <puik-tab-navigation-group-titles :aria-label="args.ariaLabel">
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
        language: 'html'
      }
    }
  }
};
