import type { App, Directive, DirectiveBinding } from 'vue'

const directive: Directive = {
  mounted(el: HTMLInputElement, binding: DirectiveBinding) {
    el.addEventListener('input', (event) => {
      if (event.target) {
        binding.instance?.$emit(
          binding.arg!,
          (event.target as HTMLInputElement).value
        )
      }
    })
  },
  // beforeUnmount(el: HTMLInputElement) {
  //   el.removeEventListener('input', () => {})
  // },
}

export const vCustomModelDirective = {
  install(app: App) {
    app.directive('custom-model', directive)
  },
}
