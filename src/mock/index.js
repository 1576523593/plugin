import Mock from 'mockjs'
// import DemandOrderAPI from './demandOrder'
import AreaAPI from './area'
import LoginAPI from './modules/login/login'
import userInfo from './modules/login/userinfo'
import calibrationServiceType from './modules/calibrationService/getList'
import addressAPI from './modules/address/deliveryAddress' // 收货地址
import dictionary from './modules/systemManagement/dictionary'
import timingTask from './modules/systemManagement/timingTask'
import realNameAPI from './modules/realName/real-name'// 实名认证
import passwordAPI from './modules/password/password'// 修改密码
import realNameAuditAPI from './modules/realNameAudit/real-name-audit'// 实名审核
import articleManagementAPI from './modules/articleManagement/article-management'// 文章管理
import controlBannersAPI from './modules/controlBanners/control-banners'// Banner管理
import qualificationDocAPI from './modules/qualificationDoc/qualification'// 资质管理
import homeBannerAPI from './modules/home/home'// 首页Banner
import basicDataAPI from './modules/calibration/basic-data'// 基础资料
import registerAPI from './modules/front/register'// 注册
import informationAPI from './modules/front/information-center'// 信息中心
import payment from './modules/payment/payCheck'
import appliceServiceAPI from './modules/enterprise/standingBook'
import webArchivesAPI from './modules/calibration/archives-servive'
import orgAPI from './modules/front/cloudServiceIndex'
import userUnitOrder from './modules/enterprise/useUnitOrder'
import adminUserAPI from './modules/adminUserInfo/index'
import homeAPI from './modules/enterprise/home'
import tickets from './modules/adminTickets'
// 修复在使用 MockJS 情况下，设置 withCredentials = true，且未被拦截的跨域请求丢失 Cookies 的问题
// https://github.com/nuysoft/Mock/issues/300
Mock.XHR.prototype.proxy_send = Mock.XHR.prototype.send
Mock.XHR.prototype.send = function () {
  if (this.custom.xhr) {
    this.custom.xhr.withCredentials = this.withCredentials || false
  }
  this.proxy_send(...arguments)
}
// 通联个人会员状态
Mock.mock(/\/payment\/member\/status/, 'get', payment.payPersonalMemberStatus())
// 创建通联会员
Mock.mock(/\/payment\/member\/create/, 'get', payment.createdMember())
// 验证手机号码
Mock.mock(/\/payment\/member\/biddingPhone/, 'get', payment.biddingPhone())
// 支付成功
Mock.mock(/\/payment\/member\/pay/, 'get', payment.payingSuccess())
// 绑定手机号码20 无通联个人会员
Mock.mock(/\/payment\/member\/member/, 'get', payment.codeCheckMember1())
// 绑定手机号码20 有通联会员无绑定手机号码
Mock.mock(/\/payment\/member\/phone/, 'get', payment.codeCheckMember2())
// 绑定手机号码20 有通联会员绑定手机号码
Mock.mock(/\/payment\/member\/all/, 'get', payment.codeCheckMember3())
Mock.mock(/\/admin\/marketingTickets\/list/, 'get', tickets.ticketsList())
Mock.mock(/\/admin\/marketingTickets\/detail/, 'get', tickets.ticketsDetail())
Mock.mock(/\/admin\/marketingTickets\/isOk/, 'get', tickets.isOk())
Mock.mock(/\/admin\/marketingTickets\/view/, 'get', tickets.handleView())
// 需求市场相关
// Mock.mock(/\/bid\/getInvitationBids/, 'get', DemandOrderAPI.getList)
// Mock.mock(/\/bid\/getHotInvitationBid/, 'get', DemandOrderAPI.getHotList)
Mock.mock(/\/public\/area\/getAll/, 'get', AreaAPI.getAreaAll)
Mock.mock(/\/jlxxw\/api\/user\/login/, 'get', LoginAPI.login)
Mock.mock(/\/jlxxw\/api\/getInfo/, 'get', userInfo.userinfo)
// 运营人员控制台检校服务，服务类型
Mock.mock(/\/jlxxw\/api\/serviceType/, 'get', calibrationServiceType.listPage())
Mock.mock(/\/jlxxw\/api\/deleteServiceType/, 'delete', calibrationServiceType.deleteType())
Mock.mock(/\/jlxxw\/api\/addServiceType/, 'post', calibrationServiceType.addType())
Mock.mock(/\/jlxxw\/api\/updateServiceType/, 'put', calibrationServiceType.updateType())
// 收货地址---获取收货地址
Mock.mock(/\/jlxxw\/api\/address\/getAddressList/, 'get', addressAPI.getAddressList)
// 收货地址---删除收货地址
Mock.mock(/\/jlxxw\/api\/address\/deleteAddress/, 'get', addressAPI.deleteAddress)
// 收货地址---新增收货地址
Mock.mock(/\/jlxxw\/api\/address\/addAddress/, 'get', addressAPI.addAddress)
// 收货地址---修改收货地址
Mock.mock(/\/jlxxw\/api\/address\/updateAddress/, 'get', addressAPI.updateAddress)

