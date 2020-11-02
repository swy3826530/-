

export default {
  // 获取
  getLocal (key) {
    // console.log('get local operation')
    return JSON.parse(window.localStorage.getItem(key))
  },
  // 设置用
  setLocal (key,res) {
    // console.log('set local operation')
    
    return window.localStorage.setItem(key, JSON.stringify(res))
  }
}
