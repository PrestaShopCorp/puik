import { PuikSidebarGroupItem, PuikSidebarItem, PuikSidebarTitle } from '..'
import { PuikButton } from '../..'
import PuikSidebar from './../src/sidebar.vue'
import type { Meta, Story, Args } from '@storybook/vue3'

export default {
  title: 'Components/Sidebar',
  component: PuikSidebar,
  argTypes: {
    expanded: {
      control: 'boolean',
      description: 'Set the expansion state',
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: {
          summary: false,
        },
      },
    },
    openAccordion: {
      control: 'text',
      description: 'v-model of the open accordion name',
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: {
          summary: 'undefined',
        },
      },
    },
    mobile: {
      control: 'boolean',
      description:
        'Add a backdrop for dismiss and hide the sidebar when collapsed (mobile usage), expansion is triggered by the v-model',
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: {
          summary: false,
        },
      },
    },
  },
  parameters: {
    docs: {
      inlineStories: false,
      iframeHeight: 500,
    },
  },
} as Meta

const Template: Story = (args: Args) => ({
  components: {
    PuikSidebar,
    PuikSidebarGroupItem,
    PuikSidebarItem,
    PuikSidebarTitle,
  },
  setup() {
    return { args }
  },
  template: `
<puik-sidebar :open-accordion="args.name" :mobile="args.mobile" v-model:expanded="args.expanded">
  <puik-sidebar-item title="Home" icon="home" />
  <puik-sidebar-item title="Dashboard" icon="trending_up" />
  <puik-sidebar-title>Section title</puik-sidebar-title>
  <puik-sidebar-group-item
    title="Orders"
    icon="shopping_basket"
    name="group-1"
    active
  >
    <puik-sidebar-item title="Title 1" active />
    <puik-sidebar-item title="Title 2" />
    <puik-sidebar-item title="Title 3" />
  </puik-sidebar-group-item>
  <puik-sidebar-group-item title="Catalog" icon="store" name="group-2">
    <puik-sidebar-item title="Title 1" />
    <puik-sidebar-item title="Title 2" />
    <puik-sidebar-item title="Title 3" />
  </puik-sidebar-group-item>
  <puik-sidebar-group-item title="Customers" icon="people" name="group-3">
    <puik-sidebar-item title="Title 1" />
    <puik-sidebar-item title="Title 2" />
    <puik-sidebar-item title="Title 3" />
  </puik-sidebar-group-item>
  <puik-sidebar-item title="Settings" icon="settings" />
  <puik-sidebar-item
    title="New modules added customization"
    icon="extension"
  />
</puik-sidebar>
  `,
})

