import { defineCustomElement } from 'vue';
import PuikButton from '../components/button';
import PuikButtonGroup from '../components/button-group';
import PuikIcon from '../components/icon';

const PuikButtonCe = defineCustomElement(PuikButton);
const PuikButtonGroupCe = defineCustomElement(PuikButtonGroup);
const PuikIconCe = defineCustomElement(PuikIcon);

const init = () => {
  customElements.define('puik-button-ce', PuikButtonCe);
  customElements.define('puik-button-ce', PuikButtonCe);
  customElements.define('puik-button-group-ce', PuikButtonCe);
};

export { PuikButtonCe, PuikButtonGroupCe, PuikIconCe, init };

export default init;
