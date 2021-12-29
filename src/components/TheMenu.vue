<template>
  <div class="menu">
    <el-row type="flex" justify="center">
      <el-col :lg="24" id="el-col-color">
        <el-menu :default-active="$route.path" class="el-menu-demo" mode="horizontal"
                 active-text-color="#1fb2fc" :router="true">
          <el-menu-item index="/">首页</el-menu-item>
          <el-menu-item index="/calibrationCloud/index">检定校准云服务</el-menu-item>
          <el-menu-item index="/demandMarket/index">需求市场</el-menu-item>
          <el-menu-item index="/strongRecord/Index">强检备案云服务</el-menu-item>
          <el-menu-item index="/laboratoryCloud/Index">实验室云服务</el-menu-item>
          <el-menu-item index="/appliancesMall/Index">器具商城</el-menu-item>
          <el-menu-item index="/estimate/Index">计量数据云服务</el-menu-item>
          <el-menu-item index="/wto/Index">计量行业WTO/TBT专栏</el-menu-item>
          <el-menu-item index="/informationCenter/Index">信息中心</el-menu-item>
          <el-menu-item index="/integrityMeasurement/Index">诚信计量</el-menu-item>
          <el-menu-item index="/kamiUnion/Index">入驻单位</el-menu-item>
          <el-menu-item index="/cooperationAgency/Index">合作机构</el-menu-item>
          <el-menu-item index="/serviceCenter/Index">服务中心</el-menu-item>
          <el-menu-item index="/aboutUs/Index">关于我们</el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'TheMenu',
  data () {
    return {}
  }
}
</script>

<style scoped lang="less">
  .el-menu{
    background-color: #324369;
    border-bottom: 1px solid rgba(225, 225, 225, 0.3);
    padding-left: 10px;
    height: 100%;
    .el-menu-item{
      background-color: #324369 !important;
      padding-left: 10px;
      padding-right: 10px;
      color: white;
      &:hover{
        color: #1fb2fc;
      }
    }
  }
</style>
