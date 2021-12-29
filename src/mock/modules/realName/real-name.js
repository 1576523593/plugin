export default {
  // 获取行业类型
  getIndustryTypes: config => {
    return {
      'msg': '查询成功',
      'code': 200,
      'industryTypes': [
        {
          'classId': 12,
          'className': '行业类型',
          'id': 73,
          'itemId': 1,
          'itemName': '农、林、牧、渔业',
          'remark': null,
          'sort': 1,
          'status': 1,
          'value': null
        },
        {
          'classId': 12,
          'className': '行业类型',
          'id': 79,
          'itemId': 2,
          'itemName': '采矿业',
          'remark': null,
          'sort': 2,
          'status': 1,
          'value': null
        }
      ]
    }
  },
  // 获取实名认证信息
  getIdentificationInfo: config => {
    return {
      'msg': '查询成功',
      'code': 200,
      'info': {
        'address': '详细地址1',
        'area': '110101',
        'areaName': null,
        'bankAccount': '123455555',
        'bankName': '5555',
        'banner': null,
        'bidCount': null,
        'businessLicense': '',
        'businessLicenseId': 'DEB6BE72-ABEC-2442-D789-A9ACFA137670',
        'businessLicenseUrl': null,
        'checkTime': null,
        'checker': null,
        'cncbVirtualAccount': null,
        'code': '22222222222222222Q',
        'contact': '使用单位',
        'contactEmail': null,
        'contactPhone': '18563708528',
        'createTime': {
          'chronology': { calendarType: 'iso8601', id: 'ISO' },
          'dayOfMonth': 30,
          'dayOfWeek': 'TUESDAY',
          'dayOfYear': 211,
          'hour': 11,
          'minute': 41,
          'month': 'JULY',
          'monthValue': 7,
          'nano': 0,
          'second': 35,
          'year': 2019
        },
        'creator': 7,
        'creatorName': null,
        'email': '33333@qq.com',
        'fax': '0531-88881234',
        'id': 4,
        'identityNo': '370181199009080099',
        'intro': null,
        'introPicture': null,
        'isHasFree': null,
        'isHasRead': null,
        'legalPerson': '法人代表',
        'logo': '914166ae-2de3-4e55-af85-5ccb2ae4e795',
        'logoUrl': null,
        'name': '使用单位',
        'payPassword': null,
        'paySalt': null,
        'phone': '0531-88881234',
        'postCode': '250000',
        'qualification': '895e2570-b167-4eae-bf41-d3db42e1e316',
        'refuseReason': '',
        'remark': null,
        'road': null,
        'serviceDueDate': null,
        'serviceId': null,
        'servicePurchaseDate': null,
        'size': '4',
        'stars': null,
        'status': 1,
        'statusCN': null,
        'superior': '上级单位',
        'surfacePlot': '8b084a77-b176-4efa-b25a-ace091c09a91',
        'tradeType': 79,
        'type': 2,
        'websiteName': null,
        'websiteUrl': null,
        'wechat': '4d5278f8-25f1-4505-9bc4-6b1319723cd9',
        'whereFrom': 0
      }
    }
  },
  // 获取短信验证码
  sendCodeByPhone: config => {
    return {
      'msg': '短信验证码发送成功',
      'code': 200
    }
  },
  // 验证验证码
  codeCheckByPhone: config => {
    return {
      'msg': '访问成功',
      'code': 200,
      'valid': true
    }
  },
  // 根据组织机构代码查验
  isExist: config => {
    return {
      'msg': '访问成功',
      'code': 200,
      'valid': true
    }
  },
  // 获取附件图片
  attachmentInit: config => {
    return {
      'msg': '访问成功',
      'code': 200,
      'data': [
        {
          'caption': '智慧农贸市场.png',
          'deleteUrl': 'http://192.168.99.249:9080/jlxxw/api/attachment/delete',
          'downloadUrl': 'http://192.168.99.249/vsftpd/businessLicense/DEB6BE72-ABEC-2442-D789-A9ACFA137670/%E6%99%BA%E6%85%A7%E5%86%9C%E8%B4%B8%E5%B8%82%E5%9C%BA.png',
          'size': 140493,
          'type': 'image'
        }
      ]
    }
  },
  // 删除附件
  attachmentDelete: config => {
    return {
      'msg': '删除成功',
      'code': 200
    }
  },
  // 上传营业执照图片
  businessLicenseUpload: config => {
    return {
      'msg': '上传成功',
      'code': 200
    }
  },
  // 实名认证---提交
  identificationApply: config => {
    return {
      'msg': '提交成功',
      'code': 200
    }
  },
  identificationApplyS: config => {
    return {
      'msg': '提交成功',
      'code': 200
    }
  }
}
