import { ref } from 'vue';
import { PuikTabNavigation, PuikTabNavigationGroupTitles, PuikTabNavigationGroupPanels, PuikTabNavigationTitle, PuikTabNavigationPanel, PuikIcon, PuikBadge } from '@prestashopcorp/puik-components';
import type { Meta, StoryFn, Args, StoryObj } from '@storybook/vue3';

export default {
  title: 'Components/TabNavigation',
  component: PuikTabNavigation,
  argTypes: {
    name: {
      description:
        "Prop which will correspond to the component's html id attribute. NB: must not start with a number",
      control: 'text',
      table: {
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
    },
    'change-active-tab': {
      description: 'Event triggered when the current tab is changed',
      table: {
        defaultValue: {
          summary: '@change-active-tab'
        },
        type: {
          summary: 'Event (see details)',
          detail: `
          'change-active-tab': [position: number]
          `
        },
        category: 'Events'
      }
    }
  },
  args: {
    name: 'name-example',
    defaultPosition: 1,
    ariaLabel: 'aria-label-example'
  }
} as Meta;

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
    const tabs = ref([
      { name: 'title-1', content: 'content 1' },
      { name: 'title-2', content: 'content 2' },
      { name: 'title-3', content: 'content 3' }
    ]);
    return { tabs, args };
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
`
});

export const Default: StoryObj = {
  render: Template,
  parameters: {
    docs: {
      description: {
        story: `
  NB: The id attribute of the component corresponds to the prop name (allows you to identify each instance of the navigation component in the event that there are several on the same page).

  Tips:
  - If you want to set a width: set a width on the 'puik-tab-navigation'
  - If you want to set a width on tab nav: set a MIN-WIDTH on the 'puik-tab-navigation-title'
          `
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
`,
        language: 'html'
      }
    }
  }
};

export const ChangeActiveTabEvent: StoryObj = {
  render: () => ({
    components: {
      PuikIcon,
      PuikTabNavigation,
      PuikTabNavigationGroupTitles,
      PuikTabNavigationGroupPanels,
      PuikTabNavigationTitle,
      PuikTabNavigationPanel,
      PuikBadge
    },
    setup() {
      const args = {
        name: 'active-tab-event-example',
        defaultPosition: 1,
        ariaLabel: 'active-tab-event-example'
      };
      const tabs = ref([
        { name: 'title-1', content: 'content 1' },
        { name: 'title-2', content: 'content 2' },
        { name: 'title-3', content: 'content 3' }
      ]);
      const activeTab = ref(args.defaultPosition);
      return { tabs, args, activeTab };
    },
    template: `
<div class="flex flex-col gap-y-4">
  <div>
    <puik-badge variant="info">
      Current tab position at {{ activeTab }}
    </puik-badge>
  </div>
  <puik-tab-navigation
    :name="args.name"
    :default-position="args.defaultPosition"
    @change-active-tab="(position) => activeTab = position"
  >
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
</div>
    `
  }),
  parameters: {
    docs: {
      source: {
        code: `
<!--VueJS Snippet-->
// const activeTab = ref(args.defaultPosition);

<puik-badge variant="info">
  Current tab position at {{ activeTab }}
</puik-badge>

<puik-tab-navigation
  :name="args.name"
  :default-position="args.defaultPosition"
  @change-active-tab="(position) => activeTab = position"
>
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
        language: 'html'
      }
    }
  }
};
