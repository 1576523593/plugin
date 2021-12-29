/**
 * Created by zhou on 2020/04/14.
 */

export const REG = {
  USERNAME: /^[a-zA-Z0-9]{6,20}$/,
  PHONE: /^(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57]|16[6]|19[9])[0-9]{8}$/, // 手机号
  IDCARD: /^(\d{15}$|^\d{18}$|^\d{17}(\d|X|x))$/, // 身份证号
  SOCIALCODE: /^([0-9A-HJ-NPQRTUWXY]{2}\d{6}[0-9A-HJ-NPQRTUWXY]{10})|^([a-zA-Z0-9]{22})$/, // 统一社会信用代码
  EMAIL: /^(?=\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$).{0,39}$/, // 邮箱
  QQ: /^[1-9][0-9]{3,9}$/, // QQ
  TELEPHONE: /^(\(\d{3,4}\)|\d{3,4}-|\s)?\d{7,14}$/, // 座机号
  HOTLINE: /^400(-\d{3,4}){2}$/, // 400客服电话
  PASSWORD: /^[^\s]{6,20}$/,
  NATION: /^[\u4E00-\u9FA5·]+$/,
  INCOME: /^(0|[1-9]\d{0,7})(\.\d{1,2})?$/, // 收入 小数点后最多输入2位数字，或者输入1~8位的整数(2位以上数字，首字符不可为‘0’，例如：‘01’)。
  // eslint-disable-next-line no-useless-escape
  URL: /(https|http):\/\/[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|]/,
  unitName: /^[a-zA-Z0-9\u4e00-\u9fa5]{1,50}$/,
  guhua: /^0\d{2,3}-\d{1,8}$/
}