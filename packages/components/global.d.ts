// GlobalComponents for Volar
declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    PuikProgressBar: typeof import('@puik/components')['PuikProgressBar']
    PuikIcon: typeof import('@puik/components')['PuikIcon']
    PuikOption: typeof import('@puik/components')['PuikOption']
    PuikSelect: typeof import('@puik/components')['PuikSelect']
    PuikLink: typeof import('@puik/components')['PuikLink']
    PuikCard: typeof import('@puik/components')['PuikCard']
    PuikCheckbox: typeof import('@puik/components')['PuikCheckbox']
    PuikLabel: typeof import('@puik/components')['PuikLabel']
    PuikRadio: typeof import('@puik/components')['PuikRadio']
    PuikInput: typeof import('@puik/components')['PuikInput']
    PuikAlert: typeof import('@puik/components')['PuikAlert']
    PuikTooltip: typeof import('@puik/components')['PuikTooltip']
    PuikSwitch: typeof import('@puik/components')['PuikSwitch']
    PuikButton: typeof import('@puik/components')['PuikButton']
    PuikConfigProvider: typeof import('@puik/components')['PuikConfigProvider']
  }
}

export {}
