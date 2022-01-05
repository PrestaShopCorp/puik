import installer from './defaults'
export * from '@puik/components'
export * from '@puik/hooks'
export { makeInstaller } from './make-installer'

export const install = installer.install
export const version = installer.version
export default installer
