<template>
  <a-modal
    :visible="modalVisible"
    title="更新账户信息"
    @ok="handleOk"
    @cancel="handleCancel">
    <a-form-model
      ref="ruleForm"
      :model="ruleForm"
      :rules="rules"
      v-bind="layout">
      <a-form-model-item
        has-feedback
        label="姓名"
        prop="realName">
        <a-input
          v-model="ruleForm.realName"
        />
      </a-form-model-item>
      <a-form-model-item
        has-feedback
        label="手机号"
        prop="mobilePhone">
        <a-input
          style="width: 60%"
          v-model="ruleForm.mobilePhone"
        />
        <a-button
          type="primary"
          @click="getMobCode"
          style="width: 35%;float: right;margin-top: 4px">
          {{ btnText }}
        </a-button>
      </a-form-model-item>
      <a-form-model-item
        has-feedback
        label="验证码"
        prop="mobilePhoneCode">
        <a-input v-model.number="ruleForm.mobilePhoneCode" />
      </a-form-model-item>
      <a-form-model-item
        has-feedback
        label="邮箱"
        prop="email">
        <a-input v-model.number="ruleForm.email" />
      </a-form-model-item>
    </a-form-model>
  </a-modal>
</template>

<script>
import { getAction } from '@/utils/request'
import { getPhoneCode, userInfoAction } from '@/api/system-setting'

export default {
name: 'UpdateInfo',
  data () {
    const validateEmail = (rule, value, callback) => {
      const emailReg = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/ // 只允许英文字母、数字、下划线、英文句号、以及中划线组成
      if (!value) {
        return callback(new Error('请填写邮箱地址'))
      } else {
        if (value.length < 5 || value.length > 50) {
          callback(new Error('单位邮箱为5~50个字符'))
        } else if (emailReg.test(value)) {
          const params = {
            id: this.$store.state.userInfo.id,
            value,
            type: 'EMAIL'
          }
          getAction('/front/jiliang/v1/sysUser/repeatCheck', params).then(res => {
            if (res && res.status === 0) {
              callback()
            } else {
              callback(new Error(res.message))
            }
          })
        } else {
          callback(new Error('请填写正确的邮箱地址'))
        }
      }
    }
    const validatePhone = (rule, value, callback) => {
      const Reg = /^1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}$/
      if (!value) {
        return callback(new Error('请填写手机号码'))
      } else {
        if (Reg.test(value)) {
          const params = {
            id: this.$store.state.userInfo.id,
            value,
            type: 'MOBILE_PHONE'
          }
          getAction('/front/jiliang/v1/sysUser/repeatCheck', params).then(res => {
            if (res && res.status === 0) {
              callback()
            } else {
              callback(new Error(res.message))
            }
          })
        } else {
          callback(new Error('请填写正确的手机号码'))
        }
      }
    }
  return {
    btnText: '获取验证码',
    modalVisible: true,
    ruleForm: {
      realName: this.$store.state.userInfo.realName,
      email: this.$store.state.userInfo.email,
      mobilePhone: this.$store.state.userInfo.mobilePhone,
      mobilePhoneCode: ''
    },
    rules: {
      realName: [
        { required: true, min: 2, max: 10, message: '姓名长度为2-10位' }
      ],
      email: [
        { required: true, validator: validateEmail }
      ],
      mobilePhone: [
        { required: true, validator: validatePhone }
      ],
      mobilePhoneCode: [
        { required: true, message: '请填写验证码' }
      ]
    },
    layout: {
      labelCol: { span: 4 },
      wrapperCol: { span: 14 }
    }
  }
  },
  props: {
  },
  watch: {
  },
  methods: {
    getMobCode (val) {
      const param = {
        mobilePhone: this.ruleForm.mobilePhone
      }
      getPhoneCode(param).then(res => {
        if (res && res.status === 0) {
          this.$message.success('已发送')
          let n = 60
          const interval = setInterval(() => {
            n--
            if (n !== 0) {
              this.btnText = n + 's'
            } else {
              this.btnText = '重新发送'
              clearInterval(interval)
            }
          }, 1000)
        } else {
          this.$message.error(res.message)
        }
      })
    },
    asyncUserInfoToStore () {
      const newUserInfo = Object.assign(this.$store.state.userInfo, {
        realName: this.ruleForm.realName,
        email: this.ruleForm.email,
        mobilePhone: this.ruleForm.mobilePhone
      })
      this.$store.commit('SET_USER_INFO', newUserInfo)
      this.$emit('update-user-info', newUserInfo)
    },
    handleOk() {
      this.$refs.ruleForm.validate(valid => {
        if (valid) {
          userInfoAction(this.ruleForm).then(res => {
            if (res && res.status === 0) {
              this.modalVisible = false
              this.asyncUserInfoToStore()
              this.$message.success('已修改')
              this.handleCancel()
            } else {
              this.$message.error(res.message)
            }
          })
        }
      })
    },
    handleCancel() {
      this.$emit('back')
    }
  }
}
</script>

<style scoped>

</style>
