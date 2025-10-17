import { mount, ComponentMountingOptions, VueWrapper } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import { PuikSnackbar, PuikSnackbarProvider, useSnackbar, PuikSnackbarVariants, PuikSnackbarSwipeAnimations, UseSnackbarProps, SnackbarsState } from '@prestashopcorp/puik-components';
import { ref } from 'vue';

let wrapper: VueWrapper<any>;
const factory = (template: string, options: ComponentMountingOptions<any> = {}) => {
  wrapper = mount({
    components: {
      PuikSnackbarProvider,
      PuikSnackbar
    },
    template,
    ...options
  });
};

describe('Snackbar tests', () => {
  it('should be a vue instance', () => {
    const template = `
    <puik-snackbar-provider>
      <puik-snackbar
        :open="false"
        title="text"
        description="description"
        has-close-button
      >
      </puik-snackbar>
    </puik-snackbar-provider>
    `;
    factory(template);
    expect(wrapper).toBeTruthy();
  });

  it('should have correct open prop', () => {
    const template = `
    <puik-snackbar-provider>
      <puik-snackbar
        :open="false"
        title="text"
        description="description"
        has-close-button
      >
      </puik-snackbar>
    </puik-snackbar-provider>
    `;
    factory(template);
    expect(wrapper.findComponent({ name: 'PuikSnackbar' }).props().open).toBe(false);
  });

  it('should have correct title prop', () => {
    const template = `
    <puik-snackbar-provider>
      <puik-snackbar
        :open="false"
        title="text"
        description="description"
        has-close-button
      >
      </puik-snackbar>
    </puik-snackbar-provider>
    `;
    factory(template);
    expect(wrapper.findComponent({ name: 'PuikSnackbar' }).props().title).toBe('text');
  });

  it('should have correct description prop', () => {
    const template = `
    <puik-snackbar-provider>
      <puik-snackbar
        :open="false"
        title="text"
        description="description"
        has-close-button
      >
      </puik-snackbar>
    </puik-snackbar-provider>
    `;
    factory(template);
    expect(wrapper.findComponent({ name: 'PuikSnackbar' }).props().description).toBe('description');
  });

  it('should have correct duration prop', () => {
    const template = `
    <puik-snackbar-provider>
      <puik-snackbar
        :open="false"
        title="text"
        description="description"
        :duration="10000"
        has-close-button
      >
      </puik-snackbar>
    </puik-snackbar-provider>
    `;
    factory(template);
    expect(wrapper.findComponent({ name: 'PuikSnackbar' }).props().duration).toBe(10000);
  });

  it('should have correct variant prop', () => {
    const template = `
    <puik-snackbar-provider>
      <puik-snackbar
        :open="false"
        title="text"
        description="description"
        variant="success"
        has-close-button
      >
      </puik-snackbar>
    </puik-snackbar-provider>
    `;
    factory(template);
    expect(wrapper.findComponent({ name: 'PuikSnackbar' }).props().variant).toBe('success');
  });

  it('should have correct swipeAnimation prop', () => {
    const template = `
    <puik-snackbar-provider>
      <puik-snackbar
        :open="false"
        title="text"
        description="description"
        swipe-animation="slide-right"
        has-close-button
      >
      </puik-snackbar>
    </puik-snackbar-provider>
    `;
    factory(template);
    expect(wrapper.findComponent({ name: 'PuikSnackbar' }).props().swipeAnimation).toBe('slide-right');
  });

  it('should have correct hasCloseButton prop', () => {
    const template = `
    <puik-snackbar-provider>
      <puik-snackbar
        :open="false"
        title="text"
        description="description"
        :has-close-button="false"
      >
      </puik-snackbar>
    </puik-snackbar-provider>
    `;
    factory(template);
    expect(wrapper.findComponent({ name: 'PuikSnackbar' }).props().hasCloseButton).toBe(false);
  });

  it('should add snackbar to state', () => {
    const state = ref<UseSnackbarProps[]>([]);
    const snackbarsLimit = 5;
    const snackbarProps: UseSnackbarProps = {
      title: 'Test Snackbar',
      description: 'This is a test snackbar',
      hasCloseButton: true,
      variant: PuikSnackbarVariants.Default,
      swipeAnimation: PuikSnackbarSwipeAnimations.Right
    };

    const { snackbarsState } = useSnackbar(snackbarProps, state.value, snackbarsLimit, 5000);

    expect(snackbarsState.length).toBe(1);
    expect(snackbarsState[0].title).toBe('Test Snackbar');
    expect(snackbarsState[0].description).toBe('This is a test snackbar');
  });

  it('should respect snackbars limit', () => {
    const state = ref<UseSnackbarProps[]>([]);
    const snackbarsLimit = 1;
    const snackbarProps1: UseSnackbarProps = {
      title: 'Snackbar 1',
      description: 'This is snackbar 1',
      hasCloseButton: true,
      variant: PuikSnackbarVariants.Default,
      swipeAnimation: PuikSnackbarSwipeAnimations.Right
    };
    const snackbarProps2: UseSnackbarProps = {
      title: 'Snackbar 2',
      description: 'This is snackbar 2',
      hasCloseButton: true,
      variant: PuikSnackbarVariants.Default,
      swipeAnimation: PuikSnackbarSwipeAnimations.Right
    };

    useSnackbar(snackbarProps1, state.value, snackbarsLimit, 5000);
    const { snackbarsState } = useSnackbar(snackbarProps2, state.value, snackbarsLimit, 5000);

    expect(snackbarsState.length).toBe(1);
    expect(snackbarsState[0].title).toBe('Snackbar 2');
  });

  it('should dismiss snackbar after delay', async () => {
    const state = ref<UseSnackbarProps[]>([]);
    const snackbarProps: UseSnackbarProps = {
      title: 'Dismiss Snackbar',
      description: 'This snackbar will be dismissed',
      hasCloseButton: true,
      variant: PuikSnackbarVariants.Default,
      swipeAnimation: PuikSnackbarSwipeAnimations.Right
    };

    const { id, dissmissSnackbar, snackbarsState } = useSnackbar(snackbarProps, state.value, 5, 100);
    state.value = snackbarsState;

    dissmissSnackbar(id);

    await new Promise(resolve => setTimeout(resolve, 150));

    expect(state.value.find((snackbar: UseSnackbarProps) => snackbar?.title === 'Dismiss Snackbar')?.open).toBe(false);
  });

  it('should remove closed snackbars', async () => {
    const state = ref<SnackbarsState>([]);

    const snackbarProps: UseSnackbarProps = {
      title: 'Remove Snackbar',
      description: 'This snackbar will be tested for removal',
      hasCloseButton: true,
      variant: PuikSnackbarVariants.Default,
      swipeAnimation: PuikSnackbarSwipeAnimations.Right,
      onOpenChange: (open) => {
        if (!open) {
          state.value = removeSnackbar(state.value);
        }
      }
    };

    const { id, dissmissSnackbar, removeSnackbar, snackbarsState } = useSnackbar(snackbarProps, state.value, 5, 100);
    state.value = snackbarsState;

    dissmissSnackbar(id);

    await new Promise(resolve => setTimeout(resolve, 150));

    expect(state.value.length).toBe(1);
    expect(state.value.find(snackbar => snackbar.title === 'Snackbar 1')).toBeUndefined();
  });
});
