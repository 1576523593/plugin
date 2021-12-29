export default {
  // 前台获取文章列表
  articleInfoList: config => {
    return {
      'msg': '获取文章列表成功',
      'code': 200,
      'total': 71,
      'data': [
        {
          'articleType': 1,
          'attachment': '93AB4450-D95B-06D5-499A-6A2AAB3B5054',
          'author': 'xxl',
          'createTime': 1564366662000,
          'creator': 63,
          'editoruuid': null,
          'id': 174,
          'intro': '',
          'isRecommend': false,
          'isShowed': true,
          'orgId': 1,
          'pageView': 18,
          'picture': 357,
          'pictureAttachment': '124FEFA4-3050-2A07-2447-31612CA0F5C2',
          'pictureUrl': 'http://192.168.99.249/vsftpd/1/124FEFA4-3050-2A07-2447-31612CA0F5C2/%E8%8F%B2%E5%BE%8B%E5%AE%BE%E6%B5%B7%E5%B2%B8.jpg',
          'releaseTime': 1574930945000,
          'sort': 2,
          'tag': 1,
          'title': 'xxl测试新闻-行业动态'
        }
      ]
    }
  },
  addPageView: config => {
    return {
      'code': 200,
      'data': 2,
      'msg': '成功新增浏览量'
    }
  },
  articleInfoListRecommed: config => {
    return {
      'msg': '获取文章列表成功',
      'code': 200,
      'total': 71,
      'data': [
        {
          'articleType': 1,
          'attachment': '93AB4450-D95B-06D5-499A-6A2AAB3B5054',
          'author': 'xxl',
          'createTime': 1564366662000,
          'creator': 63,
          'editoruuid': null,
          'id': 175,
          'intro': '',
          'isRecommend': false,
          'isShowed': true,
          'orgId': 1,
          'pageView': 18,
          'picture': 357,
          'pictureAttachment': '124FEFA4-3050-2A07-2447-31612CA0F5C2',
          'pictureUrl': 'http://192.168.99.249/vsftpd/1/124FEFA4-3050-2A07-2447-31612CA0F5C2/%E8%8F%B2%E5%BE%8B%E5%AE%BE%E6%B5%B7%E5%B2%B8.jpg',
          'releaseTime': 1574930945000,
          'sort': 2,
          'tag': 1,
          'title': 'xxl测试新闻-行业动态'
        }
      ]
    }
  },
  articleDetails: config => {
    return {
      'msg': '查询成功',
      'code': 200,
      'data': {
        'articleType': 1,
        'attachment': 'E3F53277-FFA1-EF78-5CE2-CF80AD37E06A',
        'attachmentList': [
          {
            'absolutePath': '1/E3F53277-FFA1-EF78-5CE2-CF80AD37E06A/sound.mp3',
            'creator': 2,
            'deleteTime': null,
            'fk': 'E3F53277-FFA1-EF78-5CE2-CF80AD37E06A',
            'id': 2551,
            'name': 'sound.mp3',
            'remark': null,
            'size': 1345502,
            'type': 'audio',
            'url': 'http://218.57.140.130:9318/vsftpd/1/E3F53277-FFA1-EF78-5CE2-CF80AD37E06A/sound.mp3',
            'valid': true
          }
        ],
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
      },
      'nextdata': {
        'code': '200',
        'id': 287,
        'title': 'CNAS-GLXX《测量设备期间核查的方法指南》'
      },
      'predata': {
        'code': '200',
        'id': 298,
        'title': '1'
      }
    }
  }
}
