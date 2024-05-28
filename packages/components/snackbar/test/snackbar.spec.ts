import { mount, ComponentMountingOptions, VueWrapper } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import { PuikSnackbar, PuikSnackbarProvider } from '@prestashopcorp/puik-components';

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
});
