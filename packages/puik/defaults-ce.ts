import { makeInstaller } from './make-installer'
import ComponentsCe from './component-ce'
import Plugins from './plugin'

export default makeInstaller([...ComponentsCe, ...Plugins])
