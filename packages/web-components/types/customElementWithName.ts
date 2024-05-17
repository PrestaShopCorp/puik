import { VueElementConstructor } from 'vue';

export interface CustomElementWithName extends VueElementConstructor<{}> {
  ceName?: string
}

export default CustomElementWithName;
