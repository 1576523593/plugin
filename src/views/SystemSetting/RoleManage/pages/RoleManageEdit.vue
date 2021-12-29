<template>
  <div class="role-manage-edit-wrapper sun-paper_container-absolute">
    <div class="sun-paper_page-content-wrapper">
      <a-card
        title="基础信息"
        :headStyle="headStyle"
      >
        <a-form-model
          ref="form"
          :model="form"
          :rules="rules"
          :layout="layout"
        >
          <a-form-model-item
            class="fixed-width-320"
            label="角色名称"
            prop="roleName"
          >
            <a-input
              placeholder="请填写角色名称"
              v-model="form.roleName"
            />
          </a-form-model-item>
          <a-form-model-item
            class="fixed-width-320"
            label="权限"
            prop="authIds">
            <a-select
              class="dep"
              :showSearch="false"
              v-model="form.authIds"
              placeholder="请选择权限内容"
              mode="multiple"
            >
              <a-select-option
                v-for="role in authSelect"
                :key="role.id"
                :value="role.id"
              >
                {{ role.authName }}
              </a-select-option>
            </a-select>
          </a-form-model-item>
        </a-form-model>
      </a-card>
    </div>
    <div class="sun-paper_page-operation-wrapper">
      <a-button
        size="large"
        type="default"
        @click="handleBackTo"
      >
        取消
      </a-button>
      <a-button
        size="large"
        type="primary"
        @click="submitForm"
      >
        提交
      </a-button>
    </div>
  </div>
</template>

<script>
import { getRoleSelect, getRoleInfo, roleAction } from '@/api/system-setting'

export default {
  name: 'RoleManageEdit',
  props: {
    id: {
      type: String,
      required: false,
      default: ''
    }
  },
  data () {
    return {
      headStyle: {
        'text-align': 'left'
      },
      layout: 'vertical',
      currentMenuId: '',
      dataRanges: [],
      authSelect: [],
      form: {
        roleName: '',
        authIds: undefined
      },
      rules: {
        roleName: [
          { required: true, message: '请填写角色名称！' }
        ],
        authIds: [
          { required: true, message: '请选择角色权限！' }
        ]
      }
    }
  },
  methods: {
    insertRole (form) {
      roleAction(form).then(res => {
        if (res.status === 0) {
          this.$message.success('新增成功！')
          setTimeout(() => {
            const params = {
              pageViewName: 'RoleManageList',
              type: 'list'
            }
            this.$emit('on-page-view-change', params)
          }, 500)
        } else {
          this.$message.error(res.message)
        }
      })
    },
    updateRole (form) {
      form.id = this.id
      roleAction(form).then(res => {
        if (res.status === 0) {
          this.$message.success('修改成功！')
          setTimeout(() => {
            const params = {
              pageViewName: 'RoleManageList',
              type: 'list'
            }
            this.$emit('on-page-view-change', params)
          }, 500)
        } else {
          this.$message.error(res.message)
        }
      })
    },
    submitForm () {
      this.$refs.form.validate(valid => {
        if (valid) {
          const params = {
            authIds: this.form.authIds,
            roleName: this.form.roleName
          }
          if (this.id) {
            this.updateRole(params)
          } else {
            this.insertRole(params)
          }
        }
      })
    },
    handleBackTo () {
      const self = this
      this.$confirm({
        title: '你即将离开菜单编辑页面',
        content: '离开页面会丢失当前编辑的内容，确定要离开吗？',
        onOk: function () {
          const params = {
            pageViewName: 'RoleManageList',
            type: 'list'
          }
          self.$emit('on-page-view-change', params)
        }
      })
    },
    loadRoleSelect () {
      return new Promise((resolve, reject) => {
        getRoleSelect().then(res => {
          if (res && res.status === 0) {
            this.authSelect = res.data
          }
          resolve()
        })
      })
    },
    loadFormData () {
      this.form.id = this.id
      getRoleInfo(this.form).then(res => {
        if (res.status === 0) {
          this.form = res.data
        }
      })
    },
    iniData () {
      // 请求数据
     this.loadFormData()
    }
  },
  mounted() {
    const auctionTimesCode = document.querySelector('.dep .ant-select-search__field')
    auctionTimesCode.setAttribute('readonly', 'true')
  },
  created () {
    this.loadRoleSelect().then(() => {
        if (this.id) {
        this.iniData()
      }
    })
  }
}
</script>

<style lang="less" scoped>
.role-manage-edit-wrapper {
  .fixed-width-320 {
    width: 320px;
  }
  .fixed-width-640 {
    width: 640px
  }
}
/deep/.ant-select-selection--multiple {
  cursor: pointer;
}
</style>
