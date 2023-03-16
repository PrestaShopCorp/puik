import PuikMenu from '../src/menu.vue'
import PuikMenuItem from '../src/menu-item.vue'
import PuikMenuItemGroup from '../src/menu-item-group.vue'
import PuikButton from '../../button/src/button.vue'
import type { Meta, Story, Args } from '@storybook/vue3'

export default {
  title: 'Components/Menu/Menu-item-group',
  component: PuikMenuItemGroup,
  argTypes: {
    title: {
      control: 'text',
      description: 'Title of group',
    },
    default: {
      control: 'none',
      description: 'Group content, must be menu-item',
    },
  },
} as Meta

const Template: Story = (args: Args) => ({
  args: {},
  components: {
    PuikButton,
    PuikMenu,
    PuikMenuItem,
    PuikMenuItemGroup,
  },
  setup() {
    return { args }
  },
  template: `<div class="w-full h-[300px] flex flex-row justify-center items-center">
    <puik-menu>
      <template #activator>
        <PuikButton>Show menu</PuikButton>
      </template>
      <puik-menu-item-group v-bind="args">
        <puik-menu-item>First item</puik-menu-item>
        <puik-menu-item>Second item</puik-menu-item>
        <puik-menu-item>Third item</puik-menu-item>
      </puik-menu-item-group>
    </puik-menu>
  </div>`,
})

export const Default = Template.bind({})
Default.args = {
  title: 'Group title',
}
Default.parameters = {
  docs: {
    source: {
      code: `
      <!--VueJS Snippet-->
      <puik-menu>
        <template #activator>
          <PuikButton>Show menu</PuikButton>
        </template>
        <puik-menu-item-group v-bind="args">
          <puik-menu-item>First item</puik-menu-item>
          <puik-menu-item>Second item</puik-menu-item>
          <puik-menu-item>Third item</puik-menu-item>
        </puik-menu-item-group>
      </puik-menu>

      <!--HTML/CSS Snippet-->
      <div class="puik-menu">
        <button class="puik-button puik-button--primary puik-button--md puik-menu__activator" id="button-id" aria-haspopup="menu" aria-expanded="true" type="button" aria-controls="menu-id">
          Show menu
        </button>
        <div id="menu-id" class="puik-menu__content puik-menu__content--visible puik-menu__content__position--bottom puik-menu__content__align--left" style="width: 300px; max-height: none;">
          <div class="puik-menu-item-group">
            <h4 class="puik-menu-item-group__title">Group title</h4>
            <div aria-labelledby="button-id" role="menu" class="puik-menu-item-group__items">
              <div class="puik-menu-item" role="menuitem">
                <button class="puik-button puik-button--text puik-button--md puik-button--fluid puik-menu-item__button">
                  First item
                </button>
              </div>
              <div class="puik-menu-item" role="menuitem">
                <button class="puik-button puik-button--text puik-button--md puik-button--fluid puik-menu-item__button">
                 Second item
                </button>
              </div>
              <div class="puik-menu-item" role="menuitem">
                <button class="puik-button puik-button--text puik-button--md puik-button--fluid puik-menu-item__button">
                  Third item
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      `,
      language: 'html',
    },
  },
}
