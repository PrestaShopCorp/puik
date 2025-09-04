import { PuikButton, PuikIcon, PuikTooltip, PuikTooltipPositions } from '@prestashopcorp/puik-components';
import type { Meta, StoryFn, Args } from '@storybook/vue3';

const tooltipPositions = Object.values(PuikTooltipPositions);
const tooltipPositionsSummary = tooltipPositions.join('|');

export default {
  title: 'Components/Tooltip',
  component: PuikTooltip,
  argTypes: {
    heading: {
      description: 'Sets the tooltip heading (also available as a prop)',
      table: {
        defaultValue: {
          summary: 'undefined'
        }
      }
    },
    description: {
      description: 'Sets the tooltip description (also available as a prop)',
      table: {
        defaultValue: {
          summary: 'undefined'
        }
      }
    },
    position: {
      control: 'select',
      description: 'Sets the tooltip position',
      options: tooltipPositions,
      table: {
        defaultValue: {
          summary: 'top'
        },
        type: {
          summary: tooltipPositions
        }
      }
    },
    isDisabled: {
      control: 'boolean',
      description: 'Enables or disables the tooltip',
      table: {
        defaultValue: {
          summary: 'false'
        }
      }
    },
    maxWidth: {
      control: 'text',
      description: 'Sets a maximum width for the tooltip (in px)',
      table: {
        defaultValue: {
          summary: 'max-content'
        }
      }
    },
    zindex: {
      control: 'number',
      description: 'Sets the z-index level',
      table: {
        defaultValue: {
          summary: '1000'
        }
      }
    },
    disappearDelay: {
      control: 'number',
      description: 'Sets the timer to make the tooltip disappear (in ms)',
      table: {
        defaultValue: {
          summary: '50'
        }
      }
    },
    dataTest: {
      control: 'text',
      description:
        'Sets the data-test attribute on the tooltip `{dataTest}` `slot-content-${dataTest}` `tip-content-${dataTest}` `heading-${dataTest}` `description-${dataTest}`',
      table: {
        defaultValue: {
          summary: undefined
        }
      }
    }
  },
  args: {
    heading: 'Heading',
    description: 'This is a tooltip',
    position: 'top',
    dataTest: 'tooltip'
  }
} as Meta;

const Template: StoryFn = (args: Args) => ({
  components: {
    PuikTooltip,
    PuikIcon
  },
  setup() {
    return { args };
  },
  template: `
    <div class="flex items-center justify-center h-[120px]">
      <puik-tooltip :key="args.position" v-bind="args">
        <puik-icon font-size="1.25rem" icon="help_outline" />
        <template #heading>{{ args.heading }}</template>
        <template #description>{{ args.description }}</template>
      </puik-tooltip>
    </div>`
});

export const Default = {
  render: Template,
  args: {},

  parameters: {
    docs: {
      source: {
        code: `
  <!--VueJS Snippet-->
  <!--
  $position: ${tooltipPositionsSummary}
  -->
  <puik-tooltip
    :position="$positions"
    :heading="heading"
    :description="description"
    :is-disabled="isDisabled"
    :max-width="maxWidth"
    :zindex="zindex"
    :disappear-delay="disappearDelay"
    :data-test="dataTest"
  >
    <puik-icon font-size="1.25rem" icon="help_outline" />
    <template #heading>{{ args.heading }}</template>
    <template #description>{{ args.description }}</template>
  </puik-tooltip>

  <!--HTML/CSS Snippet-->
  <div class="puik-tooltip" data-test="tooltip">
    <div
      class="puik-tooltip_slot--wrapper"
      tabindex="0"
      aria-describedby="puik-tooltip-8715"
      aria-expanded="false"
      data-test="slot-content-tooltip"
    >
        <div
          class="puik-icon"
          aria-label="help_outline icon"
          role="img" style="font-size: 1.25rem;
          font-variation-settings: &quot;FILL&quot; 1;"
        >
            help_outline
        </div>
    </div>
    <div
      id="puik-tooltip-8715"
      role="tooltip" class="puik-tooltip__tip"
      aria-live="polite" aria-hidden="true"
      data-test="tip-content-tooltip"
      data-popper-placement="top"
      style="z-index: -1; display: none; position: absolute; inset: auto auto 0px 0px; margin: 0px; transform: translate3d(212.5px, -192px, 0px);"
    >
      <div class="puik-tooltip__tip__content">
        <span
          class="puik-tooltip__tip__content__heading"
          data-test="heading-tooltip"
        >
          Heading
        </span>
        <span
        class="puik-tooltip__tip__content__description"
        data-test="description-tooltip"
        >
          This is a tooltip
        </span>
        </div>
        <div
          class="puik-tooltip__tip__arrow"
          data-popper-arrow
          style="position: absolute; left: 0px; transform: translate3d(212.5px, 0px, 0px);">
        </div>
    </div>
  </div>
        `
      }
    }
  }
};

