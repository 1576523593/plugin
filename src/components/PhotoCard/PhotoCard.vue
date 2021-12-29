<template>
  <div class="photo-card-wrapper">
    <img
      :src="src"
      alt="暂无图片">
    <div class="photo-mask">
      <a-icon
        class="icon"
        type="eye"
        @click="handleOpen"
      >
      </a-icon>
    </div>
    <a-modal
      :visible="show"
      :footer="null"
      @cancel="handleCancel"
    >
      <div :style="{ textAlign: 'center'}">
        <img
          :src="src"
          alt="暂无图片"
          :style="{width: '100%', height: '100%'}"
        >
      </div>
    </a-modal>
  </div>
</template>

<script>
export default {
  name: 'PhotoCard',
  data () {
    return {
      show: false
    }
  },
  props: {
    src: {
      required: true,
      type: String
    }
  },
  methods: {
    handleCancel () {
      this.show = false
    },
    handleOpen () {
      this.show = true
    }
  }
}
</script>

<style lang="less" scoped>
.photo-card-wrapper {
  width: 100px;
  height: auto;
  position: relative;
  box-sizing: border-box;
  width: 120px;
  height: 120px;
  padding: 9px;
  border-radius: 6px;
  border: 1px solid #d9d9d9;
  margin-right: 16px;

  >img {
    display: block;
    width: 100px;
    height: 100px;
    border-radius: 6px;
  }

  .icon {
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 10;
    white-space: nowrap;
    transform: translate(-50%,-50%);
    cursor: pointer;
    transition: all .3s;
    opacity: 0;
  }

  &:hover {

    .photo-mask {
      position: absolute;
      top: 9px;
      left: 9px;
      right: 9px;
      bottom: 9px;
      background:rgba(0, 0, 0, 0.45);
      transition: background-color .3s;

      .icon {
        opacity: 1;
        color: hsla(0,0%,100%,.85);
        font-size: 16px;
      }
    }
  }
}
</style>
