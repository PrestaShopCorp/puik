// GlobalComponents for Volar
declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    PuikLabel: typeof import('puik')['PuikLabel']
    PuikAlert: typeof import('puik')['PuikAlert']
    PuikTooltip: typeof import('puik')['PuikTooltip']
    PuikSwitch: typeof import('puik')['PuikSwitch']
    PuikButton: typeof import('puik')['PuikButton']
    PuikConfigProvider: typeof import('puik')['PuikConfigProvider']
  }
}

export {}
