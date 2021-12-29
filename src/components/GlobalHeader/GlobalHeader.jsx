import { mapActions, mapState } from 'vuex'
import {
  // getNotice,
  readMsg
} from '@/api/notice'
import defaultAvatar from '../../assets/images/default-avatar.png'
import msg from '../../assets/images/msg.png'
import './header.less'
const GlobalHeader = {
  name: 'GlobalHeader',
  data () {
    return {
      hasMsg: true,
      iconType: 'menu-fold',
      noticeList: []
    }
  },
  computed: {
    ...mapState({
      userInfo: (state) => state.userInfo,
      navData: state => state.menuInfo
    }),
    hasPermission() {
      const comp = 'calibration-comission'
      const list = this.navData.filter(item => item.component === comp)
      let status = false
      if (list.length && list[0].children) {
        const children = list[0].children
        status = children.some(p => p.path === '/intrust/plan/index')
      }
      return status
    }
  },
  methods: {
    ...mapActions(['Logout']),
    handleJumpToPage () {
      this.$router.push({
        path: '/system/account/index'
      })
    },
    handleSiderCollapse () {
      this.iconType = this.iconType === 'menu-fold' ? 'menu-unfold' : 'menu-fold'
      const isCollapsed = this.iconType === 'menu-unfold'
      this.$emit('collapsed-change', isCollapsed)
    },
    handleLogout () {
      const self = this
      this.$confirm({
        title: '退出登录',
        content: '是否确认退出当前系统？',
        okText: '确认',
        cancelText: '取消',
        onOk () {
          return new Promise((resolve, reject) => {
            self.Logout().finally(() => {
              setTimeout(() => {
                window.location.reload()
                this.$message.success('您已成功退出登录!')
                resolve()
              }, 1000)
            })
          })
        }
      })
    },
    async toPage (d) {
      await readMsg(d.id)
      this.hasMsg = this.noticeList.some(item => item.isRead === 0)
      if (!this.hasPermission) {
        this.$notification.error({
          message: '您暂无周检计划菜单的操作权限'
        })
        return
      }
      const { url } = d
      const m = url
      this.$router.push({
        path: '/intrust/plan/index',
        query: {
          m: m
        }
      })
    }
  },
  async mounted () {
    try {
      // const { data } = await getNotice()
      // this.noticeList = data
      // this.hasMsg = this.noticeList.some(item => item.isRead === 0)
    } catch (error) {

    }
  },
  render () {
    const {
      hasMsg,
      // iconType,
      handleLogout,
      noticeList,
      // handleSiderCollapse,
      handleJumpToPage,
      userInfo
    } = this
    const iconStyle = {
      fontSize: '20px'
    }
    return (
      <div class="sun-paper_layout-header">
        <div class="account-wrapper">
          { noticeList.length > 0 &&
            <a-dropdown trigger={['click']}>
              <div class="notice">
                <a-badge dot={hasMsg}>
                  <a-icon style={iconStyle} type="bell" />
                </a-badge>
              </div>
              <a-menu slot="overlay" class='dropdown-define'>
                {noticeList.map((item, index) => {
                  return <a-menu-item key={index} >
                    <div class="wrapper" onClick={() => this.toPage(item)} className={item.isRead === 1 ? 'isRead' : ''}>
                      <div class='ant-list-item-meta-avatar'>
                        <img src={msg} alt="" />
                      </div>
                      <div class="msg-content">
                        <div class="title">{item.title}</div>
                        <div class="description">{item.content}</div>
                      </div>
                    </div>
                  </a-menu-item>
                })}
              </a-menu>
            </a-dropdown>
          }
          {/* { noticeList.length === 0 && */}
          {/*  <div class="notice"> */}
          {/*    <a-badge dot={hasMsg}> */}
          {/*      <a-icon style={iconStyle} type="bell" /> */}
          {/*    </a-badge> */}
          {/*  </div> */}
          {/* } */}

          <a-dropdown>
            <div class="user-info">
              <a-avatar src={defaultAvatar} shape="square" size={32} icon="user" />
              <span class="user-name">{userInfo.realName}</span>
            </div>
            <a-menu slot="overlay">
              <a-menu-item onClick={handleJumpToPage}>
                <a-icon type="user" />
                <span>账户信息</span>
              </a-menu-item>
              <a-menu-divider />
              <a-menu-item onClick={handleLogout}>
                <a-icon type="poweroff" />
                <span>退出登录</span>
              </a-menu-item>
            </a-menu>
          </a-dropdown>
        </div>
      </div>
    )
  }
}
export default GlobalHeader
