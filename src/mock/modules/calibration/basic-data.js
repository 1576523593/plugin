export default {
  getOrganizationInfo: config => {
    return {
      'address': '啊哈哈1',
      'area': '110101',
      'code': 200,
      'intro': '山东大陆计量科技有限公司成立于 2016 年12月份，是大陆股份的全资子公司，是致力于智慧计量领域的互联网平台、物联网标识系统、计量检验校准等服务的一个创新计量服务模式的公司。↵我们的理念是：智慧计量的实践者。↵山东大陆计量科技有限公司成立于 2016 年12月份，是大陆股份的全资子公司，是致力于智慧计量领域的互联网平台、物联网标识系统、计量检验校准等服务的一个创新计量服务模式的公司。',
      'logo': 'http://192.168.99.249/vsftpd/3/d48e3d39-7ed1-4609-be9c-8272c760fe38/timg.jpg',
      'logoKey': 'd48e3d39-7ed1-4609-be9c-8272c760fe38',
      'logoName': 'timg.jpg',
      'msg': '查询成功',
      'name': '公司人员账号检定机构',
      'surfacePlot': 'http://192.168.99.249/vsftpd/3/38c7de67-2316-45fa-93ab-334915134eb4/timg%20%281%29.jpg',
      'surfacePlotKey': '38c7de67-2316-45fa-93ab-334915134eb4',
      'surfacePlotName': 'timg (1).jpg',
      'contactNumber': 13333333333
    }
  },
  editOrganizationInfo: config => {
    return {
      'msg': '提交资料成功',
      'code': 200
    }
  },
  attachmentInit: config => {
    return {
      'msg': '获取成功',
      'code': 200,
      data: [
        {
          'caption': 'timg.jpg',
          'deleteUrl': 'http://192.168.99.249:9080/jlxxw/api/attachment/delete',
          'downloadUrl': 'http://192.168.99.249/vsftpd/3/d48e3d39-7ed1-4609-be9c-8272c760fe38/timg.jpg',
          'size': 113548,
          'type': 'image'
        }
      ]
    }
  }
}
