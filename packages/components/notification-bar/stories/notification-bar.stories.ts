import { PuikNotificationBar, PuikNotificationBarVariants } from '@prestashopcorp/puik-components';
import type { Meta, StoryFn, Args } from '@storybook/vue3';

const notificationBarVariants = Object.values(PuikNotificationBarVariants);
const notificationBarVariantsSummary = notificationBarVariants.join('|');

export default {
  title: 'Components/NotificationBar',
  component: PuikNotificationBar,
  argTypes: {
    teleport: {
      required: false,
      description:
        'Allows the element to be teleported to a node outside of Vue',
      control: 'none',
      table: {
        type: {
          summary: 'NotificationBarTeleport',
          detail: `
// Import
import type { NotificationBarTeleport } from '@prestashopcorp/puik-components';

// Detail
interface NotificationBarTeleport {
  to: string
  prepend?: boolean
}
          `
        },
        defaultValue: {
          summary: null
        }
      }
    },
    variant: {
      required: false,
      description: 'Variant background',
      control: 'select',
      options: notificationBarVariants,
      table: {
        type: {
          summary: notificationBarVariantsSummary,
          detail: `
// Import
import { PuikNotificationBarVariants } from '@prestashopcorp/puik-components';

// Detail
enum PuikNotificationBarVariants {
  Blue = 'blue',
  Purple = 'purple',
  Yellow = 'yellow',
  Green = 'green',
}
          `
        },
        defaultValue: {
          summary: 'blue'
        }
      }
    },
    closable: {
      required: false,
      description: 'Allows you to make the notification bar closable.',
      control: 'boolean',
      table: {
        defaultValue: {
          summary: true
        }
      }
    },
    messages: {
      required: true,
      description: 'Messages to display.',
      control: 'object',
      table: {
        type: {
          summary: 'PuikMessagesType',
          detail: `
// Import
import { NotificationBarMessage, PuikMessagesType } from '@prestashopcorp/puik-components';

// Details
type PuikMessagesType = NotificationBarMessage[]
interface NotificationBarMessage {
  icon?: string
  text: string
  link?: NotificationLink
}
          `
        },
        defaultValue: {
          summary: null
        }
      }
    },
    close: {
      description:
        'Callback function triggered when the notification bar is closed.',
      action: 'close'
    }
  },
  args: {
    variant: PuikNotificationBarVariants.Blue,
    closable: true,
    messages: [
      {
        icon: 'sentiment_satisfied',
        text: 'Promo thèmes: profitez de -20% sur tous les thèmes PrestaShop',
        link: { url: '#', text: "J'en profite" }
      }
    ]
  }
} as Meta;

const Template: StoryFn = (args: Args) => ({
  args: {},
  components: {
    PuikNotificationBar
  },
  setup() {
    return { args };
  },
  template: '<puik-notification-bar v-bind="args"></puik-notification-bar>'
});

export const Default = {
  render: Template,
  args: {},
  parameters: {
    docs: {
      source: {
        code: `
  <!--VueJS Snippet-->
  const messages: PuikMessagesType = [
    {
      icon: "sentiment_satisfied",
      text: "Promo thèmes: profitez de -20% sur tous les thèmes PrestaShop",
      link: {
        url: "#",
        text: "J'en profite",
      },
    },
  ]

  <puik-notification-bar
      :teleport="null"
      variant="blue"
      closable
      :messages="messages"
  />

  <!--HTML/CSS Snippet-->
  <div class="puik-notification-bar">
      <aside class="puik-notification-bar__container puik-notification-bar__container--blue puik-notification-bar__container--closable">
          <div class="puik-notification-bar__item">
              <div class="puik-icon puik-notification-bar-item__icon" style="font-size: 1.5rem;">sentiment_satisfied</div>
              <div class="puik-notification-bar-item__content">
                  <p class="puik-notification-bar-item__text">Promo thèmes: profitez de -20% sur tous les thèmes PrestaShop</p>
                  <a href="#" class="puik-button puik-button--primary puik-button--md puik-notification-bar-item__link" disabled="false">J'en profite
                      <div class="puik-icon puik-button__right-icon" style="font-size: 1.25rem;">arrow_forward</div>
                  </a>
              </div>
          </div>
          <button class="puik-button puik-button--text puik-button--md puik-notification-bar__close-button">
              <div class="puik-icon puik-notification-bar-close-button__icon" style="font-size: 1.5rem;">close</div>
          </button>
      </aside>
  </div>
        `,
        language: 'html'
      }
    }
  }
};

export const Purple = {
  render: Template,
  args: {
    variant: PuikNotificationBarVariants.Purple
  },
  parameters: {}
};

export const Yellow = {
  render: Template,
  args: {
    variant: PuikNotificationBarVariants.Yellow
  },
  parameters: {}
};

export const Green = {
  render: Template,
  args: {
    variant: PuikNotificationBarVariants.Green
  },
  parameters: {}
};

export const NotClosable = {
  render: Template,
  args: {
    closable: false
  },
  parameters: {}
};

export const MultipleMessages = {
  render: Template,
  args: {
    messages: [
      {
        icon: 'sentiment_satisfied',
        text: 'Promo thèmes: profitez de -20% sur tous les thèmes PrestaShop',
        link: { url: '#', text: "J'en profite" }
      },
      {
        icon: 'sentiment_satisfied',
        text: 'FME modules = -30% de réduction sur leur catalogue du 27 février au 5 mars',
        link: { url: '#', text: "J'en profite" }
      }
    ]
  },
  parameters: {}
};
