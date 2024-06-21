import type { ExtractPropTypes } from 'vue';

export enum PuikConfigProviderLocale {
  En = 'en',
  Fr = 'fr',
}

export const configProviderProps = {
  locale: {
    type: String as () => PuikConfigProviderLocale,
    required: false,
    default: PuikConfigProviderLocale.En
  }
};

export type ConfigProviderProps = ExtractPropTypes<typeof configProviderProps>;
