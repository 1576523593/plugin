<template>
  <div class="sun-paper_page-content-wrapper">
    <div class="sun-paper_page-content">
      <div class="sun-paper_table-operation-row">
        <a-button
          type="primary"
          v-action="'system:auth:add'"
          @click="handlePageViewChange('add')"
        >
          <a-icon type="plus" />
          新增权限
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
            slot="index"
            slot-scope="text, records, index"
            class="sun-paper_table-cell-flex"
          >
            {{ index + 1 }}
          </span>
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
                  v-action="'system:auth:edit'"
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
                  v-action="'system:auth:del'"
                  @click="handleDelete(records.id)"
                >
                  <a-icon
                    type="delete"
                    :style="iconStyle"
                  />
                </a-button>
              </a-tooltip>
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
export default {
  name: 'AuthManageList',
  mixins: [tableListMixin],
  components: {
    PageFooter
  },
  data () {
    return {
      iconStyle: {
        fontSize: '16px'
      },
      ipagination: {
        current: 1,
        pageSize: 10,
        showQuickJumper: false,
        showSizeChanger: false,
        total: 0
      },
      columns: [
        {
          title: '序号',
          dataIndex: 'index',
          scopedSlots: { customRender: 'index' },
          width: 60
        },
        {
          title: '权限名称',
          dataIndex: 'authName',
          ellipsis: true
        },
        {
          title: '菜单权限',
          dataIndex: 'resourceNames',
          ellipsis: true
        },
        {
          title: '操作',
          dataIndex: 'action',
          width: 120,
          scopedSlots: { customRender: 'action' }
        }
      ],
      url: {
        list: '/front/jiliang/v1/sysAuth',
        delete: '/front/jiliang/v1/sysAuth'
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
      // this.loading = true
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
    handlePageViewChange (type, id) {
      const params = {
        pageViewName: 'AuthManageEdit',
        type,
        id
      }
      this.$emit('on-page-view-change', params)
    }
  }
}
</script>

<style lang="less" scoped>

</style>
