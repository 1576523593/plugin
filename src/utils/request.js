/* eslint-disable import/no-duplicates */
import httpRequest from '@/request'

function postAction (url, parameter) {
  return httpRequest({
    url: url,
    method: 'post',
    data: parameter
  })
}
function putAction (url, parameter) {
  return httpRequest({
    url: url,
    method: 'put',
    data: parameter
  })
}

function getAction (url, parameter) {
  return httpRequest({
    url: url,
    method: 'get',
    params: parameter
  })
}

function deleteAction (url, parameter) {
  return httpRequest({
    url: url,
    method: 'delete',
    params: parameter
  })
}

// post method= {post | put}
function httpAction (url, parameter, method) {
  return httpRequest({
    url: url,
    method: method,
    data: parameter
  })
}

// 导出excel
function exportExcel (url) {
  return httpRequest({
    url: url,
    method: 'get',
    responseType: 'blob'
  })
}

export {
  postAction,
  getAction,
  putAction,
  deleteAction,
  httpAction,
  exportExcel
}
