import type { CustomElementWithTagName } from '../types';
import toKebabCase from './toKebabsCase';

export const initCe = (CustomElement: CustomElementWithTagName): void => {
  const kebabName = toKebabCase(CustomElement.tagName);
  if (!customElements.get(kebabName)) {
    customElements.define(kebabName, CustomElement);
  }
};

export default initCe;
