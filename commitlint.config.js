/* eslint-disable @typescript-eslint/no-var-requires */
const { findWorkspacePackages } = require('@pnpm/find-workspace-packages')

async function getPackages(context) {
  const ctx = context || {}
  const cwd = ctx.cwd || process.cwd()
  const packages = await findWorkspacePackages(cwd)
  return packages
    .map((pkg) => pkg.manifest.name)
    .filter((name) => !!name)
    .map((name) => (name.charAt(0) === '@' ? name.split('/')[1] : name))
}

const scopes = [
  'project',
  'core',
  'style',
  'docs',
  'ci',
  'dev',
  'build',
  'deploy',
  'other',
  'typography',
  'color',
  'border',
  'var',
]

module.exports = {
  rules: {
    'scope-enum': (ctx) =>
      getPackages(ctx).then((packages) => [
        2,
        'always',
        [...packages, ...scopes],
      ]),
    'body-leading-blank': [1, 'always'],
    'footer-leading-blank': [1, 'always'],
    'header-max-length': [2, 'always', 72],
    'scope-case': [2, 'always', 'lower-case'],
    'subject-case': [
      1,
      'never',
      ['sentence-case', 'start-case', 'pascal-case', 'upper-case'],
    ],
    'subject-empty': [2, 'never'],
    'subject-full-stop': [2, 'never', '.'],
    'type-case': [2, 'always', 'lower-case'],
    'type-empty': [2, 'never'],
    'type-enum': [
      2,
      'always',
      [
        'build',
        'chore',
        'ci',
        'docs',
        'feat',
        'fix',
        'perf',
        'refactor',
        'revert',
        'release',
        'style',
        'test',
        'improvement',
      ],
    ],
  },
}
