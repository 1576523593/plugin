<template>
  <el-row
    type="flex"
    align="middle"
    class="heading-wrapper"
    ref="headingWrapper"
  >
    <el-col
      class="left-container"
      :span="18"
    ><a href="" style="margin-left: 30px" v-if="this.domian" title="航天云网">
      <img
        src="@/assets/image/casicloud.png"
        alt="logo"
        class="casicloud"
      >
    </a>
      <router-link
        to="/"
        class="logo"
      >
        <img
          src="@/assets/image/logo_new.png"
          alt="logo"
          style="width: 532px;height: 26px"
        >
        <span class="node-name" v-if="this.domian">（ 贵州节点 ）</span>
       <!-- <el-button type="primary" v-if="isControl" plain>平台首页</el-button>-->
      </router-link>
    </el-col>
    <el-col
      class="right-container"
      :span="6"
    >
      <div
        class="user"
        v-if="isLogin"
      >
        <el-breadcrumb separator="丨" class="breadcrumb">
          <el-breadcrumb-item  :to="{ path: '/' }" v-if="isControl">
            <span  style="color: #fff;font-weight:500 "> <span><img src="@/assets/image/reback.png"></span> 返回平台首页</span>
          </el-breadcrumb-item>
          <el-breadcrumb-item>
            <el-dropdown trigger="click" @click.native="isshowAcco">
              <el-tooltip v-if="userCodes.length>6" class="item" effect="dark" :content=userCodes placement="top">
            <span class="el-dropdown-link">
            您已登录，{{ userCode }}
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
              </el-tooltip>
              <span v-else class="el-dropdown-link">
            您已登录，{{ userCode }}
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
              <el-dropdown-menu slot="dropdown">
                <!--<el-dropdown-item @click.native="account" v-if="adminStatus">账户信息</el-dropdown-item>-->
                <el-dropdown-item @click.native="changePass">修改密码</el-dropdown-item>
                <el-dropdown-item @click.native="logoutJlxxw">退出</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </el-breadcrumb-item>
        </el-breadcrumb>
<!--        <span>-->
<!--          <i class="el-icon-back"></i>-->
<!--          <span>返回平台首页</span>-->
<!--        </span>-->
      </div>
      <span
        v-if="!isLogin"
        class="register"
        tag="div"
        @click="register"
      >注册
      </span>
      <span
        class="login"
        v-if="!isLogin"
        @click="toLogin"
      >登录
      </span>
      <div>
        <div class="control" @click="handleControl()" v-if="!isControl">控制台</div>
<!--        <div class="control" @click="handleHome" v-if="isControl">首页</div>-->
        <el-dialog
          title="选择角色"
          :visible.sync="dialogFormVisible"
          width="50%"
        >
          <el-form
            :model="form"
            :rules="rules"
            ref="form"
          >
            <el-form-item
              label="请选择您的角色"
              prop="region"
            >
              <el-select
                v-model="form.region"
                placeholder="请选择"
              >
                <el-option
                  label="检定机构"
                  :value="1"
                >检定机构
                </el-option>
                <el-option
                  label="使用单位"
                  :value="2"
                >使用单位
                </el-option>
                <el-option
                  label="制造销售企业"
                  :value="3"
                >制造销售企业
                </el-option>
                <el-option
                  label="监管单位"
                  :value="4"
                >监管单位
                </el-option>
                <el-option
                  label="民生计量序列"
                  :value="5"
                >民生计量序列
                </el-option>
              </el-select>
            </el-form-item>
          </el-form>
          <div
            slot="footer"
            class="dialog-footer"
          >
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button
              type="primary"
              @click="submitForm('form')"
            >确 定
            </el-button>
          </div>
        </el-dialog>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import Cookies from 'js-cookie'
