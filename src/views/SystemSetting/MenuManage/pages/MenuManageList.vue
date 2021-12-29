<template>
  <div class="sun-paper_page-content-wrapper">
    <div class="sun-paper_page-content">
      <div class="sun-paper_table-operation-row">
        <a-button
          type="primary"
          v-action="'system:menu:add'"
          @click="handlePageViewChange('addRoot')"
        >
          <a-icon type="plus" />
          新增
        </a-button>
      </div>
      <div class="sun-paper_table-content-wrapper">
        <a-table
          rowKey="id"
          bordered
          :loading="loading"
          :pagination="ipagination"
          :columns="columns"
          :data-source="dataSource"
          size="middle"
          @change="handleTableChange"
        >
          <span
            slot="action"
            slot-scope="text, records"
            class="sun-paper_table-cell-flex"
          >
            <a-button-group>
              <a-tooltip>
                <template slot="title">
                  编辑
                </template>
                <a-button
                  type="link"
                  v-action="'system:menu:edit'"
                  @click="handlePageViewChange('edit', records.id)"
                >
                  <a-icon
                    type="edit"
                    :style="iconStyle"
                  />
                </a-button>
              </a-tooltip>
              <a-tooltip>
                <template slot="title">
                  删除
                </template>
                <a-button
                  type="link"
                  v-action="'system:menu:del'"
                  @click="handleDelete(records.id)"
                >
                  <a-icon
                    type="delete"
                    :style="iconStyle"
                  />
                </a-button>
              </a-tooltip>
              <!-- <a-tooltip>
                <template slot="title">
                  新增子菜单
                </template>
                <a-button
                  type="link"
                  @click="handlePageViewChange('addSub', records.id)"
                >
                  <a-icon
                    type="folder-add"
                    :style="iconStyle"
                  />
                </a-button>
              </a-tooltip> -->
            </a-button-group>
          </span>
        </a-table>
      </div>
    </div>
    <page-footer />
  </div>
</template>

<script>
import { tableListMixin } from '@/utils/tableListMixin'
import PageFooter from '@/components/PageFooter/PageFooter.jsx'
import { getAction } from '@/utils/request'
const ResourceTypeMap = {
  0: '目录',
  1: '菜单',
  2: '按钮'
}
export default {
  name: 'MenuManageList',
  mixins: [tableListMixin],
  components: {
    PageFooter
  },
  data () {
    return {
      iconStyle: {
        fontSize: '16px'
      },
      queryParam: {
        ascs: 'sort'
      },
      columns: [
        {
          title: '菜单名称',
          dataIndex: 'resourceName'
        },
        {
          title: '菜单类型',
          dataIndex: 'resourceType',
          customRender: (text) => ResourceTypeMap[text]
        },
        {
          title: '排序',
          dataIndex: 'sort'
        },
        {
          title: '组件名称',
          dataIndex: 'componentName'
        },
        {
          title: '路由',
          dataIndex: 'routeName'
        },
        {
          title: 'URL',
          dataIndex: 'url'
        },
        {
          title: '权限标识',
          dataIndex: 'resourceCode'
        },
        {
          title: '操作',
          dataIndex: 'action',
          width: 160,
          scopedSlots: { customRender: 'action' }
        }
      ],
      ipagination: {
        current: 1,
        pageSize: 10,
        showQuickJumper: false,
        showSizeChanger: false,
        total: 0
      },
      url: {
        list: '/front/jiliang/v1/sysResource',
        delete: '/front/jiliang/v1/sysResource'
      }
    }
  },
  methods: {
    loadData (arg) {
      if (!this.url.list) {
        this.$message.error('请设置url.list属性!')
        return
      }
      if (arg === 1) {
        this.ipagination.current = 1
      }
      var params = this.getQueryParams()
      this.loading = true
      getAction(this.url.list, params).then(res => {
        if (res.status === 0) {
          this.dataSource = []
          this.dataSource = res.data && res.data.records || []
          this.ipagination.total = res.data && res.data.total || 0
        } else {
          this.$message.warning(res.message)
        }
        this.loading = false
      })
    },
    handleAddSubMenu (id) {
      this.$router.push({
        name: 'MenuManageAddSub',
        params: {
          id
        }
      })
    },
    handleEdit (id) {
      this.$router.push({
        name: 'MenuManageEdit',
        params: {
          id
        }
      })
    },
    handlePageViewChange (type, id) {
      const params = {
        pageViewName: 'MenuManageEdit',
        type,
        id,
        isAddChild: id
      }
      this.$emit('on-page-view-change', params)
    }
  }
}
</script>

<style lang="less" scoped>
.menu-manage-list-wrapper {
  width: 100%;
  height: auto;
}
</style>
