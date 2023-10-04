import { ref } from 'vue'
import { PuikIcon, PuikButton, tooltipPositions } from '@puik/components'
import { chipColorsVariants, chipSizeVariants } from '../src/chip'
import PuikChip from './../src/chip.vue'
import type { Meta, StoryFn, Args } from '@storybook/vue3'

const chipColorsVariantsSummary = chipColorsVariants.join('|')
const chipSizeVariantsSummary = chipSizeVariants.join('|')
const tooltipPositionsSummary = tooltipPositions.join('|')

export default {
  title: 'Components/Chip',
  component: PuikChip,
  argTypes: {
    id: {
      description:
        "Prop which will correspond to the component's html id attribute. NB: must not start with a number",
      control: 'text',
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: {
          summary: 'undefined',
        },
      },
    },
    content: {
      description:
        'The text content (NB: if its length is equal to or greater than 30 characters it will be truncated and will be displayed entirely on hover in a tooltip)',
      control: 'text',
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: {
          summary: 'undefined',
        },
      },
    },
    size: {
      description: 'Size variants of chip component (default, small)',
      control: 'select',
      options: chipSizeVariants,
      table: {
        type: {
          summary: chipSizeVariantsSummary,
        },
        defaultValue: {
          summary: 'default',
        },
      },
    },
    variant: {
      description:
        'Color variants of chip component (neutral by default, blue, yellow, green, purple)',
      control: 'select',
      options: chipColorsVariants,
      table: {
        type: {
          summary: chipColorsVariantsSummary,
        },
        defaultValue: {
          summary: 'neutral',
        },
      },
    },
    icon: {
      description: 'Material icon name',
      control: 'text',
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: {
          summary: 'none',
        },
      },
    },
    tooltipPosition: {
      description:
        'Position of the tooltip (NB: a tooltip appears if the content length is equal to or greater than 30 characters).',
      control: 'select',
      options: tooltipPositions,
      table: {
        type: {
          summary: tooltipPositionsSummary,
        },
        defaultValue: {
          summary: 'bottom',
        },
      },
    },
    closeable: {
      description:
        'Add closeable feature for the chip component (close icon which trigger a close event to parent component)',
      control: 'boolean',
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: {
          summary: 'false',
        },
      },
    },
    disabled: {
      description: 'Disables the Chip component ',
      control: 'boolean',
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: {
          summary: 'false',
        },
      },
    },
  },
  args: {
    id: 'puik-chip-id',
    content: 'default chip',
    size: 'default',
    variant: 'neutral',
    icon: '',
    closeable: false,
    disabled: false,
    tooltipPosition: 'bottom',
  },
} as Meta

const DefaultTemplate: StoryFn = (args: Args) => ({
  components: {
    PuikIcon,
    PuikChip,
  },
  setup() {
    return { args }
  },
  template: `<puik-chip  v-bind="args"/>`,
})

const HandleCloseEventTemplate: StoryFn = (args: Args) => ({
  components: {
    PuikIcon,
    PuikChip,
    PuikButton,
  },
  setup() {
    const chips = ref([
      {
        variant: 'neutral',
        icon: 'home',
        closeable: true,
        disabled: true,
        content: "can't close disabled",
      },
      {
        variant: 'neutral',
        icon: 'home',
        closeable: true,
        disabled: false,
        content: 'close me !',
      },
      {
        variant: 'blue',
        icon: 'home',
        closeable: true,
        disabled: false,
        content: 'close me !',
      },
      {
        variant: 'yellow',
        icon: 'home',
        closeable: true,
        disabled: false,
        content: 'close me !',
      },
      {
        variant: 'green',
        icon: 'home',
        closeable: true,
        disabled: false,
        content: 'close me !',
      },
      {
        variant: 'purple',
        icon: 'home',
        closeable: true,
        disabled: false,
        content: 'close me !',
      },
    ])

    const copyInitialChips = [...chips.value]
    const handleCloseChip = (index: number) => {
      chips.value.splice(index, 1)
    }
    const refreshChips = () => {
      chips.value = []
      copyInitialChips.map((chip) => {
        chips.value.push(chip)
      })
    }
    return { chips, args, handleCloseChip, refreshChips }
  },
  template: `
  <div class="flex space-x-2 mb-4">
    <puik-chip
      v-for="(chip, index) in chips"
      :id="'puik-chip-'+index"
      :key="index"
      :content="chip.content"
      :variant="chip.variant"
      :icon="chip.icon"
      :closeable="true"
      :disabled="chip.disabled"
      @close="handleCloseChip(index)"
    />
  </div>
  <puik-button @click="refreshChips">
    <puik-icon icon="refresh"></puik-icon>
    Refresh
  </puik-button>
`,
})

