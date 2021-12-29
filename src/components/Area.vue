<template>
  <el-row type="flex">
    <el-col :span="24">
      <el-cascader
        placeholder="请选择单位所在地"
        :options="options"
        v-model="selectedOptions"
        expand-trigger="hover"
        :change-on-select="changeOnSelect"
        clearable
        :props="props"
        @change="handleChange"
        :disabled="isformDisabled"
        ref="cascaderArea"></el-cascader>
    </el-col>
  </el-row>
</template>

<script>
export default {
  props: {
    selectAreaCode: {
      type: String,
      default: '',
      required: true
    },
    changeOnSelect: {
      type: Boolean,
      default: false
    },
    isformDisabled: {
      type: Boolean,
      default: false
    },
    selectAreaLabels: {
      type: Array
    }
  },
  data () {
    return {
      options: [{
        areaCode: '',
        areaName: '',
        children: []
      }],
      selectedOptions: [],
      selectedLabels: [],
      props: {
        value: 'areaCode',
        label: 'areaName',
        children: 'childens'
      }
    }
  },
  watch: {
    selectAreaCode (newValue) {
      if (newValue === '') {
        this.selectedOptions = []
      }
    }
  },
  created () {
    this.load()
  },
  methods: {
    load () {
      this.api.getArea().then(res => {
        this.options = res.data
        if (this.selectAreaCode !== '') {
          switch (this.selectAreaCode.length) {
            case 2:
              this.selectedOptions.push(this.selectAreaCode)
              break
            case 4:
              this.selectedOptions.push(this.selectAreaCode.slice(0, 2))
              this.selectedOptions.push(this.selectAreaCode)
              break
            case 6:
              this.selectedOptions.push(this.selectAreaCode.slice(0, 2))
              this.selectedOptions.push(this.selectAreaCode.slice(0, 4))
              this.selectedOptions.push(this.selectAreaCode)
              break
            default:
              break
          }
        }
      })
    },
    handleChange (val) {
      if (val.length !== 0) {
        const currentActiveArray = this.$refs['cascaderArea'].panel.getNodeByValue(val)
        this.selectedLabels = []
        for (let area of currentActiveArray.pathLabels) {
          this.selectedLabels.push(area)
        }
      }
      this.syncData()
    },
    syncData () {
      this.$emit('update:selectAreaCode', this.selectedOptionsMaxIndex === -1 ? ''
        : this.selectedOptions[this.selectedOptionsMaxIndex])
      this.$emit('update:selectAreaLabels', this.selectedOptionsMaxIndex === -1 ? []
        : this.selectedLabels)
    }
  },
  computed: {
    selectedOptionsMaxIndex () {
      return this.selectedOptions.length - 1
    }
  }
}
</script>

<style scoped>
  .el-cascader {
    width: 100%;
  }
</style>
