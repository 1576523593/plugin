<template>
  <div class="account-manage-wrapper sun-paper_page-view-container">
    <div class="sun-paper_page-header">
      <a-breadcrumb>
        <a-breadcrumb-item>系统设置</a-breadcrumb-item>
        <a-breadcrumb-item>账号信息</a-breadcrumb-item>
      </a-breadcrumb>
    </div>
    <div class="account-page-content-wrapper sun-paper_page-content-wrapper">
      <div class="account-page-content sun-paper_page-content">
        <div class="account-content-wrapper">
          <div class="avatar-wrapper">
            <div class="avatar">
              <img src="../../../assets/images/default-avatar.png">
            </div>
            <div class="name">{{ formModel.userName }}</div>
            <a-button
              type="link"
              v-action="'system:account:updatePassword'"
              @click="handleAlterPassword"
            >
              修改密码
            </a-button>
          </div>
          <div class="user-info-wrapper">
            <div class="account-form">
              <a-form-model
                ref="form"
                :rules="rules"
                :model="formModel"
                :layout="layout"
              >
                <a-form-model-item
                  label="姓名"
                  prop="userName"
                >
                  <a-input
                    disabled
                    v-model="formModel.realName"
                    placeholder="请输入姓名"
                  />
                </a-form-model-item>
                <a-form-model-item
                  label="手机号"
                  prop="mobile"
                >
                  <a-input
                    disabled
                    v-model="formModel.mobilePhone"
                    placeholder="请输入手机号"
                  />
                </a-form-model-item>
                <a-form-model-item
                  label="邮箱"
                  prop="email"
                >
                  <a-input
                    disabled
                    v-model="formModel.email"
                    placeholder="请输入邮箱"
                  />
                </a-form-model-item>
              </a-form-model>
              <a-form-model>
                <a-button
                  type="primary"
                  v-action="'system:account:update'"
                  @click="handleUpdateInfoModelShow"
                >
                  更新信息
                </a-button>
              </a-form-model>
            </div>
          </div>
        </div>
      </div>
    </div>
    <page-footer />
    <updateInfo
      v-if="visible"
      @update-user-info="handleUpdateUserInfo"
      @back="handleCancel"
    ></updateInfo>
    <resetPassword
      :visible.sync="passVisible"></resetPassword>
  </div>
</template>

<script>
import resetPassword from './components/resetPassword'
import PageFooter from '@/components/PageFooter/PageFooter.jsx'
import updateInfo from './components/updateInfo'
export default {
  name: 'Account',
  components: {
    PageFooter, updateInfo, resetPassword
  },
  data () {
    return {
      passVisible: false,
      visible: false,
      formModel: {
        realName: this.$store.state.userInfo.realName,
        userName: this.$store.state.userInfo.userName,
        mobilePhone: this.$store.state.userInfo.mobilePhone,
        email: this.$store.state.userInfo.email
      },
      layout: 'vertical',
      rules: {
        userName: [
          { required: true, message: '请输入姓名', pattern: /^[A-Za-z0-9\u4e00-\u9fa5.·]{2,10}$/ }
        ],
        mobile: [
          { required: true, message: '请输入正确的手机号', pattern: '/(^1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}$)|(^((0\\d{2,3})-)(\\d{7,8})(-(\\d{3,}))?$)/' }
        ],
        email: [
          { required: true, message: '请输入正确的邮箱', pattern: /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/ }
        ]
      }
    }
  },
  methods: {
    handleUpdateInfoModelShow () {
      this.visible = true
    },
    handleAlterPassword () {
      this.passVisible = true
    },
    handleUpdateUserInfo (userInfo) {
      this.formModel = userInfo
    },
    handleCancel() {
      this.visible = false
    }
  }
}
</script>

<style lang="less" scoped>
.account-manage-wrapper {
  .account-page-content {
    height: 100%;
    min-height: 0;
  }
  .account-page-content-wrapper {
    height: 640px;
  }
  .account-content-wrapper {
    display: flex;
    justify-content: space-between;
    height: 100%;
  }
  .avatar-wrapper {
    flex: 0 0 300px;
    height: 100%;
    border-right: 1px solid #ccc;
    text-align: center;
    .avatar {
      width: 120px;
      height: 120px;
      margin: 0 auto;
      margin-bottom: 24px;
    }
    .name {
      color: #999;
      font-size: 18px;
    }
  }
  .user-info-wrapper {
    flex: 1 0 auto;
    height: 100%;
  }
  .account-form {
    width: 460px;
    box-sizing: border-box;
    padding: 0 24px;
  }
}
</style>