export const Default = Template.bind({})
Default.args = {}
Default.parameters = {
  docs: {
    source: {
      code: `
<!--VueJS Snippet-->
<puik-sidebar :open-accordion="args.name" :mobile="args.mobile" v-model:expanded="args.expanded">
  <puik-sidebar-item title="Home" icon="home" />
  <puik-sidebar-item title="Dashboard" icon="trending_up" />
  <puik-sidebar-title>Section title</puik-sidebar-title>
  <puik-sidebar-group-item
    title="Orders"
    icon="shopping_basket"
    name="group-1"
    active
  >
    <puik-sidebar-item title="Title 1" active />
    <puik-sidebar-item title="Title 2" />
    <puik-sidebar-item title="Title 3" />
  </puik-sidebar-group-item>
  <puik-sidebar-group-item title="Catalog" icon="store" name="group-2">
    <puik-sidebar-item title="Title 1" />
    <puik-sidebar-item title="Title 2" />
    <puik-sidebar-item title="Title 3" />
  </puik-sidebar-group-item>
  <puik-sidebar-group-item title="Customers" icon="people" name="group-3">
    <puik-sidebar-item title="Title 1" />
    <puik-sidebar-item title="Title 2" />
    <puik-sidebar-item title="Title 3" />
  </puik-sidebar-group-item>
  <puik-sidebar-item title="Settings" icon="settings" />
  <puik-sidebar-item
    title="New modules added customization"
    icon="extension"
  />
</puik-sidebar>

<!--HTML/CSS Snippet-->
<!--Closed Sidebar-->
<div class="puik-sidebar__container">
  <nav class="puik-sidebar puik-sidebar--collapsed">
    <div class="puik-sidebar__header">
      <button class="puik-button puik-button--text puik-button--md" aria-label="Expand navigation sidebar">
        <div class="puik-icon material-icons-round puik-button__left-icon" style="font-size: 1.25rem;">last_page</div>
      </button>
    </div>
    <div class="puik-accordion-group puik-accordion-group--contained puik-sidebar__content">
      <div class="puik-sidebar-item">
        <button class="puik-button puik-button--text puik-button--md puik-button--fluid puik-sidebar-item__button" aria-label="Home">
          <div class="puik-icon material-icons-round puik-button__left-icon" style="font-size: 1.25rem;">home</div>
        </button>
      </div>
      <div class="puik-sidebar-item">
        <button class="puik-button puik-button--text puik-button--md puik-button--fluid puik-sidebar-item__button" aria-label="Dashboard">
          <div class="puik-icon material-icons-round puik-button__left-icon" style="font-size: 1.25rem;">trending_up</div>
        </button>
      </div>
      <div class="puik-sidebar-group-item puik-sidebar-group-item--active">
        <div disabled="false" id="headlessui-menu-button-1" aria-haspopup="menu" aria-expanded="false" data-headlessui-state="" class="puik-sidebar-group-item__menu-button">
          <button class="puik-button puik-button--text puik-button--md puik-button--fluid puik-sidebar-group-item__collapsed-button">
            <div class="puik-icon material-icons-round" style="font-size: 1.25rem;">shopping_basket</div>
          
          </button>
        </div>
      </div>
      <div class="puik-sidebar-group-item">
        <div disabled="false" id="headlessui-menu-button-3" aria-haspopup="menu" aria-expanded="false" data-headlessui-state="" class="puik-sidebar-group-item__menu-button">
          <button class="puik-button puik-button--text puik-button--md puik-button--fluid puik-sidebar-group-item__collapsed-button">
            <div class="puik-icon material-icons-round" style="font-size: 1.25rem;">store</div>
          </button>
        </div>
      </div>
      <div class="puik-sidebar-group-item">
        <div disabled="false" id="headlessui-menu-button-5" aria-haspopup="menu" aria-expanded="false" data-headlessui-state="" class="puik-sidebar-group-item__menu-button">
          <button class="puik-button puik-button--text puik-button--md puik-button--fluid puik-sidebar-group-item__collapsed-button">
            <div class="puik-icon material-icons-round" style="font-size: 1.25rem;">people</div>
          </button>
        </div>
      </div>
      <div class="puik-sidebar-item">
        <button class="puik-button puik-button--text puik-button--md puik-button--fluid puik-sidebar-item__button" aria-label="Settings">
          <div class="puik-icon material-icons-round puik-button__left-icon" style="font-size: 1.25rem;">settings</div>
        </button>
      </div>
      <div class="puik-sidebar-item">
        <button class="puik-button puik-button--text puik-button--md puik-button--fluid puik-sidebar-item__button" aria-label="New modules added customization">
          <div class="puik-icon material-icons-round puik-button__left-icon" style="font-size: 1.25rem;">extension</div>
        </button>
      </div>
    </div>
  </nav>
</div>

<!--Open Sidebar-->
<div class="puik-sidebar__container">
  <nav class="puik-sidebar">
    <div class="puik-sidebar__header">
      <button class="puik-button puik-button--text puik-button--md" aria-label="Collapse navigation sidebar">
        <div class="puik-icon material-icons-round puik-button__left-icon" style="font-size: 1.25rem;">first_page</div>
      </button>
    </div>
    <div class="puik-accordion-group puik-accordion-group--contained puik-sidebar__content">
      <div class="puik-sidebar-item">
        <button class="puik-button puik-button--text puik-button--md puik-button--fluid puik-sidebar-item__button" aria-label="Home">
          <div class="puik-icon material-icons-round puik-button__left-icon" style="font-size: 1.25rem;">home</div>
          <span>Home</span>
        </button>
      </div>
      <div class="puik-sidebar-item">
        <button class="puik-button puik-button--text puik-button--md puik-button--fluid puik-sidebar-item__button" aria-label="Dashboard">
          <div class="puik-icon material-icons-round puik-button__left-icon" style="font-size: 1.25rem;">trending_up</div>
          <span>Dashboard</span>
        </button>
      </div>
      <h3 class="puik-sidebar-title">Section title</h3>
      <div class="puik-sidebar-group-item puik-sidebar-group-item--active">
        <div class="puik-accordion">
          <button aria-expanded="false" aria-controls="puik-accordion-3183" class="puik-accordion__header">
            <div class="puik-icon material-icons-round puik-accordion__header__icon" style="font-size: 24px;">shopping_basket</div>
            <div class="puik-accordion__header__content">
              <div class="puik-accordion__header__content__title">Orders</div>
            </div>
            <div class="puik-icon material-icons-round puik-accordion__header__expand__icon" style="font-size: 24px;">keyboard_arrow_down</div>
          </button>
          <div id="puik-accordion-3183" class="puik-accordion__content" style="display: none;">
            <div class="puik-sidebar-item puik-sidebar-item--active">
              <button class="puik-button puik-button--text puik-button--md puik-button--fluid puik-sidebar-item__button" aria-label="Title 1">
                <span>Title 1</span>
              </button>
            </div>
            <div class="puik-sidebar-item">
              <button class="puik-button puik-button--text puik-button--md puik-button--fluid puik-sidebar-item__button" aria-label="Title 2">
                <span>Title 2</span>
              </button>
            </div>
            <div class="puik-sidebar-item">
              <button class="puik-button puik-button--text puik-button--md puik-button--fluid puik-sidebar-item__button" aria-label="Title 3">
                <span>Title 3</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="puik-sidebar-group-item">
        <div class="puik-accordion">
          <button aria-expanded="false" aria-controls="puik-accordion-8040" class="puik-accordion__header">
            <div class="puik-icon material-icons-round puik-accordion__header__icon" style="font-size: 24px;">store</div>
            <div class="puik-accordion__header__content">
              <div class="puik-accordion__header__content__title">Catalog</div>
            </div>
            <div class="puik-icon material-icons-round puik-accordion__header__expand__icon" style="font-size: 24px;">keyboard_arrow_down</div>
          </button>
          <div id="puik-accordion-8040" class="puik-accordion__content" style="display: none;">
            <div class="puik-sidebar-item">
              <button class="puik-button puik-button--text puik-button--md puik-button--fluid puik-sidebar-item__button" aria-label="Title 1">
                <span>Title 1</span>
              </button>
            </div>
            <div class="puik-sidebar-item">
              <button class="puik-button puik-button--text puik-button--md puik-button--fluid puik-sidebar-item__button" aria-label="Title 2">
                <span>Title 2</span>
              </button>
            </div>
            <div class="puik-sidebar-item">
              <button class="puik-button puik-button--text puik-button--md puik-button--fluid puik-sidebar-item__button" aria-label="Title 3">
                <span>Title 3</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="puik-sidebar-group-item">
        <div class="puik-accordion">
          <button aria-expanded="false" aria-controls="puik-accordion-3972" class="puik-accordion__header">
            <div class="puik-icon material-icons-round puik-accordion__header__icon" style="font-size: 24px;">people</div>
            <div class="puik-accordion__header__content">
              <div class="puik-accordion__header__content__title">Customers</div>
            </div>
            <div class="puik-icon material-icons-round puik-accordion__header__expand__icon" style="font-size: 24px;">keyboard_arrow_down</div>
          </button>
          <div id="puik-accordion-3972" class="puik-accordion__content" style="display: none;">
            <div class="puik-sidebar-item">
              <button class="puik-button puik-button--text puik-button--md puik-button--fluid puik-sidebar-item__button" aria-label="Title 1">
                <span>Title 1</span>
              </button>
            </div>
            <div class="puik-sidebar-item">
              <button class="puik-button puik-button--text puik-button--md puik-button--fluid puik-sidebar-item__button" aria-label="Title 2">
                <span>Title 2</span>
              </button>
            </div>
            <div class="puik-sidebar-item">
              <button class="puik-button puik-button--text puik-button--md puik-button--fluid puik-sidebar-item__button" aria-label="Title 3">
                <span>Title 3</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="puik-sidebar-item">
        <button class="puik-button puik-button--text puik-button--md puik-button--fluid puik-sidebar-item__button" aria-label="Settings">
          <div class="puik-icon material-icons-round puik-button__left-icon" style="font-size: 1.25rem;">settings</div>
          <span>Settings</span>
        </button>
      </div>
      <div class="puik-sidebar-item">
        <button class="puik-button puik-button--text puik-button--md puik-button--fluid puik-sidebar-item__button" aria-label="New modules added customization">
          <div class="puik-icon material-icons-round puik-button__left-icon" style="font-size: 1.25rem;">extension</div>
          <span>New modules added customization</span>
        </button>
      </div>
    </div>
  </nav>
</div>
`,
      language: 'html',
    },
  },
}

