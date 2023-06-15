import { PuikSidebarGroupItem, PuikSidebarItem, PuikSidebarTitle } from '..'
import { PuikButton } from '../..'
import PuikSidebar from './../src/sidebar.vue'
import type { Meta, Story, Args } from '@storybook/vue3'

export default {
  title: 'Components/Sidebar',
  component: PuikSidebar,
  argTypes: {
    modelValue: {
      control: 'boolean',
      description: 'Set the expansion state',
      table: {
        defaultValue: {
          summary: false,
        },
      },
    },
    name: {
      control: 'text',
      description:
        'Name use by parent to open/close accordion (group-1 for example)',
    },
    temporary: {
      control: 'boolean',
      description:
        'Add a backdrop for dismiss and hide the sidebar when collapsed (mobile usage), expansion is triggered by the v-model',
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
<puik-sidebar :name="args.name" :temporary="args.temporary" v-model="args.modelValue">
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
<puik-sidebar :name="args.name" :temporary="args.temporary" v-model="args.modelValue">
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
<nav class="puik-sidebar">
  <div class="puik-sidebar__header">
    <button class="puik-button puik-button--text puik-button--md">
      <div class="puik-icon material-icons-round" style="font-size: 1.25rem;">first_page</div>
    </button>
  </div>
  <div class="puik-sidebar__content">
    <div class="puik-accordion-group puik-accordion-group--contained puik-sidebar-item">
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
          <button aria-expanded="false" aria-controls="puik-accordion-6213" class="puik-accordion__header">
            <div class="puik-icon material-icons-round puik-accordion__header__icon" style="font-size: 24px;">shopping_basket</div>
            <div class="puik-accordion__header__content">
              <div class="puik-accordion__header__content__title">Orders</div>
            </div>
            <div class="puik-icon material-icons-round puik-accordion__header__expand__icon" style="font-size: 24px;">keyboard_arrow_down</div>
          </button>
          <div id="puik-accordion-6213" class="puik-accordion__content" style="display: none;">
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
          <button aria-expanded="false" aria-controls="puik-accordion-8460" class="puik-accordion__header">
            <div class="puik-icon material-icons-round puik-accordion__header__icon" style="font-size: 24px;">store</div>
            <div class="puik-accordion__header__content">
              <div class="puik-accordion__header__content__title">Catalog</div>
            </div>
            <div class="puik-icon material-icons-round puik-accordion__header__expand__icon" style="font-size: 24px;">keyboard_arrow_down</div>
          </button>
          <div id="puik-accordion-8460" class="puik-accordion__content" style="display: none;">
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
          <button aria-expanded="false" aria-controls="puik-accordion-3212" class="puik-accordion__header">
            <div class="puik-icon material-icons-round puik-accordion__header__icon" style="font-size: 24px;">people</div>
            <div class="puik-accordion__header__content">
              <div class="puik-accordion__header__content__title">Customers</div>
            </div>
            <div class="puik-icon material-icons-round puik-accordion__header__expand__icon" style="font-size: 24px;">keyboard_arrow_down</div>
          </button>
          <div id="puik-accordion-3212" class="puik-accordion__content" style="display: none;">
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
  </div>
</nav>
      `,
      language: 'html',
    },
  },
}

const TemporaryTemplate = (args: Args) => ({
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
<puik-sidebar temporary v-model="expanded">
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

export const Temporary: Story = TemporaryTemplate.bind({})
Temporary.parameters = {
  docs: {
    source: {
      code: `
<puik-sidebar temporary v-model="expanded">
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
<div>
  <nav class="puik-sidebar">
    <div class="puik-sidebar__header">
      <button class="puik-button puik-button--text puik-button--md">
        <div class="puik-icon material-icons-round" style="font-size: 1.25rem;">first_page</div>
      </button>
    </div>
    <div class="puik-sidebar__content">
      <div class="puik-accordion-group puik-accordion-group--contained puik-sidebar-item">
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
            <button aria-expanded="false" aria-controls="puik-accordion-4378" class="puik-accordion__header">
              <div class="puik-icon material-icons-round puik-accordion__header__icon" style="font-size: 24px;">shopping_basket</div>
              <div class="puik-accordion__header__content">
                <div class="puik-accordion__header__content__title">Orders</div>
              </div>
              <div class="puik-icon material-icons-round puik-accordion__header__expand__icon" style="font-size: 24px;">keyboard_arrow_down</div>
            </button>
            <div id="puik-accordion-4378" class="puik-accordion__content" style="display: none;">
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
            <button aria-expanded="false" aria-controls="puik-accordion-1437" class="puik-accordion__header">
              <div class="puik-icon material-icons-round puik-accordion__header__icon" style="font-size: 24px;">store</div>
              <div class="puik-accordion__header__content">
                <div class="puik-accordion__header__content__title">Catalog</div>
              </div>
              <div class="puik-icon material-icons-round puik-accordion__header__expand__icon" style="font-size: 24px;">keyboard_arrow_down</div>
            </button>
            <div id="puik-accordion-1437" class="puik-accordion__content" style="display: none;">
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
            <button aria-expanded="false" aria-controls="puik-accordion-7651" class="puik-accordion__header">
              <div class="puik-icon material-icons-round puik-accordion__header__icon" style="font-size: 24px;">people</div>
              <div class="puik-accordion__header__content">
                <div class="puik-accordion__header__content__title">Customers</div>
              </div>
              <div class="puik-icon material-icons-round puik-accordion__header__expand__icon" style="font-size: 24px;">keyboard_arrow_down</div>
            </button>
            <div id="puik-accordion-7651" class="puik-accordion__content" style="display: none;">
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
    </div>
  </nav>
  <div class="puik-sidebar__backdrop"></div>
</div>
<button class="puik-button puik-button--primary puik-button--md">
  Open/Close
</button>
        `,
    },
  },
}
