import { PuikTabNavigation, PuikTabNavigationGroupTitles, PuikTabNavigationGroupPanels, PuikTabNavigationTitle, PuikTabNavigationPanel, PuikIcon } from '@prestashopcorp/puik-components';
import type { Meta, StoryFn, Args, StoryObj } from '@storybook/vue3';

const meta: Meta<
| typeof PuikTabNavigation
| typeof PuikTabNavigationGroupTitles
| typeof PuikTabNavigationGroupPanels
| typeof PuikTabNavigationTitle
| typeof PuikTabNavigationPanel
> = {
  title: 'Components/TabNavigation/TabNavigationTitle',
  component: PuikTabNavigationTitle,
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
        'position of tab inside PuiktabNavigationGroupTitles component. NB: must be greater than or equal to 1'
    },
    disabled: {
      description:
        'disable a navigation tab (see the second panel for this example)',
      control: 'boolean',
      table: {
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

  <puik-tab-navigation-group-titles :aria-label="args.ariaLabel">
    <puik-tab-navigation-title :position="1">
      <puik-icon
        icon="home"
        font-size="18px"
        color="black"
        node-type="span"
      />
      title 1
    </puik-tab-navigation-title>
    <puik-tab-navigation-title :position="2" :disabled="args.disabled">
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
          'NB: 1) The position prop must be greater than or equal to 1, in the case of a loop it is therefore necessary to increment the index by 1 (see the example with the linked component: tabNavigationPanel). 2) Special attention regarding disabled prop: the defaultPosition prop of tabNavigation component takes precedence over the disabled prop. During the initialization of the TabNavigation component the content of the panel will be visible (it is only once the panel is switched that the disabled behavior is applied). 3) tabNavigationTitle component has a slot tag that allows you to integrate any content (ex: adding an icon in the example below)'
      },
      controls: { exclude: ['name', 'defaultPosition', 'ariaLabel'] },
      source: {
        code: `
<!--VueJS Snippet-->
<puik-tab-navigation :name="args.name" :default-position="args.defaultPosition">

  <puik-tab-navigation-group-titles :aria-label="args.ariaLabel">
    <puik-tab-navigation-title :position="1">
      <puik-icon
        icon="home"
        font-size="18px"
        color="black"
        node-type="span"
      />
      title 1
    </puik-tab-navigation-title>
    <puik-tab-navigation-title :position="2" :disabled="args.disabled">
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
<button id="name-example-position-1" role="tab" aria-selected="true" aria-controls="name-example-panel-1" tabindex="0" class="puik-tab-navigation__title puik-tab-navigation__title--selected"></button>

<!--CSS Snippet-->
.puik-tab-navigation__title {
  @apply relative  min-h-full p-2 flex items-center cursor-pointer puik-body-default-bold;
  flex: 0 1 135px;
  gap: 8px;
  white-space: nowrap;
  border-bottom: 1px solid #dce1e3;
  &:focus:not(:hover) {
    @apply bg-primary-400;
    outline: none;
  }
  &:hover {
    @apply bg-primary-300;
  }
  &--selected {
    &::before {
      @apply bg-black;
      content: '';
      display: block;
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 3px;
      border-radius: 4px 4px 0 0;
    }
  }
  &--disabled {
    @apply text-primary-600 bg-primary-200;
  }
}
`,
        language: 'html'
      }
    }
  }
};
