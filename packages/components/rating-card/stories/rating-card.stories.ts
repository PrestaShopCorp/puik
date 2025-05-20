import { PuikRatingCard, PuikRatingCardVariants } from '@prestashopcorp/puik-components';
import { Meta, StoryFn, StoryObj, Args } from '@storybook/vue3';

const ratingCardVariants = Object.values(PuikRatingCardVariants);
const ratingCardVariantsSummary = ratingCardVariants.join('|');

export default {
  title: 'Components/RatingCard',
  component: PuikRatingCard,
  argTypes: {
    id: {
      control: 'text',
      description:
        'Sets the id HTML attribute of puik-rating-card. If this prop is not configured, an id will be automatically generated using this pattern: puik-rating-card-{randomNumber}',
      table: {
        defaultValue: {
          summary: 'puik-rating-card-{randomNumber}'
        },
        type: {
          summary: 'string'
        }
      }
    },
    totalRatings: {
      description: 'An array of numbers, a stringified version, or a comma-separated string of all ratings (set of numbers from 0 to 5 - including decimal values) - see details below',
      control: { type: 'array' },
      table: {
        type: {
          summary: 'number[] | string',
          detail: `Valid patterns:
          - Array of numbers, ex: [4, 5, 3, 4, 5, 2.5]
          // use in particular to match the string type of attributes (props equivalent) for web components use case :
          - JSON string (stingify Array of numbers), ex: "[4, 5, 3, 4, 5, 2.5]"
          - Comma-separated string, ex: "4,5,3,4,5,2.5"`
        }
      }
    },
    variant: {
      description: 'Sets the rating card display to compact or expanded mode',
      control: { type: 'select' },
      options: ratingCardVariants,
      table: {
        type: {
          summary: ratingCardVariantsSummary
        },
        defaultValue: {
          summary: PuikRatingCardVariants.Extended
        }
      }
    },
    showTotalRatings: {
      description: 'Displays the number of total ratings - see details below',
      control: { type: 'boolean' },
      table: {
        defaultValue: {
          summary: 'true'
        },
        type: {
          summary: 'booleanish',
          detail: `
// use in particular to match the string type of attributes (props equivalent) for web components use case
export type booleanish = boolean | 'true' | 'false';
          `
        }
      }
    },
    dataTest: {
      control: 'text',
      description: 'Sets the data-test attribute `dataTest` (puik-rating-card top level div element), `${dataTest}-star-icon` (star icon of compact variant), `${dataTest}-star-icon-${starIndex}` (star icons of extended variant)',
      table: {
        defaultValue: {
          summary: 'undefined'
        },
        type: {
          summary: 'string'
        }
      }
    },
    ariaLabel: {
      control: 'text',
      description: 'Sets the aria-label attribute for accessibility',
      table: {
        defaultValue: {
          summary: 'undefined'
        },
        type: {
          summary: 'string'
        }
      }
    }
  }
} as Meta;

const Template: StoryFn = (args: Args) => ({
  components: {
    PuikRatingCard
  },
  setup() {
    return { args };
  },
  template: '<PuikRatingCard v-bind="args" />'
});

export const Extended = {
  render: Template,
  args: {
    id: 'puik-rating-card-example',
    totalRatings: [4, 5, 3, 4, 5, 2.5],
    variant: 'extended',
    showTotalRatings: true,
    dataTest: 'rating-card',
    ariaLabel: 'Rating Card'
  },
  parameters: {
    docs: {
      source: {
        code: `
<!-- VueJS Snippet -->
<PuikRatingCard
  id="puik-rating-card-example"
  :totalRatings="[4, 5, 3, 4, 5]"
  variant='extended'
  showTotalRatings
  dataTest='rating-card'
  ariaLabel='Rating Card'
/>

<!-- HTML/CSS Snippet -->
<div
  id="puik-rating-card-example"
  class="puik-rating-card"
  data-test="rating-card"
  aria-label="Rating Card">
  <div class="puik-rating-card_stars-container">
    <span class="puik-icon puik-rating-card_star" style="font-size: 20px; color: rgb(255, 160, 0); font-variation-settings: FILL 1;" aria-label="star icon" role="img">star</span>
    <span class="puik-icon puik-rating-card_star" style="font-size: 20px; color: rgb(255, 160, 0); font-variation-settings: FILL 1;" aria-label="star icon" role="img">star</span>
    <span class="puik-icon puik-rating-card_star" style="font-size: 20px; color: rgb(255, 160, 0); font-variation-settings: FILL 1;" aria-label="star icon" role="img">star</span>
    <span class="puik-icon puik-rating-card_star" style="font-size: 20px; color: rgb(255, 160, 0); font-variation-settings: FILL 1;" aria-label="star_half icon" role="img">star_half</span>
    <span class="puik-icon puik-rating-card_star" style="font-size: 20px; color: rgb(255, 160, 0); font-variation-settings: FILL 0;" aria-label="star icon" role="img">star</span>
  </div>
  <span class="puik-rating-card_total-ratings">(6)</span>
</div>

        `,
        language: 'html'
      }
    }
  }

};

