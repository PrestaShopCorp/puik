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

const TypesTemplate: StoryFn = (args: Args) => ({
  components: {
    PuikIcon,
    PuikAvatar,
  },
  setup() {
    return { args }
  },
  template: `
<div class="flex space-x-2">
  <PuikAvatar
    type="initials"
    :firstname="args.firstname"
    :lastname="args.lastname"
  />
  <PuikAvatar
    type="icon"
    :icon="args.icon"
  />
  <PuikAvatar
    type="photo"
    :src="args.src"
    :alt="args.alt"
  />
</div>
`,
})

const SizesTemplate: StoryFn = (args: Args) => ({
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

const ModesAndColorsTemplate: StoryFn = (args: Args) => ({
  components: {
    PuikIcon,
    PuikAvatar,
  },
  setup() {
    const avatarsPrimary = ref([
      {
        type: 'initials',
        mode: 'primary',
        color: 'neutral',
      },
      {
        type: 'initials',
        mode: 'primary',
        color: 'blue',
      },
      {
        type: 'initials',
        mode: 'primary',
        color: 'yellow',
      },
      {
        type: 'initials',
        mode: 'primary',
        color: 'green',
      },
      {
        type: 'initials',
        mode: 'primary',
        color: 'purple',
      },
      {
        type: 'icon',
        mode: 'primary',
        color: 'neutral',
        icon: 'home',
      },
      {
        type: 'icon',
        mode: 'primary',
        color: 'blue',
        icon: 'home',
      },
      {
        type: 'icon',
        mode: 'primary',
        color: 'yellow',
        icon: 'home',
      },
      {
        type: 'icon',
        mode: 'primary',
        color: 'green',
        icon: 'home',
      },
      {
        type: 'icon',
        mode: 'primary',
        color: 'purple',
        icon: 'home',
      },
    ])

    const avatarsReverse = ref([
      {
        type: 'initials',
        mode: 'reverse',
        color: 'neutral',
      },
      {
        type: 'initials',
        mode: 'reverse',
        color: 'blue',
      },
      {
        type: 'initials',
        mode: 'reverse',
        color: 'yellow',
      },
      {
        type: 'initials',
        mode: 'reverse',
        color: 'green',
      },
      {
        type: 'initials',
        mode: 'reverse',
        color: 'purple',
      },
      {
        type: 'icon',
        mode: 'reverse',
        color: 'neutral',
        icon: 'home',
      },
      {
        type: 'icon',
        mode: 'reverse',
        color: 'blue',
        icon: 'home',
      },
      {
        type: 'icon',
        mode: 'reverse',
        color: 'yellow',
        icon: 'home',
      },
      {
        type: 'icon',
        mode: 'reverse',
        color: 'green',
        icon: 'home',
      },
      {
        type: 'icon',
        mode: 'reverse',
        color: 'purple',
        icon: 'home',
      },
    ])

    return { avatarsPrimary, avatarsReverse, args }
  },
  template: `
<div class="flex space-x-2" style="margin-bottom: 1rem; padding: 1rem;">
  <puik-avatar
    v-for="(avatar, index) in avatarsPrimary"
    :key="index"
    :type="avatar.type"
    :mode="avatar.mode"
    :color="avatar.color"
    :icon="avatar.icon"
  />
</div>
<div class="flex space-x-2" style="padding: 1rem; background-color: black;">
  <puik-avatar
    v-for="(avatar, index) in avatarsReverse"
    :key="index"
    :type="avatar.type"
    :mode="avatar.mode"
    :color="avatar.color"
    :icon="avatar.icon"
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
<!-- VueJS Snippet -->
<!-- Vue component with all possible props -->
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

<!-- HTML/CSS Snippet -->
<!-- Avatar (by default) -->
<div id="puik-avatar-id" class="puik-avatar puik-avatar--medium puik-avatar--initials puik-avatar--primary puik-avatar--neutral">
  <div class="puik-avatar_initials puik-avatar_initials--medium">
    PS
  </div>
</div>
        `,
        language: 'html',
      },
    },
  },
}

