<template>
  <div class="sun-paper_container-absolute">
    <div class="sun-paper_page-content-wrapper">
      <a-card
        title="基础信息"
        :headStyle="headStyle"
      >
        <div class="user-manage-edit-content">
          <a-form-model
            ref="form"
            :model="form"
            :rules="rules"
            :layout="layout"
          >
            <a-row>
              <a-col :span="7">
                <a-form-model-item
                  label="账号"
                  prop="userName"
                >
                  <a-input
                    v-model="form.userName"
                    placeholder="请输入登录账号"
                  />
                </a-form-model-item>
              </a-col>
              <a-col
                v-if="this.type !== 'edit'"
                :span="7"
                :offset="1"
              >
                <a-form-model-item
                  label="密码"
                  prop="password"
                >
                  <a-input
                    v-model="form.password"
                    placeholder="请输入登录密码"
                  />
                </a-form-model-item>
              </a-col>
              <a-col
                v-if="this.type !== 'edit'"
                :span="7"
                :offset="1"
              >
                <a-form-model-item
                  label="确认密码"
                  prop="confirmPassword"
                >
                  <a-input
                    placeholder="请输入确认密码"
                    v-model="form.confirmPassword"
                  />
                </a-form-model-item>
              </a-col>
              <a-col
                :span="7"
                :offset="this.type !== 'edit' ? 0 : 1">
                <a-form-model-item
                  label="姓名"
                  prop="realName"
                >
                  <a-input
                    placeholder="请输入姓名"
                    v-model="form.realName"
                  />
                </a-form-model-item>
              </a-col>
              <a-col
                :span="7"
                :offset="1"
              >
                <a-form-model-item
                  label="手机号"
                  prop="mobilePhone"
                >
                  <a-input
                    placeholder="请输入手机号"
                    v-model="form.mobilePhone"
                  />
                </a-form-model-item>
              </a-col>
              <a-col
                :span="7"
                :offset="this.type !== 'edit' ? 1 : 0"
              >
                <a-form-model-item
                  label="邮箱"
                  prop="email"
                >
                  <a-input
                    placeholder="请输入邮箱"
                    v-model="form.email"
                  />
                </a-form-model-item>
              </a-col>
              <a-col
                :span="7"
                :offset="this.type !== 'edit' ? 0 : 1">
                <a-form-model-item
                  label="状态"
                  prop="status"
                >
                  <a-select
                    v-model="form.status"
                    placeholder="请选择状态"
                  >
                    <a-select-option
                      :value="itemData.dataVal"
                      v-for="(itemData, index) in userStatusData"
                      :key="index"
                    >
                      {{ itemData.dataName }}
                    </a-select-option>
                  </a-select>
                </a-form-model-item>
              </a-col>
              <!--              <a-col-->
              <!--                :span="7"-->
              <!--                :offset="1"-->
              <!--              >-->
              <!--                <a-form-model-item-->
              <!--                  label="管辖机构"-->
              <!--                  prop="manageOrganizationIds"-->
              <!--                >-->
              <!--                  <a-tree-select-->
              <!--                    class="dep"-->
              <!--                    multiple-->
              <!--                    v-model="form.manageOrganizationIds"-->
              <!--                    :tree-data="orgSelect"-->
              <!--                    :replaceFields="{ title: 'organizationName', value: 'id', key: 'organizationCode' }"-->
              <!--                    :dropdown-style="{ maxHeight: '400px', overflow: 'auto' }"-->
              <!--                    placeholder="请选择管辖机构"-->
              <!--                    allow-clear-->
              <!--                    tree-default-expand-all-->
              <!--                  >-->
              <!--                  </a-tree-select>-->
              <!--                </a-form-model-item>-->
              <!--              </a-col>-->
              <!--              <a-col-->
              <!--                :span="7"-->
              <!--                :offset="this.type !== 'edit' ? 1 : 0"-->
              <!--              >-->
              <!--                <a-form-model-item-->
              <!--                  label="角色"-->
              <!--                  prop="roleIds"-->
              <!--                >-->
              <!--                  <a-select-->
              <!--                    class="dep"-->
              <!--                    v-model="form.roleIds"-->
              <!--                    placeholder="请选择角色"-->
              <!--                    mode="multiple"-->
              <!--                  >-->
              <!--                    <a-select-option-->
              <!--                      v-for="roleData in roleDatas"-->
              <!--                      :key="roleData.id"-->
              <!--                      :value="roleData.id"-->
              <!--                    >-->
              <!--                      {{ roleData.roleName }}-->
              <!--                    </a-select-option>-->
              <!--                  </a-select>-->
              <!--                </a-form-model-item>-->
              <!--              </a-col>-->
            </a-row>
          </a-form-model>
        </div>
      </a-card>
    </div>
    <div class="sun-paper_page-operation-wrapper">
      <a-button
        size="large"
        type="default"
        @click="handleBackTo"
      >
        取消
      </a-button>
      <a-button
        size="large"
        type="primary"
        @click="submitForm"
      >
        提交
      </a-button>
    </div>
  </div>
