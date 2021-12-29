import Mock from 'mockjs'

export default {
  userUnitOrderList: config => {
    const Random = Mock.Random
    const arr = []
    for (let i = 0; i < 7; i++) {
      arr.push({
        id: i,
        orderCode: Random.natural(10000),
        orderStatus: Random.natural(1, 7),
        createTime: Random.datetime(),
        orderAmount: Random.natural(100, 100000)
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
  cancle: config => {
    return {
      'msg': '委托单已被取消',
      'code': 200
    }
  },
  update: config => {
    return {
      'msg': '修改成功',
      'code': 200
    }
  },
  pay: config => {
    return {
      'msg': '委托单支付成功',
      'code': 200
    }
  },
  getMeters: config => {
    return {
      'msg': '已成功确认收货',
      'code': 200
    }
  },
  ceritiDetail: config => {
    const Random = Mock.Random
    const ruleForm = {
      meterId: 211,
      certificateCode: Random.natural(19),
      meterName: Random.csentence(3, 10),
      specificationModel: Random.csentence(3, 10),
      productNumber: Random.natural(19),
      productOrg: Random.csentence(3, 10),
      certificateType: 0,
      verificationCalibrationDate: Random.datetime(),
      certificateValidityPeriod: Random.datetime(),
      certificateOrg: Random.csentence(3, 10),
      attachment: {
        url: Random.image(),
        name: Random.csentence(3, 10)
      }
    }
    return {
      'msg': '查询成功',
      'code': 200,
      'data': {
        'current': 1,
        'records': ruleForm
      }
    }
  },
  Orderdetail: config => {
    const Random = Mock.Random
    let meter = []
    for (let i = 0; i < 7; i++) {
      meter.push({
        number: Random.natural(10), // 器具标识
        name: Random.csentence(3, 10), // 器具名称
        accuracy: Random.natural(1, 10), // 准确度
        grade: Random.csentence(3), // 等级
        range: Random.natural(2, 10),
        price: Random.natural(50, 500),
        productNumber: Random.natural(18), // 出厂编号
        isCalibration: 1,
        isMaintain: 0,
        certificateId: i + 2,
        productOrg: Random.csentence(10), // 生产单位
        id: i
      })
    }
    let service = []
    for (let i = 0; i < 5; i++) {
      service.push({
        serviceId: i,
        id: i + 2,
        serviceName: Random.csentence(3, 10), // 器具名称
        accuracy: Random.natural(1, 10), // 准确度
        level: Random.csentence(3), // 等级
        measureRange: Random.natural(2, 10),
        certification: '检定证书',
        chargeUnit: Random.csentence(10), // 生产单位
        quantity: Random.natural(1, 100), // 器具标识
        price: Random.natural(50, 500)
      })
    }
    let arr = {
      orderCode: Random.natural(10000),
      orderStatus: Random.natural(1, 7),
      createTime: Random.datetime(),
      Orgaddress: Random.county(true),
      userAddress: Random.county(true),
      orderAmount: Random.natural(100, 100000),
      serviceAmount: Random.natural(100, 100000),
      maintenanceAmount: Random.natural(100, 100000),
      organizationId: Random.natural(10, 700),
      organizationName: Random.csentence(10),
      remark: Random.csentence(100),
      vccsOrderMeterDetailVos: meter,
      vccsOrderServiceDetailVos: service
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
  workStage: config => {
    const Random = Mock.Random
    let meter = []
    for (let i = 0; i < 7; i++) {
      meter.push({
        number: Random.natural(10), // 器具标识
        name: Random.csentence(3, 10), // 器具名称
        accuracy: Random.natural(1, 10), // 准确度
        grade: Random.csentence(3), // 等级
        range: Random.natural(2, 10),
        price: Random.natural(50, 500),
        productNumber: Random.natural(18), // 出厂编号
        isCalibration: 1,
        isMaintain: 0,
        certificateId: i > 2 ? i : '',
        productOrg: Random.csentence(10), // 生产单位
        id: i
      })
    }
    let service = []
    for (let i = 0; i < 5; i++) {
      service.push({
        serviceId: i,
        id: i + 2,
        serviceName: Random.csentence(3, 10), // 器具名称
        accuracy: Random.natural(1, 10), // 准确度
        level: Random.csentence(3), // 等级
        measureRange: Random.natural(2, 10),
        certification: '检定证书',
        chargeUnit: Random.csentence(10), // 生产单位
        quantity: Random.natural(1, 100), // 器具标识
        price: Random.natural(50, 500)
      })
    }
    let arr = {
      orderCode: Random.natural(10000),
      orderStatus: 3,
      Orgaddress: Random.county(true),
      userAddress: Random.county(true),
      createTime: Random.datetime(),
      orderAmount: Random.natural(100, 100000),
      serviceAmount: Random.natural(100, 100000),
      maintenanceAmount: Random.natural(100, 100000),
      organizationId: Random.natural(10, 700),
      organizationName: Random.csentence(10),
      remark: Random.csentence(100),
      vccsOrderMeterDetailVos: meter,
      vccsOrderServiceDetailVos: service
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
  price: config => {
    return {
      'msg': '维修金额修改成功',
      'code': 200
    }
  },
  remark: config => {
    return {
      'msg': '备注修改成功',
      'code': 200
    }
  }
}
