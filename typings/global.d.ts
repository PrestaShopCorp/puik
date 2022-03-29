// GlobalComponents for Volar
declare module 'vue' {
  export interface GlobalComponents {
    PuikButton: typeof import('puik')['PuikButton']
    PuikConfigProvider: typeof import('puik')['PuikConfigProvider']
  }
}

export {}