</template>

<script>
import { getAction } from '@/utils/request'
import {
 // getRoleCodeSelect,
  userAction
} from '@/api/system-setting'
import { getDicData } from '@/api/equipment-manage'

export default {
  name: 'UserManageEdit',
  data () {
    const validatePass1 = (rule, value, callback) => {
      const reg = /^[^\s]{6,20}$/
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        if (reg.test(value)) {
          if (this.form.confirmPassword !== '') {
            this.$refs.form.validateField('confirmPassword')
          }
          callback()
        } else {
          callback(new Error('请输入6-20位密码，由字母、数字、符号组成'))
        }
      }
    }
    const validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.form.password) {
        callback(new Error('两次密码不一致'))
      } else {
        callback()
      }
    }
    const validateEmail = (rule, value, callback) => {
      const emailReg = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/ // 只允许英文字母、数字、下划线、英文句号、以及中划线组成
      if (!value) {
        return callback(new Error('请填写邮箱地址'))
      } else {
        if (value.length < 5 || value.length > 50) {
          callback(new Error('单位邮箱为5~50个字符'))
        } else if (emailReg.test(value)) {
          if (!this.id) {
             const params = {
              id: this.$store.state.userid,
              value,
              type: 'EMAIL'
            }
            getAction('/front/jiliang/v1/sysUser/repeatCheck', params).then(res => {
              if (res.status === 0) {
                callback()
              } else {
                callback(new Error(res.message))
              }
            })
          } else {
            callback()
          }
        } else {
          callback(new Error('请填写正确的邮箱地址'))
        }
      }
    }
    const validatePhone = (rule, value, callback) => {
      const Reg = /(^1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}$)|(^((0\d{2,3})-)(\d{7,8})(-(\d{3,}))?$)/
      if (!value) {
        return callback(new Error('请填写手机号码'))
      } else {
        if (Reg.test(value)) {
          if (!this.id) {
            const params = {
              id: this.$store.state.userid,
              value,
              type: 'MOBILE_PHONE'
            }
            getAction('/front/jiliang/v1/sysUser/repeatCheck', params).then(res => {
              if (res.status === 0) {
                callback()
              } else {
                callback(new Error(res.message))
              }
            })
          } else {
            callback()
          }
        } else {
          callback(new Error('请填写正确的手机号码'))
        }
      }
    }
    const validateUserName = (rule, value, callback) => {
      const userNameReg = /^[a-zA-Z0-9]{6,20}$/
      if (!value) {
        return callback(new Error('请填写用户名'))
      } else {
        if (userNameReg.test(value)) {
          if (!this.id) {
            const params = {
              id: this.$store.state.userid,
              value,
              type: 'USER_NAME'
            }
            getAction('/front/jiliang/v1/sysUser/repeatCheck', params).then(res => {
              if (res.status === 0) {
                callback()
              } else {
                callback(res.message)
              }
            })
          } else {
            callback()
          }
        } else {
          callback(new Error('用户名6～20位字母或数字！'))
        }
      }
    }
    return {
      headStyle: {
        'text-align': 'left'
      },
      layout: 'vertical',
      currentUserId: '',
      manageOrgData: [],
      roleDatas: [],
      userStatusData: [],
      orgSelect: [],
      form: {
        userName: '',
        password: '',
        confirmPassword: '',
        realName: '',
        mobilePhone: '',
        email: '',
        status: null,
        manageOrganizationIds: undefined,
        roleIds: undefined
      },
      rules: {
        userName: [
          { required: true, validator: validateUserName }
        ],
        password: [
          { required: true, validator: validatePass1 }
        ],
        realName: [

          { required: true, message: '请填写姓名' },
          { min: 2, max: 10, message: '姓名长度为2-10位', trigger: 'blur' }
        ],
        confirmPassword: [
          { required: true, validator: validatePass2 }
        ],
        email: [
          { required: true, min: 5, max: 50, validator: validateEmail }
        ],
        mobilePhone: [
          { required: true, validator: validatePhone }
        ],
        manageOrganizationIds: [
          { required: true, message: '请填写管辖机构' }
        ],
        status: [
          { required: true, message: '请选择用户状态' }
        ],
        roleIds: [
          { required: true, message: '请填写角色' }
        ]
      }
    }
  },
  props: {
    id: {
      type: String,
      required: false,
      default: ''
    },
    type: {
      type: String,
      required: false,
      default: ''
    }
  },
  methods: {
    // 获取状态下拉
    getStatusSelect () {
      getDicData('user_status').then(res => {
        if (res.status === 0) {
          this.userStatusData = res.data
        } else {
          this.$message.warning(res.message)
        }
      })
    },
    // 获取角色code下拉
    // getRoleCodeSelect () {
    //   getRoleCodeSelect().then(res => {
    //     if (res.status === 0) {
    //       this.roleDatas = res.data
    //     } else {
    //       this.$message.warning(res.message)
    //     }
    //   })
    // },
    // 获取上级机构
    // getOrgSelect () {
    //   getAction('/front/sun/v1/sysOrganization').then(res => {
    //     if (res.status === 0) {
    //       this.orgSelect = [res.data]
    //     } else {
    //       this.$message.warning(res.message)
    //     }
    //   })
    // },
    insertUser (form) {
      form.tag = 'add'
      userAction(form).then(res => {
        if (res.status === 0) {
          this.$message.success('新增成功！')
          setTimeout(() => {
            const params = {
              pageViewName: 'UserManageList',
              type: 'list'
            }
            this.$emit('on-page-view-change', params)
          }, 500)
        } else {
          this.$message.error(res.message)
        }
      })
    },
    updateUser (form) {
      form.id = this.id
      form.tag = 'update'
      userAction(form).then(res => {
        if (res.status === 0) {
          this.$message.success('已修改')
          setTimeout(() => {
            const params = {
              pageViewName: 'UserManageList',
              type: 'list'
            }
            this.$emit('on-page-view-change', params)
          }, 500)
        } else {
          this.$message.error(res.message)
        }
      })
    },
    submitForm () {
      this.$refs.form.validate(valid => {
        if (valid) {
          if (this.form.password !== this.form.confirmPassword) {
            this.$message.error('两次输入的密码不一致')
            return
          }
        const form = JSON.parse(JSON.stringify(this.form))
          if (this.id) {
            this.updateUser(form)
          } else {
            this.insertUser(form)
          }
        }
      })
    },
    handleBackTo () {
      const self = this
      this.$confirm({
        title: '你即将离开菜单编辑页面',
        content: '离开页面会丢失当前编辑的内容，确定要离开吗？',
        onOk: function () {
          const params = {
            pageViewName: 'UserManageList',
            type: 'list'
          }
          self.$emit('on-page-view-change', params)
        }
      })
    },
    loadFormData () {
      this.form.tag = 'view'
      this.form.id = this.id
      userAction(this.form).then(res => {
        if (res && res.status === 0) {
          this.form = res.data
          this.form.status = String(res.data.status)
        } else {
          this.$message.error(res.message)
        }
      })
    },
    initMetaData () {
      return Promise.all([this.getRoleCodeSelect(), this.getOrgSelect()])
    },
    initData () {
      this.loadFormData()
    }
  },
  mounted() {
    // const auctionTimesCode = document.querySelectorAll('.dep .ant-select-search__field')
    // auctionTimesCode[0].setAttribute('readonly', 'true')
    // auctionTimesCode[1].setAttribute('readonly', 'true')
  },
  created () {
    this.getStatusSelect()
    this.currentUserId = this.id
      if (this.currentUserId) {
        this.initData()
      }
    // this.initMetaData().then(() => {
    //   this.currentUserId = this.id
    //   if (this.currentUserId) {
    //     this.initData()
    //   }
    // })
  }
}
</script>
<style lang="less" scoped>
/deep/.ant-select-selection--multiple {
  cursor: pointer;
}
</style>
