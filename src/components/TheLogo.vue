<template>
  <div class="logo">
    <img src="@/assets/image/guanggao.png">
  </div>
</template>

<script>
export default {
  name: 'TheLogo'
}
</script>

<style scoped lang="less">
  .logo{
    width: 100%;
    height: 0;
    padding-bottom: 50%;
    position: relative;
    overflow: hidden;
    margin: 20px 0;
    img{
      position: absolute;
      display: block;
      width: 100%;
      height: 100%;
    }
  }
</style>
