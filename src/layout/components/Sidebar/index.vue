<template>
  <div>
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        :default-active="this.$route.path"
        :background-color="variables.menuBg"
        :text-color="variables.menuText"
        :active-text-color="variables.menuActiveText"
        :collapse-transition="false"
        unique-opened
        mode="vertical"
      >
        <SidebarItem
          v-for="route in controlRoutes"
          :key="route.path"
          :item="route"
          :base-path="route.path"
        />
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
import SidebarItem from './SidebarItem'
import variables from '@/styles/variables.scss'

export default {
  components: { SidebarItem },
  computed: {
    activeMenu () {
      const route = this.$route
      const { meta, path } = route
      // if set path, the sidebar will highlight the path you set
      if (meta.activeMenu) {
        return meta.activeMenu
      }
      return path
    },
    variables () {
      return variables
    },
    controlRoutes () {
      return this.$store.getters.controlRoutes[0].children
    }
  }
}
</script>
