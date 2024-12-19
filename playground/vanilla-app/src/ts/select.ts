export const select = () => {
  const template = `
    <div>
        select
    <div>
`;

  const appElement = document.querySelector<HTMLDivElement>('#app');
  appElement?.insertAdjacentHTML('beforeend', template);
};

select();
