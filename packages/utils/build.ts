export const excludeFiles = (
  files: string[],
  filesToExclude: string[] = [],
) => {
  const excludes = [...filesToExclude, 'node_modules', 'dist', 'vite.config.ts']
  return files.filter(
    (path) => !excludes.some((exclude) => path.includes(exclude)),
  )
}