/**
 * 系统管理员mock
 * */
// 数据字典列表
Mock.mock(/\/jlxxw\/api\/dictionary\/list/, 'get', dictionary.dicList)
// 新增字典
Mock.mock(/\/jlxxw\/api\/dictionary\/add/, 'post', dictionary.addItem)
// 删除字典
Mock.mock(/\/jlxxw\/api\/dictionary\/delete/, 'delete', dictionary.deleteItem)
// 更新字典
Mock.mock(/\/jlxxw\/api\/dictionary\/update/, 'put', dictionary.updateItem)
// 根据字典类型获取详情列表
Mock.mock(/\/jlxxw\/api\/dictionary\/getDicByType/, 'get', dictionary.getDicListByType)
Mock.mock(/\/jlxxw\/api\/dictionary\/one/, 'get', dictionary.getDicListByTypeOne)
Mock.mock(/\/jlxxw\/api\/dictionary\/two/, 'get', dictionary.getDicListByTypeTwo)
// 定时任务
Mock.mock(/\/jlxxw\/api\/timingTask\/list/, 'get', timingTask.timingTaskList)
Mock.mock(/\/jlxxw\/api\/timingTask\/add/, 'post', timingTask.add)
Mock.mock(/\/jlxxw\/api\/timingTask\/delete/, 'delete', timingTask.delete)
Mock.mock(/\/jlxxw\/api\/timingTask\/update/, 'put', timingTask.update)
Mock.mock(/\/jlxxw\/api\/timingTask\/start/, 'post', timingTask.start)
Mock.mock(/\/jlxxw\/api\/timingTask\/pause/, 'post', timingTask.pause)
/**
 * 检定机构
 * */
Mock.mock(/\/jlxxw\/api\/webArchives\/list/, 'get', webArchivesAPI.serviceList)
Mock.mock(/\/jlxxw\/api\/webArchives\/add/, 'post', webArchivesAPI.add)
Mock.mock(/\/jlxxw\/api\/webArchives\/delete/, 'delete', webArchivesAPI.delete)
Mock.mock(/\/jlxxw\/api\/webArchives\/update/, 'put', webArchivesAPI.update)
Mock.mock(/\/jlxxw\/api\/webArchives\/one/, 'get', webArchivesAPI.detailOne)
Mock.mock(/\/jlxxw\/api\/webArchives\/two/, 'get', webArchivesAPI.detailTwo)
/**
 * 使用单位
 * */
Mock.mock(/\/jlxxw\/api\/appliance\/list/, 'get', appliceServiceAPI.standList)
Mock.mock(/\/jlxxw\/api\/appliance\/delete/, 'delete', appliceServiceAPI.delete)
Mock.mock(/\/jlxxw\/api\/appliance\/add/, 'post', appliceServiceAPI.add)
Mock.mock(/\/jlxxw\/api\/appliance\/update/, 'put', appliceServiceAPI.update)
Mock.mock(/\/jlxxw\/api\/appliance\/one/, 'get', appliceServiceAPI.detailOne)
Mock.mock(/\/jlxxw\/api\/appliance\/two/, 'get', appliceServiceAPI.detailTwo)
Mock.mock(/\/jlxxw\/api\/appliance\/code/, 'get', appliceServiceAPI.toCode)
Mock.mock(/\/jlxxw\/api\/home\/statistics/, 'get', homeAPI.statistics())
Mock.mock(/\/jlxxw\/api\/home\/meterList/, 'get', homeAPI.meterList())
Mock.mock(/\/jlxxw\/api\/home\/recomend/, 'get', homeAPI.recomendOrg())
Mock.mock(/\/jlxxw\/api\/home\/guid/, 'get', homeAPI.guidPrice())
Mock.mock(/\/jlxxw\/api\/home\/priceDetail/, 'get', homeAPI.guidPriceDetail())
Mock.mock(/\/jlxxw\/api\/appliance\/uploadTemplate/, 'post', appliceServiceAPI.uploadTemplate) // 导入台账
// 获取委托管理列表
Mock.mock(/\/jlxxw\/api\/userUnit\/orderList/, 'get', userUnitOrder.userUnitOrderList())
// 工作台
Mock.mock(/\/jlxxw\/api\/userUnit\/workStage/, 'get', userUnitOrder.workStage())
Mock.mock(/\/jlxxw\/api\/userUnit\/update/, 'get', userUnitOrder.workStage())
Mock.mock(/\/jlxxw\/api\/userUnit\/ceitiDetail/, 'get', userUnitOrder.ceritiDetail())
Mock.mock(/\/jlxxw\/api\/userUnit\/update/, 'get', userUnitOrder.update())
// 取消委托单
Mock.mock(/\/jlxxw\/api\/userUnit\/cancle/, 'get', userUnitOrder.cancle())
// 付款
Mock.mock(/\/jlxxw\/api\/userUnit\/pay/, 'get', userUnitOrder.pay())
// 确认收货
Mock.mock(/\/jlxxw\/api\/userUnit\/meter/, 'get', userUnitOrder.getMeters())
// 委托单详情
Mock.mock(/\/jlxxw\/api\/userUnit\/detail/, 'get', userUnitOrder.Orderdetail())
Mock.mock(/\/jlxxw\/api\/userUnit\/price/, 'get', userUnitOrder.price())
Mock.mock(/\/jlxxw\/api\/userUnit\/remark/, 'get', userUnitOrder.remark())
/**
 * 检定云服务
 * */
