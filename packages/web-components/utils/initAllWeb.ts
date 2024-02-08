import type { CustomElementWithName } from '../types';
import { components } from '../index';
import initWeb from './initWeb';

export const initAllWeb = (suffix: string = 'ce') => {
  components.forEach((component: CustomElementWithName) => {
    const tagname: string = component.ceName.replace('ce', suffix);
    initWeb(tagname, component);
  });
};

export default initAllWeb;
