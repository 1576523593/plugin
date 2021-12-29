<template>
  <div class="org-manage-edit-wrapper sun-paper_container-absolute">
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
            label="上级机构"
            prop="parentId"
          >
            <a-tree-select
              :disabled="isAddChild !== ''"
              class="dep"
              v-model="form.parentId"
              :tree-data="orgSelect"
              :replaceFields="{ title: 'organizationName', value: 'id', key: 'id' }"
              :dropdown-style="{ maxHeight: '400px', overflow: 'auto' }"
              placeholder="请选择上级机构"
              allow-clear
              tree-default-expand-all
            >
            </a-tree-select>
          </a-form-model-item>
          <a-form-model-item
            class="fixed-width-320"
            label="机构名称"
            prop="organizationName"
          >
            <a-input
              placeholder="请填写机构名称"
              v-model="form.organizationName"
            />
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
import { orgAction } from '@/api/system-setting'
import { getAction } from '@/utils/request'

export default {
  name: 'OrgManageEdit',
  props: {
    id: {
      type: String,
      required: false,
      default: ''
    },
    isAddChild: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      orgSelect: [],
      headStyle: {
        'text-align': 'left'
      },
      layout: 'vertical',
      currentMenuId: '',
      OrgTypes: [],
      form: {
        organizationName: '',
        parentId: undefined
      },
      rules: {
        parentId: [
          { required: true, message: '请选择上级机构！' }
        ],
        organizationName: [
          { required: true, message: '请填写机构名称！' }
        ]
      }
    }
  },
  methods: {
    // 获取上级机构
    getOrgSelect () {
      getAction('/front/sun/v1/sysOrganization').then(res => {
        if (res.status === 0) {
          this.orgSelect = [res.data]
        } else {
          this.$message.warning(res.message)
        }
      })
    },
    insertOrg () {
      this.form.tag = 'add'
      orgAction(this.form).then(res => {
        if (res.status === 0) {
          this.$message.success('新增成功！')
          setTimeout(() => {
            const params = {
              pageViewName: 'OrgManageList',
              type: 'list'
            }
            this.$emit('on-page-view-change', params)
          }, 500)
        } else {
          this.$message.error(res.message)
        }
      })
    },
    updateOrg () {
      this.form.id = this.id
      this.form.tag = 'update'
      orgAction(this.form).then(res => {
        if (res.status === 0) {
          this.$message.success('已修改')
          setTimeout(() => {
            const params = {
              pageViewName: 'OrgManageList',
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
          if (this.id) {
            this.updateOrg()
          } else {
            this.insertOrg()
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
            pageViewName: 'OrgManageList',
            type: 'list',
            isAddChild: ''
          }
          self.$emit('on-page-view-change', params)
        }
      })
    },
    loadFormData () {
      this.form.tag = 'view'
      this.form.id = this.id
      orgAction(this.form).then(res => {
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
    if (this.isAddChild) {
      this.form.parentId = this.isAddChild
    }
  },
  created () {
    this.getOrgSelect()
    if (this.id) {
      this.iniData()
    }
  }
}
</script>

<style lang="less">
.org-manage-edit-wrapper {
  .fixed-width-320 {
    width: 320px;
  }
  .fixed-width-640 {
    width: 640px
  }
}
</style>
