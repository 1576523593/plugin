import Vue from 'vue'
Vue.directive('countRunning', {
  inserted (el, binding, vnode, oldVnode) {
    var timer = null
    setTimeout(() => {
      const targetDomCount = el.getAttribute('data-target') // data-target为目标值
      let nowCount = parseInt(el.innerHTML) // 当前页面显示值
      timer = setInterval(() => {
        if (nowCount < targetDomCount) {
          let stepCount = Math.floor(targetDomCount / 25)
          if (targetDomCount < 25) stepCount = 1
          nowCount += stepCount
        } else {
          nowCount = targetDomCount
          clearInterval(timer)
          timer = null
        }
        el.innerHTML = nowCount.toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,')
      }, 80)
    })
  }
})
