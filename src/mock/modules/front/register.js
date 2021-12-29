export default {
  register: config => {
    return {
      'msg': '注册成功',
      'code': 200
    }
  },
  sendCodeByUserCode: config => {
    return {
      'msg': '发送成功',
      'code': 200
    }
  },
  updatePasswordByUserCode: config => {
    return {
      'msg': '修改成功',
      'code': 200
    }
  },
  // 删除附件
  attachmentDelete: config => {
    return {
      'msg': '删除成功',
      'code': 200
    }
  },
  // 上传营业执照图片
  businessLicenseUpload: config => {
    return {
      'msg': '上传成功',
      'code': 200
    }
  }
}
