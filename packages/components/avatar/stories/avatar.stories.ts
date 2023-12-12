import { ref } from 'vue';
import { PuikIcon, PuikAvatar, PuikAvatarSizes, PuikAvatarVariants } from '@prestashopcorp/puik-components';
import type { Meta, StoryFn, Args } from '@storybook/vue3';

const avatarSizes = Object.values(PuikAvatarSizes);
const avatarSizesSummary = avatarSizes.join('|');
const avatarVariants = Object.values(PuikAvatarVariants);
const avatarVariantsSummary = avatarSizes.join('|');

export default {
  title: 'Components/Avatar',
  component: PuikAvatar,
  argTypes: {
    size: {
      description:
        'Size variants of avatar component (small, medium, large, jumbo)',
      control: 'select',
      options: avatarSizes,
      table: {
        type: {
          summary: avatarSizesSummary
        },
        defaultValue: {
          summary: 'medium'
        }
      }
    },
    variants: {
      description:
        'Two possible variations (primary and reverse) : depending on a dark or light background of the container where the avatar is placed',
      control: 'select',
      options: avatarVariants,
      table: {
        type: {
          summary: avatarVariantsSummary
        },
        defaultValue: {
          summary: 'primary'
        }
      }
    },
    src: {
      description: 'Image source if avatar type is set to "photo"',
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
    alt: {
      description: 'Image alt attribute if avatar type prop is set to "photo"',
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
    dataTest: {
      control: 'text',
      description:
        'Set the data-test attribute for the avatar `image-${dataTest}` `icon-${dataTest}` `initials-${dataTest}`'
    },
    fallback: {
      control: 'text',
      description: 'Avatar fallback slot when the user doesn\'t have a picture or if the picture fails to load',
      table: {
        defaultValue: {
          summary: 'PS'
        }
      }
    }
  },
  args: {
    variant: 'primary',
    size: 'medium',
    src: 'https://picsum.photos/id/64/200',
    alt: 'puik-avatar-alt',
    dataTest: undefined,
    fallback: ''
  }
} as Meta;

const DefaultTemplate: StoryFn = (args: Args) => ({
  components: {
    PuikIcon,
    PuikAvatar
  },
  setup() {
    return { args };
  },
  template: `
<PuikAvatar v-bind="args" />
`
});

const TypesTemplate: StoryFn = (args: Args) => ({
  components: {
    PuikIcon,
    PuikAvatar
  },
  setup() {
    return { args };
  },
  template: `
<div class="flex space-x-2">
  <PuikAvatar>
    <template #fallback>
      AB
    </template>
  </PuikAvatar>
  <PuikAvatar>
    <template #fallback>
      <PuikIcon icon="home" />
    </template>
  </PuikAvatar>
  <PuikAvatar
    type="photo"
    :src="args.src"
    :alt="args.alt"
  />
</div>
`
});

const SizesTemplate: StoryFn = (args: Args) => ({
  components: {
    PuikIcon,
    PuikAvatar
  },
  setup() {
    const avatars = ref([
      {
        size: 'small'
      },
      {
        size: 'medium'
      },
      {
        size: 'large'
      },
      {
        size: 'jumbo'
      },
      {
        size: 'small',
        src: 'https://picsum.photos/id/64/200'
      },
      {
        size: 'medium',
        src: 'https://picsum.photos/id/64/200'
      },
      {
        type: 'photo',
        size: 'large',
        src: 'https://picsum.photos/id/64/200'
      },
      {
        size: 'jumbo',
        src: 'https://picsum.photos/id/64/200'
      }
    ]);
    return { avatars, args };
  },
  template: `
<div class="flex space-x-2">
  <puik-avatar
    v-for="(avatar, index) in avatars"
    :key="index"
    :size="avatar.size"
    :src="avatar.src"
  />
</div>
`
});

const VariantsTemplate: StoryFn = () => ({
  components: {
    PuikIcon,
    PuikAvatar
  },
  template: `
<div class="flex space-x-2" style="margin-bottom: 1rem; padding: 1rem;">
  <PuikAvatar>
    <template #fallback>
      AB
    </template>
  </PuikAvatar>
  <PuikAvatar>
    <template #fallback>
      <PuikIcon icon="home" />
    </template>
  </PuikAvatar>
</div>
<div class="flex space-x-2" style="padding: 1rem; background-color: black;">
  <PuikAvatar variant="reverse">
    <template #fallback>
      AB
    </template>
  </PuikAvatar>
  <PuikAvatar variant="reverse">
    <template #fallback>
      <PuikIcon icon="home" />
    </template>
  </PuikAvatar>
</div>
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
<!-- Vue component with all possible props -->
<PuikAvatar
  :size="args.size"
  :variant="args.mode"
  :src="args.src"
  :alt="args.alt"
/>

<!-- HTML/CSS Snippet -->
<!-- Avatar (by default) -->
<div class="puik-avatar puik-avatar--medium">
  <div class="puik-avatar_fallback puik-avatar_fallback--medium puik-avatar__fallback--primary">
    PS
  </div>
</div>
        `,
        language: 'html'
      }
    }
  }
};

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
  :firstName="args.firstName"
  :lastName="args.lastName"
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
<div class="puik-avatar puik-avatar--medium">
  <div class="puik-avatar_fallback puik-avatar_fallback--medium puik-avatar__fallback--primary">
    PS
  </div>
</div>
<!-- type icon-->
<div class="puik-avatar puik-avatar--medium puik-avatar--icon puik-avatar--primary">
  <div class="puik-icon" style="font-size: 1.5rem; color: white;">
    home
  </div>
</div>
<!-- type photo-->
<div class="puik-avatar puik-avatar--medium">
  <img src="https://picsum.photos/200" alt="puik-avatar-alt">
</div>
        `,
        language: 'html'
      }
    }
  }
};

export const Sizes = {
  render: SizesTemplate,
  args: {},
  parameters: {
    docs: {
      source: {
        code: `
<!-- VueJS Snippet -->
<!-- $sizes: ${avatarSizesSummary} -->

<PuikAvatar
  :size="{$size}"
/>

<!-- HTML/CSS Snippet -->
<div class="puik-avatar puik-avatar--{$size}">
  <div class="puik-avatar_fallback puik-avatar_fallback--{$size} puik-avatar__fallback--primary">
    PS
  </div>
</div>
<div class="puik-avatar puik-avatar--{$size}">
  <img src="https://picsum.photos/200" alt="puik-avatar-alt">
</div>
`,
        language: 'html'
      }
    }
  }
};

export const Variants = {
  render: VariantsTemplate,
  args: {},
  parameters: {
    docs: {
      source: {
        code: `
<!-- VueJS Snippet -->
<!-- $variant: ${avatarVariantsSummary} -->

<puik-avatar :variant="{$variant}"/>

<!-- HTML/CSS Snippet -->
<div class="puik-avatar puik-avatar--medium">
  <div class="puik-avatar_fallback puik-avatar_fallback--medium puik-avatar__fallback--{$variant}">
    PS
  </div>
</div>
`,
        language: 'html'
      }
    }
  }
};
