export default {
  serviceList: config => {
    return {
      'msg': '查询成功',
      'code': 200,
      'data': {
        'total': 12,
        'size': 10,
        'current': 1,
        'records': [
          {
            id: 'WiaTcYRHFR',
            insName: '量块',
            insType: '量块',
            calibrationParams: [
              {
                accuracy: '1',
                level: '一等',
                measureRange: '≤100mm',
                unit: '块',
                price: '50',
                note: '这里是备注'
              },
              {
                accuracy: '1',
                level: '二等',
                measureRange: '≤120mm',
                unit: '块',
                price: '35',
                note: '这里是备注'
              }
            ]
          },
          {
            id: '1JB3w18Kxg',
            insName: '三等标准金属线纹尺',
            insType: '金属线纹尺',
            calibrationParams: [
              {
                accuracy: '1',
                level: '一等',
                measureRange: '≤10mm',
                unit: '把',
                price: '300',
                note: '这里是备注'
              },
              {
                accuracy: '1',
                level: '二等',
                measureRange: '≤35mm',
                unit: '把',
                price: '240',
                note: '这里是备注'
              }
            ]
          },
          {
            id: 'hzMwLJqcJX',
            insName: '标准钢卷尺',
            insType: '钢卷尺',
            calibrationParams: [
              {
                accuracy: '1',
                level: '一等',
                measureRange: '≤100mm',
                unit: '把',
                price: '15',
                note: '这里是备注'
              },
              {
                accuracy: '1',
                level: '二等',
                measureRange: '≤115mm',
                unit: '把',
                price: '10',
                note: '这里是备注'
              }
            ]
          },
          {
            id: '8WT8Wue1ew',
            insName: '样板直尺',
            insType: '直尺',
            calibrationParams: [
              {
                accuracy: '1',
                level: '一等',
                measureRange: '≤50mm',
                unit: '把',
                price: '35',
                note: '这里是备注'
              },
              {
                accuracy: '1',
                level: '二等',
                measureRange: '≤75mm',
                unit: '把',
                price: '20',
                note: '这里是备注'
              }
            ]
          }
        ]
      }
    }
  },
  add: config => {
    return {
      'msg': '器具添加成功',
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
            id: 'WiaTcYRHFR',
            insName: '量块',
            insType: '量块',
            calibrationParams: [
              {
                accuracy: '1',
                level: '一等',
                measureRange: '<100mm',
                unit: '块',
                price: '50',
                note: '这里是备注'
              },
              {
                accuracy: '2',
                level: '二等',
                measureRange: '<120mm',
                unit: '块',
                price: '35',
                note: '这里是备注'
              }
            ]
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
            id: '1JB3w18Kxg',
            insName: '三等标准金属线纹尺',
            insType: '金属线纹尺',
            calibrationParams: [
              {
                accuracy: '3',
                level: '一等',
                measureRange: '<10mm',
                unit: '把',
                price: '300',
                note: '这里是备注'
              },
              {
                accuracy: '4',
                level: '二等',
                measureRange: '<35mm',
                unit: '把',
                price: '240',
                note: '这里是备注'
              }
            ]
          }
      }
    }
  },
  delete: config => {
    return {
      'msg': '器具删除成功',
      'code': 200
    }
  },
  update: config => {
    return {
      'msg': '器具更新成功',
      'code': 200
    }
  }
}