const ColorVariantsTemplate: StoryFn = (args: Args) => ({
  components: {
    PuikIcon,
    PuikChip,
  },
  setup() {
    const chips = ref([
      {
        variant: 'neutral',
        content: 'neutral chip',
      },
      {
        variant: 'blue',
        content: 'blue chip',
      },
      {
        variant: 'yellow',
        content: 'yellow chip',
      },
      {
        variant: 'green',
        content: 'green chip',
      },
      {
        variant: 'purple',
        content: 'purple chip',
      },
    ])

    return { chips, args }
  },
  template: `
  <div class="flex space-x-2 mb-4">
    <puik-chip
      v-for="(chip, index) in chips"
      :id="'puik-chip-'+index"
      :key="index"
      :content="chip.content"
      :variant="chip.variant"
    />
  </div>
`,
})

const SizeVariantsTemplate: StoryFn = (args: Args) => ({
  components: {
    PuikIcon,
    PuikChip,
  },
  setup() {
    return { args }
  },
  template: `
    <puik-chip
      style="display: inline-block; margin-right: 8px;"
      id="puik-chip-default"
      content="default size"
      size="default"
    />
    <puik-chip
      style="display: inline-block"
      id="puik-chip-small"
      content="small size"
      size="small"
    />
`,
})

const CloseableTemplate: StoryFn = (args: Args) => ({
  components: {
    PuikIcon,
    PuikChip,
  },
  setup() {
    return { args }
  },
  template: `
    <puik-chip
      id="puik-chip-default"
      content="closeable chip"
      :closeable="true"
    />
`,
})

const DisabledTemplate: StoryFn = (args: Args) => ({
  components: {
    PuikIcon,
    PuikChip,
  },
  setup() {
    return { args }
  },
  template: `
    <puik-chip
      id="puik-chip-default"
      content="disabled chip"
      :disabled="true"
    />
`,
})

const WithIconTemplate: StoryFn = (args: Args) => ({
  components: {
    PuikIcon,
    PuikChip,
  },
  setup() {
    return { args }
  },
  template: `
    <puik-chip
      id="puik-chip-default"
      content="with icon chip"
      icon="favorite"
    />
`,
})

const WithLongTextTemplate: StoryFn = (args: Args) => ({
  components: {
    PuikIcon,
    PuikChip,
  },
  setup() {
    return { args }
  },
  template: `
    <puik-chip
      id="puik-chip-default"
      content="very long text content very long text content"
      :tooltip-position="bottom"
    />
`,
})

export const Default = {
  render: DefaultTemplate,
  args: {},
  parameters: {
    docs: {
      source: {
        code: `
<!--VueJS Snippet-->
<puik-chip
  :id="args.id"
  :content="args.content"
  :size="args.size"
  :variant="args.variant"
  :icon="args.icon"
  :closeable="args.closeable"
  :disabled="args.disabled"
  :tooltipPosition="args.tooltipPosition"
  @close="handleCloseChip()"
/>
</div>

<!--HTML/CSS Snippet-->
<div id="puik-chip-id" class="puik-chip puik-chip--neutral puik-chip--default">
  <div class="puik-chip__content">
    default chip
  </div>
</div>
`,
        language: 'html',
      },
    },
  },
}

