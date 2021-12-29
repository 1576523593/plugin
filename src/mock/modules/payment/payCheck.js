export default {
  // 创建通联会员
  createdMember: config => {
    return {
      'msg': '创建通联会员成功',
      'code': 200
    }
  },
  // 手机号码
  biddingPhone: config => {
    return {
      'msg': '手机号验证成功',
      'code': 200
    }
  },
  // 支付成功
  payingSuccess: () => {
    return {
      'msg': '获取url成功',
      'code': 200,
      'payInfo': 'http://192.168.99.234:3000/project/92/interface/api/2100'
    }
  },
  // 已绑定手机号码个人支付信息查询
  codeCheckMember1: () => {
    return {
      'member': 0,
      'phone': 0,
      'code': 200
    }
  },
  // 已绑定手机号码个人支付信息查询 未验证手机号码 有个人支付账号
  codeCheckMember2: () => {
    return {
      'member': 1,
      'phone': 0,
      'code': 200
    }
  },
  // 已验证手机号码 有个人支付账号
  codeCheckMember3: () => {
    return {
      'member': 1,
      'phone': 1,
      'code': 200
    }
  },
  // 通联个人会员状态
  payPersonalMemberStatus: () => {
    return {
      'member': 1,
      'phone': 1,
      'code': 200,
      'msg': '查询成功',
      'data': {
        isValidPhone: false,
        isCreate: true,
        mobilePhone: 13666666666
      }
    }
  },
  // 通联个人会员无手机号码绑定手机号
  unionPayBiddingPhone: () => {
    return {
      code: 200,
      msg: '绑定成功'
    }
  }
}
