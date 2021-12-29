<template>
  <div class="contentUs_right">
    <h3>联系我们</h3>
    <ul>
<!--      <li>济南大陆机电股份有限公司</li>-->
      <li>山东大陆计量科技有限公司</li>
      <li>电话(1)：0531-88878657（客服）</li>
      <li>电话(2)：0531-88878673 （推广）</li>
      <li>E-mail：jiliangqiju@china-dalu.com</li>
      <li>地址：<span class="span_dz">中国济南高新开发区新泺大街786号</span></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ContactUs'
}
</script>

<style scoped lang="less">
  @import "../assets/less/common.less";
  .contentUs_right{
      @{w}: @c;
      @{bg}: white;
      @{marT}: 20px;
      @{marM}: 20px;
    padding-bottom: 17px;
    h3{
        @{marT}: 0;
        @{marM}: 8px;
        @{f}: 18px;
        @{fw}: 500;
        @{col}:#000000;
        @{hl}: 52px;
        @{padL}: 16px;
        @{bg}: white;
        @{boTom}: 1px solid #F4F4F4;
    }
    ul {
        @{padL}: 35px;
      li {
          @{lisle}: disc;
          @{f}: 14px;
          @{col}: #000000;
          @{hl}: 32px;
          @{marR}: 16px;
      }
    }
  }
</style>
