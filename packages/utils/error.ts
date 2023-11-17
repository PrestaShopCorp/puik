import { isString } from './types'

class PuikError extends Error {
  constructor(m: string) {
    super(m)
    this.name = 'PuikError'
  }
}

export function throwError(scope: string, m: string): never {
  throw new PuikError(`[${scope}] ${m}`)
}

export function debugWarn(scope: string | Error, message?: string): void {
  if (process.env.NODE_ENV !== 'production') {
    const error: Error = isString(scope)
      ? new PuikError(`[${scope}] ${message}`)
      : scope
    console.warn(error)
  }
}
