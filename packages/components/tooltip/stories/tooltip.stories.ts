import { PuikButton } from '@puik/components/button'
import { PuikIcon } from '@puik/components/icon'
import PuikTooltip from './../src/tooltip.vue'
import { tooltipPositions } from './../src/tooltip'
import type { Meta, Story, Args } from '@storybook/vue3'

const tooltipPositionsSummary = tooltipPositions.join('|')

export default {
  title: 'Components/Tooltip',
  component: PuikTooltip,
  argTypes: {
    title: {
      description: 'Set the tooltip title (also available as a prop)',
      table: {
        defaultValue: {
          summary: 'undefined',
        },
      },
    },
    description: {
      description: 'Set the tooltip description (also available as a prop)',
      table: {
        defaultValue: {
          summary: 'undefined',
        },
      },
    },
    position: {
      control: 'select',
      description: 'Set the tooltip position',
      options: tooltipPositions,
      table: {
        defaultValue: {
          summary: 'top',
        },
        type: {
          summary: tooltipPositions,
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
      table: {
        defaultValue: {
          summary: 'undefined',
        },
      },
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
Default.parameters = {
  docs: {
    source: {
      code: `
<!--VueJS Snippet-->
<!--
$position: ${tooltipPositionsSummary}
-->
<puik-tooltip
  :position="$positions"
  :title="title"
  :description="description"
  :is-disabled="isDisabled"
  :max-width="maxWidth"
  :zindex="zindex"
  :disappearDelay="disappearDelay"
>
  <puik-icon font-size="1.25rem" icon="help_outline" />
  <template #title>{{ args.title }}</template>
  <template #description>{{ args.description }}</template>
</puik-tooltip>

<!--HTML/CSS Snippet-->
<div class="puik-tooltip" tabindex="0" aria-describedby="tooltip-id">
  <div class="puik-tooltip__wrapper">
    <div class="puik-icon material-icons-round" style="font-size: 1.25rem;">help_outline</div>
  </div>
  <div id="tooltip-id" class="puik-tooltip__tip" role="tooltip" style="z-index: 1000; position: absolute; inset: 0px 0px auto auto; margin: 0px; transform: translate(-589px, 146px); display: none;" data-popper-placement="left">
    <div class="puik-tooltip__tip__content">
      <span class="puik-tooltip__tip__content__title">Title</span>
      <span class="puik-tooltip__tip__content__description">This is a tooltip</span>
    </div>
    <div class="puik-tooltip__tip__arrow" style="position: absolute; top: 0px; transform: translate(0px, 22px);"></div>
  </div>
</div>
      `,
    },
  },
}

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
</div>
  `,
})
DisabledTooltip.parameters = {
  docs: {
    source: {
      code: `
<!--VueJS Snippet-->
<puik-tooltip :is-disabled="true" position="top">
  <puik-button>There is no tooltip</puik-button>
  <template #title>Title</template>
  <template #description>This tooltip is on a button</template>
</puik-tooltip>
      `,
    },
  },
}

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
UsingAComponent.parameters = {
  docs: {
    source: {
      code: `
<!--VueJS Snippet-->
<puik-tooltip :is-disabled="true" position="top">
  <puik-button>There is no tooltip</puik-button>
  <template #title>Title</template>
  <template #description>This tooltip is on a button</template>
</puik-tooltip>

<!--HTML/CSS Snippet-->
<div class="puik-tooltip" tabindex="0" aria-describedby="tooltip-id">
  <div class="puik-tooltip__wrapper">
    <button class="puik-button puik-button--primary puik-button--md">
      Button
    </button>
  </div>
  <div id="tooltip-id" class="puik-tooltip__tip" role="tooltip" style="z-index: 1000; position: absolute; inset: auto auto 0px 0px; margin: 0px; transform: translate(465px, -284px); display: none;" data-popper-placement="top">
    <div class="puik-tooltip__tip__content">
      <span class="puik-tooltip__tip__content__title">Title</span>
      <span class="puik-tooltip__tip__content__description">This tooltip is on a button</span>
    </div>
    <div class="puik-tooltip__tip__arrow" style="position: absolute; left: 0px; transform: translate(95px, 0px);"></div>
  </div>
</div>
      `,
    },
  },
}

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
Bottom.parameters = {
  docs: {
    source: {
      code: `
<!--VueJS Snippet-->
<puik-tooltip position="bottom">
  <puik-icon font-size="1.25rem" icon="help_outline" />
  <template #title>Title</template>
  <template #description>This is a bottom tooltip</template>
</puik-tooltip>

<!--HTML/CSS Snippet-->
<div class="puik-tooltip" tabindex="0" aria-describedby="tooltip-id">
  <div class="puik-tooltip__wrapper">
    <div class="puik-icon material-icons-round" style="font-size: 1.25rem;">help_outline</div>
  </div>
  <div id="tooltip-id" class="puik-tooltip__tip" role="tooltip" style="z-index: 1000; position: absolute; inset: 0px auto auto 0px; margin: 0px; transform: translate(474px, 201px); display: none;" data-popper-placement="bottom">
    <div class="puik-tooltip__tip__content">
      <span class="puik-tooltip__tip__content__title">Title</span>
      <span class="puik-tooltip__tip__content__description">This is a bottom tooltip</span>
    </div>
    <div class="puik-tooltip__tip__arrow" style="position: absolute; left: 0px; transform: translate(86px, 0px);"></div>
  </div>
</div>
      `,
    },
  },
}

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
Left.parameters = {
  docs: {
    source: {
      code: `
<!--VueJS Snippet-->
<puik-tooltip position="left">
  <puik-icon font-size="1.25rem" icon="help_outline" />
  <template #title>Title</template>
  <template #description>This is a bottom tooltip</template>
</puik-tooltip>

<!--HTML/CSS Snippet-->
<div class="puik-tooltip" tabindex="0" aria-describedby="tooltip-id">
  <div class="puik-tooltip__wrapper">
    <div class="puik-icon material-icons-round" style="font-size: 1.25rem;">help_outline</div>
  </div>
  <div id="tooltip-id" class="puik-tooltip__tip" role="tooltip" style="z-index: 1000; position: absolute; inset: 0px 0px auto auto; margin: 0px; transform: translate(-589px, 146px); display: none;" data-popper-placement="left">
    <div class="puik-tooltip__tip__content">
      <span class="puik-tooltip__tip__content__title">Title</span>
      <span class="puik-tooltip__tip__content__description">This is a left tooltip</span>
    </div>
    <div class="puik-tooltip__tip__arrow" style="position: absolute; top: 0px; transform: translate(0px, 22px);"></div>
  </div>
</div>
      `,
    },
  },
}

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
Right.parameters = {
  docs: {
    source: {
      code: `
<!--VueJS Snippet-->
<puik-tooltip position="right">
  <puik-icon font-size="1.25rem" icon="help_outline" />
  <template #title>Title</template>
  <template #description>This is a bottom tooltip</template>
</puik-tooltip>

<!--HTML/CSS Snippet-->
<div class="puik-tooltip" tabindex="0" aria-describedby="tooltip-id">
  <div class="puik-tooltip__wrapper">
    <div class="puik-icon material-icons-round" style="font-size: 1.25rem;">help_outline</div>
  </div>
  <div id="tooltip-id" class="puik-tooltip__tip" role="tooltip" style="z-index: 1000; position: absolute; inset: 0px auto auto 0px; margin: 0px; transform: translate(589px, 146px); display: none;" data-popper-placement="right">
    <div class="puik-tooltip__tip__content">
      <span class="puik-tooltip__tip__content__title">Title</span>
      <span class="puik-tooltip__tip__content__description">This is a right tooltip</span>
    </div>
    <div class="puik-tooltip__tip__arrow" style="position: absolute; top: 0px; transform: translate(0px, 22px);"></div>
  </div>
</div>
      `,
    },
  },
}

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
Positions.parameters = {
  docs: {
    source: {
      code: `
<!--VueJS Snippet-->
<puik-tooltip position="$positions">
  <puik-icon font-size="1.25rem" icon="help_outline" />
  <template #title>Title</template>
  <template #description>This is a bottom tooltip</template>
</puik-tooltip>

<!--HTML/CSS Snippet-->
<div class="puik-tooltip" tabindex="0" aria-describedby="tooltip-id">
  <div class="puik-tooltip__wrapper">
    <div class="puik-icon material-icons-round" style="font-size: 1.25rem;">help_outline</div>
  </div>
  <div id="tooltip-id" class="puik-tooltip__tip" role="tooltip" style="z-index: 1000; position: absolute; inset: 0px 0px auto auto; margin: 0px; transform: translate(-589px, 146px); display: none;" data-popper-placement="left">
    <div class="puik-tooltip__tip__content">
      <span class="puik-tooltip__tip__content__title">Title</span>
      <span class="puik-tooltip__tip__content__description">This is a tooltip</span>
    </div>
    <div class="puik-tooltip__tip__arrow" style="position: absolute; top: 0px; transform: translate(0px, 22px);"></div>
  </div>
</div>
      `,
    },
  },
}
