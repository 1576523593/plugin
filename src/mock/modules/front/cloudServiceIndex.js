import Mock from 'mockjs'
export default {
  orgList: config => {
    const Random = Mock.Random
    const arr = []
    for (let i = 0; i < 16; i++) {
      arr.push({
        id: i,
        institutionName: Random.csentence(10, 20),
        institutionIntroduct: Random.csentence(10, 120),
        institutionTelephone: Random.natural(8),
        areaName: Random.county(true),
        pictureUrl: ''
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
  orgDetail: config => {
    const Random = Mock.Random
    const arr = {
      id: '',
      institutionName: Random.csentence(10, 20),
      institutionIntroduct: Random.csentence(100, 500),
      institutionTelephone: Random.natural(8),
      areaName: Random.county(true),
      pictureUrl: Random.image('500x500')
    }
    return {
      'msg': '查询成功',
      'code': 200,
      'data': {
        'total': arr.length,
        'size': 10,
        'current': 1,
        'data': arr
      }
    }
  },
  serviceList: config => {
    const Random = Mock.Random
    const arr = []
    for (let i = 0; i < 10; i++) {
      arr.push({
        serviceAttrId: i + 1, // 服务规格ID
        serviceId: i, // 服务id
        meterName: Random.csentence(3, 10),
        level: Random.natural(3, 10),
        price: Random.natural(50, 500),
        remark: Random.csentence(10, 50),
        accuracy: Random.natural(1, 10),
        chargeUnit: Random.csentence(1),
        measureRange: Random.csentence(1, 3)
      })
    }
    return {
      'msg': '查询成功',
      'code': 200,
      'data': {
        'total': arr.length,
        'size': 10,
        'current': 1,
        'data': arr
      }
    }
  },
  Imgs: config => {
    const Random = Mock.Random
    const arr = []
    for (let i = 0; i < 10; i++) {
      arr.push(Random.image('300x300'))
    }
    return {
      'msg': '查询成功',
      'code': 200,
      'data': {
        'total': arr.length,
        'size': 10,
        'current': 1,
        'data': arr
      }
    }
  },
  userMeterList: config => {
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
  // 查询所有机构
  AllorgList: config => {
    const Random = Mock.Random
    const arr = []
    for (let i = 0; i < 100; i++) {
      arr.push({
        institutionName: Random.csentence(5, 15),
        id: i
      })
    }
    return {
      'msg': '查询成功',
      'code': 200,
      'data': {
        'total': arr.length,
        'records': arr
      }
    }
  },
  credentialsType: config => {
    const Random = Mock.Random
    const arr = []
    for (let i = 0; i < 2; i++) {
      arr.push({
        dicValue: i,
        dicName: Random.csentence(3, 5)
      })
    }
    return {
      'msg': '查询成功',
      'code': 200,
      'data': {
        'total': arr.length,
        'records': arr
      }
    }
  },
  submit: config => {
    const Random = Mock.Random
    return {
      'msg': '委托单提交成功',
      'code': 200,
      'orderCode': Random.natural(10000)
    }
  }
}
