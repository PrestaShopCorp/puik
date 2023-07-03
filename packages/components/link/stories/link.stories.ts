import PuikLink from './../src/link.vue'
import { linkSizes, targetVariants } from './../src/link'
import type { Meta, Story, Args } from '@storybook/vue3'

const targetVariantsSummary = targetVariants.join('|')
const linkSizesSummary = linkSizes.join('|')

export default {
  title: 'Components/Link',
  component: PuikLink,
  argTypes: {
    href: {
      control: 'text',
      description: 'Set a link (changes link to "a" html tag)',
    },
    to: {
      control: 'text',
      description:
        'Set a vue router link (changes link to "router-link" or html tag)',
    },
    target: {
      control: 'select',
      description:
        'Set the link target. If you set it to "_blank" the icon "open in new" is displayed',
      options: targetVariants,
      table: {
        defaultValue: {
          summary: '_self',
        },
        type: {
          summary: targetVariantsSummary,
        },
      },
    },
    size: {
      control: 'select',
      description: 'Set the link font size',
      options: linkSizes,
      table: {
        defaultValue: {
          summary: 'md',
        },
        type: {
          summary: linkSizesSummary,
        },
      },
    },
    default: {
      control: 'text',
      description: 'Label of the link',
    },
    title: {
      control: 'text',
      description: 'Title displayed in tooltips then your cursor stay in link',
    },
  },
  args: {
    href: '#',
    to: undefined,
    target: '_self',
    default: "I'm a cool link",
    title: "I'm a tooltip for your link",
    size: 'md',
  },
} as Meta

const Template: Story = (args: Args) => ({
  components: {
    PuikLink,
  },
  setup() {
    return { args }
  },
  template: `<puik-link v-bind="args">{{ args.default }}</puik-link>`,
})

export const Default = Template.bind({})
Default.args = {}
Default.parameters = {
  docs: {
    source: {
      code: `
<!--VueJS Snippet-->
<!--
$sizes: ${linkSizesSummary}
$targets: ${targetVariantsSummary}
-->
<puik-link size="$sizes" href="#" target="$targets" title="I'm a tooltip for your link">
  I'm a cool link
</puik-link>

<!--HTML/CSS Snippet-->
<!--
$sizes: ${linkSizesSummary}
$targets: ${targetVariantsSummary}
-->
<a class="puik-link puik-link--{$sizes}" href="#" target="$targets" title="I'm a tooltip for your link">
  I'm a cool link
</a>
      `,
      language: 'html',
    },
  },
}

export const Blank = Template.bind({})
Blank.args = {
  target: '_blank',
}
Blank.parameters = {
  docs: {
    source: {
      code: `
<!--VueJS Snippet-->
<puik-link href="#" target="_blank" title="I'm a tooltip for your link">
I'm a cool link
</puik-link>

<!--HTML/CSS Snippet-->
<a class="puik-link puik-link--md" href="#" target="_blank" title="I'm a tooltip for your link">
  I'm a cool link
</a>
      `,
      language: 'html',
    },
  },
}
