const storage = window.sessionStorage
export default {
  getItem (key) {
    try {
      return JSON.parse(storage.getItem(key))
    } catch (err) {
      return null
    }
  },
  setItem (key, val) {
    storage.setItem(key, JSON.stringify(val))
  },
  clear () {
    storage.clear()
  },
  keys (index) {
    return storage.key(index)
  },
  removeItem (key) {
    storage.removeItem(key)
  }

}
