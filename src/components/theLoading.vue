<template>
  <div id="content" :style="wrapperStyle">
    <el-row type="flex" align="middle">
      <el-col :xl="9" :lg="9" :md="8" :sm="7" :xs="3">&nbsp;</el-col>
      <el-col :xl="6" :lg="6" :md="8" :sm="10" :xs="18" class="imgContent">
        <img id="imgGif" :src="imgGif" v-if="show===true">
        <div class="progress">
          <el-progress :text-inside="true" :stroke-width="12" :percentage="progressNum" status="success" color="#0aa0f5">
          </el-progress>
        </div>
      </el-col>
      <el-col :xl="9" :lg="9" :md="8" :sm="7" :xs="3" ></el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'theLoading',
  data () {
    return {
      imgGif: require('@/assets/image/loading_new.gif'),
      progressNum: 0,
      wrapperStyle: {
        height: window.innerHeight + 'px'
      },
      show: true
    }
  },
  props: {
    loadingTime: {
      require: true,
      type: Number
    }
  },
  methods: {
    startProgress () {
      // 定义定时器开始时间为0
      let progressnuw = 0
      // 顶一个定时器
      let timer = setInterval(() => {
        // 变量一直++
        progressnuw += 10
        // 清楚定时器
        if (progressnuw >= 100) {
          clearInterval(timer)
        }
        // 获取重新赋值
        this.progressNum = progressnuw
      }, this.loadingTime / 15)
    }
  },
  mounted () {
    window.onresize = () => {
      this.wrapperStyle.height = window.innerHeight + 'px'
    }
    let imgDL = document.getElementById('imgGif')
    let windowHeight = window.innerHeight
    imgDL.style.marginTop = windowHeight * 0.35 + 'px'
    this.startProgress()
    // 跳转控制台时，全屏展示
    var contentStyle = document.getElementById('content')
    if (this.$store.state.loadingControl === true) {
      contentStyle.style.zIndex = '9999'
    }
    setTimeout(() => {
      this.$nextTick(() => {
        this.show = false
      })
    }, this.loadingTime + 20)
  }
}
</script>

<style scoped lang="less">
#content{
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9;
  background-color: #fff;
  .imgContent{
    text-align: center;
    .progress{
      width: 300px;
      margin: -10px auto;
      /deep/.el-progress{
        /deep/.el-progress-bar{
          /deep/.el-progress-bar__outer{
            /deep/ .el-progress-bar__inner{
              line-height: 12px;
            }
          }
        }
      }
    }
  }
}
</style>
