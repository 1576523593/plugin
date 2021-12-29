<template>
  <el-dialog
    title="服务平台三级授权委托书"
    :visible="visible"
    width="30%"
    @close="handleClose"
  >
    <h3>服务平台三级授权委托书</h3>
    <p>
      服务计量平台作为工业互联网仪表三级平台节点，授权企业使用本三级节点的节点注册资料代为申请虚拟企业节点，该企业不建设企业节点平台，不以自己的企业申请产品标识注册。企业节点通过注册的二级节点平台向工业互联网输入查询数据和标识数据。虚拟企业节点的识别能力与婴儿节点一样，虚拟节点完成。
    </p>
    <span slot="footer" class="dialog-footer">
      <el-button @click="handleClose">关闭</el-button>
    </span>
  </el-dialog>
</template>

<script>

export default {
  name: 'AgreeModal',
  data () {
    return {
    }
  },
  props: {
    visible: {
      default: true,
      type: Boolean
    }
  },
  created () {

  },
  methods: {
    handleClose () {
      this.$emit('update:visible', false)
    }
  }
}
</script>

<style scoped lang="less">
h3 {
  text-align: center;
}
p {
  text-indent: 2em;
  letter-spacing: 2px;
  line-height: 40px;
}
</style>
