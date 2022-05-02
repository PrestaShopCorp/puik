import Tooltip from './../src/tooltip.vue'
import { tooltipPosition } from './../src/tooltip'
import type { Meta, Story, Args } from '@storybook/vue3'

export default {
  title: 'Components/Tooltip',
  component: Tooltip,
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
    Tooltip,
  },
  setup() {
    return { args }
  },
  template: `
    <div style="display: flex; align-items: center; justify-content: center; height: 320px;">
      <tooltip :position="args.position">
        <template #title>{{ args.title }}</template>
        <template #description>{{ args.description }}</template>
      </tooltip>
    </div>`,
})

export const Default = Template.bind({})
Default.args = {}

export const Bottom = () => ({
  components: {
    Tooltip,
  },
  template: `
    <div style="display: flex; align-items: center; justify-content: center; height: 320px;">
      <tooltip position="bottom">
        <template #title>Title</template>
        <template #description>This is a bottom tooltip</template>
      </tooltip>
    </div>`,
})

export const Left = () => ({
  components: {
    Tooltip,
  },
  template: `
    <div style="display: flex; align-items: center; justify-content: center; height: 320px;">
      <tooltip position="left">
        <template #title>Title</template>
        <template #description>This is a left tooltip</template>
      </tooltip>
    </div>`,
})

export const Right = () => ({
  components: {
    Tooltip,
  },
  template: `
    <div style="display: flex; align-items: center; justify-content: center; height: 320px;">
      <tooltip position="right">
        <template #title>Title</template>
        <template #description>This is a right tooltip</template>
      </tooltip>
    </div>`,
})

export const Positions = (args: Args) => ({
  components: {
    Tooltip,
  },
  setup() {
    return { args }
  },
  template: `
    <div style="display: flex; align-items: center; justify-content: center; height: 100vh;">
      <tooltip position="top">
        <template #title>Title</template>
        <template #description>This is a top tooltip</template>
      </tooltip>
      <tooltip position="bottom">
        <template #title>Title</template>
        <template #description>This is a bottom tooltip</template>
      </tooltip>
      <tooltip position="left">
        <template #title>Title</template>
        <template #description>This is a left tooltip</template>
      </tooltip>
      <tooltip position="right">
        <template #title>Title</template>
        <template #description>This is a right tooltip</template>
      </tooltip>
    </div>`,
})
