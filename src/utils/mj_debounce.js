function mjdebounce(fn, delay, immediate = false) {
  // 1 用于记录上一次事件触发的的timer
  let timer = null
  let isInvoke = false

  // 2 触发事件时执行的函数
  const _debounce = function(...args) {
    // 返回值
    return new Promise((resolve, reject) => {
      try {
        // 2.1 如果有再次触发事件,那么取消上一次的定时器
        if (timer) clearTimeout(timer)

        // 立即执行
        if (immediate && !isInvoke) {
          res = fn.apply(this, args)
          resolve(res)
          isInvoke = true
          return
        }

        // 2.2 延迟去执行对应的fn函数
        timer = setTimeout(() => {
          res = fn.apply(this, args)
            // 2.3 执行过函数之后将timer重新置为null
          resolve(res)
          timer = null
          isInvoke = false
        }, delay);
      } catch (error) {
        reject(error)
      }
    })
  }

  // 取消函数
  _debounce.cancel = function() {
    if (timer) clearTimeout(timer)
    timer = null
    isInvoke = false
  }

  // 返回新的函数
  return _debounce
}

export default mjdebounce