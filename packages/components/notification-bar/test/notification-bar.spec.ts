import { mount, ComponentMountingOptions, VueWrapper } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import { PuikNotificationBar, NotificationBarProps } from '@prestashopcorp/puik-components';

let wrapper: VueWrapper<any>;
const factory = (
  props?: NotificationBarProps,
  options?: ComponentMountingOptions<typeof PuikNotificationBar>
) => {
  wrapper = mount(PuikNotificationBar, {
    props,
    ...options
  });
};

const Defaultmessage = [{ text: 'This is a test message' }];

describe('NotificationBar tests', () => {
  it('should be a vue instance', () => {
    factory();
    expect(wrapper).toBeTruthy();
  });

  it('should accept teleport prop', () => {
    const teleport = { to: 'body', prepend: true };
    factory({ teleport, messages: Defaultmessage });
    expect(wrapper.props().teleport).toEqual(teleport);
  });

  it('should accept variant prop', () => {
    const variant = 'blue';
    factory({ variant, messages: Defaultmessage });
    expect(wrapper.props().variant).toBe(variant);
  });

  it('should accept closable prop', () => {
    const closable = true;
    factory({ closable, messages: Defaultmessage });
    expect(wrapper.props().closable).toBe(closable);
  });

  it('should accept messages prop', () => {
    const messages = [
      {
        icon: 'info',
        text: 'This is a test message',
        link: { url: 'https://test.com', text: 'Test Link' }
      }
    ];
    factory({ messages });
    expect(wrapper.props().messages).toEqual(messages);
  });

  it('should emit close event when close button is clicked', async () => {
    factory({ closable: true, messages: Defaultmessage });
    await wrapper.find('.notification-bar__close-button').trigger('click');
    expect(wrapper.emitted()).toHaveProperty('close');
  });

  it('should have correct classes based on props', () => {
    factory({
      variant: 'blue',
      closable: true,
      messages: Defaultmessage
    });
    expect(wrapper.find('.notification-bar__container').classes()).toContain(
      'notification-bar__container--blue'
    );
    expect(wrapper.find('.notification-bar__container').classes()).toContain(
      'notification-bar__container--closable'
    );
  });
});