const MobileTemplate = (args: Args) => ({
  components: {
    PuikSidebar,
    PuikSidebarGroupItem,
    PuikSidebarItem,
    PuikSidebarTitle,
    PuikButton,
  },
  setup() {
    return { args }
  },
  data() {
    return {
      expanded: false,
    }
  },
  template: `
<puik-sidebar mobile v-model:expanded="expanded" style="position: fixed; height: 100vh;">
  <puik-sidebar-item title="Home" icon="home" />
  <puik-sidebar-item title="Dashboard" icon="trending_up" />
  <puik-sidebar-title>Section title</puik-sidebar-title>
  <puik-sidebar-group-item
    title="Orders"
    icon="shopping_basket"
    name="group-1"
    active
  >
    <puik-sidebar-item title="Title 1" active />
    <puik-sidebar-item title="Title 2" />
    <puik-sidebar-item title="Title 3" />
  </puik-sidebar-group-item>
  <puik-sidebar-group-item title="Catalog" icon="store" name="group-2">
    <puik-sidebar-item title="Title 1" />
    <puik-sidebar-item title="Title 2" />
    <puik-sidebar-item title="Title 3" />
  </puik-sidebar-group-item>
  <puik-sidebar-group-item title="Customers" icon="people" name="group-3">
    <puik-sidebar-item title="Title 1" />
    <puik-sidebar-item title="Title 2" />
    <puik-sidebar-item title="Title 3" />
  </puik-sidebar-group-item>
  <puik-sidebar-item title="Settings" icon="settings" />
  <puik-sidebar-item
    title="New modules added customization"
    icon="extension"
  />
</puik-sidebar>
<puik-button @click="expanded = !expanded">
  Open/Close
</puik-button>
  `,
})

