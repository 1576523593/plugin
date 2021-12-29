<template>
  <div class="sun-paper_page-content-wrapper">
    <div class="sun-paper_page-content">
      <div class="sun-paper_table-operation-row">
        <a-button
          type="primary"
          v-action="'system:user:add'"
          @click="handlePageViewChange('add')"
        >
          <a-icon type="plus" />
          新增用户
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
            slot-scope="text, record, index"
            class="sun-paper_table-cell-flex"
          >
            {{ index + 1 }}
          </span>
          <span
            slot="action"
            slot-scope="text, record"
            class="sun-paper_table-cell-flex"
          >
            <a-button-group>
              <a-tooltip>
                <template slot="title">
                  编辑
                </template>
                <a-button
                  type="link"
                  v-action="'system:user:edit'"
                  @click="handlePageViewChange('edit', record.id)"
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
                  v-action="'system:user:del'"
                  @click="handleDelete(record.id)"
                >
                  <a-icon
                    type="delete"
                    :style="iconStyle"
                  />
                </a-button>
              </a-tooltip>
              <a-tooltip>
                <template slot="title">
                  重置密码
                </template>
                <a-button
                  type="link"
                  @click="resetPassword(record)"
                >
                  <a-icon
                    type="redo"
                    :style="iconStyle"
                  />
                </a-button>
              </a-tooltip>
            </a-button-group>
          </span>
        </a-table>
        <a-modal
          title="重置密码"
          :visible="visible"
          :confirm-loading="confirmLoading"
          @ok="handleOk"
          @cancel="handleCancel"
        >
          <a-form-model
            ref="ruleForm"
            :model="ruleForm"
            :rules="rules"
            v-bind="layout">
            <a-form-model-item
              has-feedback
              label="用户名"
            >
              <span>{{ records.userName }}</span>
            </a-form-model-item>
            <a-form-model-item
              has-feedback
              label="新密码"
              prop="password">
              <a-input
                v-model="ruleForm.password"
                type="password"
                autocomplete="off" />
            </a-form-model-item>
            <a-form-model-item
              has-feedback
              label="确认密码"
              prop="confirmPassword">
              <a-input
                v-model="ruleForm.confirmPassword"
                type="password"
                autocomplete="off" />
            </a-form-model-item>
          </a-form-model>
        </a-modal>
      </div>
    </div>
  </div>
</template>

<script>
import { tableListMixin } from '@/utils/tableListMixin'
import PageFooter from '@/components/PageFooter/PageFooter.jsx'
import { getAction } from '@/utils/request'
import { resetPass } from '@/api/system-setting'

export default {
  name: 'UserManageList',
  mixins: [tableListMixin],
  components: {
    PageFooter
  },
  data () {
    const validatePass = (rule, value, callback) => {
      const reg = /^([A-z0-9!@#$%^&*()~<>?":}{*-+./]){6,20}$/
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        if (reg.test(value)) {
          if (this.ruleForm.confirmPassword !== '') {
            this.$refs.ruleForm.validateField('confirmPassword')
          }
          callback()
        } else {
          callback(new Error('请输入6-20位密码，可包含大小写字母、数字、符号'))
        }
      }
    }
    const validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.ruleForm.password) {
        callback(new Error('两次密码不一致'))
      } else {
        callback()
      }
    }
    return {
      ruleForm: {
        password: '',
        confirmPassword: ''
      },
      ipagination: {
        current: 1,
        pageSize: 10,
        showQuickJumper: false,
        showSizeChanger: false,
        total: 0
      },
      rules: {
        password: [{ validator: validatePass, trigger: 'change', required: true }],
        confirmPassword: [{ validator: validatePass2, trigger: 'change', required: true }]
      },
      layout: {
        labelCol: { span: 4 },
        wrapperCol: { span: 14 }
      },
      records: '',
      confirmLoading: false,
      visible: false,
      iconStyle: {
        fontSize: '16px'
      },
      columns: [
        {
          title: '序号',
          dataIndex: 'index',
          scopedSlots: { customRender: 'index' },
          width: 60
        },
        {
          title: '登录账号',
          dataIndex: 'userName',
          ellipsis: true

        },
        {
          title: '角色',
          dataIndex: 'roleNames',
          ellipsis: true
        },
        {
          title: '姓名',
          dataIndex: 'realName',
          ellipsis: true
        },
        {
          title: '手机号',
          dataIndex: 'mobilePhone',
          ellipsis: true
        },
        {
          title: '邮箱',
          dataIndex: 'email',
          ellipsis: true
        },
        {
          title: '状态',
          dataIndex: 'statusName',
          ellipsis: true
        },
        {
          title: '操作',
          dataIndex: 'action',
          scopedSlots: { customRender: 'action' }
        }
      ],
      dataSource: [],
      url: {
        list: '/front/jiliang/v1/sysUser',
        delete: '/front/jiliang/v1/sysUser'
      }
    }
  },
  methods: {
    handleOk(e) {
      this.$refs.ruleForm.validate(valid => {
        if (valid) {
          this.ruleForm.id = this.records.id
          resetPass(this.ruleForm).then(res => {
            if (res.status === this.constants.SUCCESS_CODE) {
              this.confirmLoading = false
              this.handleCancel()
              this.$message.success('已重置密码')
            }
          })
        }
      })
    },
    handleCancel(e) {
      this.visible = false
      this.$refs.ruleForm.resetFields()
      // this.ruleForm = {
      //   password: '',
      //   confirmPassword: ''
      // }
    },
    resetPassword (records) {
      this.records = records
      this.visible = true
    },
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
        pageViewName: 'UserManageEdit',
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
