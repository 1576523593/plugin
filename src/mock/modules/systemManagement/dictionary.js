export default {
  dicList: config => {
    return {
      'msg': '查询成功',
      'code': 200,
      'data': {
        'total': 12,
        'size': 10,
        'current': 1,
        'records': [
          {
            'code': 'SQLX',
            'createTime': '2019-11-12 15:49:47',
            'createUser': 1,
            'description': '',
            'dictTypeId': '1194160341957742593',
            'name': 'SQL',
            'sort': '',
            'status': 'ENABLE',
            'systemFlag': 'N',
            'updateTime': '',
            'updateUser': ''
          },
          {
            'code': '11',
            'createTime': '2019-11-16 14:59:25',
            'createUser': 1,
            'description': '1',
            'dictTypeId': '11955972212491591701',
            'name': '测试',
            'sort': 1,
            'status': 'ENABLE',
            'systemFlag': 'N',
            'updateTime': '',
            'updateUser': ''
          },
          {
            'code': 'asdasd',
            'createTime': '2019-11-11 10:18:17',
            'createUser': 1,
            'description': '',
            'dictTypeId': '11937145302789693462',
            'name': 'asda',
            'sort': 1,
            'status': 'ENABLE',
            'systemFlag': 'Y',
            'updateTime': '',
            'updateUser': ''
          },
          {
            'code': '2',
            'createTime': '2019-11-14 15:09:42',
            'createUser': 1,
            'description': '2',
            'dictTypeId': '1194875031428009986',
            'name': 'z',
            'sort': 2,
            'status': 'ENABLE',
            'systemFlag': 'N',
            'updateTime': '',
            'updateUser': ''
          },
          {
            'code': 'DEL_FLAG',
            'createTime': '2019-03-14 17:10:26',
            'createUser': 1,
            'description': '',
            'dictTypeId': '1106120388036902914',
            'name': '删除',
            'sort': 2,
            'status': 'ENABLE',
            'systemFlag': 'Y',
            'updateTime': '2019-03-27 16:26:31',
            'updateUser': 1
          },
          {
            'code': 'STATUS',
            'createTime': '2019-03-14 17:09:57',
            'createUser': 1,
            'description': '',
            'dictTypeId': '1106120265689055233',
            'name': '状态',
            'sort': 3,
            'status': 'ENABLE',
            'systemFlag': 'Y',
            'updateTime': '',
            'updateUser': ''
          },
          {
            'code': 'SEX',
            'createTime': '2019-03-14 17:09:43',
            'createUser': 1,
            'description': '',
            'dictTypeId': '1106120208097067009',
            'name': '性别',
            'sort': 4,
            'status': 'ENABLE',
            'systemFlag': 'Y',
            'updateTime': '',
            'updateUser': ''
          },
          {
            'code': '1212',
            'createTime': '2019-11-18 18:35:22',
            'createUser': 1,
            'description': '1',
            'dictTypeId': '1196376340564021249',
            'name': '12w1',
            'sort': 11,
            'status': 'ENABLE',
            'systemFlag': 'N',
            'updateTime': '',
            'updateUser': ''
          },
          {
            'code': 'test',
            'createTime': '2019-11-10 15:35:24',
            'createUser': 1,
            'description': '',
            'dictTypeId': '1193431946487664641',
            'name': 'tst',
            'sort': 22,
            'status': 'ENABLE',
            'systemFlag': 'N',
            'updateTime': '',
            'updateUser': ''
          },
          {
            'code': 'ACCOUNT_STATUS',
            'createTime': '2019-03-14 17:10:10',
            'createUser': 1,
            'description': '',
            'dictTypeId': '1106120322450571266',
            'name': '账号状态',
            'sort': 40,
            'status': 'ENABLE',
            'systemFlag': 'Y',
            'updateTime': '2019-08-11 20:46:38',
            'updateUser': 1
          }
        ],
        'msg': '获取成功'
      }

    }
  },
  addItem: config => {
    return {
      'msg': '数据字典添加成功',
      'code': 200
    }
  },
  deleteItem: config => {
    return {
      'msg': '数据字典删除成功',
      'code': 200
    }
  },
  updateItem: config => {
    return {
      'msg': '数据字典更新成功',
      'code': 200
    }
  },
  // 根据字典类型获取字典详情列表
  getDicListByType: config => {
    return {
      'code': 200,
      'data': {
        'total': 12,
        'size': 10,
        'current': 1,
        'records': [
          {
            'code': '1',
            'createTime': '2019-11-12 15:50:06',
            'createUser': 1,
            'description': '',
            'dictId': '1194160422245109761',
            'dictTypeId': '1194160341957742593',
            'name': '试用',
            'parentId': 0,
            'parentIds': '[0]',
            'sort': '',
            'status': 'ENABLE',
            'updateTime': '',
            'updateUser': ''
          },
          {
            'code': '2',
            'createTime': '2019-11-12 15:50:38',
            'createUser': 1,
            'description': '',
            'dictId': '1194160558182502402',
            'dictTypeId': '1194160341957742593',
            'name': '正常',
            'parentId': 0,
            'parentIds': '[0]',
            'sort': '',
            'status': 'ENABLE',
            'updateTime': '',
            'updateUser': ''
          },
          {
            'code': '3',
            'createTime': '2019-11-12 16:01:24',
            'createUser': 1,
            'description': '',
            'dictId': '1194163266935328770',
            'dictTypeId': '1194160341957742593',
            'name': 'tcp',
            'parentId': 0,
            'parentIds': '[0]',
            'sort': '',
            'status': 'ENABLE',
            'updateTime': '',
            'updateUser': ''
          },
          {
            'code': '',
            'createTime': '',
            'createUser': '',
            'description': '',
            'dictId': 0,
            'dictTypeId': '',
            'name': '测试',
            'parentId': -999,
            'parentIds': '',
            'sort': '',
            'status': 'DISABLE',
            'updateTime': '',
            'updateUser': ''
          }
        ],
        'msg': '根据类型获取字典列表成功'
      }
    }
  },
  getDicListByTypeOne: config => {
    return {
      'code': 200,
      'data': {
        'total': 12,
        'size': 10,
        'current': 1,
        'records': [
          {
            'code': '4',
            'createTime': '2019-11-12 20:50:06',
            'createUser': 1,
            'description': '',
            'dictId': '11941604222451097611',
            'dictTypeId': '11941603419577425931',
            'name': '测试测试',
            'parentId': 0,
            'parentIds': '[0]',
            'sort': '',
            'status': 'ENABLE',
            'updateTime': '',
            'updateUser': ''
          },
          {
            'code': '5',
            'createTime': '2019-11-12 21:50:38',
            'createUser': 1,
            'description': '',
            'dictId': '11941605581825024021',
            'dictTypeId': '11941603419577425931',
            'name': '正在使用中',
            'parentId': 0,
            'parentIds': '[0]',
            'sort': '',
            'status': 'ENABLE',
            'updateTime': '',
            'updateUser': ''
          },
          {
            'code': '6',
            'createTime': '2019-11-12 22:01:24',
            'createUser': 1,
            'description': '',
            'dictId': '11941632669353287701',
            'dictTypeId': '11941603419577425931',
            'name': '禁用',
            'parentId': 0,
            'parentIds': '[0]',
            'sort': '',
            'status': 'ENABLE',
            'updateTime': '',
            'updateUser': ''
          }
        ],
        'msg': '根据类型获取字典列表成功'
      }
    }
  },
  getDicListByTypeTwo: config => {
    return {
      'code': 200,
      'data': {
        'total': 12,
        'size': 10,
        'current': 1,
        'records': [
          {
            'code': '7',
            'createTime': '2019-11-12 12:50:06',
            'createUser': 1,
            'description': '',
            'dictId': '11941604222451097612',
            'dictTypeId': '11941603419577425932',
            'name': '请假流程标识',
            'parentId': 0,
            'parentIds': '[0]',
            'sort': '',
            'status': 'ENABLE',
            'updateTime': '',
            'updateUser': ''
          },
          {
            'code': '8',
            'createTime': '2019-11-12 13:50:38',
            'createUser': 1,
            'description': '',
            'dictId': '11941605581825024022',
            'dictTypeId': '11941603419577425932',
            'name': '财务流程标识',
            'parentId': 0,
            'parentIds': '[0]',
            'sort': '',
            'status': 'ENABLE',
            'updateTime': '',
            'updateUser': ''
          },
          {
            'code': '9',
            'createTime': '2019-11-12 14:01:24',
            'createUser': 1,
            'description': '',
            'dictId': '11941632669353287702',
            'dictTypeId': '11941603419577425932',
            'name': '系统管理',
            'parentId': 0,
            'parentIds': '[0]',
            'sort': '',
            'status': 'ENABLE',
            'updateTime': '',
            'updateUser': ''
          }
        ],
        'msg': '根据类型获取字典列表成功'
      }
    }
  }
}
