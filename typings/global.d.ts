// GlobalComponents for Volar
declare module 'vue' {
  export interface GlobalComponents {
    PuikInput: typeof import('puik')['PuikInput']
    PuikButton: typeof import('puik')['PuikButton']
    PuikConfigProvider: typeof import('puik')['PuikConfigProvider']
  }
}

export {}
