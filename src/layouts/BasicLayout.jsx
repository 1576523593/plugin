import RightSiderNav from '../components/RightSiderNav/RightSiderNav.jsx'
import GlobalHeader from '../components/GlobalHeader/GlobalHeader.jsx'
import { mapState } from 'vuex'
const BasicLayout = {
  name: 'BasicLayout',
  components: {
    RightSiderNav,
    GlobalHeader
  },
  data () {
    return {
      hasSider: true,
      hasMsg: true,
      inlineCollapsed: false
    }
  },
  computed: {
    ...mapState({
      navData: state => state.menuInfo
    })
  },
  methods: {
    handleCollapsedChange (isCollapsed) {
      this.inlineCollapsed = isCollapsed
    }
  },
  render () {
    const {
      hasSider,
      navData,
      inlineCollapsed,
      handleCollapsedChange
    } = this
    const siderProps = {
      props: {
        width: '220',
        collapsible: true,
        trigger: null,
        collapsed: inlineCollapsed
      }
    }
    const headerProps = {
      style: {
        background: '#fff'
      },
      class: ['sun-paper_global-header']
    }
    const globalHeaderProps = {
      on: {
        'collapsed-change': handleCollapsedChange
      }
    }
    const rightSiderNavProps = {
      props: {
        mode: 'inline',
        theme: 'dark',
        'inline-collapsed': inlineCollapsed,
        navData
      }
    }
    return (
      <a-layout class="sun-paper_layout" hasSider={ hasSider }>
        <a-layout-sider {...siderProps}>
          <right-sider-nav style="position: fixed;top: 0;left: 0;" {...rightSiderNavProps}/>
        </a-layout-sider>
        <a-layout>
          <a-layout-header {...headerProps}>
            <global-header {...globalHeaderProps}/>
          </a-layout-header>
          <a-layout-content>
            <router-view></router-view>
          </a-layout-content>
        </a-layout>
      </a-layout>
    )
  }
}

export default BasicLayout
