function throttle(fn, wait) {
  const buffer = []
  let scheduleTimer

  function schedule(args) {
    args && fn(...args)
    scheduleTimer = setTimeout(() => {
      if (buffer.length) {
        return schedule(buffer.shift())
      }
      scheduleTimer = null
    }, wait)
  }

  return (...args) => {
    if (!scheduleTimer) {
      fn(...args)
      return schedule()
    }

    buffer.push(args)
  }
}

module.exports = wait => throttle(fn => fn(), wait)
