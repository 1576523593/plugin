import Axios from 'axios'
/* 合法uri */
export function validateURL (textval) {
  const urlregex = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/
  return urlregex.test(textval)
}

/* 小写字母 */
export function validateLowerCase (str) {
  const reg = /^[a-z]+$/
  return reg.test(str)
}

/* 大写字母 */
export function validateUpperCase (str) {
  const reg = /^[A-Z]+$/
  return reg.test(str)
}

/* 大小写字母 */
export function validateAlphabets (str) {
  const reg = /^[A-Za-z]+$/
  return reg.test(str)
}
/* 邮箱^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$ */

export function isExternal (path) {
  return /^(https?:|mailto:|tel:)/.test(path)
}
/* 实名认证---单位名称 */
export function valadateName (rule, value, callback) {
  const codeReg = /^[A-Za-z0-9\u4e00-\u9fa5]+$/
  if (!value) {
    return callback(new Error('请填写单位名称'))
  } else {
    if (value.length < 2 || value.length > 20) {
      callback(new Error('单位名称为2~20个字符'))
    } else if (codeReg.test(value)) {
      callback()
    } else {
      callback(new Error('请填写中文/字母/数字'))
    }
  }
}
/* 法人代表 */
export function valadatelegalPerson (rule, value, callback) {
  const codeReg = /^[A-Za-z0-9\u4e00-\u9fa5]+$/
  if (!value) {
    return callback(new Error('请填写法人姓名'))
  } else {
    if (value.length < 2 || value.length > 20) {
      callback(new Error('法人姓名为2~20个字符'))
    } else if (codeReg.test(value)) {
      callback()
    } else {
      callback(new Error('请填写中文/字母/数字'))
    }
  }
}
/* 上级单位 */
export function valadatelegalSuperior (rule, value, callback) {
  const codeReg = /^[A-Za-z0-9\u4e00-\u9fa5]+$/
  if (!value) {
    return callback(new Error('请填写上级单位'))
  } else {
    if (value.length < 2 || value.length > 20) {
      callback(new Error('上级单位为2~20个字符'))
    } else if (codeReg.test(value)) {
      callback()
    } else {
      callback(new Error('请填写中文/字母/数字'))
    }
  }
}
/* 详细地址 */
export function valadatelegalAddress (rule, value, callback) {
  // const codeReg = /^[A-Za-z0-9\u4e00-\u9fa5]+$/
  if (!value) {
    return callback(new Error('请填写详细地址'))
  } else {
    if (value.length < 5 || value.length > 200) {
      callback(new Error('详细地址为5~200个字符'))
    } else {
    //   if (codeReg.test(value)) {
    //   callback()
    // } else {
      callback()
    }
  }
}
/* 邮箱地址 */
export function valadateEmail (rule, value, callback) {
  // const re = '/^(([^<>()\\[\\]\\\\.,;:\\s@"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@"]+)*)|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$/'
  const emailReg = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/ // 只允许英文字母、数字、下划线、英文句号、以及中划线组成
  if (!value) {
    return callback(new Error('请填写邮箱地址'))
  } else {
    if (value.length < 8 || value.length > 50) {
      callback(new Error('单位邮箱为8~50个字符'))
    } else if (emailReg.test(value)) {
      callback()
    } else {
      callback(new Error('请填写正确的邮箱地址'))
    }
  }
  // if (re.test(value)) {
  //   callback()
  // } else {
  //   callback(new Error('邮箱地址格式不正确'))
  // }
  // return re.test(email)
}
/* 社会统一信用代码 */
export function valadateCode (rule, value, callback) {
  const codeReg = /[A-Z0-9]{18}/g
  if (!value) {
    return callback(new Error('统一社会信用代码不能为空'))
  } else if (value.length > 18) {
    callback(new Error('统一社会信用代码为18位字符'))
  }
  if (codeReg.test(value)) {
    // let params = {
    //     //   code: value
    //     // }
    //     // // 联调接口
    //     // Axios.get('/jlxxw/api/organization/isExist').then(res => {
    //     //   if (res.data.valid === 'false') {
    //     //     return callback(new Error('系统检测到贵公司已入驻本站，请使用已完成认证的账号登录，若有其他问题请联系客服'))
    //     //   } else {
    //     //     return callback()
    //     //   }
    //     // }).catch(() => {
    //     //   return callback(new Error('系统检测到贵公司已入驻本站，请使用已完成认证的账号登录，若有其他问题请联系客服'))
    //     // })
    callback()
  } else {
    return callback(new Error('请输入正确的统一社会信用代码'))
  }
}
/* 电话号码 */
export function valadatePhoneCode (rule, value, callback) {
  const codeReg = /0\d{2,3}-\d{7,8}/
  if (!value) {
    return callback(new Error('请填写电话号码'))
  } else {
    if (codeReg.test(value)) {
      callback()
    } else {
      callback(new Error('请填写正确格式的电话号码，如：0000-00000000'))
    }
  }
}
/* 验证固话+手机号码合法性 */
export function valadatePhone (rule, value, callback) {
  const phoneReg = /(^1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}$)|(^((0\d{2,3})-)(\d{7,8})(-(\d{3,}))?$)/
  if (!value) {
    return callback(new Error('电话不能为空'))
  }
  setTimeout(() => {
    if (phoneReg.test(value)) {
      callback()
    } else {
      callback(new Error('电话格式不正确'))
    }
  }, 100)
}
export function validatePhone (rule, value, callback) {
  const phoneReg = /(^1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}$)/
  if (!value) {
    return callback(new Error('请填写手机号码'))
  }
  setTimeout(() => {
    if (phoneReg.test(value)) {
      callback()
    } else {
      callback(new Error('请填写正确的手机号码格式'))
    }
  }, 100)
}
/* 验证邮政编码合法性 */
export function valadatepostCode (rule, value, callback) {
  const codeReg = /^[0-9]{6}$/
  if (!value) {
    return callback(new Error('请填写邮政编码'))
  }
  setTimeout(() => {
    if (codeReg.test(value)) {
      callback()
    } else {
      callback(new Error('请输入正确的邮政编码'))
    }
  }, 100)
}
/* 验证传真编码合法性 */
export function valadatefaxCode (rule, value, callback) {
  const codeReg = /^(\d{3,4}-)?\d{7,8}$/
  if (!value) {
    callback()
  } else {
    if (codeReg.test(value)) {
      callback()
    } else {
      callback(new Error('请输入正确的传真号码，如:0000-00000000'))
    }
  }
}
/* 验证银行账号合法性 */
export function valadateBankCode (rule, value, callback) {
  const codeReg = /^[0-9]{1,20}$/
  if (!value) {
    return callback(new Error('请填写银行账号'))
  }
  setTimeout(() => {
    if (codeReg.test(value)) {
      callback()
    } else {
      callback(new Error('请输入正确的单位银行账号'))
    }
  }, 100)
}
/* 验证身份证号码合法性 */
export function valadateIdCode (rule, value, callback) {
  const IdCodeReg = /(^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)|(^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{2}[0-9Xx]$)/
  if (!value) {
    return callback(new Error('请填写身份证号码'))
  }
  setTimeout(() => {
    if (IdCodeReg.test(value)) {
      callback()
    } else {
      callback(new Error('身份证号码格式填写不正确'))
    }
  }, 100)
}
/* 文章管理---新闻标题 */
export function valadateNewsName (rule, value, callback) {
  // const newsReg = /^[A-Za-z0-9\u4e00-\u9fa5]+$/  中文/数字/字母
  if (!value) {
    return callback(new Error('请输入新闻标题'))
  } else {
    if (value.length < 2 || value.length > 50) {
      callback(new Error('新闻标题为2~50个字符'))
    } else {
      callback()
    }
  }
}
/* 文章管理---发布作者 */
export function valadateAuthor (rule, value, callback) {
  const newsReg = /^[a-zA-Z\u4e00-\u9fa5]+$/
  if (!value) {
    return callback(new Error('请输入发布作者'))
  } else {
    if (value.length < 2 || value.length > 20) {
      callback(new Error('发布作者名字为2~20个字符'))
    } else if (newsReg.test(value)) {
      callback()
    } else {
      callback(new Error('请填写中文/字母'))
    }
  }
}
/* 轮播管理---新增Banner路径 */
export function valadateRedirect (rule, value, callback) {
  if (value.length < 0 || value.length > 100) {
    callback(new Error('跳转路径长度为0~100个字符'))
  } else {
    callback()
  }
  // const newsReg = /^[a-zA-Z\u4e00-\u9fa5]+$/
  // if (!value) {
  //   return callback(new Error('请输入跳转路径'))
  // } else {
  //
  //   // } else if (newsReg.test(value)) {
  //   //   callback()
  //   // } else {
  //     // callback(new Error('请填写中文/字母'))
  //   }
  // }
}
/* 检定机构控制台---网站档案---基础资料 */
export function valadateCompany (rule, value, callback) {
  const codeReg = /^[A-Za-z0-9\u4e00-\u9fa5]+$/
  if (!value) {
    return callback(new Error('请输入机构名称'))
  } else {
    if (value.length < 2 || value.length > 20) {
      callback(new Error('机构名称为2~20个字符'))
    } else if (codeReg.test(value)) {
      callback()
    } else {
      callback(new Error('请输入中文/字母/数字'))
    }
  }
}
/* 检定机构控制台---网站档案---联系电话 */
export function valadateContactNumber (rule, value, callback) {
  const phoneReg = /(^1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}$)|(^((0\d{2,3})-)(\d{7,8})(-(\d{3,}))?$)/
  if (!value) {
    return callback(new Error('请输入联系电话'))
  }
  setTimeout(() => {
    if (phoneReg.test(value)) {
      callback()
    } else {
      callback(new Error('电话格式不正确'))
    }
  }, 100)
}
/* 检定机构控制台---网站档案---机构地址 */
export function valadateleAddress (rule, value, callback) {
  const codeReg = /^[A-Za-z0-9\u4e00-\u9fa5]+$/
  if (!value) {
    return callback(new Error('请输入机构地址'))
  } else {
    if (value.length < 5 || value.length > 100) {
      callback(new Error('机构地址为5~100个字符'))
    } else if (codeReg.test(value)) {
      callback()
    } else {
      callback(new Error('请输入中文/字母/数字'))
    }
  }
}
/* 检定机构控制台---网站档案---机构介绍 */
export function valadateleIntro (rule, value, callback) {
  // const codeReg = /^[A-Za-z0-9\u4e00-\u9fa5]+$/
  if (!value) {
    return callback(new Error('请输入机构介绍'))
  } else {
    if (value.length < 5 || value.length > 500) {
      callback(new Error('机构介绍为5~500个字符'))
    }
    callback()
  }
}
/* 登录---用户名 */
export function valadateUserCode (rule, value, callback) {
  const codeReg = /^[A-Za-z0-9\u4e00-\u9fa5]+$/
  if (!value) {
    return callback(new Error('请输入用户名'))
  } else {
    if (value.length < 2 || value.length > 20) {
      callback(new Error('用户名为2~20个字符'))
    } else if (codeReg.test(value)) {
      callback()
    } else {
      callback(new Error('请输入中文/字母/数字'))
    }
  }
}
/* 登录---密码 */
export function valadatePassword (rule, value, callback) {
  const oldPasswordReg = /^(?![0-9]+$)(?![a-z]+$)(?![A-Z]+$)(?!([^(0-9a-zA-Z)])+$)([^(0-9a-zA-Z)]|[a-z]|[A-Z]|[0-9]){6,30}$/
  if (!value) {
    return callback(new Error('请输入密码'))
  }
  setTimeout(() => {
    if (oldPasswordReg.test(value)) {
      callback()
    } else {
      callback(new Error('至少由6-30位字母、数字、符号中的两种组成'))
    }
  }, 100)
}
