 
import type { InjectionKey, ExtractPropTypes, Ref } from 'vue';
import type { configProviderProps } from './config-provider-props';

export type ConfigProviderContext = Partial<
ExtractPropTypes<typeof configProviderProps>
>;
export const configProviderContextKey: InjectionKey<
Ref<ConfigProviderContext>
> = Symbol();
