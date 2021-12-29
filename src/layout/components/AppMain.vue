<template>
  <section
    class="app-main"
    :class="isControl ? 'control-main' : 'front-main'"
    :style="{marginTop: top}"
  >
    <slot />
    <transition
      name="fade"
    >
        <router-view></router-view>
    </transition>
  </section>
</template>

<script>
export default {
  name: 'AppMain',
  data () {
    return {
      top: '',
      show: false
    }
  },
  computed: {
    cachedViews () {
      return this.$store.state.tagsView.cachedViews
    },
    key () {
      return this.$route.fullPath
    },
    isControl () {
      return this.$store.getters.isControl
    }
  },
  mounted () {
    let route = this.$route.path
    if (route.indexOf('control') === -1 && route.indexOf('cloudServiceDetail') === -1) {
      this.show = true
    } else {
      this.show = false
    }
  },
  created () {
    const margin = ['home']
    if (this.isControl) {
      this.top = '40px'
    } else if (!this.isControl && margin.includes(this.$route.name)) {
      this.top = '0'
    } else {
      this.top = '100px'
    }
  }
}
</script>

<style scoped lang="less">
.front-main {
  /* 50= navbar  50  */
  min-height: calc(100vh - 320px);
  width: 100%;
  position: relative;
  overflow: hidden;
  background-color: #f8f8f8;
}

.control-main {
  margin-top: 40px;
  margin-left: 155px;
}
.fade-enter-active, .fade-leave-active {
  transition: all 1.5s cubic-bezier(.55, 0, .1, 1)
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
