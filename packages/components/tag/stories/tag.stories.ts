import { ref } from 'vue'
import { PuikIcon } from '@puik/components/icon'
import { tagColorsVariants } from '../src/tag'
import PuikTag from './../src/tag.vue'
import type { Meta, StoryFn, Args } from '@storybook/vue3'

const tagColorsVariantsSummary = tagColorsVariants.join('|')

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
          summary: 'string',
        },
        defaultValue: {
          summary: 'none',
        },
      },
    },
    variant: {
      description:
        'Color variants of tag component (neutral by default, blue, yellow, green, purple)',
      control: 'select',
      options: tagColorsVariants,
      table: {
        type: {
          summary: tagColorsVariantsSummary,
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
    closeable: {
      description:
        'Add closeable feature for the tag component (close icon which trigger a close event to parent component)',
      control: 'boolean',
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: {
          summary: 'true',
        },
      },
    },
    disabled: {
      description: 'Disables the Tag component ',
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
} as Meta

const DefaultTemplate: StoryFn = (args: Args) => ({
  components: {
    PuikIcon,
    PuikTag,
  },
  setup() {
    const tags = ref([
      {
        id: 'id-1',
        variant: 'neutral',
        icon: 'home',
        closeable: true,
        disable: false,
        content: 'tag test',
      },
      {
        id: 'id-2',
        variant: 'blue',
        icon: 'settings',
        closeable: true,
        disable: false,
        content: 'tag test',
      },
      {
        id: 'id-3',
        variant: 'yellow',
        icon: 'favorite',
        closeable: true,
        disable: false,
        content:
          'long content long content long content long content long content ',
      },
      {
        id: 'id-4',
        variant: 'green',
        icon: 'key',
        closeable: true,
        disable: false,
        content: 'tag test',
      },
      {
        id: 'id-5',
        variant: 'purple',
        icon: 'token',
        closeable: true,
        disable: true,
        content: 'tag test',
      },
      {
        id: 'id-6',
        variant: 'purple',
        icon: 'public',
        closeable: true,
        disable: true,
        content: 'tag test',
      },
    ])
    const handleCloseTag = (payload: string) => {
      tags.value.map((e, i) => {
        e.id === payload && tags.value.splice(i, 1)
      })
    }
    return { tags, args }
  },
  template: `
  <puik-tag
    v-for="tag in tags"
    :id="tag.id"
    :key="tag.id"
    :variant="tag.variant"
    :icon="tag.icon"
    :closeable="true"
    :disable="tag.disable"
    @close="handleCloseTag"
  >
    {{ tag.content }}
  </puik-tag>
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
          <puik-tag
            v-for="tag in tags"
            :id="tag.id"
            :key="tag.id"
            :variant="tag.variant"
            :icon="tag.icon"
            :closeable="true"
            :disable="tag.disable"
            @close="handleCloseTag"
          >
          {{ tag.content }}
        </puik-tag>

          <!--HTML/CSS Snippet-->
`,
        language: 'html',
      },
    },
  },
}
