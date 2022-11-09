import { PuikButton } from '@puik/components/button'
import { PuikIcon } from '@puik/components/icon'
import PuikTooltip from './../src/tooltip.vue'
import { tooltipPosition } from './../src/tooltip'
import type { Meta, Story, Args } from '@storybook/vue3'

export default {
  title: 'Components/Tooltip',
  component: PuikTooltip,
  argTypes: {
    title: {
      description: 'Set the tooltip title (also available as a prop)',
    },
    description: {
      description: 'Set the tooltip description (also available as a prop)',
    },
    position: {
      control: 'select',
      description: 'Set the tooltip position',
      options: tooltipPosition,
    },
  },
  args: {
    title: 'Title',
    description: 'This is a tooltip',
    position: 'top',
  },
} as Meta

const Template: Story = (args: Args) => ({
  components: {
    PuikTooltip,
    PuikIcon,
  },
  setup() {
    return { args }
  },
  template: `
    <div style="display: flex; align-items: center; justify-content: center; height: 320px;">
      <puik-tooltip :position="args.position">
        <puik-icon icon="help_outline" />
        <template #title>{{ args.title }}</template>
        <template #description>{{ args.description }}</template>
      </puik-tooltip>
    </div>`,
})

export const Default = Template.bind({})
Default.args = {}

export const UsingAComponent = () => ({
  components: {
    PuikTooltip,
    PuikButton,
  },
  template: `
    <div style="display: flex; align-items: center; justify-content: center; height: 320px;">
      <puik-tooltip position="top">
        <puik-button>Button</puik-button>
        <template #title>Title</template>
        <template #description>This tooltip is on a button</template>
      </puik-tooltip>
    </div>`,
})

export const Bottom = () => ({
  components: {
    PuikTooltip,
    PuikIcon,
  },
  template: `
    <div style="display: flex; align-items: center; justify-content: center; height: 320px;">
      <puik-tooltip position="bottom">
        <puik-icon icon="help_outline" />
        <template #title>Title</template>
        <template #description>This is a bottom tooltip</template>
      </puik-tooltip>
    </div>`,
})

export const Left = () => ({
  components: {
    PuikTooltip,
    PuikIcon,
  },
  template: `
    <div style="display: flex; align-items: center; justify-content: center; height: 320px;">
      <puik-tooltip position="left">
        <puik-icon icon="help_outline" />
        <template #title>Title</template>
        <template #description>This is a left tooltip</template>
      </puik-tooltip>
    </div>`,
})

export const Right = () => ({
  components: {
    PuikTooltip,
    PuikIcon,
  },
  template: `
    <div style="display: flex; align-items: center; justify-content: center; height: 320px;">
      <puik-tooltip position="right">
        <puik-icon icon="help_outline" />
        <template #title>Title</template>
        <template #description>This is a right tooltip</template>
      </puik-tooltip>
    </div>`,
})

export const Positions = (args: Args) => ({
  components: {
    PuikTooltip,
    PuikIcon,
  },
  setup() {
    return { args }
  },
  template: `
    <div style="display: flex; align-items: center; justify-content: center; height: 100vh;">
      <puik-tooltip position="top">
        <puik-icon icon="help_outline" />
        <template #title>Title</template>
        <template #description>This is a top tooltip</template>
      </puik-tooltip>
      <puik-tooltip position="bottom">
        <puik-icon icon="help_outline" />
        <template #title>Title</template>
        <template #description>This is a bottom tooltip</template>
      </puik-tooltip>
      <puik-tooltip position="left">
        <puik-icon icon="help_outline" />
        <template #title>Title</template>
        <template #description>This is a left tooltip</template>
      </puik-tooltip>
      <puik-tooltip position="right">
        <puik-icon icon="help_outline" />
        <template #title>Title</template>
        <template #description>This is a right tooltip</template>
      </puik-tooltip>
    </div>`,
})
