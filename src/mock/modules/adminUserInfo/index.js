import Mock from 'mockjs'

export default {
  userList: config => {
    const Random = Mock.Random
    const arr = []
    for (let i = 0; i < 10; i++) {
      arr.push({
        userCode: Random.csentence(3, 10),
        organizationName: Random.csentence(3, 10),
        organizationTelephone: Random.natural(11),
        organizationEmail: Random.email(),
        role: Random.natural(1, 2),
        isFreeze: Random.natural(0, 1),
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
  userDetail: config => {
    const Random = Mock.Random
    let arr = ''
    arr = {
      id: Random.string(7, 10),
      role: Random.natural(1, 2),
      user_code: Random.csentence(3, 10),
      phone: Random.natural(11),
      organizationName: Random.csentence(3, 10),
      code: Random.natural(18),
      legalRepresentative: Random.cname(),
      representativeIdNumber: Random.natural(18),
      size: Random.natural(1, 4),
      tradeType: Random.natural(1, 4),
      area_name: '110102',
      address: Random.county(true),
      url: {
        name: Random.csentence(3, 10),
        url: Random.image('500x500')
      },
      postCode: Random.natural(1000, 2000),
      organizationEmail: Random.email(),
      organizationTelephone: Random.natural(11),
      organizationFax: Random.natural(11),
      isFreeze: Random.natural(0, 1)
    }
    return {
      'msg': '查询成功',
      'code': 200,
      'data': {
        'records': arr
      }
    }
  }
}
