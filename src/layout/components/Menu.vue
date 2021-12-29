<template>
  <div class="menu">
    <el-row type="flex" justify="center">
      <el-col :lg="24" id="el-col-color">
        <el-menu
          :default-active="$route.path"
          class="el-menu-demo"
          mode="horizontal"
          background-color="#324369"
          text-color="#fff"
          :router="true"
          :collapse-transition="true"
          active-text-color="#1fb2fc">
          <el-menu-item index="/">首页</el-menu-item>
          <el-submenu index="2">
            <template slot="title">计量商城</template>
            <el-menu-item class="second" index="/cloudServiceIndex">
              <i class="el-icon-s-marketing"></i>
              检校商城
              <i class="develop">></i>
            </el-menu-item>
            <el-menu-item class="second" index="2-1" @click="openMall">
              <i class="el-icon-s-shop"></i>
              仪表商城
              <i class="develop">></i>
            </el-menu-item>
            <el-menu-item class="second" index="/identificationCenter">
              <i class="el-icon-s-check"></i>
              标识商城
              <i class="develop">></i>
            </el-menu-item>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">云服务</template>
            <el-menu-item class="second" index="/inspectionEnterpriseApp">
              <i class="iconfont iconqiye"></i>
              E 计量 · 企业APP
              <i class="develop">></i>
            </el-menu-item>
            <el-menu-item class="second" index="/inspectionCalibrationApp">
              <i class="iconfont iconyiqijiandingjilu"></i>
              E 计量 · 检定APP
              <i class="develop">></i>
            </el-menu-item>
            <el-menu-item class="second" index="/inspectionSupervisionApp">
              <i class="iconfont icondsyy_kzt_ic"></i>
              E 计量 · 监管APP
              <i class="develop">></i>
            </el-menu-item>
            <el-menu-item class="second" index="/instrumentCloudAccount">
              <i class="iconfont iconfkjy_kzt_ic2"></i>
              器具云台账
              <i class="develop">></i>
            </el-menu-item>
            <el-menu-item class="second" index="/laboratoryCloud">
              <i class="iconfont iconwlhx_jjfw_ic"></i>
              实验室云服务
              <i class="develop">></i>
            </el-menu-item>
            <el-menu-item class="second" index="/strongRecord">
              <i class="iconfont iconxwfb_kzt_ic2"></i>
              强检送检云服务
              <i class="develop">></i>
            </el-menu-item>
            <el-menu-item class="second" index="/integrityMeasurement">
              <i class="iconfont iconjlqjpt_kzt_ic"></i>
              计量数据监管平台
              <i class="develop">></i>
            </el-menu-item>
          </el-submenu>
          <el-menu-item index="/solution">解决方案</el-menu-item>
          <el-menu-item index="/informationCenter">信息公告</el-menu-item>
          <el-menu-item index="/serviceCenter">服务中心</el-menu-item>
          <el-menu-item index="/openInterfacePlatform">接口开放平台</el-menu-item>
          <el-menu-item index="/aboutUs">关于我们</el-menu-item>
        </el-menu>
<!--
        <el-menu :default-active="$route.path" class="el-menu-demo" mode="horizontal" :style="{ opacity: opacity }"
                 active-text-color="#1fb2fc" :router="true">
          <el-menu-item index="/">首页</el-menu-item>
          <el-menu-item index="2">
            <template slot="title">计量商城</template>
            <el-menu-item index="2-1">检校商城</el-menu-item>
          </el-menu-item>
          <el-menu-item index="/cloudServiceIndex">检定校准云服务</el-menu-item>
          <el-menu-item index="3" @click="openMall">仪表商城&lt;!&ndash;<a href="http://www.dianyihui.com/" target="_blank"></a>&ndash;&gt;</el-menu-item>
          <el-menu-item index="/identificationCenter">标识中心</el-menu-item>
          <el-menu-item index="/instrumentCloudAccount">器具云台账</el-menu-item>
          <el-menu-item index="/inspectionApp">E 计量</el-menu-item>
          &lt;!&ndash; <el-menu-item index="/demand-market">需求市场</el-menu-item>&ndash;&gt;
          &lt;!&ndash;          <el-menu-item index="/ac-system-management/ac-user-management">系统管理</el-menu-item>&ndash;&gt;
          <el-menu-item index="/strongRecord">强检备案云服务</el-menu-item>
          <el-menu-item index="/laboratoryCloud">实验室云服务</el-menu-item>
          &lt;!&ndash;<el-menu-item index="/appliancesMall">器具商城</el-menu-item>&ndash;&gt;
          &lt;!&ndash;<el-menu-item index="/estimate">计量数据云服务</el-menu-item>&ndash;&gt;
          <el-menu-item index="/integrityMeasurement">计量数据监管平台</el-menu-item>
          <el-menu-item index="/informationCenter">信息公告</el-menu-item>
          &lt;!&ndash; <el-menu-item index="/kamiUnion">KAMI联盟</el-menu-item>&ndash;&gt;
          &lt;!&ndash;<el-menu-item index="/cooperationAgency">合作机构</el-menu-item>&ndash;&gt;
          <el-menu-item index="/serviceCenter">服务中心</el-menu-item>
          <el-menu-item index="/openInterfacePlatform">接口开放平台</el-menu-item>
          <el-menu-item index="/aboutUs">关于我们</el-menu-item>
        </el-menu>