export const DisabledTooltip = {
  render: () => ({
    components: {
      PuikTooltip,
      PuikButton
    },
    template: `
  <div class="flex items-center justify-center h-[120px]">
    <puik-tooltip :is-disabled="true" position="top">
      <puik-button>There is no tooltip</puik-button>
      <template #heading>Heading</template>
      <template #description>There is no tooltip</template>
    </puik-tooltip>
  </div>
    `
  }),

  parameters: {
    docs: {
      source: {
        code: `
  <!--VueJS Snippet-->
  <puik-tooltip :is-disabled="true" position="top">
    <puik-button>There is no tooltip</puik-button>
    <template #heading>Heading</template>
    <template #description>There is no tooltip</template>
  </puik-tooltip>


  <!--HTML/CSS Snippet-->
  <div class="puik-tooltip" data-test="tooltip">
    <div
      class="puik-tooltip_slot--wrapper"
      tabindex="0" aria-describedby="puik-tooltip-4728"
      aria-expanded="false"
      data-test="slot-content-tooltip"
    >
      <button
        class="puik-button puik-button--primary puik-button--md puik-button--no-wrap"
        role="button"
      >
        There is no tooltip
      </button>
    </div>
    <div
      id="puik-tooltip-4728"
      role="tooltip"
      class="puik-tooltip__tip"
      aria-live="polite"
      aria-hidden="true"
      data-test="tip-content-tooltip"
      data-popper-placement="top"
      style="z-index: -1; display: none; position: absolute; inset: auto auto 0px 0px; margin: 0px; transform: translate(479px, -100px);"
    >
      <div class="puik-tooltip__tip__content">
        <span
          class="puik-tooltip__tip__content__heading"
          data-test="heading-tooltip">
          Heading
        </span>
        <span
          class="puik-tooltip__tip__content__description"
          data-test="description-tooltip"
        >
          There is no tooltip
        </span>
      </div>
      <div
        class="puik-tooltip__tip__arrow"
        data-popper-arrow
        style="position: absolute; left: 0px; transform: translate(479px, 0px);"
      >
      </div>
    </div>
  </div>
        `
      }
    }
  }
};

export const UsingAComponent = {
  render: () => ({
    components: {
      PuikTooltip,
      PuikButton
    },
    template: `
      <div class="flex items-center justify-center h-[120px]">
        <puik-tooltip position="top">
          <puik-button>Button</puik-button>
          <template #heading>Heading</template>
          <template #description>Tooltip around a button</template>
        </puik-tooltip>
      </div>`
  }),

  parameters: {
    docs: {
      source: {
        code: `
  <!--VueJS Snippet-->
  <puik-tooltip :is-disabled="true" position="top">
    <puik-button>There is no tooltip</puik-button>
    <template #heading>Heading</template>
    <template #description>Tooltip around a button</template>
  </puik-tooltip>

  <!--HTML/CSS Snippet-->
<div class="puik-tooltip" data-test="tooltip">
  <div
    class="puik-tooltip_slot--wrapper"
    tabindex="0"
    aria-describedby="puik-tooltip-3584"
    aria-expanded="false"
    data-test="slot-content-tooltip">
    <button
      class="puik-button puik-button--primary puik-button--md puik-button--no-wrap"
      role="button"
    >
     Button
    </button>
  </div>
  <div
    id="puik-tooltip-3584"
    role="tooltip"
    class="puik-tooltip__tip"
    aria-live="polite"
    aria-hidden="true"
    data-test="tip-content-tooltip"
    data-popper-placement="top"
    style="z-index: -1; position: absolute; inset: auto auto 0px 0px; margin: 0px; transform: translate(-52px, -48px); display: none;"
  >
    <div class="puik-tooltip__tip__content">
      <span
        class="puik-tooltip__tip__content__heading"
        data-test="heading-tooltip"
      >
        Heading
      </span>
      <span
        class="puik-tooltip__tip__content__description"
        data-test="description-tooltip"
      >
        Tooltip around a button
      </span>
    </div>
    <div
      class="puik-tooltip__tip__arrow" data-popper-arrow
      style="position: absolute; left: 0px; transform: translate(82px, 0px);">
    </div>
  </div>
</div>
        `
      }
    }
  }
};

