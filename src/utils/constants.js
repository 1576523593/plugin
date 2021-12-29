export default {
  // 请求成功状态码
  SUCCESS_CODE: 200,
  // token key
  TOKEN_KEY: 'token',
  // userId key
  USER_ID_KEY: 'userId',
  // userInfo key
  USER_INFO_KEY: 'userInfo',
  ROLE_CODE: 'roleCode',
  // 单点登录cookie code key
  SSO_USER_CODE: 'userCode',
  // platformPackage key
  PLATFORM_PACKAGE_KEY: 'platformPackage',
  // 控制台类型 key
  CONTROL_TYPE_KEY: 'controlType',
  // 控制台标识 key
  IS_CONTROL_KEY: 'isControl',
  // 操作类型 - 新增
  OPERATION_TYPE_ADD: 'addOperation',
  // 操作类型 - 添加
  OPERATION_TYPE_INIT: 'initOperation',
  // 操作类型 - 查看
  OPERATION_TYPE_VIEW: 'viewOperation',
  // 操作类型 - 修改
  OPERATION_TYPE_UPDATE: 'updateOperation',
  // 操作类型-审核
  OPERATION_TYPE_AUDITING: 'auditingOperation',
  // 章丘定制OA操作类型-审批
  ZQ_FILE_TYPE_APPROVAL: 'approvalFile',
  // 章丘定制OA操作类型-可见
  ZQ_FILE_TYPE_VISUAL: 'visualFile',
  // 章丘定制OA操作类型-指派
  ZQ_FILE_TYPE_APPOINT: 'appointFile',
  // 操作添加成功提示信息
  OPERATION_ADD_SUCCESS_KEY: 'addSuccess',
  OPERATION_ADD_SUCCESS_MSG: '添加成功',
  // 操作添加失败提示信息
  OPERATION_ADD_FAILURE_KEY: 'addFailure',
  OPERATION_ADD_FAILURE_MSG: '添加失败',
  // 操作修改成功提示信息
  OPERATION_UPDATE_SUCCESS_KEY: 'updateSuccess',
  OPERATION_UPDATE_SUCCESS_MSG: '修改成功',
  // 操作修改失败提示信息
  OPERATION_UPDATE_FAILURE_KEY: 'updateFailure',
  OPERATION_UPDATE_FAILURE_MSG: '修改失败',
  // 服务器异常提示信息
  SERVER_ERROR_KEY: 'serverException',
  SERVER_ERROR_MSG: '系统检测到服务器连接失败，请联系管理员。',
  // 文件上传异常
  FILE_UPLOAD_ERROR_KEY: 'fileUploadException',
  FILE_UPLOAD_ERROR_MSG: '系统检测到文件上传异常，请联系管理员。',
  // 文件删除异常
  FILE_DELETE_ERROR_KEY: 'fileDeleteException',
  FILE_DELETE_ERROR_MSG: '系统检测到文件删除异常，请联系管理员。',
  // 表单验证异常
  FORM_CHECK_ERROR_KEY: 'formCheckException',
  FORM_CHECK_ERROR_MSG: '系统检测到填写内容不满足要求，请按照提示修改。',
  // 需求市场传参KEY
  DEMAND_ORDER_ID_KEY: 'demandOrderId',
  DEMAND_ORDER_TITLE_KEY: 'demandOrderTitle',
  // 信息中心传参数
  DETAIL_INFORMATION_ID_KEY: 'detailInformationId',
  // kami检测能力参数
  KAMI_DETECTION_ID_KEY: 'kamiDetectionId',
  // 检校云服务参数
  APPLIANCE_ID_KEY: 'applianceId',
  // 检校云服务---委托单结算参数
  BALANCE_ACCOUNTS_KEY: 'ordersId',
  // 检校云服务---委托单结算金额
  PRICE_ACCOUNTS_KEY: 'ordersPrice',
  // 检校云服务---立即购买
  ORDERNOW_ACCOUNTS_KEY: 'detailList',
  //  检校云服务---取消订单时间
  CANCEL_ORDER_TIME_KEY: 'orderTime',
  //  检校云服务---付款页面---订单编号参数
  ORDER_NUMBER_KEY: 'orderNumber',
  //  富文本菜单栏---展示与隐藏
  TINYMCE_DISPLAY_KEY: 'tinymceDisplay',
  //  loading设置时间
  LOADING_SHOWTIME_KEY: 'loadingShowTime',
  // 解析用户名公钥
  PUBLIC_KEY: 'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC+38RoGg59vKZqgPilwICbvKL9uWbcX2rqkwLMyoYNIMgBQ5HjGZ82KQHLl5wMUpCkdrQsubeq/gLZOyQn/9Y/Am148cKx7wAnPGHP65N/8Miah0ygaXTKiGIijWaBOx4DUnpbht82yBCjEtGx2BH9x2BgNKC9hP2Vt7iml+PBjwIDAQAB',
  // 在线生成corn表达式网址
  CORN_WEB: 'http://cron.qqe2.com/',
  // 证书类型字典code
  CERTIFICATE_TYPE: 'certificateType',
  // 生产属地字典code
  PRODUCT_DEPENDENCY: 'productDependency',
  // 用途字典CODE
  DIC_USING: 'meterUsing',
  // 收费单位
  CHARGE_UNIT: 'chargeUnit',
  // 行业类型
  INDUSTRY: 'industry',
  // 选择银行
  BANK_TYPE: 'bankStandardName',
  // 使用单位角色code
  ENTERPRISE_CODE: '2',
  // 检定机构角色CODE
  CALIBRATION_CODE: '1',
  // 航天云网域名
  DOMAIN: 'jiliangqiju.gz-icloud.com.cn',
  // 航天云网注册地址
  CASICLOUD_REGISTER_ADDRESS: 'http://uc.casicloud.com/new/user/register?systemId=10000080170007',
  // 制造销售单位角色code
  CONSTRUCT_SALES_CODE: '3',
  // 退出时重定向的地址
  // LOGIN_OUT_ADDRESS: 'http://192.168.96.202:9007',
  LOGIN_OUT_ADDRESS: 'http://192.168.3.160:9007',
  // LOGIN_OUT_ADDRESS: 'http://www.jiliangqiju.cn/',
  // LOGIN_OUT_ADDRESS: 'http://localhost',
  // 图片验证码地址
  // VALIDATE_IMG: 'http://192.168.96.202:9007/auth/code/image/',
  VALIDATE_IMG: 'http://192.168.3.160:9007/auth/code/image/',
  // VALIDATE_IMG: 'https://apipro.jiliangqiju.cn/auth/code/image/',
  // 实名审核
  INSTITUTION: 'institution',
  // 实名审核
  ORGANIZATION: 'organization',
  // 章丘主账号id
  ZQ_PRIMARY: 'b19b0e5fe1b141a9942bca51e8be99c6',
  // 章丘主账号code
  ZQ_USERID: 'org',
  // 二维码地址
  // QRCODE_PATH: 'http://192.168.99.234:9117/jlqj/ScanCode/Query'
  QRCODE_PATH: 'https://china.jiliangqiju.cn/jlqj/ScanCode/Query'
}
