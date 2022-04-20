// GlobalComponents for Volar
declare module 'vue' {
  export interface GlobalComponents {
    PuikSwitch: typeof import('puik')['PuikSwitch']
    PuikButton: typeof import('puik')['PuikButton']
    PuikConfigProvider: typeof import('puik')['PuikConfigProvider']
  }
}

export {}
