// GlobalComponents for Volar
declare module 'vue' {
  export interface GlobalComponents {
    PuikTooltip: typeof import('puik')['PuikTooltip']
    PuikButton: typeof import('puik')['PuikButton']
    PuikConfigProvider: typeof import('puik')['PuikConfigProvider']
  }
}

export {}
