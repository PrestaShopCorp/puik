import { PuikAlertCe } from '@prestashopcorp/puik-web-components';

export const alert = () => {
  const template = `
    <div>
        <h3 class="puik-h3">alert</h3>
          <puik-alert-ce
            title="Alert Web component"
            variant="success"
            button-label="button label"
            description="This is the description of the success alert Web component"
          >
          </puik-alert-ce>
    <div>
`;

  const appElement = document.querySelector<HTMLDivElement>('#app');
  appElement?.insertAdjacentHTML('beforeend', template);

  customElements.define('puik-alert-ce', PuikAlertCe);

  const alertWebComponent = document.querySelector('puik-alert-ce') as HTMLElement;
  if (alertWebComponent) {
    alertWebComponent.addEventListener('click', () => {
      console.log('alert btn clicked');
    });
  }
};

alert();
