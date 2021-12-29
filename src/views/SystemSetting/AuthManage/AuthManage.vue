<template>
  <div class="auth-manage-wrapper sun-paper_page-view-container">
    <div class="sun-paper_page-header">
      <a-breadcrumb>
        <a-breadcrumb-item
          v-for="(item, index) in breadcrumbs"
          :key="index"
        >
          <span
            :class="{'clickable': item.routeName}"
            @click="handlePageViewChange({pageViewName: item.routeName})"
          >
            {{ item.label }}
          </span>
        </a-breadcrumb-item>
      </a-breadcrumb>
    </div>
    <component
      @on-page-view-change="handlePageViewChange"
      :id="acceptId"
      :is="pageViewName"
    />
  </div>
</template>

<script>
import AuthManageList from './pages/AuthManageList'
import AuthManageEdit from './pages/AuthManageEdit'
const breadcrumbMap = {
  list: [
    {
      label: '系统设置',
      routeName: null
    },
    {
      label: '权限管理',
      routeName: null
    }
  ],
  edit: [
    {
      label: '系统设置',
      routeName: null
    },
    {
      label: '权限管理',
      routeName: 'AuthManageList'
    },
    {
      label: '编辑权限',
      routeName: null
    }
  ],
  add: [
    {
      label: '系统设置',
      routeName: null
    },
    {
      label: '权限管理',
      routeName: 'AuthManageList'
    },
    {
      label: '新增权限',
      routeName: null
    }
  ]
}
export default {
  name: 'AuthManage',
  components: {
    AuthManageEdit,
    AuthManageList
  },
  data () {
    return {
      pageViewName: 'AuthManageList',
      pageType: 'list',
      acceptId: ''
    }
  },
  computed: {
    breadcrumbs () {
      return breadcrumbMap[this.pageType]
    }
  },
  methods: {
    handlePageViewChange (params) {
      if (!params.pageViewName) {
        return false
      }
      this.pageViewName = params.pageViewName
      this.pageType = params.type || 'list'
      this.acceptId = params.id || ''
    }
  }
}
</script>

<style lang="less" scoped>
.auth-manage-wrapper {
  width: 100%;
  height: auto;

  .clickable {
    cursor: pointer;
  }
}
</style>
