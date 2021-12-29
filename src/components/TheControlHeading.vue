<template>
  <el-row type="flex" align="middle" class="contrlHeader">
    <el-col :lg="1">
      <div>
        <router-link to="/" class="logo">
          <img src="@/assets/image/header_kzt.png" alt="logo">
        </router-link>
      </div>
    </el-col>
    <el-col  :lg="18"></el-col>
    <el-col  :lg="5">
      <el-dropdown trigger="click">
        <span class="el-dropdown-link">
          {{name}}
        <i class="el-icon-arrow-down el-icon--right"></i>
       </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item @click.native="account">账户信息</el-dropdown-item>
          <el-dropdown-item @click.native="logout">退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </el-col>
  </el-row>
</template>

<script>
import axios from 'axios'
import Cookies from 'js-cookie'
export default {
  name: 'TheControlHeading',
  data: function () {
    return {
      name: ''
    }
  },
  created () {
    // this.$http(this.api.getUserInfo()).then(res => {
    //   if (res.data.code === 200) {
    //     this.name = res.data.username
    //   }
    // })
  },
  methods: {
    account () {
      // this.$http(this.api.getUserInfo()).then(res => {
      //   if (res.data.code === 200) {
      //     if (this.form.role === '检定机构') {
      //       this.$router.push('/verificationAccount')
      //     } else if (this.form.role === '运营商') {
      //       this.$router.push('/controlAccount')
      //     } else {
      //       this.$router.push('/useAccount')
      //     }
      //   }
      // })
    },
    logout () {
      // this.$http(this.api.sso()).then(res => {
      //   if (res.data.code === 200) {
      //     let userCode = res.data.userCode
      //     axios.post('http://218.57.140.130:9080/jlqj/app/user/isLogin', {
      //       params: {
      //         userCode: userCode
      //       }
      //     }).then(flag => {
      //       if (flag.data.result === true) {
      //         // 发现已登录平台
      //         this.$confirm('发现您已登录计量器具公共服务平台，登出信息网也会同步登出公共服务平台，继续吗？', '提示', {
      //           confirmButtonText: '确定',
      //           cancelButtonText: '取消',
      //           type: 'warning'
      //         }).then(() => {
      //           axios.post('http://218.57.140.130:9080/jlqj/app/user/logout', {
      //             params: {
      //               userCode: userCode
      //             }
      //           }).then(flag => {
      //             this.$http(this.api.logout()).then(res => {
      //               if (res.data.code === 200) {
      //                 Cookies.remove('userId')
      //                 Cookies.remove('token')
      //                 this.$message({
      //                   message: '登出成功，即将重新加载页面',
      //                   type: 'success'
      //                 })
      //                 setTimeout(() => {
      //                   this.$router.push('/')
      //                 }, 1000)
      //               } else if (res.data.code === 802) {
      //                 Cookies.remove('userId')
      //                 Cookies.remove('token')
      //                 this.$message({
      //                   message: '账户过期，请重新登录',
      //                   type: 'warning'
      //                 })
      //                 setTimeout(() => {
      //                   this.$router.push('/login/Index')
      //                 }, 1000)
      //               } else {
      //                 this.$alert('登出失败,点击确定重试', '提示', {
      //                   confirmButtonText: '确定',
      //                   callback: action => {
      //                     Cookies.remove('userId')
      //                     Cookies.remove('token')
      //                     this.$message({
      //                       message: '登出成功，即将重新加载页面',
      //                       type: 'success'
      //                     })
      //                     setTimeout(() => {
      //                       this.$router.push('/')
      //                     }, 1000)
      //                   }
      //                 })
      //               }
      //             })
      //           }).catch(err => {
      //             this.$message({
      //               message: err,
      //               type: 'warning'
      //             })
      //           })
      //         }).catch(() => {
      //           this.$message({
      //             type: 'info',
      //             message: '已取消登出'
      //           })
      //         })
      //       } else {
      //         // 没有登录平台
      //         this.$http(this.api.logout()).then(res => {
      //           if (res.data.code === 200) {
      //             Cookies.remove('userId')
      //             Cookies.remove('token')
      //             this.$message({
      //               message: '登出成功，即将重新加载页面',
      //               type: 'success'
      //             })
      //             setTimeout(() => {
      //               this.$router.push('/')
      //             }, 1000)
      //           } else if (res.data.code === 802) {
      //             Cookies.remove('userId')
      //             Cookies.remove('token')
      //             this.$message({
      //               message: '账户过期，请重新登录',
      //               type: 'warning'
      //             })
      //             setTimeout(() => {
      //               this.$router.push('/login/Index')
      //             }, 1000)
      //           } else {
      //             this.$alert('登出失败,点击确定重试', '提示', {
      //               confirmButtonText: '确定',
      //               callback: action => {
      //                 Cookies.remove('userId')
      //                 Cookies.remove('token')
      //                 this.$message({
      //                   message: '登出成功，即将重新加载页面',
      //                   type: 'success'
      //                 })
      //                 setTimeout(() => {
      //                   this.$router.push('/')
      //                 }, 1000)
      //               }
      //             })
      //           }
      //         })
      //       }
      //     }).catch(err => {
      //       this.$message({
      //         message: err,
      //         type: 'warning'
      //       })
      //     })
      //   }
      // })
    }
  }
}
</script>

<style scoped lang="less">
  .contrlHeader {
    height:60px;
    background-color: #0aa0f5;
    .logo {
      display: inline-block;
      text-decoration: none;
      margin-left:15px;
    }
    img {
      margin-top:6px;
      height: 30px;
    }
    .el-dropdown-link{
      font-size: 16px;
      color: #ffffff;
      text-align: center;
    }
    .el-dropdown-menu{
      width: 100% !important;
    }
  }
</style>
