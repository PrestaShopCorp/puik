import type { CustomElementWithName } from '../types';
import { components } from '../index';
import initWeb from './initWeb';

export const initAllWeb = (suffix: string = 'ce') => {
  components.forEach((component: CustomElementWithName) => {
    const tagname: string | undefined = component.ceName?.replace('ce', suffix);
    if (tagname) {
      initWeb(tagname, component);
    }
  });
};

export default initAllWeb;