import storage from '@/utils/sessionStorage'
import { logout } from '@/api/login'
import store from '@/store'
export default {
  name: 'Heading',
  data: function () {
    return {
      headingWrapper: {
        opacity: 1
      },
      dialogFormVisible: false,
      adminStatus: true,
      form: {
        region: ''
      },
      rules: {
        region: [
          { required: true, message: '请选择您的相应角色', trigger: 'change' }
        ]
      }
    }
  },
  mounted () {
    if (this.$route.name !== 'home') {
      this.headingWrapper.opacity = 1
    } else {
      window.addEventListener('scroll', this.scroll)
      this.headingWrapper.opacity = this.isControl ? 1 : 0.7
    }
  },
  methods: {
    register () {
      let host = window.location.host
      if (this.constants.DOMAIN === host) {
        location.href = this.constants.CASICLOUD_REGISTER_ADDRESS
      } else {
        this.$router.push({ name: 'register' })
      }
    },
    toLogin () {
      let host = window.location.host
      if (this.constants.DOMAIN === host) {
        this.api.toCASICloud().then(res => {
          location.href = res.data
        })
      } else {
        this.$router.push({
          name: 'login',
          query: {
            redirect: this.config.homeName
          }
        })
      }
    },
    isshowAcco () {
      if (this.$store.getters.userInfo.role !== 1 || this.$store.getters.userInfo.role !== 2) {
        this.adminStatus = false
      }
    },
    account () {
      // this.$http(this.api.getUserInfo()).then(res => {
      //   const { code, data } = res.data
      //   if (code === 200) {
      //     if (data.role === 1) {
      //       this.$router.push({
      //         name: 'cc-real-name'
      //       })
      //     } else if (data.role === 2) {
      //       this.$router.push({
      //         name: 'ec-real-name'
      //       })
      //     }
      //   }
      // })
    },
    submitForm (form) {
      this.$refs[form].validate((valid) => {
        if (valid) {
          let params = {
            role: this.form.region
          }
          // this.$http(this.api.updateRole(params)).then(res => {
          //   if (res.data.code === 200) {
          //     this.isShow = false
          //     if (this.form.region === '1') {
          //       this.$router.push('/verificationInstitutionConsole')
          //     } else if (this.form.region === '2') {
          //       this.$router.push('/useUnitConsole')
          //     } else {
          //       this.$message({
          //         message: '控制台正在努力建设中，敬请期待！',
          //         type: 'warning'
          //       })
          //     }
          //   } else if (res.data.code === 500) {
          //     this.$message({
          //       message: '无法进入控制台，请重新登录',
          //       type: 'warning'
          //     })
          //     return false
          //   }
          // })
        } else {
          this.$message({
            message: '数据加载失败，请稍后再试。',
            type: 'warning'
          })
          return false
        }
      })
    },
    handleControl () {
      if (this.isLogin) {
        this.api.getIdentification().then(res => {
          const { code, msg } = res
          const info = res.data
          const status = res.data.checkStatus
          if (code === 200) {
            if (info.id !== '1') {
              if (status === 2) {
                const routeList = store.getters.controlRoutes
                let name = ''
                if (routeList[0].children[0].children.length !== 0) {
                  name = '/control/' + routeList[0].children[0].path + '/' + routeList[0].children[0].children[0].path ? routeList[0].children[0].children[0].path : ''
                } else {
                  name = '/control/' + routeList[0].children[0].path
                }
                this.$router.push({
                  path: name,
                  replace: true
                })
              } else {
                this.$router.push({
                  name: 'ec-real-name'
                })
              }
              // if (this.roleCode === '1') {
              //   if (status === 2) {
              //     this.$router.push({
              //       path: '/control/co-calibration-service/co-entrust-management'
              //     })
              //   } else {
              //     this.$router.push({
              //       name: 'ec-real-name'
              //     })
              //   }
              // } else if (['3', '8', '4'].includes(this.roleCode)) {
              //   this.$router.push({
              //     path: '/control/ec-calibration-service/ec-order-management'
              //   })
              // } else if (this.roleCode === '9') {
              //   this.$router.push({
              //     path: '/control/zq-office-automation/zq-file-management'
              //   })
              // } else {
              //   this.$router.push({
              //     path: '/control/home'
              //   })
              // }
            } else {
              this.$router.push({
                name: 'ec-info-tips'
              })
            }
          }
        })
      } else {
        this.$message.error({
          message: '系统检测到您未登录，即将跳转登录页面...',
          duration: 500,
          onClose: () => {
            let host = window.location.host
            if (this.constants.DOMAIN === host) {
              if (this.$storage.getItem('casiToken')) {
                this.$router.push({ name: 'casicloudCompleteInfo' })
              } else {
                this.api.toCASICloud().then(res => {
                  location.href = res.data
                })
              }
            } else {
              this.$router.push({
                name: 'login',
                query: {
                  redirect: this.config.homeName
                }
              })
            }
          }
        })
      }
    },
    handleHome () {
      this.$router.push({
        name: 'home'
      })
    },
    // 修改密码
    changePass () {
      this.$router.push({ name: 'ec-password' })
    },
    async logout () {
      let logoutJlxxw = true
      // 退出单点登录
      // await this.$http(this.api.sso()).then(async res => {
      //   const { code, userCode } = res.data
      //   if (this.constants.SUCCESS_CODE === code) {
      //     await this.$http(this.api.platfromIsLogin({
      //       params: { userCode: userCode }
      //     })).then(async res => {
      //       const { result } = res.data
      //       if (result) {
      //         await this.$confirm('系统检测到您已登录计量器具公共服务平台，退出计量信息网也会同步退出计量器具公共服务平台，继续吗？', '提示', {
      //           confirmButtonText: '确定',
      //           cancelButtonText: '取消',
      //           type: 'warning'
      //         }).then(async () => {
      //           switch (process.env.NODE_ENV) {
      //             case 'development':
      //             case 'staging':
      //               Cookies.remove(this.constants.SSO_USER_CODE, { path: '/' })
      //               break
      //             case 'production':
      //               Cookies.remove(this.constants.SSO_USER_CODE, { path: '/', domain: '.jiliangqiju.cn' })
      //               break
      //           }
      //           await this.$http(this.api.platfromLogout({
      //             params: { userCode: userCode }
      //           }))
      //         }).catch(async () => {
      //           logoutJlxxw = false
      //         })
      //       }
      //     })
      //   }
      // }).catch(() => {
      //   logoutJlxxw = false
      // })

      if (logoutJlxxw) {
        this.logoutJlxxw()
      }
    },
    logoutJlxxw () {
      // 退出信息网
      const params = {
        userCode: JSON.parse(sessionStorage.getItem('userId')),
        authType: 'logout'
      }
      logout(params).then(res => {
        if (res.code === this.constants.SUCCESS_CODE) {
          this.$store.dispatch('user/logout')
        }
      })
    },
    scroll () {
      let scrollTop = document.documentElement.scrollTop || document.body.scrollTop
      if (scrollTop > 450 && !this.isControl) {
        this.headingWrapper.opacity = 1
      } else if (scrollTop <= 450 && !this.isControl) {
        this.headingWrapper.opacity = 0.7
      }
    }
  },
  computed: {
    domian () {
      let host = window.location.host
      return host === this.constants.DOMAIN
    },
    isLogin () {
      const userId = this.$store.getters.userId
      return userId !== null
    },
    userCode () {
      let code = this.$store.getters.userId
      if (code.length > 6) {
        const userCode = this.$store.getters.userId.slice(0, 6) + '...'
        return userCode
      } else {
        const userCode = this.$store.getters.userId
        return userCode
      }
    },
    userCodes () {
      const userCodes = this.$store.getters.userId
      return userCodes
    },
    isControl () {
      return this.$store.getters.isControl
    },
    roleCode () {
      return this.$store.getters.roleCode
    }
  }
}
</script>