// 机构列表
Mock.mock(/\/jlxxw\/api\/org\/list/, 'get', orgAPI.orgList())
// 机构详情
Mock.mock(/\/jlxxw\/api\/org\/detail/, 'get', orgAPI.orgDetail())
// 机构服务
Mock.mock(/\/jlxxw\/api\/org\/service/, 'get', orgAPI.serviceList())
// 机构资质图片
Mock.mock(/\/jlxxw\/api\/org\/imgs/, 'get', orgAPI.Imgs)
// 台账下单 当前使用单位待检定器具列表
Mock.mock(/\/jlxxw\/api\/org\/userMeterList/, 'get', orgAPI.userMeterList())
// 台账  获取所有机构名称 id
Mock.mock(/\/jlxxw\/api\/org\/getAllOrg/, 'get', orgAPI.AllorgList())
// 台账 获取证书类型
Mock.mock(/\/jlxxw\/api\/org\/creType/, 'get', orgAPI.credentialsType())
// 提交委托单
Mock.mock(/\/jlxxw\/api\/org\/submintOrder/, 'get', orgAPI.submit())
// 实名认证---获取行业类型
Mock.mock(/\/jlxxw\/api\/dictionary\/getIndustryTypes/, 'get', realNameAPI.getIndustryTypes)
// 实名认证---获取实名认证信息
Mock.mock(/\/jlxxw\/api\/organization\/getIdentificationInfo/, 'get', realNameAPI.getIdentificationInfo)
// 实名认证---用过手机号获取验证码
Mock.mock(/\/jlxxw\/api\/user\/sendCodeByPhone/, 'get', realNameAPI.sendCodeByPhone)
// 实名认证---用手机号验证验证码
Mock.mock(/\/jlxxw\/api\/user\/codeCheckByPhone/, 'get', realNameAPI.codeCheckByPhone)
// 实名认证---组织机构代码验证
Mock.mock(/\/jlxxw\/api\/organization\/isExist/, 'get', realNameAPI.isExist)
// 实名认证---获取附件
Mock.mock(/\/jlxxw\/api\/attachment\/init/, 'get', realNameAPI.attachmentInit)
// 实名认证---删除附件
Mock.mock(/\/jlxxw\/api\/attachment\/delete/, 'get', realNameAPI.attachmentDelete)
// 实名认证---上传附件
Mock.mock(/\/jlxxw\/api\/businessLicense\/upload/, 'get', realNameAPI.businessLicenseUpload)
// 实名认证---提交
Mock.mock(/\/jlxxw\/api\/organization\/identificationApply/, 'get', realNameAPI.identificationApply)
// 账户中心---修改密码
Mock.mock(/\/jlxxw\/api\/user\/updatePassword/, 'get', passwordAPI.updatePassword)
// 企业管理---实名审核
Mock.mock(/\/jlxxw\/api\/organization\/getWaitCheckList/, 'get', realNameAuditAPI.getWaitCheckList)
// 获取机构信息
Mock.mock(/\/jlxxw\/api\/organization\/getDetail/, 'get', realNameAuditAPI.getDetail)
// 认证审核
Mock.mock(/\/jlxxw\/api\/organization\/identification/, 'get', realNameAuditAPI.identification)
// 文章管理---获取文章列表
Mock.mock(/\/jlxxw\/api\/platform\/view\/article\/page/, 'get', articleManagementAPI.getClientArticleInfoManageList)
// 文章管理---删除文章
Mock.mock(/\/jlxxw\/api\/article\/deleteArticle/, 'get', articleManagementAPI.deleteArticle)
// 文章管理---新增文章
Mock.mock(/\/jlxxw\/api\/article\/insertArticle/, 'get', articleManagementAPI.insertArticle)
//  文章管理---上传附件
Mock.mock(/\/jlxxw\/api\/attachment\/upload/, 'get', articleManagementAPI.attachmentUpload)
// 文章管理---修改文章
Mock.mock(/\/jlxxw\/api\/article\/updateArticle/, 'get', articleManagementAPI.updateArticle)
// 文章管理---查看详情
Mock.mock(/\/jlxxw\/api\/article\/getArticle/, 'get', articleManagementAPI.getArticle)
Mock.mock(/\/jlxxw\/api\/article\/getArticles/, 'get', articleManagementAPI.getArticles)
// Banner管理---获取列表
Mock.mock(/\/jlxxw\/api\/operator\/banners/, 'get', controlBannersAPI.operatorBanners)
// Bannner管理---删除
Mock.mock(/\/jlxxw\/api\/operator\/banner/, 'get', controlBannersAPI.operatorBanner)
// Banner管理---添加
Mock.mock(/\/jlxxw\/api\/operator\/insertbanner/, 'get', controlBannersAPI.insertBanner)
// Banner管理---修改
Mock.mock(/\/jlxxw\/api\/operator\/updatebanner/, 'get', controlBannersAPI.updatebanner)
// 强检备案系统
Mock.mock(/\/jlxxw\/api\/user\/sso/, 'get', userInfo.sso)
// 检定机构---网站管理---基础资料
Mock.mock(/\/jlxxw\/api\/organization\/getOrganizationInfo/, 'get', basicDataAPI.getOrganizationInfo)
Mock.mock(/\/jlxxw\/api\/organization\/editOrganizationInfo/, 'get', basicDataAPI.editOrganizationInfo)
Mock.mock(/\/jlxxw\/api\/attachment\/attachments\/init/, 'get', basicDataAPI.attachmentInit)
// 检定机构---网站管理---资质管理
Mock.mock(/\/jlxxw\/api\/organization\/getQualificationsKey/, 'get', qualificationDocAPI.getQualificationsKey)
Mock.mock(/\/jlxxw\/api\/attachment\/isExist/, 'get', qualificationDocAPI.attachmentIsExist)
Mock.mock(/\/jlxxw\/api\/attachment\/attachment\/upload/, 'get', qualificationDocAPI.attachmentUpload)
Mock.mock(/\/jlxxw\/api\/attachment\/attachment\/delete/, 'get', qualificationDocAPI.attachmentDelete)
Mock.mock(/\/jlxxw\/api\/attachment\/attachment\/init/, 'get', qualificationDocAPI.attachmentInit)
// 删除委托管理 检校服务
Mock.mock(/\/jlxxw\/api\/jdjg\/service\/delete/, 'get', qualificationDocAPI.deleteService)
// 首页---Banner
Mock.mock(/\/jlxxw\/api\/site\/banners/, 'get', homeBannerAPI.getBanner)

