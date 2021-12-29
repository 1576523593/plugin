<template>
  <div class="auth-manage-edit-wrapper sun-paper_container-absolute">
    <div class="sun-paper_page-content-wrapper">
      <a-card
        style="margin-bottom: 56px;"
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
            label="权限名称"
            prop="authName"
          >
            <a-input
              placeholder="请填写权限名称"
              v-model="form.authName"
            />
          </a-form-model-item>
          <a-form-model-item
            class="fixed-width-320"
            label="菜单权限"
            prop="resourceIds">
            <a-tree
              checkable
              class="dep"
              v-model="form.resourceIds"
              show-search
              multiple
              :tree-data="authSelect"
              :replaceFields="{ title: 'resourceName', value: 'id', key: 'id' }"
              :dropdown-style="{ maxHeight: '400px', overflow: 'auto' }"
              placeholder="请选择权限内容"
              allow-clear
              tree-default-expand-all
              @check="handleCheckChange"
            >
            </a-tree>
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
import { getAuthMetaData, authAction } from '@/api/system-setting'
function dedupe (array) {
 return Array.from(new Set(array))
}
function mendTransferData (rawData = [], transferData) {
  const result = []
  const initRawData = rawData
  function mapRawData (rawData, selectNodeKey) {
    rawData.forEach(item => {
      if (item.id === selectNodeKey && item.parentId) {
        result.push(item.parentId)
        selectNodeKey = item.parentId
        mapRawData(initRawData, selectNodeKey)
      }
      if (item.children && item.children.length > 0) {
        mapRawData(item.children, selectNodeKey)
      }
    })
  }
  // 遍历提交的数据
  transferData.forEach((item) => {
    mapRawData(rawData, item)
  })

  return result
}

export default {
  name: 'AuthManageEdit',
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
      resourceIds: [],
      form: {
        authName: '',
        resourceIds: undefined
      },
      rules: {
        authName: [
          { required: true, message: '请填写权限名称！' }
        ],
        resourceIds: [
          { required: true, message: '请选择权限权限！' }
        ]
      }
    }
  },
  methods: {
    handleCheckChange (checkedKeys, e) {
      this.form.resourceIds = checkedKeys
    },
    insertAuth (form) {
      authAction('add', form).then(res => {
        if (res.status === 0) {
          this.$message.success('新增成功！')
          setTimeout(() => {
            const params = {
              pageViewName: 'AuthManageList',
              type: 'list'
            }
            this.$emit('on-page-view-change', params)
          }, 500)
        } else {
          this.$message.error(res.message)
        }
      })
    },
    updateAuth (form) {
      form.id = this.id
      authAction('edit', form).then(res => {
        if (res.status === 0) {
          this.$message.success('修改成功！')
          setTimeout(() => {
            const params = {
              pageViewName: 'AuthManageList',
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
          const data = mendTransferData(this.authSelect, this.form.resourceIds)
          const resourceIds = dedupe(this.form.resourceIds.concat(data))
          const params = {
            resourceIds: resourceIds,
            authName: this.form.authName
          }
          if (this.id) {
            this.updateAuth(params)
          } else {
            this.insertAuth(params)
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
            pageViewName: 'AuthManageList',
            type: 'list'
          }
          self.$emit('on-page-view-change', params)
        }
      })
    },
    loadAuthSelect () {
      return new Promise((resolve, reject) => {
        getAuthMetaData().then(res => {
          if (res && res.status === 0) {
            this.authSelect = res.data
          }
          resolve()
        })
      })
    },
    loadFormData () {
      this.form.id = this.id
      authAction('view', this.form).then(res => {
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
  created () {
    this.loadAuthSelect().then(() => {
        if (this.id) {
        this.iniData()
      }
    })
  }
}
</script>

<style lang="less">
.auth-manage-edit-wrapper {
  .fixed-width-320 {
    width: 320px;
  }
  .fixed-width-640 {
    width: 640px
  }
}
</style>
