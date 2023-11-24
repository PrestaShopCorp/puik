import { ref } from 'vue';
import { PuikIcon, PuikAvatar, PuikAvatarMode, PuikAvatarSize, PuikAvatarType } from '@prestashopcorp/puik-components';
import type { Meta, StoryFn, Args } from '@storybook/vue3';

const avatarModes = Object.values(PuikAvatarMode);
const avatarSizes = Object.values(PuikAvatarSize);
const avatarTypes = Object.values(PuikAvatarType);
const avatarModesSummary = avatarModes.join('|');
const avatarSizesSummary = avatarSizes.join('|');
const avatarTypesSummary = avatarTypes.join('|');

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
          summary: 'string'
        },
        defaultValue: {
          summary: 'undefined'
        }
      }
    },
    mode: {
      description:
        'Two possible variations (primary and reverse) : depending on a dark or light background of the container where the avatar is placed',
      control: 'select',
      options: avatarModes,
      table: {
        type: {
          summary: avatarModesSummary
        },
        defaultValue: {
          summary: 'primary'
        }
      }
    },
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
    type: {
      description: 'Content type of avatar (initials, image or icon)',
      control: 'select',
      options: avatarTypes,
      table: {
        type: {
          summary: avatarTypesSummary
        },
        defaultValue: {
          summary: 'initials'
        }
      }
    },
    icon: {
      description: 'Material icon name (cf https://fonts.google.com/icons)',
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
    firstName: {
      description:
        'If avatar type prop is set to "initials". The "initials" type is composed of two letters max (first letter of firstName prop corresponds to the first). NB: if the lastName prop is missing then the initials will be the first two letters of the firstName prop in the case where the singleInitial prop is false. Special characters are removed',
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
    lastName: {
      description:
        'If avatar type prop is set to "initials". The "initials" type is composed of two letters max (first letter of lastName corresponds to the last). NB : if the firstName prop is missing then the initials will be the first two letters of the lastName prop in the case where the singleInitial prop is false. Special characters are removed.',
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
    singleInitial: {
      description:
        'Initials match a single letter (first letter of firstName. If the firstName conditions are not met this is the first letter of lastName). NB: if the conditions for the firstName and lastName props are not met then the default value is "P" (singleInitial set to true) or "PS" (singleInitial set to false).',
      table: {
        defaultValue: {
          summary: false
        }
      }
    },
    dataTest: {
      control: 'text',
      description:
        'Set the data-test attribute for the avatar `image-${dataTest}` `icon-${dataTest}` `initials-${dataTest}`'
    }
  },
  args: {
    id: 'puik-avatar-id',
    mode: 'primary',
    size: 'medium',
    type: 'initials',
    icon: 'home',
    src: 'https://picsum.photos/200',
    alt: 'puik-avatar-alt',
    firstName: 'Presta',
    lastName: 'Shop',
    singleInitial: false,
    dataTest: undefined
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
  <PuikAvatar
    type="initials"
    :firstName="args.firstName"
    :lastName="args.lastName"
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
        type: 'initials',
        size: 'small'
      },
      {
        type: 'initials',
        size: 'medium'
      },
      {
        type: 'initials',
        size: 'large'
      },
      {
        type: 'initials',
        size: 'jumbo'
      },
      {
        type: 'icon',
        size: 'small',
        icon: 'home'
      },
      {
        type: 'icon',
        size: 'medium',
        icon: 'home'
      },
      {
        type: 'icon',
        size: 'large',
        icon: 'home'
      },
      {
        type: 'icon',
        size: 'jumbo',
        icon: 'home'
      },
      {
        type: 'photo',
        size: 'small',
        src: 'https://picsum.photos/200'
      },
      {
        type: 'photo',
        size: 'medium',
        src: 'https://picsum.photos/200'
      },
      {
        type: 'photo',
        size: 'large',
        src: 'https://picsum.photos/200'
      },
      {
        type: 'photo',
        size: 'jumbo',
        src: 'https://picsum.photos/200'
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
    :type="avatar.type"
    :icon="avatar.icon"
    :src="avatar.src"
  />
</div>
`
});

const ModesTemplate: StoryFn = (args: Args) => ({
  components: {
    PuikIcon,
    PuikAvatar
  },
  setup() {
    const avatarsPrimary = ref([
      {
        type: 'initials',
        mode: 'primary'
      },
      {
        type: 'icon',
        mode: 'primary',
        icon: 'home'
      }
    ]);

    const avatarsReverse = ref([
      {
        type: 'initials',
        mode: 'reverse'
      },
      {
        type: 'icon',
        mode: 'reverse',
        icon: 'home'
      }
    ]);

    return { avatarsPrimary, avatarsReverse, args };
  },
  template: `
<div class="flex space-x-2" style="margin-bottom: 1rem; padding: 1rem;">
  <puik-avatar
    v-for="(avatar, index) in avatarsPrimary"
    :key="index"
    :type="avatar.type"
    :mode="avatar.mode"
    :icon="avatar.icon"
  />
</div>
<div class="flex space-x-2" style="padding: 1rem; background-color: black;">
  <puik-avatar
    v-for="(avatar, index) in avatarsReverse"
    :key="index"
    :type="avatar.type"
    :mode="avatar.mode"
    :icon="avatar.icon"
  />
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
  :id="args.id"
  :size="args.size"
  :type="args.type"
  :mode="args.mode"
  :src="args.src"
  :alt="args.alt"
  :icon="args.icon"
  :firstName="args.firstName"
  :lastName="args.lastName"
/>

<!-- HTML/CSS Snippet -->
<!-- Avatar (by default) -->
<div id="puik-avatar-id" class="puik-avatar puik-avatar--medium puik-avatar--initials puik-avatar--primary">
  <div class="puik-avatar_initials puik-avatar_initials--medium">
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
<div class="puik-avatar puik-avatar--medium puik-avatar--initials puik-avatar--primary">
  <div class="puik-avatar_initials puik-avatar_initials--medium">
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
<div class="puik-avatar puik-avatar--medium puik-avatar--photo puik-avatar--primary">
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
<!-- $types: ${avatarTypesSummary} -->

<PuikAvatar
  :size="{$size}"
  :type="{$type}"
/>

<!-- HTML/CSS Snippet -->
<!-- initials type -->
<div class="puik-avatar puik-avatar--{$size} puik-avatar--initials puik-avatar--primary">
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
<div class="puik-avatar puik-avatar--{$size} puik-avatar--icon puik-avatar--primary">
  <div class="puik-icon" style="font-size: {$iconFontSize}; color: white;">
    home
  </div>
</div>
<!-- photo type -->
<div class="puik-avatar puik-avatar--{$size} puik-avatar--photo puik-avatar--primary">
  <img src="https://picsum.photos/200" alt="puik-avatar-alt">
</div>
`,
        language: 'html'
      }
    }
  }
};

export const Modes = {
  render: ModesTemplate,
  args: {},
  parameters: {
    docs: {
      source: {
        code: `
<!-- VueJS Snippet -->
<!-- $modes: ${avatarModesSummary} -->

<puik-avatar :mode="{$mode}"/>

<!-- HTML/CSS Snippet -->
<!-- initials type -->
<div class="puik-avatar puik-avatar--medium puik-avatar--initials puik-avatar--{$mode}">
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
<div class="puik-avatar puik-avatar--medium puik-avatar--icon puik-avatar--{$mode}">
  <div class="puik-icon" style="font-size: 1.5rem; color: {$iconColor};">
    home
  </div>
</div>
`,
        language: 'html'
      }
    }
  }
};
