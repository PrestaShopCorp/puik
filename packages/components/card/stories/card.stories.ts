import PrestaShopSloganBg from '../../../../docs/assets/img/prestashop-slogan-bg.jpg'
import { cardVariants } from '../src/card'
import PuikCard from './../src/card.vue'
import PuikButton from './../../button/src/button.vue'
import type { Meta, Story, Args } from '@storybook/vue3'

const cardVariantsJoined = Object.values(cardVariants).join('|')

export default {
  title: 'Components/Card',
  component: PuikCard,
  argTypes: {
    variant: {
      description: 'Set the card variant',
      table: {
        defaultValue: {
          summary: 'default',
        },
        type: {
          summary: cardVariantsJoined,
        },
      },
    },
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
    <puik-card v-bind="args">
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
<!--
$variants: ${cardVariantsJoined}
-->
<puik-card variant="$variants">
  Card content
</puik-card>
<!--HTML/CSS Snippet-->
<!--
$variants: ${cardVariantsJoined}
-->
<div class="puik-card">
  Card content
</div>
      `,
      language: 'html',
    },
  },
}

export const Highlight = Template.bind({})
Highlight.args = {
  variant: 'highlight',
}
Highlight.parameters = {
  docs: {
    source: {
      code: `
<!--VueJS Snippet-->
<!--
$variants: ${cardVariantsJoined}
-->
<puik-card variant="highlight">
  Card content
</puik-card>
<!--HTML/CSS Snippet-->
<!--
$variants: ${cardVariantsJoined}
-->
<div class="puik-card puik-card--highlight">
  Card content
</div>
      `,
      language: 'html',
    },
  },
}

export const Blue = Template.bind({})
Blue.args = {
  variant: 'blue',
}
Blue.parameters = {
  docs: {
    source: {
      code: `
<!--VueJS Snippet-->
<!--
$variants: ${cardVariantsJoined}
-->
<puik-card variant="blue">
  Card content
</puik-card>
<!--HTML/CSS Snippet-->
<!--
$variants: ${cardVariantsJoined}
-->
<div class="puik-card puik-card--blue">
  Card content
</div>
      `,
      language: 'html',
    },
  },
}

export const Purple = Template.bind({})
Purple.args = {
  variant: 'purple',
}
Purple.parameters = {
  docs: {
    source: {
      code: `
<!--VueJS Snippet-->
<!--
$variants: ${cardVariantsJoined}
-->
<puik-card variant="purple">
  Card content
</puik-card>
<!--HTML/CSS Snippet-->
<!--
$variants: ${cardVariantsJoined}
-->
<div class="puik-card puik-card--purple">
  Card content
</div>
      `,
      language: 'html',
    },
  },
}

export const Amber = Template.bind({})
Amber.args = {
  variant: 'amber',
}
Amber.parameters = {
  docs: {
    source: {
      code: `
<!--VueJS Snippet-->
<!--
$variants: ${cardVariantsJoined}
-->
<puik-card variant="amber">
  Card content
</puik-card>
<!--HTML/CSS Snippet-->
<!--
$variants: ${cardVariantsJoined}
-->
<div class="puik-card puik-card--amber">
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
    <img class="rounded-lg" :src="PrestaShopSloganBg" />
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
