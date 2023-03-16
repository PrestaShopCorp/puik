import PuikMenu from '../src/menu.vue'
import PuikMenuItem from '../src/menu-item.vue'
import PuikButton from '../../button/src/button.vue'
import PuikMenuItemSeparator from '../src/menu-item-separator.vue'
import type { Meta, Story } from '@storybook/vue3'

export default {
  title: 'Components/Menu/Menu-item-separator',
  component: PuikMenuItemSeparator,
  argTypes: {},
} as Meta

const Template: Story = () => ({
  args: {},
  components: {
    PuikButton,
    PuikMenu,
    PuikMenuItem,
    PuikMenuItemSeparator,
  },
  template: `<div class="w-full h-[300px] flex flex-row justify-center items-center">
    <puik-menu>
      <template #activator>
        <PuikButton>Show menu</PuikButton>
      </template>
      <puik-menu-item>First item</puik-menu-item>
      <puik-menu-item-separator></puik-menu-item-separator>
      <puik-menu-item>Second item</puik-menu-item>
      <puik-menu-item-separator></puik-menu-item-separator>
      <puik-menu-item>Third item</puik-menu-item>
    </puik-menu>
  </div>`,
})

export const Default = Template.bind({})
Default.args = {}
Default.parameters = {
  docs: {
    source: {
      code: `
      <!--VueJS Snippet-->
      <puik-menu>
        <template #activator>
          <PuikButton>Show menu</PuikButton>
        </template>
        <puik-menu-item>First item</puik-menu-item>
        <puik-menu-item-separator></puik-menu-item-separator>
        <puik-menu-item>Second item</puik-menu-item>
        <puik-menu-item-separator></puik-menu-item-separator>
        <puik-menu-item>Third item</puik-menu-item>
      </puik-menu>

      <!--HTML/CSS Snippet-->
      <div class="puik-menu">
        <button class="puik-button puik-button--primary puik-button--md puik-menu__activator" aria-haspopup="menu" aria-expanded="true" type="button">
          Show menu
        </button>
        <div class="puik-menu__content puik-menu__content--visible puik-menu__content__position--bottom puik-menu__content__align--left" style="width: 300px; max-height: none;">
          <div class="puik-menu-item" role="menuitem">
            <button class="puik-button puik-button--text puik-button--md puik-button--fluid puik-menu-item__button">
              First item
            </button>
          </div>
          <hr class="puik-menu-item-separator">
          <div class="puik-menu-item" role="menuitem">
            <button class="puik-button puik-button--text puik-button--md puik-button--fluid puik-menu-item__button">
              Second item
            </button>
          </div>
          <hr class="puik-menu-item-separator">
          <div class="puik-menu-item" role="menuitem">
            <button class="puik-button puik-button--text puik-button--md puik-button--fluid puik-menu-item__button">
              Third item
            </button>
          </div>
        </div>
      </div>
      `,
      language: 'html',
    },
  },
}
