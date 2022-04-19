// eslint-disable-next-line @typescript-eslint/no-var-requires
const puikTheme = require('@puik/theme/tailwind.config')
module.exports = {
  ...puikTheme,
  content: [
    '../packages/components/**/*.stories.@(js|jsx|ts|tsx)',
    './stories/**/*.stories.mdx',
  ],
}
