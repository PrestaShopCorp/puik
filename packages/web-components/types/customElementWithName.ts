import { type VueElementConstructor } from 'vue';

export interface CustomElementWithName extends VueElementConstructor<{}> {
  ceName?: string
}
