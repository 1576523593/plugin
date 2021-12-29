<template>
    <div
     class="payment"
    >
      <template v-if="!balanceStep">
        <el-row>
          <el-col :span="18">
            <div class="userinfo_box">
              <el-row>
                <el-col :span="12" class="left">
                  <img src="@/assets/image/person_icon.png" >
                  <span class="userCode">支付账号: <span>{{userCode}}</span></span>
                </el-col>
              </el-row>
            </div>
          </el-col>
        </el-row>
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="form" label-position="left">
          <el-form-item label="支付方式" prop="type">
            <el-radio :label="1" v-model="ruleForm.type" border class="radio"><span class="iconfont wechat">&#xe689;&nbsp;微信支付</span></el-radio>
            <el-radio :label="2" v-model="ruleForm.type" border class="radio"><span class="iconfont alipay">&#xe6b8;&nbsp;支付宝</span></el-radio>
            <el-radio :label="3" v-model="ruleForm.type" border class="radio"><span class="iconfont card">&#xe7d0;&nbsp;网银支付</span></el-radio>
            <el-radio :label="4" v-model="ruleForm.type" border class="radio" v-if="memberType === 'orgType'">账户余额</el-radio>
          </el-form-item>
          <el-form-item label="选择优惠券" v-if="this.memberType === 'orgType' && hasAccount">
            <el-select v-model="ruleForm.couponId" placeholder="请选择要使用的优惠券" @change="selectChange">
              <el-option label="不使用优惠券" value=""></el-option>
              <el-option
                v-for="item in ticketsList"
                :key="item.id"
                :label="'省' + item.price + '元：满' + item.useMinPrice +  '减' + item.price"
                :value="item.id">
              </el-option>
            </el-select>
            <el-tooltip effect="dark" content="只显示满足条件的优惠卷" placement="right">
              <span class="el-icon-info tickets_tips"></span>
            </el-tooltip>
          </el-form-item>
        </el-form>
        <div id="qrcode" ref="qrCodeUrl" v-show="hasChoose"></div>
        <span class="amount_price">应付金额: <span class="need_pay">{{this.needPayPrice || amount}}元</span></span>
        <div class="footer">
          <el-button @click="previous">取消</el-button>
          <el-button type="primary" @click="previous" v-if="hasChoose">已完成支付</el-button>
          <el-button type="primary" @click="submit('ruleForm')" :loading="submitBtn">{{tipMSG}}</el-button>
        </div>
      </template>
      <template v-if="balanceStep">
        <phoneModal
          class="phoneModal"
          :params="paramsReturn"
          @getCurrentStep="getCurrentStep"
          @pay="pay"
          type="pay"
        />
      </template>
    </div>
</template>