export const Bottom = {
  render: () => ({
    components: {
      PuikTooltip,
      PuikIcon
    },
    template: `
      <div class="flex items-center justify-center h-[120px]">
        <puik-tooltip position="bottom">
          <puik-icon font-size="1.25rem" icon="help_outline" />
          <template #heading>Heading</template>
          <template #description>This is a bottom tooltip</template>
        </puik-tooltip>
      </div>`
  }),

  parameters: {
    docs: {
      source: {
        code: `
  <!--VueJS Snippet-->
  <puik-tooltip position="bottom">
    <puik-icon font-size="1.25rem" icon="help_outline" />
    <template #heading>Heading</template>
    <template #description>This is a bottom tooltip</template>
  </puik-tooltip>

  <!--HTML/CSS Snippet-->
  <div class="puik-tooltip" data-test="tooltip">
    <div
      class="puik-tooltip_slot--wrapper"
      tabindex="0"
      aria-describedby="puik-tooltip-9173"
      aria-expanded="false"
      data-test="slot-content-tooltip"
    >
      <div
        class="puik-icon"
        aria-label="help_outline icon"
        role="img"
        style="font-size: 1.25rem; font-variation-settings: &quot;FILL&quot; 1;"
      >
        help_outline
      </div>
    </div>
    <div
      id="puik-tooltip-9173"
      role="tooltip"
      class="puik-tooltip__tip" aria-live="polite"
      aria-hidden="true"
      data-test="tip-content-tooltip"
      data-popper-placement="bottom"
      style="z-index: -1; position: absolute; inset: 0px auto auto 0px; margin: 0px; transform: translate(-74px, 32px); display: none;"
    >
      <div
        class="puik-tooltip__tip__content">
        <span
          class="puik-tooltip__tip__content__heading"
          data-test="heading-tooltip"
        >
          Heading
        </span>
        <span
          class="puik-tooltip__tip__content__description"
          data-test="description-tooltip"
        >
          This is a bottom tooltip
        </span>
      </div>
      <div
        class="puik-tooltip__tip__arrow"
        data-popper-arrow
        style="position: absolute; left: 0px; transform: translate(76px, 0px);"
      >
      </div>
    </div>
  </div>
        `
      }
    }
  }
};

export const Left = {
  render: () => ({
    components: {
      PuikTooltip,
      PuikIcon
    },
    template: `
      <div class="flex items-center justify-center h-[120px]">
        <puik-tooltip position="left">
          <puik-icon font-size="1.25rem" icon="help_outline" />
          <template #heading>Heading</template>
          <template #description>This is a left tooltip</template>
        </puik-tooltip>
      </div>`
  }),

  parameters: {
    docs: {
      source: {
        code: `
  <!--VueJS Snippet-->
  <puik-tooltip position="left">
    <puik-icon font-size="1.25rem" icon="help_outline" />
    <template #heading>Heading</template>
    <template #description>This is a bottom tooltip</template>
  </puik-tooltip>

  <!--HTML/CSS Snippet-->
  <div class="puik-tooltip" data-test="tooltip">
    <div
      class="puik-tooltip_slot--wrapper"
      tabindex="0"
      aria-describedby="puik-tooltip-8480"
      aria-expanded="false"
      data-test="slot-content-tooltip"
    >
      <div
        class="puik-icon"
        aria-label="help_outline icon"
        role="img" style="font-size: 1.25rem; font-variation-settings: &quot;FILL&quot; 1;"
      >
        help_outline
      </div>
    </div>
    <div
      id="puik-tooltip-8480"
      role="tooltip"
      class="puik-tooltip__tip" aria-live="polite" aria-hidden="true" data-test="tip-content-tooltip"
      data-popper-placement="left"
      style="z-index: -1; position: absolute; inset: 0px 0px auto auto; margin: 0px; transform: translate(-32px, -20px); display: none;"
    >
      <div
        class="puik-tooltip__tip__content">
        <span
          class="puik-tooltip__tip__content__heading"
          data-test="heading-tooltip"
        >
          Heading
        </span>
        <span
          class="puik-tooltip__tip__content__description"
          data-test="description-tooltip"
        >
          This is a left tooltip
        </span>
      </div>
      <div
        class="puik-tooltip__tip__arrow"
        data-popper-arrow
        style="position: absolute; top: 0px; transform: translate(0px, 22px);"
      >
      </div>
    </div>
  </div>
        `
      }
    }
  }
};

