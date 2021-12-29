<template>
    <div class="container_box">
      <div class="charge_container">
        <h3 class="title">{{Tipmsg}}</h3>
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="80px" class="demo-ruleForm passwordForm">
          <el-form-item label="手机号" prop="phone">
            <div class="code">
              <el-input v-model="ruleForm.phone" class="code_input" :readonly="readonly" :disabled="isDisableds" placeholder="请输入手机号码"></el-input>
              <div class="code_identifying" >
                <el-button type="primary"  :plain="true" slot="reference" :disabled="isDisabled" @click="sendUserCode" style="width: 100%;padding-left: 15px">{{buttonName}}</el-button>
              </div>
            </div>
          </el-form-item>
          <el-form-item label="验证码" prop="code">
            <el-input v-model="ruleForm.code" placeholder="请输入验证码"></el-input>
          </el-form-item>
        </el-form>
        <div style="text-align: center">
          <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
        </div>
      </div>
    </div>
</template>

<script>
import { payPhoneCheck, bindingPhone, ishasPhone } from '@/api/login'
import Axios from 'axios'
export default {
  name: 'biddingPhone',
  data () {
    var valadatePhone = (rule, value, callback) => {
      const phoneReg = /^1(3|4|5|6|7|8|9)\d{9}$/
      if (!value) {
        return callback(new Error('手机号不能为空'))
      }
      setTimeout(() => {
        if (phoneReg.test(value)) {
          callback()
        } else {
          callback(new Error('手机号格式不正确'))
        }
      }, 100)
    }
    return {
      Tipmsg: '绑定手机号码',
      readonly: false,
      time: 60,
      orgId: '',
      dialogVisible: false,
      ruleForm: {
        phone: '',
        code: ''
      },
      isDisableds: false,
      isDisabled: false,
      buttonName: '获取验证码',
      rules: {
        phone: [
          { required: true, validator: valadatePhone, trigger: ['blur', 'change'] }
        ],
        code: [
          { required: true, message: '请输入获取到的手机验证码', trigger: 'blur' }
        ]
      }
    }
  },
  props: {
    type: {
      require: true,
      type: String,
      default: 'orgMember'
    },
    phone: {
      type: [String, Number]
    },
    params: {
      type: Object
    }
  },
  created () {
    this.getOrgId()
    this.getPhone()
    if (this.type === 'memberPhone') {
      this.Tipmsg = '支付账号手机号验证'
      this.sendPersonalCode()
    }
  },
  methods: {
    getOrgId () {
      this.api.getIdentification().then(res => {
        if (res.code === 200) {
          this.orgId = res.data.id
        }
      })
    },
    // 一口价为0时，修改委托单状态
    setOrderStatus () {
      this.api.changeOrderStatus({ orderId: this.params.id }).then(res => {
        if (res.code === this.constants.SUCCESS_CODE) {
          this.$emit('closeDialog', true)
          this.$message.success('付款成功')
        }
      })
    },
    getPhone () {
      if (this.phone) {
        this.readonly = true
        this.Tipmsg = '为确保账号安全系统需要验证您的手机号码'
        this.ruleForm.phone = this.phone
      } else {
        ishasPhone().then(res => {
          if (res.code === this.constants.SUCCESS_CODE) {
            this.ruleForm.phone = res.data
            this.readonly = true
            this.Tipmsg = '为账号安全系统需要验证您的手机号码'
          } else {
            this.readonly = false
            this.Tipmsg = '绑定手机号码'
          }
        })
      }
    },
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          if (this.type === 'memberPhone') {
            this.enterpriseBiddingPhone()
          } else {
            this.orgBiddingPhone()
          }
        }
      })
    },
    enterpriseBiddingPhone () {
      let formData = new FormData()
      formData.append('mobilePhone', this.ruleForm.phone)
      formData.append('verificationCode', this.ruleForm.code)
      this.api.personMemberBiddingPhone(formData).then(res => {
        if (res.code === this.constants.SUCCESS_CODE) {
          if (this.params.buyoutPrice === 0) {
            this.setOrderStatus()
          } else {
            this.dialogVisible = false
            this.$emit('currentStep', 3)
            this.$message.success(res.msg)
          }
        } else {
          this.$message.error(res.msg)
        }
      })
    },
    orgBiddingPhone () {
      let params = this.ruleForm.phone + '/' + this.ruleForm.code
      bindingPhone(params).then(res => {
        if (res.code === this.constants.SUCCESS_CODE) {
          this.dialogVisible = false
          this.$emit('biddingStatus', 'success')
          this.$message.success(res.msg)
        } else {
          this.$message.error(res.msg)
        }
      })
    },
    sendPersonalCode () {
      if (this.ruleForm.phone === '') {
        this.$message.warning('请输入正确的手机号码再获取验证码')
        return
      }
      this.phoneRadom = Math.floor(Math.random() * 1000)
      let me = this
      let formData = new FormData()
      formData.append('mobilePhone', this.ruleForm.phone)
      this.api.getPersonalMemberCode(formData).then(res => {
        if (res.code === 200) {
          me.isDisabled = true
          me.isDisableds = true
          let interval = window.setInterval(function () {
            me.buttonName = '重新发送(' + me.time + '秒)'
            --me.time
            if (me.time < 0) {
              me.buttonName = '获取验证码'
              me.time = 60
              me.isDisabled = false
              me.isDisableds = false
              window.clearInterval(interval)
            }
          }, 1000)
        } else {
          this.$message.error(res.msg)
        }
      })
    },
    sendUserCode () {
      if (this.type === 'memberPhone') {
        this.sendPersonalCode()
      } else {
        if (this.ruleForm.phone === '') {
          this.$message.warning('请输入正确的手机号码再获取验证码')
          return
        }
        this.phoneRadom = Math.floor(Math.random() * 1000)
        let me = this
        let params = this.orgId + '/' + this.ruleForm.phone
        payPhoneCheck(params).then(res => {
          if (res.code === 200) {
            me.isDisabled = true
            me.isDisableds = true
            let interval = window.setInterval(function () {
              me.buttonName = '重新发送(' + me.time + '秒)'
              --me.time
              if (me.time < 0) {
                me.buttonName = '获取验证码'
                me.time = 60
                me.isDisabled = false
                me.isDisableds = false
                window.clearInterval(interval)
              }
            }, 1000)
          } else {
            this.$message.error(res.msg)
          }
        })
      }
    }
  }
}
</script>

<style scoped lang="less">
  .container_box{
    width: 70%;
    margin-left: 15%;
    text-align: center;
    height: 100%;
  }
  .title{
    text-align: center;
  }
  .charge_container{
    font-size: 18px;
    line-height: 50px;
  }
  .code {
    width: 100%;
    height: auto;
    display: block;
    .code_input{
      float: left;
      width: 51%;
    }
    .code_identifying{
      float: right;
      width: 46%;
      /deep/.el-popover__reference{
        width: 100%;
      }
    }
  }
</style>
