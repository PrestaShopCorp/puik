// GlobalComponents for Volar
declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    PuikBadge: typeof import('@prestashopcorp/puik')['PuikBadge']
    PuikModal: typeof import('@prestashopcorp/puik')['PuikModal']
    PuikButtonGroup: typeof import('@prestashopcorp/puik')['PuikButtonGroup']
    PuikProgressBar: typeof import('@prestashopcorp/puik')['PuikProgressBar']
    PuikIcon: typeof import('@prestashopcorp/puik')['PuikIcon']
    PuikOption: typeof import('@prestashopcorp/puik')['PuikOption']
    PuikSelect: typeof import('@prestashopcorp/puik')['PuikSelect']
    PuikLink: typeof import('@prestashopcorp/puik')['PuikLink']
    PuikCard: typeof import('@prestashopcorp/puik')['PuikCard']
    PuikCheckbox: typeof import('@prestashopcorp/puik')['PuikCheckbox']
    PuikLabel: typeof import('@prestashopcorp/puik')['PuikLabel']
    PuikRadio: typeof import('@prestashopcorp/puik')['PuikRadio']
    PuikInput: typeof import('@prestashopcorp/puik')['PuikInput']
    PuikAlert: typeof import('@prestashopcorp/puik')['PuikAlert']
    PuikTooltip: typeof import('@prestashopcorp/puik')['PuikTooltip']
    PuikSwitch: typeof import('@prestashopcorp/puik')['PuikSwitch']
    PuikButton: typeof import('@prestashopcorp/puik')['PuikButton']
    PuikConfigProvider: typeof import('@prestashopcorp/puik')['PuikConfigProvider']
  }
}

export {}
