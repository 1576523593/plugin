import Mock from 'mockjs'

export default {
  statistics: config => {
    return {
      'msg': '查询成功',
      'code': 200,
      'data': {
        'total': 12,
        'size': 10,
        'current': 1,
        'data': {
          meterAmount: 99,
          orderAmount: 99,
          maintainAmount: 99,
          repairAmount: 99
        }
      }
    }
  },
  meterList: config => {
    const Random = Mock.Random
    const arr = []
    for (let i = 0; i < 10; i++) {
      arr.push({
        number: Random.natural(10), // 器具标识
        name: Random.csentence(3, 10), // 器具名称
        accuracy: Random.natural(1, 10), // 准确度
        grade: Random.csentence(3), // 等级
        range: Random.natural(2, 10),
        price: Random.natural(50, 500),
        productNumber: Random.natural(18), // 出厂编号
        productOrg: Random.csentence(10), // 生产单位
        id: i
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
  recomendOrg: config => {
    const Random = Mock.Random
    const arr = []
    for (let i = 0; i < 4; i++) {
      arr.push({
        id: i + 1, // 服务规格ID
        institutionName: Random.csentence(3, 10), // 服务id
        address: Random.csentence(3, 10),
        attachment: [{
          name: Random.csentence(1, 5),
          url: Random.image()
        }]
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
  guidPrice: config => {
    const Random = Mock.Random
    const arr = []
    for (let i = 0; i < 10; i++) {
      arr.push({
        id: i + 1, // 服务规格ID
        name: Random.csentence(3, 10), // 服务id
        area: Random.county(true)
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
  guidPriceDetail: config => {
    const Random = Mock.Random
    const arr = Random.image('500x800')
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
  }
}
