<template>
  <div class="sun-paper_container-absolute">
    <div class="sun-paper_page-content-wrapper">
      <a-card
        title="基础信息"
        :headStyle="headStyle"
      >
        <div class="menu-manage-edit-content">
          <a-form-model
            ref="form"
            :model="form"
            :rules="rules"
            :layout="layout"
          >
            <a-row>
              <a-col :span="7">
                <a-form-model-item
                  label="上级菜单"
                  prop="parentId"
                >
                  <a-tree-select
                    :disabled="pageType === 'edit'"
                    class="dep"
                    v-model="form.parentId"
                    :tree-data="menuDatas"
                    :replaceFields="{ title: 'resourceName', value: 'id', key: 'id' }"
                    :dropdown-style="{ maxHeight: '400px', overflow: 'auto' }"
                    placeholder="请选择上级菜单"
                    allow-clear
                    tree-default-expand-all
                  >
                  </a-tree-select>
                </a-form-model-item>
              </a-col>
              <a-col
                :span="7"
                :offset="1"
              >
                <a-form-model-item
                  label="菜单类型"
                  prop="resourceType"
                >
                  <a-select
                    v-model="form.resourceType"
                    placeholder="请选择菜单类型"
                    @change="handleResourceTypeChange"
                  >
                    <a-select-option
                      :value="menuType.dataVal"
                      v-for="menuType in menuTypes"
                      :key="menuType.id"
                    >
                      {{ menuType.dataName }}
                    </a-select-option>
                  </a-select>
                </a-form-model-item>
              </a-col>
              <a-col
                :span="7"
                :offset="1"
              >
                <a-form-model-item
                  label="菜单名称"
                  prop="resourceName"
                >
                  <a-input
                    placeholder="请填写菜单名称"
                    v-model="form.resourceName"
                  />
                </a-form-model-item>
              </a-col>
            </a-row>
            <a-row>
              <a-col :span="7">
                <a-form-model-item
                  label="排序"
                  prop="sort"
                >
                  <a-input
                    placeholder="请填写排序"
                    v-model="form.sort"
                  />
                </a-form-model-item>
              </a-col>
              <a-col
                :span="7"
                :offset="1"
              >
                <a-form-model-item
                  label="组件名称"
                  prop="componentName"
                >
                  <a-input
                    placeholder="请填写组件名称"
                    v-model="form.componentName"
                  />
                </a-form-model-item>
              </a-col>
              <a-col
                :span="7"
                :offset="1"
              >
                <a-form-model-item
                  label="路由"
                  prop="routeName"
                >
                  <a-input
                    placeholder="请填写路由"
                    v-model="form.routeName"
                  />
                </a-form-model-item>
              </a-col>
            </a-row>
            <a-row>
              <a-col :span="7">
                <a-form-model-item
                  label="URL"
                  prop="url"
                >
                  <a-input
                    placeholder="请填写URL"
                    v-model="form.url"
                  />
                </a-form-model-item>
              </a-col>
              <a-col
                :span="7"
                :offset="1"
              >
                <a-form-model-item
                  label="权限标识"
                  prop="resourceCode"
                >
                  <a-input
                    placeholder="请填写权限标识"
                    v-model="form.resourceCode"
                  />
                </a-form-model-item>
              </a-col>
            </a-row>
          </a-form-model>
        </div>
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
import { getParentMenus, menusAction } from '@/api/system-setting.js'
import { getDicData } from '@/api/equipment-manage'
export default {
  name: 'MenuManageEdit',
  data () {
    return {
      headStyle: {
        'text-align': 'left'
      },
      layout: 'vertical',
      currentMenuId: '',
      menuDatas: [],
      menuTypes: [],
      menuStatusData: [],
      form: {
        parentId: undefined,
        resourceName: '',
        resourceType: undefined,
        sort: '',
        componentName: '',
        routeName: '',
        url: '',
        resourceCode: ''
      },
      rules: {
        parentId: [
          { required: false, message: '请选择上级菜单' }
        ],
        resourceType: [
          { required: true, message: '请选择菜单类型' }
        ],
        sort: [
          { required: true, message: '请填写序号' },
          {
            message: '请输入1-6的数字',
            validator (rule, value, callback) {
              try {
                if (value) {
                  const reg = /^[1-6]{1}$/
                  if (!reg.test(value)) {
                    throw new Error('请输入1-6的数字!')
                  }
                }
              } catch (err) {
                callback(err)
                return
              }
              callback()
            }
          }
        ],
        resourceName: [
          { required: true, message: '请填写菜单名称' },
          { min: 2, max: 20, message: '菜单名称格式不正确', trigger: 'blur' }
        ],
        componentName: [
          { required: false, message: '请填写组件名称' }
        ],
        routeName: [
          { required: false, message: '请填写路由' }
        ],
        url: [
          { required: false, message: '请填写URL' }
        ],
        resourceCode: [
          { required: false, message: '请填写权限标识' }
        ]
      }
    }
  },
  props: {
    id: {
      type: String,
      default: () => {
        return ''
      }
    },
    isAddChild: {
      type: String,
      default: ''
    },
    pageType: {
      type: String,
      default: ''
    }
  },
  methods: {
    handleResourceTypeChange (value) {
      if (value === '0') {
        this.$set(this.rules.componentName[0], 'required', false)
        this.$set(this.rules.routeName[0], 'required', false)
        this.$set(this.rules.url[0], 'required', false)
        this.$set(this.rules.resourceCode[0], 'required', false)
      } else if (value === '1') {
        this.$set(this.rules.componentName[0], 'required', true)
        this.$set(this.rules.routeName[0], 'required', true)
        this.$set(this.rules.url[0], 'required', true)
        this.$set(this.rules.resourceCode[0], 'required', true)
      } else {
        this.$set(this.rules.parentId[0], 'required', true)
        this.$set(this.rules.componentName[0], 'required', false)
        this.$set(this.rules.routeName[0], 'required', false)
        this.$set(this.rules.url[0], 'required', false)
        this.$set(this.rules.resourceCode[0], 'required', true)
      }
    },
    // 获取字典下拉数据
    getMenuType () {
      getDicData(this.constants.DIC_TYPE.MENU_TYPE).then(res => {
        if (res.status === this.constants.SUCCESS_CODE) {
          this.menuTypes = res.data
        }
      })
    },
    loadParentMenus () {
      const params = {
        id: this.currentMenuId
      }
      getParentMenus(params).then((res) => {
        if (res && res.status === 0) {
          this.menuDatas = res.data
        } else {
          this.$message.error(res.message)
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
            pageViewName: 'MenuManageList',
            type: 'list'
          }
          self.$emit('on-page-view-change', params)
        }
      })
    },
    insertMenu () {
      this.form.tag = 'add'
      menusAction(this.form).then(res => {
        if (res.status === this.constants.SUCCESS_CODE) {
          this.$message.success('新增成功！')
          setTimeout(() => {
            const params = {
              pageViewName: 'MenuManageList',
              type: 'list'
            }
            this.$emit('on-page-view-change', params)
          }, 500)
        }
      })
    },
    updateMenu () {
      this.form.id = this.currentMenuId
      this.form.tag = 'update'
      menusAction(this.form).then(res => {
        if (res.status === this.constants.SUCCESS_CODE) {
          this.$message.success('已修改')
          setTimeout(() => {
            const params = {
              pageViewName: 'MenuManageList',
              type: 'list'
            }
            this.$emit('on-page-view-change', params)
          }, 500)
        }
      })
    },
    submitForm () {
      if (this.form.resourceType === '2') {
        const validateFieldsKey = ['parentId', 'sort', 'resourceCode', 'resourceName']
        const errResult = []
        this.$refs.form.validateField(validateFieldsKey, (errMsg) => {
          // 收集错误信息
          errResult.push(errMsg)
          // if (!valid) {
          //   this.toSubmit()
          // }
        })
        const isValid = errResult.every((errMsg) => !errMsg)
        if (isValid) {
          this.toSubmit()
        }
      } else {
        this.$refs.form.validate(valid => {
          if (valid) {
            this.toSubmit()
          }
        })
      }
    },
    toSubmit () {
      if (this.currentMenuId) {
        this.updateMenu()
      } else {
        this.insertMenu()
      }
    },
    loadFormData () {
      this.form.tag = 'view'
      this.form.id = this.id
      menusAction(this.form).then(res => {
        if (res.status === this.constants.SUCCESS_CODE) {
          this.form = res.data
          this.form.resourceType = this.form.resourceType.toString()
          this.handleResourceTypeChange(this.form.resourceType)
        }
      })
    },
    initMetaData () {
      return Promise.all([
        this.loadParentMenus(),
        this.getMenuType()
      ])
    },
    initData () {
      this.initMetaData().then(() => {
        if (this.currentMenuId) {
          this.loadFormData()
        }
      })
    }
  },
  mounted () {
    if (this.isAddChild) {
      this.form.parentId = this.isAddChild
    }
  },
  created () {
    this.currentMenuId = this.id
    this.initData()
  }
}
</script>
