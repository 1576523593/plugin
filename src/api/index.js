import calibrationCloudServiceAPI from './modules/calibrationCloudService/index'
import adminConsoleAPI from './modules/adminConsole'
import systemManagementAPI from './modules/systemManagement'
import enterpriseStandAPI from './modules/standingBook'
import myServiceAPI from './modules/myService'
import addressAPI from './modules/address/index'
import loginAPI from './modules/login'
import articleAPI from './modules/article'
import businessManagementAPI from './modules/businessManagement'
import entrustManagementAPI from './modules/entrustManagement' // 委托管理
import publicAPI from './modules/public'
import websiteArchivesAPI from './modules/websiteArchives'
import frontAPI from './modules/front'
import bannersAPI from './modules/banners'
import enterpriseHomeAPI from './modules/enterpriseHome'
import myTicketsAPI from './modules/mytickets'
import marketingTicketsAPI from './modules/marketingManagement'
import chargeAPI from './modules/payInterface'
import dataCollertor from './modules/dataCollector'
import highTechAPI from './modules/highTech'// 高新自贸区
import zqcustomizeAPI from './modules/zqcustomize'// 章丘定制
import supervisorScreenAPI from './modules/supervisorScreenDisplay'
import mergePayment from './modules/mergePayment'
const api = {
  ...mergePayment,
  ...supervisorScreenAPI,
  ...dataCollertor,
  ...calibrationCloudServiceAPI,
  ...adminConsoleAPI,
  ...systemManagementAPI,
  ...enterpriseStandAPI,
  ...myServiceAPI,
  ...addressAPI,
  ...loginAPI,
  ...articleAPI,
  ...businessManagementAPI,
  ...entrustManagementAPI,
  ...publicAPI,
  ...websiteArchivesAPI,
  ...frontAPI,
  ...bannersAPI,
  ...enterpriseHomeAPI,
  ...myTicketsAPI,
  ...marketingTicketsAPI,
  ...chargeAPI,
  ...highTechAPI,
  ...zqcustomizeAPI
}
export default api
