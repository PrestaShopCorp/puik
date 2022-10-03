import { createVNode, render, type AppContext, type VNode } from 'vue'
import SnackBar from './snack-bar.vue'
import type { SnackBarOptions } from './snack-bar'

const notifications: VNode[] = []

const GAP = 16

let seed = 1

const notify = (
  options: SnackBarOptions,
  context: AppContext | null = null
) => {
  const id = `puik-snackbar_${seed++}`
  const customOnClose = options.onClose
  let offset = options.offset || 32

  notifications.forEach(({ el }) => {
    offset += (el?.offsetHeight || 0) + GAP
  })
  const appendTo: HTMLElement | null = document.body

  const props = {
    ...options,
    offset,
    id,
    onClose: () => close(id, customOnClose),
  }

  const notification = createVNode(SnackBar, props)
  notification.appContext = context ?? notify._context
  const container = document.createElement('div')

  notification.props!.onDestroy = () => render(null, container)

  render(notification, container)
  notifications.push(notification)
  appendTo.appendChild(container.firstElementChild!)

  const close = (id: string, customClose?: () => void) => {
    const idx = notifications.findIndex(({ props }) => props?.id === id)
    if (idx === -1) return

    const { el } = notifications[idx]
    if (!el) return

    customClose?.()

    const removedHeight = el?.offsetHeight

    notifications.splice(idx, 1)
    const len = notifications.length

    if (len < 1) return

    for (let i = idx; i < len; i++) {
      const { el, component } = notifications[i]
      const pos = parseInt(el?.style.bottom, 10) - removedHeight - GAP
      component!.props.offset = pos
    }
  }
}

notify._context = null

export default notify
