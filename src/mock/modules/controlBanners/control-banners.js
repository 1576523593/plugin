export default {
  // 获取Banner列表
  operatorBanners: config => {
    return {
      'code': 200,
      'frontValidCount': 4,
      'msg': '查询成功',
      'newsValidCount': 5,
      'total': 26,
      'vccsValidCount': 7,
      'rows': [
        {
          'attachment': 'FFD654A1-C354-0B58-4E60-46E416FA3912',
          'attachmentJSON': {
            'fk': 'FFD654A1-C354-0B58-4E60-46E416FA3912',
            'name': 'banner1122.jpg',
            'url': 'http://192.168.99.249/vsftpd/1/FFD654A1-C354-0B58-4E60-46E416FA3912/banner1122.jpg'
          },
          'create_org': 1,
          'creator': 14,
          'creatorName': 'wxadmin',
          'id': 199,
          'is_valid': true,
          'location': 5,
          'redirect': 'www.baidu.com',
          'remark': null,
          'sort': 1
        },
        {
          'attachment': '8E787D90-198A-6A7D-35FD-B4651A187971',
          'attachmentJSON': {
            'fk': '8E787D90-198A-6A7D-35FD-B4651A187971',
            'name': 'banner1122.jpg',
            'url': 'http://192.168.99.249/vsftpd/1/8E787D90-198A-6A7D-35FD-B4651A187971/banner1122.jpg'
          },
          'create_org': 1,
          'creator': 1,
          'creatorName': 'csadmin',
          'id': 249,
          'is_valid': true,
          'location': 2,
          'redirect': 'http://www.baidu.com',
          'remark': null,
          'sort': 5
        }
      ]
    }
  },
  operatorBanner: config => {
    return {
      'code': 200,
      'msg': '删除成功'
    }
  },
  insertBanner: config => {
    return {
      'code': 200,
      'msg': '添加成功'
    }
  },
  updatebanner: config => {
    return {
      'code': 200,
      'msg': '添加成功'
    }
  }
}
