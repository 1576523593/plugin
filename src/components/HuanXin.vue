<template>
  <div>
    <el-dialog :visible.sync="dialogFormVisible" custom-class="dialog_style">
      <div class="im_container">
        <div>
      <div style="padding: 0">
        <div style="height: 460px;border:1px solid #ccc">
          <el-row style="height: 100%;">
            <el-col :span="7" style="height: 100%;">
              <div style="height: 100%; text-align: left;background-color: #3c475a;">
                <div class="chatting-roster-group-list">
                  <!--<span @click="noReads" class="noRead" id="noRead">查看未读消息</span>-->
                  <ul style="height: 444px;overflow-y:auto">
                    <li class="listHover" v-for="(roster, index) in rosterList" :key="index" @click="toChats(roster);toRead($event)">
                      <span class="no_reading" v-if="roster.activeName===true">•</span>
                      <span class="list_user"> {{roster.name}}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </el-col>
            <!-- 聊天信息 -->
            <el-col :span="17">
              <el-row>
                <el-col :span="24">
                  <div style="width: 100%;height: 40px;line-height: 40px; padding-left: 8px;">
                    <span style="font-size:12px;color: #35a6f1">
                      <span style="color: black"> {{imTo.toName}} </span>沟通中...</span>
<!--                    <span @click="viewNews" class="more_news">查看更多消息记录</span>-->
                  </div>
                  <el-scrollbar v-on:scroll.native="scrollHandler"  ref="chattingContent" class="chatting-content">
                    <div v-for="(item, index) in charts" :key="index">
                      <div v-if="item.from" class="chatting-item clearfix" :class="item.className">
                        <div class="msg-date">
                          {{ item.timeStr }}
                        </div>
                        <div class="msg-from">
                          <span class="msg-author">{{ item.from}}</span>
                        </div>
                        <div class="msg-content">
                          <span v-if="item.sourceMsg" v-html="item.sourceMsg"></span>
                        </div>
                      </div>
                    </div>
                  </el-scrollbar>
                </el-col>
              </el-row>
              <!-- 输入区域 -->
              <el-row>
                <el-col :span="24">
                  <div class="chatting-input">
                    <el-input type="textarea" style="border:0" @keyup.enter.native="sendMessage" ref="textarea" v-model.trim="txt" placeholder="请输入文字..."></el-input>
                  </div>
                </el-col>
              </el-row>
              <el-row>
                <!--  <el-col :span="19" style="height: 1px"> </el-col>-->
                <el-col :span="24">
                  <div>
                    <el-button type="success" @click="sendMessage" class="im_button" :disabled="!imTo.toName">发送</el-button>
                  </div>
                </el-col>
              </el-row>
            </el-col>
          </el-row>
        </div>
      </div>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import Easemob from '@/utils/Easemob'
