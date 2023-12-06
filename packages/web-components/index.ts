import PuikButtonGroupCe from './components/button-group';
import PuikButtonCe from './components/button';
import PuikIconCe from './components/icon';

const init = () => {
  customElements.define('puik-button-group-ce', PuikButtonGroupCe);
  customElements.define('puik-button-ce', PuikButtonCe);
  customElements.define('puik-icon-ce', PuikIconCe);
};

export {
  PuikButtonGroupCe,
  PuikButtonCe,
  PuikIconCe,
  init
};

export default init;
