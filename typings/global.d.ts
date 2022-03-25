// GlobalComponents for Volar
declare module 'vue' {
  export interface GlobalComponents {
    PuikButton: typeof import('puik')['PuikButton']
    PuikBadge: typeof import('puik')['PuikBadge']
    PuikConfigProvider: typeof import('puik')['PuikConfigProvider']
  }
}

export {}
