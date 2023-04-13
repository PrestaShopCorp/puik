/**
 * How to use it:
 * - Declare: const myElement = ref(null)
 * - Add this attribute to your element in your template: ref="myElement"
 * - Use isEllipsisActive(myElement.value!)
 *
 * @param elem The ref to your HTML element
 * @returns If your HTML element is ellipsed or not
 */
export function isEllipsisActive(elem: HTMLElement) {
  return elem.offsetWidth < elem.scrollWidth
}
