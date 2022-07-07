function mjthrottle(fn, interval, {
  leading = true,
  trailing = false
} = {}) {
  let startTime = 0
  let timer = null

  const _throttle = function(...args) {
    return new Promise((resovle, reject) => {
      try {
        // 获取当前时间
        const nowTime = new Date().getTime()
          // 对立即执行进行控制
        if (!leading && startTime === 0) startTime = nowTime

        // 计算等待时间执行函数
        const waitTime = interval - (nowTime - startTime)
        if (waitTime <= 0) {
          if (timer) clearTimeout(timer)
          const res = fn.apply(this, args)
          resovle(res)
          startTime = nowTime
          timer = null
          return
        }

        // 是否需要执行尾部
        if (trailing && !timer) {
          timer = setTimeout(() => {
            const res = fn.apply(this, args)
            resovle(res)
            startTime = new Date().getTime()
            timer = null
          }, waitTime)
        }
      } catch (error) {
        reject(error)
      }
    })
  }

  // 取消尾部执行
  _throttle.cancel = function() {
    if (timer) clearTimeout(timer)
    startTime = 0
    timer = null
  }

  return _throttle
}

export default mjthrottle