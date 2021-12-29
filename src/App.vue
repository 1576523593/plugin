<template>
  <div id="app">
    <!-- <a-config-provider> -->
    hello world
    <RolePage></RolePage>
    <!-- <router-view/> -->
    <!-- <role-page></role-page> -->
    <!-- </a-config-provider> -->
  </div>
</template>
<script>
// eslint-disable-next-line camelcase

// import zh_CN from 'ant-design-vue/lib/locale-provider/zh_CN'
// import vshare from 'vshare'
import moment from 'moment'
import 'moment/locale/zh-cn'
moment.locale('zh-cn')
export default {
  components: {},
  data() {
    return {
      // zh_CN
    }
  }
}
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100%;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
