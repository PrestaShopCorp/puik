import { ref, defineComponent, provide, shallowReactive } from 'vue';
import { createRouter, createMemoryHistory, RouterView, routerKey, routeLocationKey, routerViewLocationKey } from 'vue-router';
import type { RouteLocationNormalizedLoaded } from 'vue-router';
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
      control: { type: 'number', min: 1, max: 3 },
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
<puik-tab-navigation :key="args.defaultPosition" :name="args.name" :default-position="args.defaultPosition">
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
<puik-tab-navigation :key="args.defaultPosition" :name="args.name" :default-position="args.defaultPosition">
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

const ToolsPage = defineComponent({
  components: { PuikTabNavigation, PuikTabNavigationGroupTitles, PuikTabNavigationTitle, RouterView },
  template: `
<div>
  <p style="margin-bottom:12px;font-size:12px;color:#666;">
    You are in <strong>Tools</strong> — the parent tab above should stay highlighted.
  </p>
  <puik-tab-navigation name="tools-subnav" :default-position="1">
    <puik-tab-navigation-group-titles aria-label="Tools sub-navigation">
      <puik-tab-navigation-title :position="1" to="/tools/list">List</puik-tab-navigation-title>
      <puik-tab-navigation-title :position="2" to="/tools/config">Configuration</puik-tab-navigation-title>
    </puik-tab-navigation-group-titles>
  </puik-tab-navigation>
  <div style="padding:12px;border:1px solid #dce1e3;margin-top:8px;"><router-view /></div>
</div>`
});

export const NestedRoutes: StoryObj = {
  render: () => {
    const router = createRouter({
      history: createMemoryHistory(),
      routes: [
        { path: '/', redirect: '/dashboard' },
        { path: '/dashboard', component: defineComponent({ template: '<p>Dashboard content</p>' }) },
        {
          path: '/tools',
          redirect: '/tools/list',
          component: ToolsPage,
          children: [
            { path: 'list', component: defineComponent({ template: '<p>Tools › List content</p>' }) },
            { path: 'config', component: defineComponent({ template: '<p>Tools › Configuration content</p>' }) }
          ]
        }
      ]
    });

    const reactiveRoute = {} as RouteLocationNormalizedLoaded;
    for (const key in router.currentRoute.value) {
      Object.defineProperty(reactiveRoute, key, {
        get: () => router.currentRoute.value[key as keyof RouteLocationNormalizedLoaded],
        enumerable: true
      });
    }

    return {
      components: { PuikTabNavigation, PuikTabNavigationGroupTitles, PuikTabNavigationTitle, RouterView },
      setup() {
        provide(routerKey, router);
        provide(routeLocationKey, shallowReactive(reactiveRoute));
        provide(routerViewLocationKey, router.currentRoute);
        router.push('/dashboard');
        return { route: shallowReactive(reactiveRoute) };
      },
      template: `
<div style="font-family:sans-serif;">
  <p style="margin-bottom:12px;font-size:12px;color:#666;">
    Current route: <code>{{ route.path }}</code>
  </p>
  <puik-tab-navigation name="main-nav" :default-position="1">
    <puik-tab-navigation-group-titles aria-label="Main navigation">
      <puik-tab-navigation-title :position="1" to="/dashboard">Dashboard</puik-tab-navigation-title>
      <puik-tab-navigation-title :position="2" to="/tools">Tools</puik-tab-navigation-title>
    </puik-tab-navigation-group-titles>
  </puik-tab-navigation>
  <div style="padding:16px;border:1px solid #dce1e3;margin-top:8px;">
    <router-view />
  </div>
</div>`
    };
  },
  parameters: {
    docs: {
      description: {
        story: `
Use the \`to\` prop on \`PuikTabNavigationTitle\` to enable Vue Router integration.
When \`to\` is provided, the \`--selected\` class is computed from the current route path instead of the tab position.
This means a parent tab stays highlighted when any of its child routes is active.

- Click **Tools** → navigates to \`/tools/list\`, the **Tools** parent tab remains \`--selected\`
- Click **List** or **Configuration** (sub-tabs) → the parent **Tools** tab stays highlighted
        `
      },
      source: {
        code: `
<!--VueJS Snippet-->
<!-- Parent navigation -->
<puik-tab-navigation name="main-nav" :default-position="1">
  <puik-tab-navigation-group-titles aria-label="Main navigation">
    <puik-tab-navigation-title :position="1" to="/dashboard">Dashboard</puik-tab-navigation-title>
    <puik-tab-navigation-title :position="2" to="/tools">Tools</puik-tab-navigation-title>
  </puik-tab-navigation-group-titles>
</puik-tab-navigation>
<router-view />

<!-- Child navigation (inside the Tools route component) -->
<puik-tab-navigation name="tools-subnav" :default-position="1">
  <puik-tab-navigation-group-titles aria-label="Tools sub-navigation">
    <puik-tab-navigation-title :position="1" to="/tools/list">List</puik-tab-navigation-title>
    <puik-tab-navigation-title :position="2" to="/tools/config">Configuration</puik-tab-navigation-title>
  </puik-tab-navigation-group-titles>
</puik-tab-navigation>
<router-view />
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
