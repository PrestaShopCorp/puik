import installer from './defaults'
export { default as puikTailwindPreset } from '@puik/tailwind-preset'
export * from '@puik/components'
export * from '@puik/hooks'
export * from '@puik/tokens'
export { makeInstaller } from './make-installer'
export { PuikResolver } from './resolver'

export const install = installer.install
export const version = installer.version
export default installer