// 运营人员用户信息
Mock.mock(/\/jlxxw\/api\/user\/list/, 'get', adminUserAPI.userList())
Mock.mock(/\/jlxxw\/api\/user\/detail/, 'get', adminUserAPI.userDetail())
// 注册
Mock.mock(/\/jlxxw\/api\/user\/register/, 'get', registerAPI.register)
Mock.mock(/\/jlxxw\/api\/user\/attachment\/delete/, 'get', registerAPI.attachmentDelete)
Mock.mock(/\/jlxxw\/api\/user\/businessLicense\/upload/, 'get', registerAPI.businessLicenseUpload)
// 验证码
Mock.mock(/\/jlxxw\/api\/user\/sendCodeByPhone'/, 'get', registerAPI.sendCodeByUserCode)
// 修改密码
Mock.mock(/\/jlxxw\/api\/user\/updatePasswordByUserCode'/, 'get', registerAPI.updatePasswordByUserCode)
// 信息中心
Mock.mock(/\/jlxxw\/api\/information\/articleInfoList/, 'get', informationAPI.articleInfoList)
Mock.mock(/\/jlxxw\/api\/article\/addPageView'/, 'get', informationAPI.addPageView)
Mock.mock(/\/jlxxw\/api\/information\/recommed/, 'get', informationAPI.articleInfoListRecommed)
Mock.mock(/\/jlxxw\/api\/information\/articleDetails/, 'get', informationAPI.articleDetails)

export default Mock
