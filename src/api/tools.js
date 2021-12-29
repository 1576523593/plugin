import { axios } from '@/utils/request'
// post
export function postAction (url, parameter) {
  return axios({
    url: url,
    method: 'post',
    data: parameter
  })
}
export function postActionHeader (url, parameter, headers) {
  return axios({
    url: url,
    method: 'post',
    headers: headers,
    timeout: 60000 * 10,
    data: parameter
  })
}
export function postActionHeaderParams (url, parameter, headers) {
  return axios({
    url: url,
    method: 'post',
    headers: headers,
    params: parameter
  })
}
// post method= {post | put}
export function httpAction (url, parameter, method) {
  return axios({
    url: url,
    method: method,
    data: parameter
  })
}
// put
export function putAction (url, parameter) {
  return axios({
    url: url,
    method: 'put',
    data: parameter
  })
}
// put header
export function putActionHeader (url, parameter, header) {
  return axios({
    url: url,
    method: 'put',
    data: parameter,
    headers: header
  })
}
// get
export function getAction (url, parameter) {
  return axios({
    url: url + '?' + Math.random(),
    method: 'get',
    params: parameter
  })
}
export function getActionHeader (url, parameter, header) {
  return axios({
    url: url + '?' + Math.random(),
    method: 'get',
    params: parameter,
    headers: header
  })
}
// deleteAction
export function deleteAction (url, parameter) {
  // console.log('deleteActiondeleteAction====', parameter)
  return axios({
    url: url,
    method: 'delete'
  })
}
export function deleteActionHeader (url, header) {
  // console.log('deleteActiondeleteAction====', parameter)
  return axios({
    url: url,
    method: 'delete',
    headers: header
  })
}