import { mapGetters } from 'vuex'
export default {
  name: 'huanxin',
  props: {
    organizationId: {
      require: true,
      type: String
    },
    visible: {
      require: true,
      type: Boolean
    }
  },
  data () {
    return {
      im: new Easemob(),
      txt: '',
      organizationIm: '',
      wrap: null,
      dialogFormVisible: true,
      isHistory: false,
      imTo: {
        chatType: '',
        toName: '',
        toId: ''
      },
      fileTrigger: true,
      accessToken: '',
      imName: '',
      imPassword: '',
      userName: '',
      newsNum: [],
      looks: true,
      lists: this.$store.state.rosterList
    }
  },
  created () {
    this.getOrganization()
    this.getImToken()
    this.initIm()
    if (sessionStorage.getItem('imName') !== null) {
      // console.log('you')
    }
    // if (sessionStorage.getItem('imNames') === null && sessionStorage.getItem('imName') === null) {
    //   console.log(1)
    //   if (this.$store.getters.userId == null) {
    //     let param = {
    //       userName: ''
    //     }
    //     this.api.imLogining(param).then(flag => {
    //       this.im.login(flag.data.entities[0].username, '123456')
    //       this.userName = flag.data.entities[0].username
    //       sessionStorage.setItem('imNames', this.userName)
    //       let string = {
    //         ownerUserName: flag.data.entities[0].username,
    //         friendUserName: this.organizationIm,
    //         token: this.accessToken
    //       }
    //       this.api.imFriends(string).then(flag => {
    //         // console.log(flag, '游客')
    //       })
    //     })
    //   } else {
    //     this.initIm()
    //   }
    // } else if (sessionStorage.getItem('imNames') !== null) {
    //   console.log(2)
    //   this.im.login(sessionStorage.getItem('imNames'), '123456')
    //   this.api.imTokens().then(res => {
    //     let string = {
    //       ownerUserName: sessionStorage.getItem('imNames'),
    //       friendUserName: this.organizationIm,
    //       token: res.data.access_token
    //     }
    //     this.api.imFriends(string).then(flag => {
    //       // console.log(flag, '登录好友')
    //     })
    //   })
    // } else if (sessionStorage.getItem('imName') !== null) {
    //   console.log(3)
    // }
    this.handleNoRead()
  },
  computed: {
    // 用户
    rosterList () {
      return this.GET_IM_CHART_ROSTERLIST || []
    },
    groupList () {
      return this.GET_IM_CHART_GROUPLIST || []
    },
    // 聊天数据
    charts () {
      return this.GET_IM_CHART_DIALOG_GROUP_MESSAGE(this.imTo.toId) || []
    },
    // 全部未读消息
    unMessage () {
      return this.GET_IM_CHART_DIALOG_ALL_UN_READ_LENGTH || ''
    },
    userPassword () {
      return this.$store.getters.userPassword
    },
    ...mapGetters({
      GET_IM_CHART_ROSTERLIST: 'GET_IM_CHART_ROSTERLIST',
      GET_IM_CHART_GROUPLIST: 'GET_IM_CHART_GROUPLIST',
      GET_IM_CHART_DIALOG_GROUP_MESSAGE: 'GET_IM_CHART_DIALOG_GROUP_MESSAGE',
      GET_IM_CHART_DIALOG_UN_READ_LENGTH: 'GET_IM_CHART_DIALOG_UN_READ_LENGTH',
      GET_IM_CHART_DIALOG_ALL_UN_READ_LENGTH: 'GET_IM_CHART_DIALOG_ALL_UN_READ_LENGTH'
    })
  },
  watch: {
    unMessage (val, oldVal) {
      if (val > 0) {
        if (this.dialogFormVisible === true) {
          this.handleNoRead()
        }
      }
    },
    charts (val, oldVal) {
      this.scrollToBottom()
      val.forEach(item => {
        item.isRead = true
      })
    },
    visible (newVal) {
      this.dialogFormVisible = newVal
    },
    'dialogFormVisible' (newVal) {
      this.$emit('update:visible', newVal)
    }
  },
  methods: {

    initIm () {
      // im 登陆
      let params = {
        userName: this.$store.getters.userId
      }
      this.api.imSysUsers(params).then(flag => {
        this.imName = flag.data.userName
        this.imPassword = flag.data.passWord
        this.im.login(this.imName, this.imPassword)
        this.userName = this.imName
        sessionStorage.setItem('imName', this.imName)
        this.api.imTokens().then(res => {
          let string = {
            ownerUserName: this.imName,
            friendUserName: this.organizationIm,
            token: res.data.access_token
          }
          this.api.imFriends(string).then(flag => {
            // console.log(flag, '登录好友')
          })
        })
      })
    },
    // 发送消息
    sendMessage () {
      if (this.imTo.chatType === 'single') {
        // 会话
        this.im.sendTextMessage(this.txt, this.imTo.toId, () => {
          this.txt = ''
        })
      } else {
        // 组
        this.im.sendTextMessageGroup(this.txt, this.imTo.toId, () => {
          this.txt = ''
        })
      }
    },
    toChats (opt) {
      if (opt.groupid) {
        this.imTo = {
          chatType: 'group',
          toId: opt.groupid,
          toName: opt.groupname
        }
      } else {
        this.imTo = {
          chatType: 'single',
          toId: opt.name,
          toName: opt.name
        }
      }
    },
    toRead (e) {
      if (e.currentTarget.firstElementChild.style.display === 'block') {
        e.currentTarget.firstElementChild.style.display = 'none'
      }
    },
    scrollHandler () {},
    handleNoRead () {
      this.rosterList.forEach(item => {
        item.activeName = false
        if (this.GET_IM_CHART_DIALOG_UN_READ_LENGTH(item.name) > 0) {
          item.activeName = true
        }
      })
    },
    // 滚动到底
    scrollToBottom () {
      this.$nextTick(_ => {
        this.$refs['chattingContent'].wrap.scrollTop = this.$refs['chattingContent'].wrap.scrollHeight
      })
    }
    // 查看更多消息记录
    // viewNews () {
    //   let params = {
    //     toName: 'occm529j38',
    //     fromName: 'l4h4tc70',
    //     pageNo: 1,
    //     pageSize: 10
    //   }
    //   axios.get('http://192.168.1.127:8080/jlfw/api/imChat/chatRecord', { params: params }).then(flag => {
    //     this.newsNum = flag.data
    //     this.looks = false
    //     console.log(flag, '聊天记录数据')
    //   })
    // }
  },
  mounted () {
    const chatsScrollBar = this.$refs['chatsScrollBar']
    if (chatsScrollBar) {
      this.wrap = chatsScrollBar.$refs['wrap']
      this.wrap.addEventListener('scroll', this.scrollHandler)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .dialog_style{
    width: 540px;
    margin-top: 8vh !important;
    >div:nth-child(1){
      padding: 3px;
    }
    >div:nth-child(2){
      padding: 30px 0 0;
      .chatting-roster-group-list{
        height: 100%;
      }
      .listHover{
        width: 100%;
        height: 32px;
        line-height: 32px;
        white-space:nowrap;
        overflow:hidden;
        text-overflow:ellipsis;
        font-size: 12px;
        color: #fff;
        padding: 0;
        border: 0;
        background-color: #3c475a;
        &:hover{
          cursor: pointer;
          background-color: #525E71;
        }
      }

      .el-textarea{
        /deep/.el-textarea__inner{
          border:0 !important;
        }
      }

      .no_reading{
        font-size: 6px;
        color: #ff0000;
        float: left;
        //display: none;
      }

      .list_user{
        color: #fff;
        margin-left: 8px;
      }

      .chatting-content{
        height: 344px;
      }

      .im_button{
        width: 42px;
        height: 22px;
        margin-left: 320px;
        font-size: 12px;
        color: #fff;
        &:hover{
          cursor: pointer;
        }
      }

      .el-button{
        position: relative;
        top:-5px;
        /deep/span{
          position: absolute;
          top:3px;
          left: 8px;
        }
      }

      .more_news{
        float: right;
        font-size: 12px;
        color: #303133;
        margin-right: 5px;
        &:hover{
          cursor: pointer;
          color: #0aa0f5;
        }
      }
    }
  }

  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }

  .el-main {
    /* background-color: #E9EEF3;*/
    color: #333;
    text-align: center;
  }

  .listHover{
    width: 100%;
    height: 32px;
    line-height: 32px;
    white-space:nowrap;
    overflow:hidden;
    text-overflow:ellipsis;
    font-size: 12px;
    color: #fff;
    padding: 0;
    border: 0;
    background-color: #3c475a;
    &:hover{
      cursor: pointer;
      background-color: #525E71;
    }
  }

  .el-textarea{
    /deep/.el-textarea__inner{
      border:0 !important;
    }
  }

  .noRead{
    font-size: 14px;
    color: #fff;
    margin-left: 50px;
    height: 16px;
    &:hover{
      cursor: pointer;
    }
  }

  .no_reading{
    font-size: 6px;
    color: #ff0000;
    float: left;
    display: none;
  }

  .list_user{
    color: #fff;
    margin-left: 8px;
  }

  .im_button{
    width: 42px;
    height: 22px;
    margin-left: 310px;
    font-size: 12px;
    color: #fff;
    &:hover{
      cursor: pointer;
    }
  }

  .el-button{
    position: relative;
    top:-5px;
    /deep/span{
      position: absolute;
      top:3px;
      left: 8px;
    }
  }

  .more_news{
    float: right;
    font-size: 12px;
    color: #303133;
    margin-right: 5px;
    &:hover{
      cursor: pointer;
      color: #0aa0f5;
    }
  }
</style>
