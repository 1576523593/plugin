export default {
  // 获取文章管理列表
  getClientArticleInfoManageList: config => {
    return {
      'msg': '查询成功',
      'code': 200,
      'total': 2,
      'rows': [
        {
          'articleType': 1,
          'attachment': '93AB4450-D95B-06D5-499A-6A2AAB3B5054',
          'author': 'xxl',
          'createTime': 1564366662000,
          'creator': 63,
          'editoruuid': null,
          'id': 174,
          'intro': '测试22222',
          'isRecommend': false,
          'isShowed': true,
          'orgId': 1,
          'pageView': 13,
          'picture': 357,
          'pictureAttachment': '124FEFA4-3050-2A07-2447-31612CA0F5C2',
          'pictureUrl': 'http://192.168.99.249/vsftpd/1/124FEFA4-3050-2A07-2447-31612CA0F5C2/%E8%8F%B2%E5%BE%8B%E5%AE%BE%E6%B5%B7%E5%B2%B8.jpg',
          'releaseTime': 1573717808000,
          'sort': 2,
          'tag': 1,
          'title': 'xxl测试新闻-行业动态'
        },
        {
          'articleType': 1,
          'attachment': 'E3F53277-FFA1-EF78-5CE2-CF80AD37E06A',
          'author': '测试',
          'createTime': 1573639381000,
          'creator': 2,
          'editoruuid': null,
          'id': 297,
          'intro': 'ddd',
          'isRecommend': false,
          'isShowed': true,
          'orgId': 1,
          'pageView': 1,
          'picture': 507,
          'pictureAttachment': '2FEE1FF3-BCC8-3B7C-9467-E485CD8C03C3',
          'pictureUrl': 'http://218.57.140.130:9318/vsftpd/1/2FEE1FF3-BCC8-3B7C-9467-E485CD8C03C3/yl308Vkj4NVM2yLCtzsHqzWtOp8rbeM5Pm9egYTE.jpeg',
          'releaseTime': 1573639381000,
          'sort': 1,
          'tag': 1,
          'title': '测试2'
        }
      ]
    }
  },
  // 删除文章
  deleteArticle: config => {
    return {
      'msg': '删除成功',
      'code': 200
    }
  },
  //  新增文章
  insertArticle: config => {
    return {
      'msg': '添加成功',
      'code': 200
    }
  },
  // 上传附件
  attachmentUpload: config => {
    return {
      'msg': '上传成功',
      'code': 200
    }
  },
  // 修改文章
  updateArticle: config => {
    return {
      'msg': '修改成功',
      'code': 200
    }
  },
  // 文章详情
  getArticle: config => {
    return {
      'msg': '查询成功',
      'code': 200,
      'data': {
        'articleType': 1,
        'attachment': '93AB4450-D95B-06D5-499A-6A2AAB3B5054',
        'attachmentList': [],
        'author': 'xxl',
        'content': '<p>测试22222</p>',
        'createTime': 1564366662000,
        'creator': 63,
        'editoruuid': null,
        'id': 174,
        'intro': '测试22222',
        'isRecommend': false,
        'isShowed': true,
        'orgId': 1,
        'pageView': 13,
        'picture': 357,
        'pictureAttachment': {
          'absolutePath': '1/124FEFA4-3050-2A07-2447-31612CA0F5C2/菲律宾海岸.jpg',
          'creator': 63,
          'deleteTime': null,
          'fk': '124FEFA4-3050-2A07-2447-31612CA0F5C2',
          'id': 1331,
          'name': '菲律宾海岸.jpg',
          'remark': null,
          'size': 430551,
          'status': 'success',
          'type': 'image',
          'uid': 1574754547450,
          'url': 'http://192.168.99.249/vsftpd/1/124FEFA4-3050-2A07-2447-31612CA0F5C2/%E8%8F%B2%E5%BE%8B%E5%AE%BE%E6%B5%B7%E5%B2%B8.jpg',
          'valid': true
        },
        'releaseTime': 1573717808000,
        'sort': 2,
        'tag': 1,
        'title': 'xxl测试新闻-行业动态'
      }
    }
  },
  getArticles: config => {
    return {
      'msg': '查询成功',
      'code': 200,
      'data': {
        'articleType': 1,
        'attachment': '93AB4450-D95B-06D5-499A-6A2AAB3B5054',
        'attachmentList': [],
        'author': 'xxl',
        'content': '<p>测试22222</p>',
        'createTime': 1564366662000,
        'creator': 63,
        'editoruuid': null,
        'id': 174,
        'intro': '测试22222',
        'isRecommend': false,
        'isShowed': true,
        'orgId': 1,
        'pageView': 13,
        'picture': 357,
        'pictureAttachment': {
          'absolutePath': '1/124FEFA4-3050-2A07-2447-31612CA0F5C2/菲律宾海岸.jpg',
          'creator': 63,
          'deleteTime': null,
          'fk': '124FEFA4-3050-2A07-2447-31612CA0F5C2',
          'id': 1331,
          'name': '菲律宾海岸.jpg',
          'remark': null,
          'size': 430551,
          'status': 'success',
          'type': 'image',
          'uid': 1574754547450,
          'url': 'http://192.168.99.249/vsftpd/1/124FEFA4-3050-2A07-2447-31612CA0F5C2/%E8%8F%B2%E5%BE%8B%E5%AE%BE%E6%B5%B7%E5%B2%B8.jpg',
          'valid': true
        },
        'releaseTime': 1573717808000,
        'sort': 2,
        'tag': 1,
        'title': 'xxl测试新闻-行业动态'
      }
    }
  }
}
