import { ref } from 'vue';
import { PuikIcon, PuikTooltipPositions, PuikTagSizes, PuikTagVariants, PuikTag } from '@prestashopcorp/puik-components';
import type { Meta, StoryFn, Args } from '@storybook/vue3';

const tagColorsVariants = Object.values(PuikTagVariants);
const tagColorsVariantsSummary = tagColorsVariants.join('|');
const tagSizeVariants = Object.values(PuikTagSizes);
const tagSizeVariantsSummary = tagSizeVariants.join('|');
const tooltipPositions = Object.values(PuikTooltipPositions);
const tooltipPositionsSummary = tooltipPositions.join('|');

export default {
  title: 'Components/Tag',
  component: PuikTag,
  argTypes: {
    id: {
      description:
        "Prop which will correspond to the component's html id attribute. NB: must not start with a number",
      control: 'text',
      table: {
        type: {
          summary: 'string'
        },
        defaultValue: {
          summary: 'undefined'
        }
      }
    },
    content: {
      description:
        'The text content (NB: if its length is equal to or greater than 30 characters it will be truncated and will be displayed entirely on hover in a tooltip)',
      control: 'text',
      table: {
        type: {
          summary: 'string'
        },
        defaultValue: {
          summary: 'undefined'
        }
      }
    },
    size: {
      description: 'Size variants of tag component (default, small)',
      control: 'select',
      options: tagSizeVariants,
      table: {
        type: {
          summary: tagSizeVariantsSummary
        },
        defaultValue: {
          summary: 'default'
        }
      }
    },
    variant: {
      description:
        'Color variants of tag component (neutral by default, blue, yellow, green, purple)',
      control: 'select',
      options: tagColorsVariants,
      table: {
        type: {
          summary: tagColorsVariantsSummary
        },
        defaultValue: {
          summary: 'neutral'
        }
      }
    },
    icon: {
      description: 'Material icon name',
      control: 'text',
      table: {
        type: {
          summary: 'string'
        },
        defaultValue: {
          summary: 'none'
        }
      }
    },
    tooltipPosition: {
      description:
        'Position of the tooltip (NB: a tooltip appears if the content length is equal to or greater than 30 characters).',
      control: 'select',
      options: tooltipPositions,
      table: {
        type: {
          summary: tooltipPositionsSummary
        },
        defaultValue: {
          summary: 'bottom'
        }
      }
    },
    disabled: {
      description: 'Disables the Tag component ',
      control: 'boolean',
      table: {
        type: {
          summary: 'boolean'
        },
        defaultValue: {
          summary: 'false'
        }
      }
    },
    dataTest: {
      description:
        'Sets the data-test attribute `content-${dataTest}` `tooltip-${dataTest}`',
      control: 'text'
    }
  },
  args: {
    id: 'puik-tag-id',
    content: 'default tag',
    size: 'default',
    variant: 'neutral',
    icon: '',
    disabled: false,
    tooltipPosition: 'bottom'
  }
} as Meta;

const DefaultTemplate: StoryFn = (args: Args) => ({
  components: {
    PuikIcon,
    PuikTag
  },
  setup() {
    return { args };
  },
  template: '<puik-tag  v-bind="args"/>'
});

const ColorVariantsTemplate: StoryFn = (args: Args) => ({
  components: {
    PuikIcon,
    PuikTag
  },
  setup() {
    const tags = ref([
      {
        variant: 'neutral',
        content: 'neutral tag'
      },
      {
        variant: 'blue',
        content: 'blue tag'
      },
      {
        variant: 'yellow',
        content: 'yellow tag'
      },
      {
        variant: 'green',
        content: 'green tag'
      },
      {
        variant: 'purple',
        content: 'purple tag'
      }
    ]);

    return { tags, args };
  },
  template: `
  <div class="flex space-x-2 mb-4">
    <puik-tag
      v-for="(tag, index) in tags"
      :id="'puik-tag-'+index"
      :key="index"
      :content="tag.content"
      :variant="tag.variant"
    />
  </div>
`
});

const SizeVariantsTemplate: StoryFn = (args: Args) => ({
  components: {
    PuikIcon,
    PuikTag
  },
  setup() {
    return { args };
  },
  template: `
    <puik-tag
      style="display: inline-block; margin-right: 8px;"
      id="puik-tag-default"
      content="default size"
      size="default"
    />
    <puik-tag
      style="display: inline-block"
      id="puik-tag-small"
      content="small size"
      size="small"
    />
`
});

