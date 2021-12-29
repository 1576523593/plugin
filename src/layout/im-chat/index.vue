<template>
  <div class="pageTags">
    <el-dialog  title="在线聊天" :visible.sync="dialogFormVisible" width="700px" custom-class="dialog_style">
      <div class="im_container" style="margin-top: -20px">
        <div>
          <div style="padding: 0">
            <div style="height: 460px;border:1px solid #ccc">
              <el-row style="height: 100%;">
                <el-col :span="7" style="height: 100%;">
                  <div style="height: 100%; text-align: left;background-color: #3c475a;">
                    <div class="chatting-roster-group-list">
                      <div class="friend_list">好友列表</div>
                      <el-scrollbar ref="chattingContent" class="friendList">
                        <div class="listHover" v-for="(roster, index) in lists" :key="index" @click="toChats(roster);toRead($event)">
                          <span class="no_reading" v-if="roster.activeName===true">•</span>
                          <span class="list_user"> {{roster.orgName}}</span>
                        </div>
                      </el-scrollbar>
                    </div>
                  </div>
                </el-col>
                <!-- 聊天信息 -->
                <el-col :span="17">
                  <el-row>
                    <el-col :span="24">
                      <div style="width: 100%;height: 40px;line-height: 40px; padding-left: 8px;">
                    <span style="font-size:12px;color: #35a6f1">
                      <span style="color: black"> {{imTo.orgName}} </span>沟通中...</span>
                      </div>
                      <el-scrollbar v-on:scroll.native="scrollHandler" ref="chattingContent" class="chatting-content">
                        <el-button v-if="chartHistorys.length>0" @click="loadMoreItem" :loading="loading" class="more_news">{{tipMessage}}</el-button>
                        <!--<el-button class="more_news" v-else>暂无更多聊天记录</el-button>-->
                        <div>
                         <!-- <span @click="viewNews" class="more_news" v-if="show">{{tipMessage}}</span>
                          <span class="more_news" v-else>{{tipMessages}}</span>-->
                          <div v-for="(item, index) in chartHistorys" :key="index">
                            <div v-if="item.fromUser===userName"  class="chatting-item clearfix historyTest out">
                              <div class="msg-date">
                                {{ item.createTime }}
                              </div>
                              <div class="msg-from">
                                <span class="msg-author">
                                   <el-avatar icon="el-icon-user-solid"></el-avatar>
                                </span>
                                <span class="msg-content">
                                  <Viewers v-if="item.msg && item.type === 'img'" :images="[item.msg]">
                                    <img :src="item.msg" @click="openImage(item.msg)" style="width: 200px;height: 100px;border-radius: 0"/>
                                    <el-dialog :visible.sync="dialogVisible"  append-to-body>
                                      <img width="100%" :src="dialogImageUrl" alt="">
                                    </el-dialog>
                                  </Viewers>
                                  <p
                                    style="user-select: text;margin: 0"
                                    v-if="item.type==='txt'&&item.msg"
                                    v-html="renderTxt(item.msg)"
                                  />
                              <!--  <span v-if="item.msg" v-html="item.msg"></span>-->
                              </span>
                              </div>
                            </div>
                            <div v-else  class="chatting-item clearfix historyTest in">
                              <div class="msg-date">
                                {{ item.createTime }}
                              </div>
                              <div class="msg-from">
                                <span class="msg-author">
                               <!--   {{ item.fromOrgName}}-->
                                  <el-avatar icon="el-icon-user-solid"></el-avatar>
                                </span>
                                <span class="msg-content">
                                   <Viewers v-if="item.msg && item.type === 'img'" :images="[item.msg]">
                                    <img :src="item.msg" @click="openImage(item.msg)" style="width: 200px;height: 100px;border-radius: 0"/>
                                    <el-dialog :visible.sync="dialogVisible"  append-to-body>
                                      <img width="100%" :src="dialogImageUrl" alt="">
                                    </el-dialog>
                                  </Viewers>
                                  <p
                                    style="user-select: text;margin: 0"
                                    v-if="item.type==='txt'&&item.msg"
                                    v-html="renderTxt(item.msg)"
                                  />
                               <!-- <span v-if="item.msg" v-html="item.msg"></span>-->
                              </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div v-for="(item, index) in charts" :key="index">
                            <div v-if="item.from" class="chatting-item clearfix" :class="item.className">
                              <div class="msg-date">
                                {{ item.timeStr }}
                              </div>
                              <div class="msg-from">
                                <span class="msg-author">
                               <!--   {{ item.from}}-->
                                    <el-avatar icon="el-icon-user-solid"></el-avatar>
                                </span>
                                <div class="msg-content">
                                  <Viewers v-if="item.url && item.fileType == 'image'" :images="[item.url]">
                                    <img :src="item.url" @click="openImage(item.url)" style="width: 200px;height: 100px;border-radius: 0"/>
                                    <el-dialog :visible.sync="dialogVisible"  append-to-body>
                                      <img width="100%" :src="dialogImageUrl" alt="">
                                    </el-dialog>
                                  </Viewers>
                                 <!--  聊天消息-->
                            <p
                              style="user-select: text;margin: 0"
                              v-if="item.type==='txt'&&item.sourceMsg"
                              v-html="renderTxt(item.sourceMsg)"
                            />
                                  <p
                                    style="user-select: text;margin: 0"
                                    v-if="item.type==='chat'&&item.sourceMsg"
                                    v-html="renderTxt(item.sourceMsg)"
                                  />
