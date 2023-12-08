import { VueElementConstructor } from 'vue';

export interface CustomElementWithTagName extends VueElementConstructor<{}> {
  tagName: string
}

export default CustomElementWithTagName;
