import mqtt from 'mqtt'

export class MQTTClient {
  constructor (mtopic) {
    this.MQTT = {}
    this.option = {
      port: 'wss://www.jiliangqiju.cn/websocket',
      username: 'jiliang',
      password: 'jiliangqiju.cn',
      mtopic
    }
    this.init(this.option)
  }
  init (option) {
    this.MQTT = mqtt.connect(option.port, {
      username: option.username,
      password: option.password
    })
    this.MQTT.on('connect', e => {
      this.subscribeMQTT()
    })
  }
  subscribeMQTT () {
    switch (this.option.mtopic.constructor) {
      case Array:
        for (let i = 0; i < this.option.mtopic.length; i++) {
          this.MQTT.subscribe(this.option.mtopic[i], (err) => {
            if (!err) {
              // console.log('取消订阅:' + this.option.mtopic[i])
            }
          })
        }
        break
      case String:
        this.MQTT.subscribe(this.option.mtopic, (err) => {
          if (!err) {
            // console.log('取消订阅:' + this.option.mtopic)
          }
        })
        break
    }
  }
  // 断开连接
  close () {
    this.subscribeMQTT()
    this.MQTT.end()
  }
  // 取消订阅
  unsubscribe (mtopic) {
    this.MQTT.unsubscribe(mtopic)
  }
  sendMsg (msg) {
    this.MQTT.publish(this.option.mtopic, msg)
  }
}