export const Mobile: Story = MobileTemplate.bind({})
Mobile.parameters = {
  docs: {
    source: {
      code: `
<puik-sidebar mobile v-model:expanded="expanded" style="position: fixed; height: 100vh;">
  <puik-sidebar-item title="Home" icon="home" />
  <puik-sidebar-item title="Dashboard" icon="trending_up" />
  <puik-sidebar-title>Section title</puik-sidebar-title>
  <puik-sidebar-group-item
    title="Orders"
    icon="shopping_basket"
    name="group-1"
    active
  >
    <puik-sidebar-item title="Title 1" active />
    <puik-sidebar-item title="Title 2" />
    <puik-sidebar-item title="Title 3" />
  </puik-sidebar-group-item>
  <puik-sidebar-group-item title="Catalog" icon="store" name="group-2">
    <puik-sidebar-item title="Title 1" />
    <puik-sidebar-item title="Title 2" />
    <puik-sidebar-item title="Title 3" />
  </puik-sidebar-group-item>
  <puik-sidebar-group-item title="Customers" icon="people" name="group-3">
    <puik-sidebar-item title="Title 1" />
    <puik-sidebar-item title="Title 2" />
    <puik-sidebar-item title="Title 3" />
  </puik-sidebar-group-item>
  <puik-sidebar-item title="Settings" icon="settings" />
  <puik-sidebar-item
    title="New modules added customization"
    icon="extension"
  />
</puik-sidebar>
<puik-button @click="expanded = !expanded">
  Open/Close
</puik-button>

<!--HTML/CSS Snippet-->
<div class="puik-sidebar__container" style="position: fixed; height: 100vh;">
  <nav class="puik-sidebar">
    <div class="puik-sidebar__header">
      <button class="puik-button puik-button--text puik-button--md" aria-label="Collapse navigation sidebar">
        <div class="puik-icon material-icons-round puik-button__left-icon" style="font-size: 1.25rem;">first_page</div>
      </button>
    </div>
    <div class="puik-accordion-group puik-accordion-group--contained puik-sidebar__content">
      <div class="puik-sidebar-item">
        <button class="puik-button puik-button--text puik-button--md puik-button--fluid puik-sidebar-item__button" aria-label="Home">
          <div class="puik-icon material-icons-round puik-button__left-icon" style="font-size: 1.25rem;">home</div>
          <span>Home</span>
        </button>
      </div>
      <div class="puik-sidebar-item">
        <button class="puik-button puik-button--text puik-button--md puik-button--fluid puik-sidebar-item__button" aria-label="Dashboard">
          <div class="puik-icon material-icons-round puik-button__left-icon" style="font-size: 1.25rem;">trending_up</div>
          <span>Dashboard</span>
        </button>
      </div>
      <h3 class="puik-sidebar-title">Section title</h3>
      <div class="puik-sidebar-group-item puik-sidebar-group-item--active">
        <div class="puik-accordion">
          <button aria-expanded="false" aria-controls="puik-accordion-3826" class="puik-accordion__header">
            <div class="puik-icon material-icons-round puik-accordion__header__icon" style="font-size: 24px;">shopping_basket</div>
            <div class="puik-accordion__header__content">
              <div class="puik-accordion__header__content__title">Orders</div>
            </div>
            <div class="puik-icon material-icons-round puik-accordion__header__expand__icon" style="font-size: 24px;">keyboard_arrow_down</div>
          </button>
          <div id="puik-accordion-3826" class="puik-accordion__content" style="display: none;">
            <div class="puik-sidebar-item puik-sidebar-item--active">
              <button class="puik-button puik-button--text puik-button--md puik-button--fluid puik-sidebar-item__button" aria-label="Title 1">
                <span>Title 1</span>
              </button>
            </div>
            <div class="puik-sidebar-item">
              <button class="puik-button puik-button--text puik-button--md puik-button--fluid puik-sidebar-item__button" aria-label="Title 2">
                <span>Title 2</span>
              </button>
            </div>
            <div class="puik-sidebar-item">
              <button class="puik-button puik-button--text puik-button--md puik-button--fluid puik-sidebar-item__button" aria-label="Title 3">
                <span>Title 3</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="puik-sidebar-group-item">
        <div class="puik-accordion">
          <button aria-expanded="false" aria-controls="puik-accordion-1981" class="puik-accordion__header">
            <div class="puik-icon material-icons-round puik-accordion__header__icon" style="font-size: 24px;">store</div>
            <div class="puik-accordion__header__content">
              <div class="puik-accordion__header__content__title">Catalog</div>
            </div>
            <div class="puik-icon material-icons-round puik-accordion__header__expand__icon" style="font-size: 24px;">keyboard_arrow_down</div>
          </button>
          <div id="puik-accordion-1981" class="puik-accordion__content" style="display: none;">
            <div class="puik-sidebar-item">
              <button class="puik-button puik-button--text puik-button--md puik-button--fluid puik-sidebar-item__button" aria-label="Title 1">
                <span>Title 1</span>
              </button>
            </div>
            <div class="puik-sidebar-item">
              <button class="puik-button puik-button--text puik-button--md puik-button--fluid puik-sidebar-item__button" aria-label="Title 2">
                <span>Title 2</span>
              </button>
            </div>
            <div class="puik-sidebar-item">
              <button class="puik-button puik-button--text puik-button--md puik-button--fluid puik-sidebar-item__button" aria-label="Title 3">
                <span>Title 3</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="puik-sidebar-group-item">
        <div class="puik-accordion">
          <button aria-expanded="false" aria-controls="puik-accordion-2262" class="puik-accordion__header">
            <div class="puik-icon material-icons-round puik-accordion__header__icon" style="font-size: 24px;">people</div>
            <div class="puik-accordion__header__content">
              <div class="puik-accordion__header__content__title">Customers</div>
            </div>
            <div class="puik-icon material-icons-round puik-accordion__header__expand__icon" style="font-size: 24px;">keyboard_arrow_down</div>
          </button>
          <div id="puik-accordion-2262" class="puik-accordion__content" style="display: none;">
            <div class="puik-sidebar-item">
              <button class="puik-button puik-button--text puik-button--md puik-button--fluid puik-sidebar-item__button" aria-label="Title 1">
                <span>Title 1</span>
              </button>
            </div>
            <div class="puik-sidebar-item">
              <button class="puik-button puik-button--text puik-button--md puik-button--fluid puik-sidebar-item__button" aria-label="Title 2">
                <span>Title 2</span>
              </button>
            </div>
            <div class="puik-sidebar-item">
              <button class="puik-button puik-button--text puik-button--md puik-button--fluid puik-sidebar-item__button" aria-label="Title 3">
                <span>Title 3</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="puik-sidebar-item">
        <button class="puik-button puik-button--text puik-button--md puik-button--fluid puik-sidebar-item__button" aria-label="Settings">
          <div class="puik-icon material-icons-round puik-button__left-icon" style="font-size: 1.25rem;">settings</div>
          <span>Settings</span>
        </button>
      </div>
      <div class="puik-sidebar-item">
        <button class="puik-button puik-button--text puik-button--md puik-button--fluid puik-sidebar-item__button" aria-label="New modules added customization">
          <div class="puik-icon material-icons-round puik-button__left-icon" style="font-size: 1.25rem;">extension</div>
          <span>New modules added customization</span>
        </button>
      </div>
    </div>
  </nav>
  <div class="puik-sidebar__backdrop"></div>
</div>
<button class="puik-button puik-button--primary puik-button--md">
  Open/Close
</button>
`,
      language: 'html',
    },
  },
}
