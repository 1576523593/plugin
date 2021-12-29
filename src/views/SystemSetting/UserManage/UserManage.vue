<template>
  <div class="user-manage-wrapper sun-paper_page-view-container">
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
      :id="userId"
      :type="pageType"
      :is="pageViewName"
    />
  </div>
</template>

<script>
import UserManageList from './pages/UserManageList'
import UserManageEdit from './pages/UserManageEdit'
const breadcrumbMap = {
  list: [
    {
      label: '系统设置',
      routeName: null
    },
    {
      label: '用户管理',
      routeName: null
    }
  ],
  edit: [
    {
      label: '系统设置',
      routeName: null
    },
    {
      label: '用户管理',
      routeName: 'UserManageList'
    },
    {
      label: '编辑用户',
      routeName: null
    }
  ],
  add: [
    {
      label: '系统设置',
      routeName: null
    },
    {
      label: '用户管理',
      routeName: 'UserManageList'
    },
    {
      label: '新增用户',
      routeName: null
    }
  ]
}
export default {
  name: 'UserManage',
  components: {
    UserManageEdit,
    UserManageList
  },
  data () {
    return {
      pageViewName: 'UserManageList',
      pageType: 'list',
      userId: ''
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
      this.userId = params.id || ''
    }
  }
}
</script>

<style lang="less" scoped>
.user-manage-wrapper {
  width: 100%;
  height: auto;

  .clickable {
    cursor: pointer;
  }
}
</style>
