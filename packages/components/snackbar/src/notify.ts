import {
  createVNode,
  render,
  type AppContext,
  type VNode,
  ref,
  type Ref,
} from 'vue'
import Snackbar from './snackbar.vue'
import type { PuikSnackbarOptions } from './snackbar'

const currentNotification: Ref<VNode | null> = ref(null)
const PUIK_SNACKBAR_ID = 'puik-snackbar-id'

const PuikSnackbar = (
  options: PuikSnackbarOptions,
  context: AppContext | null = null,
) => {
  const customOnClose = options.onClose
  const offset = options.offset || 32

  const documentBody: HTMLElement | null = document.body

  const props = {
    ...options,
    offset,
    id: PUIK_SNACKBAR_ID,
    onClose: () => {
      currentNotification.value = null
      return customOnClose
    },
  }

  const newNotification = createVNode(Snackbar, props)
  newNotification.appContext = context ?? PuikSnackbar._context

  const container = document.createElement('div')

  newNotification.props!.onDestroy = () => render(null, container)
  render(newNotification, container)
  documentBody.appendChild(container.firstElementChild!)

  if (currentNotification.value) {
    const curNot = document.getElementById(PUIK_SNACKBAR_ID)
    curNot?.remove()
  }

  currentNotification.value = newNotification
}

PuikSnackbar._context = null

export default PuikSnackbar
