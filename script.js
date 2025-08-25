function debounce(func, wait, options = {}) {
  let timeout, lastCallTime, lastInvokeTime = 0;
  const { immediate = false, maxWait } = options;

  function invokeFunc(context, args) {
    lastInvokeTime = Date.now();
    func.apply(context, args);
  }

  function shouldInvoke(now) {
    const timeSinceLastCall = now - lastCallTime;
    const timeSinceLastInvoke = now - lastInvokeTime;

    return (lastCallTime && timeSinceLastCall >= wait) ||
           (maxWait && timeSinceLastInvoke >= maxWait);
  }

  return function(...args) {
    const now = Date.now();
    const context = this;
    lastCallTime = now;

    if (!timeout) {
      if (immediate) {
        invokeFunc(context, args);
      }
      timeout = setTimeout(later, wait);
    } else if (shouldInvoke(now)) {
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      invokeFunc(context, args);
    }

    function later() {
      const timeSinceLastCall = Date.now() - lastCallTime;

      if (timeSinceLastCall < wait) {
        timeout = setTimeout(later, wait - timeSinceLastCall);
      } else {
        timeout = null;
        if (!immediate) {
          invokeFunc(context, args);
        }
      }
    }
  };
}
