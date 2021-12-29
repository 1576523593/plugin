<template>
  <div class="sun-paper_page-content-wrapper">
    <div class="sun-paper_page-content">
      <div class="sun-paper_table-operation-row">
        <a-button
          type="primary"
          v-action="'system:organization:add'"
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
          :pagination="false"
          :columns="columns"
          :data-source="dataSource"
          size="middle"
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
                  v-action="'system:organization:edit'"
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
                  v-action="'system:organization:del'"
                  @click="handleDelete(records.id)"
                >
                  <a-icon
                    type="delete"
                    :style="iconStyle"
                  />
                </a-button>
              </a-tooltip>
              <a-tooltip>
                <template slot="title">
                  添加下级机构
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
  name: 'OrgManageList',
  mixins: [tableListMixin],
  components: {
    PageFooter
  },
  data () {
    return {
      iconStyle: {
        fontSize: '16px'
      },
      columns: [
        {
          title: '机构名称',
          dataIndex: 'organizationName',
          ellipsis: true
        },
        {
          title: '操作',
          dataIndex: 'action',
          width: 160,
          scopedSlots: { customRender: 'action' }
        }
      ],
      url: {
        list: '/front/sun/v1/sysOrganization',
        delete: '/front/sun/v1/sysOrganization'
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
          this.dataSource = [res.data]
        } else {
          this.$message.warning(res.message)
        }
        this.loading = false
      })
    },
    handlePageViewChange (type, id) {
      const params = {
        pageViewName: 'OrgManageEdit',
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

</style>
