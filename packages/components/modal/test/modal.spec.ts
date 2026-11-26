import { mount, ComponentMountingOptions, VueWrapper } from '@vue/test-utils';
import { describe, it, expect, afterEach } from 'vitest';
import { nextTick } from 'vue';
import {
  PuikModal,
  PuikModalVariants,
  type ModalProps
} from '@prestashopcorp/puik-components';

global.ResizeObserver = class FakeResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
};

describe('Modal tests', () => {
  let wrapper: VueWrapper<any>;

  const query = <T extends Element = HTMLElement>(selector: string) =>
    document.body.querySelector<T>(selector);

  const findHeaderIcon = () =>
    query('.puik-modal__dialogPanelContainer__dialogPanel__header__icon');
  const findTitle = () =>
    query('.puik-modal__dialogPanelContainer__dialogPanel__header__title');
  const findCloseButton = () =>
    query(
      '.puik-modal__dialogPanelContainer__dialogPanel__header__close-button'
    );
  const findSecondButton = () =>
    query(
      '.puik-modal__dialogPanelContainer__dialogPanel__footer__button--second'
    );

  const factory = async (
    props: ModalProps = {},
    options?: ComponentMountingOptions<typeof PuikModal>
  ) => {
    wrapper = mount(PuikModal, {
      props: {
        isOpen: true,
        title: 'Modal title',
        ...props
      },
      attachTo: document.body,
      ...options
    });

    // the dialog is teleported to a portal root on the next tick
    await nextTick();
  };

  afterEach(() => {
    wrapper?.unmount();
    document.body.innerHTML = '';
  });

  it('should be a vue instance, the default one', async () => {
    await factory();
    expect(wrapper).toBeTruthy();
  });

  describe('header icon', () => {
    it('should display no icon by default', async () => {
      await factory();
      expect(findHeaderIcon()).toBeNull();
    });

    it('should display the titleIcon when provided', async () => {
      await factory({ titleIcon: 'home' });
      expect(findHeaderIcon()?.textContent?.trim()).toBe('home');
    });

    it('should fall back to the warning icon on the destructive variant', async () => {
      await factory({ variant: PuikModalVariants.Destructive });
      expect(findHeaderIcon()?.textContent?.trim()).toBe('warning');
    });

    it('should let titleIcon override the destructive icon', async () => {
      await factory({
        variant: PuikModalVariants.Destructive,
        titleIcon: 'delete'
      });
      expect(findHeaderIcon()?.textContent?.trim()).toBe('delete');
    });
  });

  describe('title', () => {
    const longTitle =
      'A very long modal title that is expected to wrap on several lines instead of being truncated';

    it('should render the title in a heading, without a tooltip', async () => {
      await factory({ title: longTitle });

      const title = findTitle();
      expect(title?.tagName).toBe('H2');
      expect(title?.textContent?.trim()).toBe(longTitle);
      expect(query('.puik-tooltip')).toBeNull();
    });

    it('should not truncate the title', async () => {
      await factory({ title: longTitle });

      const classes = findTitle()?.className ?? '';
      expect(classes).not.toContain('text-ellipsis');
      expect(classes).not.toContain('whitespace-nowrap');
      expect(classes).not.toContain('truncate');
    });
  });

  describe('close button', () => {
    it('should emit close on click', async () => {
      await factory();

      const closeButton = findCloseButton();
      expect(closeButton).not.toBeNull();
      closeButton?.dispatchEvent(new MouseEvent('click', { bubbles: true }));
      await wrapper.vm.$nextTick();

      expect(wrapper.emitted('close')).toBeTruthy();
    });

    it('should not be displayed on the dialog variant', async () => {
      await factory({ variant: PuikModalVariants.Dialog });
      expect(findCloseButton()).toBeNull();
    });
  });

  describe('second button variant', () => {
    it('should be a text button on the feedback variant', async () => {
      await factory({
        variant: PuikModalVariants.Feedback,
        secondButtonText: 'Cancel'
      });
      expect(findSecondButton()?.className).toContain('puik-button--text');
    });

    it('should be a text button on the destructive variant', async () => {
      await factory({
        variant: PuikModalVariants.Destructive,
        secondButtonText: 'Cancel'
      });
      expect(findSecondButton()?.className).toContain('puik-button--text');
    });

    it('should stay a secondary button on the dialog variant', async () => {
      await factory({
        variant: PuikModalVariants.Dialog,
        secondButtonText: 'Cancel'
      });
      expect(findSecondButton()?.className).toContain('puik-button--secondary');
    });
  });
});
