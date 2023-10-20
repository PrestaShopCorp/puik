import { ref } from 'vue'
import { PuikIcon } from '@puik/components'
import {
  avatarColors,
  avatarModes,
  avatarSizes,
  avatarTypes,
} from '../src/avatar'
import PuikAvatar from './../src/avatar.vue'
import type { Meta, StoryFn, Args } from '@storybook/vue3'

const avatarColorsSummary = avatarColors.join('|')
const avatarModesSummary = avatarModes.join('|')
const avatarSizesSummary = avatarSizes.join('|')
const avatarTypesSummary = avatarTypes.join('|')

export default {
  title: 'Components/Avatar',
  component: PuikAvatar,
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
    color: {
      description:
        'Color variants of avatar component (neutral by default, blue, yellow, green, purple)',
      control: 'select',
      options: avatarColors,
      table: {
        type: {
          summary: avatarColorsSummary,
        },
        defaultValue: {
          summary: 'neutral',
        },
      },
    },
    mode: {
      description:
        'Two possible variations (primary and reverse) : depending on a dark or light background of the container where the avatar is placed',
      control: 'select',
      options: avatarModes,
      table: {
        type: {
          summary: avatarModesSummary,
        },
        defaultValue: {
          summary: 'primary',
        },
      },
    },
    size: {
      description:
        'Size variants of avatar component (small, medium, large, jumbo)',
      control: 'select',
      options: avatarSizes,
      table: {
        type: {
          summary: avatarSizesSummary,
        },
        defaultValue: {
          summary: 'medium',
        },
      },
    },
    type: {
      description: 'Content type of avatar (initials, image or icon)',
      control: 'select',
      options: avatarTypes,
      table: {
        type: {
          summary: avatarTypesSummary,
        },
        defaultValue: {
          summary: 'initials',
        },
      },
    },
    icon: {
      description: 'Material icon name (cf https://fonts.google.com/icons)',
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
    src: {
      description: 'Image source if avatar type is set to "photo"',
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
    alt: {
      description: 'Image alt attribute if avatar type prop is set to "photo"',
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
    firstname: {
      description:
        'If avatar type prop is set to "initials". The "initials" type is composed of two letters max (first letter of firstname prop corresponds to the first)',
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
    lastname: {
      description:
        'If avatar type prop is set to "initials". The "initials" type is composed of two letters max (first letter of lastname corresponds to the last)',
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
  },
  args: {
    id: 'puik-avatar-id',
    color: 'neutral',
    mode: 'primary',
    size: 'medium',
    type: 'initials',
    icon: 'home',
    src: 'https://picsum.photos/200',
    alt: 'puik-avatar-alt',
    firstname: 'Presta',
    lastname: 'Shop',
  },
} as Meta

const DefaultTemplate: StoryFn = (args: Args) => ({
  components: {
    PuikIcon,
    PuikAvatar,
  },
  setup() {
    return { args }
  },
  template: `
<PuikAvatar v-bind="args" />
`,
})

const SizeTemplate: StoryFn = (args: Args) => ({
  components: {
    PuikIcon,
    PuikAvatar,
  },
  setup() {
    const avatars = ref([
      {
        type: 'initials',
        size: 'small',
      },
      {
        type: 'initials',
        size: 'medium',
      },
      {
        type: 'initials',
        size: 'large',
      },
      {
        type: 'initials',
        size: 'jumbo',
      },
      {
        type: 'icon',
        size: 'small',
        icon: 'home',
      },
      {
        type: 'icon',
        size: 'medium',
        icon: 'home',
      },
      {
        type: 'icon',
        size: 'large',
        icon: 'home',
      },
      {
        type: 'icon',
        size: 'jumbo',
        icon: 'home',
      },
      {
        type: 'photo',
        size: 'small',
        src: 'https://picsum.photos/200',
      },
      {
        type: 'photo',
        size: 'medium',
        src: 'https://picsum.photos/200',
      },
      {
        type: 'photo',
        size: 'large',
        src: 'https://picsum.photos/200',
      },
      {
        type: 'photo',
        size: 'jumbo',
        src: 'https://picsum.photos/200',
      },
    ])
    return { avatars, args }
  },
  template: `
<div class="flex space-x-2">
  <puik-avatar
    v-for="(avatar, index) in avatars"
    :key="index"
    :size="avatar.size"
    :type="avatar.type"
    :icon="avatar.icon"
    :src="avatar.src"
  />
</div>
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
<PuikAvatar
  :id="args.id"
  :color="args.color"
  :size="args.size"
  :type="args.type"
  :mode="args.mode"
  :src="args.src"
  :alt="args.alt"
  :icon="args.icon"
  :firstname="args.firstname"
  :lastname="args.lastname"
/>
<!--HTML/CSS Snippet-->
        `,
        language: 'html',
      },
    },
  },
}

export const Size = {
  render: SizeTemplate,
  args: {},
  parameters: {
    docs: {
      source: {
        code: `
<!--VueJS Snippet-->
<!-- $colors: ${avatarColorsSummary} -->
<!-- $types: ${avatarTypesSummary} -->

<PuikAvatar
  :size="{$color}"
  :type="{$type}"
/>
<!--HTML/CSS Snippet-->
`,
        language: 'html',
      },
    },
  },
}
