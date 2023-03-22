import installer from './defaults'
export { puikTailwindPreset } from '@prestashopcorp/puik-tailwind-preset'
export * from '@prestashopcorp/puik-components'
export { makeInstaller } from './make-installer'
export { PuikResolver } from '@prestashopcorp/puik-resolver'

export const install = installer.install
export const version = installer.version
export default installer
