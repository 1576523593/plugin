import httpRequest from '@/request'

// 获取消息列表
export function getNotice () {
  return httpRequest({
    url: '/front/sun/v1/noticeMessage/list',
    method: 'get'
  })
}
// 获取消息列表
export function readMsg (id) {
  return httpRequest({
    url: `/front/sun/v1/noticeMessage/read/${id}`,
    method: 'put'
  })
}
