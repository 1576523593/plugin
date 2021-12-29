<template>
  <div class="block">
    <el-carousel trigger="click" arrow="never" :interval="30000" :style='imgStyle'>
      <el-carousel-item v-for="(item, index) in imgList" :key="index" :style='imgStyle'>
        <div class="bannerContent">
          <img :src="item.url" :style='imgStyle'>
          <a :href=item.redirect  id="bannerA" target="_blank"></a>
        </div>
      </el-carousel-item>
    </el-carousel>
    <el-row type="flex" align="middle" class="navBanner">
      <el-col>
        <el-row type="flex" align="middle" class="bannerNav">
          <el-col>
            <a href="#twoContainer" title="计量器具信息溯源">计量器具信息溯源</a>
            <span class="limitSymbol">|</span>
            <a href="#fourContainer" title="检校、交易、服务平台">检校、交易、服务平台</a>
            <span class="limitSymbol">|</span>
            <a href="#threeContainer" title="计量器具云服务">计量器具云服务</a>
            <span class="limitSymbol">|</span>
            <a href="#colorBlock_six" title="入驻单位">入驻单位</a>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Axios from 'axios'
export default {
  name: 'HomeBanner',
  data () {
    return {
      imgList: [],
      imgStyle: {
        height: ''
      }
    }
  },
  created () {
  },
  methods: {
    getBanner () {
      // 获取banner
      let params = {
        location: 1
      }
      this.api.getHomeBanners(params).then(res => {
        if (res.code === 200) {
          for (let i in res.data) {
            let bannerFiles = {
              url: res.data[i].pictureUrl,
              redirect: res.data[i].redirect
            }
            this.imgList.push(bannerFiles)
          }
        } else if (res.code === 500) {
          this.$message({
            message: res.msg,
            type: 'warning'
          })
        }
      })
    }
  },
  mounted () {
    this.imgStyle.height = window.innerWidth / 3.84 + 'px'
    window.addEventListener('resize', () => {
      this.imgStyle.height = window.innerWidth / 3.84 + 'px'
    })
    this.getBanner()
  }
}
</script>

<style scoped lang="less">
  .block{
    .el-carousel__item {
      /*height: 450px;*/
      .bannerContent {
        font-size: 14px;
        margin: 0;
        position: relative;
        img {
          width: 100%;
        }
        #bannerA{
          width:100%;
          height: 100%;
          position: absolute;
          top:0;
          left: 0;
        }
        .platform-entry{
          position: absolute;
          left: 62%;
          top: 48%;
          font-size: 18px;
          color: #FFFFFF;
          text-decoration: underline;
          text-underline-position: under;
        }
        .custom{
          position: absolute;
          left: 46%;
          top: 64%;
          width: 200px;
          height: 60px;
          text-align: center;
          line-height: 60px;
          background-size: 100% 100%;
          color: #00e546;
          font-size: 16px;
          font-weight: 450;
          background-image: url("~@/assets/image/custom.png");
        }
        .custom-pre{
          position: absolute;
          left: 46%;
          top: 64%;
          margin-left: 220px;
          width: 300px;
          height: 60px;
          text-align: center;
          line-height: 60px;
          font-weight: 450;
          font-size: 16px;
          color: #FFFFFF;
          background-size: 100% 100%;
          background-image: url("~@/assets/image/custom-pre.png");
        }
        .banner-link{
          width:100%;
          height: 100%;
          position: absolute;
          top:0;
          left: 0;
        }
      }
    }
    .el-carousel__indicators {
      bottom: 120px;
    }
    .navBanner{
      width: 100%;
      height: 25px;
      line-height: 25px;
      top: 85%;
      position: absolute;
      z-index: 2;
      .bannerNav{
        font-size: 18px;
        color: #fff;
        cursor: pointer;
        text-align: center;
        a{
          font-size: 18px;
          color: #fff;
          cursor: pointer;
          text-align: center;
          text-decoration: none;
        }
        .limitSymbol{
          padding: 0 10px;
        }
      }
    }

  }
</style>
