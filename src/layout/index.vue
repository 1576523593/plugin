<template>
  <div class="app-wrapper"
       element-loading-text="系统检测到您浏览器内核过低，请升级，或尝试使用浏览器的极速模式访问网站。"
       element-loading-spinner="el-icon-loading"
       element-loading-background="rgba(0, 0, 0, 0.8)"
       v-loading.fullscreen.lock="fullscreenLoading">
    <Heading />
    <Menu v-if="!isControl" />
    <div v-else>
      <Sidebar class="sidebar-container" />
    </div>
    <app-main>
      <tags-view v-if="isControl"/>
    </app-main>
    <!--联系客服-->
    <div class="pageTags_customer" @click="imChat()" v-if="tagShow">
      <!--底层-->
      <div class="pageTags_customerBase">
        <el-badge :value=unMessages class="item imgFlash" v-if="noRead">
          <img src="@/assets/image/im-icon.png" alt="IM聊天">
        </el-badge>
        <img src="@/assets/image/im-icon.png" v-else alt="IM聊天">
        <!--蒙板-->
        <!--<div class="pageTags_customerMask animated fadeInRight">im聊天</div>-->
      </div>
    </div>
    <im-chat v-if="imFormConfig.visible"
            :visible.sync="imFormConfig.visible"></im-chat>
    <customer-service></customer-service>
    <back-to-top v-if="!isControl" :custom-style="myBackToTopStyle" :visibility-height="300" :back-position="0" transition-name="fade"/>
    <Footer v-if="!isControl" />
  </div>
</template>