export const HandleCloseEvent = {
  render: HandleCloseEventTemplate,
  args: {},
  parameters: {
    docs: {
      source: {
        code: `
<!--VueJS Snippet-->
<div class="flex space-x-2 mb-4">
  <puik-chip
    v-for="(chip, index) in chips"
    :id="'puik-chip-'+index"
    :key="index"
    :content="chip.content"
    :variant="chip.variant"
    :icon="chip.icon"
    :closeable="true"
    :disabled="chip.disabled"
    @close="handleCloseChip(index)"
  />
</div>

<!-- Example of function for handling the closed event in a parent component -->
const handleCloseChip = (index: number) => {
  // Do stuff before closing
  // Then
  chips.value.splice(index, 1)
}
`,
        language: 'html',
      },
    },
  },
}

export const ColorVariants = {
  render: ColorVariantsTemplate,
  args: {},
  parameters: {
    docs: {
      source: {
        code: `
<!--VueJS Snippet-->
<!-- $variants: ${chipColorsVariantsSummary} -->
<puik-chip
  :id="args.id"
  :content="args.content"
  :variant="{$variant}"
/>
</div>

<!--HTML/CSS Snippet-->
<!-- $variants: ${chipColorsVariantsSummary} -->
<div id="puik-chip-id" class="puik-chip puik-chip--{$variant} puik-chip--default">
  <div class="puik-chip__content">
    {$variant} chip
  </div>
</div>
`,
        language: 'html',
      },
    },
  },
}

export const SizeVariants = {
  render: SizeVariantsTemplate,
  args: {},
  parameters: {
    docs: {
      source: {
        code: `
<!--VueJS Snippet-->
<!-- $sizes: ${chipSizeVariantsSummary} -->
<puik-chip
  :id="args.id"
  :content="args.content"
  :size="{$size}"
/>
</div>

<!--HTML/CSS Snippet-->
<!-- $sizes: ${chipSizeVariantsSummary} -->
<div id="puik-chip-id" class="puik-chip puik-chip--neutral puik-chip--{$size}">
  <div class="puik-chip__content">
    {$size} chip
  </div>
</div>
`,
        language: 'html',
      },
    },
  },
}

export const Closeable = {
  render: CloseableTemplate,
  args: {},
  parameters: {
    docs: {
      source: {
        code: `
<!--VueJS Snippet-->
<!-- $closeable: true | false -->
<puik-chip
  :id="args.id"
  :content="args.content"
  :closeable="{$closeable}"
/>
</div>

<!--HTML/CSS Snippet-->
<!-- $closeable: true | false -->
<div id="puik-chip-default" class="puik-chip puik-chip--neutral puik-chip--default">
  <div class="puik-chip__content">
    closeable chip
  </div>
  <div class="puik-icon material-icons-round puik-chip__close" style="font-size: 1rem;">close</div>
</div>
`,
        language: 'html',
      },
    },
  },
}

export const Disabled = {
  render: DisabledTemplate,
  args: {},
  parameters: {
    docs: {
      source: {
        code: `
<!--VueJS Snippet-->
<puik-chip
  :id="args.id"
  :content="args.content"
  :disabled="true"
/>
</div>

<!--HTML/CSS Snippet-->
<div id="puik-chip-default" class="puik-chip puik-chip--neutral puik-chip--default puik-chip--disabled">
  <div class="puik-chip__content">
    disabled chip
  </div>
</div>
`,
        language: 'html',
      },
    },
  },
}

export const WithIcon = {
  render: WithIconTemplate,
  args: {},
  parameters: {
    docs: {
      source: {
        code: `
<!--VueJS Snippet-->
<puik-chip
  :id="args.id"
  :content="args.content"
  icon="favorite"
/>
</div>

<!--HTML/CSS Snippet-->
<div id="puik-chip-default" class="puik-chip puik-chip--neutral puik-chip--default">
  <div class="puik-icon material-icons-round puik-chip__icon" style="font-size: 1rem;">
    favorite
  </div>
  <div class="puik-chip__content">with icon chip</div>
</div>
`,
        language: 'html',
      },
    },
  },
}

export const WithLongText = {
  render: WithLongTextTemplate,
  args: {},
  parameters: {
    docs: {
      source: {
        code: `
<!--VueJS Snippet-->
<!--$tooltipPositions: ${tooltipPositionsSummary}-->
<puik-chip
  id="args.id"
  content="very long text content very long text content"
  :tooltip-position="{$tooltipPosition}"
/>
`,
        language: 'html',
      },
    },
  },
}
