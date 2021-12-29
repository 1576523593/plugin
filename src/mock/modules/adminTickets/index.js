import Mock from 'mockjs'

export default {
  ticketsList: config => {
    const Random = Mock.Random
    const arr = []
    for (let i = 0; i < 5; i++) {
      arr.push({
        id: Random.string(7),
        name: Random.cname(3, 10),
        ticketsValue: Random.natural(50, 500),
        ticketsType: Random.cname(),
        limit: Random.cparagraph(1),
        ticketsPeriod: Random.datetime(),
        sord: Random.natural(0, 10),
        isValued: Random.natural(0, 1),
        createTime: Random.datetime()
      })
    }
    return {
      'msg': '查询成功',
      'code': 200,
      'data': {
        'total': arr.length,
        'size': 10,
        'current': 1,
        'records': arr
      }
    }
  },
  ticketsDetail: config => {
    const Random = Mock.Random
    let arr = []
    for (let i = 0; i < 5; i++) {
      arr.push({
        vipName: Random.cname(3, 10),
        vipLevel: Random.cname(3, 10),
        orgName: Random.cname(3, 10),
        id: Random.string(7),
        name: Random.cname(3, 10),
        ticketsType: Random.cname(),
        ticketsValue: Random.natural(50, 500),
        limit: Random.cparagraph(1),
        ticketsPeriod: Random.datetime(),
        isValued: Random.natural(0, 2),
        sendTime: Random.datetime()
      })
    }
    return {
      'msg': '查询成功',
      'code': 200,
      'data': {
        'total': arr.length,
        'size': 10,
        'current': 1,
        'records': arr
      }
    }
  },
  isOk: config => {
    return {
      'msg': '添加成功',
      'code': 200
    }
  },
  handleView: config => {
    const Random = Mock.Random
    let arr = []
    arr = {
      vipName: Random.cname(3, 10),
      vipLevel: Random.cname(3, 10),
      orgName: Random.cname(3, 10),
      id: Random.string(7),
      name: Random.cname(3, 10),
      ticketsType: Random.cname(),
      ticketsValue: Random.natural(50, 500),
      limit: Random.cparagraph(1),
      ticketsPeriod: Random.datetime(),
      isValued: Random.natural(0, 3),
      sendTime: Random.datetime()
    }
    return {
      'msg': '查询成功',
      'code': 200,
      'data': arr
    }
  }
}
