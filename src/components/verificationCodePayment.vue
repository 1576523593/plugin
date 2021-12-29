<template>
  <el-dialog
    title="手机验证"
    :visible.sync="dialogVisible"
    width="50%"
    custom-class="dialog">
  <div class="code_container">
    <el-alert title="为了保证您的资金安全，我们需要验证您的手机" type="warning" show-icon></el-alert>
    <el-form :model="phoneForm" label-width="120px" ref="phoneForm" :rules="rules" class="phoneForm" label-position="center">
      <el-form-item label="您的手机号码：">
        <span class="input_width">{{record.phone}}</span>
      </el-form-item>
      <el-form-item label="验证码：" prop="code">
        <div>
          <el-input class="input_width" v-model="phoneForm.code" style="float: left" placeholder="请输入收到的手机验证码（有效期3分钟）"></el-input>
          <el-button type="primary"  :plain="true" slot="reference" :disabled="isDisabled" @click="pardonSend" style="width: 100%;margin-left:20px;padding-left: 15px;float: left;width: 120px">{{buttonName}}</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
    <div slot="footer" class="dialog-footer">
      <el-button @click="resetForm">取 消</el-button>
      <el-button type="primary" @click="submitForm('phoneForm')" :disabled="disabled">支付</el-button>
    </div>
  </el-dialog>
</template>

