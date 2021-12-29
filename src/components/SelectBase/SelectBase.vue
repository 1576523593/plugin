
<template>
  <div class="base-select">
    <a-select
      :disabled="isDisabled"
      placeholder="请选择"
      :defaultSelect="defaultSelect"
      :value="selectVal?selectVal:undefined"
      @change="select"
      v-decorator="[
        'selectVal',
        { rules: [{ required: true, message: '请选择！' }] },
      ]"
    >
      <a-select-option
        :value="ele.dataVal"
        :key="ele.id"
        v-for="ele in selectList"
      >
        {{ ele.dataName }}
      </a-select-option>
    </a-select>
  </div>
</template>
<script>
import { getDictByTypeId } from '@/api/common'
export default {
  name: 'SelectBase',
  data() {
    return {
      selectList: [],
      selectVal: '',
      disabled: false
    }
  },
  props: {
    baseType: {
      default: '',
      type: String
    },
    selectItem: {
      default: '',
      type: String
    },
    isDisabled: {
      type: Boolean,
      default: false
    },
    defaultSelect: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    getBaseInfo() {
      const that = this
      getDictByTypeId(this.baseType).then((res) => {
        const { status, data } = res
        if (status === 0) {
          that.selectList = data
        }

        if (
          this.defaultSelect &&
          (that.selectItem === undefined ||
            that.selectItem === null ||
            that.selectItem === '')
        ) {
          this.select(that.selectList[0].dataVal)
        } else {
          that.selectVal = that.selectItem
        }
      })
    },
    select(val) {
      const i = this.selectList.findIndex((ele) => {
        return ele.dataVal === val
      })
      const obj = {
        id: '',
        key: ''
      }
      if (i > -1) {
        obj.id = this.selectList[i].dataVal
        obj.key = this.selectList[i].dataName
      }
      this.$emit('onSelect', obj)
      this.selectVal = val
    }
  },
  watch: {
    selectItem(val) {
      this.selectVal = this.selectItem
    }
  },
  created() {
    this.getBaseInfo()
  }
}
</script>

<style scoped lang="less"></style>
