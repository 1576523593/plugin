<template>
  <el-row type="flex" class="footer">
    <el-col :span="4"></el-col>
    <el-col :span="20">
      <div id="footer">
        <div class="footer_center">
          <div class="footer_bottom">
            <p class="pb">
<!--              <span class="pb_1">主办单位：济南大陆机电股份有限公司</span>-->
              <span class="pb_1">主办单位：山东大陆计量科技有限公司</span>
              <span>中国计量协会能源计控工作委员会</span>
             <!-- <span>济南大陆机电股份有限公司</span>-->
              <span>版权所有</span>
              <span><a target="_blank" href="http://www.beian.miit.gov.cn/" title="鲁ICP备05011406号-5" rel="nofollow">鲁ICP备05011406号-5</a></span>
            </p>
            <div style="width: 100%;float: left"></div>
            <div class="pc">
            <div>
              <span class="pb_2">承办单位：山东大陆计量科技有限公司</span>
              <span class="pb_3">电话：400-8531-178</span>
              <span class="pb_4">联系地址：中国济南高新开发区新泺大街786号</span>
              <span v-if="this.domian">贵阳市观山湖区德福中心</span>
            </div>
            <div v-if="this.domian">
              <span class="casicloud">贵州航天云网科技有限公司</span>
              <span class="pb_3">电话：400-0636-007</span>
            </div>
            <br>
          </div>
            <div style="width: 100%;float: left"></div>
            <!--友情链接-->
            <div class="pb">
              <span>友情链接：<a target="_blank" href="https://www.cosmoplat.com/" class="catenate" title="卡奥斯工业互联网平台">卡奥斯工业互联网平台</a></span>
              <span><a target="_blank" href="https://market.cosmoplat.com/" class="catenate" title="工业互联网应用市场">工业互联网应用市场</a></span>
            </div>
            <a href="http://www.jiliangqiju.cn/informationDetails/6844d2363e84470eb28c2bb9f3a47c37" title="license" class="license_img">
              <img src="@/assets/image/gsss.jpg" alt="">
            </a>
            <p class="pc bottom">
               <span>
                 <a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=37010202001115" title="备案号">
                  <img src="@/assets/image/gongan.png" alt="">
                   <span class="record_code">鲁公网安备 37010202001115号 </span>
                 </a>
               </span>
            </p>
          </div>
        </div>
      </div>
    </el-col>
  </el-row>

</template>

<script>
export default {
  name: 'Footer',
  computed: {
    domian () {
      let host = window.location.host
      return host === this.constants.DOMAIN
    }
  }
}
</script>

<style scoped lang="less">
  .footer{
    width: 100%;
    background-color: #3c4458;
    #footer{
      width: 100%;
      /*min-width: 760px;*/
      background-color: #3c4458;
      .footer_center{
        //width: 90%;
        margin: 0 auto;
        .footer_bottom{
          display: block;
          margin-top: 16px;
          .pb{
            height: 20px;
            line-height: 20px;
            padding: 0;
            span{
              margin-right: 18px;
              line-height: 20px;
              margin-bottom: 15px;
              padding: 0;
            }
            .catenate{
              text-decoration: underline;
              &:hover{
                color: #1e6abc;
              }
            }
          }
          .license_img{
            width: 174px;
            display: block;
            margin-top: 30px;
          }
          .pc{
            height: 20px;
            line-height: 20px;
            padding: 0;
            div{
              float: left;
              &:nth-child(2){
                margin-left: 70px;
              }
            }
            span{
              height: 20px;
              line-height: 20px;
              margin-right: 18px;
              display: block;
              float: left;
              margin-bottom: 15px;
              padding: 0;
              img{
                margin-top: -1px;
              }
              .record_code{
                float: right;
                margin-left: 12px;
              }
            }
          }
          .pc.bottom{
            margin-block-start: 8px;
          }
          span,a{
            font-size: 14px;
            color: #afb4c0;
          }
          @media screen and (max-width: 992px){
            span,a{
              font-size: 12px;
              margin: 0;
            }
          }
          a{
            text-decoration: none;
          }
        }
      }
    }
  }
</style>
