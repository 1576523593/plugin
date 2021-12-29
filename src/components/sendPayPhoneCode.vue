<template>
   <div class="code_container">
     <el-alert title="为了保证您的资金安全，我们需要验证您的手机" type="warning" show-icon v-if="type === 'pay'"></el-alert>
     <el-form :model="phoneForm" label-width="120px" ref="phoneForm" :rules="rules" class="phoneForm" label-position="center">
       <el-form-item label="手机号码：">
         <span class="input_width">{{params.phone}}</span>
       </el-form-item>
       <el-form-item label="验证码：" prop="code">
         <div>
           <el-input class="input_width" v-model="phoneForm.code" style="float: left" placeholder="请输入验证码"></el-input>
           <el-button type="primary"  :plain="true" slot="reference" :disabled="isDisabled" @click="pardonSend" style="width: 100%;margin-left:20px;padding-left: 15px;float: left;width: 120px">{{buttonName}}</el-button>
         </div>
       </el-form-item>
     </el-form>
     <div class="footer">
       <el-button @click="lastStep">上一步</el-button>
       <el-button type="primary" @click="submitForm('phoneForm')" :disabled="disabled">{{type === 'pay' ? '支付' : '立即提现'}}</el-button>
     </div>
   </div>
</template>

<script>
export default {
  name: 'sendPayPhoneCode',
  data () {
    return {
      disabled: false,
      phoneForm: {
        code: ''
      },
      bizOrderNo: '',
      isDisabled: false,
      time: 60,
      buttonName: '重新发送(60秒)',
      rules: {
        code: [
          { required: true, message: '请填写接收到的验证码', trigger: 'blur' }
        ]
      }
    }
  },
  props: {
    params: {
      require: true,
      type: Object
    },
    // 提交类型 付款或体现
    type: {
      required: true,
      type: String,
      default: 'none'
    }
  },
  mounted () {
    this.bizOrderNo = this.params.bizOrderNo
    this.sendUserCode()
  },
  methods: {
    // 返回上一步
    lastStep () {
      this.$emit('getCurrentStep', 1)
    },
    // 支付方法
    payMethod (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.disabled = true
          let params = {
            orderId: this.params.orderId,
            verificationCode: this.phoneForm.code,
            couponId: this.params.couponId
          }
          this.api.getPayOfCode(params).then(res => {
            if (res.code === this.constants.SUCCESS_CODE) {
              this.$emit('pay', 'success')
              setTimeout(() => {
                this.disabled = false
              }, 1000)
              this.$message.success(res.msg)
            } else {
              setTimeout(() => {
                this.disabled = false
              }, 1000)
              this.$emit('pay', 'error')
              this.$message.error('请输入正确的验证码')
            }
          })
        }
      })
    },
    // 提现方法
    cashMethod (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.disabled = true
          let params = {
            bizOrderNo: this.bizOrderNo,
            amount: this.params.amount,
            verificationCode: this.phoneForm.code
          }
          this.api.getCashOfCash(params).then(res => {
            if (res.code === this.constants.SUCCESS_CODE) {
              this.$emit('pay', 'success')
              setTimeout(() => {
                this.disabled = false
              }, 1000)
              this.$message.success('提现申请成功，24小时内到账，请稍后')
            } else {
              setTimeout(() => {
                this.disabled = false
              }, 1000)
              this.$emit('pay', 'error')
              this.$message.error('请输入正确的验证码')
            }
          })
        }
      })
    },
    // 支付
    submitForm (formName) {
      if (this.type === 'pay') {
        this.payMethod(formName)
      } else if (this.type === 'cash') {
        this.cashMethod(formName)
      }
    },
    // 取消
    resetForm () {
      this.$emit('pay', 'cancel')
    },
    // 重新发送验证码
    pardonSend () {
      if (this.type === 'pay') {
        this.pardonSendPayCode()
      } else if (this.type === 'cash') {
        this.pardonSendCashCode()
      }
    },
    // 重新发送验证码Pay支付
    pardonSendPayCode () {
      this.sendUserCode()
      let params = {
        orderId: this.params.orderId,
        orderAmount: this.params.orderAmount,
        payMethodType: this.params.payMethodType,
        memberType: this.params.memberType,
        couponId: this.params.couponId
      }
      this.api.personMemberPayment(params).then(res => {
        if (res.code !== this.constants.SUCCESS_CODE) {
          this.$message.error(res.msg)
        }
      })
    },
    // 重新发送验证码cash提现
    pardonSendCashCode () {
      this.sendUserCode()
      let params = {
        amount: this.params.amount
      }
      this.api.userToCash(params).then(res => {
        if (res.code !== this.constants.SUCCESS_CODE) {
          this.$message.error('余额不足')
        } else {
          this.bizOrderNo = res.data.bizOrderNo
        }
      })
    },
    // 发送验证码
    sendUserCode () {
      this.isDisabled = true
      let _this = this
      let interVal = setInterval(() => {
        _this.time--
        _this.buttonName = '重新发送(' + _this.time + '秒)'
        if (_this.time < 0) {
          _this.buttonName = '获取验证码'
          _this.time = 60
          _this.isDisabled = false
          clearInterval(interVal)
        }
      }, 1000)
    }
  }
}
</script>

<style scoped lang="less">
  .input_width{
    width: 120px;
  }
  .phoneForm{
    margin-left: 20%;
    margin-top: 15px;
  }
  .footer{
    text-align: right;
    padding-right: 20px;
  }
</style>