export const Right = {
  render: () => ({
    components: {
      PuikTooltip,
      PuikIcon
    },
    template: `
      <div class="flex items-center justify-center h-[120px]">
        <puik-tooltip position="right">
          <puik-icon font-size="1.25rem" icon="help_outline" />
          <template #heading>Heading</template>
          <template #description>This is a right tooltip</template>
        </puik-tooltip>
      </div>`
  }),

  parameters: {
    docs: {
      source: {
        code: `
  <!--VueJS Snippet-->
  <puik-tooltip position="right">
    <puik-icon font-size="1.25rem" icon="help_outline" />
    <template #heading>Heading</template>
    <template #description>This is a bottom tooltip</template>
  </puik-tooltip>

  <!--HTML/CSS Snippet-->
  <div class="puik-tooltip" data-test="tooltip">
    <div
      class="puik-tooltip_slot--wrapper"
      tabindex="0"
      aria-describedby="puik-tooltip-8143"
      aria-expanded="false"
      data-test="slot-content-tooltip"
    >
      <div
        class="puik-icon"
        aria-label="help_outline icon"
        role="img" style="font-size: 1.25rem; font-variation-settings: &quot;FILL&quot; 1;"
      >
        help_outline
      </div>
    </div>
    <div
      id="puik-tooltip-8143" role="tooltip"
      class="puik-tooltip__tip"
      aria-live="polite"
      aria-hidden="true"
      data-test="tip-content-tooltip"
      data-popper-placement="right"
      style="z-index: -1; position: absolute; inset: 0px auto auto 0px; margin: 0px; transform: translate(32px, -20px); display: none;"
    >
      <div
        class="puik-tooltip__tip__content">
        <span
          class="puik-tooltip__tip__content__heading"
          data-test="heading-tooltip"
        >
          Heading
        </span>
        <span
          class="puik-tooltip__tip__content__description"
          data-test="description-tooltip"
        >
          This is a right tooltip
        </span>
       </div>
      <div
        class="puik-tooltip__tip__arrow"
        data-popper-arrow
        style="position: absolute; top: 0px; transform: translate(0px, 22px);"
      >
      </div>
    </div>
  </div>
        `
      }
    }
  }
};

