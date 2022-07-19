import PrestaShopSloganBg from '../../../../docs/assets/img/prestashop-slogan-bg.jpg'
import PuikCard from './../src/card.vue'
import PuikButton from './../../button/src/button.vue'
import type { Meta, Story, Args } from '@storybook/vue3'

export default {
  title: 'Components/Card',
  component: PuikCard,
  argTypes: {
    default: {
      control: 'text',
      description: 'Card content',
    },
  },
  args: {
    default: 'Card content',
  },
  decorators: [
    () => ({
      template: '<div class="w-96"><story/></div>',
    }),
  ],
} as Meta

const Template: Story = (args: Args) => ({
  components: {
    PuikCard,
  },
  setup() {
    return { args }
  },
  template: `
    <puik-card>
      <h3 class="puik-h3">Card title</h3>
      {{ args.default }}
    </puik-card>
  `,
})

export const Default = Template.bind({})
Default.args = {}
Default.parameters = {
  docs: {
    source: {
      code: `
<!--VueJS Snippet-->
<puik-card>
  Card content
</puik-card>
<!--HTML/CSS Snippet-->
<div class="puik-card">
  Card content
</div>
      `,
      language: 'html',
    },
  },
}

export const WithPictureTitleTextAndAction: Story = (args: Args) => ({
  components: {
    PuikButton,
    PuikCard,
  },
  setup() {
    return { args, PrestaShopSloganBg }
  },
  template: `
  <puik-card>
    <img :src="PrestaShopSloganBg" />
    <h3 class="puik-h3">Card title</h3>
    {{ args.default }}
    <div>
      <puik-button>Button</puik-button>
    </div>
  </puik-card>
  `,
})

WithPictureTitleTextAndAction.parameters = {
  docs: {
    source: {
      code: `
<!--VueJS Snippet-->
<puik-card>
  <img src="/assets/img/prestashop-slogan-bg.png" />
    <h3 class="puik-h3">Card title</h3>
    Card content
    <div>
      <puik-button>Button</puik-button>
    </div>
</puik-card>

<!--HTML/CSS Snippet-->
<div class="puik-card">
  <img src="/assets/img/prestashop-slogan-bg.png" />
    <h3 class="puik-h3">Card title</h3>
    Card description
    <div>
      <button class="puik-button">Button</-button>
    </div>
</div>
      `,
      language: 'html',
    },
  },
}
