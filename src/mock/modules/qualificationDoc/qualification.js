export default {
  // 检定机构控制台-网站档案-资质文件-获取资质上传uuid
  getQualificationsKey: config => {
    return {
      'msg': '上传成功',
      'code': 200,
      'uuid': '8e92b5d0-a2e2-4a1c-af98-4a3ab227c9d0'
    }
  },
  attachmentIsExist: config => {
    return {
      'result': false
    }
  },
  // 上传附件
  attachmentUpload: config => {
    return {
      'msg': '上传成功',
      'code': 200
    }
  },
  attachmentDelete: config => {
    return {
      'msg': '删除成功',
      'code': 200
    }
  },
  deleteService: config => {
    return {
      'msg': '删除成功',
      'code': 200
    }
  },
  attachmentInit: config => {
    return {
      data: [
        {
          'caption': 'timg (1).jpg',
          'deleteUrl': 'http://192.168.99.249:9080/jlxxw/api/attachment/delete',
          'downloadUrl': 'http://192.168.99.249/vsftpd/3/8e92b5d0-a2e2-4a1c-af98-4a3ab227c9d0/timg%20%281%29.jpg',
          'size': 169580,
          'type': 'image'
        },
        {
          'caption': 'timg (4).jpg',
          'deleteUrl': 'http://192.168.99.249:9080/jlxxw/api/attachment/delete',
          'downloadUrl': 'http://192.168.99.249/vsftpd/3/8e92b5d0-a2e2-4a1c-af98-4a3ab227c9d0/timg%20%284%29.jpg',
          'size': 343137,
          'type': 'image'
        }
      ]
    }
  }
}
