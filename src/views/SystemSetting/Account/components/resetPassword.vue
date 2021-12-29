<template>
  <a-modal
    title="重置密码"
    :visible="modalVisible"
    :confirm-loading="confirmLoading"
    @ok="handleOk"
    @cancel="handleCancel"
  >
    <a-form-model
      ref="ruleForm"
      :model="ruleForm"
      :rules="rules"
      v-bind="layout">
      <a-form-model-item
        label="旧密码"
        prop="password">
        <a-input
          v-model="ruleForm.password"
          type="password"
        />
      </a-form-model-item>
      <a-form-model-item
        has-feedback
        label="新密码"
        prop="newPassword">
        <a-input
          v-model="ruleForm.newPassword"
          type="password"
          autocomplete="off" />
      </a-form-model-item>
      <a-form-model-item
        has-feedback
        label="确认密码"
        prop="confirmPassword">
        <a-input
          v-model="ruleForm.confirmPassword"
          type="password"
          autocomplete="off" />
      </a-form-model-item>
    </a-form-model>
  </a-modal>
</template>

<script>
import { updateCurUserPass } from '@/api/system-setting'
import { mapActions } from 'vuex'
export default {
name: 'ResetPassword',
  data () {
    const validatePass = (rule, value, callback) => {
      const reg = /^([A-z0-9!@#$%^&*()~<>?":}{*-+./]){6,20}$/
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        if (reg.test(value)) {
          if (this.ruleForm.confirmPassword !== '') {
            this.$refs.ruleForm.validateField('confirmPassword')
          }
          callback()
        } else {
          callback(new Error('请输入6-20位密码，可包含大小写字母、数字、符号'))
        }
      }
    }
    const validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入再次密码'))
      } else if (value !== this.ruleForm.newPassword) {
        callback(new Error('两次密码不一致'))
      } else {
        callback()
      }
    }
    return {
      modalVisible: false,
      confirmLoading: false,
      ruleForm: {
        password: '',
        confirmPassword: ''
      },
      rules: {
        password: [{ required: true, trigger: 'change', message: '请输入旧密码' }],
        newPassword: [{ validator: validatePass, trigger: 'change', required: true }],
        confirmPassword: [{ validator: validatePass2, trigger: 'change', required: true }]
      },
      layout: {
        labelCol: { span: 4 },
        wrapperCol: { span: 14 }
      }
    }
  },
  props: {
    visible: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    visible(newValue, oldValue) {
      this.modalVisible = newValue
      this.$refs.ruleForm.resetFields()
    },
    modalVisible(val) {
      this.$emit('update:visible', val)
    }
  },
  methods: {
    ...mapActions([
      'Logout'
    ]),
    handleLogout () {
      const self = this
      this.$success({
        title: '密码修改成功',
        content: '密码修改成功，需要重新登录！',
        okText: '确认',
        onOk () {
          return new Promise((resolve, reject) => {
            self.Logout().finally(() => {
              setTimeout(() => {
                window.location.reload()
                this.$message.success('您已成功退出登录!')
                resolve()
              }, 1000)
            })
          })
        }
      })
    },
    handleOk(e) {
      this.$refs.ruleForm.validate(valid => {
        if (valid) {
          this.confirmLoading = true
          this.ruleForm.id = this.$store.state.userInfo.id
          updateCurUserPass(this.ruleForm).then(res => {
            if (res && res.status === 0) {
              this.confirmLoading = false
              this.visible = false
              this.handleLogout()
            } else {
              this.confirmLoading = false
              this.$message.error(res.message)
            }
          })
        }
      })
    },
    handleCancel(e) {
      this.modalVisible = false
    }
  }
}
</script>

<style scoped>

</style>
