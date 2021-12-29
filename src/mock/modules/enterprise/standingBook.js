export default {
  standList: config => {
    return {
      'msg': '查询成功',
      'code': 200,
      'data': {
        'total': 12,
        'size': 10,
        'current': 1,
        'records': [
          {
            id: 'X0aCjXlz',
            code: '',
            name: '压力表',
            specificationModel: 'HY76549-1',
            range: '0-2.5Mpa',
            accuracy: '0-9',
            level: '1级',
            productOrg: 'xxx厂',
            productNumber: '20000321',
            productDate: '2019-11-27 08:58:47',
            productDependency: '内地',
            classification: '压力表',
            abcCode: 'A',
            using: '社会公用计量标准',
            usePlace: '济南市',
            status: '0',
            certificateCode: '00001',
            certificateType: '0',
            verificationCalibrationDate: '2019-11-28 09:09:12',
            certificateValidityPeriod: '2019-12-27 09:10:22',
            remark: '这里是备注1'
          },
          {
            id: 'qVvLIVuo',
            code: '',
            name: '蒸汽表',
            specificationModel: 'HY76549-2',
            range: '0-3Mpa',
            accuracy: '0-3',
            level: '2级',
            productOrg: 'xx厂',
            productNumber: '20000123',
            productDate: '2019-11-29 08:58:47',
            productDependency: '内地',
            classification: '压力表',
            abcCode: 'B',
            using: '社会公用计量标准',
            usePlace: '济南市历下区',
            status: '1',
            certificateCode: '00002',
            certificateType: '1',
            verificationCalibrationDate: '2019-12-28 09:09:12',
            certificateValidityPeriod: '2020-12-27 09:10:22',
            remark: '这里是备注2'
          },
          {
            id: 'xvOWwc83',
            code: '',
            name: '电子秤',
            specificationModel: 'HY76549-2',
            range: '0-1000kg',
            accuracy: '0-4',
            level: '3级',
            productOrg: 'x厂',
            productNumber: '20000456',
            productDate: '2019-05-06 08:58:47',
            productDependency: '内地',
            classification: '压力表',
            abcCode: 'B',
            using: '社会公用计量标准',
            usePlace: '济南市高新区',
            status: '2',
            certificateCode: '00002',
            certificateType: '0',
            verificationCalibrationDate: '2019-2-28 09:09:12',
            certificateValidityPeriod: '2020-10-27 09:10:22',
            remark: '这里是备注3'
          }
        ]
      }
    }
  },
  add: config => {
    return {
      'msg': '台账添加成功',
      'code': 200
    }
  },
  update: config => {
    return {
      'msg': '台账修改成功',
      'code': 200
    }
  },
  delete: config => {
    return {
      'msg': '台账删除成功',
      'code': 200
    }
  },
  toCode: config => {
    return {
      'msg': '赋码成功',
      'code': 200
    }
  },
  uploadTemplate: config => {
    return {
      'msg': '台账文件已上传',
      'code': 200
    }
  },
  detailOne: config => {
    return {
      'msg': '查询成功',
      'code': 200,
      'data': {
        'total': 12,
        'size': 10,
        'current': 1,
        'records':
          {
            id: 'X0aCjXlz',
            code: 'AeKqckIItPljQab',
            name: '压力表',
            specificationModel: 'HY76549-1',
            range: '0-2.5Mpa',
            accuracy: '0-9',
            level: '1级',
            productOrg: 'xxx厂',
            productNumber: '20000321',
            productDate: '2019-11-27 08:58:47',
            productDependency: '内地',
            classification: '1',
            abcCode: 'A',
            using: '社会公用计量标准',
            usePlace: '济南市',
            status: '0',
            certificateCode: '00001',
            certificateType: '0',
            verificationCalibrationDate: '2019-11-28 09:09:12',
            certificateValidityPeriod: '2019-12-27 09:10:22',
            remark: '这里是备注1'
          }
      }
    }
  },
  detailTwo: config => {
    return {
      'msg': '查询成功',
      'code': 200,
      'data': {
        'total': 12,
        'size': 10,
        'current': 1,
        'records':
          {
            id: 'qVvLIVuo',
            code: 'u7TdQLOEljTCVKQ',
            name: '蒸汽表',
            specificationModel: 'HY76549-2',
            range: '0-3Mpa',
            accuracy: '0-3',
            level: '2级',
            productOrg: 'xx厂',
            productNumber: '20000123',
            productDate: '2019-11-29 08:58:47',
            productDependency: '内地',
            classification: '2',
            abcCode: 'B',
            using: '社会公用计量标准',
            usePlace: '济南市历下区',
            status: '1',
            certificateCode: '00002',
            certificateType: '1',
            verificationCalibrationDate: '2019-12-28 09:09:12',
            certificateValidityPeriod: '2020-12-27 09:10:22',
            remark: '这里是备注2'
          }
      }
    }
  }
}
