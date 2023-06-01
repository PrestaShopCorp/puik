// eslint-disable-next-line @typescript-eslint/no-var-requires
const Puiktheme = require('./theme')

module.exports = {
  theme: Puiktheme,
  plugins: [
    function ({ addComponents, theme }) {
      addComponents({
        '.bg-spinner': {
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200' fill='none' color='${theme(
            'colors.primary.800'
          ).replace(
            '#',
            '%23'
          )}' %3E%3Cdefs%3E%3ClinearGradient id='top'%3E%3Cstop offset='0%25' stop-opacity='1' stop-color='currentColor'%3E%3C/stop%3E%3Cstop offset='100%25' stop-opacity='.5' stop-color='currentColor' %3E%3C/stop%3E%3C/linearGradient%3E%3ClinearGradient id='bottom'%3E%3Cstop offset='0%25' stop-opacity='0' stop-color='currentColor'%3E%3C/stop%3E%3Cstop offset='100%25' stop-opacity='.5' stop-color='currentColor' %3E%3C/stop%3E%3C/linearGradient%3E%3C/defs%3E%3Cg stroke-width='24'%3E%3Cpath stroke='url(%23top)' d='M14 100a32 32 0 0 1 170 0' %3E%3C/path%3E%3Cpath stroke='url(%23bottom)' d='M184 100a32 32 0 0 1-170 0' %3E%3C/path%3E%3Cpath stroke='currentColor' stroke-linecap='round' d='M14 100a32 32 0 0 1 0 0' %3E%3C/path%3E%3C/g%3E%3CanimateTransform from='360 0 0' to='0 0 0' attributeName='transform' type='rotate' repeatCount='indefinite' dur='2000ms' %3E%3C/animateTransform%3E%3C/svg%3E")`,
        },
      })
    },
  ],
}
