<template>
  <div class="role-manage-wrapper sun-paper_page-view-container">
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
import RoleManageList from './pages/RoleManageList'
import RoleManageEdit from './pages/RoleManageEdit'
const breadcrumbMap = {
  list: [
    {
      label: '系统设置',
      routeName: null
    },
    {
      label: '角色管理',
      routeName: null
    }
  ],
  edit: [
    {
      label: '系统设置',
      routeName: null
    },
    {
      label: '角色管理',
      routeName: 'RoleManageList'
    },
    {
      label: '编辑角色',
      routeName: null
    }
  ],
  add: [
    {
      label: '系统设置',
      routeName: null
    },
    {
      label: '角色管理',
      routeName: 'RoleManageList'
    },
    {
      label: '新增角色',
      routeName: null
    }
  ]
}
export default {
  name: 'RoleManage',
  components: {
    RoleManageEdit,
    RoleManageList
  },
  data() {
    return {
      pageViewName: 'RoleManageList',
      pageType: 'list',
      acceptId: ''
    }
  },
  computed: {
    breadcrumbs() {
      return breadcrumbMap[this.pageType]
    }
  },
  methods: {
    handlePageViewChange(params) {
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
.role-manage-wrapper {
  width: 100%;
  height: auto;

  .clickable {
    cursor: pointer;
  }
}
</style>
