<template>
  <el-button type="primary" icon=" " size="mini" class="reload" :disabled="disabled" @click="freshen($event)">刷新</el-button>
</template>

<script>
export default {
  name: 'turn',
  props: {
    reload: {
      require: true,
      type: Boolean
    }
  },
  data () {
    return {
      org: '',
      disabled: false
    }
  },
  watch: {
    'reload' (val) {
      if (val) {
        this.org.classList.add('el-icon-refresh-right')
        this.org.classList.add('turn')
        this.disabled = true
      } else {
        this.org.classList.remove('el-icon-refresh-right')
        this.org.classList.remove('turn')
        this.disabled = false
      }
    }
  },
  methods: {
    freshen (e) {
      this.org = e.currentTarget.firstElementChild
    }
  }
}
</script>

<style>
  .turn{
    animation:turn 0.7s linear infinite;
  }
  @keyframes turn{
    0%{-webkit-transform:rotate(0deg);}
    25%{-webkit-transform:rotate(90deg);}
    50%{-webkit-transform:rotate(180deg);}
    75%{-webkit-transform:rotate(270deg);}
    100%{-webkit-transform:rotate(360deg);}
  }

</style>
