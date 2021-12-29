import httpRequest from '@/request'

const API_URL = {
  GET_TOTAL_NUM: '/front/jiliang/v1/meter/countTotalNumber',
  HOME_TABLE_HEADER_NUM: '/front/jiliang/v1/meter/purposeTotal',
  HOME_CHARTS_URL: '/front/jiliang/v1/meter/countPassRate'
}

// 器具统计数量查询
export function getTotalNum () {
  return httpRequest({
    url: API_URL.GET_TOTAL_NUM,
    method: 'get'
  })
}

// 获取首页列表展示的头部的数量
export function getTableHeaderTotalNum () {
  return httpRequest({
    url: API_URL.HOME_TABLE_HEADER_NUM,
    method: 'get'
  })
}

// 获取表信息
export function getEChartData() {
  return httpRequest({
    url: API_URL.HOME_CHARTS_URL,
    method: 'get'
  })
}