<style scoped lang="less">
  .heading-wrapper {
    width: 100%;
    height: 40px;
    z-index: 10;
    position: fixed;
    transition: opacity 2s;
    color: #ffffff;
    font-size: 14px;
    background-color: #324369;
    border-bottom: 1px solid rgba(225, 225, 225, 0.3);

    .left-container {
      .casicloud{
        height: 26px;
        width: 136px;
      }
      .logo {
        display: inline-block;
        text-decoration: none;
        margin-left: 30px;
      }

      img {
        margin-top: 6px;
        height: 30px;
      }
    }

    .right-container {
      font-size: 15px;
      line-height: 40px;
      .control,
      .login,
      .register,
      .user {
        float: right;
        padding: 3px 15px 0;
        cursor: pointer;

        a {
          color: #ffffff;
          display: inline-block;
          text-decoration: none;
        }

      }

      .control:hover,
      .login:hover,
      .register:hover {
        background-color: #1fb2fc;
      }

      .el-dropdown-link {
        font-size: 14px;
        color: #ffffff;
        text-align: center;

        &:hover {
          cursor: pointer;
        }
      }
    }

    .el-dropdown-menu {
      width: 100% !important;
    }
  }

  @media screen and (max-width: 1200px) {
    .heading-wrapper {
      width: 1200px;
    }
  }
</style>
<style>
  .breadcrumb{
    line-height: 40px;
  }
  .control{
    line-height: 40px;
  }
  .el-breadcrumb__separator{
    margin: 0 5px !important;
  }
  .node-name{
    font-size: 16px;
    display: block;
    float: right;
    height: 41px;
    line-height: 41px;
    font-weight: 900;
  }
</style>
