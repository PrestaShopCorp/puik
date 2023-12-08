import { components } from '../index';
import initCe from './initCe';

export const initAllCe = () => {
  components.forEach(component => {
    initCe(component);
  });
};

export default initAllCe;
