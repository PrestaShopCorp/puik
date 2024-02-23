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
        text="text"
        has-close-button
      >
      </puik-snackbar>
    </puik-snackbar-provider>
    `;
    factory(template);
    expect(wrapper).toBeTruthy();
  });
});
