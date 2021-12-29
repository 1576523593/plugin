<template>
  <div class="upload-container">
    <el-button :style="{background:color,borderColor:color}" icon="el-icon-upload" size="mini" type="primary" @click=" dialogVisible=true">上传图片
    </el-button>
    <el-dialog :visible.sync="dialogVisible" :append-to-body="appendToBody">
      <el-upload
        :multiple="true"
        :file-list="fileList"
        :show-file-list="true"
        :on-remove="handleRemove"
        :on-success="handleSuccess"
        :http-request="upload"
        class="editor-slide-upload"
        :before-upload="beforeAvatarUpload"
        action=""
        list-type="picture-card">
        <el-button size="small" type="primary">点击上传</el-button>
      </el-upload>
      <div
        slot="footer"
        class="dialog-footer"
      >
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="handleSubmit">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
// import { getToken } from 'api/qiniu'

export default {
  name: 'EditorSlideUpload',
  props: {
    editorUUID: {
      type: String,
      required: true
    },
    color: {
      type: String,
      default: '#1890ff'
    },
    appendToBody: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      dialogVisible: false,
      listObj: {},
      fileList: []
    }
  },
  methods: {
    beforeAvatarUpload (file) {
      const isJPG = file.type === 'image/jpeg' || file.type === 'image/png' || file.type === 'image/jpg' || file.type === 'image/bmp' || file.type === 'image/gif' || file.type === 'image/webp'
      const isLt2M = file.size / 1024 / 1024 < 5
      if (!isJPG) {
        this.$message.error('只能上传jpg、jpeg、png、gif、webp及bmp格式文件，且不超过5MB')
      }
      if (!isLt2M) {
        this.$message.error('上传图片大小不能超过 5MB!')
      }
      return isJPG && isLt2M
    },
    checkAllSuccess () {
      return Object.keys(this.listObj).every(item => this.listObj[item].hasSuccess)
    },
    handleSubmit () {
      // 获取所有图片的对象数组
      const arr = Object.keys(this.listObj).map(v => this.listObj[v])
      // 判断图片是否都全部上传成功
      if (!this.checkAllSuccess()) {
        this.$message('请等待所有图片上传成功，如因网络原因上传失败，请刷新页面重新上传！')
        return
      }
      // 上传成功的图片对象数组传递给父组件（Editor）组件
      this.$emit('successCBK', arr)
      // 清空图片集合
      this.listObj = {}
      // 清空文件集合
      this.fileList = []
      // 关闭对话框
      this.dialogVisible = false
    },
    handleSuccess (response, file) {
      const uid = file.uid
      const objKeyArr = Object.keys(this.listObj)
      for (let i = 0, len = objKeyArr.length; i < len; i++) {
        if (this.listObj[objKeyArr[i]].uid === uid) {
          this.listObj[objKeyArr[i]].url = response.data.url
          this.listObj[objKeyArr[i]].name = response.data.fileName
          this.listObj[objKeyArr[i]].hasSuccess = true
          return
        }
      }
    },
    handleRemove (file) {
      const uid = file.uid
      const objKeyArr = Object.keys(this.listObj)
      for (let i = 0, len = objKeyArr.length; i < len; i++) {
        if (this.listObj[objKeyArr[i]].uid === uid) {
          let formData = new FormData()
          formData.append('filesName', this.listObj[objKeyArr[i]].name)
          formData.append('fk', this.editorUUID)
          this.api.deleteAttachment(formData).then(res => {
            let SUCCESS_CODE = 200
            if (res.data.code === SUCCESS_CODE) {
              this.$message.success(res.msg)
              return true
            } else {
              this.$message.error(res.msg)
              return false
            }
          })
          delete this.listObj[objKeyArr[i]]
          return
        }
      }
    },
    upload (options) {
      let file = options.file
      let formData = new FormData()
      formData.append('attachment', file)
      formData.append('fk', this.editorUUID)
      this.api.uploadAttachment(formData).then(res => {
        let SUCCESS_CODE = 200
        if (res.code === SUCCESS_CODE) {
          const _self = this
          const _URL = window.URL || window.webkitURL
          const fileName = file.uid
          this.listObj[fileName] = {}
          const img = new Image()
          img.src = _URL.createObjectURL(file)
          img.onload = function () {
            _self.listObj[fileName] = { hasSuccess: false, uid: file.uid, width: this.width, height: this.height }
            _self.$message.success('上传成功')
            // 调用element组件封装好的上传成功方法，让组件继续做上传成功后的操作
            options.onSuccess(res)
          }
        } else {
          this.$message.error(res.msg)
          // 调用element组件封装好的上传失败方法，让组件继续做上传失败后的操作
          options.onError(res)
        }
      }, err => {
        options.onError(err)
      })
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="less" scoped>
.editor-slide-upload {
  margin-bottom: 20px;
  /deep/ .el-upload--picture-card {
    width: 100%;
  }
}
</style>
