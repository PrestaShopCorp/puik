import path from 'path'
import helper from 'components-helper'
import { puikPackage, puikOutput, projRoot, getPackageManifest } from '../utils'

import type { TaskFunction } from 'gulp'
import type { InstallOptions } from 'components-helper'

const reComponentName: InstallOptions['reComponentName'] = (title: string) =>
  `puik-${title
    .replace(/\B([A-Z])/g, '-$1')
    .replace(/[ ]+/g, '-')
    .toLowerCase()}`

const reDocUrl: InstallOptions['reDocUrl'] = (fileName, header) => {
  const docs = ''
  const _header = header ? header.replaceAll(/\s+/g, '-').toLowerCase() : ''

  return `${docs}${fileName}.html${_header ? '#' : ''}${_header}`
}

const reWebTypesSource: InstallOptions['reWebTypesSource'] = (title) => {
  const symbol = `Puik${title
    .replaceAll(/-/g, ' ')
    .replaceAll(/^\w|\s+\w/g, (item) => {
      return item.trim().toUpperCase()
    })}`

  return { symbol }
}

const reAttribute: InstallOptions['reAttribute'] = (value, key) => {
  const _value = value.match(/^\*\*(.*)\*\*$/)
  const str = _value ? _value[1] : value

  if (key === 'Name' && /^(-|—)$/.test(str)) {
    return 'default'
  } else if (str === '' || /^(-|—)$/.test(str)) {
    return undefined
  } else if (key === 'Attribute' && /v-model:(.+)/.test(str)) {
    const _str = str.match(/v-model:(.+)/)
    return _str ? _str[1] : undefined
  } else if (key === 'Attribute' && /v-model/.test(str)) {
    return 'model-value'
  } else if (key === 'Attribute') {
    return str.replace(/\B([A-Z])/g, '-$1').toLowerCase()
  } else if (key === 'Type') {
    return str
      .replace(/\s*\/\s*/g, '|')
      .replace(/\s*,\s*/g, '|')
      .replace(/\(.*\)/g, '')
      .toLowerCase()
  } else if (key === 'Accepted Values') {
    return /\[.+\]\(.+\)/.test(str) || /^\*$/.test(str)
      ? undefined
      : str.replace(/`/g, '')
  } else if (key === 'Subtags') {
    return str
      ? `puik-${str
          .replaceAll(/\s*\/\s*/g, '/puik-')
          .replaceAll(/\B([A-Z])/g, '-$1')
          .replaceAll(/\s+/g, '-')
          .toLowerCase()}`
      : undefined
  } else {
    return str
  }
}

export const buildHelper: TaskFunction = (done) => {
  const { name, version } = getPackageManifest(puikPackage)

  const tagVer = process.env.TAG_VERSION
  const _version = tagVer
    ? tagVer.startsWith('v')
      ? tagVer.slice(1)
      : tagVer
    : version!

  helper({
    name: name!,
    version: _version,
    entry: `${path.resolve(
      projRoot,
      'docs/src/components'
    )}/!(datetime-picker|message-box|message).md`,
    outDir: puikOutput,
    reComponentName,
    reDocUrl,
    reWebTypesSource,
    reAttribute,
    props: 'Attributes',
    propsName: 'Attribute',
    propsOptions: 'Accepted Values',
    eventsName: 'Event Name',
    tableRegExp:
      '#+\\s+(.*\\s*Attributes|.*\\s*Events|.*\\s*Slots|.*\\s*Directives)\\s*\\n+(\\|?.+\\|.+)\\n\\|?\\s*:?-+:?\\s*\\|.+((\\n\\|?.+\\|.+)+)',
  })

  done()
}