<!--                                <div style="line-height: 20px" v-if="item.sourceMsg" v-html="item.sourceMsg"></div>-->
                              </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </el-scrollbar>
                    </el-col>
                  </el-row>
                  <div :style="divStyle">
                    <ChatEmoji v-on:selectEmoji="selectEmoji" :inpMessage="txt" :disabled="!imTo.toName" />
                    <label class="chatting-btn-file">
                      <input :disabled="!imTo.toName" @change="sendImageMessage($event)" ref="imageInput"
                             type="file"
                             accept=".jpg, .gif, .png, .bmp, .jpeg"
                             multiple="false">
                      <el-button :disabled="!imTo.toName" style="padding-top:0px;padding-left: 5px;border: 0;" :style="divStyle">
                        <img src="../../assets/image/im-picture.png" style="width: 17px"/>
                      </el-button>
                    </label>
                  </div>
                  <!-- 输入区域 -->
                  <el-row>
                    <el-col :span="24">
                      <div class="chatting-input">
                        <el-input type="textarea" style="border:0"
                                  @keydown.enter.native="sendMessage($event)"
                                  @focus="sendText()"
                                  ref="textarea"
                                  resize="none"
                                  :disabled="!imTo.toName"
                                  v-model="txt" placeholder="请输入文字..."></el-input>
                      </div>
                    </el-col>
                  </el-row>
                  <el-row>
                    <el-col :span="24">
                      <div style="position: relative">
                        <el-popover
                          placement="top-end"
                          width="100"
                          trigger="manual"
                          content="不能发送空白消息"
                          v-model="visibleButton">
                        <el-button  slot="reference" type="success" size="mini" @click="sendMessage" class="im_button" :disabled="!imTo.toName">
                          发送
                        </el-button>
                        </el-popover>
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
import Viewers from './components/Viewer'
import ChatEmoji from './components/Emoji'
import emoji from '../../config/emoji'
import { mapGetters } from 'vuex'
import storage from '@/utils/sessionStorage'
export default {
  components: {
    Viewers,
    ChatEmoji
  },
  props: {
    visible: {
      require: true,
      type: Boolean
    }
  },
  data () {
    return {
      dialogFormVisible: true,
      loading: false,
      im: new Easemob(),
      txt: '',
      wrap: null,
      loadFlag: false,
      show: false,
      dialogVisible: false,
      dialogImageUrl: '',
      divStyle: {
        backgroundColor: ''
      },
      organizationId: storage.getItem('organizationId'),
      organizationIm: '',
      tipMessage: '', // 底部提示文字
      tipMessages: '',
      imTo: {
        chatType: '',
        toName: '',
        toId: '',
        orgName: ''
      },
      fileTrigger: true,
      accessToken: '',
      imName: '',
      imPassword: '',
      userName: '',
      chartHistorys: [],
      total: '',
      isHistory: false,
      lists: [],
      unreadMessage: [],
      queryParams: {
        current: 1, // 当前页
        size: 10 // 每页条数
      },
      visibleButton: false
    }
  },
  created () {
    this.getOrganization()
    this.getImToken()
    if (storage.getItem('imName') !== null) {
      this.initIm()
    } else {
      if (this.$store.getters.userId === null) {
        if (storage.getItem('imNames') !== null) {
          // this.im.login(storage.getItem('imNames'), '123456')
          this.api.imTokens().then(res => {
            let string = {
              ownerUserName: storage.getItem('imNames'),
              friendUserName: this.organizationIm,
              token: res.data.access_token
            }
            this.api.imFriends(string).then(flag => {
              this.getContants()
              this.api.imOrgNames(this.organizationIm).then(res => {
                this.imTo = {
                  chatType: 'single',
                  toId: this.organizationIm,
                  toName: this.organizationIm,
                  orgName: res.data
                }
              })
            })
          })
        } else {
          let param = {
            userName: ''
          }
          this.api.imLogining(param).then(flag => {
            this.im.login(flag.data.entities[0].username, '123456')
            this.userName = flag.data.entities[0].username
            storage.setItem('imNames', this.userName)
            let string = {
              ownerUserName: flag.data.entities[0].username,
              friendUserName: this.organizationIm,
              token: this.accessToken
            }
            this.api.imFriends(string).then(flag => {
              this.getContants()
              this.api.imOrgNames(this.organizationIm).then(res => {
                this.imTo = {
                  chatType: 'single',
                  toId: this.organizationIm,
                  toName: this.organizationIm,
                  orgName: res.data
                }
              })
            })
          })
        }
      } else {
        let params = {
          userName: this.$store.getters.userId
        }
        this.api.imSysUsers(params).then(flag => {
          if (flag.data === null) {
            this.regIm()
          } else {
            this.initIm()
          }
        })
      }
    }
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
    userPassword () {
      return this.$store.getters.userPassword
    },
    roleCode () {
      return this.$store.getters.roleCode
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
    charts (val, oldVal) {
      this.scrollToBottom()
      val.forEach(item => {
        item.isRead = true
      })
      storage.setItem('noReadNum', 0)
    },
    visible (newVal) {
      this.dialogFormVisible = newVal
    },
    'dialogFormVisible' (newVal) {
      this.$emit('update:visible', newVal)
    },
    'imTo.toName' (val) {
      if (val === '') {
        this.divStyle.backgroundColor = '#F4F7F9'
      } else {
        this.divStyle.backgroundColor = '#fff'
      }
    }
  },
  methods: {
    getOrganization () {
      this.api.imAccounts(this.organizationId).then(res => {
        this.organizationIm = res.data
      })
    },
    getImToken () {
      this.api.imTokens().then(res => {
        this.accessToken = res.data.access_token
      })
    },
    getContants () {
      let imName = ''
      if (storage.getItem('imNames') !== null) {
        imName = storage.getItem('imNames')
      } else if (storage.getItem('imName') !== null) {
        imName = storage.getItem('imName')
      }
      let params = {
        userName: imName
      }
      this.api.imContacts(params).then(res => {
        let item = {}
        const arr = res.data.data.filter(v => v.imUserName !== storage.getItem('imAdminInfo'))
        const arr1 = arr.filter(v => this.GET_IM_CHART_DIALOG_UN_READ_LENGTH(v.imUserName) > 0)
        arr1.forEach(v => {
          this.$set(v, 'activeName', true)
        })
        const arr2 = arr.filter(v => this.GET_IM_CHART_DIALOG_UN_READ_LENGTH(v.imUserName) <= 0)
        arr2.forEach(v => {
          this.$set(v, 'activeName', false)
        })
        arr1.push(...arr2)
        this.lists = arr1
      })
    },
    initIm () {
      // im 登陆
      let params = {
        userName: this.$store.getters.userId
      }
      this.api.imSysUsers(params).then(flag => {
        this.imName = flag.data.userName
        this.imPassword = flag.data.passWord
        // this.im.login(this.imName, this.imPassword)
        this.userName = this.imName
        storage.setItem('imName', flag.data.userName)
        if (this.roleCode !== '1') {
          if (this.organizationIm !== null) {
            this.api.imTokens().then(res => {
              let string = {
                ownerUserName: this.imName,
                friendUserName: this.organizationIm,
                token: res.data.access_token
              }
              this.api.imFriends(string).then(flag => {
                this.getContants()
                this.api.imOrgNames(this.organizationIm).then(res => {
                  this.imTo = {
                    chatType: 'single',
                    toId: this.organizationIm,
                    toName: this.organizationIm,
                    orgName: res.data
                  }
                })
              })
            })
          } else {
            this.getContants()
          }
        } else {
          this.getContants()
        }
      })
    },
    regIm () {
      let param = {
        userName: this.$store.getters.userId
      }
      this.api.imLogining(param).then(flag => {
        this.api.imSysUsers(param).then(flag => {
          this.imName = flag.data.userName
          this.imPassword = flag.data.passWord
          this.im.login(this.imName, this.imPassword)
          this.userName = this.imName
          storage.setItem('imName', flag.data.userName)
          this.api.imTokens().then(res => {
            let string = {
              ownerUserName: this.imName,
              friendUserName: storage.getItem('imAdminInfo'),
              token: res.data.access_token
            }
            this.api.imFriends(string).then(flag => {
            })
          })
        })
      })
    },
    sendText () {
      this.visibleButton = false
    },
    // 发送消息
    sendMessage (event) {
      event.preventDefault()
      if (this.txt.length === 0 || this.txt.trim() === '') {
        this.visibleButton = true
        setTimeout(() => {
          this.visibleButton = false
        }, 2000)
        return false
      } else {
        // 会话
        this.im.sendTextMessage(this.txt, this.imTo.toId, () => {
          this.txt = ''
        })
      }
    },
    // 发送图片消息
    sendImageMessage () {
      if (!this.imTo.toId) {
        alert('发送对象必须')
        return
      }
      this.im.sendGroupImageMessage(this.$refs.imageInput, this.imTo.toId, () => {
        this.fileTrigger = !this.fileTrigger
        this.$nextTick(_ => {
          this.fileTrigger = !this.fileTrigger
        })
      })
    },
    openImage (url) {
      this.dialogVisible = true
      this.dialogImageUrl = url
    },
    // 发送表情
    selectEmoji (v) {
      this.$data.txt = v
      this.$refs.textarea.focus()
    },
    renderTxt (txt = '') {
      if (txt.toString().indexOf('public')) {
        txt = txt.toString().replace(/\/public/g, '')
      }
      let rnTxt = []
      let match = null
      const regex = /(\[.*?\])/g
      let start = 0
      let index = 0
      while ((match = regex.exec(txt))) {
        index = match.index
        if (index > start) {
          rnTxt.push(txt.substring(start, index))
        }
        if (match[1] in emoji.map) {
          const v = emoji.map[match[1]]
          rnTxt.push(this.customEmoji(v))
        } else {
          rnTxt.push(match[1])
        }
        start = index + match[1].length
      }
      rnTxt.push(txt.substring(start, txt.length))
      return rnTxt.toString().replace(/,/g, '')
    },
    customEmoji (value) {
      let url = process.env.BASE_URL
      return `<img src="/plugins/easemobs/faces/${value}" >`
    },
    toChats (opt) {
      opt.activeName = false
      this.show = true
      this.chartHistorys = []
      this.tipMessage = '查看更多聊天记录'
      storage.setItem('noReadNum', 0)
      this.imTo = {
        chatType: 'single',
        toId: opt.imUserName,
        toName: opt.imUserName,
        orgName: opt.orgName
      }
      this.queryParams.current = 1
      this.viewNews()
      this.GET_IM_CHART_DIALOG_GROUP_MESSAGE(this.imTo.toId).forEach(item => {
        item.isRead = true
      })
      // this.$refs['chattingContent'].$refs['wrap'].addEventListener('scroll', this.scrollHandler)
      this.$refs['chattingContent'].$refs['wrap'].addEventListener('mousewheel', this.scrollHandler)
    },
    toRead (e) {
      if (e.currentTarget.firstElementChild.style.display === 'block') {
        e.currentTarget.firstElementChild.style.display = 'none'
      }
    },
    scrollHandler (e) {
      const top = this.$refs['chattingContent'].$refs['wrap'].scrollTop
      if (top === 0) {
        this.$refs['chattingContent'].$refs['wrap'].scrollTop = 100
        if (this.tipMessage !== '暂无更多聊天记录') {
          this.loading = true
          setTimeout(() => {
            this.loadMoreItem()
          }, 1000)
        }
      }
    },
    // handleNoRead () {
    //   this.lists.forEach(v => {
    //     if (this.GET_IM_CHART_DIALOG_UN_READ_LENGTH(v.name) > 0) {
    //       this.$set(v, 'activeName', true)
    //     }
    //   })
    // },
    // 滚动到底
    scrollToBottom () {
      var div = this.$refs['chattingContent'].$refs['wrap']
      this.$nextTick(() => {
        div.scrollTop = div.scrollHeight
      })
      // this.$nextTick(_ => {
      //   this.$refs['chattingContent'].wrap.scrollTop = this.$refs['chattingContent'].wrap.scrollHeight
      // })
    },
    // 查看更多消息记录
    viewNews () {
      let params = {
        current: this.queryParams.current,
        size: this.queryParams.size,
        sidx: 'create_time',
        sord: 'ascend',
        toName: this.imTo.toId
      }
      if (storage.getItem('imNames') === null) {
        params.fromName = this.imName
      } else {
        params.fromName = storage.getItem('imNames')
      }
      this.api.imChatRecords(params).then(res => {
        if (res.code === this.constants.SUCCESS_CODE) {
          this.loading = false
          const { records, total } = res.data
          if (this.loadFlag) {
            this.loadFlag = false
            this.chartHistorys.unshift(...records.reverse())
          } else {
            this.chartHistorys = records.reverse()
            this.scrollToBottom()
          }
          this.total = total
          if (this.queryParams.current < Math.ceil(this.total / 10)) {
            this.loadFlag = true
            // this.queryParams.current++
            this.tipMessage = '加载更多聊天记录...'
          } else {
            this.tipMessage = '暂无更多聊天记录'
            this.loading = false
          //  this.show = false
          }
        } else {
          this.$message.error(res.msg)
        }
      })
    },
    // 加载更多
    loadMoreItem () {
      if (this.queryParams.current < Math.ceil(this.total / 10)) {
        this.loading = true
        this.loadFlag = true
        this.queryParams.current++
        this.viewNews()
      }
    }
  },
  mounted () {
    if (this.imTo.toName === '') {
      this.divStyle.backgroundColor = '#F4F7F9'
    }
    // window.addEventListener('scroll', this.scrollHandler)
    // window.addEventListener('mousewheel', this.scrollHandler)
    // const chatsScrollBar = this.$refs['chattingContent']
    // if (chatsScrollBar) {
    //   this.wrap = chatsScrollBar.$refs['wrap']
    //   this.wrap.addEventListener('scroll', this.scrollHandler)
    //   this.wrap.addEventListener('mousewheel', this.scrollHandler)
    // }
  }
}
</script>

<style scoped lang="less">
  .pageTags {

    .el-dialog {

      > div:nth-child(1) {
        padding: 3px;
      }
      > div:nth-child(2) {
        padding: 0 20px 30px 20px;

        .chatting-roster-group-list {
          height: 100%;
          padding-top: 10px;
        }
        .friend_list{
          height: 30px;
          font-size: 14px;
          color: #fff;
          padding-left: 13px;
        }

        .friendList{
          height: 390px;
          /deep/.el-scrollbar__wrap{
            overflow-x: hidden;
          }
        }

        .listHover {
          width: 100%;
          height: 37px;
          line-height: 37px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          font-size: 12px;
          color: #fff;
          padding: 0;
          border: 0;
          padding-left: 5px;
          background-color: #3c475a;

          &:hover {
            cursor: pointer;
            background-color: #525E71;
          }
        }

        .el-textarea {
          /deep/ .el-textarea__inner {
            border: 0 !important;
            height: 70px;
            padding: 15px;
          }
        }

        .no_reading {
          font-size: 6px;
          color: #ff0000;
          float: left;
          // display: none;
        }

        .list_user {
          color: #fff;
          margin-left: 8px;
        }

        .chatting-content {
          height: 275px;
          /deep/.el-scrollbar__wrap{
            border-bottom: 1px solid #EBEBEB;
            overflow-x: hidden;
            .more_news {
              display: inline-block;
              width: 100%;
              line-height: 30px;
              font-size: 12px;
              color: #303133;
              text-align: center;
             // position: absolute;
             // top:10px;

              &:hover {
                cursor: pointer;
                color: #0aa0f5;
              }
            }
          }
        }

        .im_button {
          position: absolute;
          right: 10px;
          &:hover {
            cursor: pointer;
          }
        }
      }
    }
  }
</style>
<style>
  .dialog_style {
    margin-top: 8vh !important;
  }
</style>
