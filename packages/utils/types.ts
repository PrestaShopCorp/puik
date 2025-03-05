import { Comment } from 'vue';
import type { VNode, Slot } from 'vue';

export { isVNode } from 'vue';

export const isObject = (val: unknown): val is Record<any, any> =>
  val !== null && typeof val === 'object';

export const isFunction = (val: unknown): val is () => void =>
  typeof val === 'function';

export const isNumber = (val: unknown): val is number => typeof val === 'number';

export const isString = (val: unknown): val is string => typeof val === 'string';

export function slotIsEmpty(slot: Slot<any> | undefined, slotProps = {}): boolean {
  if (!slot) return false;

  return slot(slotProps).some((vnode: VNode) => {
    if (vnode.type === Comment) return false;

    if (Array.isArray(vnode.children) && !vnode.children.length) return false;

    return (
      vnode.type !== Text ||
      (typeof vnode.children === 'string' && vnode.children.trim() !== '')
    );
  });
}
