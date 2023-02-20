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
      table: {
        defaultValue: {
          summary: 'top',
        },
      },
    },
    isDisabled: {
      control: 'boolean',
      description: 'Enable or disable the tooltip',
      table: {
        defaultValue: {
          summary: 'false',
        },
      },
    },
    maxWidth: {
      control: 'text',
      description: 'Set a max-width for the tooltip',
    },
    zindex: {
      control: 'number',
      description: 'Set the z-index level',
      table: {
        defaultValue: {
          summary: '1000',
        },
      },
    },
    disappearDelay: {
      control: 'number',
      description: 'Set the timer to make the tooltip disappear (in ms)',
      table: {
        defaultValue: {
          summary: '500',
        },
      },
    },
  },
  args: {
    title: 'Title',
    description: 'This is a tooltip',
    position: 'top',
    isActive: true,
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
    <div class="flex items-center justify-center h-[320px]">
      <puik-tooltip :position="args.position" :is-disabled="args.isDisabled" :max-width="args.maxWidth">
        <puik-icon font-size="1.25rem" icon="help_outline" />
        <template #title>{{ args.title }}</template>
        <template #description>{{ args.description }}</template>
      </puik-tooltip>
    </div>`,
})

export const Default = Template.bind({})
Default.args = {}

export const DisabledTooltip = () => ({
  components: {
    PuikTooltip,
    PuikButton,
  },
  template: `
    <div class="flex items-center justify-center h-[320px]">
      <puik-tooltip :is-disabled="true" position="top">
        <puik-button>There is no tooltip</puik-button>
        <template #title>Title</template>
        <template #description>This tooltip is on a button</template>
      </puik-tooltip>
    </div>`,
})

export const UsingAComponent = () => ({
  components: {
    PuikTooltip,
    PuikButton,
  },
  template: `
    <div class="flex items-center justify-center h-[320px]">
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
    <div class="flex items-center justify-center h-[320px]">
      <puik-tooltip position="bottom">
        <puik-icon font-size="1.25rem" icon="help_outline" />
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
    <div class="flex items-center justify-center h-[320px]">
      <puik-tooltip position="left">
        <puik-icon font-size="1.25rem" icon="help_outline" />
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
    <div class="flex items-center justify-center h-[320px]">
      <puik-tooltip position="right">
        <puik-icon font-size="1.25rem" icon="help_outline" />
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
    <div class="flex items-center justify-center h-screen">
      <puik-tooltip position="top">
        <puik-icon font-size="1.25rem" icon="help_outline" />
        <template #title>Title</template>
        <template #description>This is a top tooltip</template>
      </puik-tooltip>
      <puik-tooltip position="bottom">
        <puik-icon font-size="1.25rem" icon="help_outline" />
        <template #title>Title</template>
        <template #description>This is a bottom tooltip</template>
      </puik-tooltip>
      <puik-tooltip position="left">
        <puik-icon font-size="1.25rem" icon="help_outline" />
        <template #title>Title</template>
        <template #description>This is a left tooltip</template>
      </puik-tooltip>
      <puik-tooltip position="right">
        <puik-icon font-size="1.25rem" icon="help_outline" />
        <template #title>Title</template>
        <template #description>This is a right tooltip</template>
      </puik-tooltip>
    </div>`,
})
