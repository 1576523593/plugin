<template>
  <div class="app-wrapper" :style="wrapperStyle" v-title data-title="计量服务平台">
    <el-row type="flex" align="middle" class="header-container">
      <el-col class="left-container" :span="3">
        <router-link to="" class="logo">
          <img src="@/assets/image/logo_new.png" alt="logo" style="width: 532px;height: 26px">
        </router-link>
      </el-col>
    </el-row>
    <div class="login-main-container">
      <div class="bg0 pa">
        <div class="bg1"></div>
      </div>
      <div class="hx-box pa">
        <ul class="pr">
          <li class="hx-k1 pa0">
            <span></span>
          </li>
          <li class="hx-k2 pa0">
            <span></span>
          </li>
          <li class="hx-k3 pa0">
            <span></span>
          </li>
        </ul>
      </div>
      <div class="login-form">
        <div class="title">操作成功</div>
        <div class="title_time">{{second}} 秒后关闭此页面</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: '',
  data () {
    return {
      second: 5,
      wrapperStyle: {
        height: window.innerHeight + 'px'
      }
    }
  },
  mounted: function () {
    // TODO 只要push到此组件后，该监听会一直存在，无论后续跳转至哪个组件
    window.onresize = () => {
      this.wrapperStyle.height = window.innerHeight + 'px'
    }
    let interval = setInterval(() => {
      this.second--
      if (this.second === 0) {
        clearInterval(interval)
        window.close()
      }
    }, 1000)
  }
}
</script>
<style scoped lang="less">
  @import "../assets/less/lib.css";
  @import "../assets/less/tabries.css";
  @import "../assets/less/common.less";
  .app-wrapper {
      @{w}: @c;
      @{ove}: hidden;
      @{bgI}: -webkit-linear-gradient(90deg, #0aa0f5 0%, #0aa0f5 35%, #3575de 75%, #3575de 100%);
      @{bgI}: -moz-linear-gradient(90deg, #0aa0f5 0%, #0aa0f5 35%, #3575de 75%, #3575de 100%);
      @{bgI}: -ms-linear-gradient(90deg, #0aa0f5 0%, #0aa0f5 35%, #3575de 75%, #3575de 100%);
      @{bgI}: linear-gradient(0deg, #0aa0f5 0%, #0aa0f5 35%, #3575de 75%, #3575de 100%);
    perspective: 1000px;
      @{pos}: relative;
    .header-container {
      font-size: 14px;
      height:40px;
      color: #ffffff !important;
        @{bg}:rgba(225,225,225,0.1);
        @{boTom}: 1px solid rgba(225,225,225,0.3);

      .left-container {
        .logo {
          display: inline-block;
          text-decoration: none;
          margin-left:30px;
        }
        img {
          margin-top:6px;
          height: 30px;
        }
      }

      .right-container{

        .home{
          float: right;
          padding: 6px 15px;

          a {
            color: #ffffff;
            display: inline-block;
            text-decoration: none;
            cursor: pointer;
          }
        }

        .el-dropdown-link{
          font-size: 14px;
          color: #ffffff;
          text-align: center;
          &:hover{
            cursor: pointer;
          }
        }
      }

      .el-dropdown-menu{
        width: 100% !important;
      }
    }
    .login-form{
        @{w}: 430px;
        @{h}: auto;
        @{pos}: absolute;
        @{t}: 30%;
        @{r}: 9%;
        @{pad}: 24px;
      .title{
          @{w}: 100%;
          @{h}: 40px;
          @{hl}: 40px;
          @{f}: 18px;
          @{col}: #fff;
          @{teAli}: center;
      }
      .title_time{
          @{w}: 100%;
          @{h}: 40px;
          @{hl}: 40px;
          @{f}: 18px;
          @{col}: #fff;
          @{teAli}: center;
      }
      form{
          @{marT}: 20px !important;
        .login-button{
            @{w}: @c;
        }
      }
      .prompt{
          @{ove}: hidden;
        .register,.password{
          float: right;
            @{f}: 12px;
            @{col}: #aaa;
        }
        .password{
            @{marR}: 16px;
          &:hover{
            cursor: pointer;
          }
        }
      }
    }
  }
</style>