export const Positions = {
  render: (args: Args) => ({
    components: {
      PuikTooltip,
      PuikIcon
    },
    setup() {
      return { args };
    },
    template: `
      <div class="flex items-center justify-center h-[120px]">
        <puik-tooltip position="top">
          <puik-icon font-size="1.25rem" icon="help_outline" />
          <template #heading>Heading</template>
          <template #description>This is a top tooltip</template>
        </puik-tooltip>
        <puik-tooltip position="bottom">
          <puik-icon font-size="1.25rem" icon="help_outline" />
          <template #heading>Heading</template>
          <template #description>This is a bottom tooltip</template>
        </puik-tooltip>
        <puik-tooltip position="left">
          <puik-icon font-size="1.25rem" icon="help_outline" />
          <template #heading>Heading</template>
          <template #description>This is a left tooltip</template>
        </puik-tooltip>
        <puik-tooltip position="right">
          <puik-icon font-size="1.25rem" icon="help_outline" />
          <template #heading>Heading</template>
          <template #description>This is a right tooltip</template>
        </puik-tooltip>
      </div>`
  }),

  parameters: {
    docs: {
      source: {
        code: `
  <!--VueJS Snippet-->
  <puik-tooltip position="$positions">
    <puik-icon font-size="1.25rem" icon="help_outline" />
    <template #heading>Heading</template>
    <template #description>This is a bottom tooltip</template>
  </puik-tooltip>

  <!--HTML/CSS Snippet-->
  <div class="puik-tooltip" data-test="tooltip">
    <div
      class="puik-tooltip_slot--wrapper"
      tabindex="0"
      aria-describedby="puik-tooltip-5063"
      aria-expanded="false"
      data-test="slot-content-tooltip"
    >
      <div
        class="puik-icon"
        aria-label="help_outline icon"
        role="img" style="font-size: 1.25rem; font-variation-settings: &quot;FILL&quot; 1;"
      >
        help_outline
      </div>
    </div>
    <div
      id="puik-tooltip-5063"
      role="tooltip"
      class="puik-tooltip__tip"
      aria-live="polite"
      aria-hidden="true"
      data-test="tip-content-tooltip"
      data-popper-placement="top"
      style="z-index: -1; position: absolute; inset: auto auto 0px 0px; margin: 0px; transform: translate(-61px, -32px); display: none;"
     >
      <div
        class="puik-tooltip__tip__content">
        <span
          class="puik-tooltip__tip__content__heading"
          data-test="heading-tooltip"
        >
          Heading
        </span>
        <span
          class="puik-tooltip__tip__content__description"
          data-test="description-tooltip"
        >
          This is a top tooltip
        </span>
      </div>
      <div
        class="puik-tooltip__tip__arrow"
        data-popper-arrow
        style="position: absolute; left: 0px; transform: translate(64px, 0px);"
      >
      </div>
    </div>
  </div>

  <div class="puik-tooltip" data-test="tooltip">
    <div
      class="puik-tooltip_slot--wrapper"
      tabindex="0"
      aria-describedby="puik-tooltip-8787"
      aria-expanded="false"
      data-test="slot-content-tooltip"
    >
    <div
      class="puik-icon"
      aria-label="help_outline icon"
      role="img" style="font-size: 1.25rem; font-variation-settings: &quot;FILL&quot; 1;"
    >
      help_outline
    </div>
    </div>
    <div
      id="puik-tooltip-8787"
      role="tooltip"
      class="puik-tooltip__tip"
      aria-live="polite"
      aria-hidden="true"
      data-test="tip-content-tooltip"
      data-popper-placement="bottom"
      style="z-index: -1; display: none; position: absolute; inset: 0px auto auto 0px; margin: 0px; transform: translate(469px, 92px);"
    >
      <div class="puik-tooltip__tip__content">
        <span
          class="puik-tooltip__tip__content__heading" data-test="heading-tooltip"
        >
          Heading
        </span>
        <span
          class="puik-tooltip__tip__content__description"
          data-test="description-tooltip"
        >
          This is a bottom tooltip
        </span>
      </div>
      <div
        class="puik-tooltip__tip__arrow"
        data-popper-arrow
        style="position: absolute; left: 0px; transform: translate(479px, 0px);"
      >
      </div>
    </div>
  </div>

  <div class="puik-tooltip" data-test="tooltip">
    <div
      class="puik-tooltip_slot--wrapper"
      tabindex="0"
      aria-describedby="puik-tooltip-8028"
      aria-expanded="false"
      data-test="slot-content-tooltip"
    >
    <div
      class="puik-icon"
      aria-label="help_outline icon"
      role="img" style="font-size: 1.25rem; font-variation-settings: &quot;FILL&quot; 1;"
    >
      help_outline
    </div>
    </div>
    <div
      id="puik-tooltip-8028"
      role="tooltip"
      class="puik-tooltip__tip"
      aria-live="polite"
      aria-hidden="true"
      data-test="tip-content-tooltip"
      data-popper-placement="left"
      style="z-index: -1; display: none; position: absolute; inset: 0px 0px auto auto; margin: 0px; transform: translate(-491px, 70px);"
    >
      <div class="puik-tooltip__tip__content">
        <span
          class="puik-tooltip__tip__content__heading"
          data-test="heading-tooltip"
        >
          Heading
        </span>
        <span
          class="puik-tooltip__tip__content__description"
          data-test="description-tooltip">
            This is a left tooltip
          </span>
        </div>
      <div
        class="puik-tooltip__tip__arrow"
        data-popper-arrow
        style="position: absolute; top: 0px; transform: translate(0px, 70px);"
      >
      </div>
    </div>
  </div>

  <div class="puik-tooltip" data-test="tooltip">
    <div
      class="puik-tooltip_slot--wrapper"
      tabindex="0"
      aria-describedby="puik-tooltip-4221"
      aria-expanded="false"
      data-test="slot-content-tooltip"
    >
    <div
      class="puik-icon"
      aria-label="help_outline icon"
      role="img" style="font-size: 1.25rem; font-variation-settings: &quot;FILL&quot; 1;"
    >
      help_outline
    </div>
    </div>
    <div
      id="puik-tooltip-4221"
      role="tooltip"
      class="puik-tooltip__tip"
      aria-live="polite"
      aria-hidden="true"
      data-test="tip-content-tooltip"
      data-popper-placement="right"
      style="z-index: -1; display: none; position: absolute; inset: 0px auto auto 0px; margin: 0px; transform: translate(531px, 70px);"
    >
      <div class="puik-tooltip__tip__content">
        <span
          class="puik-tooltip__tip__content__heading"
          data-test="heading-tooltip">
            Heading
          </span>
          <span
            class="puik-tooltip__tip__content__description"
            data-test="description-tooltip">
            This is a right tooltip
          </span>
        </div>
      <div
        class="puik-tooltip__tip__arrow" data-popper-arrow
        style="position: absolute; top: 0px; transform: translate(0px, 70px);"
      >
      </div>
    </div>
  </div>
        `
      }
    }
  }
};
