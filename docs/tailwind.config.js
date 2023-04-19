// eslint-disable-next-line @typescript-eslint/no-var-requires
module.exports = {
  presets: [require('@puik/theme/tailwind.config')],
  content: [
    '../packages/components/**/*.stories.@(js|jsx|ts|tsx)',
    './stories/**/*.stories.mdx',
    './stories/**/**/*.stories.@(js|jsx|ts|tsx|mdx)',
  ],
}
