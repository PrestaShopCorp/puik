// GlobalComponents for Volar
declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    PuikLink: typeof import('puik')['PuikLink']
    PuikCheckbox: typeof import('puik')['PuikCheckbox']
    PuikLabel: typeof import('puik')['PuikLabel']
    PuikRadio: typeof import('puik')['PuikRadio']
    PuikInput: typeof import('puik')['PuikInput']
    PuikAlert: typeof import('puik')['PuikAlert']
    PuikTooltip: typeof import('puik')['PuikTooltip']
    PuikSwitch: typeof import('puik')['PuikSwitch']
    PuikButton: typeof import('puik')['PuikButton']
    PuikConfigProvider: typeof import('puik')['PuikConfigProvider']
  }
}

export {}
