export default {
  SUCCESS_CODE: 0,
  UNIT_PREFIX: '88.163.12', // 企业节点
  DIC_TYPE: {
    METER_STATUS: 'meter_satus', // 器具状态
    ABC_CODE: 'meter_abc_code', // abccode
    USING: 'meter_purpose', // 用途
    FACTORY_AREA: 'factory_area', // 厂区
    IS_RECORD: 'is_force_verify', // 是否强检
    TRACING_WAY: 'tracing_way', // 溯源方式
    VERIFY_CYCLE: 'verify_cycle', // 检校周期
    VERIFY_RESULT: 'verify_result', // 检校结果
    MENU_TYPE: 'resource_type', // 菜单类型
    USER_STATUS: 'user_status', // 用户状态
    ORDER_TYPE: 'delegate_order_type', // 委托单类型
    URGENT_TYPE: 'is_urgent', // 是否加急
    SEND_TYPE: 'send_type', // 送检状态
    IS_REPAIRE: 'is_repare', // 是否调休
    METER_PICK_TYPE: 'meters_way', // 器具提取方式
    CERTIFICATE_PICK_TYPE: 'certificate_way', // 证书提取方式
    METER_FILTER_TYPE: 'meter_select_type',
    SCENCE_TYPE: 'meter_use_scene', // 能源计量器具使用场合
    ACCEPT_TYPE: 'accept_type', // 受理意见
    CERTIFICATE_TYPE: 'delegate_order_type'
  },
  METER_TEMPLATE_URL: process.env.VUE_APP_API_BASE_URL + '/attachment/template/meter_import/导入器具台账模板.xlsx', // 器具模板下载url
  METER_TEMPLATE_URL_TEST: process.env.VUE_APP_API_BASE_URL + '/attachment/template/meter_import/导入器具台账模板.xlsx'
}
