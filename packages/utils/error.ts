class PuikError extends Error {
  constructor(m: string) {
    super(m)
    this.name = 'PuikError'
  }
}

export function throwError(scope: string, m: string): never {
  throw new PuikError(`[${scope}] ${m}`)
}

export function debugWarn(scope: string, message: string): void {
  if (process.env.NODE_ENV !== 'production') {
    // eslint-disable-next-line no-console
    console.warn(new PuikError(`[${scope}] ${message}`))
  }
}
