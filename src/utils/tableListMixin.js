/* eslint-disable import/no-duplicates */
import { filterObj } from '@/utils'
import { deleteAction, getAction } from '@/utils/request'

export const tableListMixin = {
  data () {
    return {
      /* 查询条件-不要在queryParam中声明非字符串值的属性 */
      queryParam: {},
      /* 数据源 */
      dataSource: [],
      /* 分页参数 */
      ipagination: {
        current: 1,
        pageSize: 10,
        pageSizeOptions: ['10', '20', '30'],
        showTotal: (total, range) => {
          return '显示第 ' + range[0] + ' 到' + '第 ' + range[1] + ' 条记录，' + ' 共 ' + total + ' 条记录'
        },
        showQuickJumper: true,
        showSizeChanger: true,
        total: 0
      },
      /* table加载状态 */
      loading: false,
      /* table选中keys */
      selectedRowKeys: [],
      /* table选中records */
      selectionRows: []
    }
  },
  created() {
    this.dataSource = []
  },
  mounted () {
    if (this.beforeLoadDataCallback) {
      this.beforeLoadDataCallback().then((res) => {
        this.loadData()
      }).catch((err) => {
        this.$message.warning(err)
      })
    } else {
      this.loadData()
    }
    var _this = this
    document.onkeydown = function (e) {
      const key = window.event.keyCode
      if (key === 13) {
        _this.loadData()
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
        this.ipagination.pageSize = 10
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
    getQueryParams () {
      const sqp = {}
      var param = Object.assign(sqp, this.queryParam)
      param.current = this.ipagination.current
      param.size = this.ipagination.pageSize
      return filterObj(param)
    },
    onSelectChange (selectedRowKeys, selectionRows) {
      this.selectedRowKeys = selectedRowKeys
      this.selectionRows = selectionRows
    },
    onClearSelected () {
      this.selectedRowKeys = []
      this.selectionRows = []
    },
    searchQuery () {
      this.loadData(1)
    },
    searchReset () {
      this.queryParam = {}
      this.organizationCodesJoin = undefined
      this.loadData(1)
    },
    handleDelete: function (id) {
      if (!this.url.delete) {
        this.$message.error('请设置url.delete属性!')
        return
      }
      var that = this
      this.$confirm({
        title: '确认删除',
        content: '是否删除选中数据?',
        onOk: function () {
          const url = `${that.url.delete}/${id}`
          deleteAction(url).then(res => {
            if (res && res.status === 0) {
              that.$message.success(`删除成功!`)
              that.loadData()
            } else {
              that.$message.warning(res.message)
            }
          })
        }
      })
    },
    handleTableChange (pagination, filters, sorter) {
      this.ipagination = pagination
      this.loadData()
    }
  }
}