<script>
import Axios from 'axios'
import QRCode from 'qrcodejs2'
import '@/assets/fonts/icon/iconfont.css'
import phoneModal from '@/components/sendPayPhoneCode'
export default {
  name: 'paymentMethodModal',
  components: { phoneModal },
  data () {
    let validateAmount = (rule, value, callback) => {
      const reg = /^(0|[1-9]\d{0,7})(\.\d{1,2})?$/
      if (reg.test(value)) {
        if (value < 1) {
          callback(new Error('充值的金额不得小于1元'))
        } else if (value > 100000000) {
          callback(new Error('充值的金额不得大于1亿元'))
        } else {
          callback()
        }
      } else {
        callback(new Error('小数点后最多输入2位数字，或者输入1~8位的整数(2位以上数字，首字符不可为‘0’，例如：‘01’)。'))
      }
    }
    return {
      balanceStep: false,
      paramsReturn: {},
      submitBtn: false,
      hasAccount: false,
      hasChoose: false,
      qrcode: '',
      needPayPrice: '',
      remainder: '', // 余额
      userCode: JSON.parse(sessionStorage.getItem('userId')),
      ruleForm: {
        amount: '',
        type: '',
        couponId: ''
      },
      queryParams: {
        orgId: '',
        current: 1, // 当前页
        size: 999, // 每页条数
        status: '',
        'a.startTime': '',
        'a.endTime': '',
        sidx: 'create_time',
        sord: 'desc'
      },
      ticketsList: [],
      tipMSG: '支付',
      QRcodeUrl: '',
      rules: {
        amount: [
          { required: true, message: '请填写要充值的金额', trigger: 'blur' }
          // { validator: validateAmount, trigger: 'blur' }
        ],
        type: [
          { required: true, message: '请选择充值的方式', trigger: 'blur' }
        ]
      }
    }
  },
  props: {
    phone: {
      type: [String, Number]
    },
    memberType: {
      type: String
    },
    amount: {
      require: true,
      type: Number
    },
    orderId: {
      require: true
    }
  },
  created () {
    this.getTicketsPage()
  },
  watch: {
    'ruleForm.type' (newValue, oldValue) {
      if (this.needPayPrice) {
        this.needPayPrice = ''
        this.ruleForm.couponId = ''
      }
      if (newValue === 4) {
        this.hasAccount = true
      } else {
        this.hasAccount = false
      }
      if ([1, 2].includes(newValue)) {
        this.tipMSG = '获取付款码'
      } else {
        this.hasChoose = false
        if (newValue === 4) {
          this.tipMSG = '支付'
        } else {
          this.tipMSG = '去支付'
        }
      }
    }
  },
  methods: {
    selectChange (val) {
      let current = {}
      if (val) {
        current = this.ticketsList.find(v => v.id === val)
      } else {
        current.price = 0
      }
      if (this.amount === 0) {
        this.needPayPrice = (((this.amount * 100) - (current.price * 100)) / 100).toFixed(2)
      } else {
        this.needPayPrice = (((this.amount * 100) - (current.price * 100)) / 100).toFixed(2)
      }
    },
    // 支付结果调用
    pay (val) {
      if (val !== 'error') {
        this.previous()
      }
    },
    // 生成二维码
    creatQrCode () {
      if (document.getElementById('qrcode')) {
        document.getElementById('qrcode').innerHTML = ''
      }
      this.qrcode = new QRCode(this.$refs.qrCodeUrl, {
        width: 200,
        height: 200,
        colorDark: '#000000',
        colorLight: '#ffffff',
        correctLevel: QRCode.CorrectLevel.H
      })
      this.qrcode.clear()
      this.qrcode.makeCode(this.QRcodeUrl)
    },
    getOrgId () {
      return new Promise((resolve, reject) => {
        this.api.getIdentification().then(res => {
          if (res.code === this.constants.SUCCESS_CODE) {
            const id = res.data.id
            this.orgId = id
            this.queryParams.orgId = id
            resolve(res)
          } else {
            reject(res.msg)
          }
        })
      })
    },
    // 获取使用单位下所有优惠券
    async getTicketsPage () {
      let res = await this.getOrgId()
      if (res.code === this.constants.SUCCESS_CODE) {
        await this.api.getMyTicketsPage(this.queryParams).then(res => {
          if (res.code === this.constants.SUCCESS_CODE) {
            const { records, total } = res.data
            if (this.amount !== 0) {
              let filteredRecords = records.filter(v => v.status === 0 && v.useMinPrice <= this.amount)
              this.ticketsList = filteredRecords
            } else {
              let filteredRecords = records.filter(v => v.status === 0 && v.useMinPrice <= this.amount)
              this.ticketsList = filteredRecords
            }
          }
        })
      }
    },
    paymentMethod (params) {
      this.api.personMemberPayment(params).then(res => {
        if (res.code === this.constants.SUCCESS_CODE) {
          if ([1, 2].includes(this.ruleForm.type)) {
            this.submitBtn = false
            this.QRcodeUrl = res.data
            this.hasChoose = true
            this.creatQrCode()
          } else {
            if (this.ruleForm.type === 4) {
              setTimeout(() => {
                this.submitBtn = false
                this.balanceStep = true
                params.phone = this.phone
                this.paramsReturn = params
              }, 1200)
            } else {
              this.submitBtn = false
              window.open(res.data)
            }
          }
        } else {
          this.submitBtn = false
          this.$message.error(res.msg)
        }
      })
    },
    // 余额查询
    getUserCash () {
      return new Promise(resolve => {
        this.api.searchUserBalance().then(res => {
          if (res.code === this.constants.SUCCESS_CODE) {
            resolve(res.data)
          }
        })
      })
    },
    // 会员支付
    submit (formName) {
      this.$refs[formName].validate(async (valid) => {
        if (valid) {
          this.submitBtn = true
          let params = {
            orderId: this.orderId,
            orderAmount: this.amount * 100,
            payMethodType: this.ruleForm.type,
            couponId: this.ruleForm.type === 4 ? this.ruleForm.couponId : '',
            memberType: this.memberType === 'orgType' ? 2 : 3
          }
          if (this.memberType === 'orgType' && this.ruleForm.type === 4) {
            let balance = await this.getUserCash()
            let orderAmount = this.needPayPrice || this.amount
            if (balance < orderAmount) {
              this.$confirm('余额不足，是否充值', '提示', {
                confirmButtonText: '去充值',
                cancelButtonText: '取消',
                type: 'warning'
              }).then(() => {
                this.submitBtn = false
                this.previous()
                this.$router.push({ name: 'ec-account-message' })
              }).catch(() => {
              })
            } else {
              this.paymentMethod(params)
            }
          } else {
            this.paymentMethod(params)
          }
        }
      })
    },
    // 余额支付返回上一步
    getCurrentStep (val) {
      if (val) {
        this.balanceStep = false
      }
    },
    // 取消
    previous () {
      this.$emit('currentStep', 'cancel')
    }
  }
}
</script>

<style scoped lang="less">
  .footer{
    text-align: right;
  }
  .userinfo_box{
    padding: 15px;
    border: 1px solid #ccc;
    border-radius: 10px;
    .left{
      height: 100px;
      line-height: 100px;
      float: left;
      .userCode{
        color: #707070;
        margin-left: 16px;
        float: left;
        display: block;
        line-height: 100px;
      }
      img{
        float: left;
        width: 100px;
        height: 100px;
      }
    }
    .right{
      height: 100px;
      line-height: 100px;
      .remainder{
        color: #707070;
        display: block;
        height: 100px;
        line-height: 100px;
        text-align: right;
        span{
          color: #0aa0f6;
        }
      }
    }
  }
  .amount_price{
    font-size: 14px;
    color: #606266;
    font-weight: 700;
    margin-left: 12px;
  }
  .form{
    padding-top: 30px;
  }
  .wechat{
    color: #09bb07;
    font-size: 16px;
  }
  #qrcode{
    margin: 0 0 20px 99px;
  }
  .alipay{
    color: #049eeb;
    font-size: 16px;
  }
  .need_pay{
    font-size: 18px;
    color: red;
    font-weight: bold;
    padding-left: 25px;
  }
  .card{
    font-size: 16px;
    color: #ffaa00;
  }
  .code_input{
    width: 420px;
  }
  .radio{
    margin: 0;
  }
  .btn_group{
    margin-top: 20px;
  }
  .tickets_tips{
    font-size: 18px;
    color: #e6a23c;
    margin-left: 8px;
  }
</style>
