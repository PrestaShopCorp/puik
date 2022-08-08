// GlobalComponents for Volar
declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    PuikDateRangePicker: typeof import('puik')['PuikDateRangePicker']
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
