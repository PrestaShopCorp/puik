import { defineComponent, renderSlot, provide, ref } from 'vue';
import { configProviderProps } from './config-provider-props';
import { configProviderContextKey } from './config-provider-keys';

export default defineComponent({
  name: 'PuikConfigProvider',
  props: configProviderProps,

  setup(props, { slots }) {
    provide(configProviderContextKey, ref(props));
    return () => renderSlot(slots, 'default');
  }
});
