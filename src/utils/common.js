export default {
  getUUID () {
    let uuid = (
      this.s4() +
      this.s4() +
      '-' +
      this.s4() +
      '-' +
      this.s4() +
      '-' +
      this.s4() +
      '-' +
      this.s4() +
      this.s4() +
      this.s4()
    ).toUpperCase()
    return uuid
  },
  s4 () {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1)
  }
}
