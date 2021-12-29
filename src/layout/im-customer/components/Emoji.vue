<template>
  <span>
    <el-popover ref="popover5" placement="top-start" width="360" v-model="showModal" trigger="click">
      <img
        v-for="(v,i) in emojiList"
        :src="require(`../../../../public/plugins/easemobs/faces/${v}`)"
        :key="i"
        @click="selectEmoji(i)"
        class="img-style"
      />
   <el-button slot="reference" :style="imgStyle" class="img_button">
     <img src="../../../assets/image/xiaolian-icon.png" style="width: 17px"/>
   </el-button>
    </el-popover>
  </span>
</template>

<script>
import emoji from '../../../config/emoji'

export default {
  data () {
    return {
      emojiList: emoji.map,
      currentEmoji: '',
      showModal: false,
      imgStyle: {
        paddingTop: '8px',
        paddingLeft: '10px',
        paddingRight: '10px',
        border: 0
        /* backgroundColor: '' */
      }
    }
  },
  methods: {
    selectEmoji (e) {
      let value = (this.inpMessage || '') + e
      this.showModal = false
      this.$emit('selectEmoji', value)
    }
  },
  props: {
    inpMessage: String
  },
  mounted () {
    // this.imgStyle.backgroundColor = '#F4F7F9'
  }
}
</script>
<style scoped>
  .img-style {
    width: 22px;
    margin: 5px;
    cursor: pointer;
  }
  /*.img-style:hover {*/
  /*  background-color: aquamarine;*/
  /*}*/
  .img_button:hover{
    background-color: #fff !important;
  }
</style>
