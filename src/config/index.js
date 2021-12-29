export default {
  /**
   * @description token在Cookie中存储的天数，默认1天
   */
  cookieExpires: 1,
  /**
   * @description token在Cookie中存储的分钟数，默认30分钟
   */
  cookieExpires30Minutes: 1 / 48,
  /**
   * @description api请求基础路径
   */
  baseUrl: {
    dev: '/api',
    pro: '/api',
    staging: '/api',
    platfromDev: 'http://218.57.140.130:9080/',
    platfromPro: 'https://192.168.98.25:9000/',
    platfromStaging: 'http://192.168.99.2y49:9080/'
  },
  /**
   * @description 默认打开的首页的路由name
   */
  homeName: 'control-home',
  /**
   * @description 账号退出登录后跳转的页面网址
   */
  websiteHomepage: {
    dev: 'http://localhost',
    // dev: 'http://218.57.140.130:9080/jlxxw/api/',
    // pro: 'http://simulation.jiliangqiju.cn/',
    pro: 'http://www.jiliangqiju.cn/',
    // staging: 'http://218.57.140.130:9318/'
    staging: 'http://192.168.96.201'
  },
  /**
   * @description 账号被强制退出登录后跳转的登录页面网址
   */
  websiteLoginUrl: {
    dev: 'http://localhost/login',
    // dev: 'http://218.57.140.130:9080/jlxxw/api/',
    // pro: 'http://simulation.jiliangqiju.cn/login',
    pro: 'http://www.jiliangqiju.cn/login',
    staging: 'http://218.57.140.130:9318'
  },
  /**
   * @description 强检地址
   */
  platformUrl: {
    dev: 'http://192.168.96.202:8602/jlqj/remoteLogin',
    pro: 'https://china.jiliangqiju.cn/jlqj/remoteLogin',
    staging: 'http://192.168.96.202:8602/jlqj/remoteLogin'
  },
  /**
   * @description 单点登录到巡检 e计量企业app
   */
  inspectionUrl: {
    dev: 'http://192.168.96.202:8601/jlxj/remoteLogin',
    pro: 'http://jlxjapp.jiliangqiju.cn/jlxj/remoteLogin',
    staging: 'http://192.168.96.202:8601/jlxj/remoteLogin'
  },
  /**
   * @description 实验室云服务单点登录
   * */
  laboratoryUrl: {
    dev: 'http://192.168.96.202:8603/meteringServerSingle/',
    pro: 'http://117.78.52.166:8081/meteringServerSingle/',
    staging: 'http://192.168.96.202:8603/meteringServerSingle/'
  },
  /**
   * @description 计量数据监管平台单点登录
   * */
  integrityMeasurementUrl: {
    dev: '',
    pro: 'http://119.3.18.213:8098/SmartMarket',
    staging: ''
  },
  /**
   * @description 电仪汇单点登录
   * */
  dyhUrl: {
    dev: '',
    pro: 'http://dyh.jiliangqiju.cn?token=',
    staging: ''
  },
  /**
   * @description 单点登录到接口开放平台
   */
  interfaceUrl: {
    dev: 'http://192.168.98.30:8001',
    pro: 'http://49.4.12.113:6061/basePage/welcome',
    staging: 'http://192.168.98.30:8000/basePage/welcome'
  },
  /**
   * @description 导出用户最新登录列表
   * */
  exportActiveUser: {
    dev: 'http://192.168.96.202:9007/platform/view/statistics/lastLoginInfo/list/export',
    pro: 'https://apipro.jiliangqiju.cn/platform/view/statistics/lastLoginInfo/list/export',
    staging: 'http://192.168.96.202:9000/platform/view/statistics/lastLoginInfo/list/export'
  },
  /**
   * @description 导出待付费用户列表
   * */
  exportRenewUser: {
    dev: 'http://192.168.96.202:9007/platform/view/sysOrganization/renewOrg/list/export',
    pro: 'https://apipro.jiliangqiju.cn/platform/view/sysOrganization/renewOrg/list/export',
    staging: 'http://192.168.96.202:9000/platform/view/sysOrganization/renewOrg/list/export'
  },
  /**
   * @description 导出应用订单
   * */
  exportServiceOrder: {
    dev: 'http://192.168.96.202:9007/platform/view/applicationOrder/export',
    pro: 'https://apipro.jiliangqiju.cn/platform/view/applicationOrder/export',
    staging: 'http://192.168.96.202:9000/platform/view/applicationOrder/export'
  },
  /**
   * @description 跳转台账信息页面
   */
  standingBookUrl: {
    dev: 'http://192.168.99.249/vsftpd/project-template/instrument_info_template.xls',
    pro: 'http://49.4.12.113/vsftpd/jlxxw-template/instrument_info_template.xls',
    staging: 'http://218.57.140.130:9318/vsftpd/project-template/instrument_info_template.xls'
  },
  /**
   * @description 会员信息/会员审核导出
   */
  userInfoUrl: {
    dev: 'http://192.168.96.202:9007',
    pro: 'https://apipro.jiliangqiju.cn',
    staging: 'http://192.168.96.202:9000'
  },
  /**
   * @description 网站档案 模板下载地址
   * */
  exportWebSerType: {
    dev: 'http://192.168.96.202:9007/platform/view/vccsService/template/export',
    pro: 'https://apipro.jiliangqiju.cn/platform/view/vccsService/template/export',
    staging: 'http://192.168.96.202:9000/platform/view/vccsService/template/export'
  },
  /**
   * @description 导入台账
   * */
  exportStand: {
    dev: 'http://192.168.96.202:9007/platform/view/meter/template/export',
    pro: 'https://apipro.jiliangqiju.cn/platform/view/meter/template/export',
    staging: 'http://192.168.96.202:9000/platform/view/meter/template/export'
  },
  /**
   *@description 导入快速下单模板
   * */
  exportQuickOrder: {
    dev: 'http://192.168.96.202:9007/platform/view/quickOrder/template/export',
    pro: 'https://apipro.jiliangqiju.cn/platform/view/quickOrder/template/export',
    staging: 'http://192.168.96.202:9000/platform/view/quickOrder/template/export'
  },
  /**
   * @description 导出委托单
   * */
  exportMeterOrder: {
    dev: 'http://192.168.96.202:9007/platform/view/useUnitOrder/template/export',
    pro: 'https://apipro.jiliangqiju.cn/platform/view/useUnitOrder/template/export',
    staging: 'http://192.168.96.202:9000/platform/view/useUnitOrder/template/export'
  }
}
