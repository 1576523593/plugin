<template>
  <div class="doyoo_pan_icon">
    <div class="doyoo_pan_left_d" v-if="isShows" @click="see"
    >
      <el-badge :value=unMessages v-if="noRead" class="noNews">
        <img :src="bgLeftD" style="width: 35px" alt="im">
      </el-badge>
      <img :src="bgLeftD" v-else  style="width: 35px" alt="im">
    </div>
    <div class="doyoo_pan_icon_r" v-else>
      <div class="doyoo_pan_right" @click="imCustomer()"
      >
        <img :src="bgRight" alt="im">
      </div>
      <im-customer v-if="imConfig.visible"
                   :visible.sync="imConfig.visible"></im-customer>
      <div class="doyoo_pan_left" @click="see">
        <el-badge :value=unMessages v-if="noRead">
        <img :src="bgLeft" alt="im" style="width: 35px">
        </el-badge>
        <img :src="bgLeft"  v-else style="width: 35px" alt="im">
      </div>
    </div>
  </div><!--在线联系-->
</template>

<script>
import bgLefts from '@/assets/image/icon_right.png'
import bgLeftsD from '@/assets/image/icon_left.png'
import bgRights from '@/assets/image/contry.png'
import imCustomer from './im-customer/index'
import { mapGetters } from 'vuex'
import storage from '@/utils/sessionStorage'
export default {
  name: 'customerService',
  components: {
    imCustomer
  },
  data () {
    return {
      isShows: true,
      bgLeftD: bgLeftsD,
      bgLeft: bgLefts,
      bgRight: bgRights,
      imConfig: {
        visible: false
      },
      noRead: false,
      unMessages: 0
    }
  },
  computed: {
    // 聊天数据
    noAdminInfo () {
      return this.GET_IM_CHART_DIALOG_UN_READ_LENGTH(storage.getItem('imAdminInfo')) || ''
    },
    // 聊天数据
    charts () {
      return this.GET_IM_CHART_DIALOG_GROUP_MESSAGE(storage.getItem('imAdminInfo')) || []
    },
    handleNum () {
      return this.GET_IM_CHART_ADMIN_UN_READ_LENGTH || ''
    },
    ...mapGetters({
      GET_IM_CHART_DIALOG_GROUP_MESSAGE: 'GET_IM_CHART_DIALOG_GROUP_MESSAGE',
      GET_IM_CHART_DIALOG_UN_READ_LENGTH: 'GET_IM_CHART_DIALOG_UN_READ_LENGTH',
      GET_IM_CHART_ADMIN_UN_READ_LENGTH: 'GET_IM_CHART_ADMIN_UN_READ_LENGTH'
    })
  },
  watch: {
    'imConfig.visible' (newVal) {
      if (!newVal) {
        this.noRead = false
      } else {
        this.GET_IM_CHART_DIALOG_GROUP_MESSAGE(storage.getItem('imAdminInfo')).forEach(item => {
          item.isRead = true
        })
      }
    },
    noAdminInfo (val, oldVal) {
      if (val > 0) {
        this.unMessages = val
        this.noRead = true
      } else {
        this.noRead = false
      }
    },
    charts (val, oldVal) {
    },
    handleNum (val) {
      if (val > 0) {
        this.unMessages = val
        this.noRead = true
      } else {
        this.noRead = false
      }
    }
  },
  methods: {
    see () {
      // 在线咨询
      this.isShows = !this.isShows
    },
    imCustomer () {
      this.imConfig.visible = true
    }
  },
  mounted () {
    if (this.GET_IM_CHART_DIALOG_UN_READ_LENGTH(storage.getItem('imAdminInfo')) > 0) {
      this.unMessages = this.GET_IM_CHART_DIALOG_UN_READ_LENGTH(storage.getItem('imAdminInfo'))
      this.noRead = true
    }
  }
}
</script>

<style scoped lang="less">
  .doyoo_pan_icon {
    position: fixed;
    top: 200px;
    right: 1px;
    /*width: 136px;*/
    height: 345px;
    z-index: 999;

  .doyoo_pan_icon_r {
    width: 145px;
    height: 100%;

  .doyoo_pan_right {
    width: 109px;
    height: 100%;
    float: right;
    background-repeat: no-repeat;
    background-position: center;
  }

  .doyoo_pan_left {
    width: 35px;
   // height: 81px;
    margin-top: 160px;
    float: right;
    background-repeat: no-repeat;
    background-position: center;
  }
  }

  .doyoo_pan_left_d {
    /*width: 27px;*/
    /*height: 81px;*/
    margin-top: 160px;
    float: right;
    background-repeat: no-repeat;
    background-position: center;
  }

  &:hover {
     cursor: pointer;
   }
  }
  .noNews{
    :nth-child(2){
      right: 17px !important;
    }
  }
</style>
