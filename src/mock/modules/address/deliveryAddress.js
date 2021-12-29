export default {
  // 获取收货地址
  getAddressList: config => {
    return {
      'msg': '查询成功',
      'code': 200,
      'data': [
        {
          'address': '1',
          'area': '110101',
          'areaName': '北京市市辖区东城区',
          'cityName': null,
          'contact': '1',
          'email': '',
          'id': 38,
          'isDefault': false,
          'mobilephone': '13333333333',
          'organizationId': 3,
          'postCode': '',
          'provinceName': null,
          'telephone': '',
          'type': 1
        },
        {
          'address': '新泺大街',
          'area': '370199',
          'areaName': '山东省济南市高新区',
          'cityName': null,
          'contact': 'wx',
          'email': '123432343@qq.com',
          'id': 239,
          'isDefault': true,
          'mobilephone': '13333333333',
          'organizationId': 3,
          'postCode': '',
          'provinceName': null,
          'telephone': '0531-88888888',
          'type': 1
        }
      ]
    }
  },
  // 新增收货地址
  addAddress: config => {
    return {
      'msg': '添加成功',
      'code': 200
    }
  },
  // 修改收货地址
  updateAddress: config => {
    return {
      'msg': '修改成功',
      'code': 200
    }
  },
  // 删除收货地址
  deleteAddress: config => {
    return {
      'msg': '删除成功',
      'code': 200
    }
  }
}
