import { mount, ComponentMountingOptions, VueWrapper, flushPromises } from '@vue/test-utils';
import { describe, it, expect, afterEach } from 'vitest';
import {
  PuikModal,
  PuikModalVariants,
  PuikModalSizes,
  PuikModalActions,
  PuikModalClose,
  PuikModalContent,
  PuikModalHeader,
  PuikModalTrigger,
  PuikButton
} from '@prestashopcorp/puik-components';
import { nextTick } from 'vue';

describe('Modal tests', () => {
  let wrapper: VueWrapper<any>;

  const findModal = () => document.querySelector('.puik-modal');
  const findIcon = () =>
    document.querySelector('.puik-modal__header__icon');
  const findCloseButton = () =>
    document.querySelector<HTMLButtonElement>('.puik-modal__close');
  const findTitle = () => document.querySelector('.puik-modal__header .puik-h2');
  const findActions = () => document.querySelector('.puik-modal__actions');
  const findButtons = () => document.querySelectorAll('.puik-modal__actions .puik-button');
  const homeTitleIcon = 'home';

  afterEach(() => {
    document.body.outerHTML = '';
  });

  const factory = (
    template: string,
    options?: ComponentMountingOptions<typeof PuikModal>
  ) => {
    wrapper = mount({
      template,
      attachTo: document.body,
      components: {
        PuikModal,
        PuikModalContent,
        PuikModalTrigger,
        PuikModalActions,
        PuikModalClose,
        PuikModalHeader,
        PuikButton
      },
      ...options
    });
  };

  it('should be a vue instance', async () => {
    factory(`
    <PuikModal :open="true">
      <PuikModalContent>
        <PuikModalHeader>Title</PuikModalHeader>
      </PuikModalContent>
    </PuikModal>`);
    await nextTick();

    expect(wrapper).toBeTruthy();
    expect(findIcon()).toBeFalsy();
    expect(findCloseButton()).toBeTruthy();
    expect(findModal()?.className).toContain('puik-modal--medium');
  });

  it('should display destructive style', async () => {
    factory(`
    <PuikModal :open="true" variant="${PuikModalVariants.Destructive}">
      <PuikModalContent>
        <PuikModalHeader>Title</PuikModalHeader>
      </PuikModalContent>
    </PuikModal>`);
    await nextTick();

    expect(findIcon()?.textContent).toBe('warning');
    expect(findIcon()?.className).toContain('puik-modal__header__icon--destructive');
    expect(findCloseButton()).toBeTruthy();
  });

  it('should display feedback style', async () => {
    factory(`
    <PuikModal :open="true" variant="${PuikModalVariants.Feedback}">
      <PuikModalContent>
        <PuikModalHeader icon="home">Title</PuikModalHeader>
      </PuikModalContent>
    </PuikModal>`);
    await nextTick();

    expect(findIcon()?.textContent).toBe(homeTitleIcon);
    expect(findCloseButton()).toBeTruthy();
  });

  it('should display dialog style', async () => {
    factory(`
    <PuikModal :open="true" variant="${PuikModalVariants.Dialog}">
      <PuikModalContent>
        <PuikModalHeader icon="home">Title</PuikModalHeader>
      </PuikModalContent>
    </PuikModal>`);
    await nextTick();

    expect(findIcon()?.textContent).toBe(homeTitleIcon);
    expect(findCloseButton()).toBeFalsy();
  });

  it('should display with the large size', async () => {
    factory(`
    <PuikModal :open="true" size="${PuikModalSizes.Large}">
      <PuikModalContent>
        <PuikModalHeader icon="home">Title</PuikModalHeader>
      </PuikModalContent>
    </PuikModal>`);
    await nextTick();

    expect(findModal()?.className).toContain('puik-modal--large');
  });

  it('should display with the small size', async () => {
    factory(`
    <PuikModal :open="true" size="${PuikModalSizes.Small}">
      <PuikModalContent>
        <PuikModalHeader icon="home">Title</PuikModalHeader>
      </PuikModalContent>
    </PuikModal>`);
    await nextTick();

    expect(findModal()?.className).toContain('puik-modal--small');
  });

  it('should display the close button and send close event when clicked', async () => {
    factory(`
    <PuikModal :open="true">
      <PuikModalContent>
        <PuikModalHeader>Title</PuikModalHeader>
      </PuikModalContent>
    </PuikModal>`);
    await nextTick();

    expect(findCloseButton()).toBeTruthy();

    await findCloseButton()?.click();
    expect(wrapper.findComponent(PuikModalContent).emitted('closed')).toBeTruthy();
  });

  it('should have a data-test attribute on title and closeButton', async () => {
    factory(`
    <PuikModal :open="true" data-test="test">
      <PuikModalContent>
        <PuikModalHeader icon="home">Title</PuikModalHeader>
      </PuikModalContent>
    </PuikModal>`);
    await nextTick();
    expect(findTitle()?.getAttribute('data-test')).toBe('title-test');
    expect(findCloseButton()?.getAttribute('data-test')).toBe('closeButton-test');
  });

  it('should open the modal using the PuikModalTrigger component', async () => {
    factory(`
    <PuikModal>
      <PuikModalTrigger>
        <button class="open-modal">Open modal</button>
      </PuikModalTrigger>
      <PuikModalContent>
        <PuikModalHeader icon="home">Title</PuikModalHeader>
      </PuikModalContent>
    </PuikModal>`);

    await wrapper.find('.open-modal').trigger('click');
    await nextTick();
    expect(findModal()).toBeTruthy();
  });

  it('should open the modal using the open v-model/prop', async () => {
    factory(`
    <button class="open-modal" @click="open = true">Open modal</button>
    <PuikModal v-model:open="open">
      <PuikModalContent>
        <PuikModalHeader icon="home">Title</PuikModalHeader>
      </PuikModalContent>
    </PuikModal>`, {
      data() {
        return {
          open: false
        };
      }
    });

    await wrapper.find('.open-modal').trigger('click');
    await nextTick();
    expect(findModal()).toBeTruthy();
  });

  it('should display the PuikModalActions component and two buttons', async () => {
    factory(`
    <PuikModal :open="true">
      <PuikModalContent>
        <PuikModalHeader icon="home">Title</PuikModalHeader>
        <PuikModalActions>
          <PuikButton variant="secondary">Secondary button</PuikButton>
          <PuikButton>Primary button</PuikButton>
        </PuikModalActions>
      </PuikModalContent>
    </PuikModal>`);

    await nextTick();
    expect(findActions()).toBeTruthy();
    expect(findButtons().length).toBe(2);
  });

  it('should close the modal when clicking on the close button', async () => {
    factory(`
    <PuikModal>
      <PuikModalTrigger>
        <button class="open-modal">Open modal</button>
      </PuikModalTrigger>
      <PuikModalContent>
        <PuikModalHeader icon="home">Title</PuikModalHeader>
      </PuikModalContent>
    </PuikModal>`);

    await wrapper.find('.open-modal').trigger('click');
    await nextTick();
    expect(findModal()).toBeTruthy();
    await findCloseButton()?.click();
    await flushPromises();
    expect(findModal()).toBeFalsy();
  });

  it('should close the modal when clicking on the PuikModalClose', async () => {
    factory(`
    <PuikModal>
      <PuikModalTrigger>
        <button class="open-modal">Open modal</button>
      </PuikModalTrigger>
      <PuikModalContent>
        <PuikModalHeader icon="home">Title</PuikModalHeader>
        <PuikModalActions>
          <PuikModalClose>
            <PuikButton class="close-modal" variant="secondary">Close</PuikButton>
          </PuikModalClose>
          <PuikButton>Primary button</PuikButton>
        </PuikModalActions>
      </PuikModalContent>
    </PuikModal>`);

    await wrapper.find('.open-modal').trigger('click');
    await nextTick();
    expect(findModal()).toBeTruthy();
    await document.querySelector<HTMLButtonElement>('.close-modal')?.click();
    await flushPromises();
    expect(findModal()).toBeFalsy();
  });
});
