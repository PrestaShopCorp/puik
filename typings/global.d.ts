// GlobalComponents for Volar
declare module 'vue' {
  export interface GlobalComponents {
    PuikAlert: typeof import('puik')['PuikAlert']
    PuikButton: typeof import('puik')['PuikButton']
    PuikConfigProvider: typeof import('puik')['PuikConfigProvider']
  }
}

export {}
