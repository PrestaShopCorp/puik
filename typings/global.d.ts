// GlobalComponents for Volar
declare module 'vue' {
  export interface GlobalComponents {
    PuikBadge: typeof import('puik')['PuikBadge']
  }
}

export {}
