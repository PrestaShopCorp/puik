import { PuikConfigProvider, PuikPagination, PuikLabel, PuikConfigProviderLocale } from '@prestashopcorp/puik-components';
import type { Meta, StoryFn, Args } from '@storybook/vue3';
import { ref } from 'vue';

const configProviderLocales = Object.values(PuikConfigProviderLocale);
const configProviderLocalesSummary = configProviderLocales.join('|');

export default {
  title: 'Components/ConfigProvider',
  component: PuikConfigProvider,
  argTypes: {
    locale: {
      description:
        'defines language',
      control: 'select',
      options: configProviderLocales,
      table: {
        type: {
          summary: configProviderLocalesSummary
        },
        defaultValue: {
          summary: PuikConfigProviderLocale.En
        }
      }
    }
  },
  args: {}
} as Meta;

const DefaultTemplate: StoryFn = (args: Args) => ({
  components: {
    PuikConfigProvider,
    PuikPagination,
    PuikLabel
  },
  setup() {
    const page = ref(1);
    const itemsPerPage = ref(5);
    return { args, page, itemsPerPage };
  },
  template: `
  <puik-config-provider v-bind="args">
      <div style="display: flex; flex-direction: column; gap: 1rem;" >
        <p style="margin-left: 32px;">Translation feature: examples with PuikLabel and PuikPagination</p>
        <puik-label style="margin-left: 32px;" readonly for="input">
          Label
        </puik-label>
        <puik-pagination
          v-model:page="page"
          v-model:items-per-page="itemsPerPage"
          totalItem="150"
          variant="large"
        ></puik-pagination>
      </div>
  </puik-config-provider>
  `
});

export const Default = {
  render: DefaultTemplate,
  args: {},
  parameters: {
    docs: {
      source: {
        code: `
<!-- VueJS Snippet -->

<!-- Translation feature: examples with PuikLabel and PuikPagination -->

<!-- $locales: ${configProviderLocalesSummary} -->
<puik-config-provider locale="{$locale}">
  <puik-label>
    Label
  </puik-label>
  <puik-pagination
    v-model:page="page"
    :total-item="150"
    variant="large"
  ></puik-pagination>
</puik-config-provider>
`,
        language: 'html'
      }
    }
  }
};