<script>
import { Heading, Menu, Sidebar, AppMain, Footer, TagsView } from './components'
import imChat from './im-chat/index'
import backToTop from './backToTop'
import customerService from './customerService'
import Easemob from '@/utils/Easemob'
import { mapGetters } from 'vuex'
import storage from '@/utils/sessionStorage'
export default {
  name: 'index',
  components: {
    Heading,
    Menu,
    Sidebar,
    AppMain,
    Footer,
    TagsView,
    imChat,
    backToTop,
    customerService
  },
  data () {
    return {
      imFormConfig: {
        visible: false
      },
      positionX: 0,
      positionY: 0,
      fullscreenLoading: false,
      im: new Easemob(),
      tagShow: false,
      noRead: false,
      unMessages: 0,
      myBackToTopStyle: {
        position: 'fixed',
        right: '10px',
        bottom: '50px',
        width: '60px',
        height: '60px',
        borderRadius: '4px',
        border: '1px solid #efefef',
        color: '#333333',
        zIndex: 999,
        lineHeight: '60px', // 请保持与高度一致以垂直居中
        background: '#ffffff'// 按钮的背景颜色
      }
    }
  },
  computed: {
    isControl () {
      return this.$store.getters.isControl
    },
    roleCode () {
      return this.$store.getters.roleCode
    },
    // 全部未读消息
    unMessage () {
      return this.GET_IM_CHART_DIALOG_ALL_UN_READ_LENGTH || ''
    },
    ...mapGetters({
      GET_IM_CHART_DIALOG_ALL_UN_READ_LENGTH: 'GET_IM_CHART_DIALOG_ALL_UN_READ_LENGTH',
      GET_IM_CHART_DIALOG_UN_READ_LENGTH: 'GET_IM_CHART_DIALOG_UN_READ_LENGTH'
    })
  },
  watch: {
    unMessage (val, oldVal) {
      if (val > 0) {
        storage.setItem('noReadNum', val)
        this.unMessages = this.unMessage
        if (this.imFormConfig.visible === false) {
          this.noRead = true
        } else {
          this.noRead = false
        }
      } else {
        this.noRead = false
      }
    },
    'noRead' (val) {
      let oDiv = document.getElementsByClassName('pageTags_customerBase')[0]
      if (val) {
        oDiv.style.textAlign = 'center'
      } else {
        oDiv.style.textAlign = 'right'
      }
    }
  },
  created () {
    this.IEVersion()
  },
  methods: {
    imChat () {
      this.imFormConfig.visible = true
    },
    imLogin () {
      if (storage.getItem('imNames') !== null) {
        this.im.login(storage.getItem('imNames'), '123456')
      } else if (storage.getItem('imName') !== null) {
        let params = {
          userName: this.$store.getters.userId
        }
        this.api.imSysUsers(params).then(flag => {
          this.im.login(flag.data.userName, flag.data.passWord)
        })
      }
    },
    IEVersion () {
      // 取得浏览器的userAgent字符串
      var userAgent = navigator.userAgent
      // 判断是否为小于IE11的浏览器
      var isLessIE11 = userAgent.indexOf('compatible') > -1 && userAgent.indexOf('MSIE') > -1
      // 判断是否为IE的Edge浏览器
      var isEdge = userAgent.indexOf('Edge') > -1 && !isLessIE11
      // 判断是否为IE11浏览器
      var isIE11 = userAgent.indexOf('Trident') > -1 && userAgent.indexOf('rv:11.0') > -1
      if (isLessIE11) {
        var IEReg = new RegExp('MSIE (\\d+\\.\\d+);')
        // 正则表达式匹配浏览器的userAgent字符串中MSIE后的数字部分，，这一步不可省略！！！
        IEReg.test(userAgent)
        // 取正则表达式中第一个小括号里匹配到的值
        var IEVersionNum = parseFloat(RegExp['$1'])
        if (IEVersionNum <= 10) {
          if (document.compatMode === 'CSS1Compat') {
            this.fullscreenLoading = true
          }
        }
      } else if (isEdge) {
        // edge
        return 'edge'
      } else if (isIE11) {
        // IE11
        // if (document.compatMode === 'CSS1Compat') {
        //   this.fullscreenLoading = true
        // }
      } else {
        // 不是ie浏览器
        return -1
      }
    },
    // 获取运营人员环信账号
    async getAdminInfo () {
      this.api.imAdminInfo().then(res => {
        storage.setItem('imAdminInfo', res.data.userName)
      })
    },
    handleNo () {
      if (this.unMessage > 0) {
        storage.setItem('noReadNum', this.unMessage)
        this.unMessages = this.unMessage
        if (this.imFormConfig.visible === false) {
          this.noRead = true
        } else {
          this.noRead = false
        }
      }
    }
  },
  mounted () {
    this.getAdminInfo()
    this.handleNo()
    if (storage.getItem('imLoginOut') === '1') {
      this.imLogin()
      storage.setItem('imLoginOut', '2')
    }
    if (storage.getItem('point') === true) {
      if (storage.getItem('userId') !== null && storage.getItem('imName') === null && storage.getItem('imNames') === null) {
        let params = {
          userName: storage.getItem('userId')
        }
        this.api.imSysUsers(params).then(flag => {
          if (flag.data === null) {
            let param = {
              userName: storage.getItem('userId')
            }
            this.api.imLogining(param).then(res => {
              this.api.imSysUsers(params).then(flag => {
                storage.setItem('imName', flag.data.userName)
                this.im.login(flag.data.userName, flag.data.passWord)
              })
            })
          } else {
            this.im.login(flag.data.userName, flag.data.passWord)
          }
        })
        storage.setItem('point', false)
      }
    }
    window.addEventListener('beforeunload', () => {
      this.im.logout()
      storage.setItem('noReadNum', 0)
      storage.setItem('imLoginOut', '1')
    })
    let num = storage.getItem('noReadNum')
    if (num !== null && num > 0) {
      this.noRead = true
      this.unMessages = num
    }
    if (this.isControl === false) {
      if (storage.getItem('imName') !== null || storage.getItem('imNames') !== null) {
        this.tagShow = true
      } else {
        this.tagShow = false
      }
    } else {
      if (this.roleCode === '1' || this.roleCode === '2' || this.roleCode === '6') {
        this.tagShow = true
      } else {
        this.tagShow = false
      }
    }
    window.addEventListener('setItem', () => {
      if (storage.getItem('imNames') !== '' && storage.getItem('imNames') !== undefined) {
        this.tagShow = true
      }
    })
  }
}
</script>

<style scoped lang="less">
.app-wrapper {
  overflow: hidden;
}
.pageTags_customer {
  position: fixed;
  top: 475px;
  right: 0;
  z-index: 9999;
  width: auto;
  height: 40px;
  margin-top: 1px;

  .pageTags_customerBase {
    width: 40px;
    height: 30px;
    line-height: 30px;
    text-align: right;
  //  position: relative;
   // background-color: #7f7f7f;
    float: right;

    img{
      width: 30px;
      transition: all 0.6s;
      &:hover{
       // transform: scale(1.4);
      }
    }

    .imgFlash{
      animation:flash 0.8s cubic-bezier(.25,.01,.25,1) infinite;
    }
    @keyframes flash {
      0% {opacity:0;}
      100%{opacity:1;}
    }

    .pageTags_customerMask {
      width: 60px;
      height: 30px;
      line-height: 30px;
      text-align: center;
      font-size: 12px;
      color: #fff;
      background-color: #0aa0f5;
      //float: left;
      display: none;
      position: absolute;
      top:0;
      right: 20px;
    }

    &:hover {
      cursor: pointer;
    }
  }

  &:hover .pageTags_customerMask {
    cursor: pointer;
    display: block;
  }

  &:hover .pageTags_customerBase {
    //display: block;
  }
}
</style>
