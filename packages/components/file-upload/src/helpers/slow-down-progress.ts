/**
 * This function takes a `progressHandler` and provides a wrapper with the same
 * signature. During the minimal duration, if the real progress is faster than
 * the minimal duration, then the wrapper calls `progressHandler` each 100 ms
 * with a slowed down computed value.
 */
export function slowDownProgress(
  progressHandler: (progress: number) => void,
  slowDownMs: number
): (progress: number) => void {
  if (slowDownMs === 0) return progressHandler

  const startTime = Date.now()

  let realProgress = 0
  let slowDownEnded = false
  const intervalId = setInterval(() => {
    const maxProgress = getMaxProgress()
    if (maxProgress >= 1) {
      slowDownEnded = true
      clearInterval(intervalId)
    } else if (maxProgress < realProgress) {
      progressHandler(Math.min(maxProgress, 1))
    }
  }, 100)

  return (progress: number) => {
    realProgress = progress
    if (slowDownEnded || realProgress < getMaxProgress()) {
      progressHandler(realProgress)
    }
  }

  function getMaxProgress() {
    return (Date.now() - startTime) / slowDownMs
  }
}
