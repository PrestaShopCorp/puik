// GlobalComponents for Volar
declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    PuikProgressBar: typeof import('@prestashopcorp/puik-components')['PuikProgressBar']
    PuikIcon: typeof import('@prestashopcorp/puik-components')['PuikIcon']
    PuikOption: typeof import('@prestashopcorp/puik-components')['PuikOption']
    PuikSelect: typeof import('@prestashopcorp/puik-components')['PuikSelect']
    PuikLink: typeof import('@prestashopcorp/puik-components')['PuikLink']
    PuikCard: typeof import('@prestashopcorp/puik-components')['PuikCard']
    PuikCheckbox: typeof import('@prestashopcorp/puik-components')['PuikCheckbox']
    PuikLabel: typeof import('@prestashopcorp/puik-components')['PuikLabel']
    PuikRadio: typeof import('@prestashopcorp/puik-components')['PuikRadio']
    PuikInput: typeof import('@prestashopcorp/puik-components')['PuikInput']
    PuikAlert: typeof import('@prestashopcorp/puik-components')['PuikAlert']
    PuikTooltip: typeof import('@prestashopcorp/puik-components')['PuikTooltip']
    PuikSwitch: typeof import('@prestashopcorp/puik-components')['PuikSwitch']
    PuikButton: typeof import('@prestashopcorp/puik-components')['PuikButton']
    PuikConfigProvider: typeof import('@prestashopcorp/puik-components')['PuikConfigProvider']
  }
}

export {}