-->
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { checkClient } from '@/api/login'
export default {
  name: 'Menu',
  data () {
    return {
      opacity: 1,
      second: 5,
      time: ''
    }
  },
  computed: {
    roleCode () {
      return this.$store.getters.roleCode
    }
  },
  methods: {
    // 检查客户端
    checkToClient () {
      return new Promise(resolve => {
        checkClient({ clientName: '中工电仪汇' }).then(res => {
          if (res.code === this.constants.SUCCESS_CODE) {
            if (res.data.records.length > 0) {
              resolve(true)
            }
          }
        })
      })
    },
    // 检查子账号
    prGetSysUser () {
      return new Promise(resolve => {
        this.api.prGetSysUser().then(res => {
          if (res.code === this.constants.SUCCESS_CODE) {
            if (res.data.isSubuser === 1) {
              resolve(true)
            } else {
              resolve(false)
            }
          } else {
            resolve(false)
          }
        })
      })
    },
    async openMall () {
      let url = ''
      switch (process.env.NODE_ENV) {
        case 'development':
          url = this.config.dyhUrl.dev
          break
        case 'staging':
          url = ''
          break
        case 'production':
          url = this.config.dyhUrl.pro
          break
      }
      await this.api.toMeterMall().then(res => {
        if (res.code === this.constants.SUCCESS_CODE) {
          let { token } = res.data
          if (url) {
            this.prGetSysUser().then(res => {
              if (res) {
                this.checkToClient().then(client => {
                  if (client) {
                    window.open(url + token)
                  } else {
                    this.$message.error('该平台不支持子账号，请使用主账号登录')
                  }
                })
              } else {
                window.open(url + token)
              }
            })
          } else {
            this.$message.error('暂无测试环境')
          }
        } else {
          /**
           * 此处因接口是通过认证中心远程调用电仪汇项目，为确保保电仪汇接口异常的情况下仍然正常跳转，故而此段代码不可调整。
           * */
          if (url) {
            window.open('http://dyh.jiliangqiju.cn/')
          } else {
            this.$message.error('暂无测试环境')
          }
        }
      }).catch(() => {
        if (url) {
          window.open('http://dyh.jiliangqiju.cn/')
        } else {
          this.$message.error('暂无测试环境')
        }
      })
      this.$router.push({ name: 'home' })
    },
    biddingInformation () {
      const hasLogin = this.$store.getters.token
      if (!hasLogin) {
        let str = this.$message({
          showClose: false,
          message: '系统检测到您未登录，请您先登录再进行操作，5s后系统将自动为您跳转登录',
          type: 'error',
          duration: 5000
        })
        this.time = setInterval(() => {
          this.second--
          if (this.second === 0) {
            clearInterval(this.time)
            this.$router.push('/login')
          } else {
            str.message = '系统检测到您未登录，请您先登录再进行操作，' + this.second + 's后系统将自动为您跳转登录'
          }
        }, 1000)
      } else {
        if (this.roleCode === '6') {
          this.$router.push('/informationCenter')
        } else {
          this.getIdentificationInfo()
        }
      }
    },
    getIdentificationInfo () {
      this.api.getIdentification().then(res => {
        const info = res.data
        if (res.code === 200) {
          if (info.id !== '1') {
            if (info.checkStatus === 2) {
              this.$router.push('/informationCenter')
            } else {
              this.$message.error('请实名认证资料审核通过后再查看招投标信息')
              return false
            }
          } else {
            this.$message.error('请先进行实名认证')
            return false
          }
        }
      })
    },
    scroll () {
      // let scrollTop = document.documentElement.scrollTop || document.body.scrollTop
      // if (scrollTop > 450) {
      //   this.opacity = 1
      // } else {
      //   this.opacity = 0.7
      // }
    }
  },
  mounted () {
    // if (this.$route.name !== 'home') {
    //   this.opacity = 1
    // } else {
    //   window.addEventListener('scroll', this.scroll)
    // }
  }
}
</script>

<style scoped lang="less">
  .el-menu{
   // opacity: 0.7;
    width: 100%;
    z-index: 10;
    position:fixed;
    top: 40px;
    padding-left: 10px;
    background-color: #324369;
    transition: opacity 2s;
    border-bottom: 1px solid rgba(225, 225, 225, 0.3) !important;
    /deep/ .el-menu-item {
      height: 60px;
      margin-right: 3px;
    }
    /deep/ .el-menu-item:not(.is-disabled):hover{
      color: rgb(31, 178, 252) !important;
      border-bottom: 2px solid #409EFF !important;
    }
    .el-menu-item{
      //background-color: #324369 !important;
      padding-left: 16px;
      padding-right: 16px;
      color: white;
      &:hover{
        color: #1fb2fc !important;
      }
    }
    /deep/ .el-submenu{
      /deep/ .el-submenu__title{
        i{
          color: #fff;
        }
        &:hover{
          color: #1fb2fc !important;
          border-bottom: 2px solid #409EFF !important;
          i{
            color: #1fb2fc !important;
          }
        }
      }
    }
    /deep/ .is-active{
      i{
        color: #1fb2fc !important;
      }
      /deep/  .el-submenu__title{
        i{
          color: #1fb2fc !important;
        }
      }
    }
    .second{
      i{
        color: #fff;
      }
      .develop{
        display: none;
        color: #1fb2fc;
        float: right;
      }
      &:hover{
        .develop{
          display: block;
        }
        padding-left: 27px;
        transition: .5s cubic-bezier(.25,.01,.25,1);
        i{
          color: #1fb2fc;
        }
      }
    }
  }
  @media screen and (max-width: 1200px) {
    .el-menu {
      width: 1200px;
    }
  }
</style>
<style>
  .el-menu--popup-bottom-start{
    margin-top: 1px !important;
  }
  .iconfont{
    margin-right: 8px;
  }
  .is-active i{
    color: #1fb2fc !important;
  }
</style>
