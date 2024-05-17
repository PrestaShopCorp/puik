import type { CustomElementWithName } from '../types';

export const initWeb = (tagname: string, vueElement: CustomElementWithName): void => {
  if (!customElements.get(tagname)) {
    if (tagname) {
      customElements.define(tagname, vueElement);
    }
  }
};

export default initWeb;
