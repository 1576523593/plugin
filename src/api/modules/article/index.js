import api from './api'
import header from '@/api/header'
import { getActionHeader, putActionHeader, deleteActionHeader, postActionHeader } from '../../tools'

// 获取文章管理列表
const getArticleList = (params) => getActionHeader(api.articleList, params)
// 查看文章详情内容
const handleArticle = (params) => getActionHeader(api.cmsArticle + params)
// 删除文章
const deleteArticle = (params) => deleteActionHeader(api.cmsArticle + params)
// 修改文章
const updateArticle = (params) => putActionHeader(api.cmsArticle, params, header.json)
// 新增文章
const addArticle = (params) => postActionHeader(api.cmsArticle, params, header.json)

export default {
  getArticleList,
  handleArticle,
  deleteArticle,
  updateArticle,
  addArticle
}