<script>
export default {
  name: 'verificationCodePayment',
  data () {
    return {
      dialogVisible: false,
      disabled: false,
      phoneForm: {
        code: ''
      },
      second: 5,
      payTime: '',
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
    visible: {
      require: true,
      type: Boolean
    },
    record: {
      require: true,
      type: Object
    },
    type: {
      require: true,
      type: String
    }
  },
  computed: {
    roleCode () {
      return this.$store.getters.roleCode
    }
  },
  mounted () {
    this.sendUserCode()
  },
  methods: {
    // 支付标识
    payIdentification (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.disabled = true
          let params = {
            markOrderId: this.record.clientMarkId,
            verificationCode: this.phoneForm.code,
            bizOrderNo: this.record.bizOrderNo
          }
          this.api.postVerificationCode(params).then(res => {
            if (res.code === this.constants.SUCCESS_CODE) {
              let str = this.$message({
                showClose: false,
                message: '系统检测到您已支付成功，5s后系统将自动为您刷新“订单管理”，查看购买订单',
                type: 'success',
                duration: 5000
              })
              this.payTime = setInterval(() => {
                this.second--
                if (this.second === 0) {
                  clearInterval(this.payTime)
                  if (this.roleCode === '1') {
                    this.$router.push('/control/co-calibration-service/co-order-management')
                  } else if (this.roleCode === '2') {
                    this.$router.push('/control/ec-calibration-service/ec-order-management')
                  } else {
                    this.$router.push('/control/ec-calibration-service/ec-order-management')
                  }
                  this.second = 5
                  this.disabled = false
                  this.dialogVisible = false
                } else {
                  str.message = '系统检测到您已支付成功，' + this.second + 's后系统将自动为您刷新“订单管理”，查看购买订单'
                }
              }, 1000)
              // this.$message.success(res.msg)
            } else {
              setTimeout(() => {
                this.disabled = false
              }, 1000)
              this.$message.error(res.msg)
            }
          })
        }
      })
    },
    // 支付服务
    payIService (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.disabled = true
          let params = {
            id: this.record.clientServiceId,
            // buyPeriod: this.record.buyPeriod,
            payPrice: this.record.buyPrice,
            verificationCode: this.phoneForm.code,
            bizOrderNo: this.record.bizOrderNo
          }
          this.api.postServiceVerificationCode(params).then(res => {
            if (res.code === this.constants.SUCCESS_CODE) {
              // this.$message.success(res.msg)
              let str = this.$message({
                showClose: false,
                message: '系统检测到您已支付成功，5s后系统将自动为您刷新“订单管理”，查看购买订单',
                type: 'success',
                duration: 5000
              })
              this.payTime = setInterval(() => {
                this.second--
                if (this.second === 0) {
                  clearInterval(this.payTime)
                  if (this.roleCode === '1') {
                    this.$router.push('/control/co-calibration-service/co-service-order-management')
                  } else if (this.roleCode === '2') {
                    this.$router.push('/control/ec-calibration-service/ec-service-order-management')
                  } else {
                    this.$router.push('/control/ec-calibration-service/ec-service-order-management')
                  }
                  this.second = 5
                  this.disabled = false
                  this.dialogVisible = false
                } else {
                  str.message = '系统检测到您已支付成功，' + this.second + 's后系统将自动为您刷新“订单管理”，查看购买订单'
                }
              }, 1000)
            } else {
              setTimeout(() => {
                this.disabled = false
              }, 1000)
              this.$message.error(res.msg)
            }
          })
        }
      })
    },
    // 支付
    submitForm (formName) {
      if (this.type === 'identification') {
        this.payIdentification(formName)
      } else if (this.type === 'service') {
        this.payIService(formName)
      } else if (this.type === 'solution') {
        this.solutionService(formName)
      }
    },
    // 应用支付
    solutionService (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.disabled = true
          let params = {
            id: this.record.clientServiceId,
            // buyPeriod: this.record.buyPeriod,
            payPrice: this.record.buyPrice,
            verificationCode: this.phoneForm.code,
            bizOrderNo: this.record.bizOrderNo
          }
          this.api.solutionOrderConfirmPayment(params).then(res => {
            if (res.code === this.constants.SUCCESS_CODE) {
              // this.$message.success(res.msg)
              let str = this.$message({
                showClose: false,
                message: '系统检测到您已支付成功，5s后系统将自动为您刷新“订单管理”，查看购买订单',
                type: 'success',
                duration: 5000
              })
              this.payTime = setInterval(() => {
                this.second--
                if (this.second === 0) {
                  clearInterval(this.payTime)
                  if (this.roleCode === '1') {
                    this.$router.push('/control/co-calibration-service/co-service-order-management')
                  } else if (this.roleCode === '2') {
                    this.$router.push('/control/ec-calibration-service/ec-service-order-management')
                  } else {
                    this.$router.push('/control/ec-calibration-service/ec-service-order-management')
                  }
                  this.second = 5
                  this.disabled = false
                  this.dialogVisible = false
                } else {
                  str.message = '系统检测到您已支付成功，' + this.second + 's后系统将自动为您刷新“订单管理”，查看购买订单'
                }
              }, 1000)
            } else {
              setTimeout(() => {
                this.disabled = false
              }, 1000)
              this.$message.error(res.msg)
            }
          })
        }
      })
    },
    // 取消
    resetForm () {
      this.dialogVisible = false
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
    },
    // 重新获取验证码
    pardonSend () {
      if (this.type === 'identification') {
        this.clientCode()
      } else if (this.type === 'service') {
        this.serviceCode()
      } else if (this.type === 'solution') {
        this.solutionCode()
      }
    },
    solutionCode () {
      this.sendUserCode()
      const params = {
        id: this.record.clientServiceId || this.record.applicationServiceId,
        payPrice: this.record.buyPrice
      }
      this.api.solutionOrderPayment(params).then(res => {
        if (res.code !== this.constants.SUCCESS_CODE) {
          this.$message.error(res.msg)
        }
      })
    },
    clientCode () {
      this.sendUserCode()
      const params = {
        orderId: this.record.clientMarkId,
        buyPrice: this.record.buyPrice
      }
      this.api.postClientPayment(params).then(res => {
        if (res.code !== this.constants.SUCCESS_CODE) {
          this.$message.error(res.msg)
        }
      })
    },
    serviceCode () {
      this.sendUserCode()
      const params = {
        id: this.record.clientServiceId,
        payPrice: this.record.buyPrice
      }
      this.api.postServicePayment(params).then(res => {
        if (res.code !== this.constants.SUCCESS_CODE) {
          this.$message.error(res.msg)
        }
      })
    }
  },
  watch: {
    visible (newVal) {
      this.dialogVisible = newVal
    },
    dialogVisible (newVal) {
      this.$emit('update:visible', newVal)
    }
  }
}
</script>

<style scoped lang="less">
  .input_width{
    width: 300px;
  }
  .phoneForm{
    margin-top: 15px;
  }
  .footer{
    text-align: right;
  }
</style>
