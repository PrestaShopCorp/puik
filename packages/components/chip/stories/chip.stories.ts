import { ref } from 'vue'
import { PuikIcon, PuikButton, tooltipPositions } from '@puik/components'
import { chipSizeVariants } from '../src/chip'
import PuikChip from './../src/chip.vue'
import type { Meta, StoryFn, Args } from '@storybook/vue3'

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
    icon: '',
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
        icon: 'home',
        disabled: true,
        content: "can't close disabled",
      },
      {
        icon: 'home',
        disabled: false,
        content: 'close me !',
      },
      {
        icon: 'home',
        disabled: false,
        content: 'close me !',
      },
      {
        icon: 'home',
        disabled: false,
        content: 'close me !',
      },
      {
        icon: 'home',
        disabled: false,
        content: 'close me !',
      },
      {
        icon: 'home',
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
      :icon="chip.icon"
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

const SizeVariantsTemplate: StoryFn = (args: Args) => ({
  components: {
    PuikIcon,
    PuikChip,
  },
  setup() {
    return { args }
  },
  template: `
  <div style="display: flex; align-items: center; gap: 8px;">
    <puik-chip
      id="puik-chip-default"
      content="default size"
      size="default"
    />
    <puik-chip
      id="puik-chip-small"
      content="small size"
      size="small"
    />
  </div>
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
  :icon="args.icon"
  :disabled="args.disabled"
  :tooltipPosition="args.tooltipPosition"
  @close="handleCloseChip()"
/>
</div>

<!--HTML/CSS Snippet-->
<div id="puik-chip-id" class="puik-chip puik-chip--default">
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
    :icon="chip.icon"
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
<div id="puik-chip-id" class="puik-chip puik-chip--{$size}">
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
<div id="puik-chip-default" class="puik-chip puik-chip--default puik-chip--disabled">
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
<div id="puik-chip-default" class="puik-chip puik-chip--default">
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
