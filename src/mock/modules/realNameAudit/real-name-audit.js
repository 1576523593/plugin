export default {
  // 获取实名认证待审核列表
  getWaitCheckList: config => {
    return {
      'msg': '查询成功',
      'code': 200,
      'total': 2,
      'organizations': [
        {
          'createTime': {
            'chronology': {
              'calendarType': 'iso8601',
              'id': 'ISO'
            },
            'dayOfMonth': 26,
            'dayOfWeek': 'TUESDAY',
            'dayOfYear': 330,
            // 'elm': text,
            'hour': 9,
            'minute': 48,
            'month': 'NOVEMBER',
            'monthValue': 11,
            'nano': 0,
            'second': 1,
            'year': 2019
          },
          'creator': 209,
          'creatorName': 'jdjg11',
          'id': 634,
          'name': '測試',
          'phone': '',
          'status': 1,
          'statusCN': '审核通过'
        },
        {
          'createTime': {
            'chronology': {
              'calendarType': 'iso8601',
              'id': 'ISO'
            },
            'dayOfMonth': 7,
            'dayOfWeek': 'THURSDAY',
            'dayOfYear': 311,
            // elm: text
            'hour': 16,
            'minute': 10,
            'month': 'NOVEMBER',
            'monthValue': 11,
            'nano': 0,
            'second': 37,
            'year': 2019
          },
          'creator': 202,
          'creatorName': 'xxlsydw4',
          'id': 632,
          'name': '1',
          'phone': '',
          'status': 1,
          'statusCN': '审核通过'
        }
      ]
    }
  },
  // 获取机构信息
  getDetail: config => {
    return {
      'msg': '查询成功',
      'code': 200,
      'total': 2,
      'businessLicenseAttachment': [
        {
          'absolutePath': 'businessLicense/68C7E96C-41F9-30C8-E9A4-22F17BB344F5/562c11dfa9ec8a1381e65c49fd03918fa1ecc09f.jpg',
          // createTime: Object
          'creator': 209,
          'deleteTime': null,
          'fk': '68C7E96C-41F9-30C8-E9A4-22F17BB344F5',
          'id': 2552,
          'name': '562c11dfa9ec8a1381e65c49fd03918fa1ecc09f.jpg',
          'remark': null,
          'size': 18884,
          'status': 'success',
          'type': 'image',
          'uid': 1574737665902,
          'url': 'http://218.57.140.130:9318/vsftpd/businessLicense/68C7E96C-41F9-30C8-E9A4-22F17BB344F5/562c11dfa9ec8a1381e65c49fd03918fa1ecc09f.jpg',
          'valid': true
        }
      ],
      'organization': {
        'address': '測',
        'area': '110101',
        'areaName': null,
        'bankAccount': '142215445951125',
        'bankName': '測試',
        'banner': null,
        'bidCount': null,
        'businessLicense': '',
        'businessLicenseId': '68C7E96C-41F9-30C8-E9A4-22F17BB344F5',
        'businessLicenseUrl': null,
        'checkTime': null,
        'checker': null,
        'cncbVirtualAccount': null,
        'code': '142215197012142256',
        'contact': '測試',
        'contactEmail': null,
        'contactPhone': '17109324198',
        // 'createTime': {dayOfMonth: 26, hour: 9, minute: 48, month: "NOVEMBER", monthValue: 11, …}
        'creator': 209,
        'creatorName': null,
        'email': 'dacaw@161.com',
        'fax': '0000-00000000',
        'id': 634,
        'identityNo': '142215197012142256',
        'intro': null,
        'introPicture': null,
        'isHasFree': true,
        'isHasRead': null,
        'legalPerson': '測試',
        'logo': 'd6c0c4a1-2cd2-4c5b-a53f-59c80ad209cb',
        'logoUrl': null,
        'name': '測試',
        'payPassword': null,
        'paySalt': null,
        'phone': '',
        'postCode': '000000',
        'qualification': '892e7a0e-f04b-450b-af6e-c4ed071ae3db',
        'refuseReason': '',
        'remark': null,
        'road': null,
        'serviceDueDate': 1582681761000,
        'serviceId': 59,
        'servicePurchaseDate': 1574732961000,
        'size': '1',
        'stars': null,
        'status': 1,
        'statusCN': null,
        'superior': '測試',
        'surfacePlot': 'c9a1b505-0c81-4d35-9194-0d3238a8e631',
        'tradeType': 74,
        'type': 1,
        'websiteName': null,
        'websiteUrl': null,
        'wechat': '680748ac-a19d-4c36-8495-cca514fae847',
        'whereFrom': 0
      }
    }
  },
  // 认证审核
  identification: config => {
    return {
      'msg': '审核已通过',
      'code': 200
    }
  }
}