export const Types = {
  render: TypesTemplate,
  args: {},
  parameters: {
    docs: {
      source: {
        code: `
<!-- VueJS Snippet -->
<!-- initials type -->
<PuikAvatar
  type="initials"
  :firstname="args.firstname"
  :lastname="args.lastname"
/>
<!-- icon type -->
<PuikAvatar
  type="icon"
  :icon="args.icon"
/>
<!-- photo type -->
<PuikAvatar
  type="photo"
  :src="args.src"
  :alt="args.alt"
/>

<!-- HTML/CSS Snippet -->
<!-- type initials-->
<div class="puik-avatar puik-avatar--medium puik-avatar--initials puik-avatar--primary puik-avatar--neutral">
  <div class="puik-avatar_initials puik-avatar_initials--medium">
    PS
  </div>
</div>
<!-- type icon-->
<div class="puik-avatar puik-avatar--medium puik-avatar--icon puik-avatar--primary puik-avatar--neutral">
  <div class="puik-icon" style="font-size: 1.5rem; color: white;">
    home
  </div>
</div>
<!-- type photo-->
<div class="puik-avatar puik-avatar--medium puik-avatar--photo puik-avatar--primary puik-avatar--neutral">
  <img src="https://picsum.photos/200" alt="puik-avatar-alt">
</div>
        `,
        language: 'html',
      },
    },
  },
}

export const Sizes = {
  render: SizesTemplate,
  args: {},
  parameters: {
    docs: {
      source: {
        code: `
<!-- VueJS Snippet -->
<!-- $sizes: ${avatarSizesSummary} -->
<!-- $types: ${avatarTypesSummary} -->

<PuikAvatar
  :size="{$size}"
  :type="{$type}"
/>

<!-- HTML/CSS Snippet -->
<!-- initials type -->
<div class="puik-avatar puik-avatar--{$size} puik-avatar--initials puik-avatar--primary puik-avatar--neutral">
  <div class="puik-avatar_initials puik-avatar_initials--{$size}">
    PS
  </div>
</div>
<!-- icon type -->
<!-- 
NB: values of {$iconFontSize} to apply depending on the prop size:
  small = 1rem
  medium = 1.5rem
  large = 2rem
  jumbo = 2.8rem
-->
<div class="puik-avatar puik-avatar--{$size} puik-avatar--icon puik-avatar--primary puik-avatar--neutral">
  <div class="puik-icon" style="font-size: {$iconFontSize}; color: white;">
    home
  </div>
</div>
<!-- photo type -->
<div class="puik-avatar puik-avatar--{$size} puik-avatar--photo puik-avatar--primary puik-avatar--neutral">
  <img src="https://picsum.photos/200" alt="puik-avatar-alt">
</div>
`,
        language: 'html',
      },
    },
  },
}

export const ModesAndColors = {
  render: ModesAndColorsTemplate,
  args: {},
  parameters: {
    docs: {
      source: {
        code: `
<!-- VueJS Snippet -->
<!-- $colors: ${avatarColorsSummary} -->
<!-- $modes: ${avatarModesSummary} -->

<puik-avatar
  :mode="{$mode}"
  :color="{$color}"
/>

<!-- HTML/CSS Snippet -->
<!-- initials type -->
<div class="puik-avatar puik-avatar--medium puik-avatar--initials puik-avatar--{$mode} puik-avatar--{$color}">
  <div class="puik-avatar_initials puik-avatar_initials--{$mode}">
    PS
  </div>
</div>
<!-- icon type -->
<!--
NB: values of {$iconColor} to apply depending on the prop mode:
  primary = white
  reverse = black
-->
<div class="puik-avatar puik-avatar--medium puik-avatar--icon puik-avatar--{$mode} puik-avatar--{$color}">
  <div class="puik-icon" style="font-size: 1.5rem; color: {$iconColor};">
    home
  </div>
</div>
`,
        language: 'html',
      },
    },
  },
}