const DisabledTemplate: StoryFn = (args: Args) => ({
  components: {
    PuikIcon,
    PuikTag
  },
  setup() {
    return { args };
  },
  template: `
    <puik-tag
      id="puik-tag-default"
      content="disabled tag"
      :disabled="true"
    />
`
});

const WithIconTemplate: StoryFn = (args: Args) => ({
  components: {
    PuikIcon,
    PuikTag
  },
  setup() {
    return { args };
  },
  template: `
    <puik-tag
      id="puik-tag-default"
      content="with icon tag"
      icon="favorite"
    />
`
});

const WithLongTextTemplate: StoryFn = (args: Args) => ({
  components: {
    PuikIcon,
    PuikTag
  },
  setup() {
    return { args };
  },
  template: `
    <puik-tag
      id="puik-tag-default"
      content="very long text content very long text content"
      :tooltip-position="bottom"
    />
`
});

export const Default = {
  render: DefaultTemplate,
  args: {},
  parameters: {
    docs: {
      source: {
        code: `
<!--VueJS Snippet-->
<puik-tag
  :id="args.id"
  :content="args.content"
  :size="args.size"
  :variant="args.variant"
  :icon="args.icon"
  :disabled="args.disabled"
  :tooltipPosition="args.tooltipPosition"
/>
</div>

<!--HTML/CSS Snippet-->
<div id="puik-tag-id" class="puik-tag puik-tag--neutral puik-tag--default">
  <div class="puik-tag__content">
    default tag
  </div>
</div>
`,
        language: 'html'
      }
    }
  }
};

export const ColorVariants = {
  render: ColorVariantsTemplate,
  args: {},
  parameters: {
    docs: {
      source: {
        code: `
<!--VueJS Snippet-->
<!-- $variants: ${tagColorsVariantsSummary} -->
<puik-tag
  :id="args.id"
  :content="args.content"
  :variant="{$variant}"
/>
</div>

<!--HTML/CSS Snippet-->
<!-- $variants: ${tagColorsVariantsSummary} -->
<div id="puik-tag-id" class="puik-tag puik-tag--{$variant} puik-tag--default">
  <div class="puik-tag__content">
    {$variant} tag
  </div>
</div>
`,
        language: 'html'
      }
    }
  }
};

export const SizeVariants = {
  render: SizeVariantsTemplate,
  args: {},
  parameters: {
    docs: {
      source: {
        code: `
<!--VueJS Snippet-->
<!-- $sizes: ${tagSizeVariantsSummary} -->
<puik-tag
  :id="args.id"
  :content="args.content"
  :size="{$size}"
/>
</div>

<!--HTML/CSS Snippet-->
<!-- $sizes: ${tagSizeVariantsSummary} -->
<div id="puik-tag-id" class="puik-tag puik-tag--neutral puik-tag--{$size}">
  <div class="puik-tag__content">
    {$size} tag
  </div>
</div>
`,
        language: 'html'
      }
    }
  }
};

export const Disabled = {
  render: DisabledTemplate,
  args: {},
  parameters: {
    docs: {
      source: {
        code: `
<!--VueJS Snippet-->
<puik-tag
  :id="args.id"
  :content="args.content"
  :disabled="true"
/>
</div>

<!--HTML/CSS Snippet-->
<div id="puik-tag-default" class="puik-tag puik-tag--neutral puik-tag--default puik-tag--disabled">
  <div class="puik-tag__content">
    disabled tag
  </div>
</div>
`,
        language: 'html'
      }
    }
  }
};

export const WithIcon = {
  render: WithIconTemplate,
  args: {},
  parameters: {
    docs: {
      source: {
        code: `
<!--VueJS Snippet-->
<puik-tag
  :id="args.id"
  :content="args.content"
  icon="favorite"
/>
</div>

<!--HTML/CSS Snippet-->
<div id="puik-tag-default" class="puik-tag puik-tag--neutral puik-tag--default">
  <div class="puik-icon material-icons-round puik-tag__icon" style="font-size: 1rem;">
    favorite
  </div>
  <div class="puik-tag__content">with icon tag</div>
</div>
`,
        language: 'html'
      }
    }
  }
};

export const WithLongText = {
  render: WithLongTextTemplate,
  args: {},
  parameters: {
    docs: {
      source: {
        code: `
<!--VueJS Snippet-->
<!--$tooltipPositions: ${tooltipPositionsSummary}-->
<puik-tag
  id="args.id"
  content="very long text content very long text content"
  :tooltip-position="{$tooltipPosition}"
/>
`,
        language: 'html'
      }
    }
  }
};
