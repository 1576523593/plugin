<template>
  <div class="menu-manage-wrapper sun-paper_page-view-container">
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
      :isAddChild="isAddChild"
      :is="pageViewName"
      :pageType="pageType"
    />
  </div>
</template>

<script>
import MenuManageList from './pages/MenuManageList'
import MenuManageEdit from './pages/MenuManageEdit'
const breadcrumbMap = {
  list: [
    {
      label: '系统设置',
      routeName: null
    },
    {
      label: '菜单管理',
      routeName: null
    }
  ],
  edit: [
    {
      label: '系统设置',
      routeName: null
    },
    {
      label: '菜单管理',
      routeName: 'MenuManageList'
    },
    {
      label: '编辑菜单',
      routeName: null
    }
  ],
  addRoot: [
    {
      label: '系统设置',
      routeName: null
    },
    {
      label: '菜单管理',
      routeName: 'MenuManageList'
    },
    {
      label: '新增菜单',
      routeName: null
    }
  ],
  addSub: [
    {
      label: '系统设置',
      routeName: null
    },
    {
      label: '菜单管理',
      routeName: 'MenuManageList'
    },
    {
      label: '新增下级菜单',
      routeName: null
    }
  ]
}
export default {
  name: 'MenuManage',
  components: {
    MenuManageEdit,
    MenuManageList
  },
  data () {
    return {
      pageViewName: 'MenuManageList',
      pageType: 'list',
      acceptId: '',
      isAddChild: '',
      operator: ''
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
      if (params.type !== 'addSub') {
        this.acceptId = params.id || ''
      } else {
        this.isAddChild = params.isAddChild
      }
      this.pageViewName = params.pageViewName
      this.pageType = params.type || 'list'
    }
  }
}
</script>

<style lang="less" scoped>
.menu-manage-wrapper {
  width: 100%;
  height: auto;

  .clickable {
    cursor: pointer;
  }
}
</style>