export const Compact = {
  render: Template,
  args: {
    id: 'puik-rating-card-compact',
    totalRatings: [4, 5, 3, 4, 5, 2.5],
    variant: 'compact',
    showTotalRatings: true,
    dataTest: 'rating-card-compact',
    ariaLabel: 'Compact Rating Card'
  },
  parameters: {
    docs: {
      source: {
        code: `
<!-- VueJS Snippet -->
<PuikRatingCard
  id="puik-rating-card-compact"
  :totalRatings="[4, 5, 3, 4, 5, 2.5]"
  variant='compact'
  showTotalRatings
  dataTest='rating-card-compact'
  ariaLabel='Compact Rating Card'
/>

<!-- HTML/CSS Snippet -->
<div
  id="puik-rating-card-compact"
  class="puik-rating-card" data-test="rating-card-compact"
  aria-label="Compact Rating Card"
>
  <span class="puik-rating-card_average-value">3.9</span>
  <span class="puik-icon puik-rating-card_star" style="font-size: 16px; color: rgb(255, 160, 0); font-variation-settings: 'FILL' 1;" aria-label="star icon" role="img">star</span>
  <span class="puik-rating-card_total-ratings">(6)</span>
</div>
        `,
        language: 'html'
      }
    }
  }

};

export const HideTotalRatingsNumber: StoryObj = {
  render: () => ({
    components: {
      PuikRatingCard
    },
    setup() {
    },
    template: `
    <div class="flex flex-col gap-y-2">
      <p class="puik-body-large-medium">Extended variant example:</p>
      <PuikRatingCard
        id="puik-rating-card-extended"
        :totalRatings="[4, 5, 3, 4, 5, 2.5]"
        variant='extended'
        :showTotalRatings="false"
        dataTest='rating-card-extended'
        ariaLabel='Rating Card Extended'
      />
      <p class="puik-body-large-medium">Compact variant example:</p>
      <PuikRatingCard
        id="puik-rating-card-compact"
        :totalRatings="[4, 5, 3, 4, 5, 2.5]"
        variant='compact'
        :showTotalRatings="false"
        dataTest='rating-card-compact'
        ariaLabel='Rating Card Compact'
      />
    </div>
    `
  }),

  parameters: {
    docs: {
      source: {
        code: `
  <!--VueJS Snippet-->
  <PuikRatingCard
    id="puik-rating-card-extended"
    :totalRatings="[4, 5, 3, 4, 5]"
    variant='extended'
    :showTotalRatings="false"
    dataTest='rating-card-extended'
    ariaLabel='Rating Card Extended'
  />

  <PuikRatingCard
    id="puik-rating-card-compact"
    :totalRatings="[4, 5, 3, 4, 5]"
    variant='compact'
    :showTotalRatings="false"
    dataTest='rating-card-compact'
    ariaLabel='Rating Card Compact'
  />

  <!-- HTML/CSS Snippet -->
  <div id="puik-rating-card-extended" class="puik-rating-card" data-test="rating-card-extended" aria-label="Rating Card Extended">
    <div class="puik-rating-card_stars-container">
      <span class="puik-icon puik-rating-card_star" style="font-size: 20px; color: rgb(255, 160, 0); font-variation-settings: 'FILL' 1;" aria-label="star icon" role="img">star</span>
      <span class="puik-icon puik-rating-card_star" style="font-size: 20px; color: rgb(255, 160, 0); font-variation-settings: 'FILL' 1;" aria-label="star icon" role="img">star</span>
      <span class="puik-icon puik-rating-card_star" style="font-size: 20px; color: rgb(255, 160, 0); font-variation-settings: 'FILL' 1;" aria-label="star icon" role="img">star</span>
      <span class="puik-icon puik-rating-card_star" style="font-size: 20px; color: rgb(255, 160, 0); font-variation-settings: 'FILL' 1;" aria-label="star_half icon" role="img">star_half</span>
      <span class="puik-icon puik-rating-card_star" style="font-size: 20px; color: rgb(255, 160, 0); font-variation-settings: 'FILL' 0;" aria-label="star icon" role="img">star</span>
    </div>
  </div>

  <div id="puik-rating-card-compact" class="puik-rating-card" data-test="rating-card-compact" aria-label="Rating Card Compact">
    <span class="puik-rating-card_average-value">3.9</span><span class="puik-icon puik-rating-card_star" style="font-size: 16px; color: rgb(255, 160, 0); font-variation-settings: 'FILL' 1;" aria-label="star icon" role="img">star</span>
  </div>
    `
      }
    }
  }
};
