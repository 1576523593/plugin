 import logo from '../../assets/images/icon_logo1.png'
/**
 * 根据当前菜单id找出父级菜单id
 * @param {*}
 * @return id
 */

const findParentMapAllRoute = (navData, currentId) => {
  const len = navData.length
  for (let i = 0; i < len; i++) {
    if (navData[i].id === currentId && navData[i].parentId) {
      return navData[i].parentId
    }
    if (navData[i].children && navData[i].children.length > 0) {
      const res = findParentMapAllRoute(navData[i].children, currentId)
      if (res) {
        return res
      }
    }
  }
}

const RightSiderNav = {
  name: 'RightSiderNav',
  data () {
    return {
      currentSelectedKey: '',
      currentOpenKey: '',
      rootSubmenuKeys: []
    }
  },
  props: {
    navData: {
      type: Array,
      required: true,
      default: () => []
    },
   'inline-collapsed': {
      type: Boolean,
      required: true
    }
  },
  watch: { // 监听路由变化 更新侧边导航栏选中状态
    '$route.path': {
      handler: function (newVal, oldVal) {
        if (newVal) {
          this.getDefaultOpenKey()
        }
      },
      deep: true
    }
  },
  methods: {
    handleOpenChange (openKeys) {
      // debugger
      if (openKeys.length) {
        this.currentOpenKey = [openKeys[openKeys.length - 1]]
      }
      // this.currentOpenKey = openKeys
      // const latestOpenKey = openKeys.find(key => this.currentSelectedKey.indexOf(key) === -1)
      // if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      //   this.currentOpenKey = openKeys
      // } else {
      //   this.currentOpenKey = latestOpenKey ? [latestOpenKey] : []
      // }
    },
    getDefaultOpenKey () {
      const currentSelectedKey = this.$route.meta.id
      const currentOpenKey = findParentMapAllRoute(this.navData, currentSelectedKey)
      this.currentSelectedKey = (currentSelectedKey && [currentSelectedKey]) || []
      this.currentOpenKey = (currentOpenKey && [currentOpenKey]) || []
    }
  },
  created () {
    // this.rootSubmenuKeys = this.$store.state.menuInfo.map((item) => item.id)
    this.getDefaultOpenKey()
  },
  render () {
    const { $props, navData, handleOpenChange } = this
    const generateMenuItem = (data) => {
      return (
        <a-menu-item key={data.id} style='padding-left:70px'>
          <router-link to={data.path} style='text-align:left'>
            {data.level === 1 ? generateMenuIcon(data) : null}
            {data.title}
          </router-link>
        </a-menu-item>
      )
    }
    const generateIcon = (data) => {
      return (<i class={['custom-icon', data.component]}></i>)
    }
    const generateMenuIcon = (data) => {
      return (<i class={['custom-menu-icon', data.component]}></i>)
    }
    const generateSubMenu = (data) => {
      const subMenuProps = {
        scopedSlots: {
          title: () => (
            <span class="custom-label-wrapper">
              {data.component ? generateIcon(data) : null}
              {data.title}
            </span>
          )
        }
      }
      return (
        <a-sub-menu key={data.id} { ...subMenuProps }>
           {
            data.children && data.children.map((item) => {
              if (item.level === 2) {
                return generateMenuItem(item)
              } else {
                return generateSubMenu(item)
              }
            })
           }
        </a-sub-menu>
      )
    }
    const generateNavItem = () => {
      return navData.map((navItem) => {
        if (navItem.level === 1 && navItem.children !== null) {
          return generateSubMenu(navItem)
        } else if (navItem.level === 1 && navItem.children === null) {
          return generateMenuItem(navItem)
        } else if (navItem.level === 2) {
          return generateMenuItem(navItem)
        }
      })
    }
    const gengerateHeaderSection = () => {
      return (
        <router-link to={{ name: 'index' }} class="sun-paper_sider-nav-header">
           <div class="logo">
            <img src={logo}/>
           </div>
          <h3 class="logo-h3">智慧计量监管服务平台</h3>
        </router-link>
      )
    }
    const menuProps = {
      props: {
        ...$props,
        inlineIndent: 0,
        mode: 'inline',
        theme: 'dark',
        openKeys: this.currentOpenKey,
        selectedKeys: this.currentSelectedKey
      },
      on: {
        openChange: handleOpenChange
      }
    }
    return (
      <div class="sun-paper_right-sider-nav-wrapper">
        {gengerateHeaderSection()}
        <a-menu {...menuProps} >
          {generateNavItem()}
        </a-menu>
      </div>
    )
  }
}
export default RightSiderNav
