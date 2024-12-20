export const isDropdownBelowViewport = (element: Element, dropdownElement: Element) => {
  const rect = element.getBoundingClientRect();
  const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
  const dropdownHeight = dropdownElement.getBoundingClientRect().height;
  const dropdownBottom = rect.bottom + dropdownHeight;
  return dropdownBottom > viewportHeight;
};
