export function slowDownProgress(
  cb: (progress: number) => void,
  minDurationMs: number
): (progress: number) => void {
  if (minDurationMs === 0) {
    return cb
  }

  const startTime = Date.now()

  let maxProgress = 0
  const intervalId = setInterval(() => {
    maxProgress = getMaxProgress()
    if (maxProgress >= 1) {
      clearInterval(intervalId)
    }
    if (maxProgress < realProgress) {
      cb(Math.min(maxProgress, 1))
    }
  }, 100)

  let realProgress = 0
  return (progress: number) => {
    realProgress = progress
    if (realProgress < getMaxProgress()) {
      cb(realProgress)
    }
  }

  function getMaxProgress() {
    return (Date.now() - startTime) / minDurationMs
  }
}
