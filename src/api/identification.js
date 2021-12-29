import httpRequest from '@/request'

const API = {
  DICT_CATEGORY: '/front/meter/v1/meterDictionary/items',
  UNIT_GATEGORY: '/front/jiliang/v1/industryCategory/categoryTree',
  DISTRICTS_AREA: '/front/jiliang/v1/area/tree',
  DISTRICTS_OTHER_AREA: '/front/jiliang/v1/area/administration/',
  UPLOAD_FILE: '/front/jiliang/v1/sysAttachment',
  UNIT_APPLY_INFO_ALRERT: '/front/jiliang/v1/enterprise/current',
  GET_ARE_BY_CODE: '/front/meter/v1/meterAreaCode',
  REAL_IMG_URL: '/front/unit/v1/file/sign'
}

// 获取企业类型
export function getIndustrySpecific (parameter) {
  return httpRequest({
    url: `${API.DICT_CATEGORY}?typeId=${parameter}`,
    method: 'get'
  })
}

// 获取行业大类
export function getUnitCategory () {
  return httpRequest({
    url: API.UNIT_GATEGORY,
    method: 'get'
  })
}

// 获取行政区
export function getDistricts () {
  return httpRequest({
    url: API.DISTRICTS_AREA,
    method: 'get'
  })
}

// 获取所在管辖区
export function getOtherDistrcts (parameter) {
  return httpRequest({
    url: API.DISTRICTS_OTHER_AREA + parameter,
    method: 'get'
  })
}

// 上传附件
export function uploadFile (parameter) {
  return httpRequest({
    url: API.UPLOAD_FILE,
    timeout: 30 * 1000,
    method: 'post',
    data: parameter
  })
}

// 获取认证信息
export function getUnitApplyInfoAlert (parameter) {
  return httpRequest({
    url: API.UNIT_APPLY_INFO_ALRERT,
    method: 'get',
    params: parameter
  })
}

// 企业认证
export function doEnterpriseApply (parameter) {
  return httpRequest({
    url: API.UNIT_APPLY_INFO_ALRERT,
    method: 'put',
    data: parameter
  })
}

// 行政区反显
export function getAreaCodeByCode (parameter) {
  return httpRequest({
    url: API.GET_ARE_BY_CODE + '/' + parameter,
    method: 'get'
  })
}

// 获取附件
export function getRealImgUrl (parameter) {
  return httpRequest({
    url: API.REAL_IMG_URL,
    method: 'get',
    params: parameter
  })
}
